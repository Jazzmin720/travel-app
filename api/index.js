import axios from 'axios';
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

  
  
export const getPlacesData = async (sw, ne) => {
    try{
        const {data:{data}} = await axios.get(URL, {
    
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              open_now: 'false',
            },
            headers: {
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
              'X-RapidAPI-Key': '499d2a90femsh47cae38d8902450p1f9929jsn402563ea2ebd'
            }
          });
        return data;
    } catch (error) {
        console.log(error)
    }
}
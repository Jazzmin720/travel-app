import axios from 'axios';


  
  
export const getPlacesData = async (type,sw, ne) => {
    try{
        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
    
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              open_now: 'false',
            },
            headers: {
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
              'X-RapidAPI-Key': '8d3a5749famsh6aeb25b6013b858p13a9e2jsn9ba67e9c2702'
            }
          });
        return data;
    } catch (error) {
        console.log(error)
    }
}
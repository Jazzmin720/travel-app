import React from 'react';
import {CssBaseline, Grid} from '@material-ui/core';
import Header from './components/header/header';
import List from './components/list/list';
import Map from './components/map/map';

const App = () => {
    return(
        <div>
            <CssBaseline />
            <Header />
            <Grid container spacing = {3} style={{width:'100'}}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
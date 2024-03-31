import React from 'react';
import {Filter} from '../filter/Filter';
import {FoundationFeed} from "./containers/FoundationFeed";
import {Grid} from "@mui/material";


function FoundationPage () {

    return (<Grid container spacing={2} paddingTop={10}>
        <Grid item xs={3}>
            <Filter />
        </Grid>
        <Grid item xs={9}>
            <FoundationFeed/>
        </Grid>
    </Grid>

)}

export default FoundationPage;

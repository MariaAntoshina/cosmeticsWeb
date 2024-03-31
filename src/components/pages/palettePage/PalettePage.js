import React from 'react';
import {Grid} from '@mui/material';
import {Filter} from "./containers/Filter";
import {PaletteFeed} from "./containers/PaletteFeed";

function PalettePage() {

    return (
        <Grid container spacing={2} paddingTop={10}>
            <Grid item xs={3}>
                <Filter />
            </Grid>
            <Grid item xs={9}>
                <PaletteFeed/>
            </Grid>
        </Grid>

        )

}

export default PalettePage;
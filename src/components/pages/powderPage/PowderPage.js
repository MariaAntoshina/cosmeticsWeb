import React from 'react';
import {Grid} from '@mui/material';
import {Filter} from "./containers/Filter";
import {PowderFeed} from "./containers/PowderFeed";

function PowderPage() {

    return (
        <Grid container spacing={2} paddingTop={10}>
            <Grid item xs={3}>
                <Filter />
            </Grid>
            <Grid item xs={9}>
                <PowderFeed/>
            </Grid>
        </Grid>

    )

}

export default PowderPage;
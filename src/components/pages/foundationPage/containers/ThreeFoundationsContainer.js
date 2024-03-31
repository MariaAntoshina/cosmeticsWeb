import {Grid} from "@mui/material";
import {FoundationBox} from "./FoundationBox";

export const ThreeFoundationsContainer = ({threeFoundationsArray, onDelete}) => {

    return (

        <Grid container spacing={2} paddingBottom={4}>

            {threeFoundationsArray.map(i => {

                return <Grid item xs={4}>
                    <FoundationBox
                        name={i.name}
                        description={i.description}
                        image={i.image}
                        price={i.price}
                        id={i.id}
                        onDelete={onDelete}
                    />
                </Grid>
            })}
        </Grid>
    );
};
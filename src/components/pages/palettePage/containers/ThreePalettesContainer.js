import {Grid} from "@mui/material";
import {PaletteBox} from "./PaletteBox";

const ThreePalettesContainer = ({threePalettesArray, onDelete}) => {

    return (

        <Grid container spacing={2} paddingBottom={4}>

            {threePalettesArray.map(i => {

                return <Grid item xs={4}>
                    <PaletteBox
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

export default ThreePalettesContainer;
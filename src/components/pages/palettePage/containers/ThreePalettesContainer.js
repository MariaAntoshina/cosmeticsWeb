import {Grid} from "@mui/material";
import {PaletteBox} from "./PaletteBox";

const ThreePalettesContainer = ({threePalettesArray, onDelete, handleEdit}) => {

    return (

        <Grid container spacing={2} paddingBottom={4}>

            {threePalettesArray.map(i => {

                return <Grid item xs={4} key={i.id}>
                    <PaletteBox
                        name={i.name}
                        description={i.description}
                        image={i.image}
                        price={i.price}
                        id={i.id}
                        tags ={i.tags ? i.tags : []}
                        onDelete={onDelete}
                        handleEdit={handleEdit}
                    />
                </Grid>
            })}
        </Grid>
    );
};

export default ThreePalettesContainer;
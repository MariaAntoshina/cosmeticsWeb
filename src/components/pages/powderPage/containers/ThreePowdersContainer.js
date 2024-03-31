import {Grid} from "@mui/material";
import {PowderBox} from "./PowderBox";

const ThreePowdersContainer = ({threePowdersArray, onDelete}) => {

    return (

        <Grid container spacing={2} paddingBottom={4}>

            {threePowdersArray.map(i => {

                return <Grid item xs={4}>
                    <PowderBox
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

export default ThreePowdersContainer;

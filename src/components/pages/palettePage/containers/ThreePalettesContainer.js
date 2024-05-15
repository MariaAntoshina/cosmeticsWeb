import {Grid} from "@mui/material";
import {PaletteBox} from "./PaletteBox";
import popupDialog from "../ConfirmationPopupDialog";
import ConfirmationPopupDialog from "../ConfirmationPopupDialog";
import React, {useEffect} from "react";

const ThreePalettesContainer = ({threePalettesArray, popupDeleteDialog, handleEdit, onDelete}) => {
    useEffect(() => {
        console.log(threePalettesArray)
    }, [threePalettesArray]);

    return (

        <Grid  container spacing={2} mb={2} paddingBottom={4} style={{borderBottom: 'solid', borderColor: '#C0C0C0'}}>

            {threePalettesArray.map((i, k) => {
                return <Grid  item xs={4} key={k}>
                    <PaletteBox
                        brand = { i.brand }
                        name={i.name}
                        description={i.description}
                        image={i.image}
                        rating = {i.rating}
                        price={i.price}
                        id={i.id}
                        tags ={i.tags ? i.tags : []}
                        onDelete={onDelete}
                        handleEdit={handleEdit}
                        popupDeleteDialog={popupDeleteDialog}
                    />
                </Grid>
            })}
        </Grid>
    );
};

export default ThreePalettesContainer;
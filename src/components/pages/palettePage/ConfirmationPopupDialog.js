import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

function ConfirmationPopupDialog ({handlePopupConfirmationDialog, open, onDelete, id}) {


    return (

            <Dialog open={open} onClose={handlePopupConfirmationDialog}>
                <DialogTitle></DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this item?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        onDelete(id)
                        handlePopupConfirmationDialog(null)
                    }}>Yes</Button>
                    <Button onClick={() => handlePopupConfirmationDialog(null)} >No</Button>

                </DialogActions>
            </Dialog>


                    )
}

export default ConfirmationPopupDialog;
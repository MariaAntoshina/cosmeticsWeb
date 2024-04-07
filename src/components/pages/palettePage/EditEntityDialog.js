import React, {useEffect, useState} from 'react';
import {TextField, Button, DialogTitle, DialogContentText, Dialog, DialogContent} from '@mui/material';
import {useEditDataMutation} from "../../../api/paltteApi";

function EditEntityDialog({initialData, setUpdateDialogOpened, open}) {
    const [editData] = useEditDataMutation();

    const [newData, setNewData] = useState({name: "", description: "", price: "", image: ""});// еще раз обсудить фигурные скобки

//здесь получается, что initialData меняется, мы записываем в setNewData новые измененные данные?
    useEffect(() => {
        setNewData(initialData ? initialData : {})
    }, [initialData]);

    const handleInputChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        let updatedNewData = {...newData};

        updatedNewData[name] = value;
        setNewData(updatedNewData);
    };

    const handleEdit = () => {
        editData(newData);
        setUpdateDialogOpened(!open)
    }

    return (
        <Dialog open={open}>
            <DialogTitle>Create New Entity</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please fill out the details of the new entity.
                </DialogContentText>
                <TextField
                    label="Name"
                    margin="dense"
                    name="name"
                    value={newData.name}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    label="Description"
                    margin="dense"
                    name="description"
                    value={newData.description}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    label="Price"
                    margin="dense"
                    name="price"
                    type="number"
                    value={newData.price}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    label="Image URL"
                    margin="dense"
                    name="image"
                    value={newData.image}
                    onChange={handleInputChange}
                    fullWidth
                />
                <Button onClick={handleEdit} variant="contained" color="primary">Edit</Button>
                <Button onClick={() => setUpdateDialogOpened(!open)}>Cancel</Button>
            </DialogContent>
        </Dialog>
    );
}

export default EditEntityDialog;
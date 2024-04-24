import React, {useState} from "react";
import {
    Autocomplete,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@mui/material";
import Button from "@mui/material/Button";
import {useCreateDataMutation} from "../../../api/paltteApi";
import {BRAND_LIST, TAG_LIST} from "../../../constants";

function CreateEntityDialog({ open, setDialogOpened, onCreate }) {

    const [createData] = useCreateDataMutation();

    const [brand, setBrand] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [tags, setTags] = useState([]);

    const handleCancel = () => {
        setDialogOpened(!open);
        clear();
    }
    const handleCreate = () => {
        const newEntity = {
            //Todo add id
            // id: uuid()
            brand: brand,
            name: name,
            description: description,
            price: price,
            image: image,
            tags: tags,
        };
        createData(newEntity);
        setDialogOpened(!open);
        clear();
    };

    const clear = () => {
        setBrand('');
        setName('');
        setDescription('');
        setPrice('');
        setImage('');
        setTags([]);
    }

    return (
        <Dialog open={open}>
            <DialogTitle>Create New Entity</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please fill out the details of the new entity.
                </DialogContentText>

                <Autocomplete
                    id="brand-outlined"
                    options={BRAND_LIST}
                    getOptionLabel={(option) => option.title}
                    value={brand ? brand : [] }
                    onChange={(e, value) =>
                        setBrand(value)}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            margin="dense"
                            {...params}
                            label="Brand"
                        />
                    )}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    label="Name"
                    type="text"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Description"
                    type="text"
                    fullWidth
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Price"
                    type="number"
                    fullWidth
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Image URL"
                    type="text"
                    fullWidth
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={TAG_LIST}
                    getOptionLabel={(option) => option.title}
                    value={tags ? tags : [] }
                    onChange={(e, value) =>
                        setTags(value)}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            margin="dense"
                            {...params}
                            label="Tags"
                        />
                    )}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button onClick={handleCreate} color="primary">Create</Button>
            </DialogActions>
        </Dialog>
    );
}

export default CreateEntityDialog;
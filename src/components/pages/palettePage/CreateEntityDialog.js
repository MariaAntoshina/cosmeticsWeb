import React, {useState} from "react";
import {
    Autocomplete,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, MenuItem, Paper, Rating,
    TextField
} from "@mui/material";
import Button from "@mui/material/Button";
import {useCreateDataMutation, useGetPalettesQuery} from "../../../api/paltteApi";
import * as PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useGetTagsQuery} from "../../../api/tagsApi";
import {useGetBrandsQuery} from "../../../api/brandApi";



function CreateEntityDialog({ open, setDialogOpened, onCreate, allTags, allBrands }) {

    const [createData] = useCreateDataMutation();


    const [brand, setBrand] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(0)
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [tags, setTags] = useState([]);
    const [fileName, setFileName] = useState('');

    const handleCancel = () => {
        setDialogOpened(!open);
        clear();
    }
    const handleCreate = () => {
        const newEntity = {
            //Todo add id
            id: null,
            brand: brand[0],
            name: name,
            description: description,
            rating: rating,
            price: price,
            image: image,
            tags: tags,
        };
        createData(newEntity);
        setDialogOpened(!open);
        clear();
    };

    const clear = () => {
        setBrand([]);
        setName('');
        setDescription('');
        setRating('');
        setPrice('');
        setImage('');
        setTags([]);
        setFileName('');
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file.name);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            setImage(reader.result);
        })
        reader.readAsDataURL(file);
    };


    return (
        <Dialog open={open}>
            <DialogTitle>Create New Entity</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please fill out the details of the new entity.
                </DialogContentText>

                {allBrands && <Autocomplete
                    id="brand-outlined"
                    options={allBrands}
                    getOptionLabel={(option) => option.title}
                    value={brand ?
                        allBrands
                            .filter(brand => brand.title === brand[0]?.title)[0] :
                        {}}
                    onChange={(e, value) =>
                        setBrand([value])}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            margin="dense"
                            {...params}
                            label="Brand"
                        />
                    )}
                />}
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
                        label="Rating"
                        select
                        fullWidth
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        variant="outlined"
                    >
                        {[1, 2, 3, 4, 5].map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>

                <TextField
                    margin="dense"
                    label="Price"
                    type="number"
                    fullWidth
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={allTags}
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


                <Box pt = {1.7}>
                    <Button
                        style={{marginRight: '16px'}}
                        variant="contained"
                        component="label"
                    >
                        Upload File
                        <input
                            onChange={handleFileChange}
                            type="file"
                            hidden
                        />
                    </Button>
                    {fileName}
                </Box>



            </DialogContent>
            <DialogActions>

                <Box pt = {0}>
                    <Button onClick={handleCreate} color="primary">Create</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                </Box>

            </DialogActions>
        </Dialog>
    );
}

export default CreateEntityDialog;
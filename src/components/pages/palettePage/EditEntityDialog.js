import React, {useEffect, useState} from 'react';
import {
    TextField,
    Button,
    DialogTitle,
    DialogContentText,
    Dialog,
    DialogContent,
    Autocomplete,
    MenuItem
} from '@mui/material';
import {useEditDataMutation} from "../../../api/paltteApi";
import {BRAND_LIST, TAG_LIST} from "../../../constants";
import Box from "@mui/material/Box";

function EditEntityDialog({initialData, setUpdateDialogOpened, open}) {
    const [editData] = useEditDataMutation();

    const [newData, setNewData] = useState(
        {
            brand: [],
            name: "",
            description: "",
            rating: "",
            price: "",
            image: "",
            tags: []
        }
    );
    const [fileName, setFileName] = useState('');


    useEffect(() => {
        setNewData(initialData ? initialData : {})
    }, [initialData]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file.name);
        let updatedNewData = {...newData};

        const reader = new FileReader();
        reader.addEventListener("load", () => {
            updatedNewData.image = reader.result;
        })
        reader.readAsDataURL(file);

        setNewData(updatedNewData);
    };

    const handleInputChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        let updatedNewData = {...newData};

        updatedNewData[name] = value;
        setNewData(updatedNewData);
    };

    const handleInputChangeInAutocomplete = (fieldName, value) => {
        let updatedNewData = {...newData};
        updatedNewData[fieldName] = value;
        setNewData(updatedNewData);

    }

    const handleEdit = () => {
        setFileName('')
        editData(newData);
        setUpdateDialogOpened(!open)
    }




    return (
        <Dialog open={open}>
            <DialogTitle></DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please fill out the details of the entity.
                </DialogContentText>
                <Autocomplete
                    id="brand-outlined"
                    options={BRAND_LIST}
                    getOptionLabel={(option) => {
                            return option.title
                        }
                    }

                    value={newData.brand ?
                        BRAND_LIST
                            .filter(brand => brand.title === newData.brand[0]?.title)[0] :
                        {}}

                    onChange={(e, value) =>
                        handleInputChangeInAutocomplete("brand", [value])}
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
                    margin="dense"
                    label="Rating"
                    name = "rating"
                    select
                    fullWidth
                    type="number"
                    value={newData.rating}
                    onChange={handleInputChange}
                    variant="outlined"
                >
                    {[1, 2, 3, 4, 5].map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    label="Price"
                    margin="dense"
                    name="price"
                    type="number"
                    value={newData.price}
                    onChange={handleInputChange}
                    fullWidth
                />

                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={TAG_LIST}
                    getOptionLabel={(option) => {
                        return option.title
                    }
                    }
                    value={newData.tags ?
                        TAG_LIST.filter(tag => newData.tags.map(ndt => ndt.title).includes(tag.title)) :
                        []}
                    onChange={(e, value) =>
                        handleInputChangeInAutocomplete("tags", value)}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            margin="dense"
                            {...params}
                            label="Tags"
                        />
                    )}
                />
                <Button style={{marginRight: '16px'}}
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
                <Box pt={1}>
                    <Button onClick={handleEdit} variant="contained" color="primary">Edit</Button>
                    <Button onClick={() => {
                        setFileName("")
                        setUpdateDialogOpened(!open)
                    }}>Cancel</Button>
                </Box>


            </DialogContent>
        </Dialog>
    );
}

export default EditEntityDialog;
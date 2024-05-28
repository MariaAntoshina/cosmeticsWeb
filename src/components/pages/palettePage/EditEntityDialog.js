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
import {BRAND_LIST} from "../../../constants";
import Box from "@mui/material/Box";

function EditEntityDialog({initialData, setUpdateDialogOpened, open, allTags, allBrands}) {
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

    const handleInputChangeTags = (fieldName, value) => {
        // debugger
        let updatedNewData = {...newData};
        updatedNewData[fieldName] = value;
        setNewData(updatedNewData);

    }

    const handleInputChangeBrand = (fieldName, value) => {
        // debugger
        let updatedNewData = {...newData};
        updatedNewData[fieldName] = value ? value[0] : {};
        setNewData(updatedNewData);

    }



    const handleEdit = () => {
        setFileName('')
        editData(newData);
        setUpdateDialogOpened(!open)
    }

 function test (newDataTags, allTags) {
        debugger
     return true
 }


    return (
        <Dialog open={open}>
            <DialogTitle></DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please fill out the details of the entity.
                </DialogContentText>
                {allBrands && <Autocomplete
                    id="brand-outlined"
                    options={allBrands}
                    getOptionLabel={(option) => {
                        return option.title
                    }
                    }

                    value={newData.brand ?
                        allBrands
                            .filter(brand => {
                                return brand.title === newData.brand?.title
                            })[0] :
                        {}}

                    onChange={(e, value) =>
                        handleInputChangeBrand("brand", [value])}
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

                {allTags && newData.tags && <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={allTags}
                    getOptionLabel={(option) => {
                        return option.title
                    }
                    }
                    value={newData.tags ?
                        allTags.filter(tag => newData.tags.map(ndt => ndt.title).includes(tag.title)) :
                        []}
                    onChange={(e, value) =>
                        handleInputChangeTags("tags", value)}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            margin="dense"
                            {...params}
                            label="Tags"
                        />
                    )}
                />}
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
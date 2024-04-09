import {useState} from "react";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useCreateDataMutation} from "../../../api/paltteApi";

function CreateEntityDialog({ open, setDialogOpened, onCreate }) {

    const [createData] = useCreateDataMutation();


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [tags, setTags] = useState('');

    const handleCancel = () => {
        setDialogOpened(!open);
        clear();
    }
    const handleCreate = () => {
        // Validate input fields if needed

        // Create the new entity object
        const newEntity = {
            //Todo add id
            // id: uuid()
            name: name,
            description: description,
            price: price,
            image: image,
            tags: tags,
        };
        createData(newEntity);
        // Call the onCreate callback with the new entity
        // onCreate(newEntity);

        // Clear the input fields
        setDialogOpened(!open);
        clear();
    };

    const clear = () => {
        setName('');
        setDescription('');
        setPrice('');
        setImage('');
        setTags('');
    }

    return (
        <Dialog open={open}>
            <DialogTitle>Create New Entity</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please fill out the details of the new entity.
                </DialogContentText>
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
                <TextField
                    margin="dense"
                    label="Tags"
                    type="text"
                    fullWidth
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
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
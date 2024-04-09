import React, {useState} from 'react';
import {Grid} from '@mui/material';
import {Filter} from "./containers/Filter";
import {PaletteFeed} from "./containers/PaletteFeed";
import Button from "@mui/material/Button";
import CreateEntityDialog from "./CreateEntityDialog";
import EditEntityDialog from "./EditEntityDialog";

function PalettePage() {

    const [filterCriteria, setFilterCriteria] = useState({
        price: {
            "1-10": false,
            "11-20": false,
            "21-50": false
        },
        brand : {

        },

    })
    const [dialogOpened, setDialogOpened] = useState(false)
    const [updateDialogOpened, setUpdateDialogOpened] = useState(false)
    const [initialData, setInitialData] = useState({name: "", description: "", price: "", image: "", tags: ""});

    const handleCreate = () => {
        setDialogOpened(true)
    }

    const handleEdit = (object) => {
        setUpdateDialogOpened(true);
        setInitialData(object);
    }



    return (
        <Grid container spacing={2} paddingTop={10}>
            <Grid item xs={3}>
                <Filter
                    filterCriteria={filterCriteria}
                    setFilterCriteria={setFilterCriteria}
                />
            </Grid>
            <Grid item xs={9}>
                <Button onClick={handleCreate}>create</Button>
                <PaletteFeed handleEdit={handleEdit} filterCriteria={filterCriteria}/>
                <CreateEntityDialog
                    open={dialogOpened}
                    setDialogOpened={setDialogOpened}
                />
                <EditEntityDialog
                    open={updateDialogOpened}
                    setUpdateDialogOpened={setUpdateDialogOpened}
                    initialData={initialData}
                />
            </Grid>
        </Grid>

        )

}

export default PalettePage;
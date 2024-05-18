import React, {useState} from 'react';
import {Grid} from '@mui/material';
import {Filter} from "./containers/Filter";
import {PaletteFeed} from "./containers/PaletteFeed";
import ConfirmationPopupDialog from "./ConfirmationPopupDialog";
import Button from "@mui/material/Button";
import CreateEntityDialog from "./CreateEntityDialog";
import EditEntityDialog from "./EditEntityDialog";
import {useDeleteDataMutation} from "../../../api/paltteApi";
import {useGetTagsQuery} from "../../../api/tagsApi";
import {useGetBrandsQuery} from "../../../api/brandApi";
function PalettePage() {

    const [filterCriteria, setFilterCriteria] = useState({
        price: {
            "1-10": false,
            "11-30": false,
            "31-50": false,
            "51-100" : false

        },
        brand : {
            "Dior": false,
            "Tom Ford" : false,
            "Charlotte Tilbury": false,
            "Yves Saint Laurent" : false,
            "Sephora Collection" : false,
            'Huda Beauty' : false,
            'Glossier': false,
            'Prada Beauty': false
        },
        tags: {
        "Favourite": false,
        "Expensive": false,
        },
        rating: {
            "5": false,
            "4": false,
            "3": false,
            "2": false,
            "1": false
        }
    })
    const [deleteData] = useDeleteDataMutation();
    const { data:allTags, isSuccess } = useGetTagsQuery();
    const { data:allBrands, isSuccess: brandsSuccess } = useGetBrandsQuery();
    const [dialogOpened, setDialogOpened] = useState(false)
    const [updateDialogOpened, setUpdateDialogOpened] = useState(false)
    const [popupDialogOpened, setPopupDialogOpened] = useState(false)
    const [initialData, setInitialData] = useState({name: "", rating: "", brand: "", description: "", price: "", image: "", tags: ""});
    const [idToBeDeleted, setIdToBeDeleted] = useState(null);

    const handleCreate = () => {
        setDialogOpened(true)
    }

    const handleEdit = (object) => {

        setUpdateDialogOpened(true);
        setInitialData(object);
    }
    const onDelete = (id) => {
        deleteData(id);
    }
    const handlePopupConfirmationDialog = (id) => {
        setIdToBeDeleted(id)
        setPopupDialogOpened(!popupDialogOpened)
    }

    return (
        <Grid container spacing={2} paddingTop={10}>
            <Grid item xs={3}>
                {allBrands && allTags && <Filter
                    filterCriteria={filterCriteria}
                    setFilterCriteria={setFilterCriteria}
                    allTags={allTags}
                    allBrands={allBrands}
                />}
            </Grid>
            <Grid item xs={9}>
                <Button onClick={handleCreate}>create</Button>
                {allBrands && allTags && <PaletteFeed handleEdit={handleEdit}
                              filterCriteria={filterCriteria}
                              popupDeleteDialog={handlePopupConfirmationDialog}
                              onDelete={onDelete}
                              allTags={allTags}
                              allBrands={allBrands}
                />}
                <CreateEntityDialog
                    open={dialogOpened}
                    setDialogOpened={setDialogOpened}
                    allTags={allTags}
                    allBrands={allBrands}
                />
              <ConfirmationPopupDialog
                  open={popupDialogOpened}
                  handlePopupConfirmationDialog = {handlePopupConfirmationDialog}
                  onDelete={onDelete}
                  id={idToBeDeleted}
                  />
                <EditEntityDialog
                    open={updateDialogOpened}
                    setUpdateDialogOpened={setUpdateDialogOpened}
                    initialData={initialData}
                    allTags={allTags}
                    allBrands={allBrands}
                />
            </Grid>
        </Grid>

        )

}

export default PalettePage;
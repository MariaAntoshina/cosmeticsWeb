import ThreePalettesContainer from "./ThreePalettesContainer";
import Box from "@mui/material/Box";
import {useDeleteDataMutation, useGetPalettesQuery} from "../../../../api/paltteApi";




export const PaletteFeed = ({handleEdit, filterCriteria}) => {


    const { data, isSuccess } = useGetPalettesQuery();
    const [deleteData] = useDeleteDataMutation();

    const filterData = (criteria, data) => {

        if (!criteria.price['1-10'] && !criteria.price['11-20'] && !criteria.price['21-50']) {
            return data;
        }

        return data.filter(d =>
            (criteria.price['1-10'] && (1 < d.price && d.price <= 10)) ||
            (criteria.price['11-20'] && (11 < d.price && d.price <= 20)) ||
            (criteria.price['21-50'] && (21 < d.price && d.price <= 50)))
    }


    const breakDataIntoPortions = (array) => {

        let result = [];

        let threePalettes = [];

        for (let i = 0; i < array.length; i++) {
            let arrayElement = array[i];

            if ((i + 1) % 3 === 0) {
                threePalettes.push(arrayElement);
                result.push(threePalettes);
                threePalettes = [];
            } else {

                threePalettes.push(arrayElement);
                if (i === array.length - 1) {
                    result.push(threePalettes);
                }
            }
        }
        return result;
    }

    const onDelete = (id) => {
        deleteData(id);
    }


    let palettesData;

    if(isSuccess === false){
        palettesData = []
    } else {
        palettesData = breakDataIntoPortions(filterData(filterCriteria, data));
    }

    return <Box maxHeight={'80vh'} overflow={'scroll'}>
        {
            palettesData.map((i,k) => {
                return <ThreePalettesContainer
                    threePalettesArray={i}
                    onDelete={onDelete}
                    handleEdit = {handleEdit}
                    key = {k}/>
            })
        }
    </Box>
}
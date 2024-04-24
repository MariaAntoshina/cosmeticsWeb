import ThreePalettesContainer from "./ThreePalettesContainer";
import Box from "@mui/material/Box";
import {useDeleteDataMutation, useGetPalettesQuery} from "../../../../api/paltteApi";




export const PaletteFeed = ({handleEdit, filterCriteria}) => {


    const { data, isSuccess } = useGetPalettesQuery();
    const [deleteData] = useDeleteDataMutation();

    const filterDataByPrice = (criteria, data) => {

        if (!criteria.price['1-10']
            && !criteria.price['11-20']
            && !criteria.price['21-50']) {
            return data;
        }

        return data.filter(d =>
            (criteria.price['1-10'] && (1 < d.price && d.price <= 10)) ||
            (criteria.price['11-20'] && (10 < d.price && d.price <= 20)) ||
            (criteria.price['21-50'] && (20 < d.price && d.price <= 50)))
    }

    const filterDataByBrand = (criteria, data) => {
        if (!criteria.brand['Dior']
            && !criteria.brand['Tom Ford']
            && !criteria.brand['Charlotte Tilbury']
            && !criteria.brand['Yves Saint Laurent']) {
            return data;
        }
        return data.filter(d =>
            (criteria.brand['Dior'] && (d.brand.map(brand => brand.title).includes("Dior"))) ||
            (criteria.brand['Tom Ford'] && (d.brand.map(brand => brand.title).includes("Tom Ford"))) ||
            (criteria.brand['Charlotte Tilbury'] && (d.brand.map(brand => brand.title).includes("Charlotte Tilbury"))) ||
            (criteria.brand['Yves Saint Laurent'] && (d.brand.map(brand => brand.title).includes("Yves Saint Laurent")))

        );
    }


    const filterDataByTags = (criteria, data) => {
        if (!criteria.tags['Favourite']
            && !criteria.tags['Expensive']) {
            return data;
        }

        return data.filter(d =>
            (criteria.tags['Favourite'] && (d.tags.map(tag => tag.title).includes("Favourite"))) ||
            (criteria.tags['Expensive'] && (d.tags.map(tag => tag.title).includes("Expensive"))));
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
        palettesData = breakDataIntoPortions(filterDataByTags(filterCriteria, filterDataByBrand(filterCriteria, filterDataByPrice(filterCriteria, data))));
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
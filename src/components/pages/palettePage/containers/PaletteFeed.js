import ThreePalettesContainer from "./ThreePalettesContainer";
import Box from "@mui/material/Box";
import { useGetPalettesQuery} from "../../../../api/paltteApi";
import React, {useEffect, useState, useRef, Fragment} from "react";




export const PaletteFeed = ({handleEdit, filterCriteria, popupDeleteDialog, onDelete, allTags, allBrands}) => {

    const [page, setPage] = useState(1);
    const { data, isSuccess } = useGetPalettesQuery(page);




    const filterDataByPrice = (criteria, data) => {

        if (!criteria.price['1-10']
            && !criteria.price['11-30']
            && !criteria.price['31-50']
            && !criteria.price['51-100']
        ) {
            return data;
        }

        return data.filter(d =>
            (criteria.price['1-10'] && (1 < d.price && d.price <= 10)) ||
            (criteria.price['11-30'] && (10 < d.price && d.price <= 30)) ||
            (criteria.price['31-50'] && (30 < d.price && d.price <= 50)) ||
            (criteria.price['51-100'] && (50 < d.price && d.price <= 100)))
    }

    const filterDataByBrand = (criteria, data) => {

        if (allBrands.map(ab => ab.title).every(brand => !criteria.brand[brand])) {
            return data;
        }

        // Filter the data based on the selected brands in the criteria
        return data.filter(d =>
            allBrands.map(ab => ab.title).some(brand => criteria.brand[brand] && d.brand.title.includes(brand))
        );
    }


    const filterDataByTags = (criteria, data) => {

        const tags = allTags.map(t=> t.title);

        // Check if none of the specified tags are in the criteria
        const noSelectedTags = tags.every(tag => !criteria.tags[tag]);

        if (noSelectedTags) {
            return data;
        }

        // Filter the data based on the selected tags in the criteria
        return data.filter(d =>
            tags.some(tag => criteria.tags[tag] && d.tags.map(t => t.title).includes(tag))
        );
    }

    const filterDataByRating = (criteria, data) => {
        if (!criteria.rating['5']
            && !criteria.rating['4']
            && !criteria.rating['3']
            && !criteria.rating['2']
            && !criteria.rating['1']
        ) {
            return data;
        }

        return data.filter(d =>
            (criteria.rating['5'] && (d.rating == "5")) ||
            (criteria.rating['4'] && (d.rating == "4")) ||
            (criteria.rating['3'] && (d.rating == "3")) ||
            (criteria.rating['2'] && (d.rating == "2")) ||
            (criteria.rating['1'] && (d.rating == "1"))

        );
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




    let palettesData;

    if(isSuccess === false){
        palettesData = []
    } else {
        palettesData = breakDataIntoPortions(filterDataByRating(filterCriteria, filterDataByTags(filterCriteria, filterDataByBrand(filterCriteria, filterDataByPrice(filterCriteria, data)))));
    }

    return <Box maxHeight={'80vh'} overflow={'scroll'}>
        {
            palettesData.map((i,k) => {
                return <ThreePalettesContainer
                        threePalettesArray={i}
                        popupDeleteDialog={popupDeleteDialog}
                        onDelete = {onDelete}
                        handleEdit = {handleEdit}
                        key = {k}/>
            })
        }
        {/*<div ref={palettesData.length > 0 ? loader : null}></div>*/}
    </Box>
}
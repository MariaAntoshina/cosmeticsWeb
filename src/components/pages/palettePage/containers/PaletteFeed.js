import ThreePalettesContainer from "./ThreePalettesContainer";
import Box from "@mui/material/Box";
import { useGetPalettesQuery} from "../../../../api/paltteApi";
import React, {useEffect, useState, useRef, Fragment} from "react";
import Button from "@mui/material/Button";



export const PaletteFeed = ({handleEdit, filterCriteria, popupDeleteDialog, onDelete}) => {

    const [page, setPage] = useState(1);
    const [newData, setNewData] = useState([]);
    const [firstData, setFirstData] = useState([]);

    const [totalData, setTotalData] = useState([]);

    const { data, isSuccess } = useGetPalettesQuery(page);
    const incrementPage = () => {

        setPage(page+1) //=== useGetPalettesQuery(page);

    };

    useEffect(() => {


        if (isSuccess) {
            let newTotalData = [...totalData];
            newTotalData.push(...data)
            setTotalData(newTotalData);
        }


    }, [data]);



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


        if (!criteria.brand['Dior']
            && !criteria.brand['Tom Ford']
            && !criteria.brand['Charlotte Tilbury']
            && !criteria.brand['Yves Saint Laurent']
            && !criteria.brand['Sephora Collection']
            && !criteria.brand['Huda Beauty']
            && !criteria.brand['Glossier']
            && !criteria.brand['Prada Beauty']
        ) {
            return data;
        }
        return data.filter(d =>
            (criteria.brand['Dior'] && (d.brand.map(brand => brand.title).includes("Dior"))) ||
            (criteria.brand['Tom Ford'] && (d.brand.map(brand => brand.title).includes("Tom Ford"))) ||
            (criteria.brand['Charlotte Tilbury'] && (d.brand.map(brand => brand.title).includes("Charlotte Tilbury"))) ||
            (criteria.brand['Yves Saint Laurent'] && (d.brand.map(brand => brand.title).includes("Yves Saint Laurent"))) ||
            (criteria.brand['Sephora Collection'] && (d.brand.map(brand => brand.title).includes("Sephora Collection"))) ||
            (criteria.brand['Huda Beauty'] && (d.brand.map(brand => brand.title).includes("Huda Beauty"))) ||
            (criteria.brand['Glossier'] && (d.brand.map(brand => brand.title).includes("Glossier"))) ||
            (criteria.brand['Prada Beauty'] && (d.brand.map(brand => brand.title).includes("Prada Beauty")))
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
        palettesData = breakDataIntoPortions(filterDataByRating(filterCriteria, filterDataByTags(filterCriteria, filterDataByBrand(filterCriteria, filterDataByPrice(filterCriteria, totalData)))));
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
        <Button onClick={incrementPage}>
            Loading...
        </Button>
        {/*<div ref={palettesData.length > 0 ? loader : null}></div>*/}
    </Box>
}
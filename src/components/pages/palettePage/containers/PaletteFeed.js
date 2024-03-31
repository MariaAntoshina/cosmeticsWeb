import ThreePalettesContainer from "./ThreePalettesContainer";
import Box from "@mui/material/Box";
import {useGetPalettesQuery} from "../../../../api/paltteApi";


export const PaletteFeed = () => {

    const { data, error, isLoading, isSuccess } = useGetPalettesQuery();

    console.log('isLoading', isLoading)
    console.log('error', error)
    console.log('isSuccess', isSuccess)
    console.log('data', data)

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

    }

    let palettesData;

    if(isSuccess === false){
        palettesData = []
    } else {
        palettesData = breakDataIntoPortions(data)
    }

    return <Box maxHeight={'80vh'} overflow={'scroll'}>
        {
            palettesData.map((i,k) => {
                return <ThreePalettesContainer
                    threePalettesArray={i}
                    onDelete={onDelete}
                    key = {k}/>
            })
        }
    </Box>
}
import ThreePalettesContainer from "./ThreePalettesContainer";
import {Fragment} from "react";
import Box from "@mui/material/Box";


const array = [
    {
        name: "name 1",
        description: "a few words",
        image: "https://media.istockphoto.com/id/1455658894/fi/valokuva/j%C3%A4rjestelm%C3%A4n-hakkeroidun-varoituksen-h%C3%A4lytys-kannettavassa-tietokoneessa-kyberhy%C3%B6kk%C3%A4ys.jpg?s=2048x2048&w=is&k=20&c=77wBp9WBf9W0ev729L4o4VbA08OlGrdEyMwZorEYa4c=",
        price: "20",
        id: 1
    },
    {
        name: "name 2",
        description: "a few words",
        image: "https://media.istockphoto.com/id/1455658894/fi/valokuva/j%C3%A4rjestelm%C3%A4n-hakkeroidun-varoituksen-h%C3%A4lytys-kannettavassa-tietokoneessa-kyberhy%C3%B6kk%C3%A4ys.jpg?s=2048x2048&w=is&k=20&c=77wBp9WBf9W0ev729L4o4VbA08OlGrdEyMwZorEYa4c=",
        price: "20",
        id: 2
    },
    {
        name: "name 3",
        description: "a few words",
        image: "https://media.istockphoto.com/id/1455658894/fi/valokuva/j%C3%A4rjestelm%C3%A4n-hakkeroidun-varoituksen-h%C3%A4lytys-kannettavassa-tietokoneessa-kyberhy%C3%B6kk%C3%A4ys.jpg?s=2048x2048&w=is&k=20&c=77wBp9WBf9W0ev729L4o4VbA08OlGrdEyMwZorEYa4c=",
        price: "20",
    },
    {
        name: "name 4",
        description: "a few words",
        image: "https://media.istockphoto.com/id/1455658894/fi/valokuva/j%C3%A4rjestelm%C3%A4n-hakkeroidun-varoituksen-h%C3%A4lytys-kannettavassa-tietokoneessa-kyberhy%C3%B6kk%C3%A4ys.jpg?s=2048x2048&w=is&k=20&c=77wBp9WBf9W0ev729L4o4VbA08OlGrdEyMwZorEYa4c=",
        price: "20",
    },
    {
        name: "name 5",
        description: "a few words",
        image: "https://media.istockphoto.com/id/1455658894/fi/valokuva/j%C3%A4rjestelm%C3%A4n-hakkeroidun-varoituksen-h%C3%A4lytys-kannettavassa-tietokoneessa-kyberhy%C3%B6kk%C3%A4ys.jpg?s=2048x2048&w=is&k=20&c=77wBp9WBf9W0ev729L4o4VbA08OlGrdEyMwZorEYa4c=",
        price: "20",
    },
    {
        name: "name 6",
        description: "a few words",
        image: "https://media.istockphoto.com/id/1455658894/fi/valokuva/j%C3%A4rjestelm%C3%A4n-hakkeroidun-varoituksen-h%C3%A4lytys-kannettavassa-tietokoneessa-kyberhy%C3%B6kk%C3%A4ys.jpg?s=2048x2048&w=is&k=20&c=77wBp9WBf9W0ev729L4o4VbA08OlGrdEyMwZorEYa4c=",
        price: "20",
    },
    {
        name: "name 7",
        description: "a few words",
        image: "https://media.istockphoto.com/id/1455658894/fi/valokuva/j%C3%A4rjestelm%C3%A4n-hakkeroidun-varoituksen-h%C3%A4lytys-kannettavassa-tietokoneessa-kyberhy%C3%B6kk%C3%A4ys.jpg?s=2048x2048&w=is&k=20&c=77wBp9WBf9W0ev729L4o4VbA08OlGrdEyMwZorEYa4c=",
        price: "20",
    },
]


export const PaletteFeed = () => {

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
        //impl
    }

    let data = breakDataIntoPortions(array);

    return <Box maxHeight={'80vh'} overflow={'scroll'}>
        {
            data.map(i => {
                return <ThreePalettesContainer threePalettesArray={i} onDelete={onDelete}/>
            })
        }
    </Box>
}
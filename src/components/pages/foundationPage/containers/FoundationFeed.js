import {ThreeFoundationsContainer} from "./ThreeFoundationsContainer";
import React from "react";
import {Box} from '@mui/material'

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

export const FoundationFeed = () => {
    const breakDataIntoPortions = (array) => {

        let result = []
        let threeFoundations = [];


        for (let i = 0; i < array.length; i++) {
            let arrayElement = array[i];

            if ((i + 1) % 3 === 0) {
                threeFoundations.push(arrayElement);
                result.push(threeFoundations);
                threeFoundations = [];
            } else {
                threeFoundations.push(arrayElement);
                if (i === array.length - 1) {
                    result.push(threeFoundations);
                }
            }
        }
        return result;
    }


    const onDelete = (id) => {

    }

    let data = breakDataIntoPortions(array);

    return <Box maxHeight={'80vh'} overflow={'scroll'}>
        {
            data.map(i => {
                return <ThreeFoundationsContainer threeFoundationsArray={i} onDelete={onDelete()}/>
            })
        }
    </Box>

}
import Box from "@mui/material/Box";
import React, { useState } from 'react';
import { TextField, List, ListItem, ListItemText } from '@mui/material';
import {PaletteFeed} from "./PaletteFeed";

export const Filter = () => {
    return <Box width={'100%'} height={'500px'} style={{background: 'red'}}></Box>
}


// вот сюда нужно как-то перенести data
const productsData = [
    { id: 1, name: 'Product 1', category: 'Category A' },
    { id: 2, name: 'Product 2', category: 'Category B' },
    { id: 3, name: 'Product 3', category: 'Category A' },
    // Add more products as needed
];

function ProductFilter() {
    // что эта строчка означает?
    const [filter, setFilter] = useState('');

    // Function to handle changes in the filter input

    //  в event приходит нажатие на фильтр?
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    // Filter products based on the filter text
    const filteredProducts = productsData.filter(product =>
        product.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            {/* Text field for filtering */}
            <TextField
                label="Filter Products"
                variant="outlined"
                value={filter}
                onChange={handleFilterChange}
            />

            {/* List to display filtered products */}
            <List>
                {filteredProducts.map(product => (
                    <ListItem key={product.id}>
                        <ListItemText
                            primary={product.name}
                            secondary={`Category: ${product.category}`}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default ProductFilter;
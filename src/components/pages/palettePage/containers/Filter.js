import Box from "@mui/material/Box";
import React from 'react';
import {Checkbox, FormControlLabel, FormGroup} from '@mui/material';


export const Filter = ({filterCriteria, setFilterCriteria}) => {


    const handlePriceChange = (e) => {
        let name = e.target.name;
        let value = e.target.checked;
        let clonedFilteredCriteria = {...filterCriteria}
        clonedFilteredCriteria.price[name] = value;
        setFilterCriteria(clonedFilteredCriteria);
    }

    return <Box width={'100%'} height={'500px'} paddingLeft={'10px'}>
        <FormGroup>
            <FormControlLabel
                control={<Checkbox
                    checked={filterCriteria['1-10']}
                />}
                onChange={handlePriceChange}
                name={'1-10'}
                label="1-10"
            />
            <FormControlLabel
                control={<Checkbox
                    checked={filterCriteria['11-10']}
                />}
                onChange={handlePriceChange}
                name={'11-20'}
                label="11-20"
            />
            <FormControlLabel
                control={<Checkbox
                    checked={filterCriteria['21-10']}
                />}
                onChange={handlePriceChange}
                name={'21-50'}
                label="21-50"
            />
        </FormGroup>
    </Box>
}


export default Filter;
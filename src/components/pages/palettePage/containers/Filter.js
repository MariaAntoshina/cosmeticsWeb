import Box from "@mui/material/Box";
import React from 'react';
import {Checkbox, FormControlLabel, FormGroup} from '@mui/material';
import Typography from "@mui/material/Typography";


export const Filter = ({filterCriteria, setFilterCriteria}) => {


    const handleCheckboxChange = (outerField, e) => {
        let name = e.target.name;
        let value = e.target.checked;
        let clonedFilteredCriteria = {...filterCriteria}
        clonedFilteredCriteria[outerField][name] = value;
        setFilterCriteria(clonedFilteredCriteria);
    }

    return <Box width={'100%'} height={'500px'} paddingLeft={'10px'}>
        <FormGroup>
            Price
            <FormControlLabel
                control={<Checkbox
                    checked={filterCriteria['1-10']}
                />}
                onChange={(e) => handleCheckboxChange('price', e)}
                name={'1-10'}
                label="1-10"
            />
            <FormControlLabel
                control={<Checkbox
                    checked={filterCriteria['11-10']}
                />}
                onChange={(e) => handleCheckboxChange('price', e)}
                name={'11-20'}
                label="11-20"
            />
            <FormControlLabel
                control={<Checkbox
                    checked={filterCriteria['21-10']}
                />}
                onChange={(e) => handleCheckboxChange('price', e)}
                name={'21-50'}
                label="21-50"
            />
        </FormGroup>
        <FormGroup>
            <Typography>Tags</Typography>

            <FormControlLabel
                control={<Checkbox
                    checked={filterCriteria['Favourite']}
                />}
                onChange={(e) => handleCheckboxChange('tags', e)}
                name={'Favourite'}
                label="Favourite"
            />
            <FormControlLabel
                control={<Checkbox
                    onChange={(e) => handleCheckboxChange('tags', e)}
                />}
                onChange={handleCheckboxChange}
                name={'Expensive'}
                label="Expensive"
            />
        </FormGroup>
        <FormGroup>
            <Typography>Brand</Typography>

            <FormControlLabel
                control={<Checkbox
                    checked={filterCriteria['Dior']}
                />}
                onChange={(e) => handleCheckboxChange('brand', e)}
                name={'Dior'}
                label="Dior"
            />
            <FormControlLabel
                control={<Checkbox
                    onChange={(e) => handleCheckboxChange('brand', e)}
                />}
                onChange={handleCheckboxChange}
                name={'Tom Ford'}
                label="Tom Ford"
            />
            <FormControlLabel
                control={<Checkbox
                    onChange={(e) => handleCheckboxChange('brand', e)}
                />}
                onChange={handleCheckboxChange}
                name={'Charlotte Tilbury'}
                label="Charlotte Tilbury"
            />
            <FormControlLabel
                control={<Checkbox
                    onChange={(e) => handleCheckboxChange('brand', e)}
                />}
                onChange={handleCheckboxChange}
                name={'Yves Saint Laurent'}
                label="Yves Saint Laurent"
            />

        </FormGroup>
    </Box>
}


export default Filter;
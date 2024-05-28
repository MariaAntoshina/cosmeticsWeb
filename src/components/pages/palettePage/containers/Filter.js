import Box from "@mui/material/Box";
import React from 'react';
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Rating} from '@mui/material';
import Typography from "@mui/material/Typography";

export const Filter = ({filterCriteria, setFilterCriteria, allTags, allBrands}) => {


    const handleCheckboxChange = (outerField, e) => {
        let name = e.target.name;
        let value = e.target.checked;
        let clonedFilteredCriteria = {...filterCriteria}
        clonedFilteredCriteria[outerField][name] = value;
        setFilterCriteria(clonedFilteredCriteria);
    }

    const handleRadio = (btnName, btnValue) => {
        let clonedFilteredCriteria = {...filterCriteria};
        Object.keys(clonedFilteredCriteria.rating).forEach(field => clonedFilteredCriteria.rating[field] = false)
        clonedFilteredCriteria.rating[btnName] = btnValue;
        setFilterCriteria(clonedFilteredCriteria);
    }


    const getFilterItem = (name) => {
        return <FormControlLabel
            control={<Checkbox
                onChange={(e) => handleCheckboxChange('brand', e)}
            />}
            onChange={handleCheckboxChange}
            name={name}
            label={name}
        />


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
                name={'11-30'}
                label="11-30"
            />
            <FormControlLabel
                control={<Checkbox
                    checked={filterCriteria['21-10']}
                />}
                onChange={(e) => handleCheckboxChange('price', e)}
                name={'31-50'}
                label="31-50"
            />
            <FormControlLabel
                control={<Checkbox
                    checked={filterCriteria['21-10']}
                />}
                onChange={(e) => handleCheckboxChange('price', e)}
                name={'51-100'}
                label="51-100"
            />

        </FormGroup>
        <FormGroup>
            <Typography>Tags</Typography>

            {allTags.map(i => {
                return <FormControlLabel
                    control={<Checkbox
                        checked={filterCriteria[i.title]}
                    />}
                    onChange={(e) => handleCheckboxChange('tags', e)}
                    name={i.title}
                    label={i.title}
                />
            })}

        </FormGroup>
        <FormGroup>
            <Typography>Brand</Typography>

            {allBrands.map(brand => getFilterItem(brand.title))}

        </FormGroup>

        <FormControl component="fieldset">
    <FormLabel id="demo-radio-buttons-group-label">Rating</FormLabel>
<RadioGroup
    aria-label="filter"
    name="filter"
>
    <FormControlLabel
        control={<Radio
            onClick={(e) => handleRadio('5', !filterCriteria.rating['5'])}
            checked = {!!filterCriteria.rating['5']}
        />}

        label={<Rating value = '5' readOnly/>}
    />

    <FormControlLabel
        control={<Radio
            onClick={(e) => handleRadio('4', !filterCriteria.rating['4'])}
            checked = {!!filterCriteria.rating['4']}
        />}

        label={<Rating value = '4' readOnly/>}
    />
    <FormControlLabel
        control={<Radio
            onClick={(e) => handleRadio('3', !filterCriteria.rating['3'])}
            checked = {!!filterCriteria.rating['3']}
        />}

        label={<Rating value = '3' readOnly/>}
    />
    <FormControlLabel
        control={<Radio
            onClick={(e) => handleRadio('2', !filterCriteria.rating['2'])}
            checked = {!!filterCriteria.rating['2']}
        />}

        label={<Rating value = '2' readOnly/>}
    />
    <FormControlLabel
        control={<Radio
            onClick={(e) => handleRadio('1', !filterCriteria.rating['1'])}
            checked = {!!filterCriteria.rating['1']}
        />}

        label={<Rating value = '1' readOnly/>}
    />

</RadioGroup>
        </FormControl>




    {/*<FormControlLabel*/}
    {/*    control={<Radio*/}
    {/*        checked={!!filterCriteria.rating['3']}*/}
    {/*    />}*/}
    {/*    onChange={(e) => handleCheckboxChange('rating', e)}*/}
    {/*    name={'3'}*/}
    {/*    label=<Rating value='3' readOnly/>*/}
    {/*/>*/}
    {/*<FormControlLabel*/}
    {/*    control={<Radio*/}
    {/*        checked={!!filterCriteria.rating['2']}*/}
    {/*    />}*/}
    {/*    onChange={(e) => handleCheckboxChange('rating', e)}*/}
    {/*    name={'2'}*/}
    {/*    label=<Rating value='2' readOnly/>*/}
    {/*/>*/}
    {/*<FormControlLabel*/}
    {/*    control={<Radio*/}
    {/*        checked={!!filterCriteria.rating['1']}*/}
    {/*    />}*/}
    {/*    onChange={(e) => handleCheckboxChange('rating', e)}*/}
    {/*    name={'1'}*/}
    {/*    label=<Rating value='1' readOnly/>*/}
    {/*/>*/}


    </Box>
}


export default Filter;
import {Button, Card, CardActions, CardContent, CardMedia, Chip, Stack, Typography, Rating, Grid} from "@mui/material";
import React from "react";

export const PaletteBox = ({brand, name, image, description, rating, price, id, tags, handleEdit, popupDeleteDialog}) => {
     // maxWidth: '20vw'; minHeight: '65vh'; maxHeight:'65vh'}
    // <Card  display="flex" flex-direction={'column'}
    //        style={{ maxWidth: '500px', minHeight: '600px', maxHeight:'600px', justifyContent: 'space-between'}}>


    return <Card style={{ maxWidth: '20vw',
        border: 'none', boxShadow: 'none',
        minHeight: '50vh', maxHeight:'50vh' , display: 'flex', flexDirection: 'column', height: '100%'}}>
        <CardMedia component="img" image={image} alt={name} style={{ height: '30%', width: 'auto', objectFit: 'contain' }}

        />
        <CardContent >
            <Typography variant="h8" fontWeight="bold" component="div">
                {brand?.title}
            </Typography>
            <Typography variant="h7" component="div">
                {name}
            </Typography>
            <Typography overflow={'scroll'} variant="body2" color="text.secondary" style={{ maxHeight: 100, minHeight: 100 }}>
                {description}
            </Typography>


        </CardContent>
        <CardActions  style = {{ marginTop: 'auto' }}>
            <Grid container>
                <Grid item xs={12}>
                    <Rating
                        margin="dense"
                        label="Rating"
                        type="number"
                        fullWidth
                        value={rating}
                        readOnly
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" color="text.secondary">
                        Price: ${price}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Stack direction="row" spacing={1}>
                        {
                            Array.isArray(tags) && tags.map((tag, id) => {
                                return <Chip
                                    key={id}
                                    label={tag.title}
                                />
                            })
                        }
                    </Stack>
                </Grid>
                <Grid item xs={12} container marginTop={2}>
                    <Grid item xs={3}>
                        <Button style = {{
                        }} variant="contained" size="small" onClick={() => handleEdit({id, name, image, description, price, brand, tags, rating})}>
                            Edit
                        </Button>
                    </Grid>
                    <Grid item xs={9}>
                        <Button variant="contained" size="small" onClick={() => popupDeleteDialog(id)}>
                            Delete
                        </Button>
                    </Grid>

                </Grid>
            </Grid>
        </CardActions>
    </Card>
}
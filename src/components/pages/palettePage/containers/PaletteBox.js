import {Button, Card, CardActions, CardContent, CardMedia, Chip, Stack, Typography} from "@mui/material";
import React from "react";

export const PaletteBox = ({name, image, description, price, id, tags, handleEdit, onDelete}) => {

    console.log('tags', tags)

    return <Card style={{ maxWidth: 300 }}>
        <CardMedia component="img" image={image} alt={name} />
        <CardContent>
            <Typography variant="h6" component="div">
                {name}
            </Typography>
            <Typography overflow={'scroll'} variant="body2" color="text.secondary" style={{ maxHeight: 100, minHeight: 100 }}>
                {description}
            </Typography>
            <Typography variant="h6" color="text.secondary">
                Price: ${price}
            </Typography>

            <Stack direction="row" spacing={1}>
                {
                    tags.map(tag => {
                        return <Chip label={tag.title}  />
                    })
                }
            </Stack>

        </CardContent>
        <CardActions>
            <Button size="small" onClick={() => handleEdit({id, name, image, description, price, tags})}>
                Edit
            </Button>
            <Button size="small" onClick={() => onDelete(id)}>
                Delete
            </Button>
        </CardActions>
    </Card>
}
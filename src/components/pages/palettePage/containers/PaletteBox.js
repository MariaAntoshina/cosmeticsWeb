import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import React from "react";

export const PaletteBox = ({name, image, description, price, id, onEdit, onDelete}) => {

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
        </CardContent>
        <CardActions>
            <Button size="small" onClick={() => onEdit(id)}>
                Edit
            </Button>
            <Button size="small" onClick={() => onDelete(id)}>
                Delete
            </Button>
        </CardActions>
    </Card>
}
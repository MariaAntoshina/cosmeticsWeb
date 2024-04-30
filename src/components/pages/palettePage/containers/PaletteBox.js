import {Button, Card, CardActions, CardContent, CardMedia, Chip, Stack, Typography,Rating} from "@mui/material";
import React from "react";

export const PaletteBox = ({brand, name, image, description, rating, price, id, tags, handleEdit, onDelete}) => {

    return <Card style={{ maxWidth: 300 }}>
        <CardMedia component="img" image={image} alt={name} />
        <CardContent>
            <Typography variant="h8" fontWeight="bold" component="div">
                {brand[0]?.title}
            </Typography>
            <Typography variant="h7" component="div">
                {name}
            </Typography>
            <Typography overflow={'scroll'} variant="body2" color="text.secondary" style={{ maxHeight: 100, minHeight: 100 }}>
                {description}
            </Typography>
            <Rating
                margin="dense"
                label="Rating"
                type="number"
                fullWidth
                value={rating}
                readOnly
            />
            <Typography variant="h6" color="text.secondary">
                Price: ${price}
            </Typography>

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

        </CardContent>
        <CardActions>
            <Button size="small" onClick={() => handleEdit({id, name, image, description, price, brand, tags, rating})}>
                Edit
            </Button>
            <Button size="small" onClick={() => onDelete(id)}>
                Delete
            </Button>
        </CardActions>
    </Card>
}
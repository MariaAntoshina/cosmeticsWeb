import React, { useState } from 'react';
import { Paper, Typography, Button, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';



import image1 from '../../../../resources/imgs/original-GLOBAL_PRIMARY_BANNER_(Desktop)_(2)-111543.avif'
import image2 from '../../../../resources/imgs/original-GR_Desktop-034204.avif'
import image3 from '../../../../resources/imgs/original-Tilbury_Desktop-033316.avif'


const images = [image1, image2, image3];

const SimpleCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    return (
        <div style={{  margin: 'auto' }}>
            <Paper>
                <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} style={{ width: '100%' }} />
            </Paper>
            <div style={{ padding: '20px' }}>
                <Typography variant="h5">Slide {currentSlide + 1}</Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.
                </Typography>
                <Button variant="contained" color="primary">Learn More</Button>
                <IconButton onClick={prevSlide}>
                    <ArrowBack />
                </IconButton>
                <IconButton onClick={nextSlide}>
                    <ArrowForward />
                </IconButton>
            </div>
        </div>
    );
};

export default SimpleCarousel;


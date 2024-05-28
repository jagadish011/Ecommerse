// MainCarousel.jsx
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import mainCarouselData from './MainCarouselData';


const MainCarousel = () => (
    <AliceCarousel
        mouseTracking
        items={mainCarouselData.map(item => (
            <img
                src={item.src}
                alt={item.alt}
                className="item"
                data-value={item.value}
            />
        ))}
        controlsStrategy="alternate"
        disableButtonsControls
        autoHeight
        autoPlay
        autoPlayInterval={2000}
        infinite
        animationDuration={1000} 
    />
);

export default MainCarousel;

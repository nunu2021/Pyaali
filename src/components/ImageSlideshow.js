import React, { useState } from 'react';
import "../styles/index.css"; // Import your CSS for styling

const images = [
    { src: require('../img/past/chai_selling-1.jpeg'), alt: 'Image 0' },
    { src: require('../img/past/chai-selling-2.jpeg'), alt: 'Image 1' },
    { src: require('../img/past/chai-selling-3.jpeg'), alt: 'Image 2' },
    { src: require('../img/past/chai-selling-4.jpeg'), alt: 'Image 3' },
    { src: require('../img/past/chai-selling-5.jpeg'), alt: 'Image 4' },
    { src: require('../img/past/chai-selling-6.jpeg'), alt: 'Image 5' },
    { src: require('../img/past/chai-selling-7.jpeg'), alt: 'Image 6' },
    { src: require('../img/past/chai-selling-8.jpeg'), alt: 'Image 7' },




];

const ImageSlideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slideshow-container">
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="slideshow-image" />
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default ImageSlideshow; 
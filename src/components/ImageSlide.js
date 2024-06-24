import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpeg";
import slide3 from "../images/slide3.webp";
import slide4 from "../images/slide4.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ImageSlide = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const carouselContainerStyle = {
        height: '300px',
        paddingLeft: "10px",
        paddingRight: "10px",
        width: "100%"
    };

    const handleProducts = () => {
        navigate("/products"); // Use navigate to go to /products
    };

    const Images = [
        { url: slide1 },
        { url: slide2 },
        { url: slide3 },
        { url: slide4 }
    ];

    return (
        <div>
            <Carousel autoPlay showThumbs={false} showArrows={true} infiniteLoop>
                {Images.map((img, index) => (
                    <img style={carouselContainerStyle} key={index} src={img.url} alt={`slide-${index}`} />
                ))}
            </Carousel>
            <button style={{ marginTop: "3%" }} onClick={handleProducts} className="btn btn-dark view-product-btn">
                View Product <FontAwesomeIcon className="ms-3" icon={faCaretDown} />
            </button>
        </div>
    );
};

export default ImageSlide;

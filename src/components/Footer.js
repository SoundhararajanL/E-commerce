import React from 'react';

import icon1 from "../images/social-Fb.png";
import icon2 from "../images/social-X.png";
import icon3 from "../images/social-Wapp.png";
import icon4 from "../images/social-Insta.png";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
    const Icons = [
        { url: icon1 },
        { url: icon2 },
        { url: icon3 },
        { url: icon4 }
    ];

    return (
        <div style={{marginTop:"3%"}} className="footer-container">
            
            <p className="text-center lead">
                Soundhar Private Limited is an Indian e-commerce company, headquartered in Bangalore, and incorporated in Singapore as a private limited company
            </p>
            <div className="text-center">
                <h5 className="fw-bold">
                    Customer support: <span className="text-primary">+123 345 654 90</span>
                </h5>
                <h5 className="fw-bold">
                    Founders: <span className="text-primary">Soundhararajan L</span>
                </h5>
            </div>
            <div  className="icons-container">
                {Icons.map((icon, index) => (
                    <img style={{marginBottom:"1%"}} key={index} src={icon.url} className="social-icon " alt={`social-icon-${index}`} />
                ))}
            </div>
        </div>
    );
}

export default Footer;

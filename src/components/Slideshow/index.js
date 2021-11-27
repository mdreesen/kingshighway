import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slide.css';

const images = [
    './images/bailey.webp',
    './images/evans.webp',
    './images/wright.webp'
];

const properties = {
    indicators: true,
    arrows: false
  }

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide scale={0.4} {...properties}>
                {
                    images.map((each, index) => <img key={index} style={{
                        'height': '30rem',
                        'width': '40rem',
                        'marginLeft': 'auto',
                        'marginRight': 'auto',
                        'backgroundSize': 'contain',
                        'boxShadow': '0 0 50px rgba(0, 0, 0, 0.7)'
                    }} src={each} />)
                }
            </Slide>
        </div>
    )
}

export default Slideshow;
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slide.css';

// Import image
import imageOne from '../../utils/eventImages/eventOne.webp';

const images = [
    imageOne
];

const properties = {
    indicators: true,
    arrows: true
  }

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide scale={0.4} {...properties}>
                {
                    images.map((each, index) => <img className="event_img" key={index} style={{
                        'marginLeft': 'auto',
                        'marginRight': 'auto',
                        'object-fit': 'cover',
                        'boxShadow': '0 0 50px rgba(0, 0, 0, 0.7)'
                    }} src={each} />)
                }
            </Slide>
        </div>
    )
}

export default Slideshow;
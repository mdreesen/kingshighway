import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Import Images
import imageOne from '../../utils/eventImages/eventOne.webp'

// Import Event Data
import eventData from '../../utils/eventdata.json';

const Slideshow = () => {

    return (
        <Carousel>
            {
                eventData?.events?.map((item, index) => {
                    console.log(item)
                    return (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={`../../utils/eventImages/${item?.imageName}.webp`}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })
            }
            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imageOne}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imageOne}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imageOne}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    )
}

export default Slideshow;
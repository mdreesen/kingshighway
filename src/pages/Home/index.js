import React, { Suspense } from 'react';
import { Parallax } from 'react-parallax';
import Carousel from '../../components/Carousel';
import './home.css';

// Import Hero Image (mobile)
import heroImage from '../../utils/heroImages/choirImage.webp';

// import Event Images
import eventOne from '../../utils/eventImages/eventOne.webp';

// Import Connect Images
import connectOne from '../../utils/connectImages/connectOne.webp';
import connectTwo from '../../utils/connectImages/connectTwo.webp';
import connectThree from '../../utils/connectImages/connectThree.webp';
import connectFour from '../../utils/connectImages/connectFour.webp';

// Event Image Array
const eventArr = [eventOne];

// Connect Image Array
// const connectArr = [connectOne, connectTwo, connectThree, connectFour]
const connectArr = [
    {
        image: connectOne,
        text: 'Events'
    },
    {
        image: connectTwo,
        text: 'About Us'
    },
    {
        image: connectThree,
        text: 'Giving'
    },
    {
        image: connectFour,
        text: 'Media'
    }
]

const HeroSection = () => {
    return (
        <section className="hero_content">
            <Parallax bgImage={heroImage} strength={200}>
                <div className="parallax-content">
                    <h2 className="hero_title">Kings Highway<br/>Deliverance Church<br/>International</h2>
                </div>
            </Parallax>
            <div className="time_section">
                <h3 className="service">Service<br/>Times</h3>
                <p className="service_p">Sunday Service:</p>
                <p className="service_p">10am - 12pm Central</p>
            </div>
        </section>
    );
}

const EventSection = () => {
    return (
        <section className="event_container">
            <div className="text_container">
                <h2 className="section_title">Upcoming Events</h2>
                {
                    eventArr.map((image, index) => {
                        return (
                            <Suspense fallback={<div />} key={`event-${index}-image`}>
                                <div className="event_content">
                                    <Carousel/>
                                </div>
                            </Suspense>
                        );
                    })
                }
            </div>
        </section>
    );
}

const ConnectSection = () => {
    return (
        <section className="connect_container">
            <h2 className="section_title">Get Connected</h2>
            {connectArr.map((item, index) => {
                return (
                    <Suspense fallback={<div />} key={`connect-${index}-image`}>
                        <div className="connect_image_container">
                            <img className="connect_image" alt="" src={item.image} loading="lazy"/>
                            <div className="image_text_container"/>
                            <h3 className="image_text">{item.text}</h3>
                        </div>
                    </Suspense>
                )
            })}
        </section>
    );
}

const Home = () => {

    return (
        <div>
            <HeroSection />
            <EventSection />
            <ConnectSection />
        </div>
    );
};

export default Home;

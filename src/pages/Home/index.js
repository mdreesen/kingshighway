import React, { Suspense } from 'react';
import { Parallax } from 'react-parallax';
import './home.css';

// Import Hero Video (desktop)
import videoOne from '../../utils/videos/choirone.webm';

// Import Hero Image (mobile)
import heroImage from '../../utils/heroImages/choirImage.png';

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
const connectArr = [connectOne, connectTwo, connectThree, connectFour]

const HeroVideo = () => {
    return (
        <section className="hero_content">
            <video
                muted="muted" autoplay="autoplay" playsinline="playsinline" loop="loop"
            >
                <source src={videoOne} type="video/mp4" />
            </video>
        </section>
    );
}

const HeroImage = () => {
    return (
        <section className="hero_content">
            <Parallax bgImage={heroImage} strength={200}>
                <div className="parallax-content"></div>
            </Parallax>
        </section>
    );
}

const EventSection = () => {
    return (
        <section className="event_container">
            <div className="text_container">
                {/* <h2>
                Our mission is to seek God’s face, teach the good news to the lost and to make disciples for the Kingdom of God, our hope is to be a blessing to you, your family and surrounding communities, we are dedicated to the gospel and continuing the works of our Lord and Savior, Jesus Christ.
            </h2> */}
                <h2 className="section_title">Upcoming Events</h2>
                {
                    eventArr.map((image, index) => {
                        return (
                            <Suspense fallback={<div />} key={`event-${index}-image`}>
                                <div className="event_content">
                                    <img className="event_img" alt="" src={image}></img>
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
            {connectArr.map((image, index) => {
                return (
                    <Suspense fallback={<div />} key={`connect-${index}-image`}>
                        <div className="connect_image_container">
                            <img className="connect_image" alt="" src={image} loading="lazy"></img>
                        </div>
                    </Suspense>
                )
            })}
        </section>
    );
}

const Home = () => {

    const browserwidth = window.innerWidth < 600 || window.screen.width < 600

    return (
        <div>
            {
                browserwidth === true ? (
                    <HeroImage />
                ) : (
                    <HeroVideo />
                )
            }
            <EventSection />
            <ConnectSection />
        </div>
    );
};

export default Home;

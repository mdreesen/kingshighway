import React, { Suspense } from 'react';
import { Parallax } from 'react-parallax';
import ReactPlayer from 'react-player';
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

const HeroSection = () => {
    return (
        <section className="hero_content">
            <ReactPlayer
                className='react-player'
                width='100%'
                height='100%'
                loop={true}
                controls={false}
                muted={true}
                playing={true}
                url={[
                    { src: videoOne, type: 'video/webm' },
                ]}
            />
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

    return (
        <div>
            <HeroSection />
            <EventSection />
            <ConnectSection />
        </div>
    );
};

export default Home;

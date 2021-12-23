import React from 'react';
import './home.css';

import videoOne from '../../utils/videos/choirone.mp4';
// import videoTwo from '../../utils/videos/choirtwo.mp4'
// import videoThree from '../../utils/videos/prayer.mp4';
// import videoFour from '../../utils/videos/choirthree.mp4'

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
                            <div className="event_content" key={`event-${index}-image`}>
                                <img className="event_img" alt="" src={image}></img>
                            </div>
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
                    <div className="connect_image_container" key={`connect-${index}-image`}>
                        <img className="connect_image" alt="" src={image}></img>
                    </div>
                )
            })}
        </section>
    );
}

const Home = () => {
    return (
        <div>
            <section className="hero_content">
                <video
                    className="video_home"
                    autoPlay
                    loop
                    muted
                >
                    <source src={videoOne} />
                </video>
            </section>
            <EventSection/>
            <ConnectSection />
        </div>
    );
};

export default Home;

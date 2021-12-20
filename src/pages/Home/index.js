import React from 'react';
import './home.css';

import videoOne from '../../utils/videos/choirone.mp4';
// import videoTwo from '../../utils/videos/choirtwo.mp4'
// import videoThree from '../../utils/videos/prayer.mp4';
// import videoFour from '../../utils/videos/choirthree.mp4'

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
                    <source src={videoOne}/>
                </video>
            </section>
            <section className="mission_content">
                <div className="text_container">
                    <h2>
                        Our mission is to seek God’s face, teach the good news to the lost and to make disciples for the Kingdom of God, our hope is to be a blessing to you, your family and surrounding communities, we are dedicated to the gospel and continuing the works of our Lord and Savior, Jesus Christ.
                    </h2>
                </div>
                {/* <img alt="" className="bishop_rose_img" src="./images/homePic.webp"></img> */}
            </section>
        </div>
    );
};

export default Home;

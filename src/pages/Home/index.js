import React from 'react';
import './home.css';

import Cards from '../../components/Cards';
import Slideshow from '../../components/Slideshow';

const Home = () => {
    return (
        <div>
            <section className="hero_content">
                {/* <h1 className="title">Kings Highway <br /> Deliverance Church, INTl</h1> */}
                {/* <Slideshow /> */}
            </section>
            <section className="mission_content">
                <div className="text_container">
                    <h2>
                        Our mission is to seek God’s face, teach the good news to the lost and to make disciples for the Kingdom of God, our hope is to be a blessing to you, your family and surrounding communities, we are dedicated to the gospel and continuing the works of our Lord and Savior, Jesus Christ.
                    </h2>
                </div>
                <img alt="" className="bishop_rose_img" src="./images/homePic.webp"></img>
            </section>
            <section className="card_container">
                <Cards />
            </section>
        </div>
    );
};

export default Home;

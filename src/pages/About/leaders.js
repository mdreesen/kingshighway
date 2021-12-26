import React from 'react';
import { Parallax } from 'react-parallax';
import './about.css';

// Importing images
import whoWeAre from '../../utils/heroImages/whoWeAre.webp';

// importing leader cards
import Cards from '../../components/Cards';

const HeroSection = () => {
    return (
        <section className="hero_content">
            <Parallax bgImage={whoWeAre} strength={200}>
                <div className="parallax-content">
                    <h2 className="hero_title">Who We Are</h2>
                </div>
            </Parallax>
        </section>
    );
}

const About = () => {
    return (
        <div>
        <HeroSection/>
            <section className="leader_section">
                <h1 className="section_title">Leaders</h1>
                <Cards />
            </section>
        </div>
    );
};

export default About;
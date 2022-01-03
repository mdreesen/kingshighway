import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom'

// import images
import church_gary from '../../utils/churchImages/church_gary.webp';
import church_lansing from '../../utils/churchImages/church_lansing.webp';

const Churches = () => {

    return (
        <div>
            <section className='church_hero'>
                <Parallax bgImage={church_gary} strength={200}>
                    <div className="parallax-content">
                        <h2 className="hero_title">Gary</h2>
                    </div>
                </Parallax>
                <Parallax bgImage={church_lansing} strength={200}>
                    <div className="parallax-content">
                        <h2 className="hero_title">Lansing</h2>
                    </div>
                </Parallax>
            </section>
            <section>
                <div>This section will be about KHDCI Lansing</div>
                <div>
                    <Link to="/churches/gary">Gary</Link>
                    <Link to="/churches/lansing">Lansing</Link>
                </div>
            </section>
        </div>
    );
};

export default Churches;
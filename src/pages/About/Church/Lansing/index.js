import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom'

// import images
import church_lansing from '../../../../utils/churchImages/church_lansing.webp';

const Lansing = () => {
    return (
        <div>
            <section>
                <Parallax bgImage={church_lansing} strength={200}>
                    <div className="parallax-content">
                        <h2 className="hero_title">Kings Highway<br />Lansing</h2>
                    </div>
                </Parallax>
            </section>
            <section>
                <Link to="/churches">Back</Link>
                <Link to="/churches/gary">Gary</Link>
                <div>This section will be about KHDCI Lansing</div>
            </section>
        </div>
    );
};

export default Lansing;
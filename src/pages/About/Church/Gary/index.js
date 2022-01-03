import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom'

import church_gary from '../../../../utils/churchImages/church_gary.webp';

const Gary = () => {
    return (
        <div>
            <section>
                <Parallax bgImage={church_gary} strength={200}>
                    <div className="parallax-content">
                        <h2 className="hero_title">Kings Highway<br />Gary</h2>
                    </div>
                </Parallax>
            </section>
            <section>
                <Link to="/churches">Back</Link>
                <Link to="/churches/lansing">Lansing</Link>
                <div>This section will be about KHDCI Gary</div>
            </section>
        </div>
    );
};

export default Gary;
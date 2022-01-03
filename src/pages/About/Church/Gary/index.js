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
                <h4>Affiliated Churches</h4>
                <div className='church_links'>
                    <Link className='link' to="/churches">Back</Link>
                    <Link className='link' to="/churches/lansing">Lansing</Link>
                </div>
                <h4>About Church KHDCI Gary</h4>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In ornare quam viverra orci sagittis eu volutpat. Duis ultricies lacus sed turpis tincidunt. Sed augue lacus viverra vitae congue eu consequat. Amet nisl suscipit adipiscing bibendum est ultricies integer. Enim diam vulputate ut pharetra sit amet. Iaculis urna id volutpat lacus. Tempus iaculis urna id volutpat. Libero justo laoreet sit amet cursus sit amet dictum. Eget lorem dolor sed viverra ipsum nunc. Et netus et malesuada fames ac turpis egestas integer eget. Elit ut aliquam purus sit amet luctus venenatis lectus. Id faucibus nisl tincidunt eget nullam non. Facilisis mauris sit amet massa vitae. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Mauris in aliquam sem fringilla. At auctor urna nunc id cursus metus aliquam eleifend mi. Lorem dolor sed viverra ipsum nunc. Convallis convallis tellus id interdum velit laoreet id. Sem integer vitae justo eget.

                    Quam elementum pulvinar etiam non quam lacus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Elementum integer enim neque volutpat ac tincidunt. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Justo laoreet sit amet cursus sit amet dictum sit amet. Leo in vitae turpis massa sed elementum tempus. A erat nam at lectus urna duis convallis. Amet porttitor eget dolor morbi non arcu risus quis. Tristique magna sit amet purus gravida quis blandit. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae.</div>
            </section>
        </div>
    );
};

export default Gary;
import React from 'react';

import Cards from '../../components/Cards';

const Leaders = () => {
    return (
        <div>
            <section className="leaders">
                <div className="text_container">
                    {/* <h2>
                        Our mission is to seek God’s face, teach the good news to the lost and to make disciples for the Kingdom of God, our hope is to be a blessing to you, your family and surrounding communities, we are dedicated to the gospel and continuing the works of our Lord and Savior, Jesus Christ.
                    </h2> */}
                    <Cards />
                </div>
            </section>
        </div>
    );
};

export default Leaders;

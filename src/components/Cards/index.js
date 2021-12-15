import * as React from 'react';

import data from '../../utils/data.json';

export default function LeaderCard() {

    const leaderdata = data.leaders;
    console.log(leaderdata)

    return (
        <div>
            {
                leaderdata?.map((leader, index) => {
                    return (
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

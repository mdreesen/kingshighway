import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

// Importing card CSS
import './card.css';

// Importing leaderData
import leaderdata from '../../utils/leaderdata.json';

export default function LeaderCard() {

    const data = leaderdata.leaders;
    console.log(data)

    const LeftAsset = (props) => {
        return (
            <div>
                <div className="left_asset">
                    <div className='asset_container'>
                        <img className='asset' src={`./images/${props.leaderImg}.webp`}></img>
                    </div>
                    <div className="divider"></div>
                    <div className='content_container'>
                        <h3 className='leader_name'>{props.leaderName}</h3>
                        <p className="about_text">{props.aboutLeader}</p>
                    </div>
                </div>
            </div>
        );
    };

    const RightAsset = (props) => {
        return (
            <div>
                <div className='right_asset'>
                    <div className='content_container'>
                        <h3 className='leader_name'>{props.leaderName}</h3>
                        <p className="about_text">{props.aboutLeader}</p>
                    </div>
                    <div className="divider"></div>
                    <div className='asset_container'>
                        <img className='asset' src={`./images/${props.leaderImg}.webp`}></img>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Row xs={1} md={1} className="g-4">
            {
                data?.map((leader, index) => {
                    const side = index % 2 === 0 ? 'left_asset' : 'right_asset';
                    return (
                        <div className="card_display">
                            <div className={side}>
                                {
                                    index % 2 === 0 ? (
                                        <LeftAsset aboutLeader={leader?.about} leaderName={leader?.name} leaderImg={leader?.image} />
                                    ) : (
                                        <RightAsset aboutLeader={leader?.about} leaderName={leader?.name} leaderImg={leader?.image} />
                                    )
                                }
                            </div>
                            <div className='mobile'>
                                <Card>
                                    <Card.Img variant="top" src={`./images/${leader.image}.webp`} />
                                    <Card.Body>
                                        <Card.Title>{leader.name}</Card.Title>
                                        <Card.Text>
                                            {leader.about}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    );
                })
            }
        </Row>
    );
}

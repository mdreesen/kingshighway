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

    return (
<Row xs={1} md={2} lg={4} className="g-4">
        {
                data?.map((leader, index) => {
                    return (
                            <Card>
                                <Card.Img variant="top" src={`./images/${leader.image}.webp`}/>
                                <Card.Body>
                                    <Card.Title>{leader.name}</Card.Title>
                                    <Card.Text>
                                        {leader.about}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                    );
                })
            }
            </Row>
    );
}

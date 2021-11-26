import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import data from '../../utils/data.json';

export default function LeaderCard() {

    const leaderdata = data.leaders;
    console.log(leaderdata)

    return (
        <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
            {
                leaderdata?.map((leader, index) => {
                    return (
                        <Grid item xs={2} sm={3} md={4} key={index}>
                            <Card sx={{ maxWidth: 345 }} key={`${leader.name}-${index}`}>
                                <CardHeader
                                    title={leader.name}
                                />
                                <div>
                                    <CardMedia
                                        component="img"
                                        height="270"
                                        image={`./images/${leader.image}.webp`}
                                        alt={`leader ${leader.name}`}
                                    />
                                </div>
                                {/* <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {leader.about}
                                    </Typography>
                                </CardContent> */}
                                {/* <CardActions disableSpacing>
                                </CardActions> */}
                            </Card>
                        </Grid>
                    );
                })
            }
        </Grid>

    );
}

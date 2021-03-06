import { CardMedia, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Service = (props) => {

    const { name, description, img } = props.service;

    return (
        <div>
            <Grid item xs={2} sm={4} md={4}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                        height="140"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
};

export default Service;
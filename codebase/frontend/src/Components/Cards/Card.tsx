import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// importing image
import DadaWriting from "../../Assets/DadaWriting.jpeg";

// importing hooks
import { useNavigate } from 'react-router-dom';

export default function ActionAreaCard({cardTitle, toRoute}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(toRoute);
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={handleClick}>
                <CardMedia
                    component="img"
                    height="200"
                    image={DadaWriting}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {cardTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Please click here to write your Story!
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
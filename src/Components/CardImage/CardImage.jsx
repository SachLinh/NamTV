import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import "./card.scss";

export default function CardImage(props) {
  return (
    <Card className='card_item' sx={{ minWidth: props.minWidth }} variant="outlined">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.item.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.item.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
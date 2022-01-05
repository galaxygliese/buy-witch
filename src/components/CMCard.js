import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CMCard(props){
  const image_id = Math.floor(Math.random()*100000);
  {/*// const imageLink = "https://source.unsplash.com/ACoZwVwjElU/1920x1260" */}
  const imageLink = props.imageLink;
  return (
    <Card
      sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardActionArea>
      <CardMedia
        component="img"
        sx={{
          pt: '1',
        }}
        image={imageLink}
        alt={image_id}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          広告
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}

import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import FullScreenDialog from './ProductDetail';

export default function ProductCard(props){
  const product = props.data;
  const prices = [parseInt(product.data1.price), parseInt(product.data2.price), parseInt(product.data3.price)];
  const minPrice = Math.min.apply(Math, prices);
  console.log(prices, minPrice);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardActionArea onClick={handleClickOpen}>
      <CardMedia
        component="img"
        sx={{
          // 16:9
          pt: '1',
        }}
        image={props.data.data1.imgfile}
        alt="random"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography>
          {minPrice}円より
        </Typography>
      </CardContent>
      </CardActionArea>
      <FullScreenDialog product={product} state={open} handleClose={handleClose} />
    </Card>
  );
}

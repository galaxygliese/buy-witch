import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import Slide from '@mui/material/Slide';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import { makeStyles } from '@mui/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const theme = useTheme();
  const amazonPrice = props.product.data1.price + "円";
  const mercariPrice = props.product.data2.price + "円";
  const rakutenPrice = props.product.data3.price + "円";
  return (
    <div>
      <Dialog
        maxWidth="md"
        open={props.state}
        onClose={props.handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={props.handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {props.product.name}
            </Typography>
            {/*}<Button autoFocus color="inherit" onClick={props.handleClose}>

            </Button>*/}
          </Toolbar>
        </AppBar>
        <Grid container style={{paddingTop:"0%"}}>
          <Grid sm={12} md={6} style={{padding:"3%"}}>
              <img width="100%" src={props.product.data1.imgfile} />
          </Grid>
          {/*<Grid sm={12} md={6} style={{paddingTop:"5%", paddingLeft:"1%"}}>*/}
          <Grid sm={12} md={6} style={{padding:"3%"}}>
            <Box sx={{ boxShadow: 3 }}>
             <Card variant="outlined">
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  製品
                </Typography>
                <Typography variant="h5" component="div">
                  {props.product.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {props.product.detail}
                </Typography>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                  <ListItemButton onClick={()=> window.open(props.product.data1.link, "_blank")}>
                      <ListItemAvatar>
                        <Avatar src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" />
                      </ListItemAvatar>
                      <ListItemText primary="アマゾン" secondary={amazonPrice} />
                  </ListItemButton>
                  <ListItemButton onClick={()=> window.open(props.product.data2.link, "_blank")}>
                      <ListItemAvatar>
                        <Avatar src="https://moto-neta.com/wp/wp-content/uploads/fe7fb211fa503a251ef25c3323a9b4bf.jpg" />
                      </ListItemAvatar>
                      <ListItemText primary="メルカリ" secondary={mercariPrice} />
                  </ListItemButton>
                  <ListItemButton onClick={()=> window.open(props.product.data3.link, "_blank")}>
                      <ListItemAvatar>
                        <Avatar src="https://seeklogo.com/images/R/rakuten-logo-A75F21521D-seeklogo.com.png" />
                      </ListItemAvatar>
                      <ListItemText primary="楽天" secondary={rakutenPrice} />
                  </ListItemButton>
              </List>
              </CardContent>
             </Card>
            </Box>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import AOS from "aos";
import "aos/dist/aos.css";

import NavBar from './Navbar';
import ProductCard from './ProductCard';
import CMCard from './CMCard';
import {products} from '../database';
import '../witch.css';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Merx. inc
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#757ce8',
      main: '#7AF0B0',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const typegraphyTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#757ce8',
      main: '#7AF0B0',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily:
      '"Island Moments", cursive',
  },
})

const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const CarouselItem = (props) =>{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default function Album() {
  const numProducts = products.length;
  const numCMs = 3;
  const numLength = numProducts + numCMs;
  const genCardList0 = Array(numCMs).fill(1);
  const genCardList = genCardList0.concat(Array(numProducts).fill(0));
  {/*const isCMarray = shuffleArray(genCardList);*/}
  const isCMarray = [0, 1, 0, 1, 0, 1, 0, 0, 1];
  const CMList = [
    "https://c.tenor.com/HRmrV-iuTegAAAAC/mcdonalds-im-lovin-it.gif",
    "https://i.gifer.com/origin/1c/1cd34da8569e891dc6a74517504642f4.gif",
    "https://thumbs.gfycat.com/FoolhardySociableCurassow-size_restricted.gif",
    "https://media0.giphy.com/media/HdQGkepCubYoU/giphy.gif"
  ];
  let productCount = 0;
  let cmCount = 0;

  const [searchInput, setSearchInput] = React.useState('');

  const DefaultContents = () => {
    return (
      <Grid container spacing={4} data-aos="fade-up">
        {
          isCMarray.map((isCM, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              {
                isCM ? <CMCard imageLink={CMList[cmCount++]} /> : <ProductCard data={products[productCount++]} />
              }
            </Grid>
          ))
        }
      </Grid>
    );
  }

  const TargetContents = (products) => {
    return (
      <Grid container spacing={4} data-aos="fade-up">
      {
          products.map((product, index) => (
          <Grid item key={product.name} xs={12} sm={6} md={4}>
            {
              product.name.toLowerCase().includes(searchInput.toLowerCase()) ? <ProductCard data={product} />:<div />
            }
          </Grid>
        ))
       }
      </Grid>
    );
  }

  React.useEffect(() => {
    AOS.init({
    duration : 2000
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar setSearchInput={setSearchInput} />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 0, //15
            pb: 6,
          }}
        >
        <Grid container style={{paddingTop:"10%"}}>
          <Grid row xs={12}>
            <img data-aos="fade-down" width="60%" style={{borderRadius: "4%"}} src="https://stroll.work/wp-content/uploads/2020/10/mercariStationLP-yoko.gif"/>
          </Grid>
        </Grid>
          <Container>
            <ThemeProvider theme={typegraphyTheme}>
              <Typography
                data-aos="fade-right"
                component="h1"
                variant="h1"
                align="center"
                color="text.primary"
                gutterBottom
                className="witchfont"
              >
                Buy Witch
              </Typography>
            </ThemeProvider>
            <Typography data-aos="fade-left" variant="h5" align="center" color="text.secondary" paragraph>
              それもっと安く買えますよ！🪄
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} >
          {/* End hero unit */}
          {
            searchInput.length === 0 ?
              DefaultContents():
              TargetContents(products)
          }
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>

        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >

        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

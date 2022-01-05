import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import logo from '../Logo.png';

import AccountDialog from './AccountDialog';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha('#7AF0B0', 0.15),
  '&:hover': {
    backgroundColor: alpha('#7AF0B0', 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  color:'#7AF0B0'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:'#7AF0B0'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(6)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
  },
}));

const pages = ['ホーム', 'アカウント登録'];

export default function NavBar(props){
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openAccountDialog, setOpenAccountDialog] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseAccountDialog = () => {
    setOpenAccountDialog(false);
  }
  const handleOpenAccountDialog = () => {
    setOpenAccountDialog(true);
  }

  const handleSearchInput = (e) => {
    props.setSearchInput(e.target.value);
  }

  return (
    <AppBar >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key="home" onClick={handleCloseNavMenu}>
                <Typography textAlign="center" color="#7AF0B0">ホーム</Typography>
              </MenuItem>
              <MenuItem key="account" onClick={() => handleOpenAccountDialog()}>
                <Typography textAlign="center" color="#7AF0B0">アカウント登録</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Avatar src={logo} sx={{ mr:2 }}/>
          <Typography variant="h6" color="#7AF0B0" noWrap>
              Buy Witch
          </Typography>

          <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearchInput}
              />
          </Search>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} spacing={3} >
              <Button
                key="home"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#7AF0B0', display: 'block' }}
                style={{color:"#7AF0B0"}}
              >
                ホーム
              </Button>
              <Button
                key="account"
                onClick={() => handleOpenAccountDialog()}
                sx={{ my: 2, color: '#7AF0B0', display: 'block' }}
                style={{color:"#7AF0B0"}}
              >
                アカウント登録
              </Button>
          </Box>
        </Toolbar>
      </Container>
      <AccountDialog open={openAccountDialog} handleClose={handleCloseAccountDialog} />
    </AppBar>
  );
};

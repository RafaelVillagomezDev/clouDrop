import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import CardMedia from '@mui/material/CardMedia';

import Button from '@mui/material/Button'

import MenuItem from '@mui/material/MenuItem'
import images from "../../assets/images"

const pages = ['Home', 'My Photos', 'Fav']




const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  

  return (
    
    <AppBar position="static"   sx={{backgroundColor:'#fffcf9'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <CardMedia
              component="img"
              height="120"
              image={images.logo}
              alt="logo"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color:'black'}}/>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent:'end' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' , textAlign:'left' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{flexGrow:0,display:{xs:'block', md:'none'}}}>
              <CardMedia
                  component="img"
                  height="120"
                  image={images.logo}
                  alt="logo"
                />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar

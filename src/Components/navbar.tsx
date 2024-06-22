import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface Props {
  theme: string;
  toggleTheme: () => void;
}

function ResponsiveAppBar({ theme, toggleTheme}: Props) {
  const pages = ['Home', 'Blog', 'Alumni Registration', 'FAQs', 'Albums', 'Book of Records', 'Council'];

  const pathMap: { [key: string]: string } = {
    'Home': '/',
    'Blog': '/blog',
    'Alumni Registration': '/alum',
    'FAQs': '/faqs',
    'Albums': '/album',
    'Book of Records': '/records',
    'Council': '/council',
    'Cadets Corner': '/corner',
  };

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    setMenuOpen(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setMenuOpen(false);
  };

  const handleMenuItemClick = (page: string) => {
    navigate(pathMap[page]);
    handleCloseNavMenu();
  };

  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  return (
    <>
      <AppBar position="sticky" sx={{ background: theme === 'light' ? '#003399' : '#111111' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src="https://gymkhana.iitb.ac.in/~ncc/images/logos/nccimg1.svg" alt="" style={{ width: '30px' }} />
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: 'flex-end' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem 
                    key={page} 
                    onClick={() => handleMenuItemClick(page)}
                    selected={location.pathname === pathMap[page]}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button 
                  key={page} 
                  sx={{ 
                    my: 2, 
                    color: 'white',
                    backgroundColor: location.pathname === pathMap[page] ? (theme === 'light' ? '#dcdcdc54' : '#444444') : 'transparent',  
                    borderRadius: '4px', 
                    display: 'block' 
                  }} 
                  onClick={() => handleMenuItemClick(page)}
                >
                  {page}
                </Button>
              ))}
            </Box>
            {theme === 'light' ? <LightModeIcon onClick={toggleTheme} /> : <DarkModeIcon onClick={toggleTheme} />}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default ResponsiveAppBar;

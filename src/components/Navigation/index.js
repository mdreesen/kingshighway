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
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

// Importing custom CSS
import './nav.css';
import '../../fonts/fonts.css';

// const pages = ['Home', 'About', 'Give'];
const pages = [
    {
        "name": "Home",
        "link": "/"
    },
    {
        "name": "About",
        "sub": ["Gary", "Michigan", "Pakistan", "Africa"],
        "link": "/about"
    },
    {
        "name": "Give",
        "link": "/give"
    }
]
const settings = ['Profile', 'Account', 'Dashboard'];
// const about = ['Gary', 'Michigan', 'Pakistan', 'Africa'];

export default function Navigation() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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

    const Title = () => {
        return (
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
                Kings Highway
            </Typography>
        );
    }

    const SubMenu = () => {
        return (
            <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {pages.subs.map((sub) => (
                <MenuItem key={sub} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{sub}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        );
    }

    const MobileLinkCollection = () => {
        return (
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
                {pages?.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page?.name}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        );
    }

    const MobileMenu = () => {
        return (
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="Mobile Hamburger Menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <MobileLinkCollection />
            </Box>
        );
    };

    const DesktopMenu = () => {
        return (
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                        key={page?.name}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                        href={page?.link}
                    >
                        {page?.name}
                    </Button>
                ))}
            </Box>
        );
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Title Component */}
                    <Title />
                    {/* Mobile Menu Component */}
                    <MobileMenu />
                    {/* Desktop Menu Component */}
                    <DesktopMenu />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
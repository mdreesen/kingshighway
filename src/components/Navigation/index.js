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

    // Title Component
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

    // Mobile Menu Component
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

    // Mobile Menu Component
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

    // Desktop Menu Component
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
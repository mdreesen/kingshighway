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
        "sub": [
            {
                "name": "Gary",
                "link": "/location/Gary"
            },
            {
                "name": "Michigan",
                "link": "/location/Michigan"
            },
            {
                "name": "Pakistan",
                "link": "/location/Pakistan"
            },
            {
                "name": "Africa",
                "link": "/location/Africa"
            }

        ],
        "link": "/about"
    },
    {
        "name": "Give",
        "link": "/give"
    },
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
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}
            >
                KHDCI
            </Typography>
        );
    }

    // Mobile Title Component
    const MobileTitle = () => {
        return (
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center', alignItems: 'center' }}
            >
                KHDCI
            </Typography>
        );
    }

    const AboutMenu = () => {
        return (
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
                {pages?.sub?.map((sub) => (
                    <MenuItem key={sub?.name} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{sub?.name}</Typography>
                    </MenuItem>
                ))}
            </Menu>
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
                    <MenuItem key={page?.name} onClick={handleCloseNavMenu}>
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
                {/* Mobile Title Component */}
                <MobileTitle />
            </Box>
        );
    };

    console.log("about", pages?.map((page) => page?.sub?.map((sub) => sub.name)))

    // Desktop Menu Component
    const DesktopMenu = () => {
        return (
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {/* Desktop Title Component */}
                <Title />
                {pages.map((page) => (
                    page.sub ? (
                        <Button
                            key={page?.name}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            onClick={AboutMenu}
                        >
                            {page?.name}
                        </Button>
                    ) : (
                        <Button
                            key={page?.name}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            href={page?.link}
                        >
                            {page?.name}
                        </Button>
                    )
                ))}
            </Box>
        );
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Mobile Menu Component */}
                    <MobileMenu />
                    {/* Desktop Menu Component */}
                    <DesktopMenu />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import './nav.css';

export default function Navigation() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "white" }}>
                <Toolbar>
                    {/* <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    style={{color: "blue"}}
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: "blue", fontWeight: "bold" }}>
                        <Button href="/">Home</Button>
                        <Button href="/global-ministries">Global Ministries</Button>
                        <Button href="/contact">Contact</Button>
                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
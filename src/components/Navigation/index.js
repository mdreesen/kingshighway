import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './nav.css';

export default function Navigation() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "white" }}>
                <Toolbar>
                    <div className="nav_name_container">
                        <h1 className="nav_name">KHDCI</h1>
                    </div>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: "blue", fontWeight: "bold" }}>
                        <Button href="/">Home</Button>
                        <Button href="/about">About</Button>
                        {/* <Button href="/global-ministries">Global Ministries</Button> */}
                        <Button href="/contact">Contact</Button>
                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
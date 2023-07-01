import * as React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import logo from '../../../assets/Logos/logo.jpg'
import './NavBar.css'


function NavBar(props) {

  return (
    <AppBar position="sticky" style={{backgroundColor : '#977A4D'}}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ maxWidth: '100%' }}>
        <img
          src={logo}
          alt="Logo"
          className="responsive-logo"
          style={{
            paddingTop: '1rem',
            paddingBottom : '.5rem',
            maxHeight : "100%",
            width: "100%"
          }}
        />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;

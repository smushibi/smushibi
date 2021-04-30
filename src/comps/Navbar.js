import React from 'react';
import Container from '@material-ui/core/Container'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';



export default function Navbar (){

    return(
        <Container maxWidth="xs">
          <AppBar>
              <Toolbar>
                  <IconButton>
                    <HomeRoundedIcon color="secondary" fontSize="large"/>
                  </IconButton>
                  <Typography>Scipio-Code</Typography>
              </Toolbar>
          </AppBar>
        </Container>
    )
} 
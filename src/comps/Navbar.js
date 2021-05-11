import React from 'react';
import { createBrowserHistory } from 'history';
import Container from '@material-ui/core/Container'
import { AppBar, IconButton, Toolbar, Typography, Button } from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import {useSession} from "../firebase/UserProvider"
import {logout} from '../firebase/auth';
import { Link } from 'react-router-dom';




export const history = createBrowserHistory();

const Navbar = () =>{


const {user} = useSession();

const LogoutUser = async () =>{
  await logout();
  history.goBack("/signup");
}
    return(
        <Container maxWidth="xs">
          <AppBar>
              <Toolbar>
                  <IconButton>
                    <Link to="/"><HomeRoundedIcon color="secondary" fontSize="large"/></Link>
                  </IconButton>
                  <Typography style={{flexGrow:1}}>Scipio</Typography>
                  {!!user && <Button variant="contained" color="secondary" onClick={LogoutUser}>logout</Button>}
              </Toolbar>
          </AppBar>
        </Container>
    )
} 

export default  Navbar
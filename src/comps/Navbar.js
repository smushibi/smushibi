import React from 'react';
import Container from '@material-ui/core/Container'
import { AppBar, IconButton, Toolbar, Typography, Button } from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import {useHistory} from "react-router-dom"
import {useSession} from "../firebase/UserProvider"
import {logout} from '../firebase/auth';


export default function Navbar (props){

let his = useHistory();
const {user} = useSession();

const LogoutUser = async () =>{
  await logout();
  his.push("/signup");
}
    return(
        <Container maxWidth="xs">
          <AppBar>
              <Toolbar>
                  <IconButton>
                    <HomeRoundedIcon color="secondary" fontSize="large"/>
                  </IconButton>
                  <Typography style={{flexGrow:1}}>Scipio</Typography>
                  {!!user && <Button variant="contained" color="secondary" onClick={LogoutUser}>logout</Button>}
              </Toolbar>
          </AppBar>
        </Container>
    )
} 
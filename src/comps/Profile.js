import { Container, Typography } from '@material-ui/core';
import React from 'react';
import {useSession} from "../firebase/UserProvider"

const Profile =()=> {

const {user} = useSession()
if (!user){
    return (
    <Container style={{marginTop:120}} >
            <Typography variant="h1" color="secondary"> No user </Typography>
    </Container>
    );
}

return (
    <Container  style={{marginTop:220}}>
        <Typography variant="h4">{user.displayName}</Typography>
        <Typography>{user.email}</Typography>
        <Typography>{user.uid}</Typography>
    </Container>
    
)
}

export default Profile
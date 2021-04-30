import { Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import LockIcon from '@material-ui/icons/Lock';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import EmailIcon from '@material-ui/icons/Email';


const SignUp = () => {
    return (
        
        <Container >
            <form>
                <Paper elevation={2}>
                    <Grid container spacing={3} 
                        alignItems="center" 
                        style={{marginTop:120}} 
                        direction="column"
                        justify="center">
                        <Grid item >
                            <Typography variant="h4" color="primary">Sign Up </Typography>
                            </Grid>
                        <Grid item>
                            <TextField  size="small" required InputProps={{endAdornment: < AccountCircleIcon fontSize="small"/> }} type="text" label="first name" variant="outlined"/>
                        </Grid>
                        <Grid item>
                            <TextField size="small" required InputProps={{endAdornment: < AccountBoxIcon fontSize="small"/> }} type="text" label="last name" variant="outlined"/>
                        </Grid>
                        <Grid item>
                            <TextField size="small" required InputProps={{endAdornment: < EmailIcon  fontSize="small"/> }} type="email" label="email" variant="outlined"/>
                        </Grid>
                        <Grid item>
                            <TextField size="small" required InputProps={{endAdornment: < LockIcon fontSize="small"/> }} type="password" label="password" variant="outlined"/>
                        </Grid>
                        <Grid item>
                            <Button type="submit"  variant="contained" color="primary">submit</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
        </Container>
    );
}

export default SignUp;

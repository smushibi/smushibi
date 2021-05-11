import { Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import SendIcon from '@material-ui/icons/Send';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
    
    email: yup.string().email(" invalid email !").required("enter your email !"),
    password: yup.string().required("your password ! "),

  });

const SignIn = () => {

const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
});
const onSubmit = data => console.log(data);

    return (
        
        <Container  style={{marginTop:120}} maxWidth="xs">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Paper elevation={2}>
                    <Grid container spacing={3} 
                        alignItems="center" 
                        direction="column"
                        justify="center">
                        <Grid item >
                            <Typography variant="h4" color="primary">Sign In </Typography>
                        </Grid>
                        <Grid item>
                            <TextField size="small" {...register("email")}required InputProps={{endAdornment: < EmailIcon  fontSize="small"/> }} type="email" label="email" variant="outlined"/>
                            <Typography color="error">{errors.email?.message}</Typography>
                        </Grid>
                        <Grid item>
                            <TextField size="small" {...register("password")} required InputProps={{endAdornment: < LockIcon fontSize="small"/> }} type="password" label="password" variant="outlined"/>
                            <Typography color="error">{errors.password?.message}</Typography>
                        </Grid>
                        <Grid item>
                            <Button type="submit" size="small" endIcon={<SendIcon/>}  variant="contained" color="primary">submit</Button>
                        
                        </Grid>
                        <Grid item>
                            <Typography color="primary" variant="h6"><Link style={{textDecorationLine:'none'}} to="/signup">Sign Up</Link></Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
        </Container>
    );
}

export default SignIn;

import { Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import LockIcon from '@material-ui/icons/Lock';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import EmailIcon from '@material-ui/icons/Email';
import SendIcon from '@material-ui/icons/Send';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import LinearProgress from '@material-ui/core/LinearProgress';
// firebase config /import
import { signup} from "../firebase/auth"

const schema = yup.object().shape({
    firstName: yup.string().required("your last name ! "),
    lastName: yup.string().required(" your first name ! "),
    email: yup.string().email(" invalid email !").required("enter your email !"),
    password: yup.string().required("your password ! "),
  });
 
 
const SignUp = () => {
const [loading, setLoading] = useState(true)
const { register, handleSubmit,reset, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
});
const onSubmit = async(data) => {
    try {
        await signup(data);
        reset();
        setLoading(false)
    }catch(error){
        console.log(error)
    }
}


    return (
        
        <Container >
            <form onSubmit={handleSubmit(onSubmit)}>
                {loading && <Container><LinearProgress/></Container>}
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
                            <TextField  size="small"  {...register("firstName")} required InputProps={{endAdornment: < AccountCircleIcon fontSize="small"/> }} type="text" label="first name" variant="outlined"/>
                            <Typography color="error">{errors.firstName?.message}</Typography>
                        </Grid>
                        <Grid item>
                            <TextField size="small"  {...register("lastName")}required InputProps={{endAdornment: < AccountBoxIcon fontSize="small"/> }} type="text" label="last name" variant="outlined"/>
                            <Typography color="error">{errors.lastName?.message}</Typography>
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
                    </Grid>
                </Paper>
            </form>
        </Container>
    );
}

export default SignUp;

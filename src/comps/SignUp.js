import { Button, Container, Grid, Paper, TextField, Typography  } from '@material-ui/core';
import React, { useState } from 'react';
import LockIcon from '@material-ui/icons/Lock';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import EmailIcon from '@material-ui/icons/Email';
import SendIcon from '@material-ui/icons/Send';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import CircularProgress from '@material-ui/core/CircularProgress';

// firebase config /import
import { signup} from "../firebase/auth"
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
    firstName: yup.string().required("your last name ! "),
    lastName: yup.string().required(" your first name ! "),
    email: yup.string().email(" invalid email !").required("enter your email !"),
    password: yup.string().required("your password ! "),
  });
 
 
const SignUp = (props) => {
const [loading, setLoading] = useState(false)
const [error, setError] = useState("")
const { register, handleSubmit,reset, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
});
const onSubmit = async(data) => {
    let newUser;
    setLoading(true)
    try {
        newUser = await signup(data);
        reset();
        setLoading(false)
    }catch(error){
        console.log(error)
        setError(error.message)
    
    }
    if (newUser ) { props.history.push(`/profile/${newUser.uid}`)}
    else{
        setLoading(false)
    }
    
    
}


    return (
        
        <Container maxWidth="xs" >
          
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <Paper elevation={2}>
                    <Grid container spacing={3} 
                        alignItems="center" 
                        style={{marginTop:100}} 
                        direction="column"
                        justify="center">
                        <Grid item >
                            {!!error && <Typography align="center" color="error">{error}</Typography>}
                            <Typography variant="h4" align="center" color="primary">Sign Up </Typography>
                            
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
                        <Grid item>
                            <Typography  color="primary"  variant="h6"  ><Link style={{textDecorationLine:'none'}}  to="/login">log in</Link></Typography>
                        </Grid>
                        <Grid item>
                        {loading &&
                            <CircularProgress color="primary"/>
                            }
                        </Grid>
                    </Grid>
                </Paper>
            </form>
        </Container>
    );
}

export default SignUp;

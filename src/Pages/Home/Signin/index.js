import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from  '@material-ui/core/Avatar';
import LockOutlineIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';
import Link  from '@material-ui/core/Link';


const useStyle = makeStyles((theme) => ({

    root: {
        height: '100vh',
        backgroundColor: 'White',
        justifyContent: 'center'
    },

    avatar: {
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(1),
    },

    img: {
        height: 100,
        width: 300,
    },

    container: {
        marginTop: 75,
        marginLeft: 150,
    },

    button: {
        marginTop: theme.spacing(1),
    },

    form: {
        margin: theme.spacing(4, 4, 0, 4)
    },

  }))

function Signin(){

    const classes = useStyle();
    
    return (

        <Grid container className={classes.root}>
            <Grid>
                <Box display="flex" flexDirection="column" alignItems='center' mt={8}>
                    <Avatar className={classes.avatar}>
                        <LockOutlineIcon />
                    </Avatar>
                    <Typography variant='h6'>
                        Acesso Restrito para Funcionários
                    </Typography>
                    <form className={classes.form} method="post">
                        <TextField 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"

                        />
                        <Link to="/Funcionario" style={{textDecoration: 'none'}}>
                        <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth 
                        className={classes.button}>
                        Entrar
                        </Button>
                        </Link>

                    </form>
                </Box>
                <Box className={classes.container}>
                    <img src="./images/locar.jpg" className={classes.img}/>
                </Box>
            </Grid>
        </Grid>
    )
}
export default Signin;
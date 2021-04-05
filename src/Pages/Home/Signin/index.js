import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from  '@material-ui/core/Avatar';
import LockOutlineIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';
import Link  from '@material-ui/core/Link';
import { useNavigate } from 'react-router-dom';




const useStyle = makeStyles((theme) => ({

    root: {
        height: '100vh',
        backgroundColor: 'White'
    },

    image: {
        backgroundImage: 'url(/images/back4.png)',
        backgroundSize: 'Cover',
        backGroungRepeat: 'none',
    },

    avatar: {
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(1),
    },

    button: {
        marginTop: theme.spacing(1),
    },

    form: {
        margin: theme.spacing(0, 4, 0, 4)
    },

    links: {
        justifyContent: 'space-between'
    },
    
  }))

function Signin(){
    const classes = useStyle();
    const navigate = useNavigate();

    function handleSingIn() {
        // chamada a api
        // se o retorno estiver ok
        // direciona para a home, se não
        // exibe msg para o usuario
    }

    return (

        <Grid container className={classes.root}>
            <Grid 
                item
                container 
                direction="column"
                justify="center"
                alignItems="center"
                md={7}
                className={classes.image}>
                <Typography style={{color: "white", fontSize: 35, lineHeight: '45px'}}>
                     <strong>Simplificando sua viagem</strong>
                 </Typography>
                 <Typography variant="body2" style={{color: 'rgb(255, 255, 255, 0.7', marginTop: 30, fontSize: 15, lineHeight: '30px'}}>
                     Venha fazer parte dessa grande família! 
                 </Typography>
            </Grid>

            <Grid item md={5}>
                <Box display="flex" flexDirection="column" alignItems='center' mt={8}>
                    <Avatar className={classes.avatar}>
                        <LockOutlineIcon />
                    </Avatar>
                    <Typography variant='h6'>
                        Acesso
                    </Typography>
                    <form className={classes.form}>
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
                        <Button 
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={classes.button}>
                            {/* onClick={}> */}
                            Entrar
                        </Button>

                        <Grid container className={classes.links}>

                            <Grid item>
                                <Link>Esqueceu sua senha?</Link>
                            </Grid>
                            <Grid item>
                                <Link>Não tem uma conta? Registre-se</Link>
                            </Grid>

                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}
export default Signin;
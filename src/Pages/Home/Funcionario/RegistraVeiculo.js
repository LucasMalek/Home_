import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LeftDrawer from '../Components/Drawer';
import TextField from '@material-ui/core/TextField';



const useStyle = makeStyles((theme) => ({

    root: {
        height: '100vh',
        backgroundColor: 'White',
        justifyContent: 'center'
    },

    avatar: {
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(3),
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

}));

function RegistrarVeiculo() {

    const classes = useStyle();

    return (

        <div>
            <LeftDrawer />
                <Grid container className={classes.root}>
                    <Grid>
                        <Box display="flex" flexDirection="column" alignItems='center' mt={8}>
                            <Avatar className={classes.avatar}>
                                <DriveEtaIcon />
                            </Avatar>
                            <Typography variant='h6'>
                                {/* Registro de veículos */}
                            </Typography>
                            <form className={classes.form} method="post">
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    width='90'
                                    id="Nome"
                                    label="Nome"
                                    name="Nome"
                                    autoComplete="Nome"
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="Modelo"
                                    label="Modelo"
                                    type="Modelo"
                                    id="Modelo"
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="Diaria"
                                    label="Diaria"
                                    type="Diaria"
                                    id="Diaria"
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="Kilometragem"
                                    label="Kilometragem"
                                    type="Kilometragem"
                                    id="Kilometragem"
                                />

                            </form>
                        </Box>
                    </Grid>
                </Grid>
        </div>

    )
}


export default RegistrarVeiculo


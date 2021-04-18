import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import Typography from '@material-ui/core/Typography';
import Avatar from  '@material-ui/core/Avatar';


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

}));

function RegistrarVeiculo(){

    const classes = useStyle();

    return(

        <Grid container className={classes.root}>
            <Grid>
                <Box display="flex" flexDirection="column" alignItems='center' mt={8}>
                <Avatar className={classes.avatar}>
                        <DriveEtaIcon />
                    </Avatar>
                    <Typography variant='h6'>
                        Registros de Veículos
                    </Typography>
                    <form className={classes.form} method="post">

                    </form>

                </Box>
            </Grid>
        </Grid>

    );

};


export default RegistrarVeiculo
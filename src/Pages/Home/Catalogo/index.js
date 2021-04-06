import react from 'react';
import { Button, makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    appBar: {
        boxShadow: 'none',
        position: 'static',

    },

    grow: {
        flexGrow: 1,
    },

    logo: {
        maxHeight: 62,
        alignSelf: 'center',
    },

}));

function Catalogo() {

    const classes = useStyles();

    return(
        
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appBar}>
                <Toolbar variant="dense">

                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <img src="./images/locar.jpg" alt='logo' className={classes.logo}/>
                    <div className={classes.grow}/>
                    <Button variant='outlined' color='primary'>Fazer Login</Button>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Catalogo;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },
    img: {
        maxHeight: 62,
        alignSelf: 'center',
        

    },
    grow: {
        flexGrow: 1,
    },
    

});


function Header() {
    const classes = useStyles();
    return (
        <AppBar position='fixed' color="inherit" className={classes.appBar}>
            <Toolbar>
                <img src="./images/locar.jpg" alt="logo" className={classes.img} />
                <div className={classes.grow}></div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
import React from 'react';
import { Button, SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { AlignCenter, AlignLeft, Bell, Italic } from 'react-feather'
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },
    img: {
        maxHeight: 62,
        alignSelf: 'center',

    },
    grow: {
        flexGrow: 0.5,
    },
    useSection: {
        display: 'flex',
        alignItems: 'center'

    },
    bell: {
        marginRight: 10,
    },

    button: {
        marginRight: 90,
        height: 60,
    },
    busca: {
        backgroundColor: 'white',
        border: 'solid 1px',
        width: 1120,
        height: 30,
        borderRadius: '15px',

        marginRight: 230,
        display: 'flex',
    },
    input: {
        float: 'left',
        backgroundColor: 'transparent',
        paddingLeft: 5,
        fontSize: Italic,
        fontSize: '15px',
        height: 30,
        width: '100%',
        marginRight: 230,
        border: '3px',
        borderRadius: '15px'
    }
});


function Header() {
    const classes = useStyles();
    return (
        <AppBar position='fixed' color="inherit" className={classes.appBar}>
            <Toolbar>
                <img src="./images/locar.jpg" alt="logo" className={classes.img} />
                <div className={classes.grow}></div>
                <div className={classes.useSection}>
                    <div className={classes.busca}>
                        <input className={classes.input} type="text" placeholder="Buscar..."></input>
                        <SearchIcon></SearchIcon>
                    </div>
                </div>
                <div className={classes.grow}></div>
                <div className={classes.useSection}>
                    <SvgIcon className={classes.bell}>
                        <Bell ></Bell>
                    </SvgIcon>
                    <Avatar alt="L" src="/" />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
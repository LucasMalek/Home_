import React, { useState } from 'react';
import { Button, makeStyles, useTheme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    hide: {
        display: 'none',
    },
    appBar: {
        boxShadow: 'none',
        position: 'static',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },

    appBarShift: {
        width: `calc(100% - ${240}px)`,
        marginLeft: 240,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none',
    },

    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        //necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },

    content: {
        display: 'flex',
        flexGrow: 1,
        padding: theme.spacing(3,3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -240,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },

    grow: {
        flexGrow: 1,
    },

    logo: {
        maxHeight: 62,
        alignSelf: 'center',
    },
    nested: {
        paddingLeft: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
    },

}));

function Catalogo() {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [openOptions, setOpenOptions] = useState(false)

    const handleClick = () => {
        setOpen(!open);
    };

    const handleDrawerOpen = () => {
        setOpenOptions(true);
    };

    const handleDrawerClose = () => {
        setOpenOptions(false);
    };

    return (

        <div className={classes.root}>
            <AppBar color='inherit'
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: openOptions,
                })}>
                <Toolbar variant="dense">

                    <IconButton
                        edge="start"
                        className={clsx(classes.menuButton, openOptions && classes.hide)}
                        color="inherit"
                        aria-label="menu"
                        edge="start"
                        onClick={handleDrawerOpen}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src="./images/locar.jpg" alt='logo' className={classes.logo} />
                    <div className={classes.grow} />
                    <Button variant='outlined' color='primary'>Fazer Login</Button>

                </Toolbar>
            </AppBar>
            
            <Box display='flex'>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={openOptions}
                    classes={{
                        paper: classes.drawerPaper,
                    }}>

                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Toolbar />

                    <div className={classes.drawerContainer}>
                        <ListItem button onClick={handleClick}>
                            <ListItemIcon>
                                <DirectionsCarIcon />
                            </ListItemIcon>
                            <ListItemText primary="Modelos" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>

                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>

                                    {['CrossOver', 'Esportivo', 'Hatch e Hatchback', 'Jipe', 'Picape',
                                        'Sedan', 'SUV', 'Van e Minivan'].map((text, index) => (
                                            <ListItem button key={text}>
                                                <ListItemText primary={text} />
                                            </ListItem>
                                        ))}

                                </ListItem>
                            </List>
                        </Collapse>

                    </div>
                </Drawer>
                <Box>
                    
                    <main
                        className={clsx(classes.content, {
                            [classes.contentShift]: openOptions,
                        })}
                    >

                        <div className={classes.drawerHeader} />
                        <Typography
                            variant='h5'
                            color='textPrimary'
                            style={{ fontHeight: 800 }}
                        >
                            Catálogo
                        </Typography>
                    </main>
                </Box>
            </Box>
        </div>
    );
}

export default Catalogo;
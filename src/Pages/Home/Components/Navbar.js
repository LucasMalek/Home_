import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, ListItem, ListItemText } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Autorenew } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({

    root: {
        padding: theme.spacing(2),
        width: 275,
        marginRight: theme.spacing(2),
    },
    button: {
        width: '80%',
        margin: theme.spacing(2),
    },
    paper: {
        marginRight: theme.spacing(2),
        height: '220px',
        boxShadow: 'none',
        marginTop: 20,
    },
    list: {
        paddingLeft: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
    },
}));

const tags = [
    { id: 1, name: 'Veículos' },
    { id: 2, name: 'Alugar' },
    { id: 3, name: 'Automóveis' },
    { id: 4, name: 'Suporte' },
]

function Navbar() {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} >
            <ListSubheader component="div" id="Informações">
                <ListItem button className={classes.list}>

                    <ListItem button component={Link} to="/Catalogo" key={1}>
                        <ListItemText primary={"Catálogo"} />
                    </ListItem>
                    <ListItem button key={2}>
                        <ListItemText primary={"Alugar"} />
                    </ListItem>
                    <ListItem button key={3}>
                        <ListItemText primary={"Automóveis"} />
                    </ListItem>
                    <ListItem button key={4}>
                        <ListItemText primary={"Suporte"} />
                    </ListItem>
                    

                </ListItem>
            </ListSubheader>
        </Paper>
    )
}

export default Navbar;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, ListItem, ListItemText } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Autorenew } from '@material-ui/icons';

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
        height: '380px',
        boxShadow: 'none',
        marginTop: 20,
    }
}));

const tags = [
    { id: 1, name: 'Logar' },
    { id: 2, name: 'Alugar' },
    { id: 3, name: 'Automóveis' },
    { id: 4, name: 'Suporte' },
]

function Navbar() {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} >
            <Button variant="outlined" color="secondary" className={classes.button}>Registrar</Button>
            <ListSubheader component="div" id="Tags em alta">
                {
                    tags.map((item) => (
                        <ListItem dense button key={`item-${item.id}-${item.name}`}>
                            <ListItemText primary={`${item.name}`}></ListItemText>
                        </ListItem>

                    ))
                }
            </ListSubheader>
        </Paper>
    )
}

export default Navbar;
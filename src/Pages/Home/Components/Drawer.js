import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Header from './Header'
import { DonutLargeOutlined } from '@material-ui/icons';
import { useNavigate } from 'react-router';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    borderStyle: 'dotted',
    
  },
  drawerPaper: {
    width: drawerWidth,
    
  },
  drawerContainer: {
    overflow: 'auto',
    
  },
  
  logo: {
    maxHeight: 62,
    alignSelf: 'center',
},
item: {
  paddingTop: 10
}
}));

export default function LeftDrawer() {
  const navigate = useNavigate()
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <CssBaseline />
      <AppBar color='inherit' position="fixed" className={classes.appBar}>
        <Header/>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar  />
        <div className={classes.drawerContainer}>

            <Divider />
            < ListItem button key={'Registrar Veículo'} >
              <ListItemText onClick={() => navigate("/funcionario")} primary={'Registrar Veículo'} className={classes.item} />
            </ListItem >
            <ListItem button key={'Registrar Cliente'}>
              <ListItemText onClick={() => navigate("/regCliente")} primary={'Registrar Cliente'} className={classes.item} />
            </ListItem>
            <ListItem button key={'Nova Locação'}>
              <ListItemText primary={'Nova Locação'} className={classes.item} />
            </ListItem>
            <ListItem button key={'Registrar Retorno'}>
              <ListItemText primary={'Registrar Retorno'} className={classes.item} />
            </ListItem>
            <ListItem button key={'Pesquisar Veículo'}>
              <ListItemText primary={'Pesquisar Veículo'} className={classes.item} />
            </ListItem>

        </div>
      </Drawer>
      <Toolbar />
    </div>
  );
}



import React from 'react';
import LeftDrawer from '../Components/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(15,10,10,5),
  },

  logo: {
    maxHeight: 62,
    alignSelf: 'center',
},
}));



function Funcionario() {

  const classes = useStyles();

  
    return(
      <div className={classes.root}>
        <LeftDrawer />
        <h4 className={classes.content}>
          Fazer a tela aqui
        </h4>
    </div>
    )
    
}

export default Funcionario

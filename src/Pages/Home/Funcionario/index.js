import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Tab, Tabs,  } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';
import Header from '../Components/Header';
import Regveiculo from './RegVeiculo';
import RegCliente from './Regcliente';
import RegLocacao from './RegLocacao';
const drawerWidth = 240;

const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:500px)': {
    fontSize: '1.0rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexGrow: 1
  },
  root2: {
   flexDirection: 'column'
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
    // overflow: 'auto',
    width: '20%',
    maxWidth:'20%',
    display:'flex',
    flexDirection:'column',
    float:'left',
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(8,10,2,0),
  },

  logo: {
    maxHeight: 62,
    alignSelf: 'center',
},

container: {
  marginLeft: theme.spacing(5),
  marginRight: theme.spacing(5)
},
Drawer: {
  flexDirection: 'column',
  alignItems: 'center'
},
foo: {
  width: '100%',
  backgroundColor: 'white',
},
toptext: {
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  // paddingTop: 70,
  // width: '100%',
  // heith: 301,
  display:'flex',
  backgroundImage: 'url(/images/grey.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
},
image: {
  backgroundImage: 'url(./images/back2.jpg)',
  // width: '100%',
  // height: '529px',
  backgroundSize: 'cover',
  // opacit:'0.2',
  display:'flex',
},
divcadastro: {
  backgroundImage: 'url(./images/back2.jpg)',
  opacity: 2,
  // width: '100%',
  // height: '529px',
  // backgroundSize: 'cover',
  display:'flex',
},
back: {
 
  backgroundColor: '#B8B8B8',
}
}));



function Funcionario() {

  const classes = useStyles();
  const [tab,setTab] = useState()
  
  
  function TabPanel(props) {
    const { children, value, index, ...other } = props
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    )
}

  const handleChange = (event,newValue) => {
    setTab(newValue)
  }
  
    return(
      <>

          <Header/>
        <Box className={classes.drawerContainer}>

            < Tabs onChange={handleChange} orientation="vertical" value={tab} >
              <Tab   label={'Registrar Veículo'} className={classes.item} />
          
              <Tab label={'Registrar Cliente'} className={classes.item} />
           
              <Tab label={'Nova Locação'} className={classes.item} />
            
              {/* <Tab label={'Registrar Retorno'} className={classes.item} /> */}
            
              {/* <Tab label={'Pesquisar Veículo'} className={classes.item} /> */}
            </Tabs>
        </Box>

        <TabPanel value={tab} index={0}>
          <Regveiculo/>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <RegCliente/>
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <RegLocacao/>
        </TabPanel>
    </>
    )

}

export default Funcionario

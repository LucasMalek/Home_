import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Tab, Tabs,  } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Header from '../Components/Header';
import Clientes from '../Cliente';
import Veiculo from '../Veiculo';
import Alugueis from '../Aluguel';
import Funcionarios from '../Funcionario';
const useStyles = makeStyles((theme) => ({

  
  drawerContainer: {
    maxWidth:'40%',
    display:'flex',
    flexDirection:'column',
    float:'left',
    marginTop: theme.spacing(12),
  }
    
}));



function HomeFuncionario() {

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
            {value === index && <Box p={13}>{children}</Box>}
        </Typography>
    )
}

  const handleChange = (event,newValue) => {
    setTab(newValue)
  }
  
    return(
      <>

          <Header/>
        <div className={classes.drawerContainer}>

            < Tabs onChange={handleChange} orientation="vertical" value={tab} >
              <Tab label={'Cliente'} className={classes.item} />
              <Tab label={'Funcionário'} className={classes.item} />
              <Tab label={'Veículo'} className={classes.item} />
              <Tab label={'Locação'} className={classes.item} />
          
           

            
              {/* <Tab label={'Pesquisar Veículo'} className={classes.item} /> */}
            </Tabs>
        </div>

        <TabPanel value={tab} index={0}>
          <Clientes/>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <Funcionarios/>
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <Veiculo/>
        </TabPanel>
        <TabPanel value={tab} index={3}>
          <Alugueis/>
        </TabPanel>
    </>
    )

}

export default HomeFuncionario

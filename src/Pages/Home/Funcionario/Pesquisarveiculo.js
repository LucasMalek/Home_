import React from 'react';
import LeftDrawer from '../Components/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Avatar, Container, Grid, Paper, TableHead } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Footer from '../Components/Footer';
import Box from '@material-ui/core/Box';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
const useStyles = makeStyles((theme) => ({

root: {
height: '100vh',
backgroundImage: 'url(./images/back2.jpg)'
},


avatar: {
    height: theme.spacing(6),
    width: theme.spacing(6),
    background: theme.palette.primary.main,
    marginTop: 15,
    
}

}
))

function Pesquisarveiculo()
{
    const classe = useStyles()

    return(
       <Grid
       
       container
       display="flex"
       alignItems="center"
       justify= "center"
       className={classe.root}
       >   
            <Grid
            item
            flexDirection="column"
            display="flex"
            justify= "center"
            alignItems="center"
            >
              
           
             <Box flexDirection= "column" alignItems= "center" display="flex" marginBottom="400px">
             
                 < EmojiTransportationIcon fontSize="large"/>
            
            <Typography variant="h2" >Pesquisar veículo</Typography>
             <form className={classe.container}>
             <TextField
             
             margin="normal"
             required
             
             id="Nome"
             name="Nome"
             autoComplete="Nome"
             autoFocus
             helperText="Placa do veículo"
            >
            </TextField>
            </form>
            </Box>
           </Grid>

       </Grid>

    )
}

export default Pesquisarveiculo;
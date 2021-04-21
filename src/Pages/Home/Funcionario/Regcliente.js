import React from 'react';
import LeftDrawer from '../Components/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container, Grid, Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Footer from '../Components/Footer';
import Box from '@material-ui/core/Box';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
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
    overflow: 'auto',
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
  paddingTop: 70,
  width: '100%',
  heith: 301,
  backgroundImage: 'url(/images/grey.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
},
image: {
  backgroundImage: 'url(./images/11.webp)',
  width: '100%',
  height: '650px',
  backgroundSize: 'cover',
},
back: {
 
  backgroundColor: '#B8B8B8',
}
}));


function Regcliente()
{
    const classes = useStyles();

  
    return(
      <div className={classes.root2}>
        <div className={classes.toptext} >
       <ThemeProvider theme={theme}>
       <Typography  style={{paddingLeft: 290, paddingBottom: 10, color: '#E6E6FA'}} variant="h3">Registrar Cliente</Typography>
       </ThemeProvider>
         </div>
      <div className={classes.root}>
        
        <div >
        <LeftDrawer />
        </div>
        <div className={classes.content}>
        
      
       <Grid container spacing={4} 
        justify="center"
        alignItems="center"
       > 
       <Grid
       item
       container
       className={classes.image}
       md={6}
       >

       </Grid>
       <Grid
       item
       container
       md={6}
       className={classes.back}
       >
       <Grid item xs={12} >
      <form className={classes.container}>
        <Typography variant="h6" >Nome</Typography>
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="Nome"
        
        name="Nome"
        autoComplete="Nome"
        autoFocus
        >
        </TextField>
      </form>
      </Grid>
      <Grid item xs={6}> 
      <form className={classes.container}>
        <Typography variant="h6" >CPF</Typography>
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="CPF"
        
        name="CPF"
        autoComplete="CPF"
        autoFocus
        InputProps={{
          startAdornment: <InputAdornment position="start">000.000.000.00</InputAdornment>,
        }}
        >
        </TextField>
      </form>
        </Grid>
        <Grid item xs={6}>
      <form className={classes.container}>
        <Typography variant="h6" >Data de nascimento</Typography>
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="Data"
        label="dd/mm/aa"
        name="Data"
        autoComplete="Data"
        autoFocus
        >
        </TextField>
      </form>
        </Grid>
        <Grid item xs={6}> 
      <form className={classes.container}>
        <Typography variant="h6" >CNH</Typography>
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="CNH"
        name="CNH"
        autoComplete="CNH"
        autoFocus
        InputProps={{
          startAdornment: <InputAdornment position="start">000000000</InputAdornment>,
        }}
        >
        </TextField>
      </form>
        </Grid>
        <Grid item xs={6}>
      <form className={classes.container}>
        <Typography variant="h6" >Telefone</Typography>
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="Telefone"
        name="Telefone"
        autoComplete="Telefone"
        autoFocus
        >
        </TextField>
      </form>
        </Grid>
        <Grid item xs={12}>
      <form className={classes.container} >
        <Typography variant="h6" >Endereço</Typography>
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="Endereço"
        name="Endereço"
        autoComplete="Endereço"
        autoFocus
        >
        </TextField>
      </form>
        </Grid>
        <Grid item xs={12}>
      <form className={classes.container} >
        <Typography variant="h6" >Informações adicionais</Typography>
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="Info"
        name="Info"
        autoComplete="Info"
        autoFocus
        multiline
        rows = {4}
        >
        </TextField>
      </form>
        </Grid>
       </Grid>
       </Grid>
        </div>
    </div>
    <div  className={classes.foo}>
    <Footer />
    </div>
    </div>
    )

}

export default Regcliente;
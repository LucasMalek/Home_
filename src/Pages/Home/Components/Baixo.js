import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
        width: 1195,
        paddingLeft: 700,
        backgroundImage: 'url(/images/grey.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      },
}));

function Baixo() {
    const classes = useStyles();

    return <div className={classes.root}>
      <ThemeProvider theme={theme}>
      <Typography variant="h3">Depoimento de clientes</Typography>
    </ThemeProvider>
    </div>;
}

export default Baixo
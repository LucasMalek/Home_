import Grid from '@material-ui/core/Grid';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,

    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

}));

const catalogoCarros = [

    {
        id: 1,
        title: 
            "Toro 2020",
        marca: "Fiat",
        kilimetragem: "8500 Km",
        tipo: 'CrossOver',
        img: "/images/carro1.jpg",
    },
    {
        id: 2,
        title: 
            "Toro 2020",
        marca: "Fiat",
        kilimetragem: "8500 Km",
        tipo: 'CrossOver',
        img: "/images/carro1.jpg",
    },
    {
        id: 3,
        title: 
            "Toro 2020",
        marca: "Fiat",
        kilimetragem: "8500 Km",
        tipo: 'CrossOver',
        img: "/images/carro1.jpg",
    },
    {
        id: 4,
        title: 
            "Toro 2020",
        marca: "Fiat",
        kilimetragem: "8500 Km",
        tipo: 'CrossOver',
        img: "/images/carro1.jpg",
    },
    {
        id: 5,
        title: 
            "Toro 2020",
        marca: "Fiat",
        kilimetragem: "8500 Km",
        tipo: 'CrossOver',
        img: "/images/carro1.jpg",
    },
    {
        id: 6,
        title: 
            "Toro 2020",
        marca: "Fiat",
        kilimetragem: "8500 Km",
        tipo: 'CrossOver',
        img: "/images/carro1.jpg",
    },
    {
        id: 7,
        title: 
            "Toro 2020",
        marca: "Fiat",
        kilimetragem: "8500 Km",
        tipo: 'CrossOver',
        img: "/images/carro1.jpg",
    },
    {
        id: 8,
        title: 
            "Toro 2020",
        marca: "Fiat",
        kilimetragem: "8500 Km",
        tipo: 'CrossOver',
        img: "/images/carro1.jpg",
    },


]

function CenteredGrid() {

    const classes = useStyles();

    return (

        <Grid container spacing={4}>

            {
                catalogoCarros.map((item, index) => (
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Box>
                            <img 
                                style={{ width: '100%'}}
                                alt={item.title}
                                src={item.img}
                            />
                            <Box>
                                <Typography
                                    style={{fontWeight: 600}}
                                    gutterBottom
                                    variant='body1'
                                    color='textPrimary'
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    display='block'
                                    variant='body2'
                                    color='textSecondary'
                                >
                                    {item.marca}
                                </Typography>
                                <Typography variant='body2' color='textSecondary'>
                                    {`${item.tipo} ${item.kilimetragem}`}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))
            }
            

        </Grid>
    )
}

export default CenteredGrid;

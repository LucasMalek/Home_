import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyle = makeStyles({

    root: {
        display: 'flex',
    },
    row:{
        display: 'flex',
    },
    img: {
        maxHeight: 80,

    },
    col1: {
        marginTop: 100,
        marginLeft: 400,
        marginBottom: 125,
    },
    list: {
        listStyle: 'none',
        margin: 75
    },

    col3: {
        marginTop: 250,
        marginLeft: 50,
    },
    
})


function Footer() {

    const classes = useStyle();

    return (

            <Box container className={classes.container}>
                <Box className={classes.row}>

                    {/* coluna 1 */}
                    <Box className={classes.col1}>
                        <img src='./images/locar.jpg' className={classes.img}/>
                    </Box>

                    {/* coluna 2 */}
                    <Box>
                        <ul className={classes.list}>
                            <li>Locadora de Carros Locar LTDA</li>
                            <li>Rua Progresso, Alvorada, nº 278</li>
                            <li>João Monlevade</li>
                            <li>Minas Geraise</li>
                            <li>CEP 35931-008</li>
                            <li>Telefone: (33) 98890-8372</li>
                        </ul>
                    </Box>

                    <Box className={classes.col3}>
                        <Link to="/sign-in" style={{textDecoration: 'none'}}><Button color='primary' className={classes.button}> Admim Login</Button></Link>
                    </Box>

                </Box>
            </Box>
    )
};

export default Footer
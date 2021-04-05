import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({

    root: {
        display: "flex",
        flexDirection: "row",
        height: "100vh",

    },

    left: {
        background: "blue",
        flexBasis: "58%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    right: {
        background: "yellow",
        flexBasis: "42%"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        margin: "64px 32px",
        alignItems: "center",
    },
    
  }))

function Signin(){
    const classes = useStyle();
    return (
        <div className={classes.root}>

            {/* Flex Item container*/}
            <div className={classes.left}>
                <Typography style={{color: "white", fontSize: 35, lineHeight: '45px'}}>
                    <strong>Simplificando sua viagem</strong>
                </Typography>
                <Typography variant="body2" style={{color: 'rgb(255, 255, 255, 0.7', marginTop: 30, fontSize: 15, lineHeight: '30px'}}>
                    Venha fazer parte dessa grande família! 
                </Typography>
            </div>

            {/* Flex Item */}
            <div className={classes.right}>
                <form className={classes.form}>
                    <h4>Acesso</h4>
                    <input type="text"/>
                    <input type="text"/>
                </form>
            </div>

        </div>
    )
}
export default Signin;
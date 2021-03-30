import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({

    root: {
        display: 'flex',
        flexDirection: 'column',
        height: 100,
        marginTop: '400px',
    },
    
  }))

function Signin(){
    const classe = useStyle();
    return (
        <div className={classe.root}>
         <Paper>
             <h1>
                Fodam-se sem bostas
             </h1>
         </Paper>
        </div>
    )
}
export default Signin;
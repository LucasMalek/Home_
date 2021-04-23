import React from 'react';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from  '@material-ui/core/Avatar';
import LockOutlineIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';
import * as Yup from 'yup';
import { FormHelperText } from '@material-ui/core';
import { Formik } from 'formik';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { signIn } from '../../../actions/accountActions';


const useStyle = makeStyles((theme) => ({

    root: {
        height: '100vh',
        backgroundColor: 'White',
        justifyContent: 'center'
    },

    avatar: {
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(3),
    },

    img: {
        height: 100,
        width: 300,
    },

    container: {
        marginTop: 75,
        marginLeft: 150,
    },

    button: {
        marginTop: theme.spacing(1),
    },

    form: {
        margin: theme.spacing(4, 4, 0, 4)
    },

}));

function Signin(){

    const classes = useStyle();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (

        <Grid container className={classes.root}>
            <Grid>
                <Box display="flex" flexDirection="column" alignItems='center' mt={8}>
                    <Avatar className={classes.avatar}>
                        <LockOutlineIcon />
                    </Avatar>
                    <Typography variant='h6'>
                        Acesso Restrito para Funcionários
                    </Typography>
                <Box className={classes.divcadastro} >
                <Formik
                    initialValues={{

                    email: '',
                    senha: '',
                    }}
                    validationSchema={Yup.object().shape({
                    email: Yup.string().max(50).min(20).required("Informe um email."),
                        senha: Yup.string().max(10,'Máximo 10 caracteres na senha.')
                        .min(5, 'Mínimo 5 caracteres na senha.').required('Favor informar uma senha.')
                    })}
                    onSubmit={async (
                        values,
                        { setErrors, setStatus, setSubmitting },
                    ) => {
                        try {
                            await dispatch(signIn(values.email, values.senha))
                            navigate("/home")
                        } catch(error){
                            const message =
                            (error.response && error.response.data.message) ||
                            'Alguma coisa aconteceu';
                            setStatus({ success: false });
                            setErrors({ submit: message });
                            setSubmitting(false);
                        }
                    }}
                >
                {({ errors, handleChange, handleSubmit, isSubmitting, values }) => (
                <form noValidate onSubmit = {handleSubmit} className={classes.form} >
                    <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                error={Boolean(errors.email)}
                value={values.email}
                helperText={errors.email}
                onChange={handleChange}
                ></TextField>
                <TextField
                variant="outlined"
                margin="normal"
                required
                type="password"
                fullWidth
                id="senha"
                label="Senha"
                name="senha"
                autoComplete="senha"
                autoFocus
                error={Boolean(errors.senha)}
                value={values.senha}
                helperText={errors.senha}
                onChange={handleChange}
                ></TextField>
                <Button
                        fullWidth
                        variant="contained"
                        // color="#E6E6FA"
                        // className={classes.button}
                        type="submit"
                        disbled={isSubmitting}
                    >
                        CADASTRAR FUNCIONÁRIO
                    </Button>
                    {errors.submit && (
                        <FormHelperText error>{errors.submit}</FormHelperText>
                    )}
                </form>
                )}
                </Formik>
                </Box>
                <Box className={classes.container}>
                    <img src="./images/locar.jpg" alt="" className={classes.img}/>
                </Box>
                </Box>
            </Grid>
        </Grid>
    )
}
export default Signin;
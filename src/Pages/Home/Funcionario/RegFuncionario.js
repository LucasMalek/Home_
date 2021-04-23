import React from 'react'
import { Box, Button, FormHelperText, makeStyles, TextField, Typography } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import apiFuncionario from '../../../utils/apiFuncionario';

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
  // drawer: {
  //   width: drawekrWidth,
  //   flexShrink: 0,
  // },
  // drawerPaper: {
  //   width: drawerWidth,
  // },
  drawerContainer: {
    // overflow: 'auto',
    width: '20%',
    maxWidth: '20%',
    display: 'flex',
    flexDirection: 'column',
    float: 'left',

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(8, 10, 2, 0),
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
    display: 'flex',
    backgroundImage: 'url(/images/grey.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  divcadastro: {
    // backgroundImage: 'url(./images/back2.jpg)',
    opacity: 2,
    // width: '100%',
    // height: '529px',
    // backgroundSize: 'cover',
    display: 'flex',
  },
  back: {

    backgroundColor: '#B8B8B8',
  },
  form: {
    margin: theme.spacing(2, 16, 2, 16)
  }
}));

export default function RegCliente() {
  const classes = useStyles()
  return (
    <Box className={classes.divcadastro} >
      <Formik
        initialValues={{
          nome: '',
          cpf: '',
          endereco: '',
          email: '',
          senha: '',
        }}
        validationSchema={Yup.object().shape({
          cpf: Yup.string()
            .min(11, 'CPF de 11 dígitos.')
            .required('Informe seu CPF'),
          nome: Yup.string().max(50)
            .min(10, 'O nome precisa ter ao menos 10 caracteres')
            .required('Favor informar o nome completo'),
          endereco: Yup.string().max(45, 'Informe seu endereço.')
            .required('Favor informar um endereço. '),
          email: Yup.string().required("Insira um email."),
          senha: Yup.string().required("Informe uma senha")
        })}
        onSubmit={async (
          values,
          { setErrors, setStatus, setSubmitting },
        ) => {
          try {
            await apiFuncionario.post(`/`, {
              cpf: values.cpf,
              nome: values.nome,
              endereco: values.endereco,
              email: values.email,
              senha: values.senha
            })
            setStatus({ success: true });
            setSubmitting(true);
            // props.close()
          } catch (error) {
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
          <form noValidate onSubmit={handleSubmit} className={classes.form} >
            <Box className={classes.toptext} >
              <Typography style={{ color: '#E6E6FA' }} variant="h3">Registrar um cliente</Typography>
            </Box>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nome"
              label="Nome Completo"
              name="nome"
              autoComplete="nome"
              autoFocus
              error={Boolean(errors.nome)}
              value={values.nome}
              helperText={errors.nome}
              onChange={handleChange}
            >
            </TextField>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={Boolean(errors.cpf)}
              value={values.cpf}
              helperText={errors.cpf}
              id="cpf"
              label="CPF"
              name="cpf"
              autoComplete="cpf"
              autoFocus
              onChange={handleChange}
            >
            </TextField>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={Boolean(errors.endereco)}
              value={values.endereco}
              helperText={errors.endereco}
              id="endereco"
              label="Endereço"
              name="endereco"
              autoComplete="endereco"
              autoFocus
              onChange={handleChange}

            >
            </TextField>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={Boolean(errors.telefone)}
              value={values.email}
              helperText={errors.email}
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}

            >
            </TextField>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={Boolean(errors.senha)}
              value={values.senha}
              helperText={errors.senha}
              id="senha"
              label="Senha"
              type="password"
              autoComplete="current-password"
              autoFocus
              onChange={handleChange}

            >
            </TextField>
            
            <Button
              fullWidth
              variant="contained"
              // color="#E6E6FA"
              // className={classes.button}
              type="submit"
              disbled={isSubmitting}
            >
              CADASTRAR CLIENTE
            </Button>
            {errors.submit && (
              <FormHelperText error>{errors.submit}</FormHelperText>
            )}
          </form>
        )}
      </Formik>
    </Box>
  )
}
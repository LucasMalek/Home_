import React, { useState } from 'react'
import { Box, Button, FormControl, FormHelperText, InputAdornment, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { Formik } from 'formik'
import * as Yup from 'yup';
import apiVeiculo from '../../../utils/apiVeiculo'
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
    margin: theme.spacing(2, 16, 2, 16)
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
  formControlTipo: {
    margin: theme.spacing(1),
    minWidth: '30%',
  },
}));
export default function Regveiculo() {
  const classes = useStyles()
  const [type, setType] = useState()

  const handleSelectedType = (tab) => {
    setType(tab)
  }
  return (
    <Box className={classes.divcadastro} >
      <Formik
        initialValues={{
          nome: '',
          modelo: '',
          valor: '',
          quilometragem: '',
          ano: '',
          placa: '',
        }}
        validationSchema={Yup.object().shape({
          nome: Yup.string().max(50)
            .min(5, 'O nome precisa ter ao menos 5 caracteres')
            .required('Favor informar o nome completo'),
          quilometragem: Yup.string()
            .required("Informe a quilometragem."),
          ano: Yup.string().required("Informe o ano."),
          placa: Yup.string().required("Informe a placa.")
        })}
        onSubmit={async (
          values,
          { setErrors, setStatus, setSubmitting },
        ) => {
          try {
            await apiVeiculo.post(`/adicionarcarro`, {
              Cnome: values.nome,
              modelo: type,
              valor_dia: values.valor,
              ano: values.ano,
              quilometragem: values.quilometragem,
              placa: values.placa,
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
          } finally {
            // props.getRows()
          }
        }}
      >
        {({ errors, handleChange, handleSubmit, isSubmitting, values }) => (
          <form className={classes.container} onSubmit={handleSubmit}>
            <Box className={classes.toptext} >
              <Typography style={{ color: '#E6E6FA' }} variant="h3">Registrar um veículo</Typography>
            </Box>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nome"
              label="Nome"
              name="nome"
              autoComplete="nome"
              autoFocus
              error={Boolean(errors.nome)}
              value={values.nome}
              helperText={errors.nome}
              onChange={handleChange}
            >
            </TextField>
            <FormControl className={classes.formControlTipo}>
              <InputLabel id="tipo">Modelo</InputLabel>
              <Select
                labelId="tipo"
                id="tipo"
                error={Boolean(errors.tipo)}
                value={type}
                helperText={errors.tipo}
                onChange={handleChange}
              >
                {['CrossOver', 'Esportivo', 'Hatch e Hatchback', 'Jipe', 'Picape',
                  'Sedan', 'SUV', 'Van e Minivan'].map((tab) => (
                    <MenuItem onClick={handleSelectedType(tab)} value={tab}>{tab}</MenuItem>
                  ))}
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="valor"
              label="valor"
              name="valor"
              autoComplete="valor"
              autoFocus
              error={Boolean(errors.valor)}
              value={values.valor}
              helperText={errors.valor}
              onChange={handleChange}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            >
            </TextField>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="ano"
              label="Ano do carro"
              name="ano"
              autoComplete="ano"
              autoFocus
              error={Boolean(errors.ano)}
              value={values.ano}
              helperText={errors.ano}
              onChange={handleChange}
            >
            </TextField>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="quilometragem"
              label="Quilometragem"
              name="quilometragem"
              autoComplete="quilometragem"
              autoFocus
              error={Boolean(errors.quilometragem)}
              value={values.quilometragem}
              helperText={errors.quilometragem}
              onChange={handleChange}
              InputProps={{
                startAdornment: <InputAdornment position="start">Km</InputAdornment>,
              }}
            >
            </TextField>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="placa"
              label="Placa"
              name="placa"
              autoComplete="placa"
              autoFocus
              error={Boolean(errors.placa)}
              value={values.placa}
              helperText={errors.placa}
              onChange={handleChange}
            >
            </TextField>
            <Button
              fullWidth
              variant="contained"
              color="#E6E6FA"
              // className={classes.button}
              type="submit"
              disbled={isSubmitting}
            >
              CADASTRAR CARRO
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
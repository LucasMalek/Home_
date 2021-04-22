import React, { useCallback, useEffect, useState } from 'react'
import { Box, FormControl, Button, FormHelperText, InputAdornment, InputLabel, makeStyles, Select, TextField, Typography, MenuItem } from '@material-ui/core';
import { Formik } from 'formik'
import * as Yup from 'yup';
import apiLocacao from '../../../utils/apiLocacao'
import apiVeiculo from '../../../utils/apiVeiculo'
import apiCliente from '../../../utils/apiCliente'


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
  formControl: {
    margin: theme.spacing(1),
    minWidth: '70%',
  },
  formControlCarro: {
    margin: theme.spacing(1),
    minWidth: '30%',
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
  }
}));
export default function RegLocacao() {
  const classes = useStyles()
  const [rows, setRowsCliente] = useState([])
  const [rowsCarro, setRowsCarro] = useState([])
  const [carroId, setCarro] = useState()
  const [clienteId, setClienteId] = useState()

  const handleSelectedCarro = (tab) => {
    setCarro(tab.id)
  }

  const handleSelectedCliente = (tab) => {
    setClienteId(tab.id)
  }

  const getCarros = useCallback(async () => {
    await apiVeiculo.get()
      .then(response => {
        console.log("AQUI2", response.data)
        setRowsCarro(response.data.carro)
      }).catch(error => {
        console.log(error)
      })
  }, [setRowsCarro]);

  const getRowsCliente = useCallback(async () => {
    await apiCliente.get()
      .then(response => {
        console.log("RESPOSTA", response)
        setRowsCliente(response.data.cliente)
      }).catch(error => {
        console.log(error)
      })

  }, [setRowsCliente])

  useEffect(() => {
    getRowsCliente()
    getCarros()
  }, [getRowsCliente, getCarros])

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
          valor: Yup.string().required("Informe o valor.")
        })}
        onSubmit={async (
          values,
          { setErrors, setStatus, setSubmitting },
        ) => {
          try {
            await apiLocacao.post(`/adicionaraluguel`, {
              id_f: 48,
              id_cl: clienteId,
              id_c: carroId,
              data_devolucao_prev: values.data,
              valor: values.valor,
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
              <Typography style={{ color: '#E6E6FA' }} variant="h3">Registrar uma locação</Typography>
            </Box>
            <FormControl className={classes.formControl}>
              <InputLabel id="cliente">Cliente</InputLabel>
              <Select
                labelId="cliente"
                id="cliente"
                error={Boolean(errors.idcliente)}
                value={clienteId}
                helperText={errors.idcliente}
                onChange={handleChange}
                renderValue={(value) => `${value.id} - ${value.nome}`}
              >
                {rows?.map((tab) => (
                  <MenuItem onClick={handleSelectedCliente(tab)} value={tab}>{tab.id} - {tab.nome} </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes.formControlCarro}>
              <InputLabel id="carro">Carro</InputLabel>
              <Select
                labelId="carro"
                id="carro"
                error={Boolean(errors.carro)}
                value={carroId}
                helperText={errors.carro}
                renderValue={(value) => `${value.modelo} - ${value.Cnome}`}
                onChange={handleChange}
              >
                {rowsCarro?.map((tab) => (
                  <MenuItem onClick={handleSelectedCarro(tab)} value={tab}>{tab.modelo} - {tab.Cnome}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              margin="normal"
              required
              error={Boolean(errors.data)}
              value={values.data}
              helperText={errors.data}
              type="date"
              fullWidth
              id="data"
              label="Data de Devolução (prevista)"
              name="data"
              autoComplete="data"
              autoFocus
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}

            >
            </TextField>
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
            <Button
              fullWidth
              variant="contained"
              color="#E6E6FA"
              // className={classes.button}
              type="submit"
              disbled={isSubmitting}
            >
              CADASTRAR LOCAÇÃO
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
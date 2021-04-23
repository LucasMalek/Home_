import React, { useState, useCallback, useEffect } from 'react';
// import { useDispatch } from 'react-redux'
import apiLocacao from '../../../utils/apiLocacao'
import apiCliente from '../../../utils/apiCliente'
import apiVeiculo from '../../../utils/apiVeiculo'
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import * as Yup from 'yup';
import { Box, Button,  FormControl, FormHelperText, InputAdornment, InputLabel, MenuItem, Popover, Select, TextField, Typography,  } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { Formik } from 'formik';
import Funcionarios from '../Funcionario';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        flexDirection:'column',
        paddingLeft: theme.spacing(4),
    },
    divcadastro: {
        padding: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '70%',
      },
      formControlCarro: {
        margin: theme.spacing(1),
        minWidth: '30%',
      },
      formControlTipo: {
        margin: theme.spacing(1),
        minWidth: '30%',
      },
    
}));

function Alugueis() {
    const classes = useStyles();
    // const dispatch = useDispatch()
    const [rows, setRows] = useState([])
    const account = useSelector(state => state.account.user.data)
    const getRows = useCallback(async () => {
        await apiLocacao.get()
            .then(response => {
                setRows(response.data.aluguel)
            }).catch(error => {
                console.log(error)
            })

    }, [setRows])

    useEffect(() => {
        getRows()       

    }, [getRows])

    const [rowsCliente, setRowsCliente] = useState([])
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
        await apiVeiculo.get('/carrosdisponiveis')
        .then(response => {
            setRowsCarro(response.data.carro)
        }).catch(error => {
            console.log(error)
        })
    }, [setRowsCarro]);

    const getRowsCliente = useCallback(async () => {
        await apiCliente.get()
        .then(response => {
            setRowsCliente(response.data.cliente)
        }).catch(error => {
            console.log(error)
        })

    }, [setRowsCliente])

    useEffect(() => {
        getRowsCliente()
        getCarros()
    }, [getRowsCliente, getCarros])


    /*Adicionar*/
    const [anchorElCadastro, setAnchorElCadastro] = useState(null);
    const handleClick = (event) => {
        setAnchorElCadastro(event.currentTarget);
      };
    
      const handleCloseCadstro = () => {
        setAnchorElCadastro(null);
      };
      const openCadastro = Boolean(anchorElCadastro);
      const id = openCadastro ? 'simple-popover' : undefined;
    
//#######################################################

    /*Editar*/
    const [clienteEditar,setClienteEditar] = useState()
    const [anchorElEditar, setAnchorElEditar] = useState(null);
    const handleClickEdit = (tab) => {
        setAnchorElEditar(true);
        setClienteEditar(tab);
      };
    
      const handleCloseEdit = () => {
        setAnchorElEditar(null);
      };

      const openEditar = Boolean(anchorElEditar);
      const idEditar = openEditar ? 'simple-popover' : undefined;

    //#######################################################


    return(
        <div className={classes.root}>
        <Button onClick={handleClick} variant="contained" color="secondary">
            Registrar Aluguel
        </Button>
        <div>
            <Popover
                id={id}
                open={openCadastro}
                anchorEl={anchorElCadastro}
                onClose={handleCloseCadstro}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
                >
            <Box className={classes.divcadastro} >
            <Formik
        initialValues={{
          valor: '',
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
              id_f: account.id,
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
            getCarros();
            getRowsCliente();
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
                {rowsCliente?.map((tab) => (
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
                </Popover>
        </div>
        <div>
            <Popover
                id={idEditar}
                open={openEditar}
                anchorEl={anchorElEditar}
                onClose={handleCloseEdit}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
                >
            <Box className={classes.divcadastro} >
                <Formik
                    initialValues={{
                    nome: clienteEditar?.nome,
                    endereco: clienteEditar?.endereco,
                    telefone: clienteEditar?.telefone,
                    }}
                    validationSchema={Yup.object().shape({
                    nome: Yup.string().max(50)
                        .min(10, 'O nome precisa ter ao menos 10 caracteres')
                        .required('Favor informar o nome completo'),
                    telefone: Yup.string().max(11,'Telefone tem mais de 11 dígitos.')
                        .required('Favor informar um Telefone. '),
                    endereco: Yup.string().required("Informe um endereço.")
                    })}
                    onSubmit={async (
                        values,
                        { setErrors, setStatus, setSubmitting },
                    ) => {
                        try {
                            await apiLocacao.put(`/editarcliente`,{
                                nome: values.nome,
                                endereco: values.endereco,
                                telefone: values.telefone,
                                cliente_id: clienteEditar?.id,
                            })
                            setStatus({ success: true });
                            setSubmitting(true);
                            // props.close()
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
                <Box className={classes.toptext} >
                    <Typography  style={{ backgroundColor: 'black', color: '#E6E6FA'}} variant="h3">Editar um cliente</Typography>
                </Box>
                <TextField
                variant="outlined"
                margin="normal"
                disabled
                fullWidth
                error={Boolean(errors.cpf)}
                value={clienteEditar?.cpf}
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
                error={Boolean(errors.telefone)}
                value={values.telefone}
                helperText={errors.telefone}
                fullWidth
                id="telefone"
                label="Telefone"
                name="telefone"
                autoComplete="telefone"
                autoFocus
                onChange={handleChange}

                >
                </TextField>
                {/* <Typography variant="h6" >Informações adicionais</Typography> */}
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
                <Button
                        fullWidth
                        variant="contained"
                        // color="#E6E6FA"
                        // className={classes.button}
                        type="submit"
                        disbled={isSubmitting}
                    >
                        EDITAR CLIENTE
                    </Button>
                    {errors.submit && (
                        <FormHelperText error>{errors.submit}</FormHelperText>
                    )}
                </form>
                )}
                </Formik>
            </Box>
                </Popover>
        </div>                     
        <table className={classes.table}>
                <TableHead >
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>NOME</TableCell>
                        <TableCell>ENDEREÇO</TableCell>
                        <TableCell>TELEFONE</TableCell>
                        <TableCell align= 'center'>CLIENTE DESDE</TableCell>
                        <TableCell align = 'center'>OPÇÕES</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                    rows?.map((tab) => (
                        <TableRow>
                            <TableCell>{tab.id}</TableCell>
                            <TableCell>{tab.nome}</TableCell>
                            <TableCell>{tab.endereco}</TableCell>
                            <TableCell>{tab.telefone}</TableCell>
                            <TableCell align='center'>
                                {new Date(tab.createdAt).toLocaleDateString()}
                            </TableCell>
                            <TableCell align = 'center' >
                                <Button onClick={() => handleClickEdit(tab)}>
                                    <EditIcon  color='secondary'/>
                                </Button>
                                <Button onClick={async ()=>{
                                    try{
                                        await apiLocacao.delete(`/deletaraluguel/${tab.id}`)
                                    }catch(error){
                                        console.log(error)
                                    }finally{
                                        getRows()
                                    }
                                }}
                                    >
                                    <DeleteIcon color='primary'/>
                                </Button>
                            </TableCell>
                            
                            </TableRow>
                    ))}
                </TableBody>
            </table>
    </div>
    )
}

export default Alugueis

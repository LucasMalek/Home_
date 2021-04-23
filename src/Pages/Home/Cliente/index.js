import React, { useState, useCallback, useEffect } from 'react';
import apiCliente from '../../../utils/apiCliente'
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import * as Yup from 'yup';
import { Box, Button, FormHelperText, Popover, TextField, Typography,  } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { Formik } from 'formik';


const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        flexDirection:'column',
        paddingLeft: theme.spacing(4),
    },
    divcadastro: {
        padding: theme.spacing(2),
    }
    
}));

function Clientes() {
    const classes = useStyles();
    // const dispatch = useDispatch()
    const [rows, setRows] = useState([])

    const getRows = useCallback(async () => {
        await apiCliente.get()
            .then(response => {
                setRows(response.data.cliente)
            }).catch(error => {
                console.log(error)
            })

    }, [setRows])

    useEffect(() => {
        getRows()       

    }, [getRows])


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
        console.log(tab)
        setClienteEditar(tab);
      };
    
      const handleCloseEdit = () => {
        setAnchorElEditar(null);
        setClienteEditar(null);
      };

      const openEditar = Boolean(anchorElEditar);
      const idEditar = openEditar ? 'simple-popover' : undefined;

    //#######################################################


    return(
        <div className={classes.root}>
        <Button onClick={handleClick} variant="contained" color="secondary">
            Registrar Cliente
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
                    nome: '',
                    cpf: '',
                    endereco: '',
                    data: '',
                    telefone: '',
                    }}
                    validationSchema={Yup.object().shape({
                    cpf: Yup.string()
                    .min(11,'CPF de 11 dígitos.')
                    .required('Informe seu CPF'),
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
                            await apiCliente.post(`/adicionarcliente`,{
                                nome: values.nome,
                                cpf: values.cpf,
                                endereco: values.endereco,
                                data: values.data,
                                telefone: values.telefone
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
                    <Typography  style={{ backgroundColor: 'black', color: '#E6E6FA'}} variant="h3">Registrar um cliente</Typography>
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
                {/* <Typography variant="h6" >Quilometragem</Typography> */}
                {/* <Typography variant="h6" >Ano</Typography> */}
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
                label="Data de Nascimento"
                name="data"
                autoComplete="data"
                autoFocus
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={handleChange}

                >
                </TextField>
                {/* <Typography variant="h6" >Placa</Typography> */}
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
                        CADASTRAR CLIENTE
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
                            await apiCliente.put(`/editarcliente`,{
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
                                        await apiCliente.delete(`/deletarcliente/${tab.id}`)
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

export default Clientes

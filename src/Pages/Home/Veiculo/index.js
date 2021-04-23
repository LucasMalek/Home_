import React, { useState, useCallback, useEffect } from 'react';
// import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import * as Yup from 'yup';
import { Box, Button, FormControl, FormHelperText, InputAdornment, InputLabel, MenuItem, Popover, Select, TextField, Typography,  } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { Formik } from 'formik';
import apiVeiculo from '../../../utils/apiVeiculo'
// import EditarCliente from '../Apresentação/EditarCliente';
// import CadastrarCliente from '../Cadastro/CadastrarCliente'


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

function Veiculo() {
    const classes = useStyles();
    const [type, setType] = useState()
    const handleSelectedType = (tab) => {
        setType(tab)
    }
    const [rows, setRows] = useState([])

    const getRows = useCallback(async () => {
        await apiVeiculo.get()
            .then(response => {
                setRows(response.data.carro)
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
    const [veiculoEditar,setVeiculoEditar] = useState()
    const [anchorElEditar, setAnchorElEditar] = useState(null);
    const handleClickEdit = (tab) => {
        setAnchorElEditar(true);
        console.log(tab)
        setVeiculoEditar(tab);
      };
    
      const handleCloseEdit = () => {
        setAnchorElEditar(null);
        setVeiculoEditar(null);
      };

      const openEditar = Boolean(anchorElEditar);
      const idEditar = openEditar ? 'simple-popover' : undefined;

    //#######################################################


    return(
        <div className={classes.root}>
        <Button onClick={handleClick} variant="contained" color="secondary">
            Registrar Veiculo
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
                    <MenuItem onClick={() => handleSelectedType(tab)} value={tab}>{tab}</MenuItem>
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
              CADASTRAR VEÍCULO
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
          nome: veiculoEditar?.Cnome,
          modelo: veiculoEditar?.modelo,
          valor: veiculoEditar?.valor_dia,
          quilometragem: veiculoEditar?.quilometragem,
          ano: veiculoEditar?.ano,
          placa: veiculoEditar?.placa,
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
            await apiVeiculo.put(`/editarrcarro`, {
              Cnome: values.nome,
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
              <Typography style={{ color: '#E6E6FA' }} variant="h3">Editar um veículo</Typography>
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
              EDITAR VEÍCULO
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
                        <TableCell>MODELO</TableCell>
                        <TableCell>ANO</TableCell>
                        <TableCell >QUILOMETRAGEM</TableCell>
                        <TableCell>PLACA</TableCell>
                        <TableCell>VALOR DIÁRIA (R$)</TableCell>
                        <TableCell align = 'center'>OPÇÕES</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                    rows?.map((tab) => (
                        <TableRow>
                            <TableCell>{tab.id}</TableCell>
                            <TableCell>{tab.Cnome}</TableCell>
                            <TableCell>{tab.modelo}</TableCell>
                            <TableCell >{tab.ano}</TableCell>
                            <TableCell>{tab.quilometragem}</TableCell>
                            <TableCell>{tab.placa}</TableCell>
                            <TableCell>{tab.valor_dia}</TableCell>
                            <TableCell align = 'center' >
                                <Button onClick={() => handleClickEdit(tab)}>
                                    <EditIcon  color='secondary'/>
                                </Button>
                                <Button onClick={async ()=>{
                                    try{
                                        await apiVeiculo.delete(`/deletarcarro/${tab.id}`)
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

export default Veiculo

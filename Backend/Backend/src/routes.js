const express = require('express');

const FuncController = require('./controllers/FuncController');
const ClienteController = require('./controllers/ClienteController');
const CarroController = require('./controllers/CarroController');
const AluguelController = require('./controllers/AluguelController');
const CarroRetornoController = require('./controllers/CarroRetornoController');

const router = express.Router();
router.get("/heathCheck",(req,res)=>{
    return res.json({
        cliente: "ok"
    })
})
//ROTAS DO FUNCIONARIO
router.get('/funcionario', FuncController.index);

router.post('/funcionario/adicionarfuncionario', FuncController.store);

router.put('/funcionario/editarfuncionario', FuncController.update);

router.delete('/funcionario/deletarfuncionario/:func_id', FuncController.delete);

router.post('/funcionario/auth/login', FuncController.login);

//ROTAS DO Cliente
router.get('/cliente', ClienteController.index);

router.post('/cliente/adicionarcliente', ClienteController.store);

router.put('/cliente/editarcliente', ClienteController.update);

router.delete('/cliente/deletarcliente/:cliente_id', ClienteController.delete);

//ROTAS DO CARRO
router.get('/carro', CarroController.index);
router.get('/carro/carrosdisponiveis', CarroController.carrosDisponiveis);

router.post('/carro/adicionarcarro', CarroController.store);

router.put('/carro/editarcarro', CarroController.update);

router.delete('/carro/deletarcarro/:carro_id', CarroController.delete);

//ROTAS DO ALUGUEL
router.get('/aluguel', AluguelController.indexAluguel);
router.get('/cliente/:id_cl/aluguel', AluguelController.index);
router.delete('/aluguel/deletaraluguel/:aluguel_id/:carro_id',AluguelController.delete);
router.post('/aluguel/adicionaraluguel', AluguelController.store);

//ROTA DE DEVOLUÇÃO DO Carro
router.put('/devolucao', CarroRetornoController.update);


module.exports = router;

const Sequelize = require('sequelize');

const dbConfig = require("../config/database.js")

const Funcionario = require('../models/Funcionario')
const Cliente = require('../models/Cliente')
const Carro = require('../models/Carro')
const Aluguel = require('../models/Aluguel')


const connection = new Sequelize(dbConfig);

Funcionario.init(connection);
Cliente.init(connection);
Carro.init(connection);
Aluguel.init(connection);

Aluguel.associate(connection.models);
Funcionario.associate(connection.models);
Carro.associate(connection.models);
Cliente.associate(connection.models);

// connection.authenticate().then(function() {
//   console.log("banco de dados conectado com sucesso")
// }).catch(function(erro){
//   console.log("falha ao conectar " + erro)
// })

module.exports = connection;

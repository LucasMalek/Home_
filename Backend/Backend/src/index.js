const express = require ('express');

const routes = require('./routes.js');

require('./database');

const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

app.use("/v1",routes);

const server = require("http").createServer(app)

server.listen(8080, () => {
    console.log("server run port 8080...")
});

//migration
//yarn sequelize db:create (Cria o banco de dados)
// yarn sequelize migration:create --name=add-NomeDaColuna-column-NomeDaTabela-table (comando para adicionar coluna)
// yarn sequelize migration:create --name=create-NomeDaTabela (comando para cria um tabela no migrate)
//criar tabelas
// yarn sequelize db:migrate (cria todas as tabelas no banco de dados)

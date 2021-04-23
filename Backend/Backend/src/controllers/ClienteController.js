const Cliente = require('../models/Cliente');

module.exports = {

  async index(req, res) {
    const cliente = await Cliente.findAll()

    if (cliente == "" || cliente == null) {
      return res.status(200).send({ message: "Nenhum cliente cadastrado" });

    }

    return res.status(200).send({ cliente });


  },

  async store(req, res) {

    const { cpf, nome, endereco, data, telefone } = req.body;
      const cliente = await Cliente.create({ cpf, nome, endereco,data, telefone});
      console.log(cliente)
      return res.status(200).send({
          status: 1,
          message: 'cliente cadastrado com sucesso!',
          cliente

      });

  },

  async update(req, res) {

    const { cliente_id, telefone, nome, endereco } = req.body;
    console.log(req.body)
        await Cliente.update({
            nome, endereco, telefone
        }, {
            where: {
                id: cliente_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "cliente atualizado com sucesso!"
        });

    },


  async delete(req, res) {

    const { cliente_id } = req.params;
        await Cliente.destroy({
            where: {
                id: cliente_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "cliente deletado com sucesso!",
        });

  }

}

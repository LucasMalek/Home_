const Carro = require('../models/Carro');

module.exports = {

  async index(req, res) {

    const carro = await Carro.findAll()

    if (carro == "" || carro == null) {
      return res.status(200).send({ message: "Nenhum carro cadastrado" });

    }

    return res.status(200).send({ carro });


  },

  async carrosDisponiveis(req, res) {

    const carro = await Carro.findAll({
      where: {
        disponibilidade: true
      }
    }
    )

    if (carro == "" || carro == null) {
      return res.status(500).send({ message: "Nenhum carro disponível" });

    }

    return res.status(200).send({ carro });


  },

  async store(req, res) {

    const { Cnome, modelo, valor_dia, quilometragem, placa, ano } = req.body;
      const carro = await Carro.create({ Cnome, modelo, valor_dia, quilometragem, placa, ano});

      return res.status(200).send({
          status: 1,
          message: 'carro cadastrado com sucesso!',
          carro

      });

  },

  async update(req, res) {

    const { modelo, Cnome, quilometragem, estilo, valor_dia } = req.body;

        const { carro_id } = req.params;

        await Carro.update({
            modelo, Cnome, quilometragem, estilo, valor_dia
        }, {
            where: {
                id: carro_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "carro atualizado com sucesso!"
        });

    },


  async delete(req, res) {

    const { carro_id } = req.params;
        await Carro.destroy({
            where: {
                id: carro_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "carro deletado com sucesso!",
        });

  }

}

const Carro = require('../models/Carro');
const Aluguel = require('../models/Aluguel');

module.exports = {

  async update(req, res) {

    const { ddd, id_a, id_c } = req.body;
    const aluguel = await Aluguel.findByPk(id_a);

    await Aluguel.update({
      data_devolucao:ddd
    }, {
      where: {
        id: id_a
      }
    });

    await Carro.update({
      disponibilidade: 1,
    }, {
      where: {
        id: id_c
      }
    });

    var diasMulta = aluguel.data_devolucao - aluguel.data_devolucao_prev

    if (diasMulta >= 1) {

      await Aluguel.update({
        multa:(diasMulta * 50)
      }, {
        where: {
          id: id_a
        }
      });

    }

    return res.status(200).send({
      status: 1,
      message: 'Aluguel atualizado e concluido! ' + "Multa: " + aluguel.multa
    });

  }
}

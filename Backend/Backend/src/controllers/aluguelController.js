const Carro = require('../models/Carro');
const Cliente = require('../models/Cliente');
const Funcionario = require('../models/Funcionario');
const Aluguel = require('../models/Aluguel');

module.exports = {
  async index(req, res) {
    const { id_cl } = req.params;

    const cliente = await Cliente.findByPk(id_cl, {
      include: { association: 'aluguel', through: { attributes: [] } }
    });

    if (!cliente) {
      return res.status(400).send({
        status: 0,
        message: 'cliente não encontrado!'
      });
    }

    return res.status(200).send(cliente.aluguel);
  },

  async indexAluguel(req, res) {
    const aluguel = await Aluguel.findAll({
        include: {association: 'carro'},
    })
    // const aluguel = await Aluguel.findAll

    if (!aluguel) {
      return res.status(400).send({
        status: 0,
        message: 'Nenhum aluguel encontrado!'
      });
    }
    // cliente = null
    // carro = null

    for(a in aluguel){
      console.log(a.idcl)
      a.cliente = await Cliente.findByPk(a.idcl);
      a.carro = await Carro.findByPk(a.idc);
    }

      return res.status(200).send({
        aluguel
    })
  },

  async store(req, res) {
    try {
      const { id_f, id_cl, id_c, data_devolucao_prev, valor } = req.body;

      const funcionario = await Funcionario.findByPk(id_f);
      const cliente = await Cliente.findByPk(id_cl);
      const carro = await Carro.findByPk(id_c);

      if (!funcionario) {
        return res.status(400).json({
          status: 0,
          message: 'funcionario não encontrado!'
        });
      }

      if (!cliente) {
        return res.status(400).json({
          status: 0,
          message: 'cliente não encontrado!'
        });
      }

      if (!carro) {
        return res.status(400).json({
          status: 0,
          message: 'carro não encontrado!'
        });
      }
      if (carro.disponibilidade) {
        const aluguel = await Aluguel.create({

          data_devolucao_prev, valor, idfunc:id_f, idcl: id_cl, idc: id_c

        });
        await Carro.update({
            disponibilidade: false
        }, {
            where: {
                id: id_c
            }
        });

        return res.status(200).json({
          status: 1,
          message: "Aluguel cadastrado com sucesso!",
          aluguel
        });
      }
      else
      return res.status(600).json({
        status: 0,
        message: 'carro não esta disponivel!'
      })
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  },

  async delete(req, res) {

    const { aluguel_id, carro_id } = req.params;
        await Aluguel.destroy({
            where: {
                id: aluguel_id
            }
        });

        await Carro.update({
          disponibilidade: true
      }, {
          where: {
              id: carro_id
          }
      });

        return res.status(200).send({
            status: 1,
            message: "aluguel deletado com sucesso!",
        });

  }
};

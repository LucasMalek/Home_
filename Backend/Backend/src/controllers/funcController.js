const Funcionario = require('../models/Funcionario');
const bcrypt = require('bcryptjs');

module.exports = {
  async login(req, res) {
        const { email, senha } = req.body;
        console.log(req.body)
        const funcionario = await Funcionario.findOne({ where: { email: email } });

        if (!funcionario) {
            return res.status(500).send({
                message: 'E-mail ou senha incorreto!',
                funcionario: {}
            });
        }

        // if (!bcrypt.compareSync(senha, funcionario.senha)) {
        //     return res.status(500).send({
        //         message: 'E-mail ou senha incorreto!',
        //         funcionario: {}
        //     });
        // }

        funcionario.senha = undefined

        return res.status(200).send({
            message: "Funcionario logado com sucesso!",
            data: funcionario
        });
    },

  async index(req, res) {

    const funcionarios = await Funcionario.findAll()

    if (funcionarios == "" || funcionarios == null) {
      return res.status(200).send({ message: "Nenhum funcionario cadastrado" });

    }

    return res.status(200).send({ funcionarios });


  },

  async store(req, res) {

    const { cpf, nome, telefone, endereco, email, senha, data } = req.body;

    const verificaEmail = await Funcionario.findAll({
        where: {
            email: email,
        }
    })

    if(verificaEmail.email !=null){
        return res.status(500).send({message: 'Email já existe.'});
    }
      const funcionarios = await Funcionario.create({ fcpf: cpf, fnome: nome, fendereco:endereco, telefone, email, senha,data });
    

    if (funcionarios == "" || funcionarios == null) {
      return res.status(200).send({ message: "Nenhum funcionario cadastrado" });

    }
      return res.status(200).send({
          status: 1,
          message: 'funcionario cadastrado com sucesso!',
          funcionarios

      });

  },

  async update(req, res) {

    const {nome, telefone, endereco, email, senha,funcionario_id } = req.body;

        await Funcionario.update({
            fnome: nome, fendereco:endereco, telefone, email, senha
        }, {
            where: {
                id: funcionario_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Funcionario atualizado com sucesso!"
        });

    },


  async delete(req, res) {

    const { func_id } = req.params;
        console.log(func_id)
        await Funcionario.destroy({
            where: {
                id: func_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Usuário deletado com sucesso!",
        });

  }

}

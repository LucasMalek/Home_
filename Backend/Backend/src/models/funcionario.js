const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

class Funcionario extends Model {
  static init(sequelize) {
    super.init({
      fcpf: DataTypes.STRING,
      fnome: DataTypes.STRING,
      fendereco: DataTypes.STRING,
      telefone: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      data: DataTypes.DATE
    }, {
      sequelize,
      hooks: {
        beforeCreate: (funcionario) => {
          const salt = bcrypt.genSaltSync();
          funcionario.senha = bcrypt.hashSync(funcionario.senha, salt);
        },
      },
    })
  }

  static associate(models) {
       this.hasMany(models.Aluguel, { foreignKey: 'idfunc', as: 'aluguel' });
   }

}

module.exports = Funcionario;

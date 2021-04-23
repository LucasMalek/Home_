const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
  static init(sequelize) {
    super.init({
      cpf: DataTypes.STRING,
      nome: DataTypes.STRING,
      endereco: DataTypes.STRING,
      telefone: DataTypes.STRING,
    }, { sequelize })
  }

  static associate(models) {
    this.hasOne(models.Aluguel, { foreignKey: 'idcl', as: 'aluguel' });
}


}

module.exports = Cliente;

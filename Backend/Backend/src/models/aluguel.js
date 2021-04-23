const { Model, DataTypes } = require('sequelize');

class Aluguel extends Model {
  static init(sequelize) {
    super.init({
      idc:DataTypes.INTEGER,
      idfunc: DataTypes.INTEGER,
      idcl: DataTypes.INTEGER,
      data_aluguel: DataTypes.STRING,
      data_devolucao: DataTypes.STRING,
      valor: DataTypes.FLOAT,
      multa: DataTypes.FLOAT,
      data_devolucao_prev: DataTypes.STRING
    }, { sequelize })
  }


  static associate(models) {
    this.belongsTo(models.Funcionario, { foreignKey: 'idfunc', as: 'funcionario' });
  }
  static associate(models) {
    this.belongsTo(models.Cliente, { foreignKey: 'idcl', as: 'cliente' });
  }

  static associate(models) {
    this.belongsTo(models.Carro, { foreignKey: 'idc', as: 'carro' });
  }

}

module.exports = Aluguel;

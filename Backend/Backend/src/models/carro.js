const { Model, DataTypes } = require('sequelize');

class Carro extends Model {
  static init(sequelize) {
    super.init({
      Cnome: DataTypes.STRING,
      modelo: DataTypes.STRING,
      valor_dia: DataTypes.INTEGER,
      ano: DataTypes.STRING,
      quilometragem: DataTypes.STRING,
      placa: DataTypes.STRING,
      disponibilidade: true,
    }, { sequelize })
  }

  static associate(models) {
    this.belongsToMany(models.Aluguel, { foreignKey: 'carro_id', through: 'veiculos', as: 'aluguel'});
  }

}

module.exports = Carro;

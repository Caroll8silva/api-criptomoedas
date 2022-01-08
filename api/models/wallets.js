'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wallets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Wallets.belongsTo(models.Coins)

    }
  };
  Wallets.init({
    address: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    coin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Wallets',
  });
  return Wallets;
};
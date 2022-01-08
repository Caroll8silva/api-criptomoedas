'use strict';
const {
  Model
} = require('sequelize');
const transactions = require('./transactions');
module.exports = (sequelize, DataTypes) => {
  class Wallets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Wallets.hasMany(models.transactions, {
      foreignKey: 'sendTo',
      foreignKey: 'receiveFrom'
    })
    Wallets.belongsTo(models.Coins)
    }
  };
  Wallets.init({
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
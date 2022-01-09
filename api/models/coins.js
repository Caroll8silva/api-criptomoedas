'use strict';
const {
  Model
} = require('sequelize');
const wallets = require('./wallets');
module.exports = (sequelize, DataTypes) => {
  class Coins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Coins.belongsTo(models.Wallets, {foreignKey: 'coin'})
      Coins.hasMany(models.Transactions, {foreignKey: 'transactionId'})

    }
  };
  Coins.init({
    coinId: DataTypes.INTEGER,
    coin: DataTypes.STRING,
    fullname: DataTypes.STRING,
    amont: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Coins',
  });
  return Coins;
};
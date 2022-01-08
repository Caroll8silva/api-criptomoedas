'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Transactions.hasMany(models.Coins, {
      foreignKey: 'transactions', 
      foreignKey: 'amont'

    })
    Transactions.belongsTo(models.Wallets)
    Transactions.belongsTo(models.Coins)
    }
  };
  Transactions.init({
    value: DataTypes.DECIMAL,
    datetime: DataTypes.DATE,
    sendTo: DataTypes.STRING,
    receiveFrom: DataTypes.STRING,
    currentCotation: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};
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
      Transactions.belongsTo(models.Coins, {foreignKey: 'transactionId'})
    }
  };
  Transactions.init({
    transactionId: DataTypes.INTEGER,
    value: DataTypes.DECIMAL,
    datetime: DataTypes.DATE,
    sendTo: DataTypes.INTEGER,
    receiveFrom: DataTypes.INTEGER,
    currentCotation: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};
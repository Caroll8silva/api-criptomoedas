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
      Transactions.belongsTo(models.Coins)
      
    }
  };
  Transactions.init({
    value: DataTypes.FLOAT,
    datetime: DataTypes.DATE,
    sendTo: DataTypes.INTEGER,
    receiveFrom: DataTypes.INTEGER,
    currentCotation: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};
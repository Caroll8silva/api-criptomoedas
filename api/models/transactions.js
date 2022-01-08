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
      // define association here
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
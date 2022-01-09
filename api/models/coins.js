'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Coins.hasMany(models.Wallets, {
        foreignKey: 'coin'
       
  
      }) }
  };
  Coins.init({
    coinId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  coin: {
    type: DataTypes.STRING,
    allowNull: false 
    
  },
  fullname: {
    allowNull: false,
    type: DataTypes.STRING
  },
  amont: {
    allowNull: false,
    type: DataTypes.DECIMAL
  },
  transactions: {
    type: DataTypes.INTEGER,
    references: {model: 'Transactions', key: 'transactionsid' }

  }}, {
  sequelize,
    modelName: 'Coins'
  
  });
  
  return Coins;
};
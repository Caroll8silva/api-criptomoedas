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
        foreignKey: 'transactions'
       
  
      })
    }
  };
  Transactions.init({
    transactionsid: {
      allowNull: false,
      autoIncrement: true, 
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    value: {
      allowNull: false,
      type: DataTypes.DECIMAL
    },
    datetime: {
      allowNull: false,
      type: DataTypes.DATE
    },
    sendTo: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    receiveFrom: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    currentCotation: {
      allowNull: false,
      type: DataTypes.DECIMAL
    }
  }, {
    sequelize,
    modelName: 'Transactions'

  });
  return Transactions;
};
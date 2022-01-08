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
        foreignKey: 'coin',
        
      })
      Coins.belongsTo(models.Transactions)

    }
  };
  Coins.init({
    coinId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    coin: DataTypes.STRING,
    fullname: DataTypes.STRING,
    amont: DataTypes.DECIMAL,
    transactions: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Coins',
  });
  return Coins;
};
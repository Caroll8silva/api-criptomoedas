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
      Wallets.hasMany(models.Coins, { foreignKey: 'coin'})
    }
  };
  Wallets.init({
    address: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: { validaName: function (validar) {
          if (validar.length < 6) throw new Error('Insira um nome com no mínimo 7 caracteres')
        }
      }
    },
    cpf: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: { validaCPF: function (validar) {
          if (validar.length < 14) throw new Error('Seu CPF não é valido. Insira um CPF nesse formato: 123.456.789-01') 
        }
    }},
    birthdate: {
      allowNull: false,
      type: DataTypes.DATEONLY
    },
    coin: { 
      type: DataTypes.INTEGER
    
    }
  }, {
    sequelize,
    modelName: 'Wallets',
  });
  return Wallets;
};
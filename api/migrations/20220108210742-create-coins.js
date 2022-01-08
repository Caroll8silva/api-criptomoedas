'use strict';

const transactions = require("../models/transactions");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Coins', {
      
      coinId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      coin: {
        type: Sequelize.STRING,
        allowNull: false
        
      },
      fullname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      amont: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      transactions: {
        type: Sequelize.INTEGER,
        references: {model: 'Transactions', key: 'transactionsid' }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Coins');
  }
};
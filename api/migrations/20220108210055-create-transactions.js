'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      transactionsid: {
        allowNull: false,
        autoIncrement: true, 
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      datetime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      sendTo: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      receiveFrom: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      currentCotation: {
        allowNull: false,
        type: Sequelize.DECIMAL
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};
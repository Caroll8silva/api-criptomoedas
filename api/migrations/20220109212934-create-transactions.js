'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      transactionId: {
        allowNull: false,
        type: Sequelize.INTEGER, 
        references: {model:'Coins', key:'transaction'}
      },
      value: {
        type: Sequelize.DECIMAL
      },
      datetime: {
        type: Sequelize.DATE
      },
      sendTo: {
        type: Sequelize.INTEGER
      },
      receiveFrom: {
        type: Sequelize.INTEGER
      },
      currentCotation: {
        type: Sequelize.DECIMAL
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};
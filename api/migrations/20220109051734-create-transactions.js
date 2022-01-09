'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      coinId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model:'Coins', key:'transactions'}
      },
     
      value: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      datetime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      sendTo: {
        type: Sequelize.INTEGER
      },
      receiveFrom: {
        type: Sequelize.INTEGER
      },
      currentCotation: {
        type: Sequelize.FLOAT
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};
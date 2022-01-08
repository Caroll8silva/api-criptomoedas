'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
    
      value: {
        type: Sequelize.DECIMAL
      },

      sendTo: {
        type: Sequelize.STRING
      },
      receiveFrom: {
        type: Sequelize.STRING
      },
      currentCotation: {
        type: Sequelize.DECIMAL
      },
      datetime: {
        allowNull: false,
        type: Sequelize.DATE
        
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      
      value: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },

      sendTo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Wallets', key: 'address'
      }
      },
      receiveFrom: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Wallets', key: 'address'
      }},
      currentCotation: {
        allowNull: false,
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
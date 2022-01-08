'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Coins', {
    
      coin: {
        type: Sequelize.STRING,
        primaryKey: true,
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
        type: Sequelize.STRING
        
      }

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Coins');
  }
};
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Coins', {
      coinId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'Wallets', key:'coin'}
      },
      coin: {
        allowNull: false,
        type: Sequelize.STRING, 
      },
      fullname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      amont: {
        allowNull: false,
        type: Sequelize.DECIMAL
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Coins');
  }
};
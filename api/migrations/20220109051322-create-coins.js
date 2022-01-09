'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Coins', {
      walletId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model:'Wallets', key:'coin'}
      },
      coin: {
        allowNull: false,
        type: Sequelize.STRING,
        primaryKey: true
      },
      fullname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      amont: {
        allowNull: false,
        type: Sequelize.FLOAT
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Coins');
  }
};
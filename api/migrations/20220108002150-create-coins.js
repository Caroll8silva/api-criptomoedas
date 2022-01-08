'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Coins', {
      coin: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        
      },
      fullname: {
        allowNull: false,
        type: Sequelize.STRING

      },
      amont: {
        allowNull: false,
        type: Sequelize.DECIMAL,
        references: {model: 'Transactions', key: 'value'}

      },
      transactions: {
        type: Sequelize.INTEGER,
        references: {model: 'Transactions', key: 'sendTo'}
      }

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Coins');
  }
};
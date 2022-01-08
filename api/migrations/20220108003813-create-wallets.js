'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Wallets', {
      address: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        id:true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false

      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false

      },
      birthdate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      coins: {
        type: Sequelize.STRING,
        references: {model: 'Coins', key: 'coin'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Wallets');
  }
};
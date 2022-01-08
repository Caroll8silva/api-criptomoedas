'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Coins', [
      {
        coin:'USD',
        fullname:'Dolar Americano',
        amont: 85.004,
        transactions: 2

      },
      {
        coin:'BTC',
        fullname:'Bitcoin',
        amont: 0.004,
        transactions: 1

      }
      
    
    
    
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Coins', null, {});
     
  }
};

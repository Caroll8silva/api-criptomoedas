'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Coins', [
      {
        coinId: 1,
        coin: 'BTC',
        fullname: 'Bitcoin',
        amont: 0.0074,
        transaction: 1
      },
      {
        coinId: 2,
        coin: 'ETH',
        fullname: 'Etherium',
        amont: 0.0779,
        transaction: 2
      },
      {
        coinId: 3,
        coin: 'BTC',
        fullname: 'Bitcoin',
        amont: 0.0001
      },
      {
        coinId: 4,
        coin: 'BRL',
        fullname: 'Real Brasileiro',
        amont: 78.00
      },
      {
        coinId: 5,
        coin: 'BRL',
        fullname: 'Real Brasileiro',
        amont: 150.00
      },
      {
        coinId: 6,
        coin: 'ETH',
        fullname: 'Etherium',
        amont: 0.0008
      },
    
    
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Coins', null, {});
     
  }
};

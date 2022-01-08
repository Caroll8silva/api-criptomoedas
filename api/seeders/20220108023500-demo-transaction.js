'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      //await queryInterface.bulkInsert('Transactions', [
      // {
      //   coinId: 'BRL',
      //   value: 15.00000,
      //   datetime: new Date(),
      //   sendTo: 2,
      //   receiveFrom: 3,
      //   currentCotation: 0.0143
      
      // },  
      // {
      //   coinId: 'ETH',
      //   value: 0.08040,
      //   datetime: new Date(),
      //   sendTo: 4,
      //   receiveFrom: 5,
      //   currentCotation: 0.0100
      
      // }, 
      // {
      //   coinId: 'BTC',
      //   value: 0.00045,
      //   datetime: new Date(),
      //   sendTo: 2,
      //   receiveFrom: 3,
      //   currentCotation: 0.0143
      
      // }
    
    
   // ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      //await queryInterface.bulkDelete('Transactions', null, {});
     
  }
};

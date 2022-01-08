'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Transactions', [
       { 
         value: 15.00000,
         datetime: new Date(),
         sendTo: 2,
         receiveFrom: 3,
         currentCotation: 0.0143
      
       },
       {
        
        value: 0.00500,
        datetime: new Date(),
        sendTo: 4,
        receiveFrom: 1,
        currentCotation: 0.0100
     
      }], {});
      
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('Transactions', null, {});
     
  }
};

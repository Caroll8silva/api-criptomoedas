'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Transactions', [
      {
       transactionId: 1,
       value: 0.00001,
       datetime: new Date(),
       sendTo: 1,
       receiveFrom: 2,
       currentCotation: 0.0587
      },
      {
        transactionId: 2,
        value: 0.00002,
        datetime: new Date(),
        sendTo: 2,
        receiveFrom: 3,
        currentCotation: 0.074
       },
       {
         transactionId: 3,
         value: 0.00003,
         datetime: new Date(),
         sendTo: 1,
         receiveFrom: 3,
         currentCotation: 0.007
        },
        {
          transactionId: 4,
          value: 0.00004,
          datetime: new Date(),
          sendTo: 3,
          receiveFrom: 2,
          currentCotation: 0.0857
         },
         {
           transactionId: 5,
           value: 0.00005,
           datetime: new Date(),
           sendTo: 2,
           receiveFrom: 3,
           currentCotation: 0.07477
          },
          {
            transactionId: 6,
            value: 0.00006,
            datetime: new Date(),
            sendTo: 3,
            receiveFrom: 1,
            currentCotation: 0.717
           }
    
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Transactions', null, {});
     
  }
};

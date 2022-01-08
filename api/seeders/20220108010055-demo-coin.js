'use strict';

const { Transaction } = require("sequelize/dist");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Coins', [
      // {
      //   coin: "BTC",
      //   fullname: "Bitcoin",
      //   amont: "0.00040",
        
      // },
      // {
      //   coin: "USD",
      //   fullname: "Dólar Americano",
      //   amont: "0.00500",
        
      // },,
      // {
      //   coin: "ETH",
      //   fullname: "Ethereum",
      //   amont: "0.01500",
        
      // },,
      // {
      //   coin: "LTC",
      //   fullname: "Litecoin",
      //   amont: "8.00000",
        
      // },,
      // {
      //   coin: "BRL",
      //   fullname: "Real Brasileiro",
      //   amont: "85.0000",
        
      // }
    
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkDelete('Coins', null, {});
     
  }
};

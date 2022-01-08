'use strict';

const { Transaction } = require("sequelize/dist");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Coins', [
      {
        coin: "BTC",
        fullname: "Bitcoin",
        amont: "0.00040",
        transactions:" "
      },
      {
        coin: "USD",
        fullname: "Dólar Americano",
        amont: "0.00500",
        transactions:" "
      },,
      {
        coin: "ETH",
        fullname: "Ethereum",
        amont: "0.01500",
        transactions:" "
      },,
      {
        coin: "LTC",
        fullname: "Litecoin",
        amont: "8.00000",
        transactions:" "
      },,
      {
        coin: "BRL",
        fullname: "Real Brasileiro",
        amont: "85.0000",
        transactions:" "
      },
    
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkDelete('Coins', null, {});
     
  }
};

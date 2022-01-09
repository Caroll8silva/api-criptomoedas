'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Wallets', [
      {
        name: 'Luiz Renan Sebastião Drumond',
        cpf: '469.909.305-19',
        birthdate: '1960/01/02',
        coin: [1, 2]
      },
      {
        name: 'Isabella Valentina Drumond',
        cpf: '101.245.175-52',
        birthdate: '1999/07/05',
        coin: [3, 4]
      },
      {
        name: 'Sara Maria Figueiredo',
        cpf: '430.915.766-12',
        birthdate: '2001/06/04',
        coin: [5, 6]
      }
     ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Wallets', null, {});
     
  }
};

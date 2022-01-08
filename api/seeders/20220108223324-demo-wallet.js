'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkInsert('Wallets', [
      {
        
         name: 'Heloise Yasmin Aurora Oliveira',
         cpf: '412.380.463-20',
         birthdate: '1992/02/17',
         coin: 1,
         createdAt: new Date(),
         updatedAt: new Date()
         
       },
       {
        
         name: 'Gabriel Anthony Martins',
         cpf: '329.471.696-62',
         birthdate: '1967/01/01',
         coin: 2,
         createdAt: new Date(),
         updatedAt: new Date()

       }
      ], {});
    
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Wallets', null, {});
     
  }
};

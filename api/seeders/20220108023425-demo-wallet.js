'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('Wallets', [
      {
        
         name: 'Heloise Yasmin Aurora Oliveira',
         cpf: '412.380.463-20',
         birthdate: '1992/02/17',
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        
         name: 'Gabriel Anthony Martins',
         cpf: '329.471.696-62',
         birthdate: '1967/01/01',
         createdAt: new Date(),
         updatedAt: new Date()
       }, 
       {
        
         name: 'Juliana Luciana Daiane Lima',
         cpf: '328.508.106-65',
         birthdate: '1959/11/06',
         createdAt: new Date(),
         updatedAt: new Date()
       }, 
       {
        
         name: 'Renan Renato Benício da Luz',
         cpf: '722.842.449-205',
         birthdate: '2001/01/04',
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        
         name: 'Melissa Stella Nicole Costa',
         cpf: '647.079.237-55',
         birthdate: '1965/05/04',
         createdAt: new Date(),
         updatedAt: new Date()
       }
      
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Wallets', null, {});
    
  }
};

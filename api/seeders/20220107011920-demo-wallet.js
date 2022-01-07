'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('wallets', 
    [
      {
        address: '123e4567-e89b-12d3-a456-42661417401233',
        name: 'Heloise Yasmin Aurora Oliveira',
        cpf: '412.380.463-20',
        birthdate: '07/01/1992',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '123e4167-e89b-12d3-a456-42661417401233',
        name: 'Gabriel Anthony Martins',
        cpf: '329.471.696-62',
        birthdate: '01/01/1967',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        address: '587e4167-e89b-12d3-a456-42661417401233',
        name: 'Juliana Luciana Daiane Lima',
        cpf: '328.508.106-65',
        birthdate: '06/01/1959',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        address: '587e4167-e89u-12d3-a456-42661417401233',
        name: 'Renan Renato Benício da Luz',
        cpf: '722.842.449-205',
        birthdate: '04/01/2001',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '587e4167-e89u-12d3-y456-42661417401233',
        name: 'Melissa Stella Nicole Costa',
        cpf: '647.079.237-55',
        birthdate: '07/01/1965',
        createdAt: new Date(),
        updatedAt: new Date()
      },
  
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('People', null, {});
     
  }
};

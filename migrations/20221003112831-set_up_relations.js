'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.addColumn('reviews','authorId', { type: Sequelize.INTEGER,references:{model:'users',key:'id'},onUpdate:'CASCADE',onDelete:'SET NULL' });
      await queryInterface.addColumn('reviews','receiverId', { type: Sequelize.INTEGER,references:{model:'users',key:'id'},onUpdate:'CASCADE',onDelete:'SET NULL' });
      await queryInterface.addColumn('images','userId', { type: Sequelize.INTEGER,references:{model:'users',key:'id'},onUpdate:'CASCADE',onDelete:'SET NULL' });
      await queryInterface.addColumn('jobs','userId', { type: Sequelize.INTEGER,references:{model:'users',key:'id'},onUpdate:'CASCADE',onDelete:'SET NULL' });
      
      await queryInterface.addColumn('jobs','categoryId', { type: Sequelize.INTEGER,references:{model:'roles',key:'id'},onUpdate:'CASCADE',onDelete:'SET NULL' });
     
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.removeColumn('reviews','authorId')
     await queryInterface.removeColumn('reviews','receiverId')
     await queryInterface.removeColumn('images','userId')
     await queryInterface.removeColumn('jobs','userId')
    
     await queryInterface.removeColumn('jobs','categoryId')
  }
};

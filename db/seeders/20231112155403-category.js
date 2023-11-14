'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {'category' 
  [
    {
      title: 'Electronics',
        createdAt: new Date(),
        updatedAt: new Date(),

  },{
    title: 'clothing',
        createdAt: new Date(),
        updatedAt: new Date(),
  },{
    title: 'books',
        createdAt: new Date(),
        updatedAt: new Date(),
  },{
    title: 'toys',
        createdAt: new Date(),
        updatedAt: new Date(),
  },{
    title: 'automotive',
        createdAt: new Date(),
        updatedAt: new Date(),
  },{
    title: 'sports',
        createdAt: new Date(),
        updatedAt: new Date(),
  }]
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

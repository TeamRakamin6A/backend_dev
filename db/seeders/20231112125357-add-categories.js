'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return await queryInterface.bulkInsert("Categories", [
      {
        id: 1,
        title: "Elektronik",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: "Peralatan Dapur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        title: "Pakaian",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        title: "Furnitur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        title: "Peralatan Medis",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
   return await queryInterface.bulkDelete('Categories', null, {});
  
  }
};

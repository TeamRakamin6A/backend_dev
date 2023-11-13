'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [
      {
        id: "101",
        title: "Elektronik",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "102",
        title: "Peralatan Dapur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "103",
        title: "Pakaian",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "104",
        title: "Furnitur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "105",
        title: "Peralatan Medis",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  
  }
};

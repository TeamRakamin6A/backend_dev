'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("Categories", [
      {
        id: 9991,
        title: "Elektronik",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9992,
        title: "Peralatan Dapur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9993,
        title: "Pakaian",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9994,
        title: "Furnitur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9995,
        title: "Peralatan Medis",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Categories', null, {});

  }
};

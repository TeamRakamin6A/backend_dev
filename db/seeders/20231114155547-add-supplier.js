'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert('Suppliers', [
      {
        id: 9991,
        company_name: "A Company",
        zip_code: 3722,
        email: "acompany@mail.com",
        address: "A street",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9992,
        company_name: "B Company",
        zip_code: 3722,
        email: "bcompany@mail.com",
        address: "B street",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9993,
        company_name: "C Company",
        zip_code: 3722,
        email: "ccompany@mail.com",
        address: "C street",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9994,
        company_name: "D Company",
        zip_code: 3722,
        email: "dcompany@mail.com",
        address: "D street",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9995,
        company_name: "E Company",
        zip_code: 3722,
        email: "ecompany@mail.com",
        address: "E street",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return await queryInterface.bulkDelete('Suppliers', null, {})
  }
};

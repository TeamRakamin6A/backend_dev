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

    return await queryInterface.bulkInsert('Item_Warehouses', [
      {
        item_id: 9991,
        warehouse_id: 9991,
        quantity: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 9992,
        warehouse_id: 9992,
        quantity: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 9993,
        warehouse_id: 9993,
        quantity: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 9994,
        warehouse_id: 9994,
        quantity: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 9995,
        warehouse_id: 9995,
        quantity: 100,
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

    return await queryInterface.bulkDelete('Item_Warehouses', null, {})
  }
};

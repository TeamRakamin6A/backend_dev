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
        item_id: 1,
        warehouse_id: 1,
        quantity: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 2,
        warehouse_id: 2,
        quantity: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 3,
        warehouse_id: 3,
        quantity: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 4,
        warehouse_id: 4,
        quantity: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 5,
        warehouse_id: 5,
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

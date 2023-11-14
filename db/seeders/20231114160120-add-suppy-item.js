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
    return await queryInterface.bulkInsert('Supply_Items', [
      {
        item_id: 1,
        supply_order_id: 1,
        quantity: 2,
        price: 20000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 2,
        supply_order_id: 2,
        quantity: 3,
        price: 20000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 3,
        supply_order_id: 3,
        quantity: 2,
        price: 20000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 4,
        supply_order_id: 4,
        quantity: 2,
        price: 20000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 5,
        supply_order_id: 5,
        quantity: 2,
        price: 20000,
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

    return await queryInterface.bulkDelete('Supply_Items', null, {})
  }
};

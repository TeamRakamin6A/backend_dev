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
        item_id: 9991,
        supply_order_id: 9991,
        quantity: 2,
        price: 20000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 9992,
        supply_order_id: 9992,
        quantity: 3,
        price: 20000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 9993,
        supply_order_id: 9993,
        quantity: 2,
        price: 20000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 9994,
        supply_order_id: 9994,
        quantity: 2,
        price: 20000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 9995,
        supply_order_id: 9995,
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

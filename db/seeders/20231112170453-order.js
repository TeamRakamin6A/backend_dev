'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Orders',

      [
        {
          id: 9991,
          invoice: 'INV-001',
          total_price: 50000,
          customer_id: 9991,
          warehouse_id: 9991,
          status: 'Pending',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          id: 9992,
          invoice: 'INV-002',
          total_price: 700000,
          customer_id: 9992,
          warehouse_id: 9992,
          status: 'Shipped',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          id: 9993,
          invoice: 'INV-003',
          total_price: 300000,
          customer_id: 9993,
          warehouse_id: 9991,
          status: 'Delivered',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          id: 9994,
          invoice: 'INV-004',
          total_price: 4500000,
          customer_id: 9994,
          warehouse_id: 9993,
          status: 'Pending',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          id: 9995,
          invoice: 'INV-005',
          total_price: 600000,
          customer_id: 9995,
          warehouse_id: 9992,
          status: 'Shipped',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          id: 9996,
          invoice: 'INV-006',
          total_price: 350000,
          customer_id: 9996,
          warehouse_id: 9991,
          status: 'Delivered',
          createdAt: new Date(),
          updatedAt: new Date(),
        }]
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Orders', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

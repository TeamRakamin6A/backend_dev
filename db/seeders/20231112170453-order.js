'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  return await queryInterface.bulkInsert('Orders',
   
   [
    {
      id: 1,
      invoice: 'INV-001',
      total_price: 500,
      customer_id: 1,
      warehouse_id: 1,
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date(),
   },{
    id: 2,
    invoice: 'INV-002',
    total_price: 700,
    customer_id: 2,
    warehouse_id: 2,
    status: 'Shipped',
    createdAt: new Date(),
    updatedAt: new Date(),
   },{
    id: 3,
    invoice: 'INV-003',
    total_price: 300,
    customer_id: 3,
    warehouse_id: 1,
    status: 'Delivered',
    createdAt: new Date(),
    updatedAt: new Date(),
   },{
    id: 4,
    invoice: 'INV-004',
    total_price: 450,
    customer_id: 4,
    warehouse_id: 3,
    status: 'Pending',
    createdAt: new Date(),
    updatedAt: new Date(),
   },{
    id: 5,
    invoice: 'INV-005',
    total_price: 600,
    customer_id: 5,
    warehouse_id: 2,
    status: 'Shipped',
    createdAt: new Date(),
    updatedAt: new Date(),
   },{
    id: 6,
    invoice: 'INV-006',
        total_price: 350,
        customer_id: 6,
        warehouse_id: 1,
        status: 'Delivered',
        createdAt: new Date(),
        updatedAt: new Date(),
   }]
  )},

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Orders', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

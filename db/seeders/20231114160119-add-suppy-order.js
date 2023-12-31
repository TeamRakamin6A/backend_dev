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

    return await queryInterface.bulkInsert('Supply_Orders', [
      {
        id: 9991,
        invoice: "https://plus.unsplash.com/premium_photo-1679784204535-e623926075cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW52b2ljZXxlbnwwfHwwfHx8MA%3D%3D",
        total_price: 100000,
        supplier_id: 9991,
        warehouse_id: 9991,
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9992,
        invoice: "https://plus.unsplash.com/premium_photo-1679784204535-e623926075cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW52b2ljZXxlbnwwfHwwfHx8MA%3D%3D",
        total_price: 100000,
        supplier_id: 9991,
        warehouse_id: 9991,
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9993,
        invoice: "https://plus.unsplash.com/premium_photo-1679784204535-e623926075cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW52b2ljZXxlbnwwfHwwfHx8MA%3D%3D",
        total_price: 100000,
        supplier_id: 9991,
        warehouse_id: 9991,
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9994,
        invoice: "https://plus.unsplash.com/premium_photo-1679784204535-e623926075cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW52b2ljZXxlbnwwfHwwfHx8MA%3D%3D",
        total_price: 100000,
        supplier_id: 9991,
        warehouse_id: 9991,
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9995,
        invoice: "https://plus.unsplash.com/premium_photo-1679784204535-e623926075cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW52b2ljZXxlbnwwfHwwfHx8MA%3D%3D",
        total_price: 100000,
        supplier_id: 9991,
        warehouse_id: 9991,
        status: "pending",
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
  }
};

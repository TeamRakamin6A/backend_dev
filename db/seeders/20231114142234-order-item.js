"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
   return await queryInterface.bulkInsert(
      "Order_Items",
      [
        {
          order_id: 1,
          item_id: 1,
          quantity: 40,
          price: 100000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 2,
          item_id: 2,
          quantity: 25,
          price: 100000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 3,
          item_id: 3,
          quantity: 30,
          price: 100000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 4,
          item_id: 4,
          quantity: 35,
          price: 100000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 5,
          item_id: 5,
          quantity: 45,
          price: 100000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 6,
          item_id: 6,
          quantity: 40,
          price: 100000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Order_Items", null, {});
  },
};
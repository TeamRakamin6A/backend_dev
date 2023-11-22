"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      "Order_Items",
      [
        {
          order_id: 9991,
          item_id: 9991,
          quantity: 40,
          price: 100000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 9992,
          item_id: 9992,
          quantity: 25,
          price: 100000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 9993,
          item_id: 9993,
          quantity: 30,
          price: 100000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 9994,
          item_id: 9994,
          quantity: 35,
          price: 100000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 9995,
          item_id: 9995,
          quantity: 45,
          price: 100000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 9996,
          item_id: 9996,
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
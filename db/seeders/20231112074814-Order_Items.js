"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Order_Items",
      [
        {
          order_id: "OD01",
          item_id: "IT01",
          quantity: "40",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: "OD02",
          item_id: "IT02",
          quantity: "25",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: "OD03",
          item_id: "IT03",
          quantity: "30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: "OD04",
          item_id: "IT04",
          quantity: "35",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: "OD05",
          item_id: "IT05",
          quantity: "45",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: "OD06",
          item_id: "IT06",
          quantity: "40",
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

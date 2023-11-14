"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Order_Items",
      [
        {
          order_id: "O001",
          item_id: "1101",
          quantity: "40",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: "O002",
          item_id: "1102",
          quantity: "25",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: "O003",
          item_id: "1103",
          quantity: "30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: "O004",
          item_id: "1104",
          quantity: "35",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: "O005",
          item_id: "1105",
          quantity: "45",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: "O006",
          item_id: "1106",
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

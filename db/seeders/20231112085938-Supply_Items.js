"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Supply_Items",
      [
        {
          item_id: "IT01",
          supply_order_id: "SO01",
          quantity: "40",
          price: "IDR 400.000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          item_id: "IT02",
          supply_order_id: "SO02",
          quantity: "25",
          price: "IDR 450.000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          item_id: "IT03",
          supply_order_id: "SO03",
          quantity: "30",
          price: "IDR 480.000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          item_id: "IT04",
          supply_order_id: "SO04",
          quantity: "35",
          price: "IDR 380.000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          item_id: "IT05",
          supply_order_id: "SO05",
          quantity: "45",
          price: "IDR 360.000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          item_id: "IT06",
          supply_order_id: "SO06",
          quantity: "40",
          price: "IDR 535.000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Supply_Items", null, {});
  },
};

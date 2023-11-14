"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Supply_Items",
      [
        {
          item_id: "1101",
          supply_order_id: "501",
          quantity: "40",
          price: "IDR 400.000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          item_id: "1102",
          supply_order_id: "502",
          quantity: "25",
          price: "IDR 450.000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          item_id: "1103",
          supply_order_id: "503",
          quantity: "30",
          price: "IDR 480.000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          item_id: "1104",
          supply_order_id: "504",
          quantity: "35",
          price: "IDR 380.000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          item_id: "1105",
          supply_order_id: "505",
          quantity: "45",
          price: "IDR 360.000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          item_id: "1106",
          supply_order_id: "506",
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

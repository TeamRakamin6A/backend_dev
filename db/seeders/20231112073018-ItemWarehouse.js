"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Item_Warehouses",
      [
        {
          quantity: "40",
          item_id: "IT01",
          warehouse_id: "WH01",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quantity: "25",
          item_id: "IT02",
          warehouse_id: "WH02",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quantity: "30",
          item_id: "IT03",
          warehouse_id: "WH03",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quantity: "35",
          item_id: "IT04",
          warehouse_id: "WH04",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quantity: "45",
          item_id: "IT05",
          warehouse_id: "WH05",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quantity: "40",
          item_id: "IT06",
          warehouse_id: "WH06",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Item_warehouses", null, {});
  },
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Item_Warehouses",
      [
        {
          quantity: "40",
          item_id: "1101",
          warehouse_id: "301",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quantity: "25",
          item_id: "1102",
          warehouse_id: "302",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quantity: "30",
          item_id: "1103",
          warehouse_id: "303",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quantity: "35",
          item_id: "1104",
          warehouse_id: "304",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quantity: "45",
          item_id: "1105",
          warehouse_id: "305",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quantity: "40",
          item_id: "1106",
          warehouse_id: "306",
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

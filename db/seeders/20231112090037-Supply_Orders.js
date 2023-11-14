"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Supply_Orders",
      [
        {
          invoice: "INV-0001",
          total_price: "16.000.000",
          supplier_id: "511",
          warehouse_id: "301",
          status: "Available",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          invoice: "INV-0002",
          total_price: "11.250.000",
          supplier_id: "512",
          warehouse_id: "302",
          status: "Available",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          invoice: "INV-0003",
          total_price: "14.400.000",
          supplier_id: "513",
          warehouse_id: "303",
          status: "Unavailbale",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          invoice: "INV-0004",
          total_price: "13.300.000",
          supplier_id: "514",
          warehouse_id: "304",
          status: "Available",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          invoice: "INV-0005",
          total_price: "16.200.000",
          supplier_id: "515",
          warehouse_id: "305",
          status: "Available",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          invoice: "INV-0006",
          total_price: "21.400.000",
          supplier_id: "516",
          warehouse_id: "306",
          status: "Unavailable",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Supply_Orders", null, {});
  },
};

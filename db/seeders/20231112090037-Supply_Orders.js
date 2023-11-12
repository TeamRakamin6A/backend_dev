"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Supply_Orders",
      [
        {
          invoice: "INV-0001",
          total_price: "IDR 16.000.000",
          supplier_id: "SL01",
          warehouse_id: "WH01",
          status: "Available",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          invoice: "INV-0002",
          total_price: "IDR 11.250.000",
          supplier_id: "SL02",
          warehouse_id: "WH02",
          status: "Available",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          invoice: "INV-0003",
          total_price: "IDR 14.400.000",
          supplier_id: "SL03",
          warehouse_id: "WH03",
          status: "Unavailbale",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          invoice: "INV-0004",
          total_price: "IDR 13.300.000",
          supplier_id: "SL04",
          warehouse_id: "WH04",
          status: "Available",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          invoice: "INV-0005",
          total_price: "IDR 16.200.000",
          supplier_id: "SL05",
          warehouse_id: "WH05",
          status: "Available",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          invoice: "INV-0006",
          total_price: "IDR 21.400.000",
          supplier_id: "SL06",
          warehouse_id: "WH06",
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

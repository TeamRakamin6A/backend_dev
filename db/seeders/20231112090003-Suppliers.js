"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Suppliers",
      [
        {
          company_name: "Inventory IQ",
          address: "Jl. S. Wiryopranoto No. 37, Sawah Besar,Jakarta Barat",
          email: "w.hinkle@inventoryiq.net",
          zip_code: "35022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          company_name: "StockSync Solutions",
          address: "Sunrise Garden Surya Mandala I,Jakarta Barat",
          email: "stock.solutions.@stocksync.net",
          zip_code: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          company_name: "SmartStock Hub",
          address: "Jl. Jend. Sudirman No.30, Stalkuda PO BOX 216 Balikpapan",
          email: "ss.hub@smartstock.net",
          zip_code: "76114",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          company_name: "OptiStock Systems",
          address: "Jl. Somba Opu No. 281, Makassar",
          email: "optistock@system.net",
          zip_code: "90001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          company_name: "Accu Inventory",
          address: "Jl. Kapten Pierre Tendean Kav.2 Jakarta",
          email: "accu@inventory.net",
          zip_code: "12710",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          company_name: "SwiftStock Technologies",
          address: "Gedung Sarana Jaya Lt. 7, Jakarta Pusat",
          email: "swiftstock@technologies.net",
          zip_code: "10110",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Suppliers", null, {});
  },
};

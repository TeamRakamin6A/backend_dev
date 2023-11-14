'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return await queryInterface.bulkInsert("Items", [
      { 
        id: 1,
        sku: "001",
        title: "lenovo ideapad slim 3",
        price: 9199000,
        keywords: "Elektronik",
        description: "lenovo ideapad slim 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 2,
        sku: "002",
        title: "lenovo l24i",
        price: 15409000,
        keywords: "Elektronik",
        description: "15409000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 3,
        sku: "003",
        title: "canon eos 90d",
        price: 32400000,
        keywords: "Elektronik",
        description: "canon eos 90d",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 4,
        sku: "004",
        title: "ifa cookware ichef square",
        price: 310000,
        keywords: "Peralatan Dapur",
        description: "ifa cookware ichef square",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 5,
        sku: "005",
        title: "Staub - Silicone Utensils",
        price: 640000,
        keywords: "Peralatan Dapur",
        description: "Staub - Silicone Utensils",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 6,
        sku: "006",
        title: "KITCHEN AID SMALL APPLIANCES ACC WHITE",
        price: 3248000,
        type: "Peralatan Dapur",
        description: "KITCHEN AID SMALL APPLIANCES ACC WHITE",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 7,
        sku: "007",
        title: "ORIGINAL SKECHERS MEN'S APPAREL",
        price: 100000,
        type: "Pakaian",
        description: "ORIGINAL SKECHERS MEN'S APPAREL",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 8,
        sku: "008",
        title: "ORIGINAL REEBOK WOMEN'S APPAREL",
        price: 90000,
        type: "Pakaian",
        description: "ORIGINAL REEBOK WOMEN'S APPAREL",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: 9,
        sku: "009",
        title: "EDORA SPORTSWEAR",
        price: 165000,
        type: "Pakaian",
        description: "EDORA SPORTSWEAR",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        sku: "010",
        title: "Living Room Furniture Coffe Table Marmer",
        price: 1950000,
        type: "Furnitur",
        description: "Living Room Furniture Coffe Table Marmer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        sku: "011",
        title: "Sylvanian Families - Children's Bedroom Furniture",
        price: 350888,
        type: "Furnitur",
        description: "Sylvanian Families - Children's Bedroom Furniture",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        sku: "012",
        title: "kursi kantor",
        price: 1125000,
        type: "Furnitur",
        description: "kursi kantor",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        sku: "013",
        title: "Reagen Albumin 100ml 05-2025",
        price: 690000,
        type: "Peralatan Medis",
        description: "Reagen Albumin 100ml 05-2025",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        sku: "014",
        title: "Patient Monitoring System Versi 2.7 1 Vetom",
        price: 29000000,
        type: "Peralatan Medis",
        description: "Patient Monitoring System Versi 2.7 1 Vetom",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        sku: "015",
        title: "Renz Surgical Instrument Kit Partus set",
        price: 410000,
        type: "Peralatan Medis",
        description: "Renz Surgical Instrument Kit Partus set",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
   return await queryInterface.bulkDelete('Items', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

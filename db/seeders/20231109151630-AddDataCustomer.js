"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      "Customers",
      [
        {
          id: 9991,
          name: "Maulana Rafinda",
          address: "Indonesia",
          phone_number: "01234567",
          email: "maulana@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9992,
          name: "Agustinus Surya Adi Sulistyo Soemarno",
          address: "Indonesia",
          phone_number: "11111111",
          email: "agustinus@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9993,
          name: "Andi Ariski",
          address: "Indonesia",
          phone_number: "22222222",
          email: "andi@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9994,
          name: "Rangga Krisna Putra",
          address: "Indonesia",
          phone_number: "33333333",
          email: "rangga@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9995,
          name: "Reygan Fadhilah",
          address: "Indonesia",
          phone_number: "44444444",
          email: "reygan@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9996,
          name: "Ahmad Jalu Fahreza Nur Hakim",
          address: "Indonesia",
          phone_number: "55555555",
          email: "ahmad@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Customers", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

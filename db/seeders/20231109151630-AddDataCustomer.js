"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Customers",
      [
        {
          name: "Maulana Rafinda",
          address: "Indonesia",
          phone_number: "01234567",
          email: "maulana@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Agustinus Surya Adi Sulistyo Soemarno",
          address: "Indonesia",
          phone_number: "11111111",
          email: "agustinus@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Andi Ariski",
          address: "Indonesia",
          phone_number: "22222222",
          email: "andi@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rangga Krisna Putra",
          address: "Indonesia",
          phone_number: "33333333",
          email: "rangga@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Reygan Fadhilah",
          address: "Indonesia",
          phone_number: "44444444",
          email: "reygan@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
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
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Customers", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

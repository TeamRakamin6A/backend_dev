'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Item_Categories', [
      {
        item_id: 9991,
        category_id: 9991,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 9992,
        category_id: 9992,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 9993,
        category_id: 9993,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 9994,
        category_id: 9994,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 9995,
        category_id: 9995,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Item_Categories', null, {})
  }
};

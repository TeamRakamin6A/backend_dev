'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Item_Categories', [
      {
        item_id: 1,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 2,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 3,
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 4,
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 5,
        category_id: 5,
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

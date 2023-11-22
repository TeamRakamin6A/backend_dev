'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Warehouses', [{

      id: 9991,
      title: 'warehouse 1',
      address: 'kebumen. melati Street No.1',
      createdAt: new Date(),
      updatedAt: new Date(),

    }, {
      id: 9992,
      title: 'warehouse 2',
      address: 'jember. suka Street No.2',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 9993,
      title: 'warehouse 3',
      address: 'purwokerto.makmur Street No.3',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 9994,
      title: 'warehouse 4',
      address: 'kebumen.jaya Street No.4',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 9995,
      title: 'warehouse 5',
      address: 'kebumen. aman Street No.5',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 9996,
      title: 'warehouse 6',
      address: 'solo.suka Street No.6',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Warehouses', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     *return await queryInterface.bulkDelete('People', null, {});
     */
  }
};

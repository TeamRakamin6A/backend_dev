'use strict';

const { hashPassword } = require('../../src/utils/BcryptUtil')
const salt = 10
module.exports = {
  async up(queryInterface, Sequelize) {


    return await queryInterface.bulkInsert('Users', [{
      name: 'andiariski',
      email: 'andiariski222@gmail.com',
      username: 'andiariski',
      password: await hashPassword('admin', salt),
      createdAt: new Date(),
      role: "admin",
      updatedAt: new Date(),
    }, {
      name: 'ranggga krisna',
      email: 'rangga@gmail.com',
      username: 'rangga',
      password: await hashPassword('admin', salt),
      createdAt: new Date(),
      role: "admin",
      updatedAt: new Date(),
    }, {
      // new data
      name: 'reygan fadilah',
      email: 'reyghan@gmail.com',
      username: 'fadilah',
      password: await hashPassword('admin', salt),
      createdAt: new Date(),
      role: "admin",
      updatedAt: new Date(),
    }, {
      name: 'ahmad jalu fahreza',
      email: 'fahreza@gmail.com',
      username: 'ahmadd',
      password: await hashPassword('admin', salt),
      createdAt: new Date(),
      role: "admin",
      updatedAt: new Date(),
    }, {
      name: 'agustinus suryaadi',
      email: 'suryadi@gmail.com',
      username: 'agus',
      password: await hashPassword('admin', salt),
      createdAt: new Date(),
      role: "admin",
      updatedAt: new Date(),
    }, {
      name: 'ahmad kurnia',
      email: 'ahmad.kurniwn24@gmail.com',
      username: 'ahmad',
      password: await hashPassword('admin', salt),
      createdAt: new Date(),
      role: "admin",
      updatedAt: new Date(),
    }, {
      name: 'admin',
      email: 'admin@gmail.com',
      username: 'admin',
      password: await hashPassword('admin', salt),
      createdAt: new Date(),
      role: "admin",
      updatedAt: new Date(),
    }]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return await queryInterface.bulkDelete('Users', null, {});

  }
};



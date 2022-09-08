'use strict';

export async function up(queryInterface, Sequelize) {
  /**
   * Add seed commands here.
   *
   * Example:
   * await queryInterface.bulkInsert('People', [{
   *   name: 'John Doe',
   *   isBetaMember: false
   * }], {});
  */
 return await queryInterface.bulkInsert('Workers', [{
  name: 'Zach Mines',
  email: 'moustacheman531@gmail.com',
  admin: true
  }], {});
}
export async function down(queryInterface, Sequelize) {
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
   return queryInterface.bulkDelete('Workers', null, {});
}

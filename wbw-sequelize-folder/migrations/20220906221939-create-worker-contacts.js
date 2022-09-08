'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('workerContacts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    worker_id: {
      type: Sequelize.INTEGER
    },
    contact_id: {
      type: Sequelize.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('workerContacts');
}
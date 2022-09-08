'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      old_address: {
        type: Sequelize.STRING
      },
      new_address: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      broker_name: {
        type: Sequelize.STRING
      },
      broker_company: {
        type: Sequelize.STRING
      },
      broker_number: {
        type: Sequelize.STRING
      },
      broker_email: {
        type: Sequelize.STRING
      },
      architect_name: {
        type: Sequelize.STRING
      },
      architect_company: {
        type: Sequelize.STRING
      },
      architect_number: {
        type: Sequelize.STRING
      },
      architect_email: {
        type: Sequelize.STRING
      },
      consultant_name: {
        type: Sequelize.STRING
      },
      consultant_company: {
        type: Sequelize.STRING
      },
      consultant_number: {
        type: Sequelize.STRING
      },
      consultant_email: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.TEXT
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Contacts');
  }
};
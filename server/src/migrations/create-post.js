'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      star: {
        type: Sequelize.INTEGER,
      },
      address: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      labelId: {
        type: Sequelize.STRING
      },
      attributeId: {
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.STRING
      },
      overviewId: {
        type: Sequelize.STRING
      },
      imagesId: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Posts');
  }
};
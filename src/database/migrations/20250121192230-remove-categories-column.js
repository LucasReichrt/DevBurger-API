'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    queryInterface.removeColumn('products', 'category');
  },

  async down(queryInterface, Sequelize) {
    queryInterface.addColumn('products', 'category', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  }
};

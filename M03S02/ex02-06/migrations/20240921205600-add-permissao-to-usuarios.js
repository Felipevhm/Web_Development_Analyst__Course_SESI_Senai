'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Usuarios', 'permission', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'estudante'  // Valor padrão
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Usuarios', 'permission');
  }
};

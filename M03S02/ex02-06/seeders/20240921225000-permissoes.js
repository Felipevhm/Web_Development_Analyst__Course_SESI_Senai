'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Permissoes', [
      { nome: 'admin', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'moderador', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'editor', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'visualizador', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'contribuidor', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Permissoes', null, {});
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [
      { nome: 'Maria', sobrenome: 'Silva', email: 'maria@email.com', senha: '123456', permission: 'admin', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'João', sobrenome: 'Pereira', email: 'joao@email.com', senha: '654321', permission: 'estudante', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Ana', sobrenome: 'Santos', email: 'ana@email.com', senha: 'abcdef', permission: 'moderador', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Pedro', sobrenome: 'Oliveira', email: 'pedro@email.com', senha: 'qwerty', permission: 'estudante', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Carla', sobrenome: 'Costa', email: 'carla@email.com', senha: '123abc', permission: 'admin', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};

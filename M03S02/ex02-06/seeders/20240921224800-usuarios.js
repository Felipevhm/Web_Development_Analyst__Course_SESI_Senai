'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [
      { nome: 'Maria', sobrenome: 'Silva', email: 'maria@email.com', senha: '123456', permissao: 'admin', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'João', sobrenome: 'Pereira', email: 'joao@email.com', senha: '654321', permissao: 'estudante', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Ana', sobrenome: 'Santos', email: 'ana@email.com', senha: 'abcdef', permissao: 'moderador', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Pedro', sobrenome: 'Oliveira', email: 'pedro@email.com', senha: 'qwerty', permissao: 'estudante', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Carla', sobrenome: 'Costa', email: 'carla@email.com', senha: '123abc', permissao: 'admin', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};

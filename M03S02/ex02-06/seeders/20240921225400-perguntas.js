'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Perguntas', [
      { descricao: 'Você está satisfeito com o serviço?', questionario_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'O que você mudaria no produto?', questionario_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Quais são suas expectativas para o próximo ano?', questionario_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Qual a didática do professor?', questionario_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Como você avalia o ambiente de trabalho?', questionario_id: 5, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Perguntas', null, {});
  }
};

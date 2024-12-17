'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Respostas', [
      { conteudo: 'Estou muito satisfeito!', pergunta_id: 1, usuario_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { conteudo: 'Acho que o design poderia ser melhor.', pergunta_id: 2, usuario_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { conteudo: 'Espero que melhore ainda mais.', pergunta_id: 3, usuario_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { conteudo: 'A didática foi excelente!', pergunta_id: 4, usuario_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { conteudo: 'O ambiente de trabalho é ótimo.', pergunta_id: 5, usuario_id: 5, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Respostas', null, {});
  }
};

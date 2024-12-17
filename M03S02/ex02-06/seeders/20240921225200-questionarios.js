'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Questionarios', [
      { titulo: 'Enquete de Satisfação', descricao: 'Avaliação dos serviços', createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Feedback de Produto', descricao: 'Opinião sobre o produto X', createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Pesquisa de Mercado', descricao: 'Estudo sobre tendências de mercado', createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Avaliação de Professor', descricao: 'Feedback sobre a didática do professor', createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Pesquisa de Clima', descricao: 'Análise do clima organizacional', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Questionarios', null, {});
  }
};

const { Usuario } = require('../models');

module.exports = {
  async encontrarPorEmail(email) {
    return await Usuario.findOne({ where: { email } });
  },

  async criarUsuario(dadosUsuario) {
    return await Usuario.create(dadosUsuario);
  },
};

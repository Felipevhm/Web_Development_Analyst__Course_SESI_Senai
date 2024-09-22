const { Usuario, Permission } = require('../models');

module.exports = {
  async listar(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      return res.json(usuarios);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar usuários.' });
    }
  },

  async criar(req, res) {
    try {
      const { nome, sobrenome, email, senha } = req.body;
      const novoUsuario = await Usuario.create({ nome, sobrenome, email, senha });
      return res.status(201).json(novoUsuario);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar usuário.' });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { nome, sobrenome, email, senha } = req.body;
      const usuario = await Usuario.findByPk(id);
      
      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }

      usuario.nome = nome;
      usuario.sobrenome = sobrenome;
      usuario.email = email;
      usuario.senha = senha;

      await usuario.save();
      return res.json(usuario);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar usuário.' });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);
      
      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }

      await usuario.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao deletar usuário.' });
    }
  },
  async listarPermissoes(req, res) {
   try {
     const permissoes = await Permission.findAll({
      //  include: [{ model: Usuario }],
     });
     return res.json(permissoes);
   } catch (error) {
     return res.status(500).json({ error: 'Erro ao listar permissões.' });
   }
 },

};

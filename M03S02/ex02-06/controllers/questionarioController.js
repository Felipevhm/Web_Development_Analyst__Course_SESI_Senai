const { Questionario, Pergunta } = require('../models');

module.exports = {
  async listar(req, res) {
    try {
      const questionarios = await Questionario.findAll({
        include: [{ model: Pergunta }],
      });
      return res.json(questionarios);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar questionários.' });
    }
  },

  async criar(req, res) {
    try {
      const { titulo, descricao } = req.body;
      const novoQuestionario = await Questionario.create({ titulo, descricao });
      return res.status(201).json(novoQuestionario);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar questionário.' });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { titulo, descricao } = req.body;
      const questionario = await Questionario.findByPk(id);

      if (!questionario) {
        return res.status(404).json({ error: 'Questionário não encontrado.' });
      }

      questionario.titulo = titulo;
      questionario.descricao = descricao;

      await questionario.save();
      return res.json(questionario);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar questionário.' });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      const questionario = await Questionario.findByPk(id);
      
      if (!questionario) {
        return res.status(404).json({ error: 'Questionário não encontrado.' });
      }

      await questionario.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao deletar questionário.' });
    }
  },

  async listarComPerguntas(req, res) {
   try {
     const questionarios = await Questionario.findAll({
       include: [{ model: Pergunta }],
     });
     return res.json(questionarios);
   } catch (error) {
     return res.status(500).json({ error: 'Erro ao listar questionários com perguntas.' });
   }
 },
};

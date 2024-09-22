const { Questionario } = require('../models');

class QuestionarioService {
  static async criarQuestionario(dados) {
    return await Questionario.create(dados);
  }

  static async buscarTodos() {
    return await Questionario.findAll();
  }

  static async buscarPorId(id) {
    return await Questionario.findByPk(id);
  }

  static async atualizarQuestionario(id, novosDados) {
    const questionario = await Questionario.findByPk(id);
    if (!questionario) throw new Error('Questionário não encontrado');
    return await questionario.update(novosDados);
  }

  static async deletarQuestionario(id) {
    const questionario = await Questionario.findByPk(id);
    if (!questionario) throw new Error('Questionário não encontrado');
    return await questionario.destroy();
  }
}

module.exports = QuestionarioService;

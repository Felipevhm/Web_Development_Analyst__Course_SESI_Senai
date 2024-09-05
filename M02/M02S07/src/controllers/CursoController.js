const Curso = require('../models/Curso');
const { Op } = require('sequelize');

class CursoController {
    async buscarTodos(request, response) {
        try {
            const { nome, duracao } = request.query;
            const where = {};

            if (nome) {
                where.nome = { [Op.like]: `%${nome}%` };
            }

            if (duracao) {
                where.duracao = duracao;
            }

            const cursos = await Curso.findAll({ where });
            response.json(cursos);
        } catch (error) {
            response.status(500).json({
                mensagem: 'Não foi possível buscar os cursos'
            });
        }
    }

    async deletar(request, response) {
        try {
            const id = request.params.id;
            const curso = await Curso.findByPk(id);

            if (!curso) {
                return response.status(404).json({
                    mensagem: 'Não foi encontrado um curso com esse id'
                });
            }

            await curso.destroy();

            response.status(204).json();
        } catch (error) {
            response.status(500).json({
                mensagem: 'Não foi possível buscar o curso'
            });
        }
    }

    async criar(request, response) {
        console.log(request);
        const { nome, duracao, descricao } = request.body;
        // Validações manuais
        const errors = [];
        if (!nome) {
            errors.push({ msg: 'Nome do curso é obrigatório', param: 'nome' });
        }
        if (!duracao || !Number.isInteger(duracao) || duracao <= 0) {
            errors.push({ msg: 'Duração do curso deve ser um número inteiro positivo', param: 'duracao' });
        }

        if (errors.length > 0) {
            return response.status(400).json({ errors });
        }

        try {
            const curso = await Curso.create({ nome, duracao, descricao });
            return response.status(201).json(curso);
        } catch (error) {
            response.status(500).json({
                mensagem: 'Não foi possível criar o curso'
            });
        }
    }

    async atualizar(request, response) {
        const { nome, duracao } = request.body;
        const errors = [];
        if (!nome && (!duracao || !Number.isInteger(duracao) || duracao <= 0)) {
            errors.push({ msg: 'É necessário para a atualização ao menos um nome válido ou uma duração de curso válida.', param: ['duracao', 'nome'] });
        }

        if (errors.length > 0) {
            return response.status(400).json({ errors });
        }

        try {
            const id = request.params.id;
            const dados = request.body;

            const curso = await Curso.findByPk(id);

            if (!curso) {
                return response.status(404).json({
                    mensagem: 'Não foi encontrado um curso com esse id'
                });
            }

            curso.nome = dados.nome;
            curso.duracao = dados.duracao;
            curso.descricao = dados.descricao;

            await curso.save();

            response.json(curso);
        } catch (error) {
            console.log(error);
            response.status(500).json({
                mensagem: 'Não foi possível atualizar o curso'
            });
        }
    }

    async buscarUm(request, response) {
        const id = request.params.id;
        const curso = await Curso.findByPk(id);

        if (!curso) {
            return response.status(404).json({
                mensagem: 'Não foi encontrado um curso com esse id'
            });
        }

        response.json(curso);
    }
}

module.exports = new CursoController();

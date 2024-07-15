const Professor = require('../models/Professor');
const { Op } = require('sequelize');

class ProfessorController {
    async buscarTodos(request, response) {
        try {
            const { nome, especialidade } = request.query;
            const where = {};

            if (nome) {
                where.nome = { [Op.like]: `%${nome}%` };
            }

            if (especialidade) {
                where.especialidade = { [Op.like]: `%${especialidade}%` };
            }

            const professores = await Professor.findAll({ where });
            response.json(professores);
        } catch (error) {
            response.status(500).json({
                mensagem: 'Não foi possível buscar os professores'
            });
        }
    }

    async deletar(request, response) {
        try {
            const id = request.params.id;
            const professor = await Professor.findByPk(id);

            if (!professor) {
                return response.status(404).json({
                    mensagem: 'Não foi encontrado um professor com esse id'
                });
            }

            await professor.destroy();

            response.status(204).json();
        } catch (error) {
            response.status(500).json({
                mensagem: 'Não foi possível buscar o professor'
            });
        }
    }

    async criar(request, response) {
        const { nome, especialidade } = request.body;
        // Validações manuais
        const errors = [];
        if (!nome) {
            errors.push({ msg: 'Nome do professor é obrigatório', param: 'nome' });
        }
        if (!especialidade) {
            errors.push({ msg: 'Especialidade do professor é obrigatória', param: 'especialidade' });
        }

        if (errors.length > 0) {
            return response.status(400).json({ errors });
        }

        try {
            const professor = await Professor.create({ nome, especialidade });
            return response.status(201).json(professor);
        } catch (error) {
            response.status(500).json({
                mensagem: 'Não foi possível criar o professor'
            });
        }
    }

    async atualizar(request, response) {
        const { nome, especialidade } = request.body;
        const errors = [];
        if (!nome && !especialidade) {
            errors.push({ msg: 'É necessário para a atualização ao menos um nome válido ou uma especialidade válida.', param: ['especialidade', 'nome'] });
        }

        if (errors.length > 0) {
            return response.status(400).json({ errors });
        }

        try {
            const id = request.params.id;
            const dados = request.body;

            const professor = await Professor.findByPk(id);

            if (!professor) {
                return response.status(404).json({
                    mensagem: 'Não foi encontrado um professor com esse id'
                });
            }

            if (dados.nome) professor.nome = dados.nome;
            if (dados.especialidade) professor.especialidade = dados.especialidade;

            await professor.save();

            response.json(professor);
        } catch (error) {
            response.status(500).json({
                mensagem: 'Não foi possível atualizar o professor'
            });
        }
    }

    async buscarUm(request, response) {
        const id = request.params.id;
        const professor = await Professor.findByPk(id);

        if (!professor) {
            return response.status(404).json({
                mensagem: 'Não foi encontrado um professor com esse id'
            });
        }

        response.json(professor);
    }
}

module.exports = new ProfessorController();

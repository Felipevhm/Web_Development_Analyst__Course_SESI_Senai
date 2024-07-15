const { Router } = require("express");
const ProfessorController = require("../controllers/ProfessorController");

const professoresRoutes = new Router();

professoresRoutes.post('/', ProfessorController.criar);
professoresRoutes.get('/', ProfessorController.buscarTodos);
professoresRoutes.delete('/:id', ProfessorController.deletar);
professoresRoutes.put('/:id', ProfessorController.atualizar);
professoresRoutes.get('/:id', ProfessorController.buscarUm);

module.exports = professoresRoutes;

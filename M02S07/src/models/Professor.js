const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

const Professor = connection.define('professores', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    especialidade: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Professor;

// models/pet.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.config');

const Pet = sequelize.define('Pet', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Pet;

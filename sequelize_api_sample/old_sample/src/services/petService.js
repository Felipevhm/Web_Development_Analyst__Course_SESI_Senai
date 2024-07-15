const Pet = require('../models/pet');

exports.getAllPets = async () => {
    return await Pet.findAll();
};

exports.createPet = async (petData) => {
    return await Pet.create(petData);
};

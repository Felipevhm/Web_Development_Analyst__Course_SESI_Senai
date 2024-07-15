const Pet = require('../models/pet');
const PetService = require('../services/petService');

class PetController {
    async getAllPets(req, res) {
        try {
            const pets = await Pet.findAll(); // Chama o método findAll do modelo Pet
            res.json(pets);
        } catch (error) {
            console.error('Error fetching pets:', error);
            res.status(500).json({ error: 'Error fetching pets' });
        }
    }

    async getPetById(req, res) {
        try {
            const petId = req.params.id;
            const pet = await Pet.findByPk(petId); // Exemplo de uso do método findByPk para buscar por ID
            if (!pet) {
                return res.status(404).json({ error: 'Pet not found' });
            }
            res.json(pet);
        } catch (error) {
            console.error('Error fetching pet:', error);
            res.status(500).json({ error: 'Error fetching pet' });
        }
    }
}

module.exports = new PetController();

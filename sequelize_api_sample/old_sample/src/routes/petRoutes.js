const express = require('express');
const router = express.Router();
const PetController = require('../controllers/petController');
const { validatePet } = require('../utils/validations');

router.get('/pets', PetController.getAllPets);
router.post('/pets', validatePet, PetController.createPet);

module.exports = router;

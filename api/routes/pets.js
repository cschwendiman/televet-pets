var express = require('express');
var router = express.Router();

// TODO replace this with sql database
var pets = require('../data/denormalizedPets.json');

/* GET all pets */
router.get('/', function(req, res, next) {
  res.json(pets);
});

/* GET pet by petId */
router.get('/:petId', function(req, res, next) {
  res.json(pets.find(pet => pet.id == req.params.petId));
});

// Used in constructing denormalizedPets.json
function denormalizePets(pets) {
  let denormalizedPets = pets.data.map((pet) => {
    let denormalizedPet = {};
    pet.forEach((value, index) => {
      denormalizedPet[pets.cols[index]] = value;
    })
    return denormalizedPet;
  })
  return denormalizedPets;
}

module.exports = router;

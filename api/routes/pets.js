var express = require('express');
var router = express.Router();

// TODO replace this with sql database
var pets = require('../data/denormalizedPets.json');

/* GET all pets */
router.get('/', function(req, res, next) {
  const column = req.query.sort || 'id'
  const ascending = req.query.ascending || 'true'
  const page = req.query.page || 0
  // This is awful, do all of this with sql
  if (column && ascending) {
    res.json(pets.sort((a, b) => {
      if (a[column] === b[column]) {
        return 0
      }
      if (ascending === 'true') {
        return a[column] < b[column] ? -1 : 1
      } else {
        return a[column] > b[column] ? -1 : 1
      }
    }).slice(page*10, (page*10)+10))
  } else {
    res.json(pets.slice(page*10, page*10+10));    
  }
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

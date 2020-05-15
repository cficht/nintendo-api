const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()
  .get('/', (req, res, next) => {
    // const page = req.query.page;
    // const limit = req.query.limit;
    // console.log(page);
    Character
      .find()
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/mario', (req, res, next) => {
    Character
      .getMarioCharacters()
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/zelda', (req, res, next) => {
    Character
      .getZeldaCharacters()
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/starfox', (req, res, next) => {
    Character
      .getStarFoxCharacters()
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/metroid', (req, res, next) => {
    Character
      .getMetroidCharacters()
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/kirby', (req, res, next) => {
    Character
      .getKirbyCharacters()
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/ac', (req, res, next) => {
    Character
      .getACCharacters()
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/pikmin', (req, res, next) => {
    Character
      .getPikminCharacters()
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/random', (req, res, next) => {
    const count = Number(req.query.count);
    Character
      .getRandom(count)
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Character
      .findById(req.params.id)
      .select('name first_appearance quote species creator image')
      .then(character => res.send(character))
      .catch(next);
  });

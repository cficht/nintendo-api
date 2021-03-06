const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()
  .get('/', (req, res, next) => {
    const { page = 1, perPage = 20 } = req.query;
    const searchReg = new RegExp(req.query.search, 'i');
    Character
      .find({ name: searchReg })
      .sort({ name : 1 })
      .skip((page - 1) * Number(perPage))
      .limit(Number(perPage))
      .select('name image first_appearance quote species creator description')
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/mario', (req, res, next) => {
    const { page, perPage } = req.query;
    Character
      .getMarioCharacters(page, Number(perPage))
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/zelda', (req, res, next) => {
    const { page, perPage } = req.query;
    Character
      .getZeldaCharacters(page, Number(perPage))
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/star_fox', (req, res, next) => {
    const { page, perPage } = req.query;
    Character
      .getStarFoxCharacters(page, Number(perPage))
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/metroid', (req, res, next) => {
    const { page, perPage } = req.query;
    Character
      .getMetroidCharacters(page, Number(perPage))
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/kirby', (req, res, next) => {
    const { page, perPage } = req.query;
    Character
      .getKirbyCharacters(page, Number(perPage))
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/animal_crossing', (req, res, next) => {
    const { page, perPage } = req.query;
    Character
      .getACCharacters(page, Number(perPage))
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/donkey_kong', (req, res, next) => {
    const { page, perPage } = req.query;
    Character
      .getDKCharacters(page, Number(perPage))
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/f-zero', (req, res, next) => {
    const { page, perPage } = req.query;
    Character
      .getFzeroCharacters(page, Number(perPage))
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/splatoon', (req, res, next) => {
    const { page, perPage } = req.query;
    Character
      .getSplatoonCharacters(page, Number(perPage))
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/mother', (req, res, next) => {
    const { page, perPage } = req.query;
    Character
      .getMotherCharacters(page, Number(perPage))
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/random', (req, res, next) => {
    const { count } = req.query;
    Character
      .getRandom(Number(count))
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Character
      .findById(req.params.id)
      .select('name image first_appearance quote species creator description')
      .then(character => res.send(character))
      .catch(next);
  });

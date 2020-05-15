const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()
  .get('/', (req, res, next) => {
    const page = Number(req.query.page);
    const perPage = Number(req.query.perPage);
    Character
      .getAll(page, perPage)
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/mario', (req, res, next) => {
    const page = Number(req.query.page);
    const perPage = Number(req.query.perPage);
    Character
      .getMarioCharacters(page, perPage)
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/zelda', (req, res, next) => {
    const page = Number(req.query.page);
    const perPage = Number(req.query.perPage);
    Character
      .getZeldaCharacters(page, perPage)
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/starfox', (req, res, next) => {
    const page = Number(req.query.page);
    const perPage = Number(req.query.perPage);
    Character
      .getStarFoxCharacters(page, perPage)
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/metroid', (req, res, next) => {
    const page = Number(req.query.page);
    const perPage = Number(req.query.perPage);
    Character
      .getMetroidCharacters(page, perPage)
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/kirby', (req, res, next) => {
    const page = Number(req.query.page);
    const perPage = Number(req.query.perPage);
    Character
      .getKirbyCharacters(page, perPage)
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/ac', (req, res, next) => {
    const page = Number(req.query.page);
    const perPage = Number(req.query.perPage);
    Character
      .getACCharacters(page, perPage)
      .then(characters => res.send(characters))
      .catch(next);
  })
  .get('/pikmin', (req, res, next) => {
    const page = Number(req.query.page);
    const perPage = Number(req.query.perPage);
    Character
      .getPikminCharacters(page, perPage)
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

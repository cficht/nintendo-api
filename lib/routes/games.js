const { Router } = require('express');
const Game = require('../models/Game');

module.exports = Router()
  .get('/', (req, res, next) => {
    const { page = 1, perPage = 20 } = req.query;
    const searchReg = new RegExp(req.query.search, 'i');
    Game
      .find({ name: searchReg })
      .sort({ name : 1 })
      .skip((page - 1) * Number(perPage))
      .limit(Number(perPage))
      .select('name image developer publisher genre platform description')
      .then(games => res.send(games))
      .catch(next);
  })
  .get('/mario', (req, res, next) => {
    const { page, perPage } = req.query;
    Game
      .getMarioGames(page, Number(perPage))
      .then(games => res.send(games))
      .catch(next);
  })
  .get('/zelda', (req, res, next) => {
    const { page, perPage } = req.query;
    Game
      .getZeldaGames(page, Number(perPage))
      .then(games => res.send(games))
      .catch(next);
  })
  .get('/star_fox', (req, res, next) => {
    const { page, perPage } = req.query;
    Game
      .getStarFoxGames(page, Number(perPage))
      .then(games => res.send(games))
      .catch(next);
  })
  .get('/metroid', (req, res, next) => {
    const { page, perPage } = req.query;
    Game
      .getMetroidGames(page, Number(perPage))
      .then(games => res.send(games))
      .catch(next);
  })
  .get('/kirby', (req, res, next) => {
    const { page, perPage } = req.query;
    Game
      .getKirbyGames(page, Number(perPage))
      .then(games => res.send(games))
      .catch(next);
  })
  .get('/animal_crossing', (req, res, next) => {
    const { page, perPage } = req.query;
    Game
      .getACGames(page, Number(perPage))
      .then(games => res.send(games))
      .catch(next);
  })
  .get('/donkey_kong', (req, res, next) => {
    const { page, perPage } = req.query;
    Game
      .getDKGames(page, Number(perPage))
      .then(games => res.send(games))
      .catch(next);
  })
  .get('/f-zero', (req, res, next) => {
    const { page, perPage } = req.query;
    Game
      .getFzeroGames(page, Number(perPage))
      .then(games => res.send(games))
      .catch(next);
  })
  .get('/splatoon', (req, res, next) => {
    const { page, perPage } = req.query;
    Game
      .getSplatoonGames(page, Number(perPage))
      .then(games => res.send(games))
      .catch(next);
  })
  .get('/mother', (req, res, next) => {
    const { page, perPage } = req.query;
    Game
      .getMotherGames(page, Number(perPage))
      .then(games => res.send(games))
      .catch(next);
  })
  .get('/random', (req, res, next) => {
    const { count } = req.query;
    Game
      .getRandom(Number(count))
      .then(games => res.send(games))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Game
      .findById(req.params.id)
      .select('name image developer publisher genre platform description')
      .then(game => res.send(game))
      .catch(next);
  });

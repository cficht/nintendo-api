const { getGames } = require('../db/test-data/data-helpers');
const Game = require('../lib/models/Game');

const request = require('supertest');
const app = require('../lib/app');

describe('game routes', () => {
  it('can get all games', async() => {
    const games = await getGames();
    return request(app)
      .get('/api/v1/games')
      .then(res => {
        expect(res.body).toHaveLength(20);
        expect(res.body[0]).toEqual({
          _id: expect.any(String),
          name: games[0].name,
          image: games[0].image,
          developer: games[0].developer,
          publisher: games[0].publisher,
          genre: games[0].genre,
          platform: games[0].platform,
          description: games[0].description
        });
      });
  });

  it('can get 56 games', () => {
    return request(app)
      .get('/api/v1/games?perPage=56')
      .then(res => {
        expect(res.body).toHaveLength(56);
      });
  });

  it('gets a game by id', async() => {
    const game = await Game.findOne({ name: 'Animal Crossing' });
    return request(app)
      .get(`/api/v1/games/${game._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: game.name,
          image: game.image,
          developer: game.developer,
          publisher: game.publisher,
          genre: game.genre,
          platform: game.platform,
          description: game.description
        });
      });
  });

  it('can get star fox games', async() => {
    const games = await Game.find({ search_type: 'Star_Fox_games' });
    const gamesMunged = games.map(game => {
      return ({
        _id: game._id,
        name: game.name,
        image: game.image,
        developer: game.developer,
        publisher: game.publisher,
        genre: game.genre,
        platform: game.platform,
        description: game.description
      });
    });
    return request(app)
      .get('/api/v1/games/star_fox')
      .then(res => {
        expect(res.body[0]).toEqual({ 
          _id: expect.any(String),
          name: gamesMunged[0].name,
          image: gamesMunged[0].image,
          developer: gamesMunged[0].developer,
          publisher: gamesMunged[0].publisher,
          genre: gamesMunged[0].genre,
          platform: gamesMunged[0].platform,
          description: gamesMunged[0].description
        });
      });
  });

  it('can get animal crossing games', async() => {
    const games = await Game.find({ search_type: 'Animal_Crossing_games' });
    const gamesMunged = games.map(game => {
      return ({
        _id: game._id,
        name: game.name,
        image: game.image,
        developer: game.developer,
        publisher: game.publisher,
        genre: game.genre,
        platform: game.platform,
        description: game.description
      });
    });
    return request(app)
      .get('/api/v1/games/animal_crossing')
      .then(res => {
        expect(res.body[0]).toEqual({ 
          _id: expect.any(String),
          name: gamesMunged[0].name,
          image: gamesMunged[0].image,
          developer: gamesMunged[0].developer,
          publisher: gamesMunged[0].publisher,
          genre: gamesMunged[0].genre,
          platform: gamesMunged[0].platform,
          description: gamesMunged[0].description
        });
      });
  });

  it('can get random games of a length of 27', async() => {
    return request(app)
      .get('/api/v1/games/random?count=27')
      .then(res => {
        expect(res.body).toHaveLength(27);
      });
  });

  it('gets a game by name', async() => {
    const game = await Game.findOne({ name: 'Animal Crossing' });
    return request(app)
      .get(`/api/v1/games/?search=${game.name}`)
      .then(res => {
        expect(res.body[0]).toEqual({
          _id: expect.any(String),
          name: game.name,
          image: game.image,
          developer: game.developer,
          publisher: game.publisher,
          genre: game.genre,
          platform: game.platform,
          description: game.description
        });
      });
  });
});

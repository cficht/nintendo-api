require('dotenv').config();
const connect = require('../../lib/utils/connect');
const mongoose = require('mongoose');
const { characterData, gameData } = require('./seed-test');

beforeAll(() => {
  connect();
});

beforeEach(() => {
  return mongoose.connection.dropDatabase();
});

let testCharacters = null;
let testGames = null;
beforeEach(async() => {
  const seedCharacters = await characterData();
  const seedGames = await gameData();
  testCharacters = seedCharacters;
  testGames = seedGames;
});

afterAll(() => {
  return mongoose.connection.close();
});

module.exports = {
  getCharacters: () => testCharacters,
  getGames: () => testGames
};

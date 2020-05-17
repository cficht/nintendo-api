const characters = require('./character-test');
const games = require('./game-test');
const Character = require('../../lib/models/Character');
const Game = require('../../lib/models/Game');

const characterData = async() => {
  const characterSeed = await Character.create(characters);
  return characterSeed;
};

const gameData = async() => {
  const gameSeed = await Game.create(games);
  return gameSeed;
};

module.exports = {
  characterData,
  gameData
};

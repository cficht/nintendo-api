const characters = require('./character-test');
const Character = require('../lib/models/Character');

module.exports = async() => {
  const characterSeed = await Character.create(characters);
  return characterSeed;
};

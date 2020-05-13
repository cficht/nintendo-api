require('dotenv').config();
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const { getAllCharacters } = require('../lib/services/characterApi');
const Character = require('../lib/models/Character');

const series = [
  // 'Mario_characters',
  // 'The_Legend_of_Zelda_characters',
  // 'Star_Fox_characters',
  // 'Metroid_characters',
  // 'Kirby_characters',
  'Animal_Crossing_characters',
  'Pikmin_characters'
];

const seedCharacters = (series) => {
  connect();
  mongoose.connection.dropDatabase();
  return getAllCharacters(series)
    .then(characters => Character.create(characters))
    .finally(() => mongoose.connection.close())
    .catch(console.log);
};

seedCharacters(series);

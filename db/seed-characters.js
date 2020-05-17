require('dotenv').config();
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const { getAllCharacters } = require('../lib/services/characterApi');
const Character = require('../lib/models/Character');

const series = [
  'Mario_characters',
  'The_Legend_of_Zelda_characters',
  'Star_Fox_characters',
  'Metroid_characters',
  'Kirby_characters',
  'Animal_Crossing_characters',
  'Donkey_Kong_characters',
  'Pikmin_characters',
  'Splatoon_characters',
  'F-Zero_pilots',
  'EarthBound_characters'
];

const seedCharacters = async(series) => {
  connect();
  const checkChars = await (Character.exists());
  if(checkChars) Character.collection.drop();
  return getAllCharacters(series)
    .then(characters => Character.create(characters))
    .finally(() => mongoose.connection.close())
    .catch(console.log);
};

seedCharacters(series);

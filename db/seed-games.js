require('dotenv').config();
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const { getAllGames } = require('../lib/services/gameApi');
const Game = require('../lib/models/Game');

const gameSeries = [
  'Mario_games',
  'The_Legend_of_Zelda_games',
  'Star_Fox_games',
  'Metroid_games',
  'Kirby_games',
  'Animal_Crossing_games',
  'Pikmin_games'
];

const seedGames = async(gameSeries) => {
  connect();
  const checkGames = await (Game.exists());
  if(checkGames) Game.collection.drop();
  return getAllGames(gameSeries)
    .then(games => Game.create(games))
    .finally(() => mongoose.connection.close())
    .catch(console.log);
};

seedGames(gameSeries);

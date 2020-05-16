const { getAllNames, getAllQueries } = require('./scrapeNames');
const { getInfo } = require('./scrapeGame');

let allGames = [];

const gameSeries = [
  'Mario_games',
  'The_Legend_of_Zelda_games',
  'Star_Fox_games',
  'Metroid_games',
  'Kirby_games',
  'Animal_Crossing_games',
  'Pikmin_games'
];

const getGames = async(searchType) => {
  const queries = await getAllQueries(searchType);
  const names = await getAllNames(queries);
  const games = Promise.all(names[0].map(game => {
    const ga = getInfo(game.url, searchType);
    if(ga) return ga;
    if(!ga) return;
  }));
  return (await games).filter(ga => ga);
};


const getAllGames = async(seriesArray) => { 
  const allSeries = Promise.all(seriesArray.map(series => {
    const seriesGames = getGames(series);
    allGames = [...allGames, seriesGames];
    return seriesGames;
  }));
  return (await allSeries).flat();
};

// getAllGameQueries('Pikmin_games')
//   .then(res => console.log(res));

getAllGames(gameSeries)
  .then(res => console.log(res));

module.exports = {
  getAllGames
};

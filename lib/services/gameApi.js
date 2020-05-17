const { getAllNames, getAllQueries } = require('./scrapeNames');
const { getInfo } = require('./scrapeGame');

let allGames = [];

const getGames = async(searchType) => {
  const queries = await getAllQueries(searchType);
  const names = await getAllNames(queries);
  const games = Promise.all((names.flat()).map(game => {
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

module.exports = {
  getAllGames
};

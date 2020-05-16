const { getAllNames, getAllQueries } = require('./scrapeNames');
const { getInfo } = require('./scrapeGame');

// let allGames = [];

const getAllGameQueries = async(searchType) => {
  const queries = await getAllQueries(searchType);
  const names = await getAllNames(queries);
  const games = Promise.all(names[0].map(game => {
    const ga = getInfo(game.url, searchType);
    if(ga) return ga;
    if(!ga) return;
  }));
  return (await games).filter(ga => ga);
};


// const getAllCharacters = async(seriesArray) => { 
//   const allSeries = Promise.all(seriesArray.map(series => {
//     const seriesChars = getCharacters(series);
//     allChars = [...allChars, seriesChars];
//     return seriesChars;
//   }));
//   return (await allSeries).flat();
// };

getAllGameQueries('Mario_games')
  .then(res => console.log(res));

// module.exports = {
//   getAllCharacters
// };

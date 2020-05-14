const { getAllNames, getAllQueries } = require('./scrapeNames');
const { getInfo } = require('./scrapeInfo');

let allChars = [];

const getCharacters = async(searchType) => {
  const queries = await getAllQueries(searchType);
  const names = await getAllNames(queries);
  const chars = Promise.all(names[0].map(character => {
    const char = getInfo(character.url, searchType);
    if(char) return char;
    if(!char) return;
  }));
  return (await chars).filter(char => char);
};


const getAllCharacters = async(seriesArray) => { 
  const allSeries = Promise.all(seriesArray.map(series => {
    const seriesChars = getCharacters(series);
    allChars = [...allChars, seriesChars];
    return seriesChars;
  }));
  return (await allSeries).flat();
};

module.exports = {
  getAllCharacters
};

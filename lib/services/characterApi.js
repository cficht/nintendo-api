const { getAllNames, getAllQueries } = require('./scrapeNames');
const { getInfo } = require('./scrapeInfo');

const series = [
  // 'Mario_characters',
  // 'The_Legend_of_Zelda_characters',
  'Star_Fox_characters',
  'Metroid_characters'
  // 'Kirby_characters',
  // 'Animal_Crossing_characters',
  // 'Pikmin_characters'
];

let allChars = [];

const getCharacters = async(searchType) => {
  const queries = await getAllQueries(searchType);
  const names = await getAllNames(queries);
  const chars = Promise.all(names.map(character => {
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

// NOTES

getAllCharacters(series)
  .then(characters => console.log(characters));

// getCharacters('Pikmin_characters')
//   .then(characters => console.log(characters));


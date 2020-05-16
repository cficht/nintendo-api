const request = require('superagent');
const cheerio = require('cheerio');

// PAGES

const getQueries = (search) => {
  return request.get(`https://nintendo.fandom.com/wiki/Category:${search}`)
    .then(res => res.text)
    .then(res => {    
      const $ = cheerio.load(res);
      const nextPage = $('[class="category-page__pagination-next wds-button wds-is-secondary"]')[0].attribs.href;
      return nextPage;
    });
};

const getAllQueries = async(firstSearch) => {
  let queries = [];
  queries.push(firstSearch);
  let pages = firstSearch;
  while(pages) {
    try {
      pages = await getQueries(pages);
      const split = pages.split(':')[2];
      queries.push(split);
      pages = split;
    } catch(err) {
      pages = null;
    }
  }
  return queries;
};

// NAMES

const getNames = async(query) => {
  let newChar = [];
  return request.get(`https://nintendo.fandom.com/wiki/Category:${query}`)
    .then(res => res.text)
    .then(res => {    
      const $ = cheerio.load(res);
      const chars = $('.category-page__member-link');
      chars.map(char => {
        if(!(chars[char].attribs.title).includes('Category')) {
          newChar = [...newChar, {
            name: chars[char].attribs.title,
            url: chars[char].attribs.href
          }];
        }
        return newChar;
      });
      return newChar;
    });
};

const getAllNames = async(queries) => {
  let allNames;
  await Promise.all(queries.map(getNames))
    .then(res => { 
      allNames = res; 
    });
  return allNames;
};

module.exports = {
  getAllNames,
  getAllQueries
};

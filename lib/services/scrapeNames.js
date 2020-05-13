const request = require('superagent');
const cheerio = require('cheerio');

let charInfo = [];

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
    } catch(err) {
      pages = null;
    }
  }
  return queries;
};

// NAMES

const getNames = (query) => {
  return request.get(`https://nintendo.fandom.com/wiki/Category:${query}`)
    .then(res => res.text)
    .then(res => {    
      const $ = cheerio.load(res);
      const chars = $('.category-page__member-link');
      chars.map(char => {
        if(!(chars[char].attribs.title).includes('Category')) {
          charInfo = [...charInfo, {
            name: chars[char].attribs.title,
            url: chars[char].attribs.href
          }];
        }
      });
      return charInfo;
    });
};

const getAllNames = (queries) => {
  const actions = queries.map(getNames);
  const results = Promise.all(actions);
  return results.then(data => { 
    data.length;
    return charInfo;
  });
};

module.exports = {
  getAllNames,
  getAllQueries
};

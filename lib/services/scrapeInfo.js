const request = require('superagent');
const cheerio = require('cheerio');

// INFO

const getInfo = (charUrl, searchType) => {
  return request.get(`https://nintendo.fandom.com/${charUrl}`)
    .then(res => res.text)
    .then(res => {
      const $ = cheerio.load(res, {
        normalizeWhitespace: true
      });

      let name;
      try {
        name = $('[data-source=name]')['0'].children[0].data;
      } catch(err) {
        name = null;
      }

      if(!name) return;

      let charImg;
      try {
        charImg = $('.pi-image-thumbnail')['0'].attribs.src;
      } catch(err) {
        charImg = null;
      }
      
      let firstGame;
      try {
        const firstGameData = $('[data-source=firstgame]').find('[class="pi-data-value pi-font"]')[0].children;
        firstGame = $(firstGameData).text();
      } catch(err) {
        firstGame = null;
      }
      
      let species;
      try {
        const speciesData = $('[data-source=species]').find('[class="pi-data-value pi-font"]')[0].children;
        species = $(speciesData).text();
      } catch(err) {
        species = null;
      }

      let creator;
      try {
        const creatorData = $('[data-source=creator]').find('[class="pi-data-value pi-font"]')[0].children;
        creator = $(creatorData).text();
      } catch(err) {
        creator = null;
      }

      let quote;
      try {
        const newQuoteData = $('[class="collapsible collapsed"]').find('small');
        const strBefore = newQuoteData.text();
        const strMan1 = strBefore.replace('\n', ' ');
        quote = strMan1.split('—')[0];

        // OLD
        // const quoteData = $('[class="collapsible collapsed"]').find('i')[0].children;
        // quote = $(quoteData)[0].data;
      } catch(err) {
        quote = null;
      }

      // DESCRIPTION START
      const descriptionData = $('[class="portable-infobox pi-background pi-europa pi-theme-wikia pi-layout-default"]')[0].next;
      const descP = descriptionData.next;
      descP.children.forEach(child => { 
        if(child.type === 'text') console.log(child.data);
      });

      const character = {
        name: name,
        first_appearance: firstGame,
        quote: quote,
        species: species,
        creator: creator,
        image: charImg,
        search_type: searchType
      };

      return character;
    })
    .catch(error => error);
};

//King_Dedede
//Luna

// getInfo('King_Dedede')
//   .then(res => console.log(res));

module.exports = {
  getInfo
};

const request = require('superagent');
const cheerio = require('cheerio');

// CHARACTER INFO

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
        if(quote === '') quote = null;
      } catch(err) {
        quote = null;
      }

      let description;
      try {
        const descriptionData = $('[class="portable-infobox pi-background pi-europa pi-theme-wikia pi-layout-default"]')[0].next;
        const descP = descriptionData.next;
        let descArr = [];
        descP.children.map(child => { 
          if(child.name === 'sup') return;
          if(child.name === 'a') return descArr = [...descArr, child.attribs.title];
          if(child.children) { 
            child.children.map(subChild => { 
              if(subChild.name === 'a') descArr = [...descArr, child.attribs.title];
              if(subChild.type === 'text') descArr = [...descArr, subChild.data]; 
            });
          }
          if(child.name === 'i') descArr = [...descArr, child.children[0].attribs.title];
          if(child.type === 'text') descArr = [...descArr, child.data];
        });
        const descFilter = descArr.filter(desc => desc !== undefined && desc !== ' ')
          .map(string => string.trim())
          .filter(desc => desc !== '')
          .map((string, i) => {
            if(i % 2 === 0) return ' ' + string.trim() + ' ';
            else return string;
          });
        const descBefore = descFilter.join('');
        const descPer = descBefore.replace(/(\s\.)/g, '.');
        const descCom = descPer.replace(/(\s,)/g, ',');
        const descPar = descCom.replace(/(\s\))/g, ')');
        const descApp = descPar.replace(/(\s')/g, '\'');
        const descDNE = descApp.replace(/(\((page does not exist))\)/g, '.');
        const descHeat = descDNE.replace(/(\s\.)/g, '');
        description = descHeat.trim();
      } catch(err) {
        description = null;
      }

      const character = {
        name: name,
        first_appearance: firstGame,
        quote: quote,
        species: species,
        creator: creator,
        image: charImg,
        description: description,
        search_type: searchType
      };

      return character;
    })
    .catch(error => error);
};

// getInfo('Mario')
//   .then(res => console.log(res));

module.exports = {
  getInfo
};

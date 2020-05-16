const request = require('superagent');
const cheerio = require('cheerio');

// GAME INFO

const getInfo = (gameUrl, searchType) => {
  return request.get(`https://nintendo.fandom.com/${gameUrl}`)
    .then(res => res.text)
    .then(res => {
      const $ = cheerio.load(res, {
        normalizeWhitespace: true
      });

      let name;
      try {
        name = $('[data-source=name]')['0'].children[0].children[0].data;
        if(!name) {
          name = $('[class=page-header__title]')['0'].children[0].children[0].data;
        }
      } catch(err) {
        name = null;
      }

      if(!name) return;

      let gameImg;
      try {
        gameImg = $('.pi-image-thumbnail')['0'].attribs.src;
      } catch(err) {
        gameImg = null;
      }

      let developer;
      try {
        const developerData = $('[data-source=developer]').find('[class="pi-data-value pi-font"]')[0].children;
        developer = $(developerData).text();
      } catch(err) {
        developer = null;
      }
      
      let publisher;
      try {
        const publisherData = $('[data-source=publisher]').find('[class="pi-data-value pi-font"]')[0].children;
        publisher = $(publisherData).text();
      } catch(err) {
        publisher = null;
      }

      let genre;
      try {
        const genreData = $('[data-source=genre]').find('[class="pi-data-value pi-font"]')[0].children;
        genre = $(genreData).text();
      } catch(err) {
        genre = null;
      }

      let platform;
      try {
        const platformData = $('[data-source=system1]').find('div')['1'];
        const platformsData = $(platformData).find('a');
        let platformArr = [];
        platformsData.map(platform => {
          platformArr = [...platformArr, platformsData[platform].attribs.title];
        });
        platform = platformArr.join(', ');
      } catch(err) {
        platform = null;
      }

      let description;
      try {
        let descP;
        const newDescTest = $('[class="mw-content-ltr mw-content-text"]')[0];
        let newDescTestP = [];
        newDescTest.children.forEach(child => {
          if(child.name === 'p') newDescTestP = [...newDescTestP, child];
        });
        descP = newDescTestP[0];

        let descArr = [];
        descP.children.map(child => { 
          if(child.name === 'sup') return;
          if(child.name === 'a') { 
            if(child.children[0].data) return descArr = [...descArr, child.children[0].data];
            if(child.children[0].name === 'i') {
              if(!child.children[1]) return descArr = [...descArr, child.children[0].children[0].data];
              if(child.children[1]) return descArr = [...descArr, child.children[0].children[0].data, child.children[1].data];
            }
            else return descArr = [...descArr, (child.attribs.title).split('(')[0]];
          }
          if(child.children) { 
            child.children.map(subChild => { 
              if(subChild.name === 'b') descArr = [...descArr, subChild.children[0].data];
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
        image: gameImg,
        developer: developer,
        publisher: publisher,
        genre: genre,
        platform: platform,    
        description: description, 
        search_type: searchType
      };

      return character;
    })
    .catch(error => error);
};

module.exports = {
  getInfo
};

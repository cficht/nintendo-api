const { getCharacter, getCharacters } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('character routes', () => {
  it('can get all characters', async() => {
    const characters = await getCharacters();
    return request(app)
      .get('/api/v1/characters')
      .then(res => {
        expect(res.body).toHaveLength(20);
        expect(res.body).toContainEqual({
          _id: characters[0]._id,
          name: characters[0].name,
          first_appearance: characters[0].first_appearance,
          quote: characters[0].quote,
          species: characters[0].species,
          creator: characters[0].creator,
          image: characters[0].image,
          description: characters[0].description
        });
      });
  });

  it('can get 40 characters', () => {
    return request(app)
      .get('/api/v1/characters?perPage=40')
      .then(res => {
        expect(res.body).toHaveLength(40);
      });
  });

  it('gets a character by id', async() => {
    const character = await getCharacter();
    return request(app)
      .get(`/api/v1/characters/${character._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: character._id,
          name: character.name,
          first_appearance: character.first_appearance,
          quote: character.quote,
          species: character.species,
          creator: character.creator,
          image: character.image,
          description: character.description
        });
      });
  });

  it('can get mario characters', async() => {
    const characters = await getCharacters({ search_type: 'Mario_characters' });
    const charactersMunged = characters.map(character => {
      delete character.search_type;
      delete character.__v;
      return character;
    });
    return request(app)
      .get('/api/v1/characters/mario')
      .then(res => {
        expect(res.body[0]).toEqual(charactersMunged[0]);
      });
  });

  it('can get zelda characters', async() => {
    const characters = await getCharacters({ search_type: 'The_Legend_of_Zelda_characters' });
    const charactersMunged = characters.map(character => {
      delete character.search_type;
      delete character.__v;
      return character;
    });
    return request(app)
      .get('/api/v1/characters/zelda')
      .then(res => {
        expect(res.body[0]).toEqual(charactersMunged[0]);
      });
  });

  it('can get random characters of a length of 5', async() => {
    return request(app)
      .get('/api/v1/characters/random')
      .then(res => {
        expect(res.body).toHaveLength(20);
      });
  });
});

const { getCharacters } = require('../db/test-data/data-helpers');
const Character = require('../lib/models/Character');

const request = require('supertest');
const app = require('../lib/app');

describe('character routes', () => {
  it('can get all characters', async() => {
    const characters = await getCharacters();
    return request(app)
      .get('/api/v1/characters')
      .then(res => {
        expect(res.body).toHaveLength(20);
        expect(res.body[0]).toEqual({
          _id: expect.any(String),
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
    const character = await Character.findOne({ name: 'Baby Mario' });
    return request(app)
      .get(`/api/v1/characters/${character._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
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
    const characters = await Character.find({ search_type: 'Mario_characters' });
    const charactersMunged = characters.map(character => {
      return ({
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
    return request(app)
      .get('/api/v1/characters/mario')
      .then(res => {
        expect(res.body[0]).toEqual({ 
          _id: expect.any(String),
          name: charactersMunged[0].name,
          first_appearance: charactersMunged[0].first_appearance,
          quote: charactersMunged[0].quote,
          species: charactersMunged[0].species,
          creator: charactersMunged[0].creator,
          image: charactersMunged[0].image,
          description: charactersMunged[0].description 
        });
      });
  });

  it('can get zelda characters', async() => {
    const characters = await Character.find({ search_type: 'The_Legend_of_Zelda_characters' });
    const charactersMunged = characters.map(character => {
      return ({
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
    return request(app)
      .get('/api/v1/characters/zelda')
      .then(res => {
        expect(res.body[0]).toEqual({ 
          _id: expect.any(String),
          name: charactersMunged[0].name,
          first_appearance: charactersMunged[0].first_appearance,
          quote: charactersMunged[0].quote,
          species: charactersMunged[0].species,
          creator: charactersMunged[0].creator,
          image: charactersMunged[0].image,
          description: charactersMunged[0].description 
        });
      });
  });

  it('can get random characters of a length of 5', async() => {
    return request(app)
      .get('/api/v1/characters/random?count=5')
      .then(res => {
        expect(res.body).toHaveLength(5);
      });
  });

  it('gets a character by name', async() => {
    const character = await Character.findOne({ name: 'Baby Mario' });
    return request(app)
      .get(`/api/v1/characters/?search=${character.name}`)
      .then(res => {
        expect(res.body[0]).toEqual({
          _id: expect.any(String),
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
});

require('dotenv').config();
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const seedData = require('./seed-test');

beforeAll(() => {
  connect();
});

beforeEach(() => {
  return mongoose.connection.dropDatabase();
});

let testCharacters = null;
beforeEach(async() => {
  const seedCharacters = await seedData();
  testCharacters = seedCharacters;
});

afterAll(() => {
  return mongoose.connection.close();
});

module.exports = {
  getCharacters: () => testCharacters
};

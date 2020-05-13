const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');

describe('nintendo-api routes', () => {
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
});

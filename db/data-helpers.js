require('dotenv').config();
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const fs = require('fs');

beforeAll(() => {
  connect();
});

afterAll(() => {
  return mongoose.connection.close();
});

const prepare = model => JSON.parse(JSON.stringify(model));
const prepareAll = models => models.map(prepare);

// reading our models directory
const files = fs.readdirSync('./lib/models');
const getters = files
  // for each file in our models directory import the model
  .map(file => require(`../lib/models/${file}`))
  // make sure that what we imported is actually a model
  .filter(Model => Model.prototype instanceof mongoose.Model)
  // for each model create a getModelName function that returns an instance of our model
  .reduce((acc, Model) => {
    return {
      ...acc,
      [`get${Model.modelName}`]: query => Model.findOne(query).then(prepare),
      [`get${Model.modelName}s`]: query => Model.find(query).then(prepareAll)
    };
  }, {});

module.exports = getters;

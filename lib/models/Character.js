const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  first_appearance: {
    type: String
  },
  quote: {
    type: String
  },
  species: {
    type: String
  },
  creator: {
    type: String
  },
  image: {
    type: String
  },
  search_type: {
    type: String,
    required: true
  }
}, {
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.id;
    }
  }
});

module.exports = mongoose.model('Character', schema);

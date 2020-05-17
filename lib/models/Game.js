const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  developer: {
    type: String
  },
  publisher: {
    type: String
  },
  genre: {
    type: String
  },
  platform: {
    type: String
  },
  description: {
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

module.exports = mongoose.model('Game', schema);

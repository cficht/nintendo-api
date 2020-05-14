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

[
  {
    '$sample': {
      'size': 20
    }
  }
];

schema.statics.getRandom = function() {
  return this.aggregate([
    {
      '$sample': {
        'size': 20
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'first_appearance': true, 
        'quote': true, 
        'species': true,
        'creator': true,
        'image': true
      }
    }, {
      '$limit': 20
    }
  ]);
};

schema.statics.getMarioCharacters = function() {
  return this.aggregate([
    {
      '$match': {
        'search_type': 'Mario_characters'
      }
    }, {
      '$sample': {
        'size': 20
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'first_appearance': true, 
        'quote': true, 
        'species': true,
        'creator': true,
        'image': true
      }
    }, {
      '$limit': 20
    }
  ]);
};

schema.statics.getZeldaCharacters = function() {
  return this.aggregate([
    {
      '$match': {
        'search_type': 'The_Legend_of_Zelda_characters'
      }
    }, {
      '$sample': {
        'size': 20
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'first_appearance': true, 
        'quote': true, 
        'species': true,
        'creator': true,
        'image': true
      }
    }, {
      '$limit': 20
    }
  ]);
};

schema.statics.getStarFoxCharacters = function() {
  return this.aggregate([
    {
      '$match': {
        'search_type': 'Star_Fox_characters'
      }
    }, {
      '$sample': {
        'size': 20
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'first_appearance': true, 
        'quote': true, 
        'species': true,
        'creator': true,
        'image': true
      }
    }, {
      '$limit': 20
    }
  ]);
};

schema.statics.getMetroidCharacters = function() {
  return this.aggregate([
    {
      '$match': {
        'search_type': 'Metroid_characters'
      }
    }, {
      '$sample': {
        'size': 20
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'first_appearance': true, 
        'quote': true, 
        'species': true,
        'creator': true,
        'image': true
      }
    }, {
      '$limit': 20
    }
  ]);
};

schema.statics.getKirbyCharacters = function() {
  return this.aggregate([
    {
      '$match': {
        'search_type': 'Kirby_characters'
      }
    }, {
      '$sample': {
        'size': 20
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'first_appearance': true, 
        'quote': true, 
        'species': true,
        'creator': true,
        'image': true
      }
    }, {
      '$limit': 20
    }
  ]);
};

schema.statics.getACCharacters = function() {
  return this.aggregate([
    {
      '$match': {
        'search_type': 'Animal_Crossing_characters'
      }
    }, {
      '$sample': {
        'size': 20
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'first_appearance': true, 
        'quote': true, 
        'species': true,
        'creator': true,
        'image': true
      }
    }, {
      '$limit': 20
    }
  ]);
};

schema.statics.getPikminCharacters = function() {
  return this.aggregate([
    {
      '$match': {
        'search_type': 'Pikmin_characters'
      }
    }, {
      '$sample': {
        'size': 20
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'first_appearance': true, 
        'quote': true, 
        'species': true,
        'creator': true,
        'image': true
      }
    }, {
      '$limit': 20
    }
  ]);
};

module.exports = mongoose.model('Character', schema);

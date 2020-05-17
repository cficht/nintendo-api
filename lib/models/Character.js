const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
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

schema.statics.getMarioCharacters = function(page, count) {
  if(!page) page = 1;
  if(!count) count = 20;
  return this.aggregate([
    {
      '$match': {
        'search_type': 'Mario_characters'
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'image': true,
        'first_appearance': true, 
        'quote': true, 
        'species': true,
        'creator': true,
        'description': true
      }
    }, {
      '$skip': (page - 1) * count
    }, {
      '$limit': count
    }
  ]);
};

schema.statics.getZeldaCharacters = function(page, count) {
  if(!page) page = 1;
  if(!count) count = 20;
  return this.aggregate([
    {
      '$match': {
        'search_type': 'The_Legend_of_Zelda_characters'
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'image': true,
        'first_appearance': true, 
        'quote': true, 
        'species': true,
        'creator': true,
        'description': true
      }
    }, {
      '$skip': (page - 1) * count
    }, {
      '$limit': count
    }
  ]);
};

schema.statics.getStarFoxCharacters = function(page, count) {
  if(!page) page = 1;
  if(!count) count = 20;
  return this.aggregate([
    {
      '$match': {
        'search_type': 'Star_Fox_characters'
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'image': true,
        'first_appearance': true, 
        'quote': true, 
        'species': true,
        'creator': true,
        'description': true
      }
    }, {
      '$skip': (page - 1) * count
    }, {
      '$limit': count
    }
  ]);
};

schema.statics.getMetroidCharacters = function(page, count) {
  if(!page) page = 1;
  if(!count) count = 20;
  return this.aggregate([
    {
      '$match': {
        'search_type': 'Metroid_characters'
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'image': true,
        'first_appearance': true, 
        'quote': true, 
        'species': true,
        'creator': true,
        'description': true
      }
    }, {
      '$skip': (page - 1) * count
    }, {
      '$limit': count
    }
  ]);
};

schema.statics.getKirbyCharacters = function(page, count) {
  if(!page) page = 1;
  if(!count) count = 20;
  return this.aggregate([
    {
      '$match': {
        'search_type': 'Kirby_characters'
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'image': true,
        'first_appearance': true, 
        'quote': true, 
        'species': true,
        'creator': true,
        'description': true
      }
    }, {
      '$skip': (page - 1) * count
    }, {
      '$limit': count
    }
  ]);
};

schema.statics.getACCharacters = function(page, count) {
  if(!page) page = 1;
  if(!count) count = 20;
  return this.aggregate([
    {
      '$match': {
        'search_type': 'Animal_Crossing_characters'
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'image': true,
        'first_appearance': true, 
        'quote': true, 
        'species': true,
        'creator': true,
        'description': true
      }
    }, {
      '$skip': (page - 1) * count
    }, {
      '$limit': count
    }
  ]);
};

schema.statics.getPikminCharacters = function(page, count) {
  if(!page) page = 1;
  if(!count) count = 20;
  return this.aggregate([
    {
      '$match': {
        'search_type': 'Pikmin_characters'
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'image': true,
        'first_appearance': true, 
        'quote': true, 
        'species': true,
        'creator': true,
        'description': true
      }
    }, {
      '$skip': (page - 1) * count
    }, {
      '$limit': count
    }
  ]);
};

schema.statics.getRandom = function(count) {
  if(!count) count = 20;
  return this.aggregate([
    {
      '$sample': {
        'size': count
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'image': true,
        'first_appearance': true, 
        'quote': true, 
        'species': true,
        'creator': true,
        'description': true
      }
    }
  ]);
};

module.exports = mongoose.model('Character', schema);

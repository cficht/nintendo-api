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

schema.statics.getMarioGames = function(page, count) {
  if(!page) page = 1;
  if(!count) count = 20;
  return this.aggregate([
    {
      '$match': {
        'search_type': 'Mario_games'
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'image': true, 
        'developer': true, 
        'publisher': true,
        'genre': true,
        'platform': true,
        'description': true
      }
    }, {
      '$skip': (page - 1) * count
    }, {
      '$limit': count
    }
  ]);
};

schema.statics.getZeldaGames = function(page, count) {
  if(!page) page = 1;
  if(!count) count = 20;
  return this.aggregate([
    {
      '$match': {
        'search_type': 'The_Legend_of_Zelda_games'
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'image': true, 
        'developer': true, 
        'publisher': true,
        'genre': true,
        'platform': true,
        'description': true
      }
    }, {
      '$skip': (page - 1) * count
    }, {
      '$limit': count
    }
  ]);
};

schema.statics.getStarFoxGames = function(page, count) {
  if(!page) page = 1;
  if(!count) count = 20;
  return this.aggregate([
    {
      '$match': {
        'search_type': 'Star_Fox_games'
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'image': true, 
        'developer': true, 
        'publisher': true,
        'genre': true,
        'platform': true,
        'description': true
      }
    }, {
      '$skip': (page - 1) * count
    }, {
      '$limit': count
    }
  ]);
};

schema.statics.getMetroidGames = function(page, count) {
  if(!page) page = 1;
  if(!count) count = 20;
  return this.aggregate([
    {
      '$match': {
        'search_type': 'Metroid_games'
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'image': true, 
        'developer': true, 
        'publisher': true,
        'genre': true,
        'platform': true,
        'description': true
      }
    }, {
      '$skip': (page - 1) * count
    }, {
      '$limit': count
    }
  ]);
};

schema.statics.getKirbyGames = function(page, count) {
  if(!page) page = 1;
  if(!count) count = 20;
  return this.aggregate([
    {
      '$match': {
        'search_type': 'Kirby_games'
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'image': true, 
        'developer': true, 
        'publisher': true,
        'genre': true,
        'platform': true,
        'description': true
      }
    }, {
      '$skip': (page - 1) * count
    }, {
      '$limit': count
    }
  ]);
};

schema.statics.getACGames = function(page, count) {
  if(!page) page = 1;
  if(!count) count = 20;
  return this.aggregate([
    {
      '$match': {
        'search_type': 'Animal_Crossing_games'
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'image': true, 
        'developer': true, 
        'publisher': true,
        'genre': true,
        'platform': true,
        'description': true
      }
    }, {
      '$skip': (page - 1) * count
    }, {
      '$limit': count
    }
  ]);
};

schema.statics.getDKGames = function(page, count) {
  if(!page) page = 1;
  if(!count) count = 20;
  return this.aggregate([
    {
      '$match': {
        'search_type': 'Donkey_Kong_games'
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'image': true, 
        'developer': true, 
        'publisher': true,
        'genre': true,
        'platform': true,
        'description': true
      }
    }, {
      '$skip': (page - 1) * count
    }, {
      '$limit': count
    }
  ]);
};

schema.statics.getFzeroGames = function(page, count) {
  if(!page) page = 1;
  if(!count) count = 20;
  return this.aggregate([
    {
      '$match': {
        'search_type': 'F-Zero_games'
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'image': true, 
        'developer': true, 
        'publisher': true,
        'genre': true,
        'platform': true,
        'description': true
      }
    }, {
      '$skip': (page - 1) * count
    }, {
      '$limit': count
    }
  ]);
};

schema.statics.getSplatoonGames = function(page, count) {
  if(!page) page = 1;
  if(!count) count = 20;
  return this.aggregate([
    {
      '$match': {
        'search_type': 'Splatoon_games'
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'image': true, 
        'developer': true, 
        'publisher': true,
        'genre': true,
        'platform': true,
        'description': true
      }
    }, {
      '$skip': (page - 1) * count
    }, {
      '$limit': count
    }
  ]);
};

schema.statics.getMotherGames = function(page, count) {
  if(!page) page = 1;
  if(!count) count = 20;
  return this.aggregate([
    {
      '$match': {
        'search_type': 'Mother_games'
      }
    }, {
      '$project': {
        '_id': true, 
        'name': true, 
        'image': true, 
        'developer': true, 
        'publisher': true,
        'genre': true,
        'platform': true,
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
        'developer': true, 
        'publisher': true,
        'genre': true,
        'platform': true,
        'description': true
      }
    }
  ]);
};

module.exports = mongoose.model('Game', schema);

# Nintendo API
Author: [Chris Ficht](http://github.com/cficht)

[the-nintendo-api.herokuapp.com](https://the-nintendo-api.herokuapp.com)

## Overview
An API that provides character and game information for Nintendo franchises. 
The information is publicly sourced and I do not claim to own it.

## Technology Used
* Cheerio
* dotenv
* Express
* Jest
* MongoDB
* Mongoose
* Node.js
* nodemon
* SuperTest

## Routes
All routes are GET routes

### Characters
* **/api/v1/characters?page=${number}&perPage=${number} ----** get all characters
* **/api/v1/characters?search=${query} ----** search all characters by name
* **/api/v1/characters/${id} ----** get a character by id
* **/api/v1/characters/random?count=${number} ----** get random characters 
* **/api/v1/characters/mario?page=${number}&perPage=${number} ----** get mario characters
* **/api/v1/characters/zelda?page=${number}&perPage=${number} ----** get zelda characters
* **/api/v1/characters/star_fox?page=${number}&perPage=${number} ----** get star fox characters
* **/api/v1/characters/metroid?page=${number}&perPage=${number} ----** get metroid characters
* **/api/v1/characters/kirby?page=${number}&perPage=${number} ----** get kirby characters
* **/api/v1/characters/animal_crossing?page=${number}&perPage=${number} ----** get animal crossing characters
* **/api/v1/characters/donkey_kong?page=${number}&perPage=${number} ----** get donkey kong characters
* **/api/v1/characters/f-zero?page=${number}&perPage=${number} ----** get f-zero characters
* **/api/v1/characters/splatoon?page=${number}&perPage=${number} ----** get splatoon characters
* **/api/v1/characters/mother?page=${number}&perPage=${number} ----** get mother characters

### Games
* **/api/v1/games?page=${number}&perPage=${number} ----** get all games
* **/api/v1/games?search=${query} ----** search all games by name
* **/api/v1/games/${id} ----** get a game by id
* **/api/v1/games/random?count=${number} ----** get random games 
* **/api/v1/games/mario?page=${number}&perPage=${number} ----** get mario games
* **/api/v1/games/zelda?page=${number}&perPage=${number} ----** get zelda games
* **/api/v1/games/star_fox?page=${number}&perPage=${number} ----** get star fox games
* **/api/v1/games/metroid?page=${number}&perPage=${number} ----** get metroid games
* **/api/v1/games/kirby?page=${number}&perPage=${number} ----** get kirby games
* **/api/v1/games/animal_crossing?page=${number}&perPage=${number} ----** get animal crossing games
* **/api/v1/games/donkey_kong?page=${number}&perPage=${number} ----** get donkey kong games
* **/api/v1/games/f-zero?page=${number}&perPage=${number} ----** get f-zero games
* **/api/v1/games/splatoon?page=${number}&perPage=${number} ----** get splatoon games
* **/api/v1/games/mother?page=${number}&perPage=${number} ----** get mother games

## Data Format

### Character Object
```js
{
  "_id": "5ec1747230f95a34abdc76a0",
  "name": "Mario",
  "image": "https://vignette.wikia.nocookie.net/nintendo/images/d/d8/New_Super_Mario_Bros._U_Deluxe_-_Mario_01.png/revision/latest/scale-to-width-down/310?cb=20181226204245&path-prefix=en",
  "first_appearance": "Donkey Kong (1981)",
  "quote": "“It's a me, Mario!”",
  "species": "Human",
  "creator": "Shigeru Miyamoto",
  "description": "Mario (originally known as Mr. Video and Jumpman and also known as Mario Mario or Super Mario) is a Nintendo video game character and the main character who stars in the long-running and highly successful Mario (series). He is the mascot character for Nintendo. He and his younger twin brother Luigi are Nintendo's most renowned characters; his games have sold over 262 million units worldwide. This and other key factors has led him to become the defining video game character and Nintendo's mascot. He was originally created by Shigeru Miyamoto for the arcade video game Donkey Kong (video game)."
}
```

### Game Object
```js
{
  "_id": "5ec174a4fa8ade34c1580541",
  "name": "Super Mario 64",
  "image": "https://vignette.wikia.nocookie.net/nintendo/images/0/0f/Super_Mario_64_%28NA%29.png/revision/latest/scale-to-width-down/310?cb=20110703064718&path-prefix=en",
  "developer": "Nintendo EAD",
  "publisher": "Nintendo",
  "genre": "Platformer",
  "platform": "Nintendo 64, Virtual Console (Wii), Virtual Console (Wii U)",
  "description": "Super Mario 64 (also called SM64) is a platformer game developed by Nintendo EAD and published by Nintendo. The game is considered to be one of the most influential titles from the fifth generation of video games. Released in 1996 as a launch title for the Nintendo 64 alongside Pilotwings 64, which helped drive initial sales of the console. As of January 7, 2017, it has sold over 11 million copies worldwide and is marked as the best selling Nintendo 64 game of all time. It is also the second most popular game on the Wii's Virtual Console after Super Mario Bros."
}
```

## License
Standard [MIT](/LICENSE.md)
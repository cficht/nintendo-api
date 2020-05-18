const characters = [
  {
    name: '0₂ (Zero Two)',
    first_appearance: 'Kirby 64: The Crystal Shards',
    quote: null,
    species: 'Dark Matter',
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/5b/O2.JPG/revision/latest/scale-to-width-down/310?cb=20080906043247&path-prefix=en',
    description: null,
    search_type: 'Kirby_characters'
  },
  {
    name: '3 Musty Fears',
    first_appearance: 'Super Mario RPG: Legend of the Seven Stars',
    quote: null,
    species: null,
    creator: 'Squaresoft',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/7d/3_Musty_Fears.gif/revision/latest?cb=20120929154730&path-prefix=en',
    description: 'The 3 Musty Fears are a group in the Nintendo / Square Enix game Super Mario RPG: the Legend of the Seven Stars. The three of them tell Mario in his sleep to find three flags that are hiding all over the Mushroom Kingdom. Once the three flags are found, Mario will get a ghost medal next time he sleeps in the same bed.',
    search_type: 'Mario_characters'
  },
  {
    name: 'A. Coz',
    first_appearance: 'Mario Tennis (2000, Game Boy Color)',
    quote: null,
    species: null,
    creator: 'Camelot Software Planning',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/07/Acozbcoz.jpg/revision/latest?cb=20110105160946&path-prefix=en',
    description: 'A. Coz is a character in the Game Boy Color version of Mario Tennis (Game Boy Color). Unlike his partner, B. Coz, he is a speedy player and can return almost any ball. In Singles, the Player faces A. Coz in the final round of the Island Open. Like the player, it\'s his first time in the tournament.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Able Sisters',
    first_appearance: 'Animal Forest',
    quote: null,
    species: 'Hedgehog',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b0/Able_Sisters.png/revision/latest/scale-to-width-down/310?cb=20200222200545&path-prefix=en',
    description: null,
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Ace',
    first_appearance: 'Mario Tennis: Power Tour (2005)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/4e/MTPT_Ace.png/revision/latest/scale-to-width-down/310?cb=20160426041905&path-prefix=en',
    description: 'Ace (also known as Tina in Europe) is the female protagonist in the game Mario Tennis: Power Tour. She appears in the game whether the player chooses the male or the female protagonist.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Acid Worm',
    first_appearance: 'Metroid Fusion',
    quote: null,
    species: null,
    creator: 'Nintendo R&D1',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/92/Acid_Worm.png/revision/latest?cb=20120809011457&path-prefix=en',
    description: 'The Acid Worm is a boss that appeared in Metroid: Zero Mission for the Game Boy Advance. It has two attacks that are directed against Samus Aran which include ramming into her face first and raising the acid, requiring Samus to jump farther up.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Acro',
    first_appearance: 'Kirby\'s Dream Land 3 (1997)',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/1a/Acro.png/revision/latest/scale-to-width-down/310?cb=20100109204251&path-prefix=en',
    description: 'Acro is a boss from the Kirby (series). He first appeared in the Super Nintendo Entertainment System video game Kirby\'s Dream Land 3, though also appeared in the Nintendo 64 title Kirby 64: The Crystal Shards. It is a boss enemy that is under the control of Dark Matter, technically not making him an enemy to Kirby.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Adam Malkovich',
    first_appearance: 'Metroid Fusion',
    quote: '“Any objections, Lady?”',
    species: null,
    creator: 'Yoshio Sakamoto',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/8a/Adam_Other_M.png/revision/latest/scale-to-width-down/157?cb=20170915230734&path-prefix=en',
    description: 'Adam Malkovich, is a character from the Metroid (series) who made his first appearance in Metroid Fusion, as the A.I. of Samus\'s gunship. Adam was originally Samus Aran\'s commanding officer when she was a soldier in the Galactic Federation, however they parted ways after a rescue mission went bad.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Adeleine',
    first_appearance: 'Kirby\'s Dream Land 3 (possible)Kirby 64: The Crystal Shards (first referred to with her name)',
    quote: '“Back for a new adventure!”',
    species: 'Human',
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/29/KSA_Adeleine.png/revision/latest/scale-to-width-down/310?cb=20180707004414&path-prefix=en',
    description: 'Adeleine, also known as Ado (though possibly different character), is a human character from the Kirby (series) Kirby (series), the only one of that type who lives on Pop Star.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Admiral Bobbery',
    first_appearance: 'Paper Mario: The Thousand-Year Door (2004)',
    quote: null,
    species: 'Bob-omb',
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/95/TTYD_Bobbery.png/revision/latest/scale-to-width-down/310?cb=20190610224632&path-prefix=en',
    description: 'Admiral Bobbery (usually just referred to as Bobbery) is a Bob-omb who is Mario\'s sixth (or seventh, depending on whether the player has completed Ms. Mowz\'s trouble at this point) partner in Paper Mario: The Thousand-Year Door. His wind-up key is the helm of a ship. His wife, a female Bob-omb named Scarlette, died of a mysterious illness prior to the events of the game.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Admiral Dane',
    first_appearance: 'Metroid Prime 3: Corruption',
    quote: null,
    species: null,
    creator: 'Retro Studios',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/5b/AdmiralDane.jpg/revision/latest/scale-to-width-down/310?cb=20080402170828&path-prefix=en',
    description: null,
    search_type: 'Metroid_characters'
  },
  {
    name: 'Agahnim',
    first_appearance: 'The Legend of Zelda: A Link to the Past (1991)',
    quote: '“It is now only a matter of time before evil power covers this land...”',
    species: null,
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/da/Agahnim_Artwork.png/revision/latest/scale-to-width-down/310?cb=20191026122325&path-prefix=en',
    description: null,
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Agitha',
    first_appearance: 'The Legend of Zelda: Twilight Princess',
    quote: null,
    species: 'Hylian',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/68/Agitha_%28Hyrule_Warriors%29.png/revision/latest/scale-to-width-down/242?cb=20140725192326&path-prefix=en',
    description: 'Agitha is a character in The Legend of Zelda (series) that appeared mainly in The Legend of Zelda: Twilight Princess. She also made an appearance as a playable character in the Hyrule Warriors series where she is one of the original playable characters introduced in the first game and has been in every game since.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Ai',
    first_appearance: null,
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/5e/Ai.jpg/revision/latest?cb=20090707152746&path-prefix=en',
    description: null,
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Albino Dino',
    first_appearance: 'Paper Mario (2000)',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a4/Albino_dino.png/revision/latest?cb=20100911033726&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Alex',
    first_appearance: 'Mario Tennis (2000, Game Boy Color)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/67/Mario_Tennis_Alex.png/revision/latest?cb=20170916215218&path-prefix=en',
    description: 'Alex is a character who debuts in the Game Boy Color version of Mario Tennis (Game Boy Color). His doubles partner is Harry (Mario Tennis). In the game, everyone at the Royal Tennis Academy is surprised at Alex\'s very fast rise in the club ranks by getting into the varsity team by beating the fourth placed Bob, which he does days after being instated. He beats Emily on the way to the final against Factory\'s A. Coz and wins easily. After hearing of the newest tennis star, Princess Peach invites Alex for a match against Mario. In the Nintendo 64 version of Mario Tennis (Nintendo 64), he is a transferred character and can be played in this version, though not in its Virtual Console port. In, Mario Tennis: Power Tour it\'s Alex holds the distinction of being the Academy\'s best ever player and is still the only one that has challenged Mario before. However, he has retired from competitive tennis and has become the Academy\'s head coach. Alex develops a training regimen for not just the players but also for the other coaches, based on the Power Shot that he saw Mario use. At the start of the game, Alex loses the match against Mario, who is wearing a mask to hide his identity. He states that he is surprised that Mario came back for a rematch and wonders when he\'ll be seeing him again. When Clay or Ace are about to leave to the Mario World after winning the Island Open, Alex tells them a bit about his experience against him and expects the player to beat the plumber. When the player beats the Master level of the Tennis Machine, Alex, along with Nina (Mario Tennis), come to congratulate the player. Nina proceeds to tease Alex, and reveals that Alex became afraid of the siren that sounds after beating the Tennis Machine.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Alfonzo',
    first_appearance: 'The Legend of Zelda: Spirit Tracks (2009)',
    quote: '“I don\'t know who these two are, Your Highness. But with your permission... I\'d be happy to teach them some manners.”',
    species: 'Hylian',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b4/Link_and_Alfonzo_Spirit_Tracks.png/revision/latest/scale-to-width-down/310?cb=20170710201225&path-prefix=en',
    description: 'Alfonzo ​is a character from The Legend of Zelda: Spirit Tracks. A Master Engineer, he acts as Link\'s mentor and helped him become the Royal Engineer. Alfonzo is formerly a master swordsman who once served the royal family as a soldier as his ancestors had done for generations. Alfonzo resides in Aboda Village, and the train station there is part of the same structure as his house. Here, Link may ask Alfonzo to swap out any of the Train Parts that Link has purchased from Linebeck Trading.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Allie',
    first_appearance: 'Mario Tennis (2000, GBC)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/fc/Allie.PNG/revision/latest?cb=20170916234210&path-prefix=en',
    description: 'Allie is a student of the Royal Tennis Academy during the events of the Game Boy Color version of Mario Tennis (Game Boy Color). He is a speedy player with decent control and great speed, but low power. Allie belongs to the second rank of the Senior class in singles until Alex (Mario Tennis) / Nina (Mario Tennis) defeats him. In Senior doubles, Allie is paired with Fay (Mario Tennis) and belongs to the highest rank. His in-game sprite depicts him as an adolescent with black hair wearing a green headband.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Alpha Blogg',
    first_appearance: 'Metroid Prime 2: Echoes',
    quote: null,
    species: null,
    creator: 'Retro Studios',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/76/AlphaBlogg.jpg/revision/latest/scale-to-width-down/310?cb=20081112230811&path-prefix=en',
    description: null,
    search_type: 'Metroid_characters'
  },
  {
    name: 'Amanda Toad',
    first_appearance: 'Star Fox Command (2006)',
    quote: null,
    species: null,
    creator: 'Takaya Imamura',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/8b/Amanda.jpg/revision/latest?cb=20071214132002&path-prefix=en',
    description: null,
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Andrew Oikonny',
    first_appearance: 'Star Fox 64 (1997)',
    quote: '“Andross\' enemy is my enemy!”',
    species: null,
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/ef/StarFoxAssault_Andrew.jpg/revision/latest/scale-to-width-down/310?cb=20080127185032&path-prefix=en',
    description: 'Andrew Oikonny is a villain character in the Star Fox (series). He is Andross\'s nephew, and also carries on many of his uncles ambitions. He joined Star Wolf at one point, but left the group, to form his own alliance, one to finish what his uncle started.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Andross',
    first_appearance: 'Star Fox (1993)',
    quote: '“Only I have the brains to rule Lylat!”',
    species: null,
    creator: 'Shigeru Miyamoto',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/58/SFZ-Andross_.png/revision/latest/scale-to-width-down/310?cb=20170805065653&path-prefix=en',
    description: 'Emperor Andross is the autoproclaimed emperor of planet Venom and the main antagonist of the Star Fox (series) series, debuting in Star Fox. He is a brillant scientist who was banished from his home planet of Corneria due to his experiments that were judged unethical by many. He was exiled to the distant planet of Venom as punishment but managed to gather followers and eventually become the emperor of Venom and was at the head of a military force powerful enough to threaten the entire Lylat system.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Angler Fish',
    first_appearance: 'The Legend of Zelda: Link\'s Awakening',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/17/AnglerFish.jpg/revision/latest/scale-to-width-down/310?cb=20071214143603&path-prefix=en',
    description: 'Angler Fish is a boss creature found in the Game Boy and Game Boy Color video game The Legend of Zelda: Link\'s Awakening. In the video game, he is the guardian of the Surf Harp.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Anju',
    first_appearance: 'The Legend of Zelda: Majora\'s Mask (2000)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/ca/The_Legend_of_Zelda_Majora%27s_Mask_-_Anju.png/revision/latest/scale-to-width-down/211?cb=20170802220130&path-prefix=en',
    description: 'Anju is a character from The Legend of Zelda: Majora\'s Mask, a video game on the Nintendo 64 home console. She is a woman that, along with her family, runs the Stock Pot Inn at Clock Town. During the events in the game, she was engaged to Kafei, where near the end they get married. By the looks of her appearance, she is possibly a Hylian, or at least an elf. It is said that she is a counterpart to The Legend of Zelda: Ocarina of Time\'s Cucco Lady, whom oddly enough had bad allergies to Cuccos.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Anju\'s Grandmother',
    first_appearance: 'The Legend of Zelda: Ocarina of Time (1998)',
    quote: null,
    species: null,
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/ba/Anju%27s_Grandmother.png/revision/latest?cb=20091127154549&path-prefix=en',
    description: 'Anju\'s Grandmother, also known as Granny in The Legend of Zelda: Ocarina of Time, lives in the lower bedroom of the Stock Pot Inn in Clock Town in the video game The Legend of Zelda: Majora\'s Mask. While confined to her wheelchair, she serves as a storyteller. Unfortunately, her stories are unbearably long and the listener will often fall asleep in the middle of them. She also appears to be losing her memory, as she often refers to her granddaughter, Anju, and Link by the name of Tortus, her deceased son and Anju\'s father.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Ankle',
    first_appearance: 'The Legend of Zelda: The Wind Waker',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/74/Ankle.jpg/revision/latest?cb=20071214134611&path-prefix=en',
    description: null,
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Anthony Higgs',
    first_appearance: 'Metroid: Other M',
    quote: '“Remember me?”',
    species: 'Human',
    creator: 'Yoshio Sakamoto',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/34/MetroidOM_AnthonyHiggs.jpg/revision/latest/scale-to-width-down/310?cb=20111116233152&path-prefix=en',
    description: 'Anthony Higgs is a Galactic Federation Trooper in Metroid: Other M that used to be in Samus\'s squad before Samus became an independent bounty hunter. Aboard the Bottle Ship in Metroid Other M Anthony is in charge of Plasma usage and authorization.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Aparoid Queen',
    first_appearance: 'Star Fox Assault',
    quote: '“All for us... all things in the universe... will be ours... (Fox McCloud: "What!?") All for us... everything in this universe... exists for us... Bow before us! SUBMIT TO US!!!!”',
    species: 'Aparoid',
    creator: 'Namco',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/56/Aparoid_Queen.jpg/revision/latest/scale-to-width-down/310?cb=20190726190744&path-prefix=en',
    description: 'The Aparoid Queen is the leader of the Aparoid and the main antagonist in Star Fox: Assault. Her goal is to take over the universe so she can rule over it with an iron fist, which she will do by hypnotizing others to do what she says via infection. She dwells in the core of the Aparoid Homeworld where the Star Fox (team) fights her as their final battle to defeat the Aparoids for good.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Arachnus',
    first_appearance: 'Metroid II: Return of Samus',
    quote: null,
    species: null,
    creator: 'Nintendo R&D1',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/93/Metroid-samus-returns-3.jpg/revision/latest/scale-to-width-down/310?cb=20170807165759&path-prefix=en',
    description: null,
    search_type: 'Metroid_characters'
  },
  {
    name: 'Arfur',
    first_appearance: 'Paper Mario: The Thousand-Year Door (2004)',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e7/Arfur.PNG/revision/latest?cb=20090417202003&path-prefix=en',
    description: 'Arfur is a Doogan who appears in Paper Mario: The Thousand-Year Door. He doesn\'t play a significant role in the story, though does have a trouble that the Mario can partake in.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Armored Harriers',
    first_appearance: 'Paper Mario: The Thousand-Year Door (2004)',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d3/ArmoredHarriers.jpg/revision/latest?cb=20090722164257&path-prefix=en',
    description: 'The Armored Harriers (a.k.a. The Iron Adonis Twins) are the only two Iron Cleft that appear in Paper Mario: The Thousand-Year Door.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Aryll',
    first_appearance: 'The Legend of Zelda: The Wind Waker (2002)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/1b/Aryll.png/revision/latest/scale-to-width-down/302?cb=20150510024615&path-prefix=en',
    description: 'Aryll is Link\'s slightly younger sister in the GameCube video game The Legend of Zelda: The Wind Waker. She is a blond girl from Outset Island, and is kidnapped early on in the game after Link saves Tetra from Ganon\'s henchmen. Aryll is actually the first character that the player will encounter in the game. In the beginning she\'s looking for her older brother and finds him on top of the watchtower that she named after herself (Aryll\'s Lookout). There she wakes Link up and tells him to visit their grandmother. After doing so Link\'s grandma explains the day\'s plans, which involve him turning the age of the The Legend of Zelda: Ocarina of Time of legend when he thwarted the beast that threatened the entire world. She then tells him to go back and play with Aryll. Upon doing so Aryll gives Link her most precious possession: her Telescope, but says that he can only have it for one day. After this the two of them spot a young girl about the age of Link fall into the forest after her group of pirates shoot the captor (a bird called the Helmaroc King) out of the sky. Aryll suggests that Link goes save the girl, and does so after acquiring a sword. As Link starts to head back, Aryll comes to greet him on the bridge. After she starts to cross it, the Helmaroc King from before mistakes her for Tetra and kidnaps her. Link attempts to jump after the Helmaroc King, but foolishly almost falls to his death. Thankfully Tetra saves him in the knick of time.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Ashei',
    first_appearance: 'The Legend of Zelda: Twilight Princess',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/dc/Tpashei.jpg/revision/latest/scale-to-width-down/310?cb=20080609195345&path-prefix=en',
    description: 'Ashei is a character from the Wii video game The Legend of Zelda: Twilight Princess. In the game, she is one of the few people part of Telma\'s resistance. She is a master with weapons such as swords and bows and arrows, and was trained by her father when she was young living in Hyrule\'s mountains. She is initially rude towards Link due to her prejudice towards the men of Hyrule, quick to assume he is a soldier of Hyrule.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Aurora Unit',
    first_appearance: 'Metroid Prime 3: Corruption (2007)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/28/Aurora.jpg/revision/latest/scale-to-width-down/310?cb=20071214123302&path-prefix=en',
    description: 'Approximately\'twenty years ago\' in the events of Metroid Prime 3: Corruption, an organic supercomputer was designed by the Galactic Federation. It was an supercomputer that could link to a vast network. The super computer was named Aurora. They controled entire areas and would stop and warn about oncoming threats. And to give help to Samus Aran throughout her questing. The Aurora Unit\'s brain- suggests that the popular Mother Brain was indeed an type of Aurora Unit.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Auru',
    first_appearance: 'The Legend of Zelda: Twilight Princess',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/ac/Auru.jpg/revision/latest/scale-to-width-down/310?cb=20090105022632&path-prefix=en',
    description: 'Auru is one of the members of "The Group" in The Legend of Zelda: Twilight Princess, and could be called the oldest out of them. He is fairly knowledgeable about the desert and the evils that it used to house (or, indeed, still does), and appears to have known the sages who guard the Mirror of Twilight at some point; aside from knowing that they once tutored the young Princess Zelda, it was apparently they who first told him of the mirror and its location. It could be inferred that he himself has had links to the Royal Family at some point: aside from his name bearing a strange resemblance to Rauru (which could also be said to be on account of his wise and elderly nature), the emblem of the Triforce is visible on the front of his clothing.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Aveil',
    first_appearance: 'The Legend of Zelda: Majora\'s Mask',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/77/Aveil.jpg/revision/latest/scale-to-width-down/310?cb=20071214143657&path-prefix=en',
    description: 'Aveil is a character in The Legend of Zelda: Majora\'s Mask for the Nintendo 64, where she served as the Gerudo Pirates. In the game, she was told by Skull Kid that a treasure of great worth waits inside of the Great Bay Temple. He mentioned that the only way to come in possession of the treasure was to steal a pack of eggs.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Ax Knight',
    first_appearance: 'Kirby\'s Adventure (1993)',
    quote: null,
    species: null,
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/dd/Ax_Knight.jpg/revision/latest/scale-to-width-down/310?cb=20110314194452&path-prefix=en',
    description: 'Ax Knight is an enemy from the Kirby (series) and a member of the Meta-Knights. In Kirby Super Star he appears as a mini-boss in DynaBlade, Revenge of Meta Knight, and Milky Way Wishes. As his name suggests Ax Knight wields a battle axe as a weapon.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Axem Rangers',
    first_appearance: 'Super Mario RPG: Legend of the Seven Stars (1996)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/f5/Axem.gif/revision/latest/scale-to-width-down/310?cb=20071214131113&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Azalea',
    first_appearance: 'Mario Golf (1999, Game Boy Color)',
    quote: null,
    species: 'Human',
    creator: 'Camelot Software Planning',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a5/Azalea.jpg/revision/latest?cb=20071214125254&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'B. Coz',
    first_appearance: 'Mario Tennis (2000, Game Boy Color)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/07/Acozbcoz.jpg/revision/latest?cb=20110105160946&path-prefix=en',
    description: 'B. Coz is a character who appears in the Game Boy Color version of Mario Tennis (Game Boy Color). He is on the Factory team. Unlike B. Coz\'s partner (and brother), A. Coz, he can serve and hit powerful shots. The player faces B. Coz in the Island Open. In doubles, the player faces him in the final round. In singles, B. Coz loses against Emily in the second round.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Baby Bowser',
    first_appearance: '"Two Plumbers and a Baby" (The Super Mario Bros. Super Show!)Super Mario World 2: Yoshi\'s Island',
    quote: null,
    species: 'Koopa',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/61/Baby_Bowser_Artwork_-_Super_Mario_World_2.png/revision/latest/scale-to-width-down/310?cb=20120325183342&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Baby Donkey Kong',
    first_appearance: '"Ape Foo Young" (cartoons)Yoshi\'s Island DS (games)',
    quote: null,
    species: null,
    creator: 'Artoon',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/3d/Baby_Donkey_Kong_MSS.png/revision/latest?cb=20120107183331&path-prefix=en',
    description: 'Baby Donkey Kong is the younger version of Donkey Kong. His first game appearance was in Yoshi\'s Island DS where he has to go save Baby Luigi and other babies who got kidnapped by an Kamek and his followers with Yoshi, Baby Mario, Baby Peach, Baby Wario, and Baby Bowser.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Baby Luigi',
    first_appearance: 'Toddler Terrors of Time Travel (cartoons)Super Mario World 2: Yoshi\'s Island (games)',
    quote: '“"Uh-oh, Baby Luigi time!"”',
    species: null,
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/2b/Baby_Luigi_MSS.png/revision/latest?cb=20110208223201&path-prefix=en',
    description: 'Baby Luigi is the young form of Luigi. His first game was a prequel to the Mario games, Super Mario World 2: Yoshi\'s Island where Kamek stole Baby Luigi, but missed Mario. When Yoshi caught Baby Mario, the two of them went out to rescue Baby Luigi and bring the two of them to their parents.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Baby Mario',
    first_appearance: 'Super Mario World 2: Yoshi\'s Island',
    quote: null,
    species: null,
    creator: 'Takashi Tezuka',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/f7/Baby_Mario_MSS.png/revision/latest?cb=20120107183331&path-prefix=en',
    description: 'Baby Mario is the baby form of Mario, appearing first in Super Mario World 2: Yoshi\'s Island. Super Smash Bros. Brawl classifies him as a character from the Yoshi (series), but he has also starred in many Mario spin-offs, and notably in Mario & Luigi: Partners in Time, where he appeared as a playable character, and one of the main characters, along with his older self.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Baby Peach',
    first_appearance: '"Two Plumbers and a Baby" (cartoon)Mario & Luigi: Partners in Time (game)',
    quote: null,
    species: 'Human',
    creator: 'AlphaDream',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/ec/Baby_Peach_MSS.png/revision/latest?cb=20120107183332&path-prefix=en',
    description: 'Baby Peach is, naturally, the baby form of Princess Peach from the past. Her first appearance was in the game Nintendo DS. She got to the current time Mushroom Kingdom through a time machine that Professor E. Gadd created. She appeared in the game Yoshi\'s Island DS for the Nintendo DS along with Yoshi, Baby Mario, Baby Donkey Kong, Baby Wario, and Baby Bowser. She also appears in Super Smash Bros. Brawl, as a Trophy and in Mario Kart Wii and Mario Super Sluggers as a playable character.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Baby Rosalina',
    first_appearance: 'Mario Kart 8',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/2e/Baby_Rosalina.PNG/revision/latest/scale-to-width-down/310?cb=20171216150508&path-prefix=en',
    description: 'Baby Rosalina is a video game character who is a baby version of her adult counterpart, Rosalina She is a racer appearing in the Mario Kart (series). She first appeared in Mario Kart 8 and reappeared in its remaster, Mario Kart 8 Deluxe.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Baby Wario',
    first_appearance: 'Yoshi\'s Island DS',
    quote: null,
    species: null,
    creator: 'Artoon',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/f0/BabyWarioDS.png/revision/latest/scale-to-width-down/310?cb=20111125164152&path-prefix=en',
    description: 'Baby Wario is Wario when he was a baby. In Yoshi\'s Island DS, he (and multiple other famous characters from the Mario franchise) will help Yoshi (character) save all of the babies that were recently victims of a mass-kidnapping started by Kamek. He will join Yoshi\'s team in world 3, though will shortly leave due to his greedy nature. He eventually returns to help the babies one last time in World 5-8 to defeat Bowser.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Baby Yoshi',
    first_appearance: 'Super Mario World',
    quote: null,
    species: 'Yoshi (species)',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/46/Bubble_Baby_Yoshi_%28New_Super_Mario_Bros_U%29.png/revision/latest/scale-to-width-down/310?cb=20121202010520&path-prefix=en',
    description: 'Baby Yoshies first appeared in Super Mario World, a launch title for the SNES, which was also the game that debuted Yoshi. The Baby Yoshies are found in Red, Blue, or Yellow eggs. You can make them grow into adults by feeding it 5 enemies. You could also feed it a Mushroom, Fire Flower, Feather, or Star to have it grow instantly. Also, Bowser has trapped quite a few of these babies as well, and Mario plans to save them.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Bamma',
    first_appearance: 'Paper Mario: The Thousand-Year Door (2004)',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e7/Bro_bamma.png/revision/latest?cb=20100730194741&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Bandanna Waddle Dee',
    first_appearance: 'Kirby Super Star',
    quote: '“Great king, Kabula has been shot down!”',
    species: 'Waddle Dee',
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/ba/KSA_Bandana_Dee.png/revision/latest/scale-to-width-down/310?cb=20180310002711&path-prefix=en',
    description: 'Bandana Waddle Dee, also called Bandana Dee is a mini boss. He made his debut in Kirby Super Star Ultra. Kirby can easily beat him by Swallow him. He has since become one of four main characters of the series along with Kirby himself, King Dedede and Meta Knight, especially in his playable debut in Kirby\'s Return to Dream Land.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Bandy Andy',
    first_appearance: 'Paper Mario: The Thousand-Year Door (2004)',
    quote: null,
    species: 'Bandit',
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/70/BandyAndy.png/revision/latest?cb=20071214140920&path-prefix=en',
    description: 'Bandy Andy is a Big Bandit who appears in Paper Mario: The Thousand-Year Door. He is one of the various contracted fighters enlisted in the Glitz Pit, an arena that is located in the floating town of Glitzville. There he is a member of a fighting team composed of Bandit (Mario) and Big Bandits, called the Hand-It-Overs.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Banktoad',
    first_appearance: 'Super Mario Galaxy (2007)',
    quote: null,
    species: 'Toad',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/41/Localbanktoadandmario.jpg/revision/latest/scale-to-width-down/310?cb=20110504210430&path-prefix=en',
    description: 'The Banktoad is a green Toad (species) that appears in, Super Mario Galaxy 2, and Super Mario Odyssey. He is very similar to Mailtoad.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Barb',
    first_appearance: 'Mario Tennis: Power Tour (2005)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/4d/Barb.png/revision/latest?cb=20170929045244&path-prefix=en',
    description: 'Barb ​is a character in Mario Tennis: Power Tour who hails from Empire. In the Island Open, Clay or Ace faces her in the first round. Unlike Dweezil and Mynx, she is unseeded and not considered as much of a threat as her fellow Empire players and seems to be fairly naive. She claims to have underestimated her opponent because they were a rookie. She has the High-Power Shot and her doubles partner is Oscar (Mario Tennis). Oscar is never faced in the singles or doubles tournament. If Clay/Ace win the doubles tournament before the singles, she asks them to go easy on her.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Barkle',
    first_appearance: 'Freshly-Picked Tingle\'s Rosy Rupeeland (2006)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e9/Dongle.jpg/revision/latest/scale-to-width-down/310?cb=20071214125406&path-prefix=en',
    description: 'Barkle is a character that appeared in the Nintendo DS video game Freshly-Picked Tingle\'s Rosy Rupeeland. It is a dog that is reminiscent of Tingle, clothes wise. As you can see, the Tingle puppy has a hood that looks just like Tingle\'s.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Barnes',
    first_appearance: 'The Legend of Zelda: Twilight Princess (2006)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/ea/Barnes.png/revision/latest?cb=20090710212213&path-prefix=en',
    description: 'Barnes is the owner of the Bomb Shop in Kakariko Village in The Legend of Zelda: Twilight Princess. He panics easily and is kind of a blabbermouth but all in all he\'s a good person. In a couple of scenes he is rather funny. He also bears a mild resemblance to Cannon the bomb-seller from The Legend of Zelda: The Wind Waker, at least in terms of hairstyle.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Baron Brrr',
    first_appearance: 'Super Mario Galaxy (2007)',
    quote: null,
    species: null,
    creator: 'Nintendo EAD Tokyo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/95/Baron_Brrr.png/revision/latest/scale-to-width-down/310?cb=20150610205050&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Barry',
    first_appearance: 'Super Paper Mario (2007)',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/1a/SPM_Barry.PNG/revision/latest/scale-to-width-down/310?cb=20160505010605&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Beadrix',
    first_appearance: 'Kirby\'s Epic Yarn (2010)',
    quote: null,
    species: null,
    creator: 'Good-FeelHAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a3/KEY_Kirby_Form_2.jpg/revision/latest/scale-to-width-down/310?cb=20101028195307&path-prefix=en',
    description: 'Beadrix is a character in Kirby\'s Epic Yarn. She is one of the tenents that take residence in the apartment in Quilty Square. She resides in Room #202, but not until after Kirby fills it up with the right furniture.\nBeadrix plays a Bead collecting game with Kirby, in which Kirby has to get a certain amount of beads in a specific amount of time.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Bean Seller',
    first_appearance: 'The Legend of Zelda: Ocarina of Time (1998)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/99/OoT_Bean_Seller.png/revision/latest/scale-to-width-down/310?cb=20100923192410&path-prefix=en',
    description: 'The Bean Seller is a recurring character in The Legend of Zelda (series) The Legend of Zelda (series), appearing in The Legend of Zelda: Ocarina of Time, and The Legend of Zelda: Majora\'s Mask. He is a strange-looking and plump man that is constantly sitting and eating the Magic Bean that he sells.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Beaver Bros.',
    first_appearance: 'The Legend of Zelda: Majora\'s Mask',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d4/MM_BeaverBrothers.png/revision/latest/scale-to-width-down/310?cb=20180502000614&path-prefix=en',
    description: 'The Beaver Bros. are two beaver brothers who appeared in the Nintendo 64 video game The Legend of Zelda: Majora\'s Mask. Their names aren\'t known, though each of them do have distinct personalities. They can be found in the Great Bay area where they would give Link a bottle if he\'d be able to jump through 20 hoops in less than 2 minutes. Link completed the challenge, though they apparently forgot to mention one other challenge that he had to complete - which was to race the older beaver and jump through 25 hoops in less than two minutes.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Bee',
    first_appearance: 'Super Mario Galaxy (2007)',
    quote: null,
    species: null,
    creator: 'Nintendo EAD Tokyo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/da/MarioBee.jpg/revision/latest/scale-to-width-down/310?cb=20090314175725&path-prefix=en',
    description: 'Bees are insects that appear in various Mario (series) video games. Their first appearance in the series was Yoshi\'s Story. In this game, the bees would easily be distracted by the Yoshi that the player was controlling, and wouldn\'t allow him to pass. So, the player had to control Yoshi so that he would move very slowly when walking, which would cause the bees to not even notice him. Larger bees also appeared in the game, and would harm Yoshi if he approached them.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Beedle',
    first_appearance: 'The Legend of Zelda: The Wind Waker (2002)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/ab/Beedle.png/revision/latest/scale-to-width-down/310?cb=20150510025013&path-prefix=en',
    description: 'Beedle is a traveling merchant who went across the great sea in The Legend of Zelda: The Wind Waker via a boat in hope to sell his items to possible on lookers, including Link.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Beldam',
    first_appearance: 'Paper Mario: The Thousand-Year Door (2004)',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e6/Beldam.jpg/revision/latest?cb=20071214143007&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Bellum',
    first_appearance: 'The Legend of Zelda: Phantom Hourglass',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/60/LoZPH_Bellum.png/revision/latest/scale-to-width-down/310?cb=20181008020530&path-prefix=en',
    description: 'Bellum is the main antagonist and final boss of The Legend of Zelda: Phantom Hourglass. He is a very powerful creature that stole the power of the Ocean King before creating the Ghost Ship to steal the life force of anyone who tried to board the mysterious ship.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Belome',
    first_appearance: 'Super Mario RPG: Legend of the Seven Stars (1996)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/4e/Belome.jpg/revision/latest?cb=20071214124405&path-prefix=en',
    description: 'Belome is a giant dog-like monster that is perpetually hungry and a minor boss featured in Super Mario RPG: Legend of the Seven Stars. He is encountered by Mario and Mallow in Kero Sewers and by the whole party in Land\'s End. During the first battle, the monster will eat Mallow after a few turns. Mario can rescue Mallow by attacking Belome continuously, although Belome may still eat him subsequent times. If Mario falls while Mallow is in Belome\'s stomach, the game will end. Besides eating Mallow, Belome attack\'s includes licking his opponents and casting S\'crow Funk.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Beltino Toad',
    first_appearance: 'Star Fox Assault (2005)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/2b/Beltino0.jpg/revision/latest/scale-to-width-down/310?cb=20080127185236&path-prefix=en',
    description: 'Beltino Toad is Slippy Toad\'s father, and the lead research director of the Cornerian Defense Forces. Although he was mentioned in the Official Nintendo Player\'s Guide of Star Fox 64, he didn\'t make an in-game appearance until Star Fox Assault, where he assisted Fox McCloud and the Team Star Fox in defeating the Aparoid. He discovered the Aparoids were sensitive to self-destruction and created a "self-destruct program" which when inserted into the Aparoid Queen, which would cause all the Aparoids, including the queen, to self-destruct.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Beppe',
    first_appearance: 'Animal Crossing: Pocket Camp (2017)',
    quote: null,
    species: 'Bird',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b7/Animal_Crossing_-_Pocket_Camp_-_Character_Artwork_-_Beppe_01.png/revision/latest/scale-to-width-down/310?cb=20171025164943&path-prefix=en',
    description: '​Beppe ​is a character in Animal Crossing: Pocket Camp, co-operating OK Motors, alongside Giovanni (Animal Crossing) and Carlo.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Berserker Lord',
    first_appearance: 'Metroid Prime 3: Corruption',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d7/Berserker_Lord.jpg/revision/latest/scale-to-width-down/310?cb=20071214133927&path-prefix=en',
    description: 'The Berserker Lord is the first boss battle that you must engage in the Wii title Metroid Prime 3: Corruption. It is a colossal Space Pirate ally who\'s notable features include two hulking claws and a large, seemingly eyeless face. In all, you must battle multiple Berserker Lords, though the later versions are slightly different from this version - sometimes less powerful and sometimes more depending on which one.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Bessie Bass',
    first_appearance: 'Yoshi\'s Island DS (2006)',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a2/BessieBass.gif/revision/latest?cb=20100818055424&path-prefix=en',
    description: 'Bessie Bass is a giant Cheep Chomp, and the mid-boss of World 3 in Yoshi\'s Island DS. When first encountered on her Battleship, Bessie Bass is only slightly larger than a Yoshi (species) ; though through the use of his magic, Kamek was able to grow Bessie Bass to monstrous proportions.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Bestovius',
    first_appearance: 'Super Paper Mario (2007)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/47/Bestovius.jpg/revision/latest?cb=20100730203057&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Beth',
    first_appearance: 'Mario Tennis (2000, Game Boy Color)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e8/Mario_Tennis_Beth.PNG/revision/latest?cb=20170917025344&path-prefix=en',
    description: 'Beth is a character in the Game Boy Color edition of Mario Tennis (Game Boy Color). She remains unplayable until she has been unlocked. To unlock her, one must beat her in Juniors play. She is best in speed. Her partner is Pam in doubles. She is rank 2 in Junior class until the player defeats her.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Biff Atlas',
    first_appearance: 'Luigi\'s Mansion (2001)',
    quote: null,
    species: null,
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/0c/Luigi%27s_Mansion_-_Character_Artwork_-_Biff_Atlas.png/revision/latest/scale-to-width-down/310?cb=20181022004252&path-prefix=en',
    description: 'Biff Atlas, the Bodybuilder (Japanese: マッディー), is one of the many ghosts featured in Luigi\'s Mansion (video game). His first name is a pun on "biff", which is slang meaning "to hit". His last name is based on wikipedia:Atlas (mythology), a titan from Greek Mythology who was forced to hold up the Sky. His portrait number in Professor Elvin Gadd\'s gallery is 16.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Big Bob-omb',
    first_appearance: 'Super Mario 64 (1996)',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/7d/Big_Bob-omb_-_Mario_Party_9.png/revision/latest/scale-to-width-down/310?cb=20150215230632&path-prefix=en',
    description: 'The Big Bob-omb, otherwise known as King Bob-omb or the Bob-omb King, is the king of the Bob-omb who debuted in Super Mario 64, being the first boss fought in that game and Super Mario 64 DS. Guarding the Power Star, which Bowser entrusted him with, he does not give it up without fighting the player. After his debut, King Bob-omb became a recurring boss in later games, specifically spin off games such as Mario Party 9 and Mario & Luigi: Paper Jam. King Bob-omb, like other certain bosses, takes pride in his royal status. It\'s unknown whether or not he\'s actually the king of all the Bob-ombs, but it is expected that he is. He resembles a very large Bob-omb, but with arms, a giant mustache, and a crown on his head.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Big Boo',
    first_appearance: 'Super Mario World (1990)',
    quote: null,
    species: null,
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/4f/BigBoo.jpg/revision/latest?cb=20110115150108&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Big Bully',
    first_appearance: 'Super Mario 64 (1996)',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e5/BigBully.png/revision/latest?cb=20110111120549&path-prefix=en',
    description: 'Big Bullies are large Bully working for the Koopa Troop that appear in Super Mario 64, Super Mario 64 DS, and Mario Kart DS. Like their smaller counterparts, the Big Bully resembles a large black sphere with yellow horns and green feet.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Big Bungee Piranha',
    first_appearance: 'Yoshi\'s Island DS (2006)',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/71/Bungee_Plant_%28Yoshi%27s_Island_DS%29.png/revision/latest/scale-to-width-down/234?cb=20120809153501&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Big Lantern Ghost',
    first_appearance: 'Paper Mario (2000)',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/47/Big_Lantern_Ghost.gif/revision/latest?cb=20081113211300&path-prefix=en',
    description: 'Big Lantern Ghost is a giant Lantern Ghost who appears Paper Mario on the Shy Guy\'s Toy Box stage. He is the mid-boss of the stage, and appears to love the darkness (while hating the light).',
    search_type: 'Mario_characters'
  },
  {
    name: 'Big Top',
    first_appearance: 'Mario Party 8 (2007)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/f4/Bigtop.png/revision/latest?cb=20120216224426&path-prefix=en',
    description: 'Big Top is MC Ballyhoo\'s hat, and serves as his co-host in the Wii game Mario Party 8. He also holds all of the coins for Chump Charity, stating that he was glad to get the load off of his head. Big Top not only has the ability of speech, but is also his own separate entity. In Super Smash Bros. Brawl, he shares a trophy with Ballyhoo. Big Top\'s name comes from a phrase referring to large circus tents. The "Top" part of his name is also a reference to the fact that he is a top hat.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Bigger Boo',
    first_appearance: 'Super Mario World 2: Yoshi\'s Island',
    quote: null,
    species: 'Boo',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/ee/BiggerBoo.png/revision/latest/scale-to-width-down/310?cb=20171106052449&path-prefix=en',
    description: 'Bigger Boo is a boss character of World 2-4 in the game Super Mario World 2: Yoshi\'s Island for the Super Nintendo Entertainment System. His species is Boo, which are enemies in the game. The Boo would suddenly become huge once Kamek uses his magic to enlarge him. To defeat him, you would have to throw Yoshi Egg at the wall so that they would bounce back and hit him when you weren\'t looking at him.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Biggoron',
    first_appearance: 'The Legend of Zelda: Ocarina of Time (1998)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/70/Biggoron.png/revision/latest?cb=20110105171315&path-prefix=en',
    description: 'Biggoron is a recurring character in The Legend of Zelda (series). In most of his appearances, he is a giant Goron blacksmith who will forge swords for Link once Link has completed a task for him. The sword that Biggoron will give Link is longer and stronger that and other sword Link can get, even the Master Sword, though when Link wields it, he will not be able to use his shield. In The Legend of Zelda: Ocarina of Time, Biggoron is the final character in the item trading sequence.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Bill Grey',
    first_appearance: 'Star Fox 64 (1997)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a0/BillGrey.jpg/revision/latest?cb=20071214124324&path-prefix=en',
    description: 'Bill Grey is a character in the Star Fox (series) whom first appeared in Star Fox 64 on the Nintendo 64 as he went to help Fox McCloud and the rest of Star Fox (team). He is commander of two of Corneria\'s defensive military squadrons, according to the game. He later appeared in the game Star Fox: Command to help Falco Lombardi on the Katina mission. He is a long time friend of Fox McCloud, as both Fox and Bill went to pilot\'s school together.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Bipin',
    first_appearance: 'The Legend of Zelda: Oracle of Ages,The Legend of Zelda: Oracle of Seasons',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/88/Bipin.gif/revision/latest?cb=20081108234401&path-prefix=en',
    description: null,
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Birdo',
    first_appearance: 'Yume Kojo: Doki Doki Panic (1987)',
    quote: '“Clearly this is a test for me. Yes, the powers-that-be want me to go out on my own. Once I overcome many hardships, I shall be one step closer to superstardom!”',
    species: 'Birdo',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/40/Birdo_%28Mario_Party_9%29.png/revision/latest/scale-to-width-down/310?cb=20121104151430&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Blanca',
    first_appearance: 'Animal Crossing (2001)',
    quote: null,
    species: 'Cat',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/67/Blanca_NL.png/revision/latest/scale-to-width-down/229?cb=20150308010309&path-prefix=en',
    description: 'Blanca appears in the Animal Crossing series. She is a faceless cat for whom the player can make a face for when she appears. In Animal Crossing she may ride the train with the player and tell them that she was washing her face, and it got erased. Then the player will be able to make a new face for her. In Animal Crossing: Wild World, you can submit your created faces to Nintendo through Wi-Fi.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Blathers',
    first_appearance: 'Animal Forest (2001)',
    quote: null,
    species: 'Owl',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/c3/Blathers_NL.png/revision/latest/scale-to-width-down/310?cb=20131105021403&path-prefix=en',
    description: 'Blathers is a popular character in the Animal Crossing (series), first appearing in the Japanese only Animal Forest for the Nintendo 64, and later on appearing in games that have been released in all major regions ( Animal Crossing, Animal Crossing: Wild World, and Animal Crossing: City Folk). In the video games, he is the owner of the museum, and being an owl is basically asleep during most of the day, though wide awake at night. Of course, if you wish to donate a particular item, then all you have to do is simply wake him up, and he\'ll visibly be embarrassed of sleeping on the job.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Blind the Thief',
    first_appearance: 'The Legend of Zelda: A Link to the Past',
    quote: null,
    species: null,
    creator: null,
    image: null,
    description: 'It has been requested that be added to this page or section.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Blitty',
    first_appearance: 'Mario & Luigi: Bowser\'s Inside Story (2009)',
    quote: null,
    species: null,
    creator: 'AlphaDream',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/c2/Blitties.png/revision/latest/scale-to-width-down/310?cb=20190316215005&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Blocky',
    first_appearance: 'Kirby\'s Dream Land 2 (1995)',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/c7/Blocky.png/revision/latest?cb=20120602114200&path-prefix=en',
    description: 'Blocky is a mini-boss in Kirby\'s Dream Land 2 and Kirby\'s Dream Land 3 and he gives Kirby the Stone ability.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Blooey',
    first_appearance: 'Paper Mario: The Thousand-Year Door',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/3a/Blooey.png/revision/latest?cb=20110105183747&path-prefix=en',
    description: 'Blooey (or White Torpedo as his friends call him) is a character in Paper Mario: The Thousand-Year Door for the Nintendo GameCube. Mario first meets him at the Rogueport plaza where Luigi tells them their escapades in Rumblebump Volcano. He is a Blooper who joins Luigi on his quest to save Princess Eclair. Near the climax of his adventure with Luigi, the plumber accidentally sends the Blooper flying into the lava, crisping the Blooper. Despite that, Blooey did not die.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Blossom',
    first_appearance: 'The Legend of Zelda: Oracle of Ages,The Legend of Zelda: Oracle of Seasons',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/cd/Blossom.png/revision/latest?cb=20110212233224&path-prefix=en',
    description: 'Blossom is the wife of Bipin, and appears in the Legend of Zelda series. The couple asks Link to name their newborn baby.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Blue Paratroopa',
    first_appearance: 'Mario & Luigi: Bowser\'s Inside Story (2009)',
    quote: null,
    species: 'Koopa',
    creator: 'AlphaDream',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/30/BlueParatroopas.png/revision/latest?cb=20110116194420&path-prefix=en',
    description: 'The Blue Paratroopas are a group of three blue Koopa Paratroopa as their name states that appear in Mario & Luigi: Bowser\'s Inside Story and ally Mario and Luigi after they hit the giant Blue Shell block, releasing all of the Blue Shells. They ally Mario and Luigi by telling them on how to use the blue shells. After they teach Mario and Luigi how to use it, they reward Mario and Luigi with all of the Toad Town Attack Pieces.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Blue Toad',
    first_appearance: 'New Super Mario Bros. Wii',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/ee/BlueToad.jpeg/revision/latest?cb=20140127192623&path-prefix=en',
    description: 'Blue Toad is a Toad (species) in the Mario (series) Mario (series). He is commonly paired with Yellow Toad.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Bob',
    first_appearance: 'Mario Tennis (2000, Game Boy Color)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/33/Mario_Tennis_Bob.PNG/revision/latest?cb=20170917025754&path-prefix=en',
    description: 'Bob is a character in the Game Boy Color version of Mario Tennis (Game Boy Color). The player has to face Bob in the varsity team to get into the Island Open. He is a power character and is 4th rank in Varsity, but at first he was in first place in Junior class.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Bob-omb Buddy',
    first_appearance: 'Super Mario 64 (1996)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/88/Bob_omb_buddy.jpeg/revision/latest?cb=20091124182635&path-prefix=en',
    description: 'The Bob-omb Buddies (sometimes called Red Bob-ombs) are recurring allies to Mario of the Bob-omb species, introduced in Super Mario 64. They can be differentiated from the foes by their distinct pink or red color, their silver-colored caps on their tops, instead of the usual fuse, and a silver turn knob, signifying their pacifist and peaceful nature.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Bogmire',
    first_appearance: 'Luigi\'s Mansion (2001)',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/de/Luigi%27s_Mansion_-_Character_Artwork_-_Bogmire.png/revision/latest/scale-to-width-down/310?cb=20181022004253&path-prefix=en',
    description: 'Bogmire is a shadowy Portrait Ghost that is found in Luigi\'s Mansion (video game) and its Nintendo 3DS remake. He appears as a purple ghost with a large mouth, yellow eyes, and thin, constantly outstretched arms. Bogmire lives under a tombstone in the Luigi\'s Mansion (location)\'s Graveyard, and acts as the boss of Area Two. According to his Game Boy Horror entry, Bogmire is the manifestation of the mansion\'s fear and despair; he does not speak, and the Game Boy Horror cannot scan his heart for text. His name is derived from the words "bog" and "quagmire", which refer to different kinds of swampland.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Bombar',
    first_appearance: 'Kirby & the Amazing Mirror (2004)',
    quote: null,
    species: null,
    creator: 'Flagship',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/98/Bombar.jpg/revision/latest?cb=20110308011821&path-prefix=en',
    description: 'Bombar, mistranslated as Aero Star, is a mini boss from Kirby & the Amazing Mirror. Swallow it gives Kirby a Missile Kirby. Inhaling Bombar\'s missiles also gives the missile ability. It also gives the Bomb Kirby from his bombs. Like Master Hand, Kracko Jr., and Batafire, Bombar floats during the fight.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Bombers Secret Society of Justice',
    first_appearance: 'The Legend of Zelda: Majora\'s Mask',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/7a/Bomber_Gang.png/revision/latest/scale-to-width-down/310?cb=20160512123053&path-prefix=en',
    description: 'The Bombers Secret Society of Justice, otherwise known as the Bomber Gang, is a group of four kids in The Legend of Zelda: Majora\'s Mask for the Nintendo 64. The group consists of a leader, Jim, who excludes himself from the rest by garbing himself in a red beret, while the others are clothed in blue ones. They appear early on in the game, when Link is in his Deku Scrub formation, and thus they won\'t allow members of other species into their small "gang".',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Bombette',
    first_appearance: 'Paper Mario (2000)',
    quote: '“I have a little score to settle with those Koopa Bros.!”',
    species: 'Bob-omb',
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b3/Bombette_%28Paper_Mario%29.png/revision/latest/scale-to-width-down/310?cb=20121202003930&path-prefix=en',
    description: 'Bombette is one of Mario\'s partners that appears in Paper Mario, and the third party member encountered in the game. She is a pink Bob-omb (most likely a Bob-omb Buddy) with a ponytail-shaped fuse and a white turn knob with no holes. Her name is a simple combination of "bomb" and "-ette," a suffix used to denote a female subject.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Bonechill',
    first_appearance: 'Super Paper Mario (2007)',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/38/Bonechill.jpg/revision/latest?cb=20071214131819&path-prefix=en',
    description: 'Bonechill is a minor villain in Super Paper Mario and the boss of Chapter 7. He is an undead dragon with a large, blue-scaled head, six small, white-feathered wings on his back, and a large golden cannon with two wheels for a lower body. He is the leader of the Skellobit army and attempts a takeover of The Overthere. According to The InterNed, his theme is called "Bonechill Appears".',
    search_type: 'Mario_characters'
  },
  {
    name: 'Bonetail',
    first_appearance: 'Paper Mario: The Thousand-Year Door (2004)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/89/Bonetail.png/revision/latest?cb=20110918025909&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Bonkers',
    first_appearance: 'Kirby\'s Adventure (1993)',
    quote: null,
    species: null,
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/ee/Kirby_Star_Allies_-_Character_artwork_09.png/revision/latest/scale-to-width-down/310?cb=20180111210350&path-prefix=en',
    description: 'Bonkers is a recurring mini-boss from the Kirby (series) Kirby (series). He is a wikipedia:Gorilla -troll looking creature that wears purple armor and wields a wooden mallet. He frequently appears as a mid-boss, though in Kirby Super Star and Kirby Super Star Ultra, as well as in promotional videos for Kirby (Wii), he is a Helper, following Kirby and defeating other enemies.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Booker',
    first_appearance: 'Animal Forest (2001)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/65/Booker_NL.png/revision/latest/scale-to-width-down/310?cb=20150415185032&path-prefix=en',
    description: 'Booker is a comedic bulldog found in the Animal Crossing (series). He, along with Copper, have been hired as police officers for the village, though while he means well, he\'s considerably a foolish character who gives in to almost anything. He\'s extremely apologetic, and doesn\'t quite explain clearly what he wants to. In Animal Crossing, he guards the village\'s lost and found, though he\'ll blatantly give away anything no matter how outrageous it seems. In Animal Crossing: Wild World and Animal Crossing: City Folk for the Nintendo DS and Wii, respectively, he and Copper guard the front gate, and once again he runs the lost and found, though will also explain, in some sort, what events will occur in your village. He can also appear in Animal Crossing: New Leaf if the Classic Police Station is built.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Boolossus',
    first_appearance: 'Luigi\'s Mansion (2001)',
    quote: '“Alright, Boos, let\'s assume our real form!”',
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/df/Luigi%27s_Mansion_-_Character_Artwork_-_Boolossus.png/revision/latest/scale-to-width-down/310?cb=20181022004254&path-prefix=en',
    description: 'Boolossus, the Jumbo Ghost, is an enormous Boo (Mario) and one of the Portrait Ghost in the game Luigi\'s Mansion (video game). He makes his appearance on the balcony. Luigi must face him as the third boss of the game.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Boom Boom',
    first_appearance: 'Super Mario Bros. 3 (1988)',
    quote: null,
    species: 'Boom Booms/Boom-Booms',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/65/SM3DL_BoomBoom.png/revision/latest/scale-to-width-down/310?cb=20180218180915&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Boomer',
    first_appearance: 'Super Mario RPG: Legend of the Seven Stars (1996)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/9f/Boomerrpg.jpg/revision/latest/scale-to-width-down/310?cb=20080909212451&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Boomer',
    first_appearance: 'Super Paper Mario (2007)',
    quote: null,
    species: 'Pixl',
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/dc/SPM_Boomer.png/revision/latest/scale-to-width-down/300?cb=20160506025430&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Booster',
    first_appearance: 'Super Mario RPG: Legend of the Seven Stars (1996)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/ad/Booster.png/revision/latest?cb=20121001000450&path-prefix=en',
    description: 'Booster is a character featured in Super Mario RPG: Legend of the Seven Stars. He\'s a large man with an odd beard, a constant, almost unchanging facial expression and a Viking hat. He resides in Booster Tower and is quite childish. His castle is one of the largest structures in the game, and thus Booster travels it via a toy train that he\'s created to go across the entire building.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Bootler',
    first_appearance: 'Paper Mario: The Thousand-Year Door (2004)',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/20/Bootler.png/revision/latest?cb=20080714143624&path-prefix=en',
    description: 'Bootler is a Boo butler who works for Lady Bow in Boo\'s Mansion during the events of Paper Mario. He also acts as her personal adviser. Bootler is very over-protective of Lady Bow, and initially opposes her joining Mario on his quest to defeat Tubba Blubba (and even then wishes to go along with her, though she does not acquiesce). This protection to his mistress makes him similar to Toadsworth.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Borville',
    first_appearance: 'The Legend of Zelda: Twilight Princess',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/af/Borville.png/revision/latest/scale-to-width-down/310?cb=20180329035757&path-prefix=en',
    description: 'Borville is the only doctor in Hyrule Castle Town in The Legend of Zelda: Twilight Princess. He refused to treat Prince Ralis, but treated Ilia. He owes Telma a lot of rupees.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Boshi',
    first_appearance: 'Super Mario RPG: Legend of the Seven Stars (1996)',
    quote: '“What\'re YOU lookin\' at? If you wanna challenge me, you have to bring Cookies!”',
    species: 'Yoshi',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/5a/Boshi.jpg/revision/latest/scale-to-width-down/310?cb=20090729191957&path-prefix=en',
    description: 'Boshi is a Blue Yoshi with an attitude, and the rival of Yoshi (character). Boshi is a loner and wears sunglasses and a spiked collar around his neck. In Japan, Boshi\'s name is Washi (i.e. "Bad Yoshi"), created by combining the word "Yoshi" with the Japanese word for bad, "Warui". As such, Boshi is to Yoshi as Wario is to Mario, or Waluigi is to Luigi. Boshi, like many other Yoshis, can only speak the Yoshi language. Yoshi is bilingual and translates Boshi to make Mario understand. He (along with many other Yoshis) lives on Yoshi\'s Island (location), home of the famous Mushroom Derby races. However, he speaks in a much deeper pitch compared to the other Yoshis.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Botwoon',
    first_appearance: 'Super Metroid (1994)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/60/Botwoon.jpg/revision/latest?cb=20071214142526&path-prefix=en',
    description: null,
    search_type: 'Metroid_characters'
  },
  {
    name: 'Boulderguist',
    first_appearance: 'Super Mario Galaxy (2007)',
    quote: null,
    species: null,
    creator: 'Nintendo EAD Tokyo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/df/Boulderguist.jpg/revision/latest?cb=20100904172612&path-prefix=en',
    description: 'Bouldergeist is a boss in Super Mario Galaxy. Mario faces it in the area known as the Ghostly Galaxy.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Bow',
    first_appearance: 'Paper Mario (2000)',
    quote: null,
    species: 'Boo',
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/c0/BowPaperMarioArt.png/revision/latest?cb=20120108010751&path-prefix=en',
    description: 'Bow is the princess of the Boo in Boo\'s Mansion. She will befriend Mario and join his party in the game Paper Mario. She can shield Mario by making him disappear in both battles and non-battles.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Bowser',
    first_appearance: 'Super Mario Bros. (1985)',
    quote: '“But... But I\'m Bowser! I\'m grade-A, 100% prime-cut final boss! I\'m going to take over the world any day by now! No way am I helping Mario! He\'s always trashing my awesome plans.”',
    species: 'Koopa',
    creator: 'Shigeru Miyamoto',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/59/MSOGT_Bowser_Discus.png/revision/latest/scale-to-width-down/310?cb=20190821191754&path-prefix=en',
    description: 'Bowser, Bowser Sr., or King Koopa, is the main antagonist of the Mario (series), and the archenemy of Mario. He is the most recognizable video game villain ever, having been in the original Super Mario Bros., and in most Mario games ever since. He frequently kidnaps Princess Peach, whom he has feelings for, in an attempt to rule the Mushroom Kingdom.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Bowser Jr.',
    first_appearance: 'Super Mario Sunshine (2002)',
    quote: '“Grrr! You guys won\'t be so cocky once I\'m through with you!”',
    species: 'Koopa',
    creator: 'Shigeru Miyamoto',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/10/Super_Smash_Bros._Ultimate_-_Character_Art_-_Bowser_Jr..png/revision/latest/scale-to-width-down/310?cb=20190710193124&path-prefix=en',
    description: 'Bowser Koopa Jr. is Bowser\'s favourite child, as well as the only biological one according to Miyamoto. He is the secondary antagonist of the series and a Mario (series) follower of his mighty father. He is heir to the Koopa throne. He made his most notable appearances in his first game, and New Super Mario Bros DS in which he is the main antagonist. Super Mario Sunshine',
    search_type: 'Mario_characters'
  },
  {
    name: 'Bowyer',
    first_appearance: 'Super Mario RPG: Legend of the Seven Stars (1996)',
    quote: null,
    species: null,
    creator: 'Squaresoft',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/5e/Bowyer.jpg/revision/latest?cb=20080909214025&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Box Boxer',
    first_appearance: 'Kirby & the Amazing Mirror',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/bb/Box_Boxer_Sticker.jpg/revision/latest?cb=20110307031348&path-prefix=en',
    description: null,
    search_type: 'Kirby_characters'
  },
  {
    name: 'Brewster',
    first_appearance: 'Animal Crossing: Wild World (2005)',
    quote: null,
    species: 'Columbidae',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/64/Brewster_NL.png/revision/latest/scale-to-width-down/310?cb=20150507203431&path-prefix=en',
    description: 'Brewster is a character from Animal Crossing: Wild World. He is the owner of The Roost, a café/coffee shop in which he sells cups of coffee for 200 Bell a piece. He is a very reserved pigeon, usually doesn\'t talk that often, though when the player refuses to drink the coffee right away, he continuously insists to drink it. As the player visits the Roost more and more, Brewster becomes more social toward them, and talks about why he opened a café there.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Brian',
    first_appearance: 'Mario Tennis (2000, GBC)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/47/MT_Brian.png/revision/latest?cb=20170917054222&path-prefix=en',
    description: 'Brian is a character in the Game Boy Color version of Mario Tennis (Game Boy Color). He is ranked 4th in Senior class of the Royal Academy. His in-game sprite depicts him as a Japanese adolescent with black hair wearing a green headband. He is an all-around and conservative player.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Brighton',
    first_appearance: 'Mario Party 6 (2004)',
    quote: '“I\'m Brighton, the incandescent dude of the daytime!”',
    species: null,
    creator: 'Hudson Soft',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/ca/Brighton.png/revision/latest/scale-to-width-down/310?cb=20150424024247&path-prefix=en',
    description: 'Brighton is a character who appears like a sun, who gets into a fight with the moon, Twila, in the game Mario Party 6. Brighton\'s name is a pun on "bright", owing to his resemblance to the sun. He was the one who started the feud by asking Twila, "Who\'s more impressive? You or me?" He refers himself to be "cooler" than Twila. Brighton also controls the board for three turns and switches off with Twila after the three turns are up. However, in Clockwork Castle, a player who lands on the Green Space at the top of the board has a 50/50 chance to change day to night instantly.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Brittany',
    first_appearance: 'Pikmin 3',
    quote: null,
    species: 'Koppaite',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/1c/Brittany.png/revision/latest?cb=20170127183510&path-prefix=en',
    description: 'Captain Brittany ​is one of the three leaders in Pikmin 3. She visits PNF-404, along with Captain Alph and her captain, Captain Charlie in search of food for the hungry planet of Koppai. She is a botanist, who is responsible of keeping track of the fruit found on the planet and juices produced by the crew. She is the first playable female character in the Pikmin (series).',
    search_type: 'Pikmin_characters'
  },
  {
    name: 'Broggy',
    first_appearance: 'Mario & Luigi: Bowser\'s Inside Story (2009)',
    quote: null,
    species: null,
    creator: 'AlphaDream',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/35/Broggy_BIS.png/revision/latest/scale-to-width-down/310?cb=20150708052654&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Broque Monsieur',
    first_appearance: 'Mario & Luigi: Bowser\'s Inside Story (2009)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/85/Broque_Monsieur_Art_%28Bowser%27s_Inside_Story%29.png/revision/latest/scale-to-width-down/310?cb=20120930175758&path-prefix=en',
    description: 'Broque Monsieur is a Brock character in Mario & Luigi: Bowser\'s Inside Story, Mario & Luigi: Dream Team, and Mario & Luigi: Bowser\'s Inside Story + Bowser Jr.\'s Journey. He speaks English with a thick French accent, and able to speak French itself, as well as Spanish. According to the Japanese official site, he is the Mushroom Kingdom\'s leading Block collector; he is also a collector of block-shaped kittens called Blitty. Broque Monsieur owns a block-shaped dog named Broggy, and manages a store where Bowser can shop at to get items and equipment. His name is a pun on the name "Brock" (or the word block) and wikipedia:Croque-monsieur, a French sandwich.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Bugzzy',
    first_appearance: 'Kirby\'s Adventure (1993)',
    quote: null,
    species: null,
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/05/Bugzzy.png/revision/latest/scale-to-width-down/310?cb=20110306053413&path-prefix=en',
    description: 'Bugzzy is a recurring mini boss in the Kirby (series). It is a large beetle monster that grabs foes in it\'s pincers and performs wrestling moves on them. Bugzzy either gives the Backdrop Kirby or Suplex Kirby ability depending on what game it is. In Kirby\'s Adventure and its remake it gave backdrop, in, Kirby Super Star its remake and Kirby Star Allies it gave Suplex.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Bulbie',
    first_appearance: 'Pikmin',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/1a/Bulbie.jpg/revision/latest?cb=20090724205107&path-prefix=en',
    description: 'Bulbie is a minor character in the Pikmin (series) Pikmin (series), first being mentioned in Pikmin (video game) on the Nintendo GameCube and later being more developed as a character in Pikmin 2. In the game, he is Captain Olimar\'s pet back on his home-planet, and it has thus been suggested that Olimar based the name of Bulborb, one of the most popular enemies in the game, after Bulbie (similar to how series creator Shigeru Miyamoto named the Pikmin (species) after his dog) due to their similar appearace. Not much is known about Bulbie, though Olimar\'s children often send letters describing their pet.',
    search_type: 'Pikmin_characters'
  },
  {
    name: 'Buliara',
    first_appearance: 'The Legend of Zelda: Breath of the Wild (2017)',
    quote: null,
    species: 'Gerudo',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/af/Buliara.jpg/revision/latest/scale-to-width-down/310?cb=20191008132145&path-prefix=en',
    description: 'Buliara is Makeela Riju\'s bodyguard and the captain of the guard in The Legend of Zelda: Breath of the Wild.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Butterfly',
    first_appearance: 'Kirby\'s Return to Dream Land',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b9/Butterfly_KSA.png/revision/latest/scale-to-width-down/310?cb=20180321102855&path-prefix=en',
    description: 'The Butterfly is a recurring character in the Kirby (series). Since Kirby\'s Return to Dream Land, the butterfly is often seen in opening or ending cutscenes of the main games of the series. The Butterfly became a way more important in Kirby Star Allies where it fuses with Galacta Knight to form Morpho Knight. Morpho Knight\'s description says that the Butterfly is seen as a "pure being".',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Buzz',
    first_appearance: 'Mario Golf: Advance Tour (2004)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/4e/Buzz.png/revision/latest?cb=20171108215523&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Byrne',
    first_appearance: 'The Legend of Zelda: Spirit Tracks',
    quote: null,
    species: 'Lokomo',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/46/Byrne.png/revision/latest/scale-to-width-down/288?cb=20170602234807&path-prefix=en',
    description: 'Byrne is a character in The Legend of Zelda: Spirit Tracks. He starts as the evil Chancelor Cole\'s assistant. He was once Anjean\'s student but left because he couldn\'t get power from the spirits. Later in the game he is betrayed by Chancelor Cole and helps the player defeat the final boss.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'C.J.',
    first_appearance: 'Animal Crossing: New Horizons',
    quote: null,
    species: 'Beaver',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/07/ACNH_CJ.png/revision/latest?cb=20200318005354&path-prefix=en',
    description: 'C.J. is a character in Animal Crossing: New Horizons. He takes the role that Chip had in the previous Animal Crossing (series) games. He runs the fishing tournaments on the player\'s island.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Cackletta',
    first_appearance: 'Mario & Luigi: Superstar Saga',
    quote: '“Hah! Hmph! Well, won\'t this be fun! Oh, yes! If that\'s how it is, I\'m ready for you! I\'m going to knock you all the way back to the Mushroom Kingdom!”',
    species: 'Beanish',
    creator: 'AlphaDream',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a6/Cackletta_Artwork_%28Superstar_Saga%29.png/revision/latest/scale-to-width-down/310?cb=20121002155351&path-prefix=en',
    description: 'Cackletta is a witch who made her debut appearance in Mario & Luigi: Superstar Saga for the Game Boy Advance and its remake Mario & Luigi: Superstar Saga + Bowser\'s Minions. She comes from the Beanbean Kingdom and has an assistant, Fawful. She stole Princess Peach\'s voice and plans to take over the Beanbean Kingdom.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Cappy',
    first_appearance: 'Super Mario Odyssey (2017)',
    quote: null,
    species: 'Bonneter',
    creator: 'Nintendo EPD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/1a/SMO_Cappy.png/revision/latest/scale-to-width-down/310?cb=20170613185827&path-prefix=en',
    description: 'Cappy is a major character in Super Mario Odyssey. He is Mario\'s main ally throughout the game, and assists him in various ways. Along with his little sister Tiara, Cappy is a Bonneter originally from the Cap Kingdom and joins Mario in order to rescue her after she is kidnapped by Bowser.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Captain A. Exeter',
    first_appearance: 'Metroid Prime 2: Echoes',
    quote: null,
    species: 'Human',
    creator: 'Retro Studios',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/3c/Ace.png/revision/latest/scale-to-width-down/310?cb=20121024223640&path-prefix=en',
    description: 'Captain A. Exeter was a character who appeared in Metroid Prime 2: Echoes for the Nintendo GameCube. He, along with his troopers, were killed by an Ing attack. During the attack he attempted to send a distress call, though it didn\'t make it through the magnetic fields of the planet.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Captain Alph',
    first_appearance: 'Pikmin 3',
    quote: null,
    species: 'Koppaite',
    creator: 'Shigeru Miyamoto',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/5d/SSBU_Alph.png/revision/latest/scale-to-width-down/310?cb=20180922035155&path-prefix=en',
    description: 'Captain Alph is a Koppaite in the Pikmin (series) Pikmin (series) and one of the three main characters of Pikmin 3. He in an engineer and his ship, the S.S. Drake was given to him by his grandfather. Alph is overall a positive and confident character who respects his captain, Captain Charlie, and see him as a role model. He was one of the three members of the expedition sent to recover edible matter from PNF-404 and save Koppai from starvation, the other two being Charlie himself and a biologist named Brittany.',
    search_type: 'Pikmin_characters'
  },
  {
    name: 'Captain Charlie',
    first_appearance: 'Pikmin 3',
    quote: null,
    species: 'Koppaite',
    creator: 'Shigeru Miyamoto',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/29/Captain_Charlie.jpg/revision/latest?cb=20141011002838&path-prefix=en',
    description: 'Captain Charlie is a Koppaite captain in the Pikmin (series) and one of the three main characters of Pikmin 3. He is the leader of the expedition tasked to harvest huge quantity of food on PNF-404 to save Koppai from starvation. As such, he is the superior of Alph and Brittany, the former even looks up to him as a role model.',
    search_type: 'Pikmin_characters'
  },
  {
    name: 'Captain Louie',
    first_appearance: 'Pikmin 2',
    quote: null,
    species: 'Hocotatian',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/5f/Louie2.jpg/revision/latest?cb=20110923004834&path-prefix=en',
    description: null,
    search_type: 'Pikmin_characters'
  },
  {
    name: 'Captain Olimar',
    first_appearance: 'Pikmin',
    quote: null,
    species: 'Hocotatian',
    creator: 'Shigeru Miyamoto',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/ef/Olimar_Cherry.png/revision/latest?cb=20170719040926&path-prefix=en',
    description: 'Captain Olimar is a tiny humanoid alien from the planet Hocotate who stars in the Pikmin (series). He was originally created by Shigeru Miyamoto.',
    search_type: 'Pikmin_characters'
  },
  {
    name: 'Captain Stitch',
    first_appearance: 'Kirby\'s Dream Land 2 (1995)',
    quote: null,
    species: 'Gordo',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/2b/Captain_Stitch.jpg/revision/latest?cb=20121015173511&path-prefix=en',
    description: 'Captain Stitch is a mini-boss that appears in Kirby\'s Dream Land 2 & Kirby\'s Dream Land 3. He is a large Gordo capable of shooting his spikes out to attack. Once defeated, Swallow Captain Stitch gives Kirby the Needle Kirby.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Captain Toad',
    first_appearance: 'Super Mario Galaxy (2007)',
    quote: '“Ready for Adventure”',
    species: 'Toad',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/7c/Captain_Toad.png/revision/latest/scale-to-width-down/310?cb=20180618155043&path-prefix=en',
    description: 'Captain Toad is the leader of the Toad Brigade. While he only took a supporting role in Super Mario Galaxy and Super Mario Galaxy 2, he has become a playable character in Super Mario 3D World and the protagonist in Captain Toad: Treasure Tracker.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Captain Vul',
    first_appearance: 'Kirby Super Star',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a9/Vul.jpg/revision/latest?cb=20110317012529&path-prefix=en',
    description: 'Captain Vul is a character from the Kirby (series). As of yet he has only appeared in Kirby Super Star and its Nintendo DS remake Kirby Super Star Ultra. In these games he appears in the mission titled Revenge of Meta Knight. He is an albatross that abandons the Halberd after Kirby starts to destroy it.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Carlo',
    first_appearance: 'Animal Crossing: Pocket Camp',
    quote: null,
    species: 'Bird',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/44/Animal_Crossing_-_Pocket_Camp_-_Character_Artwork_-_Carlo_01.png/revision/latest/scale-to-width-down/310?cb=20171025164944&path-prefix=en',
    description: '​Carlo ​is a character in Animal Crossing: Pocket Camp, co-operating OK Motors, alongside Beppe and Giovanni (Animal Crossing).',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Carock',
    first_appearance: 'Zelda II: The Adventure of Link',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b2/Carock.jpg/revision/latest?cb=20071214133414&path-prefix=en',
    description: null,
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Carrie',
    first_appearance: 'Super Paper Mario (2007)',
    quote: null,
    species: 'Pixl',
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e1/SPM_Carrie.png/revision/latest/scale-to-width-down/310?cb=20160519134650&path-prefix=en',
    description: 'Carrie is a pixl partner in Super Paper Mario and the sixth such Pixl found. As her name indicates, her special ability is to transform into a platform that can carry the character through hazardous areas too wide to jump or float across, giving her a role similar to Lakilester from the first game. She is shaped like the net of a rectangular prism.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Cat Peach',
    first_appearance: 'Super Mario 3D World',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/28/SM3DW_Cat_Princess_Peach.png/revision/latest/scale-to-width-down/310?cb=20140902213016&path-prefix=en',
    description: 'Cat Peach is a playable character in Mario Kart 8. She is available in the DLC pack along with Tanooki Mario and Link.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Celeste',
    first_appearance: 'Animal Crossing: Wild World (2005)',
    quote: null,
    species: 'Owl',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e0/Celeste_NL.png/revision/latest/scale-to-width-down/310?cb=20131105025312&path-prefix=en',
    description: null,
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Chad',
    first_appearance: 'Mario Tennis: Power Tour (2005)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/66/Chad_MTPT.png/revision/latest?cb=20170929050028&path-prefix=en',
    description: 'Chad ​is a playable character in the game Mario Tennis: Power Tour for the Game Boy Advance. He is one of the many opponents of Clay and Ace and is a power-type character. His doubles partner, Mason. Both of them are ranked third in the Junior Class. Initially, Chad is supportive of Mason\'s claims of having "phenom powers", but this changes when he meets Clay and Ace, who become his examples of true tennis "phenoms". Chad then tries to help Mason manage his ego.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Chakron',
    first_appearance: 'Mario & Luigi: Bowser\'s Inside Story (2009)',
    quote: null,
    species: null,
    creator: 'AlphaDream',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/18/Chakron.png/revision/latest/scale-to-width-down/268?cb=20120930163825&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Chan',
    first_appearance: 'Paper Mario (2000)',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/3c/Chan_Paper_Mario.png/revision/latest?cb=20110131002735&path-prefix=en',
    description: 'Chan is a student at the Toad Town Dojo and, along with Lee, a disciple of the The Master in Paper Mario. He is a Buzzy Beetle with a green shell and the easiest dojo resident to defeat. Chan can be fought only after Mario visits Eldstar on Shooting Star Summit. Chan\'s name is a reference to the martial artist turned movie star wikipedia:Jackie Chan. According to Goombario, Chan has deep admiration for the Master.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Chancellor',
    first_appearance: 'Super Mario RPG: Legend of the Seven Stars (1996)',
    quote: '“All we can do is wait here. Don\'t let us down.”',
    species: null,
    creator: 'Square',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/ee/Chancellorrpj.jpg/revision/latest?cb=20100930055112&path-prefix=en',
    description: 'The Chancellor is an advisor of Princess Peach. He is an older, green-spotted Toad (species) garbed in green with gold trim. During the events of Super Mario RPG: Legend of the Seven Stars, the Chancellor assumes the duties of Peach during her absence. He is also overprotective of the princess, and forbids her from joining Mario in his quest to defeat Smithy. His actions and appearance suggests that he is an earlier counterpart of Toadsworth.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Chancellor Cole',
    first_appearance: 'The Legend of Zelda: Spirit Tracks (2009)',
    quote: null,
    species: 'Demon',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b8/Cole.png/revision/latest/scale-to-width-down/310?cb=20091204185257&path-prefix=en',
    description: 'Chancellor Cole is the main antagonist of The Legend of Zelda: Spirit Tracks on the Nintendo DS. In the beginning of the game, he is the patriarch of Hyrule, though Princess Zelda expresses her suspicions about him early on. Under Chancellor Cole\'s two hats on his head are horns marking his appartenance to the Demon Tribe',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Charlie',
    first_appearance: 'Mario Golf (1999, N64)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/64/Charlie_Mario_Golf.png/revision/latest?cb=20171026184547&path-prefix=en',
    description: '​Charlie ​is a golfer in Mario Golf (Nintendo 64) for the Nintendo 64. Wind does not affect his drives as much as any other player. Charlie wears a yellow shirt, a pair of jeans, and brown shoes. He appears to be a teenager who is possibly trying to become a great golfer (similar to Plum). He is also a starting character along with Princess Peach, Plum, and Baby Mario.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Chas',
    first_appearance: 'Mario Tennis: Power Tour (2005)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/41/MTPT_Chas.png/revision/latest?cb=20171016013947&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Chauncey',
    first_appearance: 'Luigi\'s Mansion (2001)',
    quote: '“I just wanted to play with you i HATE grown-ups........small now grow smaller! small! itsy! tiny! little! wee! ga ga goo goo GA!”',
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/4b/Luigi%27s_Mansion_-_Character_Artwork_-_Chauncey.png/revision/latest/scale-to-width-down/310?cb=20181022004254&path-prefix=en',
    description: 'Chauncey, the Spoiled Baby is one of the Portrait Ghost that Luigi meets in Luigi\'s Mansion (video game). He also serves as the boss of Area 1. Chauncey is the son of Neville and Lydia and the younger brother of both Henry and Orville. Because he is an infant, Chauncey is immature and prone to throwing tantrums, although he is also capable of coherent speech. He is the youngest Portrait Ghost and the only area boss with a given age. He occasionally shows aversion to adults. His father Neville notes in his baby care diary that Chauncey is talented at scaring people, even surpassing his older brothers.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Cheepskipper',
    first_appearance: 'New Super Mario Bros.',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/5b/Cheepskipper_Battle_-_New_Super_Mario_Bros.png/revision/latest?cb=20120616121950&path-prefix=en',
    description: 'Cheepskipper is a character in the Mario series who appears in New Super Mario Bros. as the main boss in World 3 (New Super Mario Bros.). In the game, he would jump out of the water and try to attack the plumbers, as well as sending out Cheep-Cheep to attack Mario and Luigi as well. To defeat him, Mario or Luigi would have to jump on him multiple times, or throw fireballs at him.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Chef Kawasaki',
    first_appearance: 'Kirby Super Star (1996)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/1a/Chef_Kawasaki.png/revision/latest/scale-to-width-down/310?cb=20160920064247&path-prefix=en',
    description: 'Chef Kawasaki is a recurring character in the Kirby (series). He is an expert chef who specializes in cooking attacks. He debuted in the game Kirby Super Star as a miniboss. When defeated, he is the only source to gain the Cook Kirby ability other than mixing two abilities.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Chet Rippo',
    first_appearance: 'Paper Mario (2000)',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/8c/Chetrippo.gif/revision/latest?cb=20100904030902&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Chilly',
    first_appearance: 'Kirby\'s Adventure (1993)',
    quote: null,
    species: null,
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/8a/KSA_Chilly.png/revision/latest?cb=20180614152731&path-prefix=en',
    description: 'Chilly is a recurring enemy in the Kirby (series). It is a small snowman wearing an upside down bucket like a fez. Chilly slides around the stage and can create an icy aura that will freeze Kirby should he get too close to it. When Kirby inhales Chilly he gets Ice Kirby or Freeze Kirby ability depending on the game. Chilly is a playable character as the Helper for Ice Kirby in certain games.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Chip',
    first_appearance: 'Animal Forest (2001)',
    quote: null,
    species: 'Beaver',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/ed/Chip_NL.png/revision/latest/scale-to-width-down/310?cb=20150415174522&path-prefix=en',
    description: 'Chip is a beaver from the Animal Crossing (series). He first appeared in Animal Crossing during the Fishing Tourney where he would reward the player who caught the biggest bass. Tortimer took his place in the Nintendo DS game Animal Crossing: Wild World, though in Animal Crossing: City Folk for the Wii he made his triumphant return with a slightly new appearance.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Chris',
    first_appearance: 'Mario Tennis: Power Tour (2005)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/85/MTPT_Chris.png/revision/latest/scale-to-width-down/262?cb=20171016014716&path-prefix=en',
    description: 'Chris ​ is a character from Mario Tennis: Power Tour. He holds the first rank in Junior Class singles and in the Junior Class Doubles at the Academy. He is a speedy-type character and his doubles partner is Kyle (Mario Tennis). He confides that he\'s intimidated by senior play but eventually decides to join the seniors when he loses his first place rank and is reminded that first place juniors are seniors, too. Oddly enough, he is never seen on the senior court.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Chuchu',
    first_appearance: 'Kirby\'s Dream Land 3 (1997)',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/91/Chuchu.png/revision/latest?cb=20110211184049&path-prefix=en',
    description: '',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Chuck Quizmo',
    first_appearance: 'Paper Mario (2000)',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/dd/Chuck.gif/revision/latest?cb=20071214123629&path-prefix=en',
    description: 'Chuck Quizmo is a character who appeared in the Nintendo 64 game Paper Mario. A multi-colored worm wearing a yellow bow tie and a top hat, Chuck Quizmo hosts a quiz game which Mario can participate in to receive Star Piece. His name may be a reference to the game show host wikipedia:Chuck Woolery.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Cia',
    first_appearance: 'Hyrule Warriors (2014)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/8e/Hyrule_Warriors_Cia_Art.png/revision/latest/scale-to-width-down/263?cb=20140610201159&path-prefix=en',
    description: 'Cia is a character in The Legend of Zelda (series). She is the central antagonist of, Hyrule Warriors and a supporting character in Hyrule Warriors Legends. She has the help of her companions, Volga and Wizzro. She was originally a witch who was tasked with keeping the balance of the Triforce until jealousy got to her and she was corrupted by Ganondorf leading her to split into two being Cia and Lana (Hyrule Warriors). She appears to die once defeated and brought back to reason but it is revealed in Hyrule Warriors Legends and Hyrule Warriors: Definitive Edition that the heroes were able to bring her back to life and fight alongside her against Phantom Ganon in the last part of the story.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Ciela',
    first_appearance: 'The Legend of Zelda: Phantom Hourglass',
    quote: null,
    species: 'Fairy (Spirit)',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/c3/Ciela.png/revision/latest/scale-to-width-down/310?cb=20151025154832&path-prefix=en',
    description: 'Ciela the fairy who discovers Link at the beginning of The Legend of Zelda: Phantom Hourglass, when he is washed ashore after trying to save his friend Tetra from the clutches of the mysterious Ghost Ship. She is a brave fairy who has been in the care of Oshus since she washed ashore and lost her memories. Later in the game, we discover that Ciela is really the Spirit of Courage, who split herself in two to save herself from being sealed by Bellum, like the Spirits of Power and Wisdom were, thus losing her memories. When she bonds with the clone, she becomes whole, and regains her powers and memories.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Clawgrip',
    first_appearance: 'Super Mario Bros. 2 (1988)',
    quote: '“Arr... You\'ll make a tasty treat!”',
    species: 'Crab',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/84/Clawgrip_Artwork_%28Super_Mario_Bros._2%29.png/revision/latest/scale-to-width-down/310?cb=20121202205820&path-prefix=en',
    description: 'Clawgrip ( Clawglip in the cast roll of most versions) is a boss from Super Mario Bros. 2 (USA).',
    search_type: 'Mario_characters'
  },
  {
    name: 'Clay',
    first_appearance: 'Mario Tennis: Power Tour (2005)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/42/Clay.jpg/revision/latest?cb=20110105185142&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Cleftor',
    first_appearance: 'Paper Mario: The Thousand-Year Door (2004)',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/45/Cleftor.png/revision/latest?cb=20170613025354&path-prefix=en',
    description: 'Cleftor is a Hyper Bald Cleft who fights in the Glitz Pit in Paper Mario: The Thousand-Year Door. He is a member of the Punk Rocks, also known as the "Green Torture Squad," in the minor league division. Initially, Cleftor shows little respect for Mario. After Mario defeats him, Cleftor begins to respect the mustached warrior. Also, according to Goombella, he is a nice guy at heart, but dislikes Mario\'s mustache. Cleftor appears to like King K, as Master Crash claimed to have found him crying in a locker when King K vanished despite Cleftor\'s denial.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Clockwork Soldiers',
    first_appearance: 'Luigi\'s Mansion (2001)',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/99/Clockworksoldiers.png/revision/latest?cb=20110212142137&path-prefix=en',
    description: 'The Clockwork Soldiers, the Toy Platoon are a green, blue, and pink trio of Portrait Ghosts from Luigi\'s Mansion (video game). They are a bunch of mechanical wind-up toys. Their portrait number in Professor Elvin Gadd\'s gallery is 15. The Clockwork Soldiers, along with Henry and Orville, are the only portrait ghosts in the game that are fought in a group, excluding Floating Whirlindas, since they are both vacuumed up together at once. Altogether, the Clockwork Soldiers have 300 HP combined, thus making them have the second highest HP (as a portrait ghost) in the game, after King Boo, who has 500 HP.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Co-Star Luma',
    first_appearance: 'Super Mario Galaxy 2 (2010)',
    quote: null,
    species: null,
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/00/Spinning_Co-Star_Luma.jpg/revision/latest?cb=20110308015929&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Colin',
    first_appearance: 'The Legend of Zelda: Twilight Princess (2006)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/5c/TP_Colin.png/revision/latest/scale-to-width-down/163?cb=20170911143358&path-prefix=en',
    description: 'Colin is a character from the The Legend of Zelda: Twilight Princess on the Wii and Nintendo GameCube. He is a young boy from Ordon Village who looks up to and respects Link and Ilia. He is a nice kid who happens to be teased by most of the other kids around the village other than the two aforementioned young adults.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Commander Shroob',
    first_appearance: 'Mario & Luigi: Partners in Time (2005)',
    quote: null,
    species: 'Shroob',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/8f/Commander_Shroob.gif/revision/latest?cb=20120928011059&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Coo',
    first_appearance: 'Kirby\'s Dream Land 2 (1995)',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/93/Coo1.png/revision/latest?cb=20180310022359&path-prefix=en',
    description: 'Coo the Owl is one of Kirby\'s allies in the Kirby (series). Coo first appeared in Kirby\'s Dream Land 2 with Rick and Kine. Coo appears as an owl and is one of Kirby\'s animal friends.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Copper',
    first_appearance: 'Animal Forest (2001)',
    quote: null,
    species: 'Dog',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/35/Copper_NL.png/revision/latest/scale-to-width-down/252?cb=20150415192706&path-prefix=en',
    description: 'Copper is a character from the Animal Crossing (series). He is a guard dog along with his working partner, Booker. His name comes from the slang term "Copper", meaning "policeman". In all games, Copper\'s professional attitude contrasts with Booker\'s nervous attitude. In Animal Crossing: New Leaf, he once again can be found alongside his companion Booker. They, like many characters, can not be found at the start of the game. If the Modern Police Station is built, he will appear in the game, and can be asked about lost items and whether any visitors can be found in the village.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Cornimer',
    first_appearance: 'Animal Crossing: Wild World (2005)',
    quote: null,
    species: 'Tortoise',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/71/Cornimer.png/revision/latest?cb=20191118223007&path-prefix=en',
    description: 'Cornimer is a tortoise from the Animal Crossing (series) Animal Crossing (series). He only comes out during the Acorn Festival in Animal Crossing: Wild World, and gives the player mushroom furniture, walls, and floors in exchange for acorns.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Corporal Paraplonk',
    first_appearance: 'Mario & Luigi: Bowser\'s Inside Story (2009)',
    quote: null,
    species: 'Koopa',
    creator: 'AlphaDream',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/c0/CorporalParaplonk.png/revision/latest/scale-to-width-down/310?cb=20200228123241&path-prefix=en',
    description: 'Corporal Paraplonk is a red-shelled Koopa Paratroopa who wears green shoes and a red bucket on his head. He is one of Bowser\'s minions in Mario & Luigi: Bowser\'s Inside Story, Mario & Luigi: Dream Team and Mario & Luigi: Superstar Saga + Bowser\'s Minions. He is usually seen in the company of Private Goomp and Sergeant Guy. In Mario & Luigi: Dream Team, it is revealed that the trio dream of one day bossing around Kamek and Bowser.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Cosmic Mario',
    first_appearance: 'Super Mario Galaxy (2007)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/61/Cosmic_Mario.png/revision/latest?cb=20120609194129&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Count Bleck',
    first_appearance: 'Super Paper Mario (2007)',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/be/Count_Bleck_Artwork_-_Super_Paper_Mario.png/revision/latest/scale-to-width-down/310?cb=20120602202950&path-prefix=en',
    description: 'Count Bleck (actual name), known as Count Noir ("noir" meaning "black" in French) in the Japan version, is the central antagonist-turned-anti-hero of Super Paper Mario. He is the last member of the\'dark tribe\', and was a crazed being bent on using the Dark Prognosticus to destroy all existence, with his minions Nastasia, O\'Chunks, Mimi, and Dimentio. He failed in his quest because his love, Tippi (or Lady Timpani) left and was no where to be found.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Coursebot',
    first_appearance: 'Super Mario Maker (2015)',
    quote: null,
    species: 'Robot',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/55/Coursebot_Icon.png/revision/latest?cb=20190702043057&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Crazy Hand',
    first_appearance: 'Super Smash Bros. Melee (2001)',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/3e/Crazy_Hand.jpg/revision/latest/scale-to-width-down/310?cb=20120809165218&path-prefix=en',
    description: null,
    search_type: 'Kirby_characters'
  },
  {
    name: 'Croco',
    first_appearance: 'Super Mario RPG: Legend of the Seven Stars (1995)',
    quote: null,
    species: null,
    creator: 'Square Enix',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/49/Croco.gif/revision/latest?cb=20071214123716&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Cudge',
    first_appearance: 'Super Paper Mario (2007)',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e2/SPM_Cudge.png/revision/latest/scale-to-width-down/310?cb=20170106232417&path-prefix=en',
    description: '',
    search_type: 'Mario_characters'
  },
  {
    name: 'Curt',
    first_appearance: 'Mario Tennis (2000, Game Boy Color)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/aa/MT_Curt.png/revision/latest?cb=20170917055145&path-prefix=en',
    description: 'Curt is a character in the Game Boy Color version of Mario Tennis. He is a tricky player with good control and power, but low speed. Curt belongs to the third rank of Junior division until the player defeats him. In Junior doubles, he is paired with Bob and belongs to the highest rank. In Senior doubles, he is paired with Beth (Mario Tennis) and belongs to the lowest rank of the Senior class.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Cyrus',
    first_appearance: 'Animal Crossing: New Leaf (2012)',
    quote: null,
    species: 'Alpaca',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/76/Cyrus_NL.png/revision/latest/scale-to-width-down/280?cb=20150530184530&path-prefix=en',
    description: 'Cyrus is an alpaca character who appears in the Animal Crossing (series), first introduced in Animal Crossing: New Leaf. He is an alpaca who works at Re-Tail with Reese, his wife. He is the upholsterer and is in charge of altering furniture, however his services are not accessible until certain conditions are met. He starts the game sleeping, however, in order to wake him up, 100,000 bells worth of items must have been sold to Reese, 50 pieces of furniture must have been cataloged, 10 pieces of clothing must have been cataloged and the player must have played for at least seven days.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Czar Dragon',
    first_appearance: 'Super Mario RPG: Legend of the Seven Stars (1996)',
    quote: null,
    species: null,
    creator: 'Square Enix',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/0d/Czar_Dragon_Sprite_%28Super_Mario_RPG%29.png/revision/latest?cb=20120930202714&path-prefix=en',
    description: 'The Czar Dragon is the dragon made out of many Pyrosphere and the boss of the Barrel Volcano, who is guarding the sixth Star Piece in Super Mario RPG: Legend of the Seven Stars. The dragon first appears when a group of Pyrospheres join together to form it, and it immediately attacks the party. The dragon is physically strong and uses a small variety of powerful magic, most notable of them Flame Wall. It will also summon Helio to kamikaze-strike the party, similar to Punchinello. In the end the dragon falls, but promptly rises from the grave as Zombone. Mario and friends must fight an even more difficult battle, but prevail and acquire the Star Piece, only to have it snatched by the Axem Rangers.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Daisy Mae',
    first_appearance: 'Animal Crossing: New Horizons',
    quote: null,
    species: 'Boar',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/85/Daisy_Mae.png/revision/latest?cb=20200318005116&path-prefix=en',
    description: 'Daisy Mae is a character in Animal Crossing: New Horizons. She is a boar who takes on the role Joan had in previous Animal Crossing (series) games, selling turnips to players.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Dangoro',
    first_appearance: 'The Legend of Zelda: Twilight Princess (2006)',
    quote: '“Woah.. Human?! What business does a human have coming here?! None! No business! This is a forbidden place! I will protect the treasure from you!”',
    species: 'Goron',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/74/Dangoro.png/revision/latest/scale-to-width-down/310?cb=20151108202552&path-prefix=en',
    description: 'Dangoro is the mini-boss of the Goron Mines, the second dungeon in The Legend of Zelda: Twilight Princess for Wii and Nintendo GameCube. Dangoro is the Goron in charge of protecting the Hero\'s Bow.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Dark Bowser',
    first_appearance: 'Mario & Luigi: Bowser\'s Inside Story',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/96/Dark_Bowser.gif/revision/latest?cb=20100212144702&path-prefix=en',
    description: 'Dark Bowser is a character from Mario & Luigi: Bowser\'s Inside Story. He acts as the game\'s final boss. His true form is the Dark Star (Mario).',
    search_type: 'Mario_characters'
  },
  {
    name: 'Dark Crafter',
    first_appearance: 'Kirby and the Rainbow Curse (2015)',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/9f/Dark_Crafter.png/revision/latest/scale-to-width-down/310?cb=20150221184323&path-prefix=en',
    description: 'Dark Crafter is the final boss of Kirby and the Rainbow Curse, starting after beating Claycia in Purple Fortress. He is the game\'s true antagonist, having possessed Claycia when she started wearing the glasses he resided in.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Dark Link',
    first_appearance: 'Zelda II: The Adventure of Link',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/1e/HW_Dark_Link.png/revision/latest/scale-to-width-down/265?cb=20180823023354&path-prefix=en',
    description: 'Dark Link is a dark clone of Link generally created by shadow magic. They are usually used by another antagonist to outmatch Link as they are a reflection of the Hero himself. They are different from Shadow Link who appear to either be guardians or the manifestation of Ganondorf\'s resentment. The relationship between the two shadowy versions of Link is pure speculation and nothing official has ever been said about it.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Dark Meta Knight',
    first_appearance: 'Kirby & the Amazing Mirror',
    quote: '“He\'s back! The shadow of the strongest warrior! Sealed in the labyrinth of the Mirror for aeons, this dark knight has returned with one thing on his mind... REVENGE!”',
    species: null,
    creator: 'Flagship,HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/9f/DMK_ArtworkKSA.png/revision/latest/scale-to-width-down/310?cb=20190124030751&path-prefix=en',
    description: 'Dark Meta Knight is the Mirror World version of Meta Knight. He was the secondary antagonist in Kirby & the Amazing Mirror, with Dark Mind being the first. He later reappear as the driving force behind Queen Sectonia\'s madness in Kirby: Triple Deluxe and as a playable character in Kirby Star Allies.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Dark Mind',
    first_appearance: 'Kirby and the Amazing Mirror (2004)',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/88/DarkMind.jpg/revision/latest?cb=20110112114948&path-prefix=en',
    description: 'Dark Mind is an evil deity who is the final boss of Kirby and the Amazing Mirror. He wants to conquer the Mirror World and when Meta Knight realizes that it will threaten Dream Land, he tries to put a stop to it. At the end of the game, Dark Mind reveals his face. Kirby fights him using Meta Knight\'s sword.In Team Kirby Clash Deluxe an entity named King D-Mind is implied to be Shadow Dedede possessed by Dark Mind, but it is never said clearly if it is truely the case.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Dark Samus',
    first_appearance: 'Metroid Prime',
    quote: null,
    species: 'MetroidHuman/Chozo hybrid (due to Samus\' DNA)',
    creator: 'Retro Studios',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a6/Dark_Samus_SSBU.png/revision/latest/scale-to-width-down/310?cb=20180808184257&path-prefix=en',
    description: null,
    search_type: 'Metroid_characters'
  },
  {
    name: 'Dark Taranza',
    first_appearance: 'Team Kirby Clash Deluxe',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/dd/Dark_Taranza_%28Team_Kirby_Clash%29.png/revision/latest?cb=20170914175706&path-prefix=en',
    description: 'Dark Taranza is a character from Team Kirby Clash Deluxe in which he act as the first phase of the final boss, and the main antagonist. He is a counterpart from the Mirror World to Taranza and one of King D-Mind\'s servant.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Darmani',
    first_appearance: 'The Legend of Zelda: Majora\'s Mask (1998)',
    quote: '“I leave my undying feelings with you... The deeds I accomplished while living are carved on my grave. You should read it. For the Goron Village... I have asked your assistance...”',
    species: 'Goron',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/52/Darmani.png/revision/latest?cb=20170131201840&path-prefix=en',
    description: 'Darmani ​is a character in The Legend of Zelda: Majora\'s Mask.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Daroach',
    first_appearance: 'Kirby: Squeak Squad',
    quote: null,
    species: null,
    creator: 'Flagship',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/32/Daroach_ksa.png/revision/latest/scale-to-width-down/310?cb=20180707004914&path-prefix=en',
    description: 'Daroach ( Dorocche in the Japanese version) is the leader of The Squeaks and acts as the main villain of Kirby: Squeak Squad. He is shown wearing a red hat and cape and often carries the triple star in his hand.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Daruk',
    first_appearance: 'The Legend of Zelda: Breath of the Wild',
    quote: null,
    species: 'Goron',
    creator: 'Nintendo EAD3',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/66/Daruk_Artwork_%28Breath_of_the_Wild%29.png/revision/latest/scale-to-width-down/310?cb=20170413201940&path-prefix=en',
    description: null,
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Dash Bowman',
    first_appearance: 'Star Fox Command (2006)',
    quote: null,
    species: null,
    creator: 'Takaya Imamura',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/20/Dash.jpg/revision/latest?cb=20071214143736&path-prefix=en',
    description: 'Dash Bowman is a character in the Star Fox (series) who made his debut in Star Fox Command. He is a grandson of Andross, and even though his grandfather is an enemy of the Star Fox (team), Dash wants to be part of it and helps them out in the battle of the Anglar Army.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Dashell',
    first_appearance: 'Super Paper Mario (2007)',
    quote: null,
    species: 'Pixl',
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/84/SPM_Dashell.png/revision/latest/scale-to-width-down/310?cb=20160709012031&path-prefix=en',
    description: 'Dashell is a one of the Pixls in the game Super Paper Mario. He gives the team a great boost in speed, and his name itself comes from the word "dash". He is unlocked after defeating Wracktail in the Flipside Pit of 100 Trials, and his Catch Card is found on the tenth floor of the Flopside Pit of 100 Trials. Dashell thinks fighting is useless and revealed that when he gets in a fight, he flees. According to his tattle, Dashell believes that "Life is a sprint, not a marathon". When he causes his user to dash, he flashes red.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Dead Hand',
    first_appearance: 'The Legend of Zelda: Ocarina of Time',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/02/DeadHand.jpg/revision/latest?cb=20081104185610&path-prefix=en',
    description: 'Dead Hand is an undead monster that appears as a mini-boss in The Legend of Zelda: Ocarina of Time\'s well in Kakariko Village and Shadow Temple. It\'s unknown if he served Ganondorf, but if this is the case or not Link will still be required to defeat it in order to get the Lens of Truth and Hover Boots depending on where you battle it. It should also be noted that in the Master Quest version of the game, there are even more Dead Hands you\'ll have to beat.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Death Sword',
    first_appearance: 'The Legend of Zelda: Twilight Princess',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/0c/DeathSword.jpg/revision/latest/scale-to-width-down/310?cb=20080107214209&path-prefix=en',
    description: 'Death Sword is an enemy boss from the Wii and GameCube video game The Legend of Zelda: Twilight Princess. He\'s a mini-boss, though nevertheless a notable one. This ghostly apparition wields a mighty and potent sword that can easily strike the hero of the game, Link, down.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Deku Butler',
    first_appearance: 'The Legend of Zelda: Majora\'s Mask',
    quote: null,
    species: 'Deku Scrub',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/8f/Deku_Butler.png/revision/latest/scale-to-width-down/310?cb=20190518155551&path-prefix=en',
    description: 'Upon the request of the Deku King, the Deku Butler rewards Link for saving the Deku Princess by leading him through a labyrinth to the Mask of Scents in The Legend of Zelda: Majora\'s Mask for the Nintendo 64. During the end credits, if you have this mask you receive an extra segment which shows the Deku Butler mourning at a small twisted tree from the start of the game.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Deku King',
    first_appearance: 'The Legend of Zelda: Majora\'s Mask (2000)',
    quote: null,
    species: 'Deku',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/7a/MM_DekuKing.png/revision/latest/scale-to-width-down/310?cb=20151007134239&path-prefix=en',
    description: 'The Deku King is the rash, overreactive, and overprotective monarch of the Southern Swamp in Termina in The Legend of Zelda: Majora\'s Mask for the Nintendo 64. When his daughter - the Deku Princess - went missing, the Deku King captured a monkey who had associated with his daughter and imprisons and tortures him. After Link rescues the Deku Princess from Woodfall Temple, the King realizes his mistake and releases the prisoner monkey. In the manga, instead of accusing the monkey, he rounded up random creatures such as Wolfos and Snappers, blaming them for the missing princess.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Deku Scrub',
    first_appearance: 'The Legend of Zelda: Ocarina of Time (1998)',
    quote: null,
    species: null,
    creator: 'Eiji Aonuma, Yoshiaki Koizumi, Toru Osawa, Yoichi Yamada',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/c2/Deku_Scrub_%28Ocarina_of_Time%29.png/revision/latest?cb=20101005213922&path-prefix=en',
    description: 'Deku Scrubs are a species in The Legend of Zelda (series), debuting in The Legend of Zelda: Ocarina of Time. They are one of the few Zelda creatures to appear both as enemy monsters and as a neutral NPC race. Deku Scrubs are a dryad or spriggan-like race of plant people that live in the forests and disguise themselves as bushes in order to surprise unwary travelers. Like the Snifit from the Mario (series), they shoot at the player. However, when cornered they will surrender, after which they will sometimes offer to sell something or provide secrets. In The Legend of Zelda: Majora\'s Mask, Link is turned into a Deku Scrub at the start of the game, becoming Deku Link. Later on in the Southern Swamp he comes across an entire society of Deku Scrubs led by the Deku King. Deku Scrubs are able to hover for awhile using the leaves sprouting out of their heads as a propeller. They live in Deku Pod and use them to launch themselves into the air. They fire Deku Nut.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Demise',
    first_appearance: 'The Legend of Zelda: Skyward Sword',
    quote: null,
    species: 'Demon',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a3/SS_The_Imprisoned.png/revision/latest/scale-to-width-down/310?cb=20180824013546&path-prefix=en',
    description: 'Demise, (also known as The Imprisoned in his sealed form), is the eponymous demon king of The Legend of Zelda (series). He is the master of Demon Lord Ghirahim, and also the primal god of all evil in the entire Legend of Zelda universe. He would in later games be reincarnated as Ganondorf, and seek out to get the Triforce and conquer the world. He serves as the true main antagonist, and final boss of The Legend of Zelda: Skyward Sword.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Diddy Kong',
    first_appearance: 'Donkey Kong Country (1994)',
    quote: null,
    species: 'Kong',
    creator: 'Rare',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d7/Super_Smash_Bros._Ultimate_-_Character_Art_-_Diddy_Kong.png/revision/latest/scale-to-width-down/310?cb=20180613030504&path-prefix=en',
    description: 'Diddy Kong (ディディーコング, Diidī Kongu) is Donkey Kong (character) friend, nephew, and side kick who first appeared in the game Donkey Kong Country for the Super Nintendo Entertainment System. He wears a red hat with the Nintendo logo on it and a red shirt with bright yellow stars on it.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Digby',
    first_appearance: 'Animal Crossing: New Leaf (2012)',
    quote: '“My! My! Welcome!”',
    species: 'Dog',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/f2/Digby_NL.png/revision/latest/scale-to-width-down/298?cb=20151029211916&path-prefix=en',
    description: 'is an Animal Crossing (series) character introduced in Animal Crossing: New Leaf. He also appears in Animal Crossing: Happy Home Designer and Animal Crossing: Amiibo Festival. He is an employee of Nook\'s Homes, operating the Happy Home Showcase. He is the twin brother of Isabelle, who he shares the birthday of December 20th with.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Dimentio',
    first_appearance: 'Super Paper Mario (2007)',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/44/Dimentio_%28Super_Paper_Mario%29.png/revision/latest/scale-to-width-down/310?cb=20121202155722&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Dimitri',
    first_appearance: 'The Legend of Zelda: Oracle of Ages/Seasons',
    quote: null,
    species: 'Dodongo',
    creator: 'CapcomFlagship',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/5d/Dimitri.png/revision/latest?cb=20170709193054&path-prefix=en',
    description: 'Dimitri ​is a character from The Legend of Zelda: Oracle of Ages and The Legend of Zelda: Oracle of Seasons. He is a Dodongo with the power of swimming, allowing Link to cross deep water when riding him. He can also be picked up with the Power Bracelet. Oddly, he does not seem to have the power to breathe fire, unlike other members of his species. He is also a docile Dodongo with a friendly disposition, and keeps his horn blunted to uphold his pacifistic nature. He can be summoned with Dimitri\'s Flute.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Din',
    first_appearance: 'The Legend of Zelda: A Link to the Past',
    quote: null,
    species: 'Gods',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/6f/Din_WW.png/revision/latest?cb=20180414055530&path-prefix=en',
    description: 'Din is one of the three Goddesses that created the land of Hyrule in The Legend of Zelda (series), along with her sisters Farore and Nayru. She is the Goddess of Power, and using her "strong flaming arms", she "cultivated the land and created the red earth", thus forming the very bedrock that Hyrule sits upon.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Din',
    first_appearance: 'The Legend of Zelda: Oracle of Seasons',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/83/DinOoS.jpg/revision/latest/scale-to-width-down/310?cb=20080609171401&path-prefix=en',
    description: 'Din is a character in The Legend of Zelda series. She is named after Din (Goddess of Power), the goddess of power. She first appeared in the Game Boy Color game The Legend of Zelda: Oracle of Ages and The Legend of Zelda: Oracle of Seasons where she mostly lived in Holodrum. If she was alive, the seasons in the game would flow normally. Din also appeared in the Game Boy Advance video game The Legend of Zelda: Minish Cap.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Dino Piranha',
    first_appearance: 'Super Mario Galaxy (2007)',
    quote: null,
    species: 'Piranha Plant',
    creator: 'Nintendo EAD Tokyo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/89/DinoPiranha.png/revision/latest?cb=20110117001624&path-prefix=en',
    description: 'Dino Piranha is a large boss in Super Mario Galaxy. He resides in the Good Egg Galaxy. He is found inside an Egg when Mario first encounters him. The top of his egg becomes cracked when Mario crashes into him after being shot from a Launch Star on the preceding planet, thereby exposing his tail. Dino Piranha then begins moving slowly around the planetoid from inside the egg, and when Mario spins the large ball on the end of his tail, the shell breaks, revealing Dino Piranha, initiating the battle.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Dinolfos',
    first_appearance: 'The Legend of Zelda: Ocarina of Time (1998)',
    quote: null,
    species: null,
    creator: 'Eiji Aonuma, Yoshiaki Koizumi, Toru Osawa, Yoichi Yamada',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/7a/Dinolfos_TP.png/revision/latest?cb=20100901034538&path-prefix=en',
    description: 'Dinolfos, called Dynalfos (ダイナフォス) in the Japanese versions and in The Legend of Zelda: Twilight Princess, are a species of lizard-like warriors originally found in The Legend of Zelda: Ocarina of Time that can be considered a mini boss of Ganon\'s Tower. In the stage, you\'ll find a group of two of them near the end of the game. They\'re similar in appearance and tactics to Lizalfos, though they\'re much stronger and harder to defeat. After you defeat the two of them, they can defeat another group in the Gerudo Training Ground. It has been speculated that the Dynalfos from The Legend of Zelda: Twilight Princess may be the same creature.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Direct-i',
    first_appearance: 'Star Fox Zero',
    quote: null,
    species: 'Robot',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d7/Direct_I.png/revision/latest/scale-to-width-down/297?cb=20190928225534&path-prefix=en',
    description: 'Direct-i is a robot in Star Fox Zero. He is stationed on the Gyrowing.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Director Morty',
    first_appearance: 'Luigi\'s Mansion 3 (2019)',
    quote: null,
    species: 'Ghost',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e6/Director_Morty.jpg/revision/latest/scale-to-width-down/310?cb=20191230232709&path-prefix=en',
    description: 'Director Morty is a movie director ghost and the eighth boss encountered in Luigi\'s Mansion 3. He holds the ninth elevator button in his possession. Unlike the other bosses, Morty does not need to be captured due to being the only friendly one, and is never directly fought prior to obtaining the elevator button from him. He instead has Luigi fight against various elements as part of a filming project.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Dixie Kong',
    first_appearance: 'Donkey Kong Country 2: Diddy\'s Kong Quest',
    quote: null,
    species: null,
    creator: 'Rare',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e6/Dixie_Kong_Artwork_-_DK_Jungle_Cimber.png/revision/latest/scale-to-width-down/310?cb=20120814170356&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Doc',
    first_appearance: 'Kirby Squeak Squad',
    quote: null,
    species: 'Squeak',
    creator: 'Flagship',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/0b/Doc_Artwork.png/revision/latest?cb=20190927231408&path-prefix=en',
    description: 'Doc is a member of the Squeak from the Kirby (series).',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Dodo',
    first_appearance: 'Super Mario RPG: Legend of the Seven Stars (1996)',
    quote: null,
    species: null,
    creator: 'Squaresoft',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/95/Dodoch.gif/revision/latest?cb=20071214130119&path-prefix=en',
    description: 'Dodo is Valentina\'s assistant and a minor recurring boss in Super Mario RPG: Legend of the Seven Stars. Although Dodo has to put up with Valentina\'s physical and verbal abuse, he remains loyal to her until the end, and merely vents his repressed anger by pecking the golden statues of his boss that he was supposed to polish. His name comes from the extinct bird wikipedia:Dodo, which are generally depicted as being fat and simple-minded in fiction.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Dolphin',
    first_appearance: 'Super Mario World (1990)',
    quote: '“Hey, thanks for the airlift, guys!”',
    species: null,
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a8/Dolphins.jpg/revision/latest?cb=20110212135838&path-prefix=en',
    description: 'or Liftons (リフトン: Japanese only) are goggle-wearing cetaceans that debuted in Super Mario World.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Dom Woole',
    first_appearance: 'Kirby\'s Epic Yarn (2010)',
    quote: null,
    species: null,
    creator: 'Good-Feel',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/ac/Dom_Woole.png/revision/latest/scale-to-width-down/310?cb=20170424170259&path-prefix=en',
    description: 'Dom Woole is a character in Kirby\'s Epic Yarn. He is a rather important character, as he owns the entire Quilty Square, and the apartments in it. He has two brothers, Chaise Woole and Loomis Woole, both of which own successful shops in Quilty Square.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Don Pianta',
    first_appearance: 'Paper Mario: The Thousand-Year Door (2004)',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/cd/Don_Pianta2.png/revision/latest?cb=20130617225226&path-prefix=en',
    description: 'Don Pianta, also known as the Don of Untimely Death, is the boss of the Pianta Syndicate as well as ruler of the West Side of Rogueport. Don is the father of Francesca and the rival of Ishnail. His skin is orange, he has a mustache, and he wears a dark suit, dark sunglasses, and a gangster-style fedora in addition to the traditional Pianta hula-skirt. Like all stereotypical wikipedia:Gangster, Don Pianta speaks with a wikipedia:New York accent accent. This trait is shared with Rocko and Ishnail.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Don Resetti',
    first_appearance: 'Animal Forest +',
    quote: '“I wish you luck in all you do.”',
    species: 'Mole',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/39/Don_Resetti.png/revision/latest?cb=20131105025519&path-prefix=en',
    description: null,
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Donkey Kong',
    first_appearance: 'Donkey Kong (1981)',
    quote: '“My bananas and my buddy, Diddy, they are gone! The Kremlings will pay!\'"”',
    species: 'Kong',
    creator: 'Shigeru Miyamoto',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a0/Super_Smash_Bros._Ultimate_-_Character_Art_-_Donkey_Kong.png/revision/latest/scale-to-width-down/310?cb=20180612221124&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Donkey Kong Jr.',
    first_appearance: 'Donkey Kong Jr.',
    quote: '“Monkey muscle!”',
    species: null,
    creator: 'Shigeru Miyamoto',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/16/DKJR.art.gif/revision/latest?cb=20071214123540&path-prefix=en',
    description: 'Donkey Kong Jr. is the son of Donkey Kong (character) that first appeared in the Donkey Kong Jr. (video game). He had come to rescue his father following the events of the first arcade game. Donkey Kong Jr. was a regular character in the Mario series for a while but seems to have been replaced with Diddy Kong lately. He never appeared in the Donkey Kong Country series, instead it is hinted that he is the father of the modern day Donkey Kong and that the original DK from the arcade games is Cranky Kong.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Doopliss',
    first_appearance: 'Paper Mario: The Thousand-Year Door (2004)',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/3f/Doopliss_Artwork_-_The_Thousand-Year_Door.png/revision/latest/scale-to-width-down/310?cb=20120523035256&path-prefix=en',
    description: 'Doopliss is a Duplighost that lives in the Creepy Steeple of Twilight Town in Paper Mario: The Thousand-Year Door. He appears as an enemy of Mario several times throughout the game, and is the boss of Chapter 4. He causes the members of Twilight Town to become pigs whenever the bell tolls, and attempts to steal Mario\'s identity. He has the special ability of stealing another character\'s body when copying them, something that other Duplighosts are unable to do. He later becomes a member of the Shadow Sirens, replacing Vivian.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Dorrie',
    first_appearance: 'Super Mario 64 (1996)',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/c7/Dorrie.png/revision/latest?cb=20100102045931&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Dottie',
    first_appearance: 'Super Paper Mario (2007)',
    quote: '“Only heroes who know how to utilize the Pixls properly can travel with them...Super Paper Mario”',
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/4e/SPM_Dottie.png/revision/latest/scale-to-width-down/310?cb=20170617041350&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Dr. Mario',
    first_appearance: 'Dr. Mario (1990)',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/2a/Dr._Mario_World_-_Dr._Mario.png/revision/latest/scale-to-width-down/310?cb=20190619004058&path-prefix=en',
    description: 'Dr. Mario is the main character in the Dr. Mario (series) Dr. Mario (series). He is an alter-ego of Mario, using vitamins to kill off viruses. He first appeared in the Nintendo Entertainment System game, Dr. Mario (video game).',
    search_type: 'Mario_characters'
  },
  {
    name: 'Dr. Purah',
    first_appearance: 'The Legend of Zelda: Breath of the Wild',
    quote: '“Hey! Heeeey! Are you surprised?! The director of this laboratory is NOT Symin. It\'s ME!”',
    species: 'Sheikah',
    creator: 'Nintendo EAD3',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/9e/Purah.png/revision/latest?cb=20170815164224&path-prefix=en',
    description: 'Purah is a character from The Legend of Zelda: Breath of the Wild. Purah is a Sheikah who can be found in the Hateno Ancient Tech Lab of Hateno Village, in the East Necluda region of Hyrule. Despite her appearance, she is actually the elder sister of Impa, the head of the Sheikah Scientist and the director of the Hateno Ancient Tech Lab.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Dr. Shrunk',
    first_appearance: 'Animal Crossing: Wild World (2005)',
    quote: null,
    species: 'Axolotl',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/4a/Dr._Shrunk_NL.png/revision/latest/scale-to-width-down/310?cb=20150426025728&path-prefix=en',
    description: null,
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Dr. Toadley',
    first_appearance: 'Mario & Luigi: Bowser\'s Inside Story (2009)',
    quote: null,
    species: null,
    creator: 'AlphaDream',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/c5/DrToadley.png/revision/latest/scale-to-width-down/310?cb=20200322163307&path-prefix=en',
    description: 'Dr. Toadley is a Toad (species) that appears in Mario & Luigi: Bowser\'s Inside Story, Mario & Luigi: Superstar Saga + Bowser\'s Minions, and Mario & Luigi: Bowser\'s Inside Story + Bowser Jr.\'s Journey. He resides in Toad Town in the Toadley Clinic. He is said to know "all there is to know about the Mushroom Kingdom" (he himself claiming that he knows everything), obtaining information from his crystal ball. He also has a tendency to ask and answer his own questions.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Drawcia',
    first_appearance: 'Kirby: Canvas Curse (2005)',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/f5/KCC_Drawcia.png/revision/latest/scale-to-width-down/310?cb=20160614052255&path-prefix=en',
    description: 'Drawcia is a character in the Kirby (series), making her first appearance as the main antagonist and final boss in Kirby: Canvas Curse. She is a wretched witch in the game who transformed the world of Kirby\'s into a painting (similar to Yoshi\'s Story\'s plot, in which Yoshi (character)\'s world was transformed into a picture book). Not only this, she transformed the protagonist of the series, Kirby, into a seemingly helpless and limbless ball, knowing full well that the character is fully capable of ruining her plans with his powers. However, she accidentally left behind Magical Paintbrush, which Kirby used to his advantage to get around.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Draygon',
    first_appearance: 'Super Metroid (1994)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/67/Draygin.jpg/revision/latest/scale-to-width-down/310?cb=20071214135618&path-prefix=en',
    description: 'Draygon is a boss creature in the Super Nintendo Entertainment System video game Super Metroid. According to the official Nintendo strategy guide, it is a mutant sea creature, and one of the four Space Pirate guardians.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Dry Bowser',
    first_appearance: 'New Super Mario Bros. (2006)',
    quote: null,
    species: 'Koopa',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b3/DryBowser.png/revision/latest/scale-to-width-down/310?cb=20200416224905&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Dweezil',
    first_appearance: 'Mario Tennis: Power Tour (2005)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/f2/Dweezil.png/revision/latest?cb=20171016213021&path-prefix=en',
    description: 'Dweezil ​ is a character in Mario Tennis: Power Tour who hails from Empire. In the Island Open singles tournament, he is defeated in the quarterfinal round by Willy. In the previous year, he defeated Elroy in the final round of the singles tournament. He\'s somewhat of a celebrity at Empire, and he tends to look down on rookies in the tournament. In the doubles tournament, he is partnered with Mynx. Clay and Ace face the two of them in the semifinal round of the tournament. The previous year, he and Mynx defeated Elroy and Tori in the final round of the doubles tournament. He is more famous for his singles play, though.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Dyna Blade',
    first_appearance: 'Kirby Super Star (1996)',
    quote: null,
    species: null,
    creator: 'Masahiro Sakurai,HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/38/KSS_Dyna_Blade.png/revision/latest/scale-to-width-down/310?cb=20171008232919&path-prefix=en',
    description: 'Dyna Blade is a Kirby (series) Kirby (series) character who first appeared in the Super Nintendo Entertainment System classic, Kirby Super Star. She is a large bird with multi-colored feathers. Dyna Blade is sometimes an enemy and at other times is an ally to Kirby.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Eely-Mouth',
    first_appearance: 'Super Mario Sunshine',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/44/Eely_Mouth_Artwork_-_Super_Mario_Sunshine.png/revision/latest?cb=20181219205613&path-prefix=en',
    description: 'Eely Mouth is an eel-like boss that serves as a Boss in Super Mario Sunshine where it is fought in the Noki Bay. Its gingivitis is the cause of the widespread pollution in the area and Mario has to clean its mouth with F.L.U.D.D. to heal the suffering creature, which is considered a boss battle by the game.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Elden',
    first_appearance: 'Mario Tennis (2000, GBC version)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d0/Spike_and_Elden.jpg/revision/latest/scale-to-width-down/310?cb=20170917055532&path-prefix=en',
    description: 'Elden',
    search_type: 'Mario_characters'
  },
  {
    name: 'Elder Princess Shroob',
    first_appearance: 'Mario & Luigi: Partners in Time',
    quote: null,
    species: 'Shroob',
    creator: 'AlphaDream',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/97/Elder_Princess_Shroob_sprite.png/revision/latest?cb=20170628161138&path-prefix=en',
    description: 'Elder Princess Shroob is the older sister of Princess Shroob. She acts as a final boss (except "Shrowser") in Mario & Luigi: Partners in Time. After beating Princess Shroob, Peach is explaining to Mario and Luigi that they mustn\'t put the last cobalt star shard on the rest of it, as the Elder Princess Shroob was trapped inside by Peach. Then, baby Bowser appears, steals what he thinks is his treasure and puts the shards together. Elder Princess Shroob appears and turns him into a purple Shroob Mushroom. After she is defeated, it is revealed that baby tears cure everyone that were turned into Shroob Mushrooms.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Elder Shrooboid',
    first_appearance: 'Mario & Luigi: Partners in Time (2005)',
    quote: null,
    species: null,
    creator: 'AlphaDream',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/10/ElderShrooboid.png/revision/latest?cb=20110313095959&path-prefix=en',
    description: 'Elder Shrooboid is a boss found in Mario & Luigi: Partners in Time which holds the third Star Shrine. Unlike the younger version which appears out of the Time Machine, it is red, has spikes on top of its head, and can create a Shroob Saucer when weakened.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Eldin',
    first_appearance: 'The Legend of Zelda: Skyward Sword',
    quote: null,
    species: 'Dragon/Deity',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/45/Eldin_SS.png/revision/latest/scale-to-width-down/310?cb=20190825102849&path-prefix=en',
    description: 'Eldin is one of the three guardian Deities in The Legend of Zelda series of Hyrule in The Legend of Zelda (series) The Legend of Zelda (series). Eldin is mainly featured in The Legend of Zelda: Skyward Sword as the game takes place in the period where the Dragons are tasked with protecting the land in the absence of Goddess Hylia. As his name suggest, Eldin watches over the Eldin (Province).',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Eldin',
    first_appearance: 'The Legend of Zelda: Twilight Princess (2006)',
    quote: null,
    species: 'Light Spirit/Minor Deity',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/16/Eldin.jpg/revision/latest/scale-to-width-down/310?cb=20080729183338&path-prefix=en',
    description: 'Eldin is a character in The Legend of Zelda: Twilight Princess for the Wii and Nintendo GameCube. He is the third of four light spirits that Link must find in the game. Link will find Eldin in Kakariko Village, where he looks much like a bird.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Eldstar',
    first_appearance: 'Paper Mario',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/85/Eldstar.jpg/revision/latest/scale-to-width-down/310?cb=20080718201554&path-prefix=en',
    description: 'Eldstar is one of the seven Star Spirits in Paper Mario. As indicated by his name, he is the elder of Star Haven and is inferred to be the leader and the oldest of the Star Spirits. He has a large white mustache, white eyebrows, and dark green eyes.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Ella',
    first_appearance: 'Mario Golf: Advance Tour',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/dc/Ella.png/revision/latest/scale-to-width-down/249?cb=20171103205414&path-prefix=en',
    description: '​Ella ​ is one of the mainy characters in Mario Golf: Advance Tour. She, along with Neil, is a student of the great golfer, Kid.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Elline',
    first_appearance: 'Kirby and the Rainbow Curse (2015)',
    quote: '“I made a friend today! His name is Kirby. New buddies are the best!”',
    species: 'Fairy',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/aa/KatRC_Elline_artwork.png/revision/latest?cb=20170124024257&path-prefix=en',
    description: 'Elline is a friendly character in the Kirby (series), debuting in Kirby and the Rainbow Curse. Her goal is to restore colour to Popstar. She is Claycia\'s best friend. During gameplay, the player controls her by sliding on the gamepad to tell her where to create a rainbow bridge.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Elroy',
    first_appearance: 'Mario Tennis: Power Tour (2005)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b0/MTPT_Elroy.jpg/revision/latest?cb=20171016213547&path-prefix=en',
    description: 'Elroy ​is a character from Mario Tennis: Power Tour. He is an all-around typed character and his doubles partner is Tori. He is ranked first in the varsity courts in singles and doubles mode, making him team captain and an excellent player. Elroy favorite color is most likely blue, since his hair and his tennis outfit are both blue. He\'s one of the oldest players; it\'s hinted at that when Elroy started as a junior, Alex (Mario Tennis), Mark (Mario Tennis), and Kevin were still varsity players and not yet coaches.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Emi',
    first_appearance: 'Mario Tennis: Power Tour (2005)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/28/MTPT_Emi.jpg/revision/latest/scale-to-width-down/235?cb=20171020014007&path-prefix=en',
    description: 'Emi ​is a character in Mario Tennis: Power Tour. She holds the first ranks in Senior Class singles and doubles at the Academy. She\'s typically at the Varsity court, but when the second-ranked player or team is defeated, she or she and Roy (Mario Tennis) will arrive at the Senior court to accept the upcoming challenge for the first rank. Though unranked in Varsity singles, she takes the third rank in Varsity doubles shortly after Clay and Ace advance to Varsity.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Emily',
    first_appearance: 'Mario Tennis (2000, Game Boy Color)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/db/MTPT_Emily.jpg/revision/latest/scale-to-width-down/310?cb=20170917060207&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Emperor Anglar',
    first_appearance: 'Star Fox Command',
    quote: '“Don\'t flinch. Don\'t retreat. Don\'t even THINK of losing your cool. Let them come. Here is where we shall make our final stand.”',
    species: 'Anglar',
    creator: 'Takaya Imamura',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e7/Anglarking.jpg/revision/latest?cb=20071214140832&path-prefix=en',
    description: 'Emperor Anglar is an enemy in the Star Fox (series) series who debuted in Star Fox Command as the leader of the Anglar Race, who wants to take over the Lylat System. He appears as the primary antagonist and final boss of the game.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Emperor Ing',
    first_appearance: 'Metroid Prime 2: Echoes',
    quote: null,
    species: 'Ing',
    creator: 'Retro Studios',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/21/Emperor_ing.png/revision/latest/scale-to-width-down/310?cb=20180111164713&path-prefix=en',
    description: 'The Emperor Ing is the leader of the Ing Horde, and the main antagonist of Metroid Prime 2: Echoes. It is the oldest and strongest of its species.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Epona',
    first_appearance: 'The Legend of Zelda: Ocarina of Time',
    quote: null,
    species: 'Horse',
    creator: 'Shigeru Miyamoto',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/03/TPEpona.jpg/revision/latest/scale-to-width-down/310?cb=20090831174253&path-prefix=en',
    description: 'Epona is Link\'s horse. She is used mainly by Link for faster travel across the overworld. Epona is named after a Celtic goddess of horses, and has a unique song called " Epona\'s Song " which is often used as a way to tame and/or summon her.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Escargoon',
    first_appearance: 'Kirby: Right Back at Ya!',
    quote: '“You\'d better get it with a money-back guarantee!”',
    species: 'Snail',
    creator: 'Warpstar Inc.',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/de/Escargoon.gif/revision/latest?cb=20200417194427&path-prefix=en',
    description: 'Escargoon is one of the main characters in Kirby: Right Back at Ya!. He is the sidekick and right-hand man of King Dedede and one of the characters that was added to the series that had not previously been in any Kirby (series) media. Escargoon is loyal to his boss but is not as menacing as King Dedede himself is. Several episodes are centered around him and he was given a good deal of character development.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Exor',
    first_appearance: 'Super Mario RPG: Legend of the Seven Stars (1996)',
    quote: null,
    species: null,
    creator: 'Squaresoft',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/06/Exor_Sprite_%28Super_Mario_RPG%29.png/revision/latest?cb=20120930205038&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Eyerok',
    first_appearance: 'Super Mario 64',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e3/Eyerok64.png/revision/latest/scale-to-width-down/310?cb=20120120173721&path-prefix=en',
    description: 'Eyerok is a boss in the Mario (series). This character is two separate sandy hands with a single blue eye in middle of his palms.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Ezlo',
    first_appearance: 'The Legend of Zelda: The Minish Cap',
    quote: null,
    species: 'Minish',
    creator: 'Capcom',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/25/TMC_Ezlo_Artwork.png/revision/latest/scale-to-width-down/310?cb=20190611035259&path-prefix=en',
    description: 'Ezlo is a character in the game The Legend of Zelda: The Minish Cap for the Game Boy Advance. He is actually a Minish sage and inventor that was cursed by his ancient apprentice Vaati after the later stole his Mage\'s Cap.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'F.L.U.D.D.',
    first_appearance: 'Super Mario Sunshine (2002)',
    quote: null,
    species: null,
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/54/FLUDD.png/revision/latest?cb=20110915192912&path-prefix=en',
    description: '',
    search_type: 'Mario_characters'
  },
  {
    name: 'Fado',
    first_appearance: 'The Legend of Zelda: The Wind Waker (2002)',
    quote: null,
    species: 'Kokiri',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/c3/WWHD_Fado.png/revision/latest/scale-to-width-down/310?cb=20180422202202&path-prefix=en',
    description: 'Fado is the former Seven Sages from The Legend of Zelda: The Wind Waker. He belongs to the Kokiri race, born in Kokiri Forest before the Great Flood, and is the only one of his race seen in the game. After Ganondorf managed to circumvent the seal of the Goddesses and reached the surface, one of his first things he did was attack the Wind Temple and have Fado killed. After his death, his spirit remained in the Wind Temple until he was replaced by Makar.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Fairy',
    first_appearance: 'The Legend of Zelda',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/2c/Navi_Artwork.png/revision/latest/scale-to-width-down/310?cb=20110928220622&path-prefix=en',
    description: 'Fairies, sometimes called Pixies, are a creature from The Legend of Zelda (series). They are small winged beings associated with nature and magic. In most games, fairies will restore Link\'s health when caught or they can be kept in empty bottles to provide an extra life if Link loses all his hearts. They originated in the first The Legend of Zelda. A Great Fairy can heal Link, give him an extra power, or upgrade his items.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Fake Bowser',
    first_appearance: 'Super Mario Bros. (1985)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/88/Fake_Bowser.png/revision/latest/scale-to-width-down/310?cb=20180314030717&path-prefix=en',
    description: 'Fake Bowser (also called Bowser Impostor or Bowser\'s decoy) is an enemy in the Mario (series). It is a regular enemy that disguised as Bowser. Fake Bowsers debuted in Super Mario Bros. for Nintendo Entertainment System where they appear as bosses at the end of every world other than the last, where the real Bowser appears. Fake Bowsers are disguised regular enemies such as Goomba and Koopa with the purpose of trying to fool Mario and Luigi. The only way to know which enemy is under the costume is to defeat it with Fireball.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Falco Lombardi',
    first_appearance: 'Star Fox (1993)',
    quote: '“Falco here. I\'m fine.”',
    species: 'Falcon',
    creator: 'Takaya Imamura',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/f5/Super_Smash_Bros._Ultimate_-_Character_Art_-_Falco.png/revision/latest/scale-to-width-down/310?cb=20180613024330&path-prefix=en',
    description: null,
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Fara Phoenix',
    first_appearance: null,
    quote: null,
    species: null,
    creator: 'Benimaru Itoh',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/f8/Fara_Phoenix_%28v48%29.png/revision/latest/scale-to-width-down/310?cb=20120620202305&path-prefix=en',
    description: null,
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Farley',
    first_appearance: 'Animal Crossing (2001)',
    quote: '“It is filled with my utmost gratitude for your efforts.”',
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/f0/Farley.png/revision/latest/scale-to-width-down/310?cb=20191119000011&path-prefix=en',
    description: 'Farley is a character in Animal Crossing (series). Farley lives in the fountain and comes out to give the player a golden axe once the player has a perfect town.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Faron',
    first_appearance: 'The Legend of Zelda: Skyward Sword',
    quote: null,
    species: 'Dragon/Deity',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/44/Faron_SS.png/revision/latest/scale-to-width-down/310?cb=20190827110715&path-prefix=en',
    description: 'Faron is one of the three guardian Deities in The Legend of Zelda series of Hyrule in The Legend of Zelda (series) The Legend of Zelda (series). Faron is mainly featured in The Legend of Zelda: Skyward Sword as the game takes place in the period where the Dragons are tasked with protecting the land in the absence of Goddess Hylia. As her name suggest, Lanayru watches over the Faron (Province).',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Faron',
    first_appearance: 'The Legend of Zelda: Twilight Princess (2006)',
    quote: null,
    species: 'Light Spirit/Minor Deity',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/1b/Faron.png/revision/latest/scale-to-width-down/310?cb=20100915035254&path-prefix=en',
    description: 'Faron is a character in The Legend of Zelda: Twilight Princess for the Wii and Nintendo GameCube. In the game, he is the second of four light spirits that Link must find. Link will find him in the Faron Woods, where it reveals that he looks much like a monkey.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Farore',
    first_appearance: 'The Legend of Zelda: A Link to the Past',
    quote: '“Farore... With her rich soul, produced all life forms who would uphold the law.”',
    species: 'Gods',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/88/Farorestatue.png/revision/latest/scale-to-width-down/295?cb=20170328190656&path-prefix=en',
    description: 'Farore is one of the three Goddesses along with Din and Nayru that created the land of Hyrule and the Triforce. She is the Goddess of Courage, which is the part of the Triforce that Link holds. Farore\'s role in the creation of the world was the life.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Fawful',
    first_appearance: 'Mario & Luigi: Superstar Saga',
    quote: '“I HAVE FURY!”',
    species: 'Beanish',
    creator: 'AlphaDream',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/6f/Fawful_%28Mario_%26_Luigi_Superstar_Saga%29.png/revision/latest/scale-to-width-down/310?cb=20121215021845&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Fay',
    first_appearance: 'Mario Tennis (2000, GBC)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/94/MT_Fay.png/revision/latest?cb=20170916234805&path-prefix=en',
    description: 'Fay',
    search_type: 'Mario_characters'
  },
  {
    name: 'Fay',
    first_appearance: 'Star Fox 2 (2017)',
    quote: null,
    species: 'Dog (Poodle)',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/97/Star_Fox_2_Fay.png/revision/latest?cb=20180407204842&path-prefix=en',
    description: 'Fay is a human-like female poodle who along with Miyu, appears in the formerly cancelled Star Fox 2 title for the Super Nintendo Entertainment System. As with Miyu, Fay pilots an Interceptor class Arwing which is far faster than the other Arwing models, but wasn\'t built with defense in mind. Her personality seems especially cheery and the "go-getter" type. She is characterized by her bubbly attitude, white fur, and a big red bow in her hair.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Federation Force',
    first_appearance: 'Metroid Prime: Federation Force',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/04/Federation_Force.png/revision/latest/scale-to-width-down/310?cb=20181212203739&path-prefix=en',
    description: 'The Federation Force is a group of elite Federation Marine that have undergone intense and extensive training. The foursome serve as the titular protagonists of Metroid Prime: Federation Force.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Fi',
    first_appearance: 'The Legend of Zelda: Skyward Sword',
    quote: '“The one chosen by my creator. I have been waiting for you. You will play a role in a great destiny. According to your social customs, I should provide you with my personal designation. Fi is the name I was given. I was created for a single purpose, long before the recorded memory of your people. I must aid you in fulfilling the great destiny that is your burden to carry.”',
    species: 'Sword Spirit',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/92/Fi_%28Hyrule_Warriors%29.png/revision/latest/scale-to-width-down/310?cb=20140725192844&path-prefix=en',
    description: 'Fi is a character in The Legend of Zelda: Skyward Sword and Hyrule Warriors. She is the humanoid representation of the Goddess Sword. Fi is the spirit within the Sword, enlisted to guide Link during his adventure, serving as the hero\'s companion in the game.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Fierce Deity',
    first_appearance: 'The Legend of Zelda: Majora\'s Mask',
    quote: null,
    species: null,
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/2a/Fierce_Deity_Link.png/revision/latest/scale-to-width-down/310?cb=20150913205023&path-prefix=en',
    description: null,
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Flaahgra',
    first_appearance: 'Metroid Prime',
    quote: null,
    species: null,
    creator: 'Retro Studios',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/08/Flaahgra.png/revision/latest/scale-to-width-down/310?cb=20181212120457&path-prefix=en',
    description: 'Flaahgra is a plant-like creature from the Metroid (series) that serves as an early boss in Metroid Prime. Before being defeated by Samus Aran, it rested on Tallon IV, and was mutated by the effects of the powerful Phazon. The Phazon caused it to rapidly grow, and obtains it\'s needed energy through photosynthesis, like most other plants.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Flamer',
    first_appearance: 'Kirby\'s Adventure (1993)',
    quote: null,
    species: null,
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/49/Flamer_Canvas_Curse.jpg/revision/latest/scale-to-width-down/310?cb=20110318180259&path-prefix=en',
    description: 'Flamer is an enemy from the Kirby (series) that has appeared in Kirby\'s Adventure, Kirby: Nightmare in Dream Land, Kirby & the Amazing Mirror, Kirby: Squeak Squad, and lastly, Kirby\'s Epic Yarn. Flamer offers Kirby the Burning Kirby.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Fleep',
    first_appearance: 'Super Paper Mario (2007)',
    quote: null,
    species: 'Pixis',
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/33/Fleep.png/revision/latest/scale-to-width-down/310?cb=20160709011329&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Flick',
    first_appearance: 'Animal Crossing: New Horizons',
    quote: null,
    species: 'Chameleon',
    creator: 'Nintendo',
    image: null,
    description: 'Flick',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Flit',
    first_appearance: 'Mario Tennis: Power Tour (2005)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/4b/Flit.png/revision/latest?cb=20171020014505&path-prefix=en',
    description: 'Flit ​is a character in Mario Tennis: Power Tour. Though unranked in singles, he holds the third rank in Varsity doubles at the Academy. He takes tennis very seriously and expresses great determination to rise through the ranks. He\'s generally a very sour person, but he still accepts defeat when he and Emi lose their ranking match against Clay and Ace. When going through singles, he is partnered with Skipper, but his intense practice encourages Skipper to switch partners. He is very proud of his power shot, which happens to be the Slider Shot. His grouchiness may stem from losing his ranking. It\'s implied based on conversations about someone being so disoriented that they lost their ranking after using the malfunctioning Swift Spin and the fact that Flit\'s power shot is spin-based and that Flit states that he lost his rank to Paula (Mario Tennis) (claiming it as a fluke) that Flit was the varsity player the person was talking about.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Flurrie',
    first_appearance: 'Paper Mario: The Thousand-Year Door (2004)',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/10/Flurrie.jpg/revision/latest/scale-to-width-down/310?cb=20111104225121&path-prefix=en',
    description: 'Flurrie (also known as Madame Flurrie) is Mario\'s third party member in Paper Mario: The Thousand-Year Door. She is a wind spirit, as well as a slightly pompous retired actress who eventually resumes her career at the end of the game. Her face resembles Wendy O. Koopa, while her hair resembles Ludwig von Koopa\'s hair.\nHer ability is to blow out large amounts of wind, as hinted at by her name, which comes from "flurry", meaning a small burst of wind. In battle, her wind attacks can make incoming enemies dizzy or blow away flaps when in the overworld to reveal hidden objects or passageways, similar to Watt from Paper Mario and Fleep in Super Paper Mario.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Foreman Spike',
    first_appearance: 'Wrecking Crew (1985)',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/7c/Spike.jpg/revision/latest?cb=20090312182738&path-prefix=en',
    description: 'Foreman Spike, known as Blackey (ブラッキー, Burakkī) in Japan, is an angry foreman of the construction site where Mario and Luigi work in Wrecking Crew. Rather than help them, Spike continuously tried to hinder the brothers from doing their job, perhaps to rake in the cash for himself. He is a bearded villain who always wears sunglasses, although in Wrecking Crew\'98, he did not have a beard. Foreman Spike is said to be a predecessor to Wario and/or Waluigi, much like Pauline was for Princess Peach.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Four Giants',
    first_appearance: 'The Legend of Zelda: Majora\'s Mask',
    quote: null,
    species: 'Deities',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d9/MM3D_Giant_Model.png/revision/latest/scale-to-width-down/310?cb=20190814200755&path-prefix=en',
    description: 'The Four Giants are four creatures in The Legend of Zelda: Majora\'s Mask that are the guardian Deities in The Legend of Zelda series of Termina. They are very large and orange, and each have a beard and a pointy nose. They have deep voices and they are mainly worshiped during the annual Festival of Time for good harvest.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Fox McCloud',
    first_appearance: 'Star Fox (1993)',
    quote: '“Mission: complete.”',
    species: 'Fox',
    creator: 'Shigeru Miyamoto',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/1b/Super_Smash_Bros._Ultimate_-_Character_Art_-_Fox.png/revision/latest/scale-to-width-down/310?cb=20180613003959&path-prefix=en',
    description: 'Fox McCloud is a Nintendo video game character and icon who was introduced in the Super Nintendo Entertainment System classic game Star Fox in 1993. He was originally created by Shigeru Miyamoto. Fox McCloud is the leader of an intergalactic team of pilot heroes, the Star Fox (team) whose name has become one of his nicknames, consisting of himself, Falco Lombardi, Peppy Hare, Slippy Toad, and a few others.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Francis',
    first_appearance: 'Super Paper Mario (2007)',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/58/Francis.jpg/revision/latest/scale-to-width-down/310?cb=20071214124928&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Franklin',
    first_appearance: 'Animal Crossing (2001)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/50/Franklin_NL.png/revision/latest/scale-to-width-down/264?cb=20150426022544&path-prefix=en',
    description: 'Franklin is a talking turkey that is all about giving thanks in Animal Crossing, but he appears only during the Harvest Festival. First, speak with Tortimer for a brief history lesson, and he\'ll give you a knife and a fork. Now find Franklin milling about your town and trade the knife and fork for a gift.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Frillard',
    first_appearance: 'Animal Crossing: City Folk (2008)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/04/Frillard.JPG/revision/latest?cb=20090717160601&path-prefix=en',
    description: 'Frillard is a zany lizard who sometimes appears in place of Dr. Shrunk to give special performances at the Marquee in Animal Crossing: City Folk for the Wii. Frillard will teach you emotions not known to even Dr. Shrunk.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Frogfucious',
    first_appearance: 'Super Mario RPG: Legend of the Seven Stars (1996)',
    quote: null,
    species: null,
    creator: 'Squaresoft',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/99/Frog.gif/revision/latest?cb=20071214130641&path-prefix=en',
    description: 'Frogfucious is a sagacious Frog who lives at Tadpole Pond. He is also Mallow\'s adoptive grandfather. During a rain storm, while Frogfucius was enjoying a snack of crickets, a small basket floated into Tadpole Pond. In the basket, Frogfucius found Mallow as a baby (when he was just a little ball of fluff). Taking him in, Frogfucius raised Mallow as a tadpole, and as his grandson.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Fryguy',
    first_appearance: 'Yume Kōjō: Doki Doki Panic (1987)',
    quote: '“I\'m too hot to touch!”',
    species: 'Fire',
    creator: 'Fuji TV',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e1/Fryguy_Art_%28Super_Mario_Bros._2%29.png/revision/latest/scale-to-width-down/310?cb=20121219210751&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Fyer',
    first_appearance: 'The Legend of Zelda: Twilight Princess',
    quote: null,
    species: 'Hylian',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/ee/TP_Fyer.png/revision/latest/scale-to-width-down/222?cb=20170911143359&path-prefix=en',
    description: 'Fyer is a character from Legend of Zelda: Twilight Princess. He lives at the bottom of Lake Hylia on his island. He offers strange cannon rides for a small fee. This is useful when Link is stuck in human form with no way to get to higher ground. The force of the cannon can launch Link up to the bridge on the lake. Fyer eventually, with the negotiation of Auru, an old friend, lets Link use the oasis flight, allowing him to access the Gerudo Dessert and Arbiters Grounds.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Fyson',
    first_appearance: 'The Legend of Zelda: Breath of the Wild (2017)',
    quote: '“My mom said she wants me to take over the family store someday... Can you believe that?! I don\'t...want to just "help." I want to open my OWN store and sell whatever I want!”',
    species: 'Rito',
    creator: 'Nintendo EAD3',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a9/Fyson.jpg/revision/latest/scale-to-width-down/310?cb=20170531160509&path-prefix=en',
    description: 'Fyson is a character from The Legend of Zelda: Breath of the Wild. Fyson is a Rito that can be found in Rito Village in the Tabantha Frontier region of Hyrule, sitting on the empty balcony to the right of the village\'s entrance. Fyson dreams of opening up his own shop one day, but his mother Misa want him to take over the family store. When Link tells him about the construction of Tarrey Town by Hudson (character) and his need of a general store to ensure the distribution in his town, Fyson depart for the town to help him by opening his own store, a new branch of his family\'s store: the Slippery Falcon',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Galacta Knight',
    first_appearance: 'Kirby Super Star Ultra',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/97/SKC_Galacta_Knight.png/revision/latest/scale-to-width-down/310?cb=20191005154838&path-prefix=en',
    description: 'Galacta Knight is a character from the Kirby (series). He is an ancient warrior, said to be the strongest in the galaxy. He was sealed a long time ago due to the power he wielded. According to Star Dream, he was able to cut entire planets in half. He is often brought back to fight Meta Knight, as he is his arch-nemesis. He also becomes one half of Morpho Knight after fusing with the Butterfly.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Galactic Nova',
    first_appearance: 'Kirby Super Star',
    quote: null,
    species: 'Clockwork Star',
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/87/Galactic_Nova.png/revision/latest?cb=20120809180309&path-prefix=en',
    description: null,
    search_type: 'Kirby_characters'
  },
  {
    name: 'Gandrayda',
    first_appearance: 'Metroid Prime 3: Corruption',
    quote: null,
    species: null,
    creator: 'Retro Studios',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/6f/Gandrayda.gif/revision/latest?cb=20071214125705&path-prefix=en',
    description: null,
    search_type: 'Metroid_characters'
  },
  {
    name: 'Ganon',
    first_appearance: 'The Legend of ZeldaThe Legend of Zelda: Ocarina of Time (as Ganondorf\'s alternate form)',
    quote: null,
    species: null,
    creator: 'Shigeru Miyamoto',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/4d/BotW_Calamity_Ganon_Artwork.png/revision/latest/scale-to-width-down/310?cb=20181217175554&path-prefix=en',
    description: 'Ganon (commonly known as Ganondorf), also known as Ganondorf Dragmire in humanoid form, is an alternate character of Ganondorf in The Legend of Zelda (series) The Legend of Zelda (series). He first appeared in The Legend of Zelda, then appeared in The Legend of Zelda: Ocarina of Time as his alter ego.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Ganon',
    first_appearance: 'The Legend of ZeldaThe Legend of Zelda: Ocarina of Time (as Ganondorf\'s alternate form)',
    quote: null,
    species: null,
    creator: 'Shigeru Miyamoto',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/4d/BotW_Calamity_Ganon_Artwork.png/revision/latest/scale-to-width-down/310?cb=20181217175554&path-prefix=en',
    description: 'Ganon (commonly known as Ganondorf), also known as Ganondorf Dragmire in humanoid form, is an alternate character of Ganondorf in The Legend of Zelda (series) The Legend of Zelda (series). He first appeared in The Legend of Zelda, then appeared in The Legend of Zelda: Ocarina of Time as his alter ego.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Ganondorf',
    first_appearance: 'The Legend of Zelda: Ocarina of Time',
    quote: '“Pathetic little fool! Do you realize who you are dealing with?! I am Ganondorf! And soon, I will rule the world!”',
    species: 'Gerudo',
    creator: 'Shigeru Miyamoto',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/33/Super_Smash_Bros._Ultimate_-_Character_Art_-_Ganondorf.png/revision/latest/scale-to-width-down/310?cb=20180613021238&path-prefix=en',
    description: 'Ganondorf Dragmire is the main antagonist of The Legend of Zelda (series) The Legend of Zelda (series). Technically, he made his debut in The Legend of Zelda where he appears as the Demon king Ganon, it is not until The Legend of Zelda: A Link to the Past that the existence of someone named "Ganondorf" who eventually became Ganon was revealed, Ganondorf himself makes his first in game appearance in The Legend of Zelda: Ocarina of Time.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Gary',
    first_appearance: 'Mario Tennis: Power Tour (2005)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/64/Gary_Mario_Tennis.png/revision/latest?cb=20171020034924&path-prefix=en',
    description: 'Gary ​ is a character from Mario Tennis: Power Tour. He holds the fourth rank in Senior Class singles and the third rank in Senior Class Doubles at the Academy. As the fourth-ranked player, he considers it his job to test unranked players to prevent unworthy players from climbing the ranks but is still enough of a good sport to admit when he loses, that it is to a worthy player. His unofficial title is the "senior sentry". Gary believes strongly in the importance of good teamwork and is every bit as upset over his teamwork slipping as his loss to Clay and Ace in doubles. His doubles partner is Jet. However when he learns a power shot he becomes a little overconfident, wondering if he can beat the player (but never challenges the player, apparently unaware that Clay or Ace\'s power shot by that point is likely pretty advanced).',
    search_type: 'Mario_characters'
  },
  {
    name: 'Gary',
    first_appearance: 'Super Paper Mario (2007)',
    quote: null,
    species: 'Goomba',
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/f3/PaperGary.png/revision/latest?cb=20190828143550&path-prefix=en',
    description: 'Gary is an ordinary Goomba and a member of Bowser\'s army, the Koopa Troop. In Super Paper Mario, Gary is one of the many Goombas transported to Bowser\'s wedding to Princess Peach and later, to Count Bleck\'s castle. After the events of Chapter 2-4, in company with an unnamed Goomba, Gary eventually finds Luigi laying unconscious. Having convinced Luigi to act as their bodyguard, they continue to venture through the castle. Eventually, they find a dead end, and they are caught by Nastasia, who hypnotizes and brainwashes Gary into serving Count Bleck. Gary then helps hold down Luigi for Nastasia so she can Mr. L.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Gearmo',
    first_appearance: 'Super Mario Galaxy (2007)',
    quote: null,
    species: null,
    creator: 'Nintendo EAD Tokyo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/7b/Gearmo.PNG/revision/latest?cb=20110210022429&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Gene Yuss',
    first_appearance: 'Mario Golf (1999, Game Boy Color)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/06/Gene_Yuss.png/revision/latest?cb=20171031035908&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'General Guy',
    first_appearance: 'Paper Mario (2000)',
    quote: '“No fair! Your breaking the rules of war!”',
    species: 'Shy Guy',
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/09/General_Guy_%28Paper_Mario%29.png/revision/latest/scale-to-width-down/310?cb=20140822035307&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'General Pepper',
    first_appearance: 'Star Fox (1993)',
    quote: null,
    species: null,
    creator: 'Shigeru Miyamoto',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/8c/General_Pepper_Assault.jpg/revision/latest/scale-to-width-down/310?cb=20070902104121&path-prefix=en',
    description: 'General Pepper is a supporting character in the Star Fox (series) series of video games by Nintendo. He was the commander-in-chief of the Corneria Defense Forces. He is friends with the Star Fox (team) team of mercenaries, and has often called on them for assistance.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'General Scales',
    first_appearance: 'Star Fox Adventures',
    quote: null,
    species: 'Dinosaur',
    creator: 'Rare',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/72/General_Scales_Adventures.jpg/revision/latest/scale-to-width-down/310?cb=20070908025508&path-prefix=en',
    description: 'General Scales is a character in the Star Fox series who wanted to take control of planet Sauria, previously known as "Dinosaur Planet". He was the main antagonist in Star Fox Adventures. He is an unknown reptillian species that has similarities to some carnivorous dinosaurs. He lost his hand but replaced it with a two pronged metal hook. He is the leader of the sharpclaw and redeye tribes. He wears a helmet, shoulder pads, tunic and belt.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'General White',
    first_appearance: 'Paper Mario: The Thousand-Year Door',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/15/General_White.png/revision/latest?cb=20121103205324&path-prefix=en',
    description: 'General White is an old Bob-omb general that helped create the Giant Cannon to The Moon at Fahr Outpost in the game Paper Mario: The Thousand-Year Door.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Genius Girl',
    first_appearance: 'Mario + Rabbids: Kingdom Battle (2017)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/3d/GenuisGirl_DonkeyKongAdventure.png/revision/latest/scale-to-width-down/310?cb=20190603173143&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Geno',
    first_appearance: 'Super Mario RPG: Legend of the Seven Stars (1996)',
    quote: null,
    species: null,
    creator: 'Square Soft',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/02/Geno_Artwork_%28Super_Mario_RPG_-_Legend_of_the_Seven_Stars%29.png/revision/latest/scale-to-width-down/307?cb=20121110130550&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Ghirahim',
    first_appearance: 'The Legend of Zelda: Skyward Sword',
    quote: '“Come to me, Link. You and I, we\'re bound by that thread of fate. Destined to fight.”',
    species: 'DemonSpirit',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b4/Ghirahim_%28Hyrule_Warriors%29.png/revision/latest/scale-to-width-down/310?cb=20180312024501&path-prefix=en',
    description: 'Ghirahim is the central antagonist of The Legend of Zelda: Skyward Sword. He is a demon lord, and was actually born out of Demise\'s sword. His goal is to capture Zelda so he could use her as a ritual to reawake his master. He is also a playable character in Hyrule Warriors and Hyrule Warriors Legends as well as an Assist Trophy in, and. Super Smash Bros. for Nintendo 3DS/Wii U',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Giovanni',
    first_appearance: 'Animal Crossing: Pocket Camp',
    quote: null,
    species: 'Bird',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/ec/Animal_Crossing_-_Pocket_Camp_-_Character_Artwork_-_Giovanni_01.png/revision/latest/scale-to-width-down/310?cb=20171025164945&path-prefix=en',
    description: 'Giovanni ​is a character in Animal Crossing: Pocket Camp, co-operating OK Motors, alongside Beppe and Carlo.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Gloomtail',
    first_appearance: 'Paper Mario: The Thousand-Year Door (2004)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/44/Gloomtail.PNG/revision/latest?cb=20110918025751&path-prefix=en',
    description: 'Gloomtail is the middle sibling in the "tail" family in Paper Mario: The Thousand-Year Door. He is the older brother of Hooktail and the younger brother of Bonetail. Upon hearing Mario\'s partners say they defeated his sister Hooktail, Gloomtail vows to destroy Mario and company and avenge his sister. He lives in the Palace of Shadow and guards the Star Key, which is needed to unlock the pedestals in the Riddle Tower. Mario and company had to defeat Gloomtail to get the Star Key. Gloomtail is much stronger than his sister. He attacks by breathing poison on Mario and his partner, this takes at least ten turns to wear off, and stomping or chomping the character in front. His Earthquake move can be dangerous, but it doesn\'t work on Vivian and Flurrie. He can also charge up for his signature and strongest attack: his Megabreath move, which does up to 16 damage.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Glydon',
    first_appearance: 'Super Mario Odyssey (2017)',
    quote: '“Flying, flying, flying, flying, skree-EEEE!”',
    species: null,
    creator: 'Nintendo EPD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e7/SMO_Glydon.png/revision/latest?cb=20180101121404&path-prefix=en',
    description: 'Glydon is a character in. Super Mario Odyssey He is a gliding enthusiastic similar to a flying lizard. Mario meets him in several kingdoms throughout the game and can use Cappy (Mario) to capture him and reach Power Moon that would normally be out of reach.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Gohdan',
    first_appearance: 'The Legend of Zelda: The Wind Waker',
    quote: null,
    species: 'Machine',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/6d/Gohdan.png/revision/latest/scale-to-width-down/310?cb=20181215134118&path-prefix=en',
    description: 'Gohdan, also known as The Great Arbiter, is a huge machine of Deities in The Legend of Zelda series origin in The Legend of Zelda (series). It resides inside the Tower of the Gods and serves as the final test created by the Gods to test the new incarnation of the Link and see if he is worthy of accessing the Master Sword, which was sealed under the waves alongside Hyrule during the Great Flood. Gohdan is essentially the boss of the Tower of the Gods in The Legend of Zelda: The Wind Waker.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Gold Mario',
    first_appearance: 'New Super Mario Bros. 2 (2012)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/10/MGWT_Gold_Mario.png/revision/latest?cb=20170712034652&path-prefix=en',
    description: 'Gold Mario ​ and Silver Luigi are forms debuting in New Super Mario Bros. 2, acquired by grabbing a Gold Flower. In this form, Mario and Luigi can throw explosive gold and silver Fireball, respectively, which can defeat most enemies, turn any Brick Block hit into Coin, and empty out any item-holding blocks caught in their blast radius.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Goldon & Silvox',
    first_appearance: 'Kirby Star Allies (2018)',
    quote: '“Fighting off treasure hunters is hard work, and these two dream of setting off on an adventure. Rumor has it they\'ve built a raft... so why not leave? \'Because we\'ll sink! Can\'t you see we\'re made of metal?!”',
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/47/Kookoo.jpg/revision/latest/scale-to-width-down/310?cb=20181221153950&path-prefix=en',
    description: 'Goldon and Silvox appear as bosses in Kirby Star Allies. on the planet Mareen Moon. They are an upgraded version of Pon & Con, who appeared earlier as a mid-boss in the third area, Fortress of Shadows: Jambastion.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Gongoron',
    first_appearance: 'The Legend of Zelda: Phantom Hourglass',
    quote: null,
    species: 'Goron',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/2b/Gongoron.jpg/revision/latest?cb=20071214122837&path-prefix=en',
    description: null,
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Gooey',
    first_appearance: 'Kirby\'s Dream Land 2',
    quote: null,
    species: 'Dark Matter',
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/60/KSA_Gooey.png/revision/latest/scale-to-width-down/310?cb=20180831033127&path-prefix=en',
    description: null,
    search_type: 'Kirby_characters'
  },
  {
    name: 'Gooigi',
    first_appearance: 'Luigi\'s Mansion (2018, 3DS version)',
    quote: null,
    species: null,
    creator: 'Grezzo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/56/Gooigi_-_Luigi%27s_Mansion_3_art.png/revision/latest/scale-to-width-down/310?cb=20190621164445&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Gooma',
    first_appearance: 'Paper Mario (2000)',
    quote: null,
    species: 'Goomba',
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/76/Gooma.png/revision/latest?cb=20110326031634&path-prefix=en',
    description: 'Gooma is Goombario and Goombaria\'s kind grandmother in the game Paper Mario. Her name is a portmanteau of "Goomba" and "grandma", something she actually notes upon first meeting Mario. Mario only needs to talk to her once throughout his entire adventure. She, along with the rest of the Goomba family, lives in Goomba Village.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Goombario',
    first_appearance: 'Paper Mario (2000)',
    quote: null,
    species: 'Goomba',
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/46/Goombario1.jpg/revision/latest/scale-to-width-down/310?cb=20080701153748&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Goombella',
    first_appearance: 'Paper Mario: The Thousand-Year Door (2004)',
    quote: null,
    species: 'Goomba',
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/44/Goombella_%28Paper_Mario_The_Thousand-Year_Door%29.png/revision/latest/scale-to-width-down/310?cb=20121222175432&path-prefix=en',
    description: 'Goombella is a is a very smart and sassy female Goomba from Paper Mario: The Thousand-Year Door. A second-year wikipedia:Mixed-sex education student studying archaeology at the University of Goom, she is the first companion to join Mario on his quest. She provides tattle information to Mario about his location or the character who stands in front of him all throughout the game. She wears a helmet with a light and a matching shirt with a red scarf. Goombella\'s name might be a portmanteau between "Goomba" and the female name "Bella", short for "Isabella". It may also be a reference to portobella mushrooms. Also, "bella" is an existing adjective in Spanish and Italian, meaning "beautiful" and "good appealing", respectively.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Goombette',
    first_appearance: 'Super Mario Odyssey (2017)',
    quote: null,
    species: 'Goomba',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/f4/SMO_WK_Goombette.png/revision/latest?cb=20171217140027&path-prefix=en',
    description: 'Goombette is a female Goomba from the game Super Mario Odyssey. She is pink, similar to Goombella and Goombaria, and has a distinct blush, eyelashes, and a hat similar to Pauline\'s. She also holds Power Moon ; to get them, Mario must capture a Goomba and approach her. If she is standing on a raised ledge, Mario must hop on other Goombas to make a Goomba Tower high enough to reach the ledge she stands on. At this point, she becomes romantically charmed, and gives Mario a Power Moon while surrounded by hearts. If Mario approaches her in his normal form or aims at her after capturing a Sherm, she will panic for a split second before disappearing in a puff of smoke. After Mario leaves the area or lets go of the Sherm, she will return with the same purple effect that signifies a respawning enemy, despite her not being an actual enemy.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Goomboss',
    first_appearance: 'Paper Mario (2000)',
    quote: null,
    species: 'Goomba',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/ba/KingGoomba.png/revision/latest?cb=20071214140513&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Goompa',
    first_appearance: 'Paper Mario (2000)',
    quote: '“Putting on badges and taking them off is a vital skill.”',
    species: 'Goomba',
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e1/GoompaPaperMarioScreen.png/revision/latest/scale-to-width-down/310?cb=20120120202156&path-prefix=en',
    description: 'Goompa is Goombario and Goombaria\'s grandfather. He is an elder Goomba and has extensive knowledge of the world, which comes from his adventures as a youth. In his prime, he used to travel the globe with his friends Koopa Koot and Bootler. Now an elderly grandfather with back aches, Goompa has taught his grandson everything he knows.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Gooper Blooper',
    first_appearance: 'Super Mario Sunshine (2002)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/bb/Gooper_Blooper.png/revision/latest/scale-to-width-down/310?cb=20110918025031&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Gor Ebizo',
    first_appearance: 'The Legend of Zelda: Twilight Princess (2006)',
    quote: null,
    species: null,
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/f1/Gor_Ebizo.jpg/revision/latest?cb=20110220030505&path-prefix=en',
    description: 'Gor Ebizo is a character in The Legend of Zelda: Twilight Princess for the Wii and Nintendo GameCube. He is one of the four Goron Elders in the game, who each give Link a piece of the Goron Mines\' Boss Key. It would seem that Gor Ebizo is the third most important Elder, judging simply by the way in which his chamber is kept within the dungeon.\nAfter the dungeon is completed, Gor Ebizo travels down the mountain to Kakariko Village, where he decides to help Malo expand his business.\nIt is interesting to note that Gor Ebizo bears an obvious resemblance to the unnamed Goron Elder from The Legend of Zelda: Majora\'s Mask.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Gorea',
    first_appearance: 'Metroid Prime Hunters',
    quote: null,
    species: null,
    creator: 'Nintendo Software Technology',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/3c/Boss_gorea.jpg/revision/latest?cb=20180228200110&path-prefix=en',
    description: 'Gorea is the main antagonist of Metroid Prime Hunters. It is a powerful, malevolent being of unknown origin capable of absorbing weapons and powers from other lifeforms.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Goriya',
    first_appearance: 'The Legend of Zelda',
    quote: null,
    species: null,
    creator: 'Shigeru Miyamoto',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d2/Goriya_The_Legend_of_Zelda.png/revision/latest?cb=20100930030537&path-prefix=en',
    description: 'Goriyas are Mammalian humanoid monsters seen in several early games in The Legend of Zelda (series).  They are known for using a Boomerang as their primary weapon. They recently reappeared in The Legend of Zelda: A Link Between Worlds.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Gorko',
    first_appearance: 'The Legend of Zelda: Skyward Sword',
    quote: null,
    species: 'Goron',
    creator: 'Nintendo EADMonolith Soft',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a0/Gorko.png/revision/latest/scale-to-width-down/310?cb=20181010121525&path-prefix=en',
    description: 'Gorko is a traveling Goron archaeologist, who lived on the surface during the Sky Era in The Legend of Zelda: Skyward Sword. He study ancient devices left behind by an ancient civilization supposed to be Skyloft. He is encountered multiple times by Link during his quest.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Gourmet Guy',
    first_appearance: 'Paper Mario (2001)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/39/Gourmetguy.gif/revision/latest?cb=20071214141420&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Grace',
    first_appearance: 'Mario Golf (1999, Game Boy Color)',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/22/Grace_Mario_Golf.png/revision/latest?cb=20171031015121&path-prefix=en',
    description: null,
    search_type: 'Mario_characters'
  },
  {
    name: 'Gracie',
    first_appearance: 'Animal Forest (2008)',
    quote: null,
    species: 'Giraffe',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/cb/Gracie_NL.png/revision/latest/scale-to-width-down/251?cb=20150415173947&path-prefix=en',
    description: 'Gracie is a fashion-conscious giraffe who can be very boastful in the Animal Crossing (series). In Animal Crossing, she will give the player a shirt if they can clean her car by pressing the given button repeatedly. In Animal Crossing: Wild World, she will ask the player a series of fashion-related questions and give them clothes depending on what they said. In Animal Crossing City Folk, Gracie has moved up in the fashion world and has opened her own exclusive store in the city.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Gramps',
    first_appearance: 'The Legend of Zelda: A Link Between Worlds',
    quote: null,
    species: 'Hylian',
    creator: 'Nintendo EAD3',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a9/Gramps_ALBW.png/revision/latest?cb=20190707183925&path-prefix=en',
    description: 'Gramps is a Hylian that mainly serves as the StreetPass host and as a secret Bosses in The Legend of Zelda: A Link Between Worlds. Gramps is found in Kakariko Village where he will give Link the ability to engage other player in Shadow Link battles before challenging him himself.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Grams',
    first_appearance: 'Animal Crossing: New Leaf (2012)',
    quote: null,
    species: 'Turtle',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/03/Grams_NL.png/revision/latest/scale-to-width-down/310?cb=20191118083114&path-prefix=en',
    description: 'Grams is a turtle from the Animal Crossing (series). She is Kapp\'n\'s mother, Leilani\'s mother-in-law, and Leila\'s grandmother. Along with the rest of her family, she works at the Island; specifically, she sells souvenirs.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Great Deku Tree',
    first_appearance: 'The Legend of Zelda: Ocarina of Time (1998)',
    quote: null,
    species: 'Tree-deity',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/ff/Great_Deku_Tree_%28The_Wind_Waker%29.png/revision/latest/scale-to-width-down/310?cb=20170318132019&path-prefix=en',
    description: 'The Great Deku Tree is a recurring character in The Legend of Zelda (series) The Legend of Zelda (series) first appearing in The Legend of Zelda: Ocarina of Time. He is the guardian deity of the forest and leader of the Kokiri and Korok people. He is also shown to have strong connections to Hyrule\'s Fairy folk.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Great Fairy',
    first_appearance: 'The Legend of Zelda (1986)',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d3/GreatFairy.png/revision/latest?cb=20110116122604&path-prefix=en',
    description: 'Great Fairies are powerful, high ranking fairies in The Legend of Zelda (series). They live in various Great Fairy Fountains scattered throughout Hyrule. Their main purpose in the games are to power up Link\'s items. They first appeared in The Legend of Zelda: A Link to the Past for the Super Nintendo Entertainment System, where there were three different Great Fairies, each one updating different items.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Greenies',
    first_appearance: 'luigi\'s mansion 2',
    quote: null,
    species: 'ghost',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e1/Greenie.png/revision/latest/scale-to-width-down/310?cb=20200515193304&path-prefix=en',
    description: 'Greenies are the first ghosts that comes across in. The Greenies were originally helping, but when the shattered, they turn against him. Greenies usually appear in groups ranging from 2-5, and have 10. In the ScareScraper, sometimes their HP is more than 10. There is also a that expels large amounts of treasure when captured.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Greyson',
    first_appearance: 'The Legend of Zelda: Breath of the Wild (2017)',
    quote: '“I feel like... maybe I\'m not meant to toil away in obscurity like this. *sigh* Is there a job out there for me that\'d let me use my strength to make a difference?”',
    species: 'Goron',
    creator: 'Nintendo EAD3',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/fb/Greyson.jpg/revision/latest/scale-to-width-down/310?cb=20170529162314&path-prefix=en',
    description: 'Greyson is a character from The Legend of Zelda: Breath of the Wild. Greyson is a Goron that can be found in\nthe Southern Mine, located south of Goron City in the Eldin Province of Hyrule. Greyson is tired of mining without a purpose and wishes there was a way he could use his strength to make a difference. After Link inform him of Hudson (character) and the building of Tarrey Town in the Akkala Province, Greyson decide to move to the town along with his son Pelison to help removing the rocks near the town and later sell the precious minerals found in the rocks with the help of his son.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Grippy Toad',
    first_appearance: 'Star Fox Guard (2016)',
    quote: '“Testing, testing. Howdy! Name\'s Grippy. I\'m the boss of this here mining company.”',
    species: 'Toad',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b9/Grippy_Toad.png/revision/latest?cb=20191129020030&path-prefix=en',
    description: 'Grippy Toad is the uncle of Slippy Toad and Beltino Toad\'s brother. Grippy is the president of Corneria Precious Metals Ltd., a deep space mining company in charge of mining facilities in search for rare metals in space. Though, during this search, he comes across the trouble of being attacked by enemies.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Groose',
    first_appearance: 'The Legend of Zelda: Skyward Sword',
    quote: '“Oh, wait...I got it. You\'re here to talk about today\'s race. I can see it in those dopey eyes of yours. They\'re pleading, \'Oh, Groose, can you please find it in your heart to let me win today? Please!”',
    species: 'Hylian',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/73/SS_Groose.png/revision/latest/scale-to-width-down/250?cb=20170710201817&path-prefix=en',
    description: 'Groose ​is a character from The Legend of Zelda: Skyward Sword. A resident of Skyloft, he is Link\'s rival and a fellow student of the Knight Academy. He is envious of Link\'s special bond with Zelda, having unrequited romantic fantasies of the latter. Though he initially appears conceited and deluded as far as Zelda\'s attraction to him goes, over the course of the game, his personality changes for the better. He is quite proud of his distinctive red pompadour, a hairstyle which is shared by his Loftwing.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Gulley',
    first_appearance: 'The Legend of Zelda:A Link Between Worlds',
    quote: null,
    species: 'Hylian',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a5/Gulley_%28The_Legend_of_Zelda_A_Link_Between_Worlds%29.png/revision/latest/scale-to-width-down/310?cb=20140625235948&path-prefix=en',
    description: null,
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Gulliver',
    first_appearance: 'Animal Forest (2001)',
    quote: '“You wouldn\'t abandon a poor yet manly seagull like me, would you?”',
    species: 'Seagull',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/36/Gulliver_NL.png/revision/latest/scale-to-width-down/310?cb=20131105025726&path-prefix=en',
    description: null,
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Guru-Guru',
    first_appearance: 'The Legend of Zelda: Ocarina of Time (1998)',
    quote: null,
    species: null,
    creator: 'Shigeru Miyamoto',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/00/Guru-Guru_%28Oracle_of_Seasons%29.png/revision/latest?cb=20110729133609&path-prefix=en',
    description: 'Guru-Guru is a recurring character in the The Legend of Zelda (series). He is often seen playing a crank organ. While he is normally mild-mannered and is a cheerful man, when he becomes agitated, his face warps into a distorted view of his usual expression and the speed of his crank organ increases. He is associated with the " Song of Storms ", the song that his instrument plays in all of his appearances.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'HR-H',
    first_appearance: 'Kirby 64: The Crystal Shards',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/42/HrH.jpg/revision/latest?cb=20110211190615&path-prefix=en',
    description: 'HR-H is giant robot that oversees production on Shiver Star in Kirby 64: The Crystal Shards. He fights Kirby for a Crystal Shard, also transforming from his humanoid form to the HR-E vehicle.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Happy Mask Salesman',
    first_appearance: 'The Legend of Zelda: Ocarina of Time (1998)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/bb/MM_Happy_Mask_Salesman.png/revision/latest/scale-to-width-down/310?cb=20170802215854&path-prefix=en',
    description: null,
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Harriet',
    first_appearance: 'Animal Crossing: Wild World',
    quote: null,
    species: 'Poodle',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/9b/Harriet_NL.png/revision/latest/scale-to-width-down/310?cb=20150415173426&path-prefix=en',
    description: 'Harriet is a character who owns Shampoodle in the Animal Crossing (series). She first appeared in Animal Crossing: Wild World, where she could be found on the bottom floor of Nookington\'s - Tom Nook\'s final expansion of his store. She is a pink poodle who specializes in hairdressing. Her dream is to own a fancy barber store in a busy place. Harriet\'s big dream comes true in Animal Crossing: Let\'s Go To The City, where she owns a hairdressing salon in the city. Before she alters your hair style, she\'ll ask a variety of questions based on your personality.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Harvey',
    first_appearance: 'Animal Crossing: New Leaf (2012)',
    quote: '“...Harv? Oh! You mean me!”',
    species: 'Dog',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/6b/Harv.png/revision/latest?cb=20170618055255&path-prefix=en',
    description: null,
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Heavy Lobster',
    first_appearance: 'Kirby Super Star (1996)',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/86/Heavy_Lobster.jpg/revision/latest/scale-to-width-down/310?cb=20110311042626&path-prefix=en',
    description: 'Heavy Lobster is a boss from the Kirby (series), specifically Kirby Super Star and Kirby Super Star Ultra. It offers the Paint Kirby when Kirby inhales its paint blobs. Heavy Lobster is a boss in the sub-games Revenge of Meta Knight, Milky Way Wishes, The Arena, and Helper to Hero.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Hestu',
    first_appearance: 'The Legend of Zelda: Breath of the Wild',
    quote: null,
    species: 'Korok',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/fa/BotW_Hestu.png/revision/latest/scale-to-width-down/310?cb=20170711023905&path-prefix=en',
    description: 'Hestu ​is a character from The Legend of Zelda: Breath of the Wild. He is a large sized Korok who plays the maracas. He is briefly mentioned by the first Korok discovered by Link. Hestu is looking for them, which is why the first Korok met initially thought of meeting Hestu when Link arrived. The Korok offers Link a Korok Seed and asks him to return it to Hestu when he meets him. It is later revealed these Koroks had played a prank on Hestu and had taken his Maracas and removed the Maracas\' Korok Seeds which allow Hestu\'s Maracas to make noise.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Hinox',
    first_appearance: 'The Legend of Zelda: A Link to the Past',
    quote: null,
    species: null,
    creator: 'Takashi Tezuka',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/9e/BotW_Hyrule_Compendium_Hinox.png/revision/latest?cb=20170621173808&path-prefix=en',
    description: 'Hinox is a recurring enemy in The Legend of Zelda (series). They are gigantic cyclops creatures that hurl bombs at Link and occasionally try to pick up and toss him.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Hudson',
    first_appearance: 'The Legend of Zelda: Breath of the Wild (2017)',
    quote: '“Since I\'ve been transferred here, I\'ve decided to build a village from scratch. Every village needs a name though. I think I\'ll call it...Tarrey Town.”',
    species: 'Hylian',
    creator: 'Nintendo EAD3',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d4/Hudson_and_Rhondson.jpg/revision/latest/scale-to-width-down/310?cb=20170527170221&path-prefix=en',
    description: 'Hudson is a character from The Legend of Zelda: Breath of the Wild. He is a Hylian who can be found at the Hateno Village in the East Necluda region of Hyrule and later at Tarrey Town in the Akkala Province of Hyrule. Hudson is the founder of Tarrey Town as well as a carpenter working for Bolson and will ask Link to help him carrying the construction of the town to its end. He is the husband of Rhondson.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Hylia',
    first_appearance: 'The Legend of Zelda: Skyward Sword',
    quote: '“He who seeks the sacred flames, listen well, for I am the one guiding you from may place at the edge of time.”',
    species: 'Gods',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/0f/Hylia.png/revision/latest/scale-to-width-down/310?cb=20170221201057&path-prefix=en',
    description: null,
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Hyness',
    first_appearance: 'Kirby: Star Allies',
    quote: '“You see it now...don\'t you? Anyone who interrupts our revival ceremony... We must kindly ask that they... PLEASE DISAPPEAR FOREVER!”',
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/58/Hyness_Hooded.png/revision/latest/scale-to-width-down/310?cb=20191011162828&path-prefix=en',
    description: 'Hyness is the leader of the four Jambastion Mages, a group of powerful magic users who worship Void Termina. His goal is to resurrect Void Termina to have his revenge against those who banished them to the edge of the galaxy.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Ice Dragon',
    first_appearance: 'Kirby\'s Dream Land 2',
    quote: null,
    species: 'Dragon',
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/fd/TKCD_Ice_Dragon.png/revision/latest/scale-to-width-down/310?cb=20190730223636&path-prefix=en',
    description: 'The Ice Dragon is a boss that appears in Kirby\'s Dream Land 2 and Team Kirby Clash Deluxe, later making cameos in Kirby\'s Dream Land 3, Kirby 64, Kirby: Planet Robobot and Kirby Star Allies. In the anime, Kirby: Right Back at Ya!, he appears as a Demon Beast.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Ilia',
    first_appearance: 'The Legend of Zelda: Twilight Princess (2006)',
    quote: '“But, Link... Can you at least promise me this? No matter what happens on your journey, don\'t try to do anything...out of your league. Please. Just come home safely.”',
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/41/Ilia.png/revision/latest/scale-to-width-down/158?cb=20170125065054&path-prefix=en',
    description: null,
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Impa',
    first_appearance: 'The Legend of Zelda (In the Manual)',
    quote: null,
    species: 'Sheikah',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/0a/Impa_BotW.jpg/revision/latest/scale-to-width-down/310?cb=20170910161034&path-prefix=en',
    description: 'Impa is a Sheikah in the The Legend of Zelda (series). She first appeared in The Legend of Zelda as an old woman. In the game, she is saved by Link after a pack of Octorok attack her. She will then tell Link that Zelda has been taken captive by Ganon, and that he must save her. She has then appeared in many Zelda games as Zelda\'s most trusted advisor. She would later appear in Zelda II: The Adventure of Link, The Legend of Zelda: Ocarina of Time as Zelda\'s protector that teaches Link Zelda\'s Lullaby. In Ocarina of Time she is also one of the sages. She also appears in The Legend of Zelda: Oracle of Seasons / The Legend of Zelda: Oracle of Ages. In The Legend of Zelda: Skyward Sword, she serves as Zelda\'s protector. In The Legend of Zelda: A Link Between Worlds, she is Zelda\'s old nursemaid and a sage that is eventually captured by Yuga and must be saved by Link. In The Legend of Zelda: Breath of the Wild, she was one of the Sheikah who served Zelda 100 years in the past, which means that she is over 120 years old.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Ingo',
    first_appearance: 'The Legend of Zelda: Ocarina of Time (1998)',
    quote: null,
    species: null,
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/29/Ingo.png/revision/latest/scale-to-width-down/170?cb=20171030053509&path-prefix=en',
    description: 'Ingo is a character in The Legend of Zelda (series). He is the brother of Malon and the son of Talon and tries to acquire Lon Lon Ranch from him, sometimes succeeding. He remarkably resembles Luigi, and even wears a pendant of Bowser on his arm. At one point in the game, he traps Link in Lon Lon Ranch and you have to use Epona to get out.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Irene',
    first_appearance: 'The Legend of Zelda: A Link Between Worlds',
    quote: null,
    species: 'Hylian',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/40/Irene.png/revision/latest/scale-to-width-down/296?cb=20180419230102&path-prefix=en',
    description: 'Irene is one of the Seven Sages in The Legend of Zelda: A Link Between Worlds. She is the apprentice of the Witch who lives near Zora\'s Domain.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Iron Mom',
    first_appearance: 'Kirby Super Star (1996)',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b6/Iron_Mom.jpg/revision/latest/scale-to-width-down/310?cb=20110306230647&path-prefix=en',
    description: null,
    search_type: 'Kirby_characters'
  },
  {
    name: 'Isabelle',
    first_appearance: 'Animal Crossing: New Leaf',
    quote: '“Is there something I could help you with today?”',
    species: 'Dog',
    creator: 'Nintendo EADMonolith Soft',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a5/NH_Isabelle.png/revision/latest?cb=20200301173455&path-prefix=en',
    description: 'Isabelle is a character from the Animal Crossing (series). She acts as the secretary for your Town starting in Animal Crossing: New Leaf. She is very clumsy but works very hard. Her birthday, along with her twin brother Digby, is on December 20th.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Jack',
    first_appearance: 'Animal Crossing (2001)',
    quote: null,
    species: null,
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/f8/Jack_NL.png/revision/latest/scale-to-width-down/310?cb=20150426025209&path-prefix=en',
    description: 'Jack is a character in the Animal Crossing (series) Animal Crossing (series). He is a special visitor who appears in the player\'s village on October 31. He\'s a Jack-o-Lantern that gives the player gifts in Animal Crossing.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Jalhalla',
    first_appearance: 'The Legend of Zelda: The Wind Waker',
    quote: null,
    species: 'Poe',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/7f/TWW_Jalhalla.png/revision/latest/scale-to-width-down/310?cb=20181217094200&path-prefix=en',
    description: 'Jalhalla, also refered to as the Protector of the Seal, is the immense leader of the Poe in The Legend of Zelda: The Wind Waker. It serves as the Boss of the Earth Temple (Wind Waker). Jalhalla is in fact composed of many smaller Poes. It is the creature used by Ganondorf to kill Laruto, the previous Sage (Legend of Zelda).',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'James McCloud',
    first_appearance: 'Star Fox (1993, mentioned)Star Fox 64 (1997, appears in-game)',
    quote: '“Never give up, trust your instincts.”',
    species: 'Fox',
    creator: 'Takaya Imamura',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/45/James_McCloud_Star_Fox_Zero.png/revision/latest?cb=20181210225425&path-prefix=en',
    description: '',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'James Pierce',
    first_appearance: 'Metroid: Other M',
    quote: '“At this rate, the plan the Federation wanted to keep so secret would be revealed... So they sent in an assassin, someone to wipe out any survivors as well as anyone who learned about the secret project. KG, James, Anthony, and... Adam. Could one of them really be a traitor? Until I found out who it was, I decided to call the traitor the Deleter.”',
    species: 'Human',
    creator: 'Team Ninja',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/3e/James_Pierce_om_Artwork.png/revision/latest/scale-to-width-down/151?cb=20180308200047&path-prefix=en',
    description: 'James Pierce is a member of Adam Malkovich\'s 07th platoon. He is the communications expert of the unit.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Jingle',
    first_appearance: 'Animal Forest (2001)',
    quote: null,
    species: 'Reindeer',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/61/Jingle_NL.png/revision/latest/scale-to-width-down/310?cb=20150416163054&path-prefix=en',
    description: 'Jingle is a special visitor in the Animal Crossing (series). He comes to visit the player\'s town on Toy Day (Christmas Day) to deliver presents.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Joan',
    first_appearance: 'Animal Forest',
    quote: '“I\'ve been selling turnips here on Sunday morns for \'bout 60 years now. Maybe even more!”',
    species: 'Boar',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/4d/Joan.png/revision/latest/scale-to-width-down/310?cb=20131105032825&path-prefix=en',
    description: null,
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Jukid',
    first_appearance: 'Kirby Super Star (1996)',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/c8/KSSU_Jukid.png/revision/latest/scale-to-width-down/310?cb=20180311051946&path-prefix=en',
    description: null,
    search_type: 'Kirby_characters'
  },
  {
    name: 'K.K. Slider',
    first_appearance: 'Animal Crossing (2001)',
    quote: null,
    species: 'Dog',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/54/KK_Slider_NL.png/revision/latest/scale-to-width-down/310?cb=20150426021059&path-prefix=en',
    description: 'K.K. Slider is one of the Animal Crossing (series) Animal Crossing (series)\' most iconic characters. He is an anthropomorphic dog who plays music using a guitar. The Japanese name "Totakeke" is a reference to Nintendo composer and voice actor, Kazumi Totaka.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Kabu',
    first_appearance: 'Kirby\'s Dream Land',
    quote: null,
    species: null,
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/fc/KirbysDreamLand_Art_Kabu.gif/revision/latest?cb=20081012082057&path-prefix=en',
    description: 'Kabu is an enemy in the Kirby (series) looks like a stone tiki. Kabu spin around the level attempting to ram into Kirby, occasionally it will teleport to a different location.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Kaepora Gaebora',
    first_appearance: 'The Legend of Zelda: Ocarina of Time (1998)',
    quote: null,
    species: null,
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/7e/The_Legend_of_Zelda_Ocarina_of_Time-_Kaepora_Gaebora.png/revision/latest/scale-to-width-down/310?cb=20170803003050&path-prefix=en',
    description: 'Kaepora Gaebora (more commonly known as The Owl) is a major character featured in The Legend of Zelda: Ocarina of Time. He is the form that Rauru (Ocarina of Time) takes outside of the Sacred Realm.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Kafei',
    first_appearance: 'The Legend of Zelda: Majora\'s Mask (2000)',
    quote: null,
    species: null,
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/f8/The_Legend_of_Zelda_Majora%27s_Mask_-_Kafei.png/revision/latest/scale-to-width-down/245?cb=20170802215856&path-prefix=en',
    description: 'Kafei is a character from The Legend of Zelda: Majora\'s Mask. He\'s the son of Madame Aroma and Mayor Dotour, and is engaged to Anju. On the day of his marriage, Kafei goes missing and Madame Aroma asks Link to find him, giving you Kafei\'s Mask. It\'s latter revealed that Kafei is the child in the Keaton Mask that can briefly be seen near the town\'s river area.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Kaitlin',
    first_appearance: 'Animal Crossing: Wild World',
    quote: null,
    species: 'Cat',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/f2/Kaitlin_AC.png/revision/latest?cb=20191203125334&path-prefix=en',
    description: 'Kaitlin is a character from Animal Crossing: Wild World and Animal Crossing: City Folk. After the player first visits a town, or someone comes to their town, they will see a yellow cat. If it is Kaitlin, a mom who has lost her baby, she will guide the player to the town gate and report to them that she has lost her child. If the player travels to the town where she has lost her child, she will give you a gift.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Kanden',
    first_appearance: 'Metroid Prime Hunters (2006)',
    quote: null,
    species: null,
    creator: 'NST',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b4/Kanden1.jpg/revision/latest?cb=20071214125604&path-prefix=en',
    description: 'Kaden is a character in the Nintendo DS video game Metroid Prime Hunters.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Kapp\'n',
    first_appearance: 'Animal Crossing (2001)',
    quote: null,
    species: null,
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/9b/Kapp%27n_NL.png/revision/latest/scale-to-width-down/310?cb=20150921035430&path-prefix=en',
    description: 'Kapp\'n is a character from the Animal Crossing series. He is a kappa who rows a boat to a special island in the original Animal Crossing, drives the taxi in Animal Crossing: Wild World, the bus in, Animal Crossing: City Folk and the boat at Animal Crossing: New Leaf.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Kapson',
    first_appearance: 'The Legend of Zelda: Breath of the Wild',
    quote: '“If during your travels you meet any engaged couples, I would like you to introduce them to me. Joining two souls is a true honor, one I shall take my life on. Just one more wedding...and I shall be fulfilled.”',
    species: 'Zora',
    creator: 'Nintendo EAD3',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/2d/Kapson.jpg/revision/latest/scale-to-width-down/310?cb=20170528173123&path-prefix=en',
    description: 'Kapson is a character from The Legend of Zelda: Breath of the Wild. Kapson is a Zora who can be found on the second level of Zora\'s Domain behind the stairs leading to the throne room. Kapson is a former priest, whose only wish is to help one more engaged couple get married. When Link tell him about Hudson (character) and Rhondson\'s wedding, the priest will move to Tarrey Town where he will hold the ceremony, after that he will manage a free inn for travelers in need.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Kass',
    first_appearance: 'The Legend of Zelda: Breath of the Wild',
    quote: null,
    species: 'Rito',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d4/BotW_Kass.png/revision/latest/scale-to-width-down/310?cb=20170701213846&path-prefix=en',
    description: 'Kass ​is a character from The Legend of Zelda: Breath of the Wild. He is a wandering Rito minstrel who will play the accordion and sing an ancient verse to Link, telling him the location of several Shrine throughout Hyrule. Link can occasionally encounter Kass at certain stables where he will offer to sing Link an ancient song of Ganon\'s defeat 10,000 years prior.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Katie',
    first_appearance: 'Animal Crossing: Wild World (2005)',
    quote: '“Life is short and time is swift.”',
    species: 'Cat',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/72/KatieNL.png/revision/latest?cb=20191118030216&path-prefix=en',
    description: 'Katie is a character in the Animal Crossing (series) introduced in the Nintendo DS video game Animal Crossing: Wild World. She reappeared in the Wii game Animal Crossing: City Folk. She is a young kitten who appears in the player\'s town, requesting that the player assist her in finding her mother, Kaitlin.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Katrina',
    first_appearance: 'Animal Forest (2001)',
    quote: null,
    species: 'Black panther',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/65/Katrina_NL.png/revision/latest/scale-to-width-down/297?cb=20150426025907&path-prefix=en',
    description: 'Katrina is the fortune-telling black panther from the Animal Crossing (series). She was introduced in the first game, Animal Forest.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Katt Monroe',
    first_appearance: 'Star Fox 64 (1997)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/da/Katt.jpg/revision/latest?cb=20071214144234&path-prefix=en',
    description: 'Katt Monroe is a character in the Star Fox series whom first appeared in the game Star Fox 64 where she had a crush on Falco Lombardi. She later appeared in the game Star Fox Command as a playable character in the Asteroid Belt and Sector X',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Keeby',
    first_appearance: 'Kirby\'s Dream Course (1994)',
    quote: null,
    species: 'Kirby',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/8b/Keebyartwork.png/revision/latest?cb=20190111162723&path-prefix=en',
    description: null,
    search_type: 'Kirby_characters'
  },
  {
    name: 'Kibble Blade',
    first_appearance: 'Kirby\'s Return to Dream Land',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/fa/Kibble_blade.png/revision/latest?cb=20180603033317&path-prefix=en',
    description: 'Kibble Blade is a mini boss that first appeared in Kirby\'s Return to Dream Land. When inhaled Kirby gains the Cutter Kirby ability. Kibble Blade resembles a big Sir Kibble. He is once again a mini boss in Kirby: Planet Robobot where he appears to have been mechanised by the Haltmann Works Company.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Kicks',
    first_appearance: 'Animal Crossing: City Folk',
    quote: null,
    species: 'Skunk',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d8/Kicks.png/revision/latest?cb=20131105025927&path-prefix=en',
    description: null,
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Kilton',
    first_appearance: 'The Legend of Zelda: Breath of the Wild',
    quote: null,
    species: 'Hylian',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/dd/BotW_Kilton.png/revision/latest?cb=20180326082831&path-prefix=en',
    description: 'Kilton is an odd looking character from The Legend of Zelda: Breath of the Wild.He is first encountered at the Skull Lake in the Akkala region, he then runs the Fang and Bone shop where you can buy special "monster" items with "Mon" an exclusive currency that can be obtained by selling monster parts to Kilton himself.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Kine',
    first_appearance: 'Kirby\'s Dream Land 2 (1995)',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/06/Kine_KSS.png/revision/latest?cb=20180319222006&path-prefix=en',
    description: 'Kine the Sunfish is one of Kirby\'s allies in the Kirby (series). Kine first appeared in Kirby\'s Dream Land 2 with Rick and Coo.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'King Daltus',
    first_appearance: 'The Legend of Zelda: The Minish Cap',
    quote: null,
    species: 'Hylian',
    creator: 'Capcom',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/10/King_Daltus%28TMC%29.gif/revision/latest?cb=20191117084612&path-prefix=en',
    description: 'King Daltus is one of the King of Hyrule during what is known as the Force Era. In his case, he is the ruler of the kingdom during the events of The Legend of Zelda: The Minish Cap as well as the father of the Princess Zelda of this time.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'King Dedede',
    first_appearance: 'Kirby\'s Dream Land',
    quote: '“I need a monster to clobber that there Kirby!”',
    species: null,
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/29/Super_Smash_Bros._Ultimate_-_Character_Art_-_King_Dedede.png/revision/latest/scale-to-width-down/310?cb=20180613031129&path-prefix=en',
    description: 'King Dedede is the main antagonist of the Kirby series, and the archenemy of Kirby. He has appeared in almost every game in the series (with the exception of Kirby & the Amazing Mirror). While he is the main antagonist, he sometimes helps Kirby when there is a more evil entity at large.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'King Dodongo',
    first_appearance: 'The Legend of Zelda: Ocarina of Time (1998)',
    quote: null,
    species: 'Dodongo',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/26/HW_King_Dodongo.png/revision/latest/scale-to-width-down/310?cb=20180201020759&path-prefix=en',
    description: 'King Dodongo, also known as the Infernal Dinosaur, is a boss that appears in. The Legend of Zelda: Ocarina of Time He is a giant Dodongo fought at the end of the game\'s second dungeon Dodongo\'s Cavern.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'King Gustaf',
    first_appearance: 'The Legend of Zelda: The Minish Cap',
    quote: null,
    species: 'Hylian',
    creator: 'Capcom',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/eb/King_Gustaf.png/revision/latest?cb=20191117095127&path-prefix=en',
    description: 'King Gustaf is an ancient King of Hyrule who ruled at the beginning of the Force Era. Gustaf is the oldest known ruler of Hyrule aside from its founder, the Goddess Hylia inhabiting the body of the first Zelda. By the time of The Legend of Zelda: The Minish Cap, Gustaf has been dead for a long time and appears as a ghost.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'King Rhoam Bosphoramus Hyrule',
    first_appearance: 'The Legend of Zelda: Breath of the Wild',
    quote: '“I was King Rhoam Bosphoramus Hyrule. I was... the last leader of Hyrule. A kingdom which no longer exists.”',
    species: 'Hylian',
    creator: 'Nintendo EAD3',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/4b/King_Rhoam_Bosphoramus_Hyrule.png/revision/latest/scale-to-width-down/310?cb=20170525150635&path-prefix=en',
    description: 'King Rhoam Bosphoramus Hyrule is a character in The Legend of Zelda: Breath of the Wild. He is the former King of Hyrule as well as the father of Princess Zelda, he is the first person that Link encounters after awakening in the Shrine of Resurrection, under the guise of a simple Old Man.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'King Zora XVI',
    first_appearance: 'The Legend of Zelda: Ocarina of Time (1998)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/89/The_Legend_of_Zelda_Ocarina_of_Time_-_King_Zora.png/revision/latest/scale-to-width-down/310?cb=20170803003053&path-prefix=en',
    description: null,
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Kirby',
    first_appearance: 'Kirby\'s Dream Land (1992)',
    quote: '“Hi!~”',
    species: 'Unknown',
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/7b/Super_Smash_Bros._Ultimate_-_Character_Art_-_Kirby.png/revision/latest/scale-to-width-down/310?cb=20190710193136&path-prefix=en',
    description: null,
    search_type: 'Kirby_characters'
  },
  {
    name: 'Kittarihattari',
    first_appearance: null,
    quote: '“Kittarihattari, do it again! Chop up Kirby until he\'s in little pieces!”',
    species: 'Slice n\' Splice',
    creator: null,
    image: null,
    description: 'The Kittarihattari is a Demon Beast who appears in Kirby: Right Back at Ya!. (more specifically The Fofa Factor) It is a robot who can cut any foe it faces into two with the Moon Staff. These halves are actually the original version of the character (tinted one hue) and their gender-bender version (tinted the opposite hue), as seen when Kirby and King Dedede are split up. It can also fuse characters together with another rod, the Sun Staff, though it usually does this to mix them up. The Kittarihattari is defeated when Cutter Kirby slices its body in two with his Final Cutter, causing the Demon Beast\'s corpse to explode 20 seconds later and destroying the staves it carries. The staves take their design from Mr. Shine and Mr. Bright.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Knuckle Joe',
    first_appearance: 'Kirby Super Star (1996)',
    quote: null,
    species: null,
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/02/Knuckle_Joe_%28Kirby_Super_Star_Ultra_-_Small_Art%29.png/revision/latest?cb=20121218224952&path-prefix=en',
    description: null,
    search_type: 'Kirby_characters'
  },
  {
    name: 'Komali',
    first_appearance: 'The Legend of Zelda: The Wind Waker',
    quote: '“Psssssh! That\'s just a big, fat lie! It\'s easy to SAY you can do anything! Bragging doesn\'t cost a thing! I\'ll tell you what: If you can find me someone who can get past all the obstacles on Dragon Roost to get to Valoo... THEN I\'ll listen to anything you say!”',
    species: 'Rito',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/92/Prince_Komali.png/revision/latest?cb=20121015170155&path-prefix=en',
    description: '',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Kotake',
    first_appearance: 'The Legend of Zelda: Ocarina of Time (1998)',
    quote: '“With my frost, I will freeze him to his soul!”',
    species: 'Gerudo',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/dc/Koume_and_Kotake.png/revision/latest/scale-to-width-down/310?cb=20170507011219&path-prefix=en',
    description: 'Kotake is a witch that combines her power with Koume to create Twinrova. The two of them raised the first Gerudo king, Ganondorf, to turn him into their puppet. Ganondorf became stronger than either of them, then used his new form of power to try and take over Hyrule in The Legend of Zelda: Ocarina of Time. Kotake has power over ice.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Koume',
    first_appearance: 'The Legend of Zelda: Ocarina of Time (1998)',
    quote: '“With my flame, I will burn him to the bones!”',
    species: 'Gerudo',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/dc/Koume_and_Kotake.png/revision/latest/scale-to-width-down/310?cb=20170507011219&path-prefix=en',
    description: 'Koume is a witch that when combines her power with Kotake creates Twinrova. The two of them raised the first male Gerudo king, Ganondorf, to turn him into their puppet. Ganondorf becomes more powerful than either of them, and then used his new form of power to try and take over Hyrule in The Legend of Zelda: Ocarina of Time. Koume can control Fire.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Kracko',
    first_appearance: 'Kirby\'s Dream Land (1992)',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/83/Kracko.gif/revision/latest/scale-to-width-down/310?cb=20071214130400&path-prefix=en',
    description: null,
    search_type: 'Kirby_characters'
  },
  {
    name: 'Kraid',
    first_appearance: 'Metroid (1986)',
    quote: null,
    species: null,
    creator: 'Nintendo R&D1Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b4/ZM_Kraid.jpg/revision/latest/scale-to-width-down/310?cb=20180707030457&path-prefix=en',
    description: null,
    search_type: 'Metroid_characters'
  },
  {
    name: 'Krystal',
    first_appearance: 'Star Fox Adventures (2002)',
    quote: null,
    species: 'Canine',
    creator: 'Rare',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a6/Krystal_Assist_Trophy_%28SSBU%29.png/revision/latest?cb=20180916130708&path-prefix=en',
    description: null,
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Labelle',
    first_appearance: 'Animal Crossing: City Folk (2008)',
    quote: '“Ask for a hammer, you get a needle.”',
    species: 'Hedgehog',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/fe/Labelle_NL.png/revision/latest/scale-to-width-down/310?cb=20131105025956&path-prefix=en',
    description: 'Label "Labelle" Able is a character from the Animal Crossing (series). She is the third sister of the Able Sisters, but because of her late introduction to the series, she is not considered as one of the two primary sisters. In Animal Crossing: City Folk, she worked in a shop in the city called GracieGrace, which is owned by Gracie, the giraffe fashion designer. In Animal Crossing: New Leaf, she worked at the Able Sisters shop. In Animal Crossing: New Horizons, she occasionally appears in front of the resident service\'s building. In Animal Crossing: City Folk, Labelle acted as if happy by the choice of parting from her sisters, Mabel and Sable, but sometimes missed her siblings.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Lana',
    first_appearance: 'Hyrule Warriors (2014)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/fb/Lana_%28Hyrule_Warriors%29.png/revision/latest/scale-to-width-down/310?cb=20140725192517&path-prefix=en',
    description: 'Lana is a playable character original to Hyrule Warriors. She is a sorceress with light-blue hair armed with a book of magic that she uses to cast barriers to disperse enemies. She is described as a very energetic girl with a vast knowledge of magic and monsters.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Lanayru',
    first_appearance: 'The Legend of Zelda: Skyward Sword',
    quote: null,
    species: 'Dragon/Deity',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/38/Lanayru_SS.png/revision/latest?cb=20190825125604&path-prefix=en',
    description: 'Lanayru is one of the three guardian Deities in The Legend of Zelda series of Hyrule in The Legend of Zelda (series) The Legend of Zelda (series). Lanayru is mainly featured in The Legend of Zelda: Skyward Sword as the game takes place in the period where the Dragons are tasked with protecting the land in the absence of Goddess Hylia. As his name suggest, Lanayru watches over the Lanayru (Province).',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Lanayru',
    first_appearance: 'The Legend of Zelda: Twilight Princess (2006)',
    quote: null,
    species: 'Light Spirit/Minor Deity',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/7c/TPHD_Lanayru_Artwork.png/revision/latest/scale-to-width-down/310?cb=20170325161424&path-prefix=en',
    description: 'Lanayru is a character in The Legend of Zelda: Twilight Princess for the Wii and Nintendo GameCube. He is the fourth and final of the Light Spirits that Link must find through-out the game. Link will find Lanayru near Lake Hylia, and appears as a serpent and he is the one to tell the legend of the Twili to him',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Landia',
    first_appearance: 'Kirby\'s Return to Dream Land',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/98/KPR_Landia_Model.png/revision/latest/scale-to-width-down/310?cb=20180705011639&path-prefix=en',
    description: null,
    search_type: 'Kirby_characters'
  },
  {
    name: 'Laruto',
    first_appearance: 'The Legend of Zelda: The Wind Waker',
    quote: null,
    species: 'Zora',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/ab/Laruto.png/revision/latest/scale-to-width-down/310?cb=20180421071032&path-prefix=en',
    description: null,
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Leif (Animal Crossing)',
    first_appearance: 'Animal Crossing: New Leaf (2012)',
    quote: null,
    species: 'Sloth',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/35/Leif_NL.png/revision/latest/scale-to-width-down/310?cb=20150911215735&path-prefix=en',
    description: 'Leif is a sloth in the Animal Crossing (series), introduced in Animal Crossing: New Leaf. He runs the town\'s gardening shop and sells various plants. His name comes from the Norse word of\'leaf\' and is a play on the word, due to how he owns a gardening store and how sloths live in trees. His Japanese name is the English word "Lazy", referring to how sloths act.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Leila',
    first_appearance: 'Animal Crossing: New Leaf (2012)',
    quote: null,
    species: 'Turtle',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b9/Leila_NL.png/revision/latest/scale-to-width-down/310?cb=20191118055633&path-prefix=en',
    description: 'Leila is a turtle from the Animal Crossing (series). She is Kapp\'n\'s and Leilani\'s daughter and Grams\' granddaughter. She works at the Island along with Grams and Leilani and acts as a merchant that the player can sell items to for small amounts of Bells.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Leilani',
    first_appearance: 'Animal Crossing: New Leaf (2012)',
    quote: '“The captain\'s wife steers the ship.”',
    species: 'Turtle',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/bc/Leilani_NL.png/revision/latest/scale-to-width-down/310?cb=20191118045208&path-prefix=en',
    description: 'Leilani is a turtle from the Animal Crossing (series). She is Kapp\'n\'s wife, Leila\'s mother, and Grams\' daughter-in-law. Along with Grams and Leila, she works at the information desk on the Island in Animal Crossing: New Leaf, where she organizes various tours for the player.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Leon Powalski',
    first_appearance: 'Star Fox 64 (1997)',
    quote: '“Andross has ordered us to take you down.”',
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/9d/Leon_Powalski_Assault.png/revision/latest?cb=20110220043739&path-prefix=en',
    description: 'Leon Powalski is a member of Star Fox\'s arch-rival team, Star Wolf, led by Wolf O\'Donnell. Leon premiered in 1995 in the game Star Fox 2. He is a chameleon, very skilled in piloting a Wolfen, the choice airship of Star Wolf, and prefers to be called the "Great" Leon.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Linebeck',
    first_appearance: 'The Legend of Zelda: Phantom Hourglass',
    quote: null,
    species: 'Hylian',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/2c/Linebeck-0.png/revision/latest/scale-to-width-down/304?cb=20150531001707&path-prefix=en',
    description: 'Captain Linebeck is a main character in the Nintendo DS video game The Legend of Zelda: Phantom Hourglass. During the whole game, he\'ll take Link across the sea via S.S. Linebeck in hopes that he\'ll get a nice amount of treasure in the end. He agrees to go along after he learns that the treasure that he seeks is found on Ghost Ship (The Legend of Zelda: Phantom Hourglass) that kidnapped Princess Zelda.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Link',
    first_appearance: 'The Legend of Zelda',
    quote: '“Come on!”',
    species: 'Hylian',
    creator: 'Shigeru Miyamoto',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/f2/The_Legend_of_Zelda_-_Link%E2%80%99s_Awakening_-_Link.png/revision/latest/scale-to-width-down/310?cb=20190806182731&path-prefix=en',
    description: 'Link is the main protagonist of The Legend of Zelda (series). He made his debut in the Nintendo Entertainment System / Famicom Disk System video game The Legend of Zelda in 1986.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Link\'s Grandma',
    first_appearance: 'The Legend of Zelda: The Wind Waker',
    quote: null,
    species: 'Hylian',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/8f/Grandma_The_Wind_Waker_HD.png/revision/latest/scale-to-width-down/279?cb=20190816154251&path-prefix=en',
    description: 'Link\'s Grandma is an old Hylian woman featured primarily in The Legend of Zelda: The Wind Waker. She lives on Outset Island with her two grandchildren, Link and Aryll, and mainly serves as a supportive character in the game.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Linkle',
    first_appearance: 'Hyrule Warriors Legends',
    quote: null,
    species: 'Hylian',
    creator: 'Omega ForceTeam Ninja',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/bb/HWL_Linkle.png/revision/latest/scale-to-width-down/233?cb=20160321211115&path-prefix=en',
    description: 'Linkle ​is a character introduced in Hyrule Warriors Legends. She is the main character of the Linkle\'s Tale side-story.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Lloid',
    first_appearance: 'Animal Crossing: City Folk (2008)',
    quote: null,
    species: 'Gyroid',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/45/Lloid.png/revision/latest?cb=20131105030005&path-prefix=en',
    description: null,
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Lololo & Lalala',
    first_appearance: 'Kirby\'s Dream Land (1992)',
    quote: null,
    species: null,
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/26/Lololo_%26_Lalala.jpg/revision/latest?cb=20110305203227&path-prefix=en',
    description: 'Lololo & Lalala are a pair of bosses from the Kirby (series) generally fought as a team. They also appear in the anime, Kirby: Right Back at Ya!',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Lord Jabu-Jabu',
    first_appearance: 'The Legend of Zelda: Ocarina of Time (1998)',
    quote: null,
    species: 'Deity',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d5/Jabu_Jabu_face_Model.png/revision/latest?cb=20181011124722&path-prefix=en',
    description: 'Lord Jabu-Jabu is a whale-like character that serves as the guardian Deities in The Legend of Zelda series of the Zora in The Legend of Zelda (series). He also happens to be the third dungeon in The Legend of Zelda: Ocarina of Time as well as the seventh dungeon in The Legend of Zelda: Oracle of Ages.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Lord of the Mountain',
    first_appearance: 'The Legend of Zelda: Breath of the Wild',
    quote: null,
    species: 'Spirit',
    creator: 'Nintendo EAD3',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/9d/BotW_Hyrule_Compendium_Lord_of_the_Mountain.png/revision/latest?cb=20170628152209&path-prefix=en',
    description: 'The Lord of the Mountain, also known as Satori, is a spirit in The Legend of Zelda: Breath of the Wild. It act as a guardian deity for the animals "that make their homes in the forest". The Lord of the Mountain can be found near the top of Satori Mountain and it is said to be the reincarnation of a sage that protects Hyrule.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Lottie',
    first_appearance: 'Animal Crossing: Happy Home Designer (2015)',
    quote: '“Let\'s get you in a new house today!”',
    species: 'Otter',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/ef/Animal_Crossing_-_Happy_Home_Designer_-_Lottie.png/revision/latest/scale-to-width-down/310?cb=20150620183416&path-prefix=en',
    description: 'Lottie is a special character who made her first appearance in Animal Crossing: Happy Home Designer.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Lucy Hare',
    first_appearance: 'Star Fox Command (2006)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/1d/Lucy.jpg/revision/latest?cb=20071214122344&path-prefix=en',
    description: 'Lucy Hare is a character in the Star Fox (series) who first appeared in Star Fox: Command. She is the very beautiful adult daughter of Peppy Hare and his late wife Vivian Hare. Lucy teaches Astrophysics on Fichina, and is an accomplished pilot, having been trained by her father, who she became close to following the death of her mother many years ago due to illness.\nShe is the only child of Peppy and Vivian Hare. She is roughly the same age as Fox and Slippy and it is implied they may have known each other previously (likely as friends).',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Luna',
    first_appearance: 'Animal Crossing: New Leaf (2012)',
    quote: '“Dreams are but a reflection of your unconscious self.”',
    species: 'Tapir',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/fb/LunaNL.png/revision/latest/scale-to-width-down/254?cb=20191118025456&path-prefix=en',
    description: 'Luna is a tapir in the Animal Crossing (series). She runs the Dream Suite, a salon where players can visit other towns in their dreams.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Lyle',
    first_appearance: 'Animal Crossing: Wild World',
    quote: null,
    species: 'Otter',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/5d/Lyle_NL.png/revision/latest/scale-to-width-down/310?cb=20150426024943&path-prefix=en',
    description: 'Lyle is a business man, who is a weasel both metaphorically and literally, will appear every Saturday and ask for 3,000 Bells for health insurance in Animal Crossing: Wild World. In Animal Crossing: City Folk he can be found in the city.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Mace Knight',
    first_appearance: 'Kirby\'s Adventure (1993)',
    quote: null,
    species: null,
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/3b/Mace_Knight.jpg/revision/latest/scale-to-width-down/310?cb=20110315203023&path-prefix=en',
    description: 'Mace Knight is a character and enemy from the Kirby (series).  Mace Knight uses a mace for a weapon. Mace Knight is a member of the Meta-Knights and can be summoned by Galacta Knight.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Madame Aroma',
    first_appearance: 'The Legend of Zelda: Majora\'s Mask (2000)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/95/The_Legend_of_Zelda_Majora%27s_Mask_-_Madame_Aroma.png/revision/latest/scale-to-width-down/310?cb=20170802215904&path-prefix=en',
    description: 'Madame Aroma is a character from the Nintendo 64 video game The Legend of Zelda: Majora\'s Mask. She is the wife of Clock Town\'s mayor - Dotour. She and Dotour have a son named Kafei who, during the events in Legend of Zelda: Majora\'s Mask, goes missing.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Madeline Bergman',
    first_appearance: 'Metroid: Other M',
    quote: null,
    species: null,
    creator: 'Team Ninja',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/92/Madeline_Bergman.png/revision/latest/scale-to-width-down/147?cb=20180228235455&path-prefix=en',
    description: 'Madeline Bergman is a notable character in Metroid: Other M. She is the site manager and development director of the Galactic Federation\'s secret bio-weapons projects on the BOTTLE SHIP.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Magman',
    first_appearance: 'Kirby 64: The Crystal Shards',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/45/Magman_%28Kirby%29.png/revision/latest?cb=20120301003102&path-prefix=en',
    description: 'Magman was a giant lava monster that lives in the volcano in Kirby 64: The Crystal Shards. He fights Kirby for a Crystal Shard on Neo Star. When he dies he melts into the ground.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Magolor',
    first_appearance: 'Kirby\'s Return to Dreamland',
    quote: null,
    species: 'Unknown',
    creator: 'HAL Laboratory, Inc.',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/2d/KSA_Magolor_artwork.png/revision/latest/scale-to-width-down/310?cb=20181130211505&path-prefix=en',
    description: 'Magolor is a character in the Kirby (series). He first appeared as the hidden true main antagonist of Kirby\'s Return to Dream Land and has since redeemed himself by helping Kirby in various occasions.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Maiamai Children',
    first_appearance: 'The Legend of Zelda: A Link Between Worlds',
    quote: null,
    species: 'Maiamai',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/1f/ALBW_Lost_Maiamai_Artwork.png/revision/latest/scale-to-width-down/310?cb=20190710010530&path-prefix=en',
    description: 'The Maiamai Children is the name used to refer to Mother Maiamai\'s 100 Maiamai children. They debuted in The Legend of Zelda: A Link Between Worlds where they serves as the main optional collectible of the game.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Maimaigoon',
    first_appearance: 'Kirby: Right Back at Ya!',
    quote: '“You\'re finished, Kirby!”',
    species: 'Monster',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/29/Maimaigoon.png/revision/latest/scale-to-width-down/310?cb=20200418163430&path-prefix=en',
    description: 'Maimaigoon is a psychopathic Monster (Kirby) that is encountered in the Kirby: Right Back at Ya! episode " Shell-Shocked ". He was created accidentally when Escargoon lost his shell and put on a steel-hard one purchased from Nightmare Enterprises, which turned him into a monster. He is fought by Hammer Kirby.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Makar',
    first_appearance: 'The Legend of Zelda: The Wind Waker (2002)',
    quote: null,
    species: 'Korok',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/ac/Makar.png/revision/latest/scale-to-width-down/310?cb=20150429203544&path-prefix=en',
    description: 'Makar is the sage of wind from The Legend of Zelda: The Wind Waker for the Nintendo GameCube.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Makeela Riju',
    first_appearance: 'The Legend of Zelda: Breath of the Wild (2017)',
    quote: null,
    species: 'Gerudo',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b5/Riju.png/revision/latest/scale-to-width-down/310?cb=20170401165109&path-prefix=en',
    description: 'Makeela Riju, also known as Riju, is a member of the Gerudo Royal line and their current monarch, ruling over them from Gerudo Town during the events of The Legend of Zelda: Breath of the Wild. She is very young, and was thrust into her position of power only because of her mother\'s passing.\nRiju also possesses a personal Sand Seal named Patricia, and is shown to be a skilled Sand Seal surfer.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Malanya',
    first_appearance: 'The Legend of Zelda: Breath of the Wild',
    quote: '“I suppose you derserve a reward for setting me free...What shall I do...Shall I make you my meal?! Hahaha, I only jest...”',
    species: 'Horse God',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e2/BotW_Malanya.png/revision/latest/scale-to-width-down/310?cb=20170419210912&path-prefix=en',
    description: 'Malanya is a character in The Legend of Zelda: Breath of the Wild, he is a deity who watch over the horses of the world and will revive the horses that died during Link\'s journey.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Malladus',
    first_appearance: 'The Legend of Zelda: Spirit Tracks',
    quote: null,
    species: null,
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/9a/Malladus.png/revision/latest?cb=20181030101727&path-prefix=en',
    description: 'Malladus, the main antagonist of the game The Legend of Zelda: Spirit Tracks, is the Demon King and enemy of the spirits. Years ago, after a war between the spirits and demons, Malladus was sealed beneath the ground. The spirits used the Spirit Tracks as shackles, stretching across the land. In the center of the Spirit Tracks, the Tower of Spirits acted as a lock.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Malo',
    first_appearance: 'The Legend of Zelda: Twilight Princess',
    quote: null,
    species: 'Human',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/30/282px-TP_Malo_Render.png/revision/latest/scale-to-width-down/235?cb=20200312162816&path-prefix=en',
    description: 'Malo is a young Human in The Legend of Zelda (series), mainly featured in The Legend of Zelda: Twilight Princess. He is the son of Jaggle and Pergie as well as Talo\'s brother.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Malon',
    first_appearance: 'The Legend of Zelda: Ocarina of Time',
    quote: null,
    species: 'Hylian',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/30/Malon.png/revision/latest?cb=20120218004223&path-prefix=en',
    description: 'Malon is a recurring character in The Legend of Zelda (series) The Legend of Zelda (series). She is typically known as a girl who lives in a ranch with her father Talon, but she was most famous for being the one who introduced Link to Epona in The Legend of Zelda: Ocarina of Time.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Maple',
    first_appearance: 'The Legend of Zelda: Oracle of Ages/Seasons (2001)',
    quote: '“Ow! Ow! Ow!!! Watch where you\'re goin\'! You just hit Maple, the Great Witch Syrup\'s apprentice! Thanks to you, all the stuff fell out of my bag! The Great Witch will be mad!”',
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/61/Maple.png/revision/latest?cb=20170709232624&path-prefix=en',
    description: null,
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Mara',
    first_appearance: 'Kirby\'s Epic Yarn',
    quote: null,
    species: null,
    creator: 'Good-Feel,HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/10/KEY_Mara.png/revision/latest?cb=20101028201403&path-prefix=en',
    description: 'Mara is a character in the game Kirby\'s Epic Yarn. She is one of the residents that lives in the apartment complex in Quilty Square, and lives in apartment #302 after Kirby fills it with the right furniture. She is the last resident that comes to live in the apartments, but many think she has the most fun game. The game that she plays with the player is a race. She challenges the player to a race through part of a random level, and if the player gets to the end first, he wins. The races get harder and harder as the player beats them.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Marcus McCloud',
    first_appearance: 'Star Fox: Command (2006)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/86/Marcus_McCloud/revision/latest?cb=20080831193937&path-prefix=en',
    description: 'The son of Fox McCloud and Krystal. He has Fox\'s body, but inherits his mother\'s blue fur and eyes. After the defeat of the Anglers, Fox and Krystal eventually got married and had a son. Marcus also inherits his father\'s and his grandfather\'s flying skill, which is "unbelievable". Wanting to follow in his father\'s footsteps, he joined the Cornerian Flight Academy when he was old enough.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Marx',
    first_appearance: 'Kirby Super Star',
    quote: null,
    species: null,
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/0a/Marx_SSBU.png/revision/latest/scale-to-width-down/310?cb=20190420195558&path-prefix=en',
    description: 'Marx is a Kirby (series) character who first appeared in the Super Nintendo Entertainment System game Kirby Super Star as the game\'s main antagonist. He is final boss of the subgame, Milky Way Wishes and the Arena. He has then made multiple cameos in other Kirby games until Kirby Star Allies, which marks his first playable appearance.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Marx Soul',
    first_appearance: 'Kirby Super Star Ultra (2008)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b2/Marx_Soul.png/revision/latest?cb=20110415140548&path-prefix=en',
    description: 'Marx Soul is the final boss of Kirby Super Star Ultra. Marx Soul was absent in the original Kirby Super Star.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Master Hand',
    first_appearance: 'Super Smash Bros. (1999)',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/af/Super_Smash_Bros._Ultimate_-_Character_Art_-_Master_Hand.png/revision/latest/scale-to-width-down/310?cb=20181101155005&path-prefix=en',
    description: null,
    search_type: 'Kirby_characters'
  },
  {
    name: 'Master Kohga',
    first_appearance: 'The Legend of Zelda: Breath of the Wild (2017)',
    quote: '“I need to bust out my serious moves... A secret technique taught by my father\'s mother\'s father! It will...destroy you!”',
    species: 'Sheikah',
    creator: 'Nintendo EAD3',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/99/Master_Kohga.png/revision/latest/scale-to-width-down/310?cb=20170531162126&path-prefix=en',
    description: null,
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Max Profitt Haltmann',
    first_appearance: 'Kirby: Planet Robobot',
    quote: '“I am the president and CEO of Haltmann Works Company.My subordinates call me...President Haltmann”',
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/05/President_Haltmann_Official_Art.png/revision/latest?cb=20170217210013&path-prefix=en',
    description: 'Max Profitt Haltmann also known as President Haltmann is a character from the Kirby (series).He serves as the primary antagonist of Kirby: Planet Robobot he is the CEO of Haltmann Works Company in the game.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Mayor Blustergas',
    first_appearance: 'Kirby: Right Back at Ya!',
    quote: null,
    species: 'Cappy',
    creator: 'Warpstar Inc.',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/72/HnK_MayorLen.png/revision/latest/scale-to-width-down/310?cb=20200422152138&path-prefix=en',
    description: 'Mayor Len Blustergas is the mayor of Cappy Town in Kirby: Right Back at Ya!. He is the wealthiest Cappy resident, owning both a car (the only one not owned by King Dedede) and a sheep farm. He is married to Hana (Kirby) and has three grandsons.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Medli',
    first_appearance: 'The Legend of Zelda: The Wind Waker',
    quote: null,
    species: 'Rito',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d5/Medli.png/revision/latest/scale-to-width-down/310?cb=20150510025028&path-prefix=en',
    description: 'Medli is a character that first appeared in The Legend of Zelda: The Wind Waker for the Nintendo GameCube.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Melissa Bergman',
    first_appearance: 'Metroid: Other M',
    quote: '“I was not wrong. The humans were foolish and I was forced to bring judgment on them. And yet, because of you... I failed. You must understand the weight of your crime. You must pay the price for what you\'ve done.”',
    species: null,
    creator: 'Team Ninja',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/bf/Melissa_Bergman_%28MB%29.png/revision/latest?cb=20180228224047&path-prefix=en',
    description: 'Melissa Bergman (Also known as MB) is the main antagonist of Metroid: Other M. She is a human android who was created with Mother Brain (Metroid)\'s intellectual data, and consequently developed Mother Brain\'s persona.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Meta Knight',
    first_appearance: 'Kirby\'s Adventure',
    quote: '“You have much yet to learn.”',
    species: null,
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/4d/Super_Smash_Bros._Ultimate_-_Character_Art_-_Meta_Knight.png/revision/latest/scale-to-width-down/310?cb=20180613022654&path-prefix=en',
    description: 'Meta Knight (メタナイト,) is a main character and anti-hero in the Kirby series. He\'s a chivalrous masked swordsman that follows his own code of honor. Sometimes appearing as an ally of Kirby and other times as a rival, he seems to have a vested interest in Kirby\'s abilities. Meta Knight wields the legendary sword Galaxia with incredible speed and his cape possesses many unusual abilities including the ability to transform into a pair of bat wings. While he appears to be of the same species as Kirby, his exact relation to Kirby is not known for certain.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Metroid Prime (boss)',
    first_appearance: 'Metroid Prime',
    quote: null,
    species: 'Metroid',
    creator: 'Retro Studios',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a8/Metroid_Prime.jpg/revision/latest?cb=20121113145902&path-prefix=en',
    description: 'Metroid Prime also known as The Worm or is a disgustingly mutated Metroid (species) living in the depths of Tallon IV, is able to produce Phazon, and serves as the final boss of Metroid Prime as well as the main antagonist of the Metroid Prime trilogy.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Mido',
    first_appearance: 'The Legend of Zelda: Ocarina of Time',
    quote: null,
    species: 'Kokiri',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/c5/Mido.jpg/revision/latest?cb=20080726175847&path-prefix=en',
    description: '',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Mikau',
    first_appearance: 'The Legend of Zelda: Majora\'s Mask (1998)',
    quote: '“Somebody... Unghh... Please... Get me... to shore... Uuungh... I am Mikau of the Zora people... guitarist in the Zora band... I think this is it for me... My final message... Will you listen to it?”',
    species: 'Zora',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/78/Mikau.png/revision/latest?cb=20170131203525&path-prefix=en',
    description: 'Mikau ​is a character in The Legend of Zelda: Majora\'s Mask.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Miracle Matter',
    first_appearance: 'Kirby 64: The Crystal Shards',
    quote: null,
    species: 'Dark Matter',
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e3/Miracle_Matter_Kirby_64_The_Crystal_Shards.png/revision/latest?cb=20181105194904&path-prefix=en',
    description: 'Miracle Matter is one of the last bosses of the Nintendo 64 video game Kirby 64: The Crystal Shards. He is fought on Ripple Star, and his arena takes place in (possibly) the throne room. The tiny protagonist Kirby will be able to take on the beast after collecting every single Crystal Shard that there is to be collected (excluding the final one, which will be obtained after defeating Miracle Matter). At first assuming when Miracle Matter is fought that he is the final boss of the game is understandable, though it\'ll soon be revealed that another character, known simply as 0², is in fact the true final boss.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Miyu',
    first_appearance: 'Star Fox 2 (2017)',
    quote: null,
    species: 'Lynx',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/ef/Star_Fox_2_Miyu.png/revision/latest?cb=20180407205207&path-prefix=en',
    description: 'Miyu is a character from the formerly canceled game Star Fox 2. \nShe is a beautiful female human-like lynx with a tomboyish personality.\nAs with Fay, Miyu pilots a faster Arwing model type called the Interceptor, which lacks in hull armor compared to the other Arwing models. However, an upgrade found later in the game can make up for this loss of defense.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Mogenar',
    first_appearance: 'Metroid Prime 3: Corruption (2007)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/4f/Mogenar.jpg/revision/latest/scale-to-width-down/310?cb=20071214140758&path-prefix=en',
    description: 'Mogenar is a robot boss in the Wii video game Metroid Prime 3: Corruption. He is apparently an accident war Golem who\'s a colossal being. At the beginning of the fight, he\'ll grab four red colored orbs and merge them into his body, all of which give him power.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Molgera',
    first_appearance: 'The Legend of Zelda: The Wind Waker',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/7f/WW_Molgera.png/revision/latest/scale-to-width-down/310?cb=20181217100528&path-prefix=en',
    description: 'Molgera, also known as the Protector of the Seal, is a gigantic sand dwelling creature that serves as the Wind Temple Boss in The Legend of Zelda: The Wind Waker. It was the creature Ganondorf sent to kill Fado (The Wind Waker), the Sage (Legend of Zelda).',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Mollusque-Lanceur',
    first_appearance: 'Super Mario Odyssey',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/01/Mollosque-Lanceur_Artwork_SMO.jpg/revision/latest/scale-to-width-down/310?cb=20171031121354&path-prefix=en',
    description: 'Brigadier Mollosque-Lanceur III, Dauphin of Bubblaine (simply called Mollusque-Lanceur) is the Boss of the Seaside Kingdom. His design is a cross between an octopus and a french noble from the Ancien Régime era. He hold a purple Multi Moon that will be dropped once he is defeated',
    search_type: 'Mario_characters'
  },
  {
    name: 'Monk Maz Koshia',
    first_appearance: 'The Legend of Zelda: Breath of the Wild',
    quote: null,
    species: 'Sheikah',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/3a/BotW_Monk_Maz_Koshia_Model.png/revision/latest/scale-to-width-down/310?cb=20180519034440&path-prefix=en',
    description: 'The Monk Maz Koshia is a Sheikah as well as a Boss in The Legend of Zelda: Breath of the Wild. He is fought at the end of the Final Trial as the last trial before being rewarded with the Master Cycle Zero. He is a Sheikah Monk who is tasked with testing those who want to pilot a Divine Beast.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Moon',
    first_appearance: 'The Legend of Zelda: Majora\'s Mask (2000)',
    quote: null,
    species: null,
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/ac/Moon_Assist_Trophy_%28SSBU%29.png/revision/latest?cb=20180916130512&path-prefix=en',
    description: 'The Moon is (arguably) a character featured in The Legend of Zelda: Majora\'s Mask. In the game, the Moon was a puppet of Majora\'s Mask (item) that was intended to crash into Termina.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Moosh',
    first_appearance: 'The Legend of Zelda: Oracle of Ages/Seasons',
    quote: null,
    species: 'Bear',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/37/Moosh.png/revision/latest?cb=20170709194639&path-prefix=en',
    description: 'Moosh ​is a character from The Legend of Zelda: Oracle of Ages and The Legend of Zelda: Oracle of Seasons. He is a blue bear with the power of flight, allowing Link to cross sections of holes when riding him. However, he cannot fly over deep water without sinking. He is also capable of pounding the ground with great force, destroying nearby enemies. He can be called with Moosh\'s Flute.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Morpho Knight',
    first_appearance: 'Kirby: Star Allies',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/1c/KSA_Morpho_Knight_model.png/revision/latest/scale-to-width-down/310?cb=20180524040355&path-prefix=en',
    description: 'Morpho Knight also known as Reborn Butterfly or Dark-Winged Disaster is a fusion of Galacta Knight and the Butterfly that appears in the main Kirby (series) platformers, debuting in. Kirby Star Allies He is said to have formed when ”the greatest warrior in the galaxy“, a being twisted by his dark past, came in contact with the symbol of purity. He is the final Boss of the " Guest Star ???? Star Allies Go! " mode.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Mother Brain',
    first_appearance: 'Metroid (1986)',
    quote: '“Defective product"....Me?!!....A defective product....You dare claim that I am defective....!!”',
    species: null,
    creator: 'Nintendo R&D1Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/61/Motherbrain.jpg/revision/latest/scale-to-width-down/310?cb=20071214142153&path-prefix=en',
    description: null,
    search_type: 'Metroid_characters'
  },
  {
    name: 'Mother Maiamai',
    first_appearance: 'The Legend of Zelda: A Link Between Worlds',
    quote: null,
    species: 'Maiamai',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/1c/Mother_Maiamai_ALBW.png/revision/latest?cb=20190710002941&path-prefix=en',
    description: 'Mother Miamai is a Maiamai introduced in The Legend of Zelda: A Link Between Worlds. She is the mother of a group of 100 Maiamai Children.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Mr. Frosty',
    first_appearance: 'Kirby\'s Adventure (1993)',
    quote: null,
    species: null,
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a6/MrFrosty.jpg/revision/latest/scale-to-width-down/310?cb=20080817160441&path-prefix=en',
    description: 'Mr. Frosty is a recurring mini-boss in the Kirby series, first appearing in. Kirby\'s Adventure He is a dapper blue and white walrus with frosty breath that he uses to create ice blocks. Mr. Frosty wears black suspendered trousers that are always missing their seat exposing his blue butt when he turns around.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Mr. Resetti',
    first_appearance: 'Animal Crossing (2001)',
    quote: null,
    species: 'Mole',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/2c/Mr._Resetti_NL.png/revision/latest/scale-to-width-down/310?cb=20131105030113&path-prefix=en',
    description: null,
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Mr. Shine and Mr. Bright',
    first_appearance: 'Kirby\'s Adventure (1993)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/51/Mr_Shine_Mr_Bright.jpg/revision/latest/scale-to-width-down/310?cb=20110225205035&path-prefix=en',
    description: 'Mr. Shine and Mr. Bright are bosses from the Kirby (series). Like Lololo and Lalala, they are fought as a team in all of their appearances.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Nabooru',
    first_appearance: 'The Legend of Zelda: Ocarina of Time (1998)',
    quote: null,
    species: 'Gerudo',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/2c/The_Legend_of_Zelda_Ocarina_of_Time_-_Nabooru.png/revision/latest/scale-to-width-down/221?cb=20170803002953&path-prefix=en',
    description: 'Nabooru is a member of the Gerudo and one of the seven sages in The Legend of Zelda: Ocarina of Time for the Nintendo 64. In the game she rebels against her ruler Ganondorf, though because of her high position and tactics she is capable of avoiding any member of the tribe to notice. Like all of the sages, Nabooru will help Link defeat Ganon.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Nago',
    first_appearance: 'Kirby\'s Dream Land 3 (1997(',
    quote: null,
    species: 'Cat',
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/ef/Nago.png/revision/latest?cb=20180319233803&path-prefix=en',
    description: null,
    search_type: 'Kirby_characters'
  },
  {
    name: 'Nat',
    first_appearance: 'Animal Crossing: City Folk',
    quote: null,
    species: 'Chameleon',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/1e/Nat_NL.png/revision/latest/scale-to-width-down/310?cb=20150426015959&path-prefix=en',
    description: 'Nat is an insect fanatic who hosts the Bug-Off events that occur at certain times of the year in Animal Crossing: City Folk for the Wii. Speak with him to learn the rules of the tourney. Nat awards the prestigious Bug Trophy to the winner when the event ends.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Navi',
    first_appearance: 'The Legend of Zelda: Ocarina of Time (1998)',
    quote: '“Listen!”',
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/94/Navi.jpg/revision/latest?cb=20071214125902&path-prefix=en',
    description: null,
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Nayru',
    first_appearance: 'The Legend of Zelda: A Link to the Past',
    quote: null,
    species: 'Gods',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/c0/Nayru_WW.png/revision/latest?cb=20180414055847&path-prefix=en',
    description: 'Nayru was one of the three Goddesses that created the land of Hyrule and the Triforce in The Legend of Zelda series, along with Din and Farore who were the three beings that created Hyrule and the world, Nayru\'s role in the creation was water, law and skies.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Nayru',
    first_appearance: 'The Legend of Zelda: Oracle of Ages',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/89/Nayru.png/revision/latest/scale-to-width-down/294?cb=20180420182534&path-prefix=en',
    description: 'Nayru is a character from the The Legend of Zelda (series) series.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Necrodeus',
    first_appearance: 'Kirby Mass Attack',
    quote: '“Necrodeus hates light and wants to steep the world in darkness. As a pirate, I can respect that. But with no light, all my treasure would cease sparkling. And I can\'t have that. Do everything in your power to stop him. My gold must shine!”',
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/12/KMA_Necrodeus_artwork.png/revision/latest/scale-to-width-down/310?cb=20190422130111&path-prefix=en',
    description: 'Necrodeus is the leader of the Skull Gang a group of interstellar ghostly skull shaped beings originating from Necro Nebula that works toward the total destruction of all light in the universe. Necrodeus mainly serves as the final boss of Kirby Mass Attack.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Nightmare',
    first_appearance: 'Metroid Fusion',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/03/Nightmare_%28Metroid%29.png/revision/latest/scale-to-width-down/310?cb=20180112180543&path-prefix=en',
    description: 'Nightmare is a boss character appearing in Metroid: Other M and Metroid Fusion. It is a bio-mechanical organism capable of manipulating gravity that scientists within the Galactic Federation designed for military applications.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Nightmare',
    first_appearance: 'Kirby\'s Adventure',
    quote: null,
    species: null,
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/0c/Nightmare_4.jpg/revision/latest/scale-to-width-down/310?cb=20131027234959&path-prefix=en',
    description: null,
    search_type: 'Kirby_characters'
  },
  {
    name: 'Noxus',
    first_appearance: 'Metroid Prime: Hunters (2006)',
    quote: null,
    species: null,
    creator: 'Nintendo Software Technology',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e0/Noxus1.jpg/revision/latest?cb=20071214123548&path-prefix=en',
    description: 'Noxus is a character in the Nintendo DS video game Metroid Prime: Hunters.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Octavo',
    first_appearance: 'Cadence of Hyrule: Crypt of the NecroDancer feat. The Legend of Zelda',
    quote: null,
    species: null,
    creator: 'Brace Yourself Games',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/bd/Octavo_Artwork.png/revision/latest/scale-to-width-down/310?cb=20191220004316&path-prefix=en',
    description: 'Octavo is a boss and playable character in Cadence of Hyrule.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Octoman',
    first_appearance: 'F-Zero X (1998)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/dd/Octoman.jpg/revision/latest?cb=20071214145011&path-prefix=en',
    description: 'Octoman is one of the many pilots that made their debut in the Nintendo 64 video game, F-Zero X. He would later appear as a pilot in F-Zero GX and as a boss in the DS game Star Fox: Command. He is fought two times during command.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Odolwa',
    first_appearance: 'The Legend of Zelda: Majora\'s Mask (2000)',
    quote: null,
    species: null,
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/8d/Odolwa.png/revision/latest/scale-to-width-down/298?cb=20110219192957&path-prefix=en',
    description: 'Odolwa is the first boss in the video game The Legend of Zelda: Majora`s Mask. He is a giant masked jungle warrior with a sharp sword and a hard shield. His attacks consist of calling on a swarm of bugs, slashing with a sword, and doing a spin attack. To defeat him, use the Deku Mask and spin his legs to make him dizzy, then take off the mask and slash him—or use the bombs which lie beside the wall. Do this several times to defeat him and claim Odolwa\'s Remain.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Omega Pirate',
    first_appearance: 'Metroid Prime',
    quote: null,
    species: null,
    creator: 'Retro Studios',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/45/Omega_Pirate_render.png/revision/latest/scale-to-width-down/310?cb=20181215070930&path-prefix=en',
    description: 'The Omega Pirate is an elite Space Pirates, as the zenith of the "Helix Project" that aimed to create powerful warriors by exposing them to the highly mutagenic Phazon this makes it one of the most powerful Space Pirate in the entire Metroid (series) series. It only appeared in Metroid Prime, where it served as one of the last boss.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Onox',
    first_appearance: 'The Legend of Zelda: Oracle of Seasons (2001)',
    quote: null,
    species: 'Dragon',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/47/Onox.png/revision/latest/scale-to-width-down/310?cb=20170115020148&path-prefix=en',
    description: 'Onox ​is the main antagonist of. The Legend of Zelda: Oracle of Seasons ​By the orders of Koume and Kotake, he throws the seasons of Holodrum into chaos, in order to cause enough damage to the peaceful land to light the Flame of Destruction to resurrect Ganon. Interestingly, artwork depicts the Gerudo symbol on Onox\'s armor, a symbol also found on the clothing of Veran, his villainous counterpart from The Legend of Zelda: Oracle of Ages.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Ooccoo',
    first_appearance: 'The Legend of Zelda: Twilight Princess (2006)',
    quote: null,
    species: null,
    creator: null,
    image: null,
    description: '',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Ook',
    first_appearance: 'The Legend of Zelda: Twilight Princess',
    quote: null,
    species: null,
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/c6/Ook_Large.png/revision/latest/scale-to-width-down/310?cb=20090828025806&path-prefix=en',
    description: 'Ook the Baboon is a monkey creature that appears in The Legend of Zelda: Twilight Princess for the Wii and GameCube. He is the first sub boss in the Forest Temple in Faron Woods. After Link defeats the boss, Ook will befriend him and assist him later on in the dungeon.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Ordona',
    first_appearance: 'The Legend of Zelda: Twilight Princess (2006)',
    quote: null,
    species: 'Light Spirit/Minor Deity',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/cb/Ordona.jpg/revision/latest?cb=20090212165138&path-prefix=en',
    description: 'Ordona is a character in The Legend of Zelda: Twilight Princess. He is one of the four light spirits, and is the first one that Link will meet. He looks similar to one of the goats that Link must heard in the beginning of the game, except much larger, and very bright.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Orville',
    first_appearance: 'Animal Crossing: New Horizons',
    quote: null,
    species: 'Dodo',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a1/ACNH_Orville.png/revision/latest/scale-to-width-down/310?cb=20200220200707&path-prefix=en',
    description: 'Orville is a character in Animal Crossing: New Horizons. He works at the airport, where he allows the player to invite friends to their island. He also allows the player to send messages to other players. Orville is without a doubt the most annoying and aggravating character in the game. He gives you the same long speech every time you talk to him, and forces you to connect your already connected device to the "ol\' internet" for some "online play". If you accidentally press local play, you\'re in for one boring and repetitive announcement. Orville will just repeat his same stupid speech that goes on for eternity again, acting as if you haven\'t already heard it a million times. He makes going on nook miles tours a painful and lenghty process, and you have to reconnect to the internet every damn time. There isn\'t a single pro about this dodo, just cons.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Osfala',
    first_appearance: 'The Legend of Zelda: A Link Between Worlds',
    quote: null,
    species: 'Hylian',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/71/Osfala.png/revision/latest/scale-to-width-down/232?cb=20180418182908&path-prefix=en',
    description: 'Osfala is a character in The Legend of Zelda: A Link Between Worlds. He is a headstrong young man and Sahasrahla\'s apprentice. He is a descendant of the original Seven Sages who gets kidnapped by Yuga.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Owl',
    first_appearance: 'The Legend of Zelda: Link\'s Awakening',
    quote: null,
    species: 'OwlDeity',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/28/LANS_Owl_Render.png/revision/latest/scale-to-width-down/310?cb=20190814174542&path-prefix=en',
    description: 'The Owl is a character in The Legend of Zelda (series) featured in The Legend of Zelda: Link\'s Awakening, The Legend of Zelda: Link\'s Awakening DX, and The Legend of Zelda: Link\'s Awakening (Switch). The Owl is an avatar of the mind of the Wind Fish, a wind Deities in The Legend of Zelda series, in his own dream. The Owl serves as a guide to Link in his quest to free both the Wind Fish and himself from Koholint Island and often approach the hero to give him advice on how to reach their common goal.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Paint Roller',
    first_appearance: 'Kirby\'s Adventure (1993)',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/31/PaintRoller.png/revision/latest?cb=20080523210301&path-prefix=en',
    description: null,
    search_type: 'Kirby_characters'
  },
  {
    name: 'Panther Caroso',
    first_appearance: 'Star Fox: Assault (2005)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/21/Panther_Caroso_Assault.jpg/revision/latest/scale-to-width-down/310?cb=20070903120500&path-prefix=en',
    description: 'Panther Caroso is a character in the Star Fox (series). He made his first appearance in the game Star Fox: Assault as a member of Star Wolf. His symbol is a red rose, which is also on his starship. He seems to like the character Krystal, where only in certain paths in Star Fox: Command do they actually have a relationship. He cameos in Super Smash Bros. Brawl as a trophy, a sticker, and on the Lylat Cruise stage.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Parallel Landia',
    first_appearance: 'Team Kirby Clash Deluxe',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/6a/ParallelLandia_Model.png/revision/latest/scale-to-width-down/310?cb=20180707050813&path-prefix=en',
    description: 'Parallel Landia is a four-headed dragon in the Kirby (series) Kirby (series). It is an Another Dimension version of Landia, the guardian of the Master Crown, the Lor Starcutter and most of the relics left by the Ancients (Kirby) in Halcandra. Unlike Landia, Parallel Landia was corrupted by the power of the Another Dimension version of the Master Crown and turned into a violent creature that attack anything that get near him.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Parallel Susie',
    first_appearance: 'Kirby: Planet Robobot',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/76/TKCD_Parallel_Susie_artwork.png/revision/latest?cb=20180704231353&path-prefix=en',
    description: 'Parallel Susie is a character in Team Kirby Clash Deluxe. She is the Another Dimension version of Susie, she seems to work with Dark Taranza and fight the Team Kirby after the defeat of the original Taranza. After her defeat, she is sucked back into an interdimensional portal to Another Dimension like the original Susie was before the events of Kirby: Planet Robobot.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Pascal',
    first_appearance: 'Animal Crossing: Wild World',
    quote: null,
    species: 'Otter',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/52/Pascal_NL.png/revision/latest?cb=20131105030215&path-prefix=en',
    description: 'Pascal is the otter found in Animal Crossing introduced in Animal Crossing: Wild World. He gives out pirate furniture if in return the player give him scallops, sea shells and such. Players can find him on a bridge or anywhere near water. After he and the player have received their respective items he will jump into the sea and float away. He wears a beige hat, blue shorts and wears a shell around his neck.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Pavé',
    first_appearance: 'Animal Crossing: City Folk',
    quote: null,
    species: 'Peacock',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/42/Pave_NL.png/revision/latest/scale-to-width-down/310?cb=20150415192534&path-prefix=en',
    description: 'Pavé is a character from the Animal Crossing (series) Animal Crossing (series) appearing in Animal Crossing: City Folk and Animal Crossing: New Leaf. He is a peacock of green, yellow, and turquoise coloration.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Paya',
    first_appearance: 'The Legend of Zelda: Breath of the Wild',
    quote: null,
    species: 'Sheikah',
    creator: 'Nintendo EAD3',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/12/Paya.png/revision/latest/scale-to-width-down/310?cb=20170616132229&path-prefix=en',
    description: 'Paya is a character from The Legend of Zelda: Breath of the Wild. She is a Sheikah and can be found at Kakariko Village in the region of West Necluda. She is the granddaughter of Impa. She is also the one responsible of the prayers in the village.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Pelison',
    first_appearance: 'The Legend of Zelda: Breath of the Wild (2017)',
    quote: null,
    species: 'Goron',
    creator: 'Nintendo EAD3',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/eb/PELISON.jpg/revision/latest?cb=20170530165909&path-prefix=en',
    description: 'Pelison is a character from The Legend of Zelda: Breath of the Wild. Pelison is a Goron child that can be found at the Southern Mine, located south of Goron City in the Eldin Province of Hyrule. Pelison is the son of Greyson and will follow him to Tarrey Town once the later have been convinced to work for Hudson (character), the Hylian who started the construction of the city in the Akkala Province. Pelison will open a shop in the town where he will sell the precious minerals found by his father while he was clearing the rock around the peninsula.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Pelly',
    first_appearance: 'Animal Forest (2001)',
    quote: null,
    species: 'Pelican',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/26/Pelly_NL.png/revision/latest/scale-to-width-down/269?cb=20150426021248&path-prefix=en',
    description: null,
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Peppy Hare',
    first_appearance: 'Star Fox (1993)',
    quote: '“Do a barrel roll!”',
    species: null,
    creator: 'Shigeru MiyamotoTakaya Imamura',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/91/SFZ-Peppy_Hare.png/revision/latest/scale-to-width-down/253?cb=20170720103726&path-prefix=en',
    description: 'Peppy Hare is one of the main characters in the Star Fox (series) series. He\'s an admirable old character who is the only member of the current generation\'s Star Fox (team) who was also a member of the previous one, which consisted of James McCloud ( Fox McCloud\'s father) and Pigma Dengar, who became a traitor and joined Wolf O\' Donnell\'s evil gang.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Pete',
    first_appearance: 'Animal Forest (2001)',
    quote: null,
    species: 'Pelican',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/89/Pete.png/revision/latest?cb=20131105030245&path-prefix=en',
    description: 'Pete is a character in the Animal Crossing (series). He is a pelican mailman. You can talk to him if you shoot him down with your slingshot in Animal Crossing: Wild World. In Animal Crossing: City Folk he may come to your house with letters from Nintendo and other people. He may talk about his crush Phyllis to you when you get to know him better.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Phan Phan',
    first_appearance: 'Kirby: Nightmare in Dream Land (2002)',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b1/Phanphan.jpg/revision/latest?cb=20110306053939&path-prefix=en',
    description: 'Phan Phan is a mini-boss in the Kirby (series). It replaces Rolling Turtle in Kirby: Nightmare in Dream Land. It gives Throw Kirby in most games. In Kirby Super Star Ultra, it gives Suplex Kirby.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Phantom',
    first_appearance: 'The Legend of Zelda: Phantom Hourglass (2007)',
    quote: null,
    species: null,
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/0a/Phantom_Guard.png/revision/latest/scale-to-width-down/310?cb=20110212214402&path-prefix=en',
    description: 'A Phantom is an enemy from the Nintendo DS video game The Legend of Zelda: Spirit Tracks and in The Legend of Zelda: Phantom Hourglass.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Phantoon',
    first_appearance: 'Super Metroid',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/6a/SM_Phantoon.png/revision/latest/scale-to-width-down/310?cb=20181215131918&path-prefix=en',
    description: 'Phantoon is a gigantic multidimensional creatures that manifest itself as a giant head with single eye do to its inability to manifest its whole body in a single dimension, which in turn give it ghost-like properties. Phantoon is usually a boss in the games he appears in and is said to be affiliated with the Space Pirates due to its attraction towards Mother Brain (Metroid)\'s particular brain waves.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Phineas',
    first_appearance: 'Animal Crossing: City Folk (2008)',
    quote: null,
    species: 'Sea lion',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/0c/Phineas_NL.png/revision/latest/scale-to-width-down/305?cb=20150416163659&path-prefix=en',
    description: null,
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Phyllis',
    first_appearance: 'Animal Forest (2001)',
    quote: null,
    species: 'Pelican',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e4/Phyllis_NL.png/revision/latest/scale-to-width-down/306?cb=20150426021406&path-prefix=en',
    description: 'Phyllis is Pelly\'s sister who works the night shift at the town hall in the Animal Crossing (series). Phyllis can also be seen in the roost an hour before her shift starts. Phyllis is a rude pelican, who makes mean remarks whenever she is asked to do something. However if you visit her on a daily basis, Phyllis may begin to become a bit more friendly towards your player. When another player from a different town is visiting, both Pelly and Phyllis are seen in the town hall when entering.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Pigma Dengar',
    first_appearance: 'Star Fox 64 (1997)',
    quote: '“Your dad screamed real good before he died!”',
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e2/Pigma_Dengar_Assault.png/revision/latest?cb=20110220051759&path-prefix=en',
    description: 'Pigma Dengar is a greedy character from the Star Fox series. He made his debut appearance in Star Fox 64.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Pigmaparoid',
    first_appearance: 'Star Fox: Assault (2005)',
    quote: '“What is that thing?”',
    species: 'Aparoid',
    creator: null,
    image: null,
    description: 'The Pigmaparoid is a boss in Star Fox Assault. It was created when Pigma Dengar was infected by the Aparoid. After this, he had a shattered mind. The Pigmaparoid is fought in the mission The Aparoid Menace, which takes place in the Asteroid Belt (Star Fox) and is the fifth mission of the game.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Pinkle',
    first_appearance: 'Freshly-Picked Tingle\'s Rosy Rupeeland',
    quote: null,
    species: 'Fairy',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/df/Pinkle.png/revision/latest?cb=20180615201252&path-prefix=en',
    description: 'Pinkle is a Fairy in Freshly-Picked Tingle\'s Rosy Rupeeland. She is Tingle\'s Fairy assistant, and gives him advice throughout his adventure. She communicates with him through a large Nintendo DS -looking contraption in his house, and the Tingle Tuner when he is traveling. Most of the contact between the two is when Tingle arrives in a new area, and before facing a dungeon boss. Pinkle wears an outfit which appears to be a pink, feminine version of Tingle\'s.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Pitch',
    first_appearance: 'Kirby\'s Dream Land 3 (1997)',
    quote: null,
    species: 'Bird',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/58/Pitch.png/revision/latest?cb=20180320004634&path-prefix=en',
    description: null,
    search_type: 'Kirby_characters'
  },
  {
    name: 'Popopo',
    first_appearance: null,
    quote: null,
    species: 'Same as Kirby',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d2/Popopoearlymagazinescan.jpg/revision/latest?cb=20130420073918&path-prefix=en',
    description: 'Popopo was the original main character of the Kirby series, but was updated into Kirby.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Poppy Bros. Jr.',
    first_appearance: 'Kirby\'s Dream Land (1992)',
    quote: null,
    species: null,
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/94/Kirby_Star_Allies_-_Character_artwork_11.png/revision/latest/scale-to-width-down/310?cb=20180111210352&path-prefix=en',
    description: 'Poppy Bros. Jr. are recurring enemies in the Kirby (series). They are tiny clown-like elves, wielding explosives and sometimes boomerangs. The mini-boss, known as Poppy Bros. Sr. is a larger and older Poppy Bros. They attack by throwing bombs, attempting to blow Kirby up. When Kirby inhales one he gets the Bomb Kirby. In Kirby Super Star and its remake they can be summoned as playable Helpers for the Bomb ability. They are sometimes seen rolling on apples.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Porter',
    first_appearance: 'Animal Forest (2001)',
    quote: null,
    species: 'Monkey',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/7d/Porter_NL.png/revision/latest/scale-to-width-down/274?cb=20150426024855&path-prefix=en',
    description: 'Porter is a character in Animal Crossing that greets the player whenever he/she wants to travel. He is a monkey and closely resembles the characters Champ and Conductor.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'President of Hocotate Freight',
    first_appearance: 'Pikmin 2',
    quote: '“You found your first bit of treasure. Fine work! Our future depends on your efforts, so check you treasure hoard regularly. I\'ll check in often. Keep up the pace!”',
    species: 'Hocotatian',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/6c/PikminPresident.jpg/revision/latest/scale-to-width-down/310?cb=20110923234118&path-prefix=en',
    description: 'The President of Hocotate Freight is a Hocotate, found only in Pikmin 2, Hocotate Freight being an intergalactic delivery company. His role in the Pikmin (series) series is as a playable leader: he replaces Captain Louie after the repayment of the debt, as Louie has been left behind on the Distant Planet. The president has a purple light on top of his helmet\'s antenna, and also owns a pure gold version of Olimar\'s ship in Pikmin 2. During the event of Pikmin 3, Captain Olimar stated in his notes that the president is on vacation at a beach.',
    search_type: 'Pikmin_characters'
  },
  {
    name: 'Prince Fluff',
    first_appearance: 'Kirby\'s Epic Yarn',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/bb/Prince_Fluff.jpg/revision/latest/scale-to-width-down/310?cb=20101018232448&path-prefix=en',
    description: 'Prince Fluff is a character appearing in the game Kirby\'s Epic Yarn. He is the prince of Patch Land, and seems to rule it. Prince Fluff looks a lot like Kirby, and has a lot of the same abilities.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Prince Ralis',
    first_appearance: 'The Legend of Zelda: Twilight Princess',
    quote: null,
    species: 'Zora',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/de/TP_Ralis_Render.png/revision/latest/scale-to-width-down/255?cb=20200105233427&path-prefix=en',
    description: 'Prince Ralis is a Zora ruler who accessed the thrown during the events of The Legend of Zelda: Twilight Princess. He is the son of Queen Rutela and an unamed Zora King.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Prince Richard',
    first_appearance: 'For the Frog the Bell Tolls (1992)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/41/Prince_Richard.png/revision/latest?cb=20101220171022&path-prefix=en',
    description: 'Prince Richard is a character in the Japan-only Game Boy game Kaeru no Tame ni Kane wa Naru. He is the prince of the Custard Kingdom and a childhood friend to the Prince of Sablé with whom he competes in about everything. His role in the game is as a rival to the player, who is traveling towards the same goal.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Prince Sidon',
    first_appearance: 'The Legend of Zelda: Breath of the Wild (2017)',
    quote: null,
    species: 'Zora',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/c3/Prince_Sidon.jpg/revision/latest/scale-to-width-down/310?cb=20170328185103&path-prefix=en',
    description: 'Prince Sidon is a character in The Legend of Zelda: Breath of the Wild.He is the prince of the Zora during the events of the game, he is the son of King Dorephan and the younger brother of Princess Mipha. He has a very enthusiastic personality and is said to be capable of many great feats like being the best swimmer of all the Zora and being a skilled archer.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Princess Hilda',
    first_appearance: 'The Legend of Zelda: A Link Between Worlds (2013)',
    quote: null,
    species: 'Hylian',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/fc/Princess_Hilda_%28The_Legend_of_Zelda_A_Link_Between_Worlds%29.png/revision/latest/scale-to-width-down/310?cb=20140618185354&path-prefix=en',
    description: 'Princess Hilda (known as Queen Hilda in Germany) is the princess of Lorule in The Legend of Zelda: A Link Between Worlds. She is Lorule\'s counterpart to Princess Zelda.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Princess Mipha',
    first_appearance: 'The Legend of Zelda: Breath of the Wild',
    quote: null,
    species: 'Zora',
    creator: 'Nintendo EAD3',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/32/The_Legend_of_Zelda_Breath_of_the_Wild_-_Artwork_-_Mipha.png/revision/latest/scale-to-width-down/310?cb=20170701150221&path-prefix=en',
    description: null,
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Princess Ruto',
    first_appearance: 'The Legend of Zelda: Ocarina of Time',
    quote: '“It\'s me, your fiancée, Ruto! Princess of the Zoras! I never forgot the vows we made to each other seven years ago!”',
    species: 'Zora',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/ed/The_Legend_of_Zelda_Ocarina_of_Time_-_Ruto_%28Young%29.png/revision/latest/scale-to-width-down/284?cb=20170803002951&path-prefix=en',
    description: 'Princess Ruto is a Zora and the daughter of King Zora, who resided in Zora\'s Domain in The Legend of Zelda: Ocarina of Time. She must be rescued as a child from Jabu-Jabu. She later becomes the Sage (Legend of Zelda).',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Princess Styla',
    first_appearance: 'The Legend of Zelda: Tri Force Heroes',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/1b/TFH_Princess_Styla.png/revision/latest?cb=20170201181358&path-prefix=en',
    description: 'Princess Styla is the cursed daughter of King Tuft, sovereign of Hytopia in The Legend of Zelda: Tri Force Heroes.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Princess Zelda',
    first_appearance: 'The Legend of Zelda',
    quote: '“And the other, who holds the Triforce of Wisdom...is the seventh Sage, who is destined to be the leader of them all... It is I, the Princess of Hyrule, Zelda.”',
    species: 'Hylian',
    creator: 'Shigeru Miyamoto',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a9/CoH_Zelda.png/revision/latest/scale-to-width-down/310?cb=20190621072243&path-prefix=en',
    description: 'Princess Zelda is a character from The Legend of Zelda (series). She is known for being the beautiful Princess of Hyrule. Her first appearance was in the Nintendo Entertainment System game The Legend of Zelda, where she was kidnapped by Ganondorf.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Proxi',
    first_appearance: 'Hyrule Warriors',
    quote: null,
    species: 'Fairy',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/75/Proxi.png/revision/latest?cb=20200108070949&path-prefix=en',
    description: 'Proxi is a Fairy in Hyrule Warriors. She accompanies Link and speaks on his behalf.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Queen Metroid',
    first_appearance: 'Metroid II: Return of Samus',
    quote: null,
    species: 'Metroid',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/6c/MSR_MetroidQueen.png/revision/latest/scale-to-width-down/310?cb=20171001100516&path-prefix=en',
    description: null,
    search_type: 'Metroid_characters'
  },
  {
    name: 'Queen Rutela',
    first_appearance: 'The Legend of Zelda: Twilight Princess',
    quote: null,
    species: 'Zora',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/83/TP_Rutela_Artwork.png/revision/latest/scale-to-width-down/300?cb=20200106222014&path-prefix=en',
    description: 'Queen Rutela is a queen of the Zora who ruled on her people before the events of The Legend of Zelda: Twilight Princess. She is the mother of Prince Ralis and was the wife of an unamed king of the Zoras who died an prior to the Twili invasion. By the time of the game, Queen Rutela herself has been executed by Zant\'s army and appear as a spirit to Link in order to help him save her son.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Queen Sectonia',
    first_appearance: 'Kirby: Triple Deluxe (2014)',
    quote: '“Now then, hero of the lower world. You would risk your life for this land? You would stand against me, the ruler of the heavens? Very well... You will bow before the great Queen Sectonia! My beauty rivals the divine... And my power will crush all that you hold dear!”',
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/4a/Sectonia_Artwork.png/revision/latest/scale-to-width-down/310?cb=20180408064730&path-prefix=en',
    description: null,
    search_type: 'Kirby_characters'
  },
  {
    name: 'ROB 64',
    first_appearance: 'Star Fox 64 (1997)',
    quote: null,
    species: 'Robot',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/75/Rob_64.jpg/revision/latest/scale-to-width-down/310?cb=20191207033025&path-prefix=en',
    description: null,
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Ralph',
    first_appearance: 'The Legend of Zelda: Oracle of Ages',
    quote: '“I\'ve known Nayru was the Oracle of Ages since she was a child. I have always been beside her, protecting her.”',
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/dc/Ralph.png/revision/latest/scale-to-width-down/310?cb=20170127231717&path-prefix=en',
    description: 'Ralph is Nayru\'s childhood friend and loyal guardian in The Legend of Zelda: Oracle of Ages. Although he is stubborn and hotheaded, rarely pondering the consequences of his own actions, he is a noble character deep down. Due to his protective nature defensive attitude towards Nayru, Ralph expresses a certain resentment towards Link, treating him with a certain amount of rivalry throughout the course of the game as he attempts to rescue Nayru before Link. As Link defeats Veran and saves Nayru from Queen Ambi, the young hero gains Ralph\'s respect.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Rauru',
    first_appearance: 'The Legend of Zelda: Ocarina of Time (1998)',
    quote: null,
    species: 'Hylian',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/cc/The_Legend_of_Zelda_Ocarina_of_Time_-_Rauru.png/revision/latest/scale-to-width-down/310?cb=20170803002954&path-prefix=en',
    description: 'Rauru is a character in. The Legend of Zelda: Ocarina of Time He is a Hylian high priest who lives in the Temple of Time and assists Link in the form of the giant owl Kaepora Gaebora.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Ravio',
    first_appearance: 'The Legend of Zelda: A Link Between Worlds (2013)',
    quote: null,
    species: null,
    creator: 'Nintendo EAD3',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/04/Ravio_%28The_Legend_of_Zelda_A_Link_Between_Worlds%29.png/revision/latest/scale-to-width-down/310?cb=20140618185218&path-prefix=en',
    description: 'Ravio is a major character in The Legend of Zelda: A Link Between Worlds. He operates the item shop with Link\'s house.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Redd',
    first_appearance: 'Animal Forest',
    quote: null,
    species: 'Fox',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/f3/Redd_NL.png/revision/latest/scale-to-width-down/266?cb=20150426023000&path-prefix=en',
    description: 'Redd, or Crazy Redd as he is occasionally referred to as, is a character in the Animal Crossing (series). He sells furniture for\'crazy prices\' that are generally higher than Tom Nook\'s prices. He also sells paintings, but they are likely forgeries.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Reese',
    first_appearance: 'Animal Crossing: New Leaf (2012)',
    quote: null,
    species: 'Alpaca',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/84/Reese.png/revision/latest/scale-to-width-down/288?cb=20150426032005&path-prefix=en',
    description: 'Reese is an alpaca character who appears in the Animal Crossing (series), first introduced in Animal Crossing: New Leaf. She is an alpaca who works at Re-Tail with Cyrus, her husband. She is the character that the Villager (Animal Crossing) can sell things to, ask for turnip prices, and can ask to display an item for List of Animal Crossing villagers to purchase.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Renado',
    first_appearance: 'The Legend of Zelda: Twilight Princess',
    quote: null,
    species: 'Human',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/26/TP_Renado_Render.png/revision/latest/scale-to-width-down/253?cb=20200316175900&path-prefix=en',
    description: 'Renado is a Human shaman in The Legend of Zelda: Twilight Princess. He is residing in Kakariko Village where he is watching over the children from Ordon Village after they were freed from King Bulblin. Renado is also the father of Luda.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Revali',
    first_appearance: 'The Legend of Zelda: Breath of the Wild',
    quote: '“Good luck sealing the darkness!”',
    species: 'Rito',
    creator: 'Nintendo EAD3',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/66/Revali_Artwork.png/revision/latest/scale-to-width-down/310?cb=20170408175056&path-prefix=en',
    description: 'Revali is a character in The Legend of Zelda: Breath of the Wild. He is also the Rito Champion and one of Link\'s allies, even though he considers himself his rival. He wears the same blue clothes as Daruk, Urbosa, Princess Mipha, Link, and Princess Zelda. He was gifted with the power to create updrafts, helping him fly with ease. Revali is also a formidable archer, wielding the Great Eagle Bow, a bow that is normally to heavy for a Rito, implying that Revali has great strength.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Rhondson',
    first_appearance: 'The Legend of Zelda: Breath of the Wild',
    quote: null,
    species: 'Gerudo',
    creator: 'Nintendo EAD3',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d4/Hudson_and_Rhondson.jpg/revision/latest/scale-to-width-down/310?cb=20170527170221&path-prefix=en',
    description: 'Rhondson is a character in The Legend of Zelda: Breath of the Wild. Rhondson can be found at the Kara Kara Bazaar in the Gerudo region of Hyrule, and at Tarrey Town in the Akkala Province of Hyrule. She is initially in search of a husband, being pressured by her mother, she is later recruted by Link to become the tailor of Tarrey Town. While serving Tarrey Town, Rhondson will fall in love with Hudson (character), the founder of the town, and will ultimately become his wife, the two being married by Kapson.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Ribbon',
    first_appearance: 'Kirby 64: The Crystal Shards',
    quote: null,
    species: 'Fairy',
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a6/KSA_Ribbon.png/revision/latest/scale-to-width-down/310?cb=20180707004700&path-prefix=en',
    description: 'Ribbon is a character in the Kirby (series), making her debut in Kirby 64: The Crystal Shards. In that game, she is a fairy from the planet Ripple Star who help Kirby to defeat the invading Dark Matter force. She then made various appearances in the Kirby series either as a cameo or as herself.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Rick',
    first_appearance: 'Kirby\'s Dream Land 2 (1995)',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/09/Rick_KDC.png/revision/latest/scale-to-width-down/310?cb=20180319221701&path-prefix=en',
    description: 'Rick is one of Kirby\'s allies in the Kirby (series). He first appeared in Kirby\'s Dream Land 2 with Coo and Kine. Rick is most known for being good on land, while Coo and Kine are known for water and air, respectively.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Ricky',
    first_appearance: 'The Legend of Zelda: Oracle of Ages/Oracle of Seasons',
    quote: null,
    species: 'Kangaroo',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/c3/Ricky.png/revision/latest?cb=20170709063937&path-prefix=en',
    description: 'Ricky ​is a character from The Legend of Zelda: Oracle of Ages and The Legend of Zelda: Oracle of Seasons. He is a boxing Kangaroo with the power of performing massive jumps allowing Link to scale cliffs and certain sections of holes when riding him. He can also attack with his Ricky\'s Gloves and charge up an attack to unleash a whirlwind. However, in both games, he has lost his gloves when he first encounters Link. He can be called with Ricky\'s Flute.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Ridley',
    first_appearance: 'Metroid',
    quote: null,
    species: null,
    creator: 'Makoto Kanō',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b9/Super_Smash_Bros._Ultimate_-_Character_Art_-_Ridley.png/revision/latest/scale-to-width-down/310?cb=20180613035544&path-prefix=en',
    description: null,
    search_type: 'Metroid_characters'
  },
  {
    name: 'Ridley Robot',
    first_appearance: 'Metroid: Zero Mission',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/5e/Lnd_mecharidley_zm.png/revision/latest/scale-to-width-down/310?cb=20180301164827&path-prefix=en',
    description: 'The Ridley Robot (or Mecha Ridley) is a robot modeled after Samus Aran\'s arch-enemy Ridley, and the final boss of Metroid: Zero Mission. The robot is incomplete, as it lacks walking and flying units, but has numerous cables coming out of it, which are most likely connected to an unseen interface, possibly for power and computer control. Thus, it can only move by crawling. However, it makes up for it with plenty of firepower and other offensive capabilities. It is first seen when Samus first enters the Space Pirate Mother Ship as one of its eyes opens, either activating or sensing Samus\'s presence.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Ripple Star Queen',
    first_appearance: 'Kirby 64: The Crystal Shards',
    quote: null,
    species: 'Fairy',
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b9/Ripple_Star_Queen.png/revision/latest?cb=20190405125946&path-prefix=en',
    description: 'The Ripple Star Queen, also known as the Fairy Queen and as the Queen of Ripple Star in Japanese, is a character in the Kirby series Kirby series, making her debut in Kirby 64: The Crystal Shards. Her true name is unknown, but she is, as her name implies, the leader of Ripple Star. She is the reason why Ribbon goes on her quest to protect the Crystal and save it when she loses it.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Rocky',
    first_appearance: 'Kirby\'s Adventure (1993)',
    quote: null,
    species: null,
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/7d/Rocky_KSSU.png/revision/latest/scale-to-width-down/310?cb=20110226174721&path-prefix=en',
    description: 'Rocky is a common enemy in the Kirby (series). Swallow Rocky gives Kirby the Stone Kirby. In some games, Rocky is playable as the helper for the stone ability.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Rolling Turtle',
    first_appearance: 'Kirby\'s Adventure (1993)',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e5/Rolling_Turtle.jpg/revision/latest?cb=20110306231420&path-prefix=en',
    description: 'Rolling Turtle is a mini-boss in the Kirby (series), appearing only in Kirby\'s Adventure for the Nintendo Entertainment System. In the game\'s Game Boy Advance remake, Kirby: Nightmare in Dreamland, Rolling Turtle was replaced by Phan Phan.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Rosie',
    first_appearance: 'Animal Crossing (2001)',
    quote: null,
    species: 'Cat',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/5b/Rosie_%28Wild_World%29.png/revision/latest/scale-to-width-down/259?cb=20150205001653&path-prefix=en',
    description: 'Rosie is one of many animal villagers from the Animal Crossing (series). She is not a main character, but after the success of the Animal Crossing: Wild World movie, she became one of the most popular characters in the series (along with Eloise), possibly even more so than characters like Blathers and Mr. Resetti.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Rosso',
    first_appearance: 'The Legend of Zelda: A Link Between Worlds (2013)',
    quote: null,
    species: 'Hylian',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/8d/Rosso.png/revision/latest/scale-to-width-down/296?cb=20180419213231&path-prefix=en',
    description: 'Rosso is a character in The Legend of Zelda: A Link Between Worlds. He is one of the Seven Sages descended from those who sealed the Sacred Realm long ago.',
    search_type: 'The_Legend_of_Zelda_characters'
  },
  {
    name: 'Rover',
    first_appearance: 'Animal Forest (2001)',
    quote: null,
    species: 'Cat',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/54/Rover_NL.png/revision/latest/scale-to-width-down/239?cb=20131105030356&path-prefix=en',
    description: 'Rover is a character found in the Animal Crossing (series).',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Rundas',
    first_appearance: 'Metroid Prime 3: Corruption (2007)',
    quote: null,
    species: null,
    creator: 'Retro Studios',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e4/Rundas.gif/revision/latest/scale-to-width-down/310?cb=20071214141428&path-prefix=en',
    description: 'Rundas is a bounty hunter in the video game Metroid Prime 3: Corruption for the Wii. Unlike most bounty hunters whom are against Samus Aran, this one helps her for the most part of the beginning of the game. Once Samus is surrounded by four Space Pirate ships, Rundas comes to the rescue and freezes them all. He later saves her again from falling down a pit after defeating Ridley.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'SA-X',
    first_appearance: 'Metroid Fusion',
    quote: '“The SA-X. An enemy with my strongest abilities. But does it have reason? Probably not. It’s just a killing machine. In my current state, I can’t face it head-on. The SA-X is me, only heartless. I must stop it before it learns its potential and threatens the universe...”',
    species: 'X',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a3/Fusion_SA-X_close-up.png/revision/latest/scale-to-width-down/310?cb=20180111191430&path-prefix=en',
    description: 'The Samus Aran-X (or SA-X for short) is the main antagonist of Metroid Fusion. It is an almost-identical duplicate of Samus at maximum strength.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Saharah',
    first_appearance: 'Animal Crossing',
    quote: '“I am called Saharah, for that is my name. I come from faraway land.”',
    species: 'Camel',
    creator: 'Nintendo EAD',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/24/Saharah_NL.png/revision/latest/scale-to-width-down/310?cb=20150216221032&path-prefix=en',
    description: 'Saharah is a brown camel in the Animal Crossing (series). She travels around the world trading carpets and wallpapers.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Sailor Dee',
    first_appearance: 'Kirby Super Star (1996)',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/6f/Sailor_Dee.png/revision/latest?cb=20110314195409&path-prefix=en',
    description: 'Sailor Dee (also known as Captain Dee) is a character in the Kirby (series). So far, Sailor Dee has only appeared in Kirby Super Star and its remake, Kirby Super Star Ultra.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Samus Aran',
    first_appearance: 'Metroid (1986)',
    quote: '“Why am I still alive?”',
    species: 'Human (with Chozo DNA)Metroid after Fusion.',
    creator: 'Makoto Kanō',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/09/Super_Smash_Bros._Ultimate_-_Character_Art_-_Samus.png/revision/latest/scale-to-width-down/310?cb=20190710193153&path-prefix=en',
    description: 'Samus Aran is the main protagonist of the Metroid (series) series. She made her first appearance in the Nintendo Entertainment System video game Metroid (video game).',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Serena',
    first_appearance: 'Animal Crossing: City Folk (2008)',
    quote: null,
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b2/Serena.png/revision/latest?cb=20110308132917&path-prefix=en',
    description: 'Serena',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Shadow Kirby',
    first_appearance: 'Kirby & The Amazing Mirror',
    quote: null,
    species: 'Kirby\'s species',
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/12/ShadowKirby.jpg/revision/latest?cb=20110410134327&path-prefix=en',
    description: 'Shadow Kirby is a character and mini boss in the Kirby series, that appeared in Kirby & The Amazing Mirror, Kirby: Triple Deluxe and Kirby Fighters Deluxe. He is the Mirror World version of Kirby and unlike the heroic Kirby, Shadow Kirby seems to remain rather neutral toward evil.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Simirror',
    first_appearance: 'Kirby Super Star (1996)',
    quote: null,
    species: null,
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/ad/Simirror.png/revision/latest?cb=20110315203645&path-prefix=en',
    description: 'Simirror is a recurring enemy in the Kirby (series). They are mirror wizards that use their magic to create illusionary duplicates of themselves to confuse Kirby (character). They can also swing their wands to reflect any projectiles coming towards them. When inhaled, Simirror offers the Mirror Kirby and can even be summoned as a playable character using said ability. Simirror appears in Kirby Super Star, Kirby Super Star Ultra, and recently made an appearance in Kirby: Planet Robobot.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Slippy Toad',
    first_appearance: 'Star Fox (1993)',
    quote: '“Enemy shield analyzed.”',
    species: null,
    creator: 'Shigeru MiyamotoTakaya Imamura',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/68/Slippy0.jpg/revision/latest/scale-to-width-down/310?cb=20080127190107&path-prefix=en',
    description: 'Slippy Toad is a character in the Star Fox (series) series.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Spinni',
    first_appearance: 'Kirby Squeak Squad (2006)',
    quote: null,
    species: 'Squeak',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/8/85/Spinni_2.png/revision/latest?cb=20120506083328&path-prefix=en',
    description: 'Spinni is a Squeak appearing in Kirby Squeak Squad. He is known to be the fastest of the Squeak Squad.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Spire',
    first_appearance: 'Metroid Prime Hunters (2006)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/fd/Spire1.jpg/revision/latest?cb=20071214143534&path-prefix=en',
    description: 'Spire is a character in the Nintendo DS video game Metroid Prime Hunters.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Squashini',
    first_appearance: 'Kirby\'s Epic Yarn',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/4f/Squashini.jpg/revision/latest?cb=20121116150858&path-prefix=en',
    description: 'Squashini is a boss in Kirby\'s Epic Yarn. It is the boss in Treat Land and the 3rd boss Kirby fights.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Star Dream',
    first_appearance: 'Kirby: Planet Robobot',
    quote: '“The goal of this company has always been prosperity. Unfortunately, you imperfect, fragile life-forms were a liability. So you are invited to witness the end of history. A new age shall begin--an age of infinite prosperity. Enjoy your destruction.”',
    species: 'Clockwork Star',
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/3a/Star_Dream_computer_model.png/revision/latest/scale-to-width-down/310?cb=20170914180314&path-prefix=en',
    description: 'Star Dream is a powerful, malevolent machine in the Kirby (series) Kirby (series) which serves as the final boss and true main antagonist of Kirby: Planet Robobot. It was built as a wish-making robot by Max Profitt Haltmann and as the Mother Computer of the Haltmann Works Company, but soon developed the intention to eradicate all organic life-forms by observing the president.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Star Fox',
    first_appearance: 'Star Fox',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/bd/Star_Fox_Team_Assault.jpg/revision/latest/scale-to-width-down/310?cb=20070908031649&path-prefix=en',
    description: 'Star Fox (also known as the Star Fox Team or Team Star Fox) is a group of mercenaries and the main characters in each game of the Star Fox (series) series.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Star Wolf',
    first_appearance: 'Star Fox 64',
    quote: '“Just what I need to see. Star Wolf.”',
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/a/a7/Star_Wolf_3.png/revision/latest/scale-to-width-down/310?cb=20071214140952&path-prefix=en',
    description: 'Star Wolf is a team that once worked as bounty hunters of Andross and later went their own route. The team is the arch-rival of Star Fox (team). Wolf O\' Donnell is the team\'s leader. Their first official game appearance was Star Fox 64 (or Lylat Wars in Europe).',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Storo',
    first_appearance: 'Kirby: Squeak Squad',
    quote: null,
    species: null,
    creator: 'Flagship',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/2f/Storo.png/revision/latest/scale-to-width-down/310?cb=20180727213508&path-prefix=en',
    description: 'Storo is a member of The Squeaks, debuting in Kirby: Squeak Squad. Due to his giant size and immense strength, he acts as the muscle of Daroach\'s gang. He is also more durable than Spinni and Doc. He later appeared in multiple Kirby games like Kirby Mass Attack and Kirby Star Allies.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Susie',
    first_appearance: 'Kirby: Planet Robobot',
    quote: '“You know, it\'s wonderful to work in a perfectly controlled environment. But that\'s something you\'d never understand.”',
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/cf/KSA_Susie_artwork.png/revision/latest/scale-to-width-down/310?cb=20181130210656&path-prefix=en',
    description: '​Susanna Patrya Haltmann ​ also known as Susie is a character in the Kirby (series), debuting as the secondary antagonist of Kirby: Planet Robobot. She is the secretary (or executive assistant) of the Haltmann Works Company. She is responsible for overseeing the Mechanizing Occupation Project, a project with the goal of eradicating all life on Planet Popstar and taking the planet\'s resources. She is the long lost daughter of the president and CEO of Haltmann Works Company, Max Profitt Haltmann. In Team Kirby Clash Deluxe, it is revealed that a Mirror World version of Susie named Parallel Susie exist.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Sylux',
    first_appearance: 'Metroid Prime Hunters',
    quote: null,
    species: null,
    creator: 'Nintendo Software Technology',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/7a/Sylux1.jpg/revision/latest?cb=20071214133224&path-prefix=en',
    description: null,
    search_type: 'Metroid_characters'
  },
  {
    name: 'Taranza',
    first_appearance: 'Kirby: Triple Deluxe',
    quote: '“I, Taranza, cannot allow you to interfere with Queen Sectonia\'s plans.”',
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/bf/KSA_Taranza.png/revision/latest/scale-to-width-down/310?cb=20181130211114&path-prefix=en',
    description: 'Taranza is an antagonist in Kirby: Triple Deluxe and captures King Dedede as part of an evil plan conceived by Queen Sectonia. He later side with Kirby to put an end to the Queen\'s madness and is since in good term with Kirby.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Thardus',
    first_appearance: 'Metroid Prime',
    quote: null,
    species: null,
    creator: 'Retro Studios',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/06/Thardus.png/revision/latest/scale-to-width-down/310?cb=20181213043853&path-prefix=en',
    description: 'Thardus is a gigantic creature composed of rocks in the Metroid (series) series, first appearing in Metroid Prime as a boss. It\'s a large, hulking rock and ice monster that was formed as a result of one of the Space Pirates\' scientific experiments. The experiment, code named "Project Titan", was a test to see how the highly mutagenous Phazon would react in the presence of non organic materials. Thardus rapidly became too powerful to control and was sealed away in the Quarantine Cave of the Phendrana Drifts on Tallon IV.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'The Crystal King',
    first_appearance: 'Paper Mario (2000)',
    quote: null,
    species: null,
    creator: 'Intelligent Systems',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/fc/Crystal_King.png/revision/latest?cb=20110928225451&path-prefix=en',
    description: 'The Crystal King is the final boss in possession of a Star Spirits that Mario had to face before his final confrontation with Bowser in the game Paper Mario.',
    search_type: 'Mario_characters'
  },
  {
    name: 'Tiff',
    first_appearance: null,
    quote: null,
    species: null,
    creator: 'Warpstar Inc.',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e1/Tiff.png/revision/latest/scale-to-width-down/310?cb=20190415091852&path-prefix=en',
    description: 'Tiff is a tomboyish female character making her debut in the anime Kirby: Right Back at Ya! as one of the protagonists. Tuff is her little brother and their parents are Sir Ebrum and Lady Like. Her goal is to protect Kirby. She usually takes on the role of the voice of reason.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Timmy',
    first_appearance: 'Animal Crossing (2001)',
    quote: null,
    species: 'Racoon',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/97/Timmy_NL.png/revision/latest/scale-to-width-down/293?cb=20150519145527&path-prefix=en',
    description: 'Timmy is Tom Nook\'s nephew in the Animal Crossing (series). Until Animal Crossing: New Leaf, he and his twin brother Tommy ran the furniture section of Tom Nook\'s store Nookingtons. In Animal Crossing: New Leaf, he and his brother run Nookling stores.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Tom Nook',
    first_appearance: 'Animal Forest',
    quote: '“Welcome! Feel free to browse, but try not to carouse! Ho ho!”',
    species: 'Raccoon',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e3/Tom_Nook_NH.png/revision/latest?cb=20200221020611&path-prefix=en',
    description: 'Tom Nook is a raccoon that sells the player items in the Animal Crossing (series). By Animal Crossing: New Leaf, Nook has abandoned the general store, leaving it to Timmy and Tommy (Animal Crossing), to sell the player homes and home modifications directly to the player at Nook\'s Homes. In Animal Crossing: New Horizons, he has become the CEO of his own company, Nook Inc., and is the one who assist the player in the development of their own island by proposing various services.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Tommy (Animal Crossing)',
    first_appearance: 'Animal Crossing (2001)',
    quote: null,
    species: 'Racoon',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/1f/Tommy_NL.png/revision/latest/scale-to-width-down/310?cb=20150519145918&path-prefix=en',
    description: 'Tommy is Tom Nook\'s nephew in the Animal Crossing (series). He and his twin brother Timmy run the furniture section of Tom Nook\'s store Nookingtons. In Animal Crossing: New Leaf, he and his brother run Nookling stores.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Tortimer',
    first_appearance: 'Dōbutsu no Mori + (2001)',
    quote: null,
    species: 'Tortoise',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/4/4c/Tortimer_NL.png/revision/latest/scale-to-width-down/280?cb=20150415175846&path-prefix=en',
    description: 'Tortimer is a character from the Animal Crossing (series). He is the mayor in the town that the player moves into, excluding Animal Crossing: New Leaf where he is spending retirement on the island. His name is a portmanteau of the name\'Mortimer\' and the word\'turtle\' or\'tortoise\'. During the Acorn Festival, he wears an acorn mask and says that his name is\'Cornimer\'.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Trace',
    first_appearance: 'Metroid Prime: Hunters (2006)',
    quote: null,
    species: null,
    creator: 'Nintendo Software Technology',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/99/Trace1.jpg/revision/latest?cb=20071214143753&path-prefix=en',
    description: 'Trace is a character in the video game Metroid Prime Hunters for the Nintendo DS. He is the final hunter that Samus Aran must destroy (and the final playable character). Trace also appeared as a trophy in Super Smash Bros. Brawl for the Wii along with the other hunters that were playable in the game.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Tricky Earthwalker',
    first_appearance: 'Star Fox Adventures (2002)',
    quote: null,
    species: null,
    creator: 'Rare',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/2/2d/Foxtricky.jpg/revision/latest/scale-to-width-down/310?cb=20080127191701&path-prefix=en',
    description: 'Tricky Earthwalker, usually just called Tricky, is the prince of the Earthwalker tribe, and Fox McCloud\'s ally in the game, Star Fox Adventures. After learning his father was kidnapped, he accompanied Fox to try and save him and Sauria, his home planet. At first, the two didn\'t get along very well, but the two eventually become friends, and their friendship lingers on, even in Star Fox Assault.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Trident Knight',
    first_appearance: 'Kirby\'s Adventure (1993)',
    quote: null,
    species: null,
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/f/fd/Trident_Knight.jpg/revision/latest/scale-to-width-down/310?cb=20110315010022&path-prefix=en',
    description: 'Trident Knight is a common enemy in the Kirby (series) and a member of the Meta-Knights along with Blade Knight, Sword Knight, Ax Knight, Meta Knight, Sailor Dee, Javelin Knight, and Mace Knight.  Trident Knight uses a Trident when fighting Kirby.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'U-Mos',
    first_appearance: 'Metroid Prime 2: Echoes (2004)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/53/Umos.jpg/revision/latest/scale-to-width-down/310?cb=20071214124415&path-prefix=en',
    description: 'U-Mos was the last of the Luminoth species who appeared in the Nintendo GameCube video game Metroid Prime 2: Echoes. He was a friend to Samus Aran, though his species nearly became extinct during the attack of the Ing. Before Samus Aran appeared, he ordered that the rest of his species go into hibernation. He asked Samus to go and save the light demension of Aether, the planet that was at the time being attacked.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Villager',
    first_appearance: 'Animal Forest',
    quote: '“No more debt for me! My house is all paid off! ♪”',
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/1d/Villager-Boy-1.png/revision/latest/scale-to-width-down/287?cb=20150419125930&path-prefix=en',
    description: null,
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Vivian Hare',
    first_appearance: 'Star Fox Command',
    quote: null,
    species: null,
    creator: 'Takaya Imamura',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/12/Vivianhare.png/revision/latest?cb=20130101034056&path-prefix=en',
    description: 'Vivian Hare is the beautiful wife of Peppy Hare and the mother of Lucy Hare. She is from from the Star Fox series. She died very early in her life.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Vorash',
    first_appearance: 'Metroid: Other M',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/77/Mom-lava-boss.jpg/revision/latest/scale-to-width-down/310?cb=20180115133335&path-prefix=en',
    description: 'Vorash is a boss character appearing in Metroid: Other M. It is a huge fish-like monster capable of dwelling in lakes of lava.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Waddle Dee',
    first_appearance: 'Kirby\'s Dream Land (1992)',
    quote: null,
    species: null,
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/b3/WaddleDee.png/revision/latest?cb=20080104031122&path-prefix=en',
    description: 'Waddle Dee is one of the most common enemies in the Kirby series, they are also the weakest, comparable to the Mario series\'s Goomba. Their main (and only) method of attack without a weapon is merely walking into Kirby, just like a Goomba. Waddle Dee are occasionally seen carrying parasols, allowing them to float down slowly. Unlike Kirby, they are never seen using it as a weapon.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Waddle Doo',
    first_appearance: 'Kirby\'s Dream Land (1992)',
    quote: null,
    species: null,
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/b/bb/Waddle_Doo.png/revision/latest/scale-to-width-down/310?cb=20100627174424&path-prefix=en',
    description: null,
    search_type: 'Kirby_characters'
  },
  {
    name: 'Weavel',
    first_appearance: 'Metroid Prime Hunters (2006)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/33/Weavel1.jpg/revision/latest?cb=20071214133559&path-prefix=en',
    description: 'Weavel is a character in the Nintendo DS video game Metroid Prime Hunters.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Wendell',
    first_appearance: 'Animal Forest (2001)',
    quote: null,
    species: 'Walrus',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/0d/Wendell_NL.png/revision/latest?cb=20131105030610&path-prefix=en',
    description: 'Wendell is a blue walrus from the Animal Crossing (series). He is a traveling wallpaper/design artist. He gives the player a free wallpaper/design if given fruit, turnips, or fish.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Wham Bam Jewel',
    first_appearance: 'Kirby Super Star Ultra (2008)',
    quote: null,
    species: null,
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/07/240px-Whambamjewel.PNG.png/revision/latest?cb=20091102194152&path-prefix=en',
    description: 'Wham Bam Jewel is a boss in Kirby Super Star Ultra. It appears as the final boss in "Helper to Hero" mode. Wham Bam Jewel is an enhanced version of Wham Bam Rock. He does a more powerful punch attack sometimes and he usually does it two times every time he uses it. His hands wave side to side after he smashes the ground, so it\'s harder to hit him. Wham Bam Jewel also drops bombs out of his hands, which are like regular bombs, they do the same amount of damage, and he usually does it when he looks like he\'s gonna do the punch that Wham Bam Rock did.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Whispy Woods',
    first_appearance: 'Kirby\'s Dream Land (1992)',
    quote: null,
    species: null,
    creator: 'Masahiro Sakurai',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/7/74/WhispyWoods.png/revision/latest?cb=20080814210344&path-prefix=en',
    description: 'Whispy Woods (ウイスピーウッズ,) is a recurring boss in the Kirby series, generally appearing as the first Boss in many of the games. He is a large apple tree with three holes forming a face and a pointed, branch-like nose. He attacks by dropping large apples on Kirby, spitting puffs of air, and stabbing his roots up at Kirby. If Kirby doesn\'t have a copy ability, he must inhale the falling apples and spit them back at Whispy.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Wilbur',
    first_appearance: 'Animal Crossing: New Horizons',
    quote: null,
    species: 'Dodo',
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/37/ACNH_Wilbur.png/revision/latest/scale-to-width-down/306?cb=20200220202849&path-prefix=en',
    description: 'Wilbur is a character in Animal Crossing: New Horizons. He runs the Dodo Airlines with Orville (Animal Crossing). Wilbur is a pilot who flies the player to different island tours.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Wisp',
    first_appearance: 'Animal Crossing (2001)',
    quote: null,
    species: 'Spirit',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/0/08/NL_Wisp.png/revision/latest/scale-to-width-down/310?cb=20161112171646&path-prefix=en',
    description: 'Wisp is a lamp spirit who appears in the Animal Crossing series.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Wolf O\'Donnell',
    first_appearance: 'Star Fox 64 (1997)',
    quote: '“Can\'t let you do that, Star Fox!”',
    species: null,
    creator: 'Nintendo',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/5/50/Super_Smash_Bros._Ultimate_-_Character_Art_-_Wolf.png/revision/latest/scale-to-width-down/310?cb=20191123120610&path-prefix=en',
    description: 'Wolf O\'Donnell sometimes called Lord O\'Donnell, is the leader of the Star Wolf Team. He was rivals with James McCloud and continues to battle with Star Fox (team), under the current leadership of Fox McCloud.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Yin-Yarn',
    first_appearance: 'Kirby\'s Epic Yarn',
    quote: null,
    species: null,
    creator: 'Good-FeelHAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/6/67/Yin_Yarn.png/revision/latest/scale-to-width-down/310?cb=20120211021325&path-prefix=en',
    description: 'Yin-Yarn is the main antagonist of Kirby\'s Epic Yarn for the Wii. In the beginning of the game, Dream Land\'s residents are terrorized by the creature. He uses his evil powers to transform everyone he comes across into yarn.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Zako',
    first_appearance: 'Star Fox Command',
    quote: '“Those frogs look delicious! Yum yum!”',
    species: null,
    creator: 'Takaya Imamura',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/16/Deathshark.jpg/revision/latest?cb=20071214142318&path-prefix=en',
    description: 'Zako is an enemy from Star Fox Command who is a member of the Anglar Empire.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Zazan',
    first_appearance: 'Star Fox Command',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/1/16/Zazan.jpg/revision/latest?cb=20071214131121&path-prefix=en',
    description: 'Zazan is a character and villan in the Nintendo DS video game Star Fox Command. He pilots the ship known as ZaZanga 9, and can be found as the guard of Venom Sea. While fighting his opponents, he will drop mines and also shoot standard shots at his enemies. His homeworld is Venom, and his species is Anglar.',
    search_type: 'Star_Fox_characters'
  },
  {
    name: 'Zero',
    first_appearance: 'Kirby\'s Dream Land 3',
    quote: null,
    species: 'Dark Matter',
    creator: 'HAL Laboratory',
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/3/3c/Zero.png/revision/latest/scale-to-width-down/310?cb=20120211014948&path-prefix=en',
    description: 'Zero is the secondary antagonist and final boss of Kirby\'s Dream Land 3. He appears as a white sphere with a single red eye. Zero makes his home in the Hyper Zone, which is a void of chaos. In the beginning of the game, he opens up a portal to the Hyper Zone and releases an army of Dark Matter into Dream Land, which spreed out and possesses multiple of Dream Land\'s residents. However, if Kirby collects all the heart stars in the game, Kirby Will be able to enter the Hyper Zone portal and challenge a Dark Matter boss as well as Zero himself, after Zero has been defeated, his eye will detach from the body and follow Kirby around, Kirby must continue attacking the eye until it explodes and destroys Zero.',
    search_type: 'Kirby_characters'
  },
  {
    name: 'Zero Suit Samus',
    first_appearance: 'Metroid: Zero Mission',
    quote: null,
    species: 'Human',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/c/cd/Super_Smash_Bros._Ultimate_-_Character_Art_-_Zero_Suit_Samus.png/revision/latest/scale-to-width-down/310?cb=20190710214243&path-prefix=en',
    description: 'Zero Suit Samus is simply Samus Aran without her distinctive, orange power suit. She first appeared in this form as a playable character in Metroid: Zero Mission.',
    search_type: 'Metroid_characters'
  },
  {
    name: 'Zipper T. Bunny',
    first_appearance: 'Animal Crossing: City Folk (2008)',
    quote: null,
    species: null,
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d4/Zipper_T._Bunny_NL.png/revision/latest/scale-to-width-down/300?cb=20150426023957&path-prefix=en',
    description: 'Bunny Day comes just once a year in Animal Crossing: City Folk, and with it comes Zipper T. Bunny. Zipper\'s hidden a bunch of special eggs all around town, and your goal is to find them all. Dig them up with your shovel and see what\'s inside. If you find any bunny foil, trade it with Zipper and he\'ll give you a prize in return.',
    search_type: 'Animal_Crossing_characters'
  },
  {
    name: 'Zora',
    first_appearance: 'The Legend of Zelda: A Link Between Worlds',
    quote: null,
    species: 'Zora',
    creator: null,
    image: 'https://vignette.wikia.nocookie.net/nintendo/images/9/90/Oren.png/revision/latest/scale-to-width-down/310?cb=20180419033028&path-prefix=en',
    description: 'Oren is a Zora introduced in The Legend of Zelda: A Link Between Worlds. She is the ruler of the River Zora population living in Hyrule and is one of the Seven Sages.',
    search_type: 'The_Legend_of_Zelda_characters'
  }
];

module.exports = characters;

const obj = 
{
  "_id": "5ec174a4fa8ade34c1580541",
  "name": "Super Mario 64",
  "image": "https://vignette.wikia.nocookie.net/nintendo/images/0/0f/Super_Mario_64_%28NA%29.png/revision/latest/scale-to-width-down/310?cb=20110703064718&path-prefix=en",
  "developer": "Nintendo EAD",
  "publisher": "Nintendo",
  "genre": "Platformer",
  "platform": "Nintendo 64, Virtual Console (Wii), Virtual Console (Wii U)",
  "description": "Super Mario 64 (also called SM64) is a platformer game developed by Nintendo EAD and published by Nintendo. The game is considered to be one of the most influential titles from the fifth generation of video games. Released in 1996 as a launch title for the Nintendo 64 alongside Pilotwings 64, which helped drive initial sales of the console. As of January 7, 2017, it has sold over 11 million copies worldwide and is marked as the best selling Nintendo 64 game of all time. It is also the second most popular game on the Wii's Virtual Console after Super Mario Bros."
};

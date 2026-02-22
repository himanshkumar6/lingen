export interface AnimeCharacter {
  id: string;
  name: string;
  anime: string;
  role: string;
  description: string;
  poster: string; // Licensed official poster URL
}

export const ANIME_CHARACTERS: AnimeCharacter[] = [
  // Team 7
  {
    id: "naruto-uzumaki",
    name: "Naruto Uzumaki",
    anime: "Naruto",
    role: "Protagonist",
    description:
      "A young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sasuke-uchiha",
    name: "Sasuke Uchiha",
    anime: "Naruto",
    role: "Rival",
    description:
      "The sole survivor of the Uchiha clan, driven by an obsessive need to avenge his family.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sakura-haruno",
    name: "Sakura Haruno",
    anime: "Naruto",
    role: "Support",
    description:
      "A brilliant kunoichi who overcomes her initial weaknesses to become one of the world's greatest medical ninjas.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kakashi-hatake",
    name: "Kakashi Hatake",
    anime: "Naruto",
    role: "Mentor",
    description:
      "The laid-back but lethal 'Copy Ninja' who leads Team 7 and values teamwork above all else.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Legendary Sannin
  {
    id: "jiraiya",
    name: "Jiraiya",
    anime: "Naruto",
    role: "Mentor",
    description:
      "A legendary Sannin and traveling author who becomes a father figure and mentor to Naruto.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tsunade",
    name: "Tsunade",
    anime: "Naruto",
    role: "Hokage",
    description:
      "A Legendary Sannin renowned for her peerless medical ninjutsu and monstrous physical strength, who becomes the Fifth Hokage.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "orochimaru",
    name: "Orochimaru",
    anime: "Naruto",
    role: "Villain",
    description:
      "A rogue Sannin obsessed with learning all the world's secrets and achieving immortality.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Uchiha Clan
  {
    id: "itachi-uchiha",
    name: "Itachi Uchiha",
    anime: "Naruto",
    role: "Anti-Hero",
    description:
      "A tragic prodigy who massacred his own clan to prevent a civil war and protect his younger brother, Sasuke.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "madara-uchiha",
    name: "Madara Uchiha",
    anime: "Naruto",
    role: "Main Villain",
    description:
      "The legendary co-founder of the Hidden Leaf Village who seeks to cast the world into an eternal illusion for 'peace'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "obito-uchiha",
    name: "Obito Uchiha",
    anime: "Naruto",
    role: "Antagonist",
    description:
      "A fallen shinobi who manipulated the ninja world from the shadows after suffering severe heartbreak and loss.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "shisui-uchiha",
    name: "Shisui Uchiha",
    anime: "Naruto",
    role: "Support",
    description:
      "An Uchiha prodigy renowned as 'Shisui of the Body Flicker', who sacrificed himself for the sake of the village.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Akatsuki
  {
    id: "pain-nagato",
    name: "Nagato (Pain)",
    anime: "Naruto",
    role: "Villain",
    description:
      "The leader of the Akatsuki who believes that only through experiencing true pain can the world understand peace.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "konan",
    name: "Konan",
    anime: "Naruto",
    role: "Support",
    description:
      "Nagato's loyal childhood friend who uses unique, lethal origami-based ninjutsu.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kisame-hoshigaki",
    name: "Kisame Hoshigaki",
    anime: "Naruto",
    role: "Villain",
    description:
      "The 'Monster of the Hidden Mist' and Itachi's partner, wielding the chakra-shaving sword Samehada.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "deidara",
    name: "Deidara",
    anime: "Naruto",
    role: "Villain",
    description:
      "An explosive artist who believes that true art is an explosion.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sasori",
    name: "Sasori",
    anime: "Naruto",
    role: "Villain",
    description:
      "A master puppeteer from the Sand Village who turned his own body into a puppet to preserve his 'art'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hidan",
    name: "Hidan",
    anime: "Naruto",
    role: "Villain",
    description:
      "An immortal, foul-mouthed zealot of the Jashin faith who relishes in feeling the pain of his voodoo-like rituals.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kakuzu",
    name: "Kakuzu",
    anime: "Naruto",
    role: "Villain",
    description:
      "A greedy bounty hunter holding multiple hearts that grant him near-immortality and mastery over all chakra natures.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "zetsu",
    name: "Zetsu",
    anime: "Naruto",
    role: "Villain",
    description:
      "A mysterious, dual-personality entity that serves as the Akatsuki's spy and hides ancient secrets.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Konoha 11
  {
    id: "shikamaru-nara",
    name: "Shikamaru Nara",
    anime: "Naruto",
    role: "Support",
    description:
      "A lazy but brilliant tactician with an IQ over 200, known for his shadow manipulation techniques.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ino-yamanaka",
    name: "Ino Yamanaka",
    anime: "Naruto",
    role: "Support",
    description:
      "A confident kunoichi specializing in mind transfer jutsus and sensory techniques.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "choji-akimichi",
    name: "Choji Akimichi",
    anime: "Naruto",
    role: "Support",
    description:
      "A kind-hearted ninja who converts calories into physical power and giant size.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hinata-hyuga",
    name: "Hinata Hyuga",
    anime: "Naruto",
    role: "Support",
    description:
      "A shy but determined heiress of the Hyuga clan whose love for Naruto gives her immense courage.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "neji-hyuga",
    name: "Neji Hyuga",
    anime: "Naruto",
    role: "Support",
    description:
      "A Hyuga prodigy who once believed destiny was fixed, but learns to fight for his own path.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rock-lee",
    name: "Rock Lee",
    anime: "Naruto",
    role: "Support",
    description:
      "An overly enthusiastic ninja lacking ninjutsu or genjutsu, relying entirely on extreme physical training.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tenten",
    name: "Tenten",
    anime: "Naruto",
    role: "Support",
    description:
      "A practical weapon specialist who can summon a vast arsenal from her scrolls.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kiba-inuzuka",
    name: "Kiba Inuzuka",
    anime: "Naruto",
    role: "Support",
    description:
      "A hot-headed ninja who fights alongside his loyal ninja hound, Akamaru.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "shino-aburame",
    name: "Shino Aburame",
    anime: "Naruto",
    role: "Support",
    description:
      "A quiet, highly analytical ninja who uses living insects housed within his body for combat and tracking.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Hokage
  {
    id: "hashirama-senju",
    name: "Hashirama Senju",
    anime: "Naruto",
    role: "Hokage",
    description:
      "The optimistic First Hokage and 'God of Shinobi', known for his unique Wood Release.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tobirama-senju",
    name: "Tobirama Senju",
    anime: "Naruto",
    role: "Hokage",
    description:
      "The pragmatic Second Hokage who invented many of the ninja world's most powerful, and forbidden, techniques.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hiruzen-sarutobi",
    name: "Hiruzen Sarutobi",
    anime: "Naruto",
    role: "Hokage",
    description:
      "The Third Hokage, a master of all chakra natures who serves as a grandfather figure to the village.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "minato-namikaze",
    name: "Minato Namikaze",
    anime: "Naruto",
    role: "Hokage",
    description:
      "The Fourth Hokage, famously known as the 'Yellow Flash' for his unmatched speed, and Naruto's father.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Sand Village
  {
    id: "gaara",
    name: "Gaara",
    anime: "Naruto",
    role: "Kazekage",
    description:
      "A formerly murderous Jinchuriki who is redeemed by Naruto's empathy and becomes the respected leader of the Sand Village.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "temari",
    name: "Temari",
    anime: "Naruto",
    role: "Support",
    description:
      "Gaara's older sister and a master of Wind Release utilizing a giant iron fan.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kankuro",
    name: "Kankuro",
    anime: "Naruto",
    role: "Support",
    description:
      "Gaara's older brother, a skilled puppeteer who uses deadly poisoned contraptions.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Final Arc
  {
    id: "kaguya-otsutsuki",
    name: "Kaguya Otsutsuki",
    anime: "Naruto",
    role: "Final Villain",
    description:
      "The progenitor of all chakra, an alien entity who seeks to reclaim the world's energy.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "indra-otsutsuki",
    name: "Indra Otsutsuki",
    anime: "Naruto",
    role: "Antagonist",
    description:
      "The genius ancestor of the Uchiha clan who believed power alone was the key to peace.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ashura-otsutsuki",
    name: "Ashura Otsutsuki",
    anime: "Naruto",
    role: "Support",
    description:
      "The compassionate ancestor of the Senju and Uzumaki clans who believed love and cooperation were true power.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Other Major Characters
  {
    id: "killer-bee",
    name: "Killer Bee",
    anime: "Naruto",
    role: "Jinchuriki",
    description:
      "A rapping, sword-wielding Jinchuriki who formed a perfect bond with the Eight-Tails.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yamato",
    name: "Yamato",
    anime: "Naruto",
    role: "Support",
    description:
      "An Anbu operative implanted with Hashirama's DNA, giving him the rare ability to use Wood Release.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "danzo-shimura",
    name: "Danzo Shimura",
    anime: "Naruto",
    role: "Antagonist",
    description:
      "The ruthless leader of the covert Foundation who commits atrocities in the name of protecting Konoha.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kabuto-yakushi",
    name: "Kabuto Yakushi",
    anime: "Naruto",
    role: "Villain",
    description:
      "Orochimaru's loyal right-hand man and spy who eventually masters Senjutsu and reanimation.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "anko-mitarashi",
    name: "Anko Mitarashi",
    anime: "Naruto",
    role: "Support",
    description:
      "A boisterous Konoha Tokubetsu Jonin and former student of Orochimaru.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kurama",
    name: "Kurama (Nine-Tails)",
    anime: "Naruto",
    role: "Tailed Beast",
    description:
      "The cynical Nine-Tailed Fox sealed within Naruto, who transitions from a hateful beast to a loyal partner.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Straw Hat Pirates
  {
    id: "monkey-d-luffy",
    name: "Monkey D. Luffy",
    anime: "One Piece",
    role: "Protagonist",
    description:
      "A cheerful, meat-loving pirate made of rubber who is determined to find the One Piece and become the Pirate King.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "roronoa-zoro",
    name: "Roronoa Zoro",
    anime: "One Piece",
    role: "Swordsman",
    description:
      "A highly resilient, directionally challenged swordsman aiming to become the world's strongest using his Three-Sword Style.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "nami",
    name: "Nami",
    anime: "One Piece",
    role: "Navigator",
    description:
      "The Straw Hats' brilliant navigator and weather-controlling fighter, who dreams of mapping the entire world.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "usopp",
    name: "Usopp",
    anime: "One Piece",
    role: "Sniper",
    description:
      "A cowardly but creative sniper known for his tall tales, striving to become a brave warrior of the sea.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sanji",
    name: "Sanji",
    anime: "One Piece",
    role: "Cook",
    description:
      "A chivalrous, chain-smoking chef who fights only with his legs to protect his hands for cooking.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tony-tony-chopper",
    name: "Tony Tony Chopper",
    anime: "One Piece",
    role: "Doctor",
    description:
      "A sweet-natured reindeer who ate the Human-Human Fruit and serves as the crew's brilliant doctor.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "nico-robin",
    name: "Nico Robin",
    anime: "One Piece",
    role: "Archaeologist",
    description:
      "A calm and macabre archaeologist seeking the world's true history, capable of sprouting limbs anywhere.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "franky",
    name: "Franky",
    anime: "One Piece",
    role: "Shipwright",
    description:
      "A 'super' cola-powered cyborg shipwright who built and maintains the Thousand Sunny.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "brook",
    name: "Brook",
    anime: "One Piece",
    role: "Musician",
    description:
      "A revived skeleton musician and swordsman who brings levity to the crew with his skull jokes.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "jinbe",
    name: "Jinbe",
    anime: "One Piece",
    role: "Helmsman",
    description:
      "A noble whale shark Fish-Man and master of Fish-Man Karate who serves as the crew's helmsman.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Yonko
  {
    id: "shanks",
    name: "Shanks",
    anime: "One Piece",
    role: "Yonko",
    description:
      "The charismatic, one-armed captain of the Red Hair Pirates and the man who inspired Luffy to set sail.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "blackbeard",
    name: "Marshall D. Teach (Blackbeard)",
    anime: "One Piece",
    role: "Yonko",
    description:
      "An opportunistic and ruthless pirate who broke the rules of the world by wielding two Devil Fruit powers.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "big-mom",
    name: "Charlotte Linlin (Big Mom)",
    anime: "One Piece",
    role: "Yonko",
    description:
      "A colossal, sweet-obsessed Yonko who manipulates souls and rules over Totto Land.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kaido",
    name: "Kaido",
    anime: "One Piece",
    role: "Yonko",
    description:
      "Known as the strongest creature in the world, a Yonko who can transform into a massive Azure Dragon.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "whitebeard",
    name: "Edward Newgate (Whitebeard)",
    anime: "One Piece",
    role: "Yonko",
    description:
      "A legendary pirate known as the 'Strongest Man in the World', who valued a found family above all treasure.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Revolutionary Army
  {
    id: "monkey-d-dragon",
    name: "Monkey D. Dragon",
    anime: "One Piece",
    role: "Revolutionary Leader",
    description:
      "Luffy's enigmatic father and the World Government's most wanted man, leading the Revolutionary Army.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sabo",
    name: "Sabo",
    anime: "One Piece",
    role: "Revolutionary",
    description:
      "Luffy's sworn brother and the Chief of Staff of the Revolutionary Army, wielding the Flare-Flare Fruit.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Marines
  {
    id: "garp",
    name: "Monkey D. Garp",
    anime: "One Piece",
    role: "Marine Hero",
    description:
      "Luffy's boisterous grandfather, a legendary Marine Vice Admiral renowned for his incredible Haki and physical strength.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sengoku",
    name: "Sengoku",
    anime: "One Piece",
    role: "Fleet Admiral",
    description:
      "The former Fleet Admiral of the Marines, possessing a Mythical Zoan fruit that turns him into a giant golden Buddha.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "akainu",
    name: "Sakazuki (Akainu)",
    anime: "One Piece",
    role: "Admiral",
    description:
      "The uncompromising, magma-powered Fleet Admiral who believes in 'Absolute Justice' at any cost.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "aokiji",
    name: "Kuzan (Aokiji)",
    anime: "One Piece",
    role: "Admiral",
    description:
      "A laid-back former Marine Admiral with ice powers who pursues his own sense of 'Lazy Justice'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kizaru",
    name: "Borsalino (Kizaru)",
    anime: "One Piece",
    role: "Admiral",
    description:
      "A seemingly absent-minded Admiral possessing the devastating power of the Glint-Glint Fruit to move and attack at light speed.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "fujitora",
    name: "Issho (Fujitora)",
    anime: "One Piece",
    role: "Admiral",
    description:
      "A blind Marine Admiral who commands gravity and follows a deeply moral code of honor.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "smoker",
    name: "Smoker",
    anime: "One Piece",
    role: "Marine",
    description:
      "A gruff, cigar-chomping Marine Vice Admiral made of smoke, who relentlessly chases the Straw Hat Pirates.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "coby",
    name: "Coby",
    anime: "One Piece",
    role: "Marine",
    description:
      "A former chore boy saved by Luffy who trained under Garp to become an honest, rising star in the Marines.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Warlords
  {
    id: "mihawk",
    name: "Dracule Mihawk",
    anime: "One Piece",
    role: "Warlord",
    description:
      "The stoic, piercing-eyed 'World's Strongest Swordsman' and Zoro's ultimate goal.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "crocodile",
    name: "Sir Crocodile",
    anime: "One Piece",
    role: "Warlord",
    description:
      "A cunning mob boss with sand manipulation powers who attempted to conquer the desert nation of Alabasta.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "boa-hancock",
    name: "Boa Hancock",
    anime: "One Piece",
    role: "Warlord",
    description:
      "The haughty 'Pirate Empress' of Amazon Lily who harbors a massive, secret crush on Luffy.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "donquixote-doflamingo",
    name: "Donquixote Doflamingo",
    anime: "One Piece",
    role: "Warlord",
    description:
      "A flamboyant and sadistic underworld broker who ruled Dressrosa with his string manipulation powers.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "bartholomew-kuma",
    name: "Bartholomew Kuma",
    anime: "One Piece",
    role: "Warlord",
    description:
      "A massive, paw-powered cyborg who secretly supported the Revolutionaries before losing his humanity.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "gecko-moria",
    name: "Gecko Moria",
    anime: "One Piece",
    role: "Warlord",
    description:
      "A lazy pirate who uses his Devil Fruit to steal shadows and create an army of zombies.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Worst Generation
  {
    id: "trafalgar-law",
    name: "Trafalgar D. Water Law",
    anime: "One Piece",
    role: "Supernova",
    description:
      "The calculating 'Surgeon of Death' whose Op-Op Fruit allows him to control spatial realities within his 'Room'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "eustass-kid",
    name: "Eustass Kid",
    anime: "One Piece",
    role: "Supernova",
    description:
      "A violent and notoriously cruel pirate captain who uses magnetism to fight.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "killer",
    name: "Killer",
    anime: "One Piece",
    role: "Supernova",
    description:
      "Kid's loyal first mate, a masked combatant wielding spinning scythe blades.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Major Arc Villains
  {
    id: "arlong",
    name: "Arlong",
    anime: "One Piece",
    role: "Villain",
    description:
      "A cruel Fish-Man supremacist who terrorized Nami's village and forced her to draw maps for him.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "enel",
    name: "Enel",
    anime: "One Piece",
    role: "Villain",
    description:
      "A narcissistic 'God' who ruled Skypiea with his terrifying lightning powers until encountering Luffy.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rob-lucci",
    name: "Rob Lucci",
    anime: "One Piece",
    role: "Villain",
    description:
      "A cold, bloodthirsty assassin of CP9 who uses the Leopard Zoan fruit and Rokushiki techniques.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "caesar-clown",
    name: "Caesar Clown",
    anime: "One Piece",
    role: "Villain",
    description:
      "A manic, gas-powered scientist who conducted cruel experiments on children in Punk Hazard.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Whitebeard Pirates
  {
    id: "ace",
    name: "Portgas D. Ace",
    anime: "One Piece",
    role: "Commander",
    description:
      "Luffy's beloved sworn brother and the fire-wielding Second Division Commander of the Whitebeard Pirates.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "marco",
    name: "Marco the Phoenix",
    anime: "One Piece",
    role: "Commander",
    description:
      "Whitebeard's loyal First Division Commander, capable of healing any wound with his Mythical Phoenix flames.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Big Mom Pirates
  {
    id: "katakuri",
    name: "Charlotte Katakuri",
    anime: "One Piece",
    role: "Commander",
    description:
      "Big Mom's strongest Sweet Commander, an honorable fighter whose Observation Haki lets him see slightly into the future.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "perospero",
    name: "Charlotte Perospero",
    anime: "One Piece",
    role: "Commander",
    description:
      "Big Mom's eldest son, a sadistic and cunning candy-manipulator.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Wano Arc
  {
    id: "kozuki-oden",
    name: "Kozuki Oden",
    anime: "One Piece",
    role: "Samurai",
    description:
      "A legendary, free-spirited samurai of Wano who traveled with both Whitebeard and Roger.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yamato",
    name: "Yamato",
    anime: "One Piece",
    role: "Warrior",
    description:
      "Kaido's child who fiercely idolizes Oden and fights to liberate the country of Wano.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Others Major
  {
    id: "buggy",
    name: "Buggy",
    anime: "One Piece",
    role: "Pirate",
    description:
      "A flashy, cowardly pirate captain whose sheer dumb luck constantly propels him into positions of incredible power.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "silvers-rayleigh",
    name: "Silvers Rayleigh",
    anime: "One Piece",
    role: "Mentor",
    description:
      "The 'Dark King' and former first mate of Gol D. Roger, who trained Luffy in the ways of Haki.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "vinsmoke-judge",
    name: "Vinsmoke Judge",
    anime: "One Piece",
    role: "Antagonist",
    description:
      "Sanji's abusive father and the genetically-engineering ruler of the Germa Kingdom.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "charlotte-pudding",
    name: "Charlotte Pudding",
    anime: "One Piece",
    role: "Support",
    description:
      "A three-eyed daughter of Big Mom with memory-altering powers and a highly conflicted personality.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "bon-clay",
    name: "Bentham (Mr. 2 Bon Clay)",
    anime: "One Piece",
    role: "Ally",
    description:
      "An eccentric, cross-dressing martial artist who values friendship above all and sacrifices himself for Luffy multiple times.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ivankov",
    name: "Emporio Ivankov",
    anime: "One Piece",
    role: "Revolutionary",
    description:
      "A flamboyant commander in the Revolutionary Army possessing hormone-manipulating powers.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "shirahoshi",
    name: "Shirahoshi",
    anime: "One Piece",
    role: "Princess",
    description:
      "The crybaby Giant Mermaid Princess who is secretly the Ancient Weapon Poseidon.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "vivi",
    name: "Nefertari Vivi",
    anime: "One Piece",
    role: "Princess",
    description:
      "The brave princess of Alabasta who infiltrated Baroque Works and became an honorary Straw Hat.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "carrot",
    name: "Carrot",
    anime: "One Piece",
    role: "Warrior",
    description:
      "A cheerful, high-jumping Mink warrior who unleashes her fierce Sulong form under the full moon.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "king",
    name: "King",
    anime: "One Piece",
    role: "Commander",
    description:
      "Kaido's stoic right-hand man and the last known survivor of the flame-conjuring Lunarian race.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "queen",
    name: "Queen",
    anime: "One Piece",
    role: "Commander",
    description:
      "A boisterous, dancing cyborg scientist and one of Kaido's Lead Performers.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Attack on Titan
  {
    id: "eren-yeager",
    name: "Eren Yeager",
    anime: "Attack on Titan",
    role: "Protagonist",
    description:
      "A fiercely determined young man who swears to wipe out all Titans, leading him down a dark, controversial path.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "mikasa-ackerman",
    name: "Mikasa Ackerman",
    anime: "Attack on Titan",
    role: "Support",
    description:
      "A quiet, exceptionally deadly soldier whose primary motivation is protecting Eren at all costs.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "armin-arlert",
    name: "Armin Arlert",
    anime: "Attack on Titan",
    role: "Strategist",
    description:
      "A highly intelligent, empathetic tactician who dreams of seeing the world outside the walls.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Survey Corps
  {
    id: "levi-ackerman",
    name: "Levi Ackerman",
    anime: "Attack on Titan",
    role: "Captain",
    description:
      "Humanity's Strongest Soldier, an intensely skilled and obsessive-compulsive fighter with a tragic past.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "erwin-smith",
    name: "Erwin Smith",
    anime: "Attack on Titan",
    role: "Commander",
    description:
      "The brilliant, charismatic, and ruthless commander of the Survey Corps driven by a desire to learn the world's truth.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hanji-zoe",
    name: "Hange Zoe",
    anime: "Attack on Titan",
    role: "Commander",
    description:
      "An eccentric, Titan-obsessed researcher who later takes on the heavy burden of commanding the Survey Corps.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "jean-kirstein",
    name: "Jean Kirstein",
    anime: "Attack on Titan",
    role: "Soldier",
    description:
      "A blunt and pragmatic soldier who matures from a selfish recruit into a dependable leader.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "connie-springer",
    name: "Connie Springer",
    anime: "Attack on Titan",
    role: "Soldier",
    description:
      "An upbeat and somewhat naive soldier who faces immense tragedy as the war progresses.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sasha-blouse",
    name: "Sasha Blouse",
    anime: "Attack on Titan",
    role: "Soldier",
    description:
      "A quirky, food-loving sharpshooter known affectionately as 'Potato Girl'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "historia-reiss",
    name: "Historia Reiss",
    anime: "Attack on Titan",
    role: "Queen",
    description:
      "A kind girl who casts off her fake persona to embrace her royal bloodline and become Queen of the Walls.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ymir",
    name: "Ymir",
    anime: "Attack on Titan",
    role: "Titan Shifter",
    description:
      "A cynical, fiercely independent Jaw Titan shifter who cares deeply only for Historia.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Titan Shifters
  {
    id: "reiner-braun",
    name: "Reiner Braun",
    anime: "Attack on Titan",
    role: "Armored Titan",
    description:
      "The guilt-ridden Armored Titan who suffers from a fractured psyche due to his actions as a Marleyan Warrior.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "bertolt-hoover",
    name: "Bertolt Hoover",
    anime: "Attack on Titan",
    role: "Colossal Titan",
    description:
      "The quiet and hesitant Colossal Titan whose destructive power kicked off the fall of Wall Maria.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "annie-leonhart",
    name: "Annie Leonhart",
    anime: "Attack on Titan",
    role: "Female Titan",
    description:
      "A cold, highly skilled martial artist and the Female Titan, driven only by a desire to return to her father.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "zeke-yeager",
    name: "Zeke Yeager",
    anime: "Attack on Titan",
    role: "Beast Titan",
    description:
      "Eren's half-brother and the Beast Titan, pushing a secret plan to euthanize the Eldian race.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "pieck-finger",
    name: "Pieck Finger",
    anime: "Attack on Titan",
    role: "Cart Titan",
    description:
      "The intelligent and laid-back Cart Titan, specializing in long-term support and mobility.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "porco-galliard",
    name: "Porco Galliard",
    anime: "Attack on Titan",
    role: "Jaw Titan",
    description:
      "The aggressive and prideful Jaw Titan who harbors a bitter grudge against Reiner.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "marcel-galliard",
    name: "Marcel Galliard",
    anime: "Attack on Titan",
    role: "Warrior",
    description:
      "Porco's older brother and the previous Jaw Titan, who sacrificed himself to save Reiner.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "lara-tybur",
    name: "Lara Tybur",
    anime: "Attack on Titan",
    role: "War Hammer Titan",
    description:
      "The stoic wielder of the War Hammer Titan, capable of creating hardened weapons and structures remotely.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Marley & Others
  {
    id: "gabi-braun",
    name: "Gabi Braun",
    anime: "Attack on Titan",
    role: "Warrior Candidate",
    description:
      "A fiercely brainwashed Marleyan Warrior candidate whose worldview shatters upon meeting the 'devils' of Paradis.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "falco-grice",
    name: "Falco Grice",
    anime: "Attack on Titan",
    role: "Warrior Candidate",
    description:
      "A compassionate and empathetic Warrior candidate who seeks to protect Gabi from inheriting a Titan.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "magath",
    name: "Theo Magath",
    anime: "Attack on Titan",
    role: "General",
    description:
      "A strict Marleyan commander who comes to regret the cycle of hatred his nation perpetuates.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "willy-tybur",
    name: "Willy Tybur",
    anime: "Attack on Titan",
    role: "Political Leader",
    description:
      "The charismatic head of the Tybur family who declares war on Paradis Island.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Royal Bloodline
  {
    id: "grisha-yeager",
    name: "Grisha Yeager",
    anime: "Attack on Titan",
    role: "Founding Titan",
    description:
      "Eren's father, an Eldian restorationist from Marley who stole the Founding Titan for the future.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "dina-fritz",
    name: "Dina Fritz",
    anime: "Attack on Titan",
    role: "Royal Blood",
    description:
      "Zeke's mother and a member of the royal bloodline who was tragically turned into the Smiling Titan.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "karl-fritz",
    name: "Karl Fritz",
    anime: "Attack on Titan",
    role: "King",
    description:
      "The pacifist King who built the Walls and bound his descendants to a vow renouncing war.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rod-reiss",
    name: "Rod Reiss",
    anime: "Attack on Titan",
    role: "Noble",
    description:
      "Historia's cowardly father who desperately attempted to keep the Founding Titan within the royal family.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Military Police
  {
    id: "dot-pixis",
    name: "Dot Pixis",
    anime: "Attack on Titan",
    role: "Commander",
    description:
      "An eccentric but brilliant Garrison Commander who loves drinking and tactical gambles.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kitz-woermann",
    name: "Kitz Woermann",
    anime: "Attack on Titan",
    role: "Officer",
    description:
      "A cowardly and paranoid Garrison captain who ordered the execution of Eren upon his first transformation.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Final Arc Important
  {
    id: "floch-forster",
    name: "Floch Forster",
    anime: "Attack on Titan",
    role: "Yeagerist Leader",
    description:
      "A cowardly recruit turned radicalized, fanatic leader of the Yeagerists.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "onyankopon",
    name: "Onyankopon",
    anime: "Attack on Titan",
    role: "Ally",
    description:
      "A kind-hearted Anti-Marleyan volunteer who introduces modern technology to Paradis.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "nicolo",
    name: "Nicolo",
    anime: "Attack on Titan",
    role: "Ally",
    description:
      "A Marleyan captive and talented chef whose cooking wins over Sasha's heart.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hitch-dreyse",
    name: "Hitch Dreyse",
    anime: "Attack on Titan",
    role: "Military Police",
    description:
      "A lazy but observant Military Police member who genuinely cared for Annie and Marlowe.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Death Note
  {
    id: "light-yagami",
    name: "Light Yagami",
    anime: "Death Note",
    role: "Kira",
    description:
      "A brilliant, bored high school student who finds a notebook that kills people and develops a god complex.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "l-lawliet",
    name: "L Lawliet",
    anime: "Death Note",
    role: "Detective",
    description:
      "An eccentric, sugar-loving, genius detective who is determined to catch Kira.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Kira Support
  {
    id: "misa-amane",
    name: "Misa Amane",
    anime: "Death Note",
    role: "Second Kira",
    description:
      "A bubbly pop idol who possesses the Shinigami Eyes and is obsessively in love with Light.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "teru-mikami",
    name: "Teru Mikami",
    anime: "Death Note",
    role: "Kira Follower",
    description:
      "A strict, justice-obsessed prosecutor who acts as Kira's proxy.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kiyomi-takada",
    name: "Kiyomi Takada",
    anime: "Death Note",
    role: "Kira Spokesperson",
    description:
      "A poised news anchor and Light's former classmate who serves as Kira's public voice.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Task Force
  {
    id: "soichiro-yagami",
    name: "Soichiro Yagami",
    anime: "Death Note",
    role: "Task Force Leader",
    description:
      "Light's righteous father and the chief of the Japanese police task force hunting Kira.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "touta-matsuda",
    name: "Touta Matsuda",
    anime: "Death Note",
    role: "Detective",
    description:
      "A well-meaning but often bumbling young detective who ironically deeply respected Light.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "shuichi-aizawa",
    name: "Shuichi Aizawa",
    anime: "Death Note",
    role: "Detective",
    description:
      "A strict and serious Task Force member who is often the first to doubt Light.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kanzo-mogi",
    name: "Kanzo Mogi",
    anime: "Death Note",
    role: "Detective",
    description:
      "A silent, large, and highly reliable detective on the Kira Task Force.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hideki-ide",
    name: "Hideki Ide",
    anime: "Death Note",
    role: "Detective",
    description:
      "A detective who initially left the Task Force out of mistrust for L, but returns to support Aizawa.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Wammy House
  {
    id: "near",
    name: "Near (Nate River)",
    anime: "Death Note",
    role: "Detective",
    description:
      "L's white-haired successor who calmly plays with toys while logically dissecting the Kira case.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "mello",
    name: "Mello (Mihael Keehl)",
    anime: "Death Note",
    role: "Detective",
    description:
      "L's emotional, chocolate-eating successor who joins the mafia to hunt Kira on his own terms.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "watari",
    name: "Watari (Quillsh Wammy)",
    anime: "Death Note",
    role: "Support",
    description:
      "L's elderly handler and the wealthy founder of Wammy's House.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Shinigami
  {
    id: "ryuk",
    name: "Ryuk",
    anime: "Death Note",
    role: "Shinigami",
    description:
      "An apple-loving Death God who dropped his notebook into the human world simply because he was bored.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rem",
    name: "Rem",
    anime: "Death Note",
    role: "Shinigami",
    description: "A serious Shinigami who is highly protective of Misa Amane.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sidoh",
    name: "Sidoh",
    anime: "Death Note",
    role: "Shinigami",
    description:
      "A cowardly Shinigami who comes to the human world to retrieve his stolen Death Note from Ryuk.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Corporate / Yotsuba Arc
  {
    id: "kyosuke-higuchi",
    name: "Kyosuke Higuchi",
    anime: "Death Note",
    role: "Corporate Kira",
    description:
      "A greedy Yotsuba executive who uses the Death Note for financial gain and career advancement.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Family
  {
    id: "sayu-yagami",
    name: "Sayu Yagami",
    anime: "Death Note",
    role: "Family",
    description:
      "Light's innocent younger sister who becomes a traumatized victim in the crossfire of the Kira investigation.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sachiko-yagami",
    name: "Sachiko Yagami",
    anime: "Death Note",
    role: "Family",
    description:
      "Light's caring mother who remains oblivious to the dark reality of her family.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Others
  {
    id: "raye-penber",
    name: "Raye Penber",
    anime: "Death Note",
    role: "FBI Agent",
    description:
      "An FBI agent assigned to tail Light Yagami, ultimately manipulated into his own demise.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Demon Slayer
  {
    id: "tanjiro-kamado",
    name: "Tanjiro Kamado",
    anime: "Demon Slayer",
    role: "Protagonist",
    description:
      "A kind-hearted boy with a powerful sense of smell who becomes a Demon Slayer to cure his sister.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "nezuko-kamado",
    name: "Nezuko Kamado",
    anime: "Demon Slayer",
    role: "Demon",
    description:
      "Tanjiro's younger sister who was turned into a demon but retains her human emotions and refuses to eat humans.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "zenitsu-agatsuma",
    name: "Zenitsu Agatsuma",
    anime: "Demon Slayer",
    role: "Slayer",
    description:
      "A cowardly Slayer who becomes a lightning-fast, deadly swordsman when he falls asleep out of pure terror.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "inosuke-hashibira",
    name: "Inosuke Hashibira",
    anime: "Demon Slayer",
    role: "Slayer",
    description:
      "A boar-mask-wearing, highly flexible fighter raised by animals who loves rushing into battle.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Hashira
  {
    id: "giyu-tomioka",
    name: "Giyu Tomioka",
    anime: "Demon Slayer",
    role: "Water Hashira",
    description:
      "The stoic and socially awkward Water Hashira who first spared Nezuko's life.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "shinobu-kocho",
    name: "Shinobu Kocho",
    anime: "Demon Slayer",
    role: "Insect Hashira",
    description:
      "The perpetually smiling Insect Hashira who lacks the physical strength to behead demons, using deadly wisteria poison instead.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kyojuro-rengoku",
    name: "Kyojuro Rengoku",
    anime: "Demon Slayer",
    role: "Flame Hashira",
    description:
      "The loudly enthusiastic Flame Hashira with an unbreakable spirit and a fierce dedication to protecting the weak.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tengen-uzui",
    name: "Tengen Uzui",
    anime: "Demon Slayer",
    role: "Sound Hashira",
    description:
      "A flashy, dual-cleaver wielding former shinobi and the Sound Hashira.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "mitsuri-kanroji",
    name: "Mitsuri Kanroji",
    anime: "Demon Slayer",
    role: "Love Hashira",
    description:
      "The cheerful Love Hashira possessing unnaturally dense muscles and a whip-like sword.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "muichiro-tokito",
    name: "Muichiro Tokito",
    anime: "Demon Slayer",
    role: "Mist Hashira",
    description: "The young, forgetful, and highly talented Mist Hashira.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "gyomei-himejima",
    name: "Gyomei Himejima",
    anime: "Demon Slayer",
    role: "Stone Hashira",
    description:
      "The blind, gentle giant recognized as the physically strongest among all the Hashira.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sanemi-shinazugawa",
    name: "Sanemi Shinazugawa",
    anime: "Demon Slayer",
    role: "Wind Hashira",
    description:
      "The aggressive, heavily scarred Wind Hashira holding a deep, burning hatred for all demons.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "obanai-iguro",
    name: "Obanai Iguro",
    anime: "Demon Slayer",
    role: "Serpent Hashira",
    description:
      "The strict, snake-wearing Serpent Hashira who is deeply in love with Mitsuri.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Upper Moons
  {
    id: "muzan-kibutsuji",
    name: "Muzan Kibutsuji",
    anime: "Demon Slayer",
    role: "Main Villain",
    description:
      "The progenitor of all demons, a cold and cowardly tyrant obsessed with conquering the sun.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kokushibo",
    name: "Kokushibo",
    anime: "Demon Slayer",
    role: "Upper Moon One",
    description:
      "The highest-ranking Upper Moon, a former Demon Slayer who uses Moon Breathing.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "doma",
    name: "Doma",
    anime: "Demon Slayer",
    role: "Upper Moon Two",
    description:
      "A psychopathic cult leader and Upper Moon Two with lethal ice abilities and no true emotions.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "akaza",
    name: "Akaza",
    anime: "Demon Slayer",
    role: "Upper Moon Three",
    description:
      "A martial arts-obsessed Upper Moon who respects strength above all else and refuses to eat women.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hantengu",
    name: "Hantengu",
    anime: "Demon Slayer",
    role: "Upper Moon Four",
    description:
      "A seemingly cowardly demon who splits into powerful clones representing his different emotions.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "gyokko",
    name: "Gyokko",
    anime: "Demon Slayer",
    role: "Upper Moon Five",
    description:
      "An arrogant, vase-dwelling demon with a grotesque sense of 'art'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "daki",
    name: "Daki",
    anime: "Demon Slayer",
    role: "Upper Moon Six",
    description:
      "A beautiful but cruel demon who masquerades as an oiran while hunting in the Entertainment District.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "gyutaro",
    name: "Gyutaro",
    anime: "Demon Slayer",
    role: "Upper Moon Six",
    description:
      "Daki's hideous, venom-wielding brother and the true power behind the Upper Moon Six title.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Lower Moons
  {
    id: "enmu",
    name: "Enmu",
    anime: "Demon Slayer",
    role: "Lower Moon One",
    description:
      "A sadistic demon who uses sleep manipulation to give his victims happy dreams before killing them.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rui",
    name: "Rui",
    anime: "Demon Slayer",
    role: "Lower Moon Five",
    description:
      "A spider demon obsessed with creating a twisted, artificial 'family'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Kamado Family / Supporting
  {
    id: "kanao-tsuyuri",
    name: "Kanao Tsuyuri",
    anime: "Demon Slayer",
    role: "Slayer",
    description:
      "A quiet prodigy who relies on a coin flip to make decisions until Tanjiro helps her find her own voice.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "genya-shinazugawa",
    name: "Genya Shinazugawa",
    anime: "Demon Slayer",
    role: "Slayer",
    description:
      "A gruff slayer unable to use Breathing Styles, who eats demon flesh to temporarily gain their powers.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sabito",
    name: "Sabito",
    anime: "Demon Slayer",
    role: "Former Slayer",
    description:
      "A deceased former pupil of Urokodaki whose spirit helps train Tanjiro.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "makomo",
    name: "Makomo",
    anime: "Demon Slayer",
    role: "Former Slayer",
    description:
      "A mysterious, gentle spirit who aids Tanjiro in mastering Water Breathing.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "urokodaki",
    name: "Sakonji Urokodaki",
    anime: "Demon Slayer",
    role: "Mentor",
    description:
      "The masked former Water Hashira who trains Tanjiro on Mt. Sagiri.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Other Important Demons / Swordsmiths
  {
    id: "tamayo",
    name: "Tamayo",
    anime: "Demon Slayer",
    role: "Ally Demon",
    description:
      "A gentle demon doctor who broke free of Muzan's control and researches a cure for demonification.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yushiro",
    name: "Yushiro",
    anime: "Demon Slayer",
    role: "Ally Demon",
    description:
      "A fiercely loyal demon turned by Tamayo, possessing powerful concealment Blood Demon Arts.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hotaru-haganezuka",
    name: "Hotaru Haganezuka",
    anime: "Demon Slayer",
    role: "Swordsmith",
    description:
      "An eccentric, hyper-focused swordsmith who goes into murderous rages whenever Tanjiro breaks his swords.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kotetsu",
    name: "Kotetsu",
    anime: "Demon Slayer",
    role: "Villager",
    description:
      "A young, masked villager from the Swordsmith Village who guards the Yoriichi Type Zero training doll.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Jujutsu Kaisen
  {
    id: "yuji-itadori",
    name: "Yuji Itadori",
    anime: "Jujutsu Kaisen",
    role: "Protagonist",
    description:
      "A remarkably strong teen who swallows a cursed finger to save his friends, becoming the vessel for Sukuna.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "megumi-fushiguro",
    name: "Megumi Fushiguro",
    anime: "Jujutsu Kaisen",
    role: "Sorcerer",
    description:
      "A stoic prodigy wielding the Ten Shadows Technique who fights to protect good people.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "nobara-kugisaki",
    name: "Nobara Kugisaki",
    anime: "Jujutsu Kaisen",
    role: "Sorcerer",
    description:
      "A fierce, confident sorcerer from the countryside who uses a hammer and nails to execute voodoo-like attacks.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "satoru-gojo",
    name: "Satoru Gojo",
    anime: "Jujutsu Kaisen",
    role: "Mentor",
    description:
      "The cocky, unquestionable strongest jujutsu sorcerer in the world, wielding the Limitless and Six Eyes.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Special Grade Sorcerers
  {
    id: "yuta-okkotsu",
    name: "Yuta Okkotsu",
    anime: "Jujutsu Kaisen",
    role: "Special Grade",
    description:
      "A humble but immensely powerful Special Grade sorcerer haunted by the spirit of his childhood friend Rika.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "suguru-geto",
    name: "Suguru Geto",
    anime: "Jujutsu Kaisen",
    role: "Antagonist",
    description:
      "Gojo's former best friend who grew disgusted with humanity and seeks to create a world only for sorcerers.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Curses
  {
    id: "ryomen-sukuna",
    name: "Ryomen Sukuna",
    anime: "Jujutsu Kaisen",
    role: "Main Antagonist",
    description:
      "The sadistic, overwhelmingly powerful 'King of Curses' residing within Itadori's body.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "mahito",
    name: "Mahito",
    anime: "Jujutsu Kaisen",
    role: "Curse",
    description:
      "A twisted, philosophical curse born from human hatred capable of reshaping souls with his touch.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "jogo",
    name: "Jogo",
    anime: "Jujutsu Kaisen",
    role: "Curse",
    description:
      "A hot-headed, one-eyed volcanic disaster curse who desperately wishes for curses to replace humans.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hanami",
    name: "Hanami",
    anime: "Jujutsu Kaisen",
    role: "Curse",
    description:
      "A highly durable disaster curse born from humanity's abuse of nature.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "dagon",
    name: "Dagon",
    anime: "Jujutsu Kaisen",
    role: "Curse",
    description:
      "A water-based disaster curse born from the fear of the ocean.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Tokyo Students
  {
    id: "maki-zenin",
    name: "Maki Zenin",
    anime: "Jujutsu Kaisen",
    role: "Sorcerer",
    description:
      "A defiant fighter born with no cursed energy who relies on unmatched physical prowess and cursed tools.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "toge-inumaki",
    name: "Toge Inumaki",
    anime: "Jujutsu Kaisen",
    role: "Sorcerer",
    description:
      "A sorcerer who communicates using rice ball ingredients to avoid accidentally triggering his powerful Cursed Speech.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "panda",
    name: "Panda",
    anime: "Jujutsu Kaisen",
    role: "Sorcerer",
    description:
      "An abruptly talking, fighting panda who is actually a highly advanced Abrupt Mutated Cursed Corpse.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Teachers & Elders
  {
    id: "kento-nanami",
    name: "Kento Nanami",
    anime: "Jujutsu Kaisen",
    role: "Sorcerer",
    description:
      "A stoic former salaryman who returned to being a sorcerer because it's 'slightly less idiotic' than normal work.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "mei-mei",
    name: "Mei Mei",
    anime: "Jujutsu Kaisen",
    role: "Sorcerer",
    description:
      "A money-obsessed, highly competent Grade 1 sorcerer who commands crows.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "utahime-iori",
    name: "Utahime Iori",
    anime: "Jujutsu Kaisen",
    role: "Teacher",
    description:
      "A strict Kyoto school instructor who constantly loses her temper with Gojo.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yaga-masamichi",
    name: "Masamichi Yaga",
    anime: "Jujutsu Kaisen",
    role: "Principal",
    description:
      "The sunglasses-wearing principal of Tokyo Jujutsu High and creator of cursed corpses like Panda.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Kyoto Students
  {
    id: "aoi-todo",
    name: "Aoi Todo",
    anime: "Jujutsu Kaisen",
    role: "Sorcerer",
    description:
      "An eccentric, muscle-bound powerhouse who bases his friendships entirely on people's taste in women.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "mai-zenin",
    name: "Mai Zenin",
    anime: "Jujutsu Kaisen",
    role: "Sorcerer",
    description:
      "Maki's resentful twin sister who wields a revolver infused with her limited cursed energy.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "noritoshi-kamo",
    name: "Noritoshi Kamo",
    anime: "Jujutsu Kaisen",
    role: "Sorcerer",
    description:
      "A serious student burdened by his clan's expectations, specializing in Blood Manipulation.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "miwa-kasumi",
    name: "Kasumi Miwa",
    anime: "Jujutsu Kaisen",
    role: "Sorcerer",
    description:
      "A self-proclaimed 'useless' but earnest sorcerer who is a massive fangirl of Gojo.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kokichi-muta",
    name: "Kokichi Muta (Mechamaru)",
    anime: "Jujutsu Kaisen",
    role: "Sorcerer",
    description:
      "A boy bound by Heavenly Restriction, fighting remotely using the robot Mechamaru due to his frail physical body.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Zenin Clan & Others
  {
    id: "naobito-zenin",
    name: "Naobito Zenin",
    anime: "Jujutsu Kaisen",
    role: "Clan Head",
    description:
      "The arrogant, heavy-drinking head of the Zenin clan known for his ultra-fast Projection Sorcery.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "toji-fushiguro",
    name: "Toji Fushiguro",
    anime: "Jujutsu Kaisen",
    role: "Assassin",
    description:
      "Megumi's father, a deadly 'Sorcerer Killer' who possesses zero cursed energy but god-like physical abilities.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hajime-kashimo",
    name: "Hajime Kashimo",
    anime: "Jujutsu Kaisen",
    role: "Culling Player",
    description:
      "A reincarnated sorcerer obsessed with fighting the strongest, possessing electricity-like cursed energy.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hiromi-higuruma",
    name: "Hiromi Higuruma",
    anime: "Jujutsu Kaisen",
    role: "Culling Player",
    description:
      "A genius former defense attorney whose Domain Expansion forces opponents into a deadly courtroom trial.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kinji-hakari",
    name: "Kinji Hakari",
    anime: "Jujutsu Kaisen",
    role: "Sorcerer",
    description:
      "A suspended third-year student with an addictive personality and a pachinko-themed domain that grants him temporary immortality.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kirara-hoshi",
    name: "Kirara Hoshi",
    anime: "Jujutsu Kaisen",
    role: "Sorcerer",
    description:
      "Hakari's loyal partner who uses a complex, constellation-based cursed technique.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "reiji-star",
    name: "Reggie Star",
    anime: "Jujutsu Kaisen",
    role: "Culling Player",
    description:
      "A Culling Game participant who uses cursed receipts to manifest items in battle.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "choso",
    name: "Choso",
    anime: "Jujutsu Kaisen",
    role: "Cursed Womb",
    description:
      "A Death Painting Womb who discovers his deep brotherly connection to Itadori and fiercely protects him.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "eso",
    name: "Eso",
    anime: "Jujutsu Kaisen",
    role: "Cursed Womb",
    description:
      "One of the Death Painting brothers, known for his bizarre outfit and lethal decay technique.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kechizu",
    name: "Kechizu",
    anime: "Jujutsu Kaisen",
    role: "Cursed Womb",
    description:
      "The youngest of the materialized Death Painting brothers, possessing a grotesque, blood-spitting form.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Dragon Ball
  {
    id: "goku",
    name: "Goku",
    anime: "Dragon Ball",
    role: "Protagonist",
    description:
      "A pure-hearted Saiyan warrior raised on Earth who constantly seeks to break his own limits in battle.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "vegeta",
    name: "Vegeta",
    anime: "Dragon Ball",
    role: "Rival",
    description:
      "The proud Prince of all Saiyans who transitions from a ruthless conqueror to Earth's steadfast defender.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "gohan",
    name: "Gohan",
    anime: "Dragon Ball",
    role: "Saiyan",
    description:
      "Goku's scholarly son who harbors immense hidden potential that unleashes during times of great crisis.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "goten",
    name: "Goten",
    anime: "Dragon Ball",
    role: "Saiyan",
    description:
      "Goku's carefree youngest son who achieved Super Saiyan at a remarkably young age.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "trunks",
    name: "Trunks",
    anime: "Dragon Ball",
    role: "Saiyan",
    description:
      "Vegeta and Bulma's cocky, wealthy son and Goten's best friend.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "future-trunks",
    name: "Future Trunks",
    anime: "Dragon Ball",
    role: "Saiyan",
    description:
      "A serious, sword-wielding warrior from a ruined timeline who travels to the past to save the world.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "broly",
    name: "Broly",
    anime: "Dragon Ball",
    role: "Saiyan",
    description:
      "A gentle giant holding the untamable, catastrophic power of the Legendary Super Saiyan.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "bardock",
    name: "Bardock",
    anime: "Dragon Ball",
    role: "Saiyan",
    description:
      "Goku's father, a low-class Saiyan warrior who bravely made a final stand against Frieza.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Z Fighters
  {
    id: "piccolo",
    name: "Piccolo",
    anime: "Dragon Ball",
    role: "Warrior",
    description:
      "A stoic Namekian warrior who started as Goku's enemy but became Gohan's greatest mentor.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "krillin",
    name: "Krillin",
    anime: "Dragon Ball",
    role: "Warrior",
    description:
      "Goku's best friend from childhood and the bravest Earthling combatant in the universe.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yamcha",
    name: "Yamcha",
    anime: "Dragon Ball",
    role: "Warrior",
    description:
      "A former desert bandit turned martial artist and baseball player.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tien",
    name: "Tien Shinhan",
    anime: "Dragon Ball",
    role: "Warrior",
    description:
      "A highly disciplined, three-eyed martial artist who never stops training.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "chiaotzu",
    name: "Chiaotzu",
    anime: "Dragon Ball",
    role: "Warrior",
    description:
      "Tien's loyal, telekinetic companion with a doll-like appearance.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "android-18",
    name: "Android 18",
    anime: "Dragon Ball",
    role: "Android",
    description:
      "A cool, pragmatic cyborg who marries Krillin and fights for her family (and prize money).",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "android-17",
    name: "Android 17",
    anime: "Dragon Ball",
    role: "Android",
    description:
      "A rebellious cyborg turned dedicated park ranger and MVP of the Tournament of Power.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "android-16",
    name: "Android 16",
    anime: "Dragon Ball",
    role: "Android",
    description:
      "A gentle, nature-loving purely mechanical android whose death triggers Gohan's Super Saiyan 2 transformation.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Major Villains & Gods
  {
    id: "frieza",
    name: "Frieza",
    anime: "Dragon Ball",
    role: "Villain",
    description:
      "An incredibly arrogant, genocidal galactic tyrant responsible for the destruction of the Saiyan race.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "cell",
    name: "Cell",
    anime: "Dragon Ball",
    role: "Villain",
    description:
      "A bio-android containing the DNA of the universe's greatest fighters, seeking to achieve his 'Perfect' form.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "majin-buu",
    name: "Majin Buu",
    anime: "Dragon Ball",
    role: "Villain",
    description:
      "An ancient, chaotic magical entity with multiple forms, ranging from childlike to purely evil.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kid-buu",
    name: "Kid Buu",
    anime: "Dragon Ball",
    role: "Villain",
    description:
      "The original, mindless, and purely destructive incarnation of Majin Buu.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "cooler",
    name: "Cooler",
    anime: "Dragon Ball",
    role: "Villain",
    description:
      "Frieza's ruthless older brother who boasts a powerful extra transformation.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "beerus",
    name: "Beerus",
    anime: "Dragon Ball",
    role: "God of Destruction",
    description:
      "The cat-like God of Destruction of Universe 7, driven primarily by his immense love for Earth's food.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "whis",
    name: "Whis",
    anime: "Dragon Ball",
    role: "Angel",
    description:
      "Beerus's effeminate, perpetually calm attendant and martial arts master, possessing time-reversing abilities.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "zamasu",
    name: "Zamasu",
    anime: "Dragon Ball",
    role: "Villain",
    description:
      "A self-righteous Kai who despises mortals and executes the 'Zero Mortal Plan'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "goku-black",
    name: "Goku Black",
    anime: "Dragon Ball",
    role: "Villain",
    description:
      "Zamasu from an alternate timeline who stole Goku's body to purge the universe of mortals.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "grand-priest",
    name: "Grand Priest",
    anime: "Dragon Ball",
    role: "Angel",
    description:
      "The father of all Angels and the highest-ranking official serving Grand Zeno.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "zeno",
    name: "Zeno",
    anime: "Dragon Ball",
    role: "Omni King",
    description:
      "The childlike, absolute ruler of the multiverse capable of erasing entire universes in an instant.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Saiyans & Others
  {
    id: "raditz",
    name: "Raditz",
    anime: "Dragon Ball",
    role: "Saiyan",
    description: "Goku's ruthless biological older brother who kidnaps Gohan.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "nappa",
    name: "Nappa",
    anime: "Dragon Ball",
    role: "Saiyan",
    description:
      "A hulking, bald Saiyan warrior who accompanied Vegeta to Earth.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "king-vegeta",
    name: "King Vegeta",
    anime: "Dragon Ball",
    role: "Saiyan King",
    description:
      "Vegeta's father and the proud king of the Saiyan race, slain by Frieza.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "jiren",
    name: "Jiren",
    anime: "Dragon Ball",
    role: "Warrior",
    description:
      "A stoic, seemingly unbeatable Pride Trooper from Universe 11 who values absolute strength over teamwork.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "toppo",
    name: "Toppo",
    anime: "Dragon Ball",
    role: "Warrior",
    description:
      "The booming leader of the Pride Troopers and a candidate for God of Destruction.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "dyspo",
    name: "Dyspo",
    anime: "Dragon Ball",
    role: "Warrior",
    description: "A lightning-fast Pride Trooper who resembles a rabbit.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kefla",
    name: "Kefla",
    anime: "Dragon Ball",
    role: "Fusion",
    description:
      "The incredibly powerful Potara fusion of the Universe 6 Saiyans, Caulifla and Kale.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "caulifla",
    name: "Caulifla",
    anime: "Dragon Ball",
    role: "Saiyan",
    description: "A boisterous, battle-hungry Saiyan punk from Universe 6.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kale",
    name: "Kale",
    anime: "Dragon Ball",
    role: "Saiyan",
    description:
      "A timid Universe 6 Saiyan who harbors a chaotic, legendary berserker form.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hit",
    name: "Hit",
    anime: "Dragon Ball",
    role: "Assassin",
    description:
      "Universe 6's legendary assassin who employs lethal 'Time-Skip' techniques.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "bulma",
    name: "Bulma",
    anime: "Dragon Ball",
    role: "Support",
    description:
      "A brilliant scientist, heir to Capsule Corp, and the one who started Goku on his grand adventure.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "chi-chi",
    name: "Chi-Chi",
    anime: "Dragon Ball",
    role: "Support",
    description:
      "Goku's overprotective, strong-willed wife who strictly values academics over martial arts for her sons.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "videl",
    name: "Videl",
    anime: "Dragon Ball",
    role: "Support",
    description: "Mr. Satan's strong-willed daughter and Gohan's wife.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "master-roshi",
    name: "Master Roshi",
    anime: "Dragon Ball",
    role: "Mentor",
    description:
      "Goku's perverted but wise old martial arts master, inventor of the Kamehameha.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "mr-satan",
    name: "Mr. Satan (Hercule)",
    anime: "Dragon Ball",
    role: "Comedic",
    description:
      "Earth's boastful martial arts champion whose comedic bravado actually saves the universe multiple times.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "dabura",
    name: "Dabura",
    anime: "Dragon Ball",
    role: "Villain",
    description:
      "The King of the Demon Realm who is mind-controlled into serving Babidi.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ginyu",
    name: "Captain Ginyu",
    anime: "Dragon Ball",
    role: "Villain",
    description:
      "The flamboyant, posing leader of the Ginyu Force who can swap bodies with his opponents.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Bleach
  {
    id: "ichigo-kurosaki",
    name: "Ichigo Kurosaki",
    anime: "Bleach",
    role: "Protagonist",
    description:
      "A hot-headed high schooler who becomes a Substitute Soul Reaper to protect the living and the dead.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rukia-kuchiki",
    name: "Rukia Kuchiki",
    anime: "Bleach",
    role: "Shinigami",
    description:
      "The noble Soul Reaper who grants Ichigo her powers, wielding the most beautiful ice Zanpakuto in the Soul Society.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "orihime-inoue",
    name: "Orihime Inoue",
    anime: "Bleach",
    role: "Support",
    description:
      "Ichigo's gentle, eccentric friend possessing unique, god-like powers to reject phenomena.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "uryu-ishida",
    name: "Uryu Ishida",
    anime: "Bleach",
    role: "Quincy",
    description:
      "A proud, intelligent Quincy who starts as Ichigo's rival but becomes one of his most reliable allies.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yasutora-sado",
    name: "Yasutora Sado (Chad)",
    anime: "Bleach",
    role: "Support",
    description:
      "A quiet, towering teenager who uses his supernaturally armored arms to protect his friends.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Soul Society Captains & Lieutenants
  {
    id: "byakuya-kuchiki",
    name: "Byakuya Kuchiki",
    anime: "Bleach",
    role: "Captain",
    description:
      "The aristocratic, rule-abiding Captain of Squad 6 and Rukia's adoptive older brother.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kenpachi-zaraki",
    name: "Kenpachi Zaraki",
    anime: "Bleach",
    role: "Captain",
    description:
      "A terrifying, battle-crazed Captain who limits his own power just to enjoy fights longer.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "toshirō-hitsugaya",
    name: "Tōshirō Hitsugaya",
    anime: "Bleach",
    role: "Captain",
    description:
      "The youngest Captain in history, a serious prodigy wielding the strongest ice dragon Zanpakuto.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "soi-fon",
    name: "Soi Fon",
    anime: "Bleach",
    role: "Captain",
    description:
      "The stern, deadly commander of the Stealth Force who harbors a deep reverence for Yoruichi.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "mayuri-kurotsuchi",
    name: "Mayuri Kurotsuchi",
    anime: "Bleach",
    role: "Captain",
    description:
      "The mad scientist Captain of Squad 12 who views all beings, including himself, as experimental subjects.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "shunsui-kyoraku",
    name: "Shunsui Kyōraku",
    anime: "Bleach",
    role: "Captain Commander",
    description:
      "A laid-back, sake-drinking Captain who masks immense power and tactical ruthlessness behind a smile.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "jushiro-ukitake",
    name: "Jūshirō Ukitake",
    anime: "Bleach",
    role: "Captain",
    description:
      "A beloved, kindly Captain suffering from chronic illness, holding a deep connection to the Soul King.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "genryusai-yamamoto",
    name: "Genryūsai Yamamoto",
    anime: "Bleach",
    role: "Captain Commander",
    description:
      "The ancient, scar-covered founder of the Gotei 13 wielding the ultimate fire Zanpakuto.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "renji-abarai",
    name: "Renji Abarai",
    anime: "Bleach",
    role: "Lieutenant",
    description:
      "A fiery-tempered Lieutenant armed with a whip-sword who swore to surpass Byakuya.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rangiku-matsumoto",
    name: "Rangiku Matsumoto",
    anime: "Bleach",
    role: "Lieutenant",
    description:
      "Hitsugaya's beautiful, lazy, and surprisingly wise Lieutenant with ash-manipulation abilities.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ikki-ikkaku",
    name: "Ikkaku Madarame",
    anime: "Bleach",
    role: "Lieutenant",
    description:
      "A fight-loving bald Soul Reaper of Squad 11 who hides his Bankai to stay under Kenpachi's command.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yumichika-ayasegawa",
    name: "Yumichika Ayasegawa",
    anime: "Bleach",
    role: "Officer",
    description:
      "A vain Squad 11 officer who hides the true Kido-based nature of his Zanpakuto.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Villains & Espada
  {
    id: "aizen-sosuke",
    name: "Sosuke Aizen",
    anime: "Bleach",
    role: "Main Antagonist",
    description:
      "A dangerously charismatic and manipulative genius who betrayed the Soul Society to become a god.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "gin-ichimaru",
    name: "Gin Ichimaru",
    anime: "Bleach",
    role: "Antagonist",
    description:
      "A snake-like, perpetually smiling Shinigami who played a long game of betrayal for the sake of the woman he loved.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kaname-tosen",
    name: "Kaname Tosen",
    anime: "Bleach",
    role: "Antagonist",
    description:
      "A blind captain obsessed with his flawed idea of a 'path with the least bloodshed'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ulquiorra",
    name: "Ulquiorra Cifer",
    anime: "Bleach",
    role: "Espada",
    description:
      "The cold, nihilistic 4th Espada who seeks to understand the concept of a 'heart'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "grimmjow",
    name: "Grimmjow Jaegerjaquez",
    anime: "Bleach",
    role: "Espada",
    description:
      "The feral, destruction-loving 6th Espada who develops an intense rivalry with Ichigo.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "nelliel",
    name: "Nelliel Tu Odelschwanck",
    anime: "Bleach",
    role: "Espada",
    description:
      "A former Espada who takes the form of a child but returns to her powerful, centaur-like adult form to protect Ichigo.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "coyote-starrk",
    name: "Coyote Starrk",
    anime: "Bleach",
    role: "Espada",
    description:
      "The 1st Espada, a lonely, lazy gunslinger whose spirit split in two due to isolation.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tier-harribel",
    name: "Tier Harribel",
    anime: "Bleach",
    role: "Espada",
    description:
      "The 3rd Espada, a stoic woman with water manipulation powers who deeply cares for her subordinates.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "szayelaporro",
    name: "Szayelaporro Granz",
    anime: "Bleach",
    role: "Espada",
    description:
      "The sadistic, flamboyant scientist of the Espada who met a horrific end against Mayuri.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "aaroniero",
    name: "Aaroniero Arruruerie",
    anime: "Bleach",
    role: "Espada",
    description:
      "The 9th Espada who hides two floating heads in a jar and absorbed Kaien Shiba's powers.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "zommari",
    name: "Zommari Rureaux",
    anime: "Bleach",
    role: "Espada",
    description:
      "The 7th Espada who commands spatial control through his many eyes.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yammy",
    name: "Yammy Llargo",
    anime: "Bleach",
    role: "Espada",
    description:
      "The brutish 10th (and 0th) Espada whose strength grows endlessly with his rage.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "lilynette",
    name: "Lilynette Gingerbuck",
    anime: "Bleach",
    role: "Arrancar",
    description:
      "Starrk's energetic other half, who functions as his pistols when released.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tesra",
    name: "Tesra Lindocruz",
    anime: "Bleach",
    role: "Arrancar",
    description: "Nnoitra's fiercely loyal Fracción.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Sternritter
  {
    id: "yhwach",
    name: "Yhwach",
    anime: "Bleach",
    role: "Main Villain",
    description:
      "The almighty Father of the Quincies who seeks to collapse life and death into a single, fearless world.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "jugram-haschwalth",
    name: "Jugram Haschwalth",
    anime: "Bleach",
    role: "Sternritter",
    description:
      "Yhwach's composed, blonde right-hand man who commands 'The Balance'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "uriyu-ishida",
    name: "Uryu Ishida (TYBW)",
    anime: "Bleach",
    role: "Sternritter",
    description:
      "Ichigo's friend who seemingly defects to the Wandenreich to uncover the truth.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "as-nodt",
    name: "As Nodt",
    anime: "Bleach",
    role: "Sternritter",
    description:
      "A terrifying Quincy who wields 'The Fear' to emotionally break his opponents.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "bazz-b",
    name: "Bazz-B",
    anime: "Bleach",
    role: "Sternritter",
    description:
      "A hot-blooded, mohawked Quincy who commands 'The Heat' and holds a deep grudge against Jugram.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "candice",
    name: "Candice Catnipp",
    anime: "Bleach",
    role: "Sternritter",
    description:
      "A fiery-tempered Quincy utilizing lightning strikes via 'The Thunderbolt'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Royal Guard & Others
  {
    id: "ichibe-hyosube",
    name: "Ichibe Hyosube",
    anime: "Bleach",
    role: "Royal Guard",
    description:
      "The jovial but terrifying leader of the Royal Guard who controls the concept of 'Names' and 'Black'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ouetsu-nimaiya",
    name: "Oetsu Nimaiya",
    anime: "Bleach",
    role: "Royal Guard",
    description: "The eccentric, hip-hop loving creator of the Zanpakuto.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kisuke-urahara",
    name: "Kisuke Urahara",
    anime: "Bleach",
    role: "Mentor",
    description:
      "A brilliant, exiled scientist disguised as a humble candy shop owner who orchestrates the world's defense.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yoruichi-shihoin",
    name: "Yoruichi Shihoin",
    anime: "Bleach",
    role: "Warrior",
    description:
      "A masterful hand-to-hand combatant and former stealth commander who can transform into a black cat.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "isshin-kurosaki",
    name: "Isshin Kurosaki",
    anime: "Bleach",
    role: "Shinigami",
    description:
      "Ichigo's goofy father, secretly a powerful former Soul Reaper Captain.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ryuken-ishida",
    name: "Ryuken Ishida",
    anime: "Bleach",
    role: "Quincy",
    description:
      "Uryu's cold father who claims to hate Quincy traditions but retains immense power.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kon",
    name: "Kon",
    anime: "Bleach",
    role: "Comedic",
    description:
      "A perverted mod-soul inhabiting a stuffed lion who acts as comic relief.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // My Hero Academia
  {
    id: "izuku-midoriya",
    name: "Izuku Midoriya",
    anime: "My Hero Academia",
    role: "Protagonist",
    description:
      "A formerly Quirkless boy with a heroic heart who inherits One For All to become the world's greatest hero.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "katsuki-bakugo",
    name: "Katsuki Bakugo",
    anime: "My Hero Academia",
    role: "Rival",
    description:
      "Midoriya's explosive, fiercely competitive rival who demands absolute perfection from himself.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "shoto-todoroki",
    name: "Shoto Todoroki",
    anime: "My Hero Academia",
    role: "Hero",
    description:
      "A prodigy born with both ice and fire powers who must reconcile with his abusive upbringing.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ochaco-uraraka",
    name: "Ochaco Uraraka",
    anime: "My Hero Academia",
    role: "Student",
    description:
      "A kind-hearted girl with gravity-manipulating powers who wants to earn money to support her parents.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tenya-iida",
    name: "Tenya Iida",
    anime: "My Hero Academia",
    role: "Student",
    description:
      "The strict, rule-abiding class representative equipped with engine calves.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tsuyu-asui",
    name: "Tsuyu Asui",
    anime: "My Hero Academia",
    role: "Student",
    description:
      "A level-headed student with frog-like abilities and a deeply caring nature.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "eijiro-kirishima",
    name: "Eijiro Kirishima",
    anime: "My Hero Academia",
    role: "Student",
    description:
      "A 'manly' and dependable classmate with the ability to harden his skin like rock.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "denki-kaminari",
    name: "Denki Kaminari",
    anime: "My Hero Academia",
    role: "Student",
    description:
      "A friendly, electricity-wielding student whose brain short-circuits when he uses too much power.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "momo-yaoyorozu",
    name: "Momo Yaoyorozu",
    anime: "My Hero Academia",
    role: "Student",
    description:
      "A brilliant student capable of creating any non-living material from her body's lipids.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "fumikage-tokoyami",
    name: "Fumikage Tokoyami",
    anime: "My Hero Academia",
    role: "Student",
    description:
      "An edgy student who controls 'Dark Shadow', a sentient shadow beast that grows wild in darkness.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "mina-ashido",
    name: "Mina Ashido",
    anime: "My Hero Academia",
    role: "Student",
    description:
      "An energetic, athletic girl who secretes corrosive acid from her skin.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hanta-sero",
    name: "Hanta Sero",
    anime: "My Hero Academia",
    role: "Student",
    description:
      "A laid-back student whose elbows dispense incredibly strong, versatile tape.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kyoka-jiro",
    name: "Kyoka Jiro",
    anime: "My Hero Academia",
    role: "Student",
    description:
      "A punk-rock enthusiast whose earlobes act as headphone jacks to channel her heartbeat as destructive soundwaves.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rikido-sato",
    name: "Rikido Sato",
    anime: "My Hero Academia",
    role: "Student",
    description:
      "A burly baker who gains immense physical strength by consuming sugar.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "mezo-shoji",
    name: "Mezo Shoji",
    anime: "My Hero Academia",
    role: "Student",
    description:
      "A tall, masked student with duplicating tentacles that excel in tracking and rescue.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "minoru-mineta",
    name: "Minoru Mineta",
    anime: "My Hero Academia",
    role: "Student",
    description:
      "A short, highly perverted student who produces sticky purple balls from his head.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "koji-koda",
    name: "Koji Koda",
    anime: "My Hero Academia",
    role: "Student",
    description:
      "A painfully shy giant who can communicate with and command animals.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "toru-hagakure",
    name: "Toru Hagakure",
    anime: "My Hero Academia",
    role: "Student",
    description:
      "An invisible, relentlessly upbeat girl who utilizes light refraction in combat.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yuga-aoyama",
    name: "Yuga Aoyama",
    anime: "My Hero Academia",
    role: "Student",
    description:
      "A flamboyant student who fires a naval laser and holds a dark secret about his Quirk.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Teachers / Pro Heroes
  {
    id: "all-might",
    name: "All Might",
    anime: "My Hero Academia",
    role: "Symbol of Peace",
    description:
      "The endlessly smiling former Number One Hero who passes his power and legacy down to Midoriya.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "shota-aizawa",
    name: "Shota Aizawa (Eraser Head)",
    anime: "My Hero Academia",
    role: "Teacher",
    description:
      "The exhausted homeroom teacher of Class 1-A who can temporarily erase Quirks by looking at the user.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "present-mic",
    name: "Present Mic",
    anime: "My Hero Academia",
    role: "Teacher",
    description:
      "The loud, radio host-like English teacher with a voice capable of shattering eardrums.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "midnight",
    name: "Midnight",
    anime: "My Hero Academia",
    role: "Teacher",
    description:
      "The 'R-Rated Hero' whose Quirk puts people to sleep through an aroma exuded from her skin.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "mirio-togata",
    name: "Mirio Togata",
    anime: "My Hero Academia",
    role: "Big Three",
    description:
      "A wildly optimistic top student who turned a difficult 'Permeation' Quirk into unparalleled strength.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "nejire-hado",
    name: "Nejire Hado",
    anime: "My Hero Academia",
    role: "Big Three",
    description:
      "An overly curious third-year who converts her vitality into golden spiral blasts.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tamaki-amajiki",
    name: "Tamaki Amajiki",
    anime: "My Hero Academia",
    role: "Big Three",
    description:
      "A highly socially anxious powerhouse who manifests the traits of anything he eats.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "endeavor",
    name: "Endeavor",
    anime: "My Hero Academia",
    role: "Pro Hero",
    description:
      "The intensely driven Number One hero who struggles to atone for his abusive past as a father.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hawks",
    name: "Hawks",
    anime: "My Hero Academia",
    role: "Pro Hero",
    description:
      "The laid-back but hyper-competent Number Two hero who operates as a double agent.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "best-jeanist",
    name: "Best Jeanist",
    anime: "My Hero Academia",
    role: "Pro Hero",
    description:
      "A refined hero who manipulates fibers and insists on impeccable elegance at all times.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "edgeshot",
    name: "Edgeshot",
    anime: "My Hero Academia",
    role: "Pro Hero",
    description:
      "A ninja-like hero who can fold his body thinner than a single thread.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "mt-lady",
    name: "Mt. Lady",
    anime: "My Hero Academia",
    role: "Pro Hero",
    description: "A fame-seeking hero who grows to giant proportions.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "gran-torino",
    name: "Gran Torino",
    anime: "My Hero Academia",
    role: "Mentor",
    description:
      "A diminutive, jet-powered old man who taught both All Might and Midoriya.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Villains
  {
    id: "tomura-shigaraki",
    name: "Tomura Shigaraki",
    anime: "My Hero Academia",
    role: "Main Villain",
    description:
      "The successor to All For One, a deeply traumatized villain whose touch decays everything.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "all-for-one",
    name: "All For One",
    anime: "My Hero Academia",
    role: "Villain",
    description:
      "The ultimate evil mastermind who steals and hoards Quirks to rule from the shadows.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "dabi",
    name: "Dabi",
    anime: "My Hero Academia",
    role: "Villain",
    description:
      "A scarred, blue-flame wielding villain harboring a devastating grudge against Endeavor.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "himiko-toga",
    name: "Himiko Toga",
    anime: "My Hero Academia",
    role: "Villain",
    description:
      "A deranged schoolgirl whose twisted form of love involves stabbing her crushes and drinking their blood to transform into them.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "twice",
    name: "Twice",
    anime: "My Hero Academia",
    role: "Villain",
    description:
      "A mentally unstable but highly loyal villain capable of creating infinite clones of himself or his allies.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "mr-compress",
    name: "Mr. Compress",
    anime: "My Hero Academia",
    role: "Villain",
    description:
      "A showman villain who compresses people and objects into small marbles.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "spinner",
    name: "Spinner",
    anime: "My Hero Academia",
    role: "Villain",
    description:
      "A lizard-like Stain fanboy who becomes Shigaraki's most loyal follower.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "re-destro",
    name: "Re-Destro",
    anime: "My Hero Academia",
    role: "Villain",
    description:
      "The CEO of Detnerat and leader of the Meta Liberation Army, who converts his stress into brute power.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "gigantomachia",
    name: "Gigantomachia",
    anime: "My Hero Academia",
    role: "Villain",
    description:
      "All For One's monstrously massive and unwaveringly loyal bodyguard.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Hunter x Hunter
  {
    id: "gon-freecss",
    name: "Gon Freecss",
    anime: "Hunter x Hunter",
    role: "Protagonist",
    description:
      "An innocent but dangerously focused young boy who becomes a Hunter to find his absentee father.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "killua-zoldyck",
    name: "Killua Zoldyck",
    anime: "Hunter x Hunter",
    role: "Assassin",
    description:
      "A prodigy from a famous family of assassins who runs away to take the Hunter Exam and find a normal life.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kurapika",
    name: "Kurapika",
    anime: "Hunter x Hunter",
    role: "Hunter",
    description:
      "The last survivor of the Kurta Clan, seeking violent revenge against the Phantom Troupe for his people's Scarlet Eyes.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "leorio-paradinight",
    name: "Leorio Paradinight",
    anime: "Hunter x Hunter",
    role: "Hunter",
    description:
      "A seemingly greedy man whose true goal is becoming a doctor to treat the poor for free.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Zoldyck Family
  {
    id: "silva-zoldyck",
    name: "Silva Zoldyck",
    anime: "Hunter x Hunter",
    role: "Assassin",
    description:
      "Killua's imposing father and the current patriarch of the Zoldyck assassination business.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "zeno-zoldyck",
    name: "Zeno Zoldyck",
    anime: "Hunter x Hunter",
    role: "Assassin",
    description:
      "Killua's grandfather, a pragmatic old assassin who conjures deadly dragons made of aura.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "illumi-zoldyck",
    name: "Illumi Zoldyck",
    anime: "Hunter x Hunter",
    role: "Antagonist",
    description:
      "Killua's manipulative older brother who uses needles to alter appearances and control minds.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kalluto-zoldyck",
    name: "Kalluto Zoldyck",
    anime: "Hunter x Hunter",
    role: "Assassin",
    description:
      "Killua's younger brother who fights using paper manipulation and joins the Phantom Troupe.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "alluka-zoldyck",
    name: "Alluka Zoldyck",
    anime: "Hunter x Hunter",
    role: "Support",
    description:
      "Killua's sibling who houses 'Nanika', an entity capable of granting any wish at a terrible cost.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Phantom Troupe
  {
    id: "chrollo-lucilfer",
    name: "Chrollo Lucilfer",
    anime: "Hunter x Hunter",
    role: "Main Antagonist",
    description:
      "The calm, philosophical leader of the Phantom Troupe who can steal other people's Nen abilities.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hisoka-morow",
    name: "Hisoka Morow",
    anime: "Hunter x Hunter",
    role: "Anti-Hero",
    description:
      "A murderous, unpredictable magician obsessed with finding strong opponents to kill.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "feitan",
    name: "Feitan Portor",
    anime: "Hunter x Hunter",
    role: "Phantom Troupe",
    description:
      "The Troupe's sadistic interrogator who summons a miniature sun when angered.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "phinks",
    name: "Phinks Magcub",
    anime: "Hunter x Hunter",
    role: "Phantom Troupe",
    description:
      "A hot-headed Troupe member whose punches grow exponentially stronger the more he winds up his arm.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "machi",
    name: "Machi Komacine",
    anime: "Hunter x Hunter",
    role: "Phantom Troupe",
    description:
      "A cold-hearted Troupe member who uses Nen threads for both sewing severed limbs and fighting.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "nobunaga",
    name: "Nobunaga Hazama",
    anime: "Hunter x Hunter",
    role: "Phantom Troupe",
    description:
      "A loyal, katana-wielding Troupe member who develops a surprising soft spot for Gon.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "shizuku",
    name: "Shizuku Murasaki",
    anime: "Hunter x Hunter",
    role: "Phantom Troupe",
    description:
      "A forgetful girl whose vacuum cleaner, Blinky, can inhale anything except living creatures.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "uvogin",
    name: "Uvogin",
    anime: "Hunter x Hunter",
    role: "Phantom Troupe",
    description:
      "The physically strongest Troupe member who relishes in absolute, brute-force destruction.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "pakunoda",
    name: "Pakunoda",
    anime: "Hunter x Hunter",
    role: "Phantom Troupe",
    description:
      "The Troupe's specialist who reads memories upon touch and shoots them into others' minds.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Hunter Association & Others
  {
    id: "isaac-netero",
    name: "Isaac Netero",
    anime: "Hunter x Hunter",
    role: "Chairman",
    description:
      "The eccentric Chairman of the Hunter Association and the ultimate master of martial arts.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "pariston-hill",
    name: "Pariston Hill",
    anime: "Hunter x Hunter",
    role: "Vice Chairman",
    description:
      "A constantly smiling, utterly unpredictable troll who loves to complicate things for his own amusement.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ging-freecss",
    name: "Ging Freecss",
    anime: "Hunter x Hunter",
    role: "Hunter",
    description:
      "Gon's genius, deadbeat father and one of the world's top Hunters.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "biscuit-krueger",
    name: "Biscuit Krueger",
    anime: "Hunter x Hunter",
    role: "Mentor",
    description:
      "A 57-year-old muscle-bound master who masquerades as a little girl, becoming Gon and Killua's Nen teacher.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "morel",
    name: "Morel Mackernasey",
    anime: "Hunter x Hunter",
    role: "Hunter",
    description:
      "An experienced Sea Hunter who uses a giant pipe to manipulate smoke into soldiers and tools.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "knov",
    name: "Knov",
    anime: "Hunter x Hunter",
    role: "Hunter",
    description:
      "A tightly-wound Hunter who creates pocket dimensions, whose spirit breaks upon witnessing the Chimera Ants' aura.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kite",
    name: "Kite",
    anime: "Hunter x Hunter",
    role: "Hunter",
    description:
      "Ging's pupil and a researcher whose tragic death pushes Gon to the breaking point.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Chimera Ant Arc
  {
    id: "meruem",
    name: "Meruem",
    anime: "Hunter x Hunter",
    role: "Main Antagonist",
    description:
      "The terrifying Chimera Ant King who begins as a cruel tyrant but discovers his humanity through a blind board game player.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "neferpitou",
    name: "Neferpitou",
    anime: "Hunter x Hunter",
    role: "Royal Guard",
    description:
      "A cat-like Royal Guard whose overwhelming malice and surgical abilities make them a living nightmare.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "shaiapouf",
    name: "Shaiapouf",
    anime: "Hunter x Hunter",
    role: "Royal Guard",
    description:
      "A butterfly-like Royal Guard who becomes fanatically obsessed with preserving Meruem's 'ideal' ant nature.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "menthuthuyoupi",
    name: "Menthuthuyoupi",
    anime: "Hunter x Hunter",
    role: "Royal Guard",
    description:
      "A brute-force Royal Guard who learns honor and respect for his enemies amidst battle.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "komugi",
    name: "Komugi",
    anime: "Hunter x Hunter",
    role: "Support",
    description:
      "A blind, snot-nosed Gungi champion whose pure heart completely changes the Chimera Ant King.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // HxH Others
  {
    id: "hanzo",
    name: "Hanzo",
    anime: "Hunter x Hunter",
    role: "Hunter",
    description:
      "A highly talkative ninja who breaks Gon's arm but gives up during the Hunter Exam when Gon refuses to quit.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "wing",
    name: "Wing",
    anime: "Hunter x Hunter",
    role: "Mentor",
    description:
      "A messy but capable master who teaches Gon and Killua the basics of Nen at Heaven's Arena.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "zushi",
    name: "Zushi",
    anime: "Hunter x Hunter",
    role: "Student",
    description: "Wing's earnest student who constantly shouts 'Osu!'",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "razor",
    name: "Razor",
    anime: "Hunter x Hunter",
    role: "Game Master",
    description:
      "A former criminal turned Game Master of Greed Island who tests Gon in a lethal game of dodgeball.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tserriednich",
    name: "Tserriednich Hui Guo Rou",
    anime: "Hunter x Hunter",
    role: "Antagonist",
    description:
      "A horrificly psychopathic prince whose terrifying Nen genius poses a major threat on the Black Whale.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Tokyo Ghoul
  {
    id: "ken-kaneki",
    name: "Ken Kaneki",
    anime: "Tokyo Ghoul",
    role: "Protagonist",
    description:
      "A bookish college student forced into a world of bloodshed after being turned into a half-ghoul.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "touka-kirishima",
    name: "Touka Kirishima",
    anime: "Tokyo Ghoul",
    role: "Ghoul",
    description:
      "A tough, tsundere ghoul waitress at Anteiku who acts as Kaneki's harsh but caring guide.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hideyoshi-nagachika",
    name: "Hideyoshi Nagachika",
    anime: "Tokyo Ghoul",
    role: "Friend",
    description:
      "Kaneki's incredibly perceptive best friend who goes to great lengths to secretly protect him.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Anteiku & Aogiri
  {
    id: "yoshimura",
    name: "Yoshimura",
    anime: "Tokyo Ghoul",
    role: "Anteiku Manager",
    description:
      "The kindly manager of Anteiku and the fearsome 'Non-Killing Owl'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yomo-renji",
    name: "Renji Yomo",
    anime: "Tokyo Ghoul",
    role: "Ghoul",
    description:
      "A stoic ghoul who acts as the muscle and scavenger for Anteiku.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hinami-fueguchi",
    name: "Hinami Fueguchi",
    anime: "Tokyo Ghoul",
    role: "Ghoul",
    description:
      "A sweet young ghoul orphan possessing extremely powerful, dual-type kagune.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "koma-enji",
    name: "Enji Koma",
    anime: "Tokyo Ghoul",
    role: "Ghoul",
    description:
      "Anteiku's affable barista, formerly the fearsome gang leader 'Devil Ape'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "irimi-kaya",
    name: "Kaya Irimi",
    anime: "Tokyo Ghoul",
    role: "Ghoul",
    description:
      "Anteiku's sharp-tongued waitress, formerly the leader of the 'Black Dobers'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "eto-yoshimura",
    name: "Eto Yoshimura",
    anime: "Tokyo Ghoul",
    role: "Main Antagonist",
    description:
      "A famous horror author who is secretly the One-Eyed Owl and founder of Aogiri Tree.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tatara",
    name: "Tatara",
    anime: "Tokyo Ghoul",
    role: "Aogiri Leader",
    description:
      "The cold, calculating secondary leader of Aogiri Tree from China.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ayato-kirishima",
    name: "Ayato Kirishima",
    anime: "Tokyo Ghoul",
    role: "Ghoul",
    description:
      "Touka's arrogant younger brother who joins Aogiri to become stronger.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "noro",
    name: "Noro",
    anime: "Tokyo Ghoul",
    role: "Ghoul",
    description:
      "A silent, mask-wearing powerhouse of Aogiri Tree with absurd regeneration abilities.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // CCG & Quinx
  {
    id: "koutarou-amon",
    name: "Koutarou Amon",
    anime: "Tokyo Ghoul",
    role: "Investigator",
    description:
      "An upright, justice-driven CCG investigator who begins to question the morality of eradicating all ghouls.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "akira-mado",
    name: "Akira Mado",
    anime: "Tokyo Ghoul",
    role: "Investigator",
    description:
      "A logical, emotionally suppressed investigator seeking revenge for her father's death.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "juuzou-suzuya",
    name: "Juuzou Suzuya",
    anime: "Tokyo Ghoul",
    role: "Investigator",
    description:
      "An unhinged but brilliant CCG investigator who was raised as a human pet for a ghoul.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kishou-arima",
    name: "Kishou Arima",
    anime: "Tokyo Ghoul",
    role: "CCG Reaper",
    description:
      "The CCG's undisputed strongest investigator who has never lost a fight.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kureo-mado",
    name: "Kureo Mado",
    anime: "Tokyo Ghoul",
    role: "Investigator",
    description:
      "A crazed, eccentric investigator obsessed with collecting ghoul kagune to use as weapons.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "haise-sasaki",
    name: "Haise Sasaki",
    anime: "Tokyo Ghoul",
    role: "Protagonist (Re)",
    description:
      "An amnesiac CCG investigator who serves as the gentle mentor to the Quinx squad.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "urie-kuki",
    name: "Kuki Urie",
    anime: "Tokyo Ghoul",
    role: "Quinx",
    description:
      "An ambitious, status-obsessed Quinx who slowly learns to value his teammates.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "mutsuki-tooru",
    name: "Tooru Mutsuki",
    anime: "Tokyo Ghoul",
    role: "Quinx",
    description:
      "A timid Quinx squad member hiding severe trauma and a dangerously unhinged dark side.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "saiko-yonabayashi",
    name: "Saiko Yonabayashi",
    anime: "Tokyo Ghoul",
    role: "Quinx",
    description:
      "A lazy, video-game obsessed Quinx who boasts the highest aptitude for ghoul abilities.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ginshi-shirazu",
    name: "Ginshi Shirazu",
    anime: "Tokyo Ghoul",
    role: "Quinx",
    description:
      "A delinquent-looking Quinx with a heart of gold, fighting to afford his sister's medical bills.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Other Ghouls
  {
    id: "rize-kamishiro",
    name: "Rize Kamishiro",
    anime: "Tokyo Ghoul",
    role: "Ghoul",
    description:
      "The beautiful 'Binge Eater' whose organs are transplanted into Kaneki.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yakumo-oomori",
    name: "Yakumo Oomori (Jason)",
    anime: "Tokyo Ghoul",
    role: "Villain",
    description:
      "A massive, torture-obsessed ghoul who severely traumatizes Kaneki.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "uta",
    name: "Uta",
    anime: "Tokyo Ghoul",
    role: "Ghoul",
    description: "A tattooed, pierced mask-maker with mysterious allegiances.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "romi-hori",
    name: "Roma Hoito",
    anime: "Tokyo Ghoul",
    role: "Ghoul",
    description:
      "A clumsy Anteiku waitress who secretly belongs to the chaotic Clowns.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "donato-porpora",
    name: "Donato Porpora",
    anime: "Tokyo Ghoul",
    role: "Ghoul",
    description:
      "A Russian ghoul who posed as a Catholic priest to feast on the orphans in his care.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "furuta-nimura",
    name: "Nimura Furuta",
    anime: "Tokyo Ghoul",
    role: "Final Antagonist",
    description:
      "A whimsical, deeply cynical mastermind pulling the strings of both the CCG and the ghoul world.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Vinland Saga
  {
    id: "thorfinn",
    name: "Thorfinn",
    anime: "Vinland Saga",
    role: "Protagonist",
    description:
      "A bitter boy consumed by revenge who eventually dedicates his life to becoming a true warrior of peace.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "thors",
    name: "Thors",
    anime: "Vinland Saga",
    role: "Warrior",
    description:
      "Known as the 'Troll of Jom', a legendary Viking who renounced violence to raise his family in peace.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "askeladd",
    name: "Askeladd",
    anime: "Vinland Saga",
    role: "Anti-Hero",
    description:
      "A cunning, pragmatic mercenary leader who killed Thorfinn's father and became a twisted father figure to the boy.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "canute",
    name: "Canute",
    anime: "Vinland Saga",
    role: "King",
    description:
      "A timid prince who undergoes a radical transformation to become a ruthless king determined to create paradise on Earth.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "einar",
    name: "Einar",
    anime: "Vinland Saga",
    role: "Farmer",
    description:
      "A captured farmer whose kindness and brotherhood help save Thorfinn from his despair.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Vikings & Royals
  {
    id: "bjorn",
    name: "Bjorn",
    anime: "Vinland Saga",
    role: "Warrior",
    description:
      "Askeladd's most loyal lieutenant, a berserker who relies on mushrooms for a combat high.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "thorkell",
    name: "Thorkell",
    anime: "Vinland Saga",
    role: "Warrior",
    description:
      "A gargantuan, jovial warrior who lives only for the thrill of battle.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "snake",
    name: "Snake",
    anime: "Vinland Saga",
    role: "Warrior",
    description:
      "The lazy but surprisingly honorable head of Ketil's farm guards.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "olmar",
    name: "Olmar",
    anime: "Vinland Saga",
    role: "Farmer's Son",
    description:
      "Ketil's foolish son who dreams of bloody glory until the reality of war shatters him.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ketil",
    name: "Ketil",
    anime: "Vinland Saga",
    role: "Landowner",
    description:
      "A wealthy farmer who presents himself as a kind master but breaks under the pressures of war.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "king-sweyn",
    name: "King Sweyn",
    anime: "Vinland Saga",
    role: "King",
    description:
      "The aging, paranoid King of Denmark who plots to have his own son Canute killed.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "harald",
    name: "Harald",
    anime: "Vinland Saga",
    role: "Prince",
    description:
      "Canute's older brother and King of Denmark before his untimely passing.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Supporting (Vinland Saga)
  {
    id: "leif-erikson",
    name: "Leif Erikson",
    anime: "Vinland Saga",
    role: "Explorer",
    description:
      "An eccentric explorer who tells tales of a peaceful land called Vinland.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ari",
    name: "Ari",
    anime: "Vinland Saga",
    role: "Villager",
    description: "A youth from Thorfinn's village in Iceland.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "helga",
    name: "Helga",
    anime: "Vinland Saga",
    role: "Mother",
    description: "Thorfinn's gentle mother who waits patiently in Iceland.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ylva",
    name: "Ylva",
    anime: "Vinland Saga",
    role: "Sister",
    description: "Thorfinn's hardworking, emotionally guarded older sister.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ragnar",
    name: "Ragnar",
    anime: "Vinland Saga",
    role: "Guardian",
    description: "Canute's overprotective retainer who raised him like a son.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "garm",
    name: "Garm",
    anime: "Vinland Saga",
    role: "Warrior",
    description:
      "A psychopathic spear-wielding prodigy who views killing purely as a game.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hild",
    name: "Hild",
    anime: "Vinland Saga",
    role: "Hunter",
    description:
      "An ingenious hunter holding an intense grudge against Thorfinn for killing her father.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "bug-eyes",
    name: "Bug-Eyes",
    anime: "Vinland Saga",
    role: "Merchant",
    description: "A cowardly lookalike of Thorfinn whom Leif adopted.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "halfdan",
    name: "Halfdan",
    anime: "Vinland Saga",
    role: "Merchant",
    description: "A ruthless, chain-wielding loan shark operating in Iceland.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "floki",
    name: "Floki",
    anime: "Vinland Saga",
    role: "Commander",
    description:
      "A treacherous Jomsviking commander who orchestrated the assassination of Thors.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "atli",
    name: "Atli",
    anime: "Vinland Saga",
    role: "Warrior",
    description:
      "One of Askeladd's men who is allowed to leave and return to a peaceful life.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "torgrim",
    name: "Torgrim",
    anime: "Vinland Saga",
    role: "Warrior",
    description:
      "One of Askeladd's men who betrays him and ends up traumatized by Thorkell.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "wulf",
    name: "Wulf",
    anime: "Vinland Saga",
    role: "Warrior",
    description: "Canute's loyal and highly competent captain of the guard.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "cordelia",
    name: "Cordelia",
    anime: "Vinland Saga",
    role: "Warrior",
    description: "Halfdan's gentle but physically imposing child.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sigurd",
    name: "Sigurd",
    anime: "Vinland Saga",
    role: "Warrior",
    description:
      "Halfdan's son who desperately seeks his father's approval but ultimately chooses his own path.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Chainsaw Man
  {
    id: "denji",
    name: "Denji",
    anime: "Chainsaw Man",
    role: "Protagonist",
    description:
      "A poor, uneducated teen who merges with his devil dog to become Chainsaw Man, fighting for basic dreams like good food and a girlfriend.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "pochita",
    name: "Pochita",
    anime: "Chainsaw Man",
    role: "Chainsaw Devil",
    description:
      "Denji's adorable chainsaw-dog and the terrifying 'Hero of Hell' whom all devils fear.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "makima",
    name: "Makima",
    anime: "Chainsaw Man",
    role: "Control Devil",
    description:
      "A mysterious, alluring high-ranking Devil Hunter who views humans as dogs to be controlled.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "power",
    name: "Power",
    anime: "Chainsaw Man",
    role: "Blood Devil",
    description:
      "A narcissistic, unhygienic Blood Fiend who becomes Denji's chaotic adopted sister.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "aki-hayakawa",
    name: "Aki Hayakawa",
    anime: "Chainsaw Man",
    role: "Devil Hunter",
    description:
      "A serious, heavily burdened Devil Hunter who seeks revenge on the Gun Devil.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Public Safety
  {
    id: "himeno",
    name: "Himeno",
    anime: "Chainsaw Man",
    role: "Devil Hunter",
    description:
      "A one-eyed, chain-smoking senior hunter who relies on alcohol to cope with the deaths of her partners.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kobeni",
    name: "Kobeni Higashiyama",
    anime: "Chainsaw Man",
    role: "Devil Hunter",
    description:
      "A cowardly, perpetually stressed hunter who possesses shockingly high combat skills when backed into a corner.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kishibe",
    name: "Kishibe",
    anime: "Chainsaw Man",
    role: "Mentor",
    description:
      "A grizzled, alcoholic master hunter who claims the best Devil Hunters have a few screws loose.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "angel-devil",
    name: "Angel Devil",
    anime: "Chainsaw Man",
    role: "Devil",
    description:
      "A lazy devil who hates fighting but possesses the power to drain the lifespan of anyone he touches.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "beam",
    name: "Beam",
    anime: "Chainsaw Man",
    role: "Shark Fiend",
    description:
      "A highly energetic Shark Fiend who absolutely worships Chainsaw Man.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "violence-fiend",
    name: "Violence Fiend",
    anime: "Chainsaw Man",
    role: "Fiend",
    description:
      "A surprisingly polite fiend whose immense strength is suppressed by a plague doctor mask.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "prinz",
    name: "Prinz",
    anime: "Chainsaw Man",
    role: "Spider Devil",
    description:
      "A Spider Devil in human form who acts as a loyal servant to Makima.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Devils & Hybrids
  {
    id: "gun-devil",
    name: "Gun Devil",
    anime: "Chainsaw Man",
    role: "Antagonist",
    description:
      "A catastrophic devil born from the fear of guns, responsible for killing millions worldwide in seconds.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "darkness-devil",
    name: "Darkness Devil",
    anime: "Chainsaw Man",
    role: "Primal Devil",
    description:
      "A terrifying Primal Fear devil residing in Hell who has never experienced death.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "future-devil",
    name: "Future Devil",
    anime: "Chainsaw Man",
    role: "Devil",
    description:
      "An eccentric devil who lives in Aki's eye, shouting 'The future rules!'",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "curse-devil",
    name: "Curse Devil",
    anime: "Chainsaw Man",
    role: "Devil",
    description:
      "A brutal devil that crushes enemies after the user stabs them with a nail three times.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "fox-devil",
    name: "Fox Devil",
    anime: "Chainsaw Man",
    role: "Devil",
    description:
      "A vain devil that allows handsome hunters to summon its head to bite opponents.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "katana-man",
    name: "Katana Man",
    anime: "Chainsaw Man",
    role: "Hybrid",
    description:
      "A yakuza grandson turned Katana Hybrid who seeks revenge on Denji for killing his grandfather.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "reze",
    name: "Reze",
    anime: "Chainsaw Man",
    role: "Bomb Devil Hybrid",
    description:
      "A sweet cafe worker who is secretly a ruthless Soviet spy and the explosive Bomb Hybrid.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "quanxi",
    name: "Quanxi",
    anime: "Chainsaw Man",
    role: "Crossbow Hybrid",
    description:
      "A legendary Chinese assassin and Crossbow Hybrid who travels with a harem of fiend girlfriends.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sword-man",
    name: "Sword Man",
    anime: "Chainsaw Man",
    role: "Hybrid",
    description: "One of the Weapon Hybrids serving under Makima's control.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "whip-hybrid",
    name: "Whip Hybrid",
    anime: "Chainsaw Man",
    role: "Hybrid",
    description:
      "A surprisingly old Weapon Hybrid who acts like a playful teenager.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "spear-hybrid",
    name: "Spear Hybrid",
    anime: "Chainsaw Man",
    role: "Hybrid",
    description: "A chain-smoking Weapon Hybrid controlled by Makima.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "santa-claus",
    name: "Santa Claus",
    anime: "Chainsaw Man",
    role: "Antagonist",
    description:
      "A master assassin contracted with the Doll Devil who can turn people into mindless puppets.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tolka",
    name: "Tolka",
    anime: "Chainsaw Man",
    role: "Doll",
    description:
      "Santa Claus's naive pupil, who is unknowingly turned into a perfect doll.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "nayuta",
    name: "Nayuta",
    anime: "Chainsaw Man",
    role: "Control Devil",
    description:
      "The young reincarnation of the Control Devil, whom Denji raises to prevent another Makima.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "fami",
    name: "Fami",
    anime: "Chainsaw Man",
    role: "Famine Devil",
    description:
      "The perpetually hungry Famine Devil and one of the Four Horsemen.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yoshida",
    name: "Hirofumi Yoshida",
    anime: "Chainsaw Man",
    role: "Devil Hunter",
    description:
      "A highly skilled, enigmatic high school hunter contracted with the Octopus Devil.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "asa-mitaka",
    name: "Asa Mitaka",
    anime: "Chainsaw Man",
    role: "War Devil Host",
    description:
      "A socially awkward high school girl who shares her body with Yoru, the War Devil.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yuko",
    name: "Yuko",
    anime: "Chainsaw Man",
    role: "Justice Devil Host",
    description:
      "Asa's cheerful friend who takes extreme, twisted measures to enact 'justice'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Spy x Family
  {
    id: "loid-forger",
    name: "Loid Forger",
    anime: "Spy x Family",
    role: "Spy (Twilight)",
    description:
      "A master spy known as Twilight who creates a fake family for a mission, but slowly learns to genuinely care for them.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yor-forger",
    name: "Yor Forger",
    anime: "Spy x Family",
    role: "Assassin (Thorn Princess)",
    description:
      "A sweet but socially awkward clerk who is secretly the deadly assassin known as the Thorn Princess.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "anya-forger",
    name: "Anya Forger",
    anime: "Spy x Family",
    role: "Telepath",
    description:
      "An adorable telepathic orphan who knows her parents' secrets and actively works to keep her found family together.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "bond-forger",
    name: "Bond Forger",
    anime: "Spy x Family",
    role: "Precognitive Dog",
    description:
      "A massive, fluffy dog subjected to experiments that gave him the ability to see the future.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "handler",
    name: "Sylvia Sherwood",
    anime: "Spy x Family",
    role: "WISE Handler",
    description:
      "Loid's strict handler at WISE who despises war due to her own tragic past.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "franky",
    name: "Franky Franklin",
    anime: "Spy x Family",
    role: "Informant",
    description:
      "Loid's frizzy-haired informant and gadget maker who is perpetually unlucky in love.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "nightfall",
    name: "Fiona Frost",
    anime: "Spy x Family",
    role: "Spy (Nightfall)",
    description:
      "Loid's stoic protégé who secretly harbors an intense, obsessive love for him.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "shopkeeper",
    name: "Shopkeeper",
    anime: "Spy x Family",
    role: "Garden Leader",
    description:
      "The calm but terrifying leader of the Garden assassin organization.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "matthew",
    name: "Matthew McMahon",
    anime: "Spy x Family",
    role: "Assassin",
    description:
      "A seemingly normal city hall director who acts as Yor's lethal backup in the Garden.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "damian-desmond",
    name: "Damian Desmond",
    anime: "Spy x Family",
    role: "Eden Student",
    description:
      "Donovan's arrogant son who develops a massive, unacknowledged crush on Anya.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "donovan-desmond",
    name: "Donovan Desmond",
    anime: "Spy x Family",
    role: "Political Leader",
    description:
      "The elusive, paranoid target of Operation Strix whose actions could trigger a war.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "melinda-desmond",
    name: "Melinda Desmond",
    anime: "Spy x Family",
    role: "Mother",
    description:
      "Damian's mother, possessing a highly complex and unsettling relationship with her family.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "becky-blackbell",
    name: "Becky Blackbell",
    anime: "Spy x Family",
    role: "Student",
    description:
      "Anya's wealthy best friend who is hopelessly infatuated with Loid Forger.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "henderson",
    name: "Henry Henderson",
    anime: "Spy x Family",
    role: "Housemaster",
    description:
      "An elegant Eden Academy housemaster who values 'Elegance' above all else.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "emile",
    name: "Emile Elman",
    anime: "Spy x Family",
    role: "Student",
    description: "One of Damian's loyal lackeys.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ewen",
    name: "Ewen Egeburg",
    anime: "Spy x Family",
    role: "Student",
    description: "Damian's other loyal friend and follower.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yuri-briar",
    name: "Yuri Briar",
    anime: "Spy x Family",
    role: "SSS Officer",
    description:
      "Yor's younger brother, a ruthless Secret Police officer who has a severe sister complex.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "camilla",
    name: "Camilla",
    anime: "Spy x Family",
    role: "Coworker",
    description:
      "Yor's snobby coworker who occasionally shows a softer, helpful side.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "millie",
    name: "Millie",
    anime: "Spy x Family",
    role: "Coworker",
    description: "A blunt and somewhat airheaded coworker of Yor.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "dominic",
    name: "Dominic",
    anime: "Spy x Family",
    role: "Chef",
    description: "Camilla's boyfriend who is friendly with Yuri.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "george-glooman",
    name: "George Glooman",
    anime: "Spy x Family",
    role: "Student",
    description:
      "A dramatic student who attempted to get Damian expelled believing his family company was ruined.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "daybreak",
    name: "Daybreak",
    anime: "Spy x Family",
    role: "Spy",
    description:
      "A wildly incompetent spy who considers himself Twilight's rival.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "keith-kepler",
    name: "Keith Kepler",
    anime: "Spy x Family",
    role: "Terrorist Leader",
    description:
      "A terrorist who attempted to use bomb-strapped dogs to assassinate an official.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Classroom of the Elite
  {
    id: "ayanokoji-kiyotaka",
    name: "Kiyotaka Ayanokoji",
    anime: "Classroom of the Elite",
    role: "Protagonist",
    description:
      "An incredibly brilliant, apathetic mastermind from the White Room who manipulates everyone from the shadows.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "horikita-suzune",
    name: "Suzune Horikita",
    anime: "Classroom of the Elite",
    role: "Strategist",
    description:
      "A solitary, intelligent girl determined to reach Class A to prove herself to her brother.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "karuizawa-kei",
    name: "Kei Karuizawa",
    anime: "Classroom of the Elite",
    role: "Support",
    description:
      "A seemingly popular girl who hides deep bullying trauma, becoming Ayanokoji's most loyal pawn.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hirata-yosuke",
    name: "Yosuke Hirata",
    anime: "Classroom of the Elite",
    role: "Leader",
    description:
      "The peace-keeping 'nice guy' of Class D who harbors a dark past of failing to stop bullying.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "koenji-rokusuke",
    name: "Rokusuke Koenji",
    anime: "Classroom of the Elite",
    role: "Wildcard",
    description:
      "A narcissistic, physically and intellectually gifted student who refuses to cooperate with anyone.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sudo-ken",
    name: "Ken Sudo",
    anime: "Classroom of the Elite",
    role: "Athlete",
    description:
      "A hot-headed basketball star who struggles academically but matures under Horikita's guidance.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "airi-sakura",
    name: "Airi Sakura",
    anime: "Classroom of the Elite",
    role: "Support",
    description:
      "A painfully shy girl who secretly models online, holding a deep crush on Ayanokoji.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ike-kanji",
    name: "Kanji Ike",
    anime: "Classroom of the Elite",
    role: "Student",
    description:
      "A boisterous, academically poor student whose outdoor survival skills proved useful on the island.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yamauchi-haruki",
    name: "Haruki Yamauchi",
    anime: "Classroom of the Elite",
    role: "Student",
    description:
      "A gullible student who is easily manipulated into betraying his own class.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ryuen-kakeru",
    name: "Kakeru Ryuen",
    anime: "Classroom of the Elite",
    role: "Antagonist",
    description:
      "The tyrannical leader of Class C who uses fear and underhanded tactics to achieve his goals.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ibuki-mio",
    name: "Mio Ibuki",
    anime: "Classroom of the Elite",
    role: "Fighter",
    description:
      "A solitary martial artist in Class C who frequently acts as Ryuen's spy or enforcer.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ishizaki-daichi",
    name: "Daichi Ishizaki",
    anime: "Classroom of the Elite",
    role: "Student",
    description:
      "A former delinquent who becomes a loyal subordinate to Ryuen.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "albert-yamada",
    name: "Albert Yamada",
    anime: "Classroom of the Elite",
    role: "Enforcer",
    description:
      "A massive, silent student who acts as Ryuen's primary physical muscle.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ichinose-honami",
    name: "Honami Ichinose",
    anime: "Classroom of the Elite",
    role: "Leader",
    description:
      "The universally loved, incredibly kind leader of Class B who harbors a secret-stealing past.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "shibata-so",
    name: "So Shibata",
    anime: "Classroom of the Elite",
    role: "Athlete",
    description: "An outgoing and athletic pillar of Class B.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kanzaki-ryoji",
    name: "Ryoji Kanzaki",
    anime: "Classroom of the Elite",
    role: "Strategist",
    description:
      "Ichinose's right-hand man, an observant student who believes Class B must become more ruthless.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sakayanagi-arisu",
    name: "Arisu Sakayanagi",
    anime: "Classroom of the Elite",
    role: "Genius Leader",
    description:
      "The smug, physically disabled genius leader of Class A who knows about Ayanokoji's White Room past.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "katsuragi-kohei",
    name: "Kohei Katsuragi",
    anime: "Classroom of the Elite",
    role: "Strategist",
    description:
      "A conservative, defensive tactician in Class A who loses a power struggle to Sakayanagi.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "horikita-manabu",
    name: "Manabu Horikita",
    anime: "Classroom of the Elite",
    role: "Student Council President",
    description:
      "Suzune's strict older brother and the highly respected Student Council President.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "nagumo-miyabi",
    name: "Miyabi Nagumo",
    anime: "Classroom of the Elite",
    role: "President (Successor)",
    description:
      "The charismatic but controlling successor to the Student Council who turns the school into a pure meritocracy.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kiriyama-ikuto",
    name: "Ikuto Kiriyama",
    anime: "Classroom of the Elite",
    role: "Vice President",
    description: "A Vice President who quietly plots against Nagumo.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "chabashira-sae",
    name: "Sae Chabashira",
    anime: "Classroom of the Elite",
    role: "Class D Teacher",
    description:
      "The cold homeroom teacher of Class D who blackmails Ayanokoji into helping the class.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hoshinomiya-chie",
    name: "Chie Hoshinomiya",
    anime: "Classroom of the Elite",
    role: "Class B Teacher",
    description:
      "The flirtatious Class B teacher who holds a deep-seated rivalry with Chabashira.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sakagami",
    name: "Sakagami",
    anime: "Classroom of the Elite",
    role: "Class C Teacher",
    description:
      "The pragmatic teacher of Class C who supports Ryuen's methods.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "mashima",
    name: "Mashima",
    anime: "Classroom of the Elite",
    role: "Class A Teacher",
    description: "The strict, fair teacher of Class A.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ayanokoji-atsoumi",
    name: "Atsuomi Ayanokoji",
    anime: "Classroom of the Elite",
    role: "White Room Founder",
    description:
      "Kiyotaka's ruthless father who demands his masterpiece return to the White Room.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yagami-takuya",
    name: "Takuya Yagami",
    anime: "Classroom of the Elite",
    role: "White Room Student",
    description: "An arrogant White Room enforcer sent to expel Ayanokoji.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "amasawa-ichika",
    name: "Ichika Amasawa",
    anime: "Classroom of the Elite",
    role: "White Room Student",
    description:
      "A mischievous White Room student who idolizes Ayanokoji rather than hating him.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "nanase-tsubasa",
    name: "Tsubasa Nanase",
    anime: "Classroom of the Elite",
    role: "Student",
    description:
      "A first-year student carrying a complex vengeance toward Ayanokoji.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kiryuin-fuuka",
    name: "Fuuka Kiryuin",
    anime: "Classroom of the Elite",
    role: "Student Council",
    description:
      "An eccentric upperclassman who possesses Ayanokoji-level physical and academic stats.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Solo Leveling
  {
    id: "sung-jinwoo",
    name: "Sung Jin-Woo",
    anime: "Solo Leveling",
    role: "Protagonist / Shadow Monarch",
    description:
      "Once the world's weakest hunter, he becomes a player of the 'System' and rises to become the unstoppable Shadow Monarch.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sung-jinah",
    name: "Sung Jin-Ah",
    anime: "Solo Leveling",
    role: "Sister",
    description:
      "Jin-Woo's younger sister whose safety is his primary motivation.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sung-ilhwan",
    name: "Sung Il-Hwan",
    anime: "Solo Leveling",
    role: "Hunter",
    description:
      "Jin-Woo's father, a powerful hunter who was trapped inside a dungeon for years.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "igris",
    name: "Igris",
    anime: "Solo Leveling",
    role: "Shadow General",
    description:
      "A noble, sword-wielding knight who becomes one of Jin-Woo's most trusted and iconic Shadow Soldiers.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "beru",
    name: "Beru",
    anime: "Solo Leveling",
    role: "Shadow Marshal",
    description:
      "The horrifying Ant King from Jeju Island who becomes Jin-Woo's fanatically loyal Shadow Marshal.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tusk",
    name: "Tusk",
    anime: "Solo Leveling",
    role: "Shadow Mage",
    description:
      "A high-orc shaman shadow equipped with the Orb of Avarice to unleash devastating magic.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "iron",
    name: "Iron",
    anime: "Solo Leveling",
    role: "Shadow Knight",
    description:
      "The shadow of an arrogant human tank hunter, now serving Jin-Woo with boisterous loyalty.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tank",
    name: "Tank",
    anime: "Solo Leveling",
    role: "Shadow Beast",
    description:
      "A massive ice bear shadow that serves as a mount and powerhouse.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "greed",
    name: "Greed",
    anime: "Solo Leveling",
    role: "Shadow Assassin",
    description:
      "The shadow extracted from the arrogant S-Rank hunter Hwang Dongsoo.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "cha-hae-in",
    name: "Cha Hae-In",
    anime: "Solo Leveling",
    role: "S-Rank Hunter",
    description:
      "A master swordswoman and Korea's 9th S-Rank hunter, uniquely sensitive to the smell of mana.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "baek-yoonho",
    name: "Baek Yoonho",
    anime: "Solo Leveling",
    role: "Guild Master",
    description:
      "The Guild Master of the White Tiger Guild who can transform into a massive white tiger.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "choi-jong-in",
    name: "Choi Jong-In",
    anime: "Solo Leveling",
    role: "Guild Master",
    description:
      "Known as the 'Ultimate Weapon', the fire-wielding Guild Master of the Hunters Guild.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "go-gunhee",
    name: "Go Gun-Hee",
    anime: "Solo Leveling",
    role: "Association Chairman",
    description:
      "The elderly but incredibly powerful Chairman of the Korean Hunters Association.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "woo-jinchul",
    name: "Woo Jin-Chul",
    anime: "Solo Leveling",
    role: "Investigator",
    description:
      "A stern A-Rank hunter who handles the Association's messy affairs.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "lim-taegyu",
    name: "Lim Tae-Gyu",
    anime: "Solo Leveling",
    role: "S-Rank Hunter",
    description: "The bow-wielding S-Rank Guild Master of the Fiend Guild.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "min-byunggu",
    name: "Min Byung-Gyu",
    anime: "Solo Leveling",
    role: "Healer",
    description:
      "Korea's only S-Rank Healer who retired out of trauma but returned for the Jeju Island raid.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "thomas-andre",
    name: "Thomas Andre",
    anime: "Solo Leveling",
    role: "National Level Hunter",
    description:
      "A hulking, prideful National Level Hunter from the US acting as a vessel for the Rulers.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "christopher-reed",
    name: "Christopher Reed",
    anime: "Solo Leveling",
    role: "National Level Hunter",
    description:
      "A fire-manipulating US National Level Hunter targeted by the Monarchs.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "liu-zhigang",
    name: "Liu Zhigang",
    anime: "Solo Leveling",
    role: "National Level Hunter",
    description:
      "China's Seven-Star Hunter and one of the strongest men in the world.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "goto-ryuji",
    name: "Goto Ryuji",
    anime: "Solo Leveling",
    role: "S-Rank Hunter",
    description:
      "Japan's strongest hunter who underestimates the danger of the Ant King.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ant-king",
    name: "Ant King",
    anime: "Solo Leveling",
    role: "Dungeon Boss",
    description:
      "The apex predator of the Jeju Island ants before becoming Beru.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "frost-monarch",
    name: "Frost Monarch",
    anime: "Solo Leveling",
    role: "Monarch",
    description:
      "An ancient being of absolute cold who hunts Jin-Woo to prevent the Shadow Monarch's return.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "beast-monarch",
    name: "Beast Monarch",
    anime: "Solo Leveling",
    role: "Monarch",
    description:
      "The cowardly Sovereign of Animal Spirits who attacks alongside the Frost Monarch.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "dragon-monarch",
    name: "Antares",
    anime: "Solo Leveling",
    role: "Dragon Monarch",
    description:
      "The Monarch of Destruction and the final, most powerful enemy Jin-Woo faces.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "shadow-monarch",
    name: "Ashborn",
    anime: "Solo Leveling",
    role: "Original Shadow Monarch",
    description:
      "The original Ruler of Death who passed his terrifying mantle down to Jin-Woo.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yoo-jinho",
    name: "Yoo Jin-Ho",
    anime: "Solo Leveling",
    role: "Vice Guild Master",
    description:
      "A rich D-Rank hunter who becomes Jin-Woo's endlessly loyal, little-brother-like sidekick.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "han-songyi",
    name: "Han Song-Yi",
    anime: "Solo Leveling",
    role: "Hunter",
    description:
      "Jin-Ah's friend and an E-Rank hunter who receives a terrifying wake-up call in a Red Gate.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kim-chul",
    name: "Kim Chul",
    anime: "Solo Leveling",
    role: "Hunter",
    description:
      "An arrogant A-Rank tank whose hubris gets him killed and turned into the shadow 'Iron'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kang-taeshik",
    name: "Kang Taeshik",
    anime: "Solo Leveling",
    role: "Corrupt Hunter",
    description:
      "An Association inspector who secretly took contracts to murder other hunters inside dungeons.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hwang-dongsuk",
    name: "Hwang Dongsuk",
    anime: "Solo Leveling",
    role: "Hunter",
    description:
      "A corrupt lizard hunter who attempted to trap Jin-Woo and Jinho in a boss room.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hwang-dongsoo",
    name: "Hwang Dongsoo",
    anime: "Solo Leveling",
    role: "S-Rank Hunter",
    description:
      "Dongsuk's arrogant S-Rank brother who vows revenge on Jin-Woo.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Tokyo Revengers
  {
    id: "takemichi-hanagaki",
    name: "Takemichi Hanagaki",
    anime: "Tokyo Revengers",
    role: "Protagonist",
    description:
      "A crybaby who travels back in time to save his middle school girlfriend from a tragic fate by infiltrating a gang.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hinata-tachibana",
    name: "Hinata Tachibana",
    anime: "Tokyo Revengers",
    role: "Heroine",
    description:
      "Takemichi's incredibly brave and fiercely loyal girlfriend whose death kickstarts the entire story.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "naoto-tachibana",
    name: "Naoto Tachibana",
    anime: "Tokyo Revengers",
    role: "Detective",
    description:
      "Hinata's brother who becomes a detective and acts as Takemichi's 'trigger' for time leaping.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "manjiro-sano",
    name: "Manjiro Sano (Mikey)",
    anime: "Tokyo Revengers",
    role: "Leader",
    description:
      "The 'Invincible' leader of Toman whose boyish charm masks an overwhelming, violent 'dark impulse'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ken-ryuguji",
    name: "Ken Ryuguji (Draken)",
    anime: "Tokyo Revengers",
    role: "Vice Leader",
    description:
      "Mikey's tall, tattooed right-hand man who serves as the moral 'heart' of Toman.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "keisuke-baji",
    name: "Keisuke Baji",
    anime: "Tokyo Revengers",
    role: "Captain",
    description:
      "A founding member of Toman who goes to extreme, tragic lengths to expose Kisaki Tetta.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "takashi-mitsuya",
    name: "Takashi Mitsuya",
    anime: "Tokyo Revengers",
    role: "Captain",
    description:
      "The level-headed fashion designer and peacemaker of Toman's founding members.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kazutora-hanemiya",
    name: "Kazutora Hanemiya",
    anime: "Tokyo Revengers",
    role: "Member",
    description:
      "A mentally unstable founding member whose tragic mistake shattered Mikey's family.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "pah-chin",
    name: "Pah-Chin",
    anime: "Tokyo Revengers",
    role: "Captain",
    description: "The hot-headed brute-force fighter of Toman's founders.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "peh-yan",
    name: "Peh-Yan",
    anime: "Tokyo Revengers",
    role: "Vice Captain",
    description:
      "Pah-Chin's fiercely loyal vice-captain who briefly betrays Toman out of anger.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hakkai-shiba",
    name: "Hakkai Shiba",
    anime: "Tokyo Revengers",
    role: "Vice Captain",
    description:
      "Mitsuya's vice-captain who hides a dark family secret about his abusive brother.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "chifuyu-matsuno",
    name: "Chifuyu Matsuno",
    anime: "Tokyo Revengers",
    role: "Vice Captain",
    description:
      "Baji's incredibly loyal vice-captain who becomes Takemichi's best friend and confidant in time travel.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "haruki-hayashida",
    name: "Haruki Hayashida",
    anime: "Tokyo Revengers",
    role: "Member",
    description:
      "Also known as Pah-chin, the loyal but simple-minded third division captain.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "shuji-hanma",
    name: "Shuji Hanma",
    anime: "Tokyo Revengers",
    role: "Antagonist",
    description:
      "A thrill-seeking delinquent with 'Sin' and 'Punishment' tattooed on his hands, acting as Kisaki's muscle.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "taiju-shiba",
    name: "Taiju Shiba",
    anime: "Tokyo Revengers",
    role: "Leader",
    description:
      "The physically imposing, hyper-religious, and brutally abusive leader of the Black Dragons.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "seishu-inui",
    name: "Seishu Inui",
    anime: "Tokyo Revengers",
    role: "Member",
    description:
      "A scarred Black Dragon loyalist who places his faith in Takemichi to revive the gang's true spirit.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hajime-kokonoi",
    name: "Hajime Kokonoi",
    anime: "Tokyo Revengers",
    role: "Strategist",
    description:
      "A genius money-maker traumatized by a past failure to afford life-saving surgery for the girl he loved.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "izuna-kurokawa",
    name: "Izana Kurokawa",
    anime: "Tokyo Revengers",
    role: "Leader",
    description:
      "Mikey's adoptive brother who leads Tenjiku out of a warped sense of jealousy and abandonment.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ran-haitani",
    name: "Ran Haitani",
    anime: "Tokyo Revengers",
    role: "Executive",
    description:
      "The older, baton-wielding half of the charismatic and deadly Haitani brothers.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rindou-haitani",
    name: "Rindou Haitani",
    anime: "Tokyo Revengers",
    role: "Executive",
    description:
      "The younger Haitani brother who specializes in joint-locking submissions.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kakucho",
    name: "Kakucho",
    anime: "Tokyo Revengers",
    role: "Executive",
    description:
      "Izana's fiercely loyal right-hand man and Takemichi's childhood friend.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kanji-mochizuki",
    name: "Kanji Mochizuki",
    anime: "Tokyo Revengers",
    role: "Executive",
    description: "A massive, brute-force fighter known as 'Mocchi' in Tenjiku.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "emma-sano",
    name: "Emma Sano",
    anime: "Tokyo Revengers",
    role: "Support",
    description: "Mikey's sweet half-sister who is deeply in love with Draken.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "shinichiro-sano",
    name: "Shinichiro Sano",
    anime: "Tokyo Revengers",
    role: "Founder",
    description:
      "Mikey's charismatic older brother, a weak fighter but an incredibly respected leader whose death scars the cast.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "south-terano",
    name: "South Terano",
    anime: "Tokyo Revengers",
    role: "Leader",
    description:
      "A gargantuan, violence-obsessed gang leader representing the 'darkness' of the delinquent world.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "senju-kawaragi",
    name: "Senju Kawaragi",
    anime: "Tokyo Revengers",
    role: "Leader",
    description:
      "The surprisingly small, acrobatic female leader of the Brahman gang.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "takeomi-akashi",
    name: "Takeomi Akashi",
    anime: "Tokyo Revengers",
    role: "Executive",
    description:
      "Senju's older brother and the 'God of War' from the legendary first Black Dragons.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "wakasa-imaushi",
    name: "Wakasa Imaushi",
    anime: "Tokyo Revengers",
    role: "Founder",
    description:
      "A lethargic but incredibly fast fighter from the original Black Dragons.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "benkei-arashi",
    name: "Benkei Arashi",
    anime: "Tokyo Revengers",
    role: "Founder",
    description:
      "The powerhouse tank of the legendary first generation Black Dragons.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yasuhiro-muto",
    name: "Yasuhiro Muto (Mucho)",
    anime: "Tokyo Revengers",
    role: "Captain",
    description:
      "The stoic giant of Toman's Fifth Division who betrays Mikey out of loyalty to Izana.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tetta-kisaki",
    name: "Tetta Kisaki",
    anime: "Tokyo Revengers",
    role: "Main Antagonist",
    description:
      "A physically weak but brilliant manipulator who orchestrates decades of tragedy purely out of obsessive, twisted love.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Lookism
  {
    id: "daniel-park",
    name: "Daniel Park",
    anime: "Lookism",
    role: "Protagonist",
    description:
      "A heavily bullied teen who wakes up with a second, perfect body, exposing the world's deep-rooted lookism.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "daniel-park-second-body",
    name: "Daniel Park (Second Body)",
    anime: "Lookism",
    role: "Fighter",
    description:
      "Daniel's unnaturally flawless, superhuman second body that commands awe and jealousy wherever he goes.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "zack-lee",
    name: "Zack Lee",
    anime: "Lookism",
    role: "Boxer",
    description:
      "A former bully and talented boxer who undergoes major character growth to protect those he cares about.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "vasco",
    name: "Vasco",
    anime: "Lookism",
    role: "Leader (Burn Knuckles)",
    description:
      "A naive but pure-hearted fighter who leads the Burn Knuckles to protect the weak from bullies.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "jay-hong",
    name: "Jay Hong",
    anime: "Lookism",
    role: "Elite Fighter",
    description:
      "A silent, extremely wealthy student who uses Systema and goes to extreme lengths to secretly protect Daniel.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "vin-jin",
    name: "Vin Jin",
    anime: "Lookism",
    role: "Fighter",
    description:
      "A rude, judo-master rapper who hides his eyes due to a deep complex about his appearance.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "logan-lee",
    name: "Logan Lee",
    anime: "Lookism",
    role: "Rival",
    description:
      "Daniel's horrific former bully, an aggressive fighter whose body is nearly impervious to pain.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "jake-kim",
    name: "Jake Kim",
    anime: "Lookism",
    role: "Leader (Big Deal)",
    description:
      "The charismatic, deeply loyal leader of Big Deal who sacrifices his own future for his gang.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "samuel-seo",
    name: "Samuel Seo",
    anime: "Lookism",
    role: "Executive",
    description:
      "A violently ambitious fighter driven by an extreme inferiority complex and a desire to be 'King'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "lineman",
    name: "Lineman",
    anime: "Lookism",
    role: "Member",
    description: "A seemingly weak but steadfastly loyal member of Big Deal.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "eugene",
    name: "Eugene",
    anime: "Lookism",
    role: "Leader (Workers)",
    description:
      "The polite, deceptively young mastermind who controls the immensely wealthy and corrupt Workers syndicate.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "gun",
    name: "Gun",
    anime: "Lookism",
    role: "Top Fighter",
    description:
      "A terrifyingly strong yakuza and 'Training Genius' who extorts crews and constantly searches for worthy successors.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "goo",
    name: "Goo",
    anime: "Lookism",
    role: "Top Fighter",
    description:
      "Gun's eccentric, weapon-wielding counterpart who views fighting as a violent game.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "johan-seong",
    name: "Johan Seong",
    anime: "Lookism",
    role: "God Dog Leader",
    description:
      "A tragic, lone-wolf genius who can copy any martial art, fighting desperately to cure his mother's blindness.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rhyun",
    name: "Ryuhei",
    anime: "Lookism",
    role: "Executive",
    description:
      "A wild Japanese biker gang leader who fights for the Workers.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "james-lee",
    name: "James Lee",
    anime: "Lookism",
    role: "Legend",
    description:
      "The flawless 'Legend of the First Generation' who ended an era of warfare singlehandedly.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "eli-jang",
    name: "Eli Jang",
    anime: "Lookism",
    role: "Hostel Leader",
    description:
      "A wildly instinctual fighter who leads 'Hostel', acting as a father figure to runaway youths.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "warren-chae",
    name: "Warren Chae",
    anime: "Lookism",
    role: "Fighter",
    description:
      "Hostel's fiercely protective 'Uncle' who utilizes heavy CQC in combat.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sally-park",
    name: "Sally Park",
    anime: "Lookism",
    role: "Support",
    description: "The original founder and emotional core of Hostel.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "brad-lee",
    name: "Brad Lee",
    anime: "Lookism",
    role: "Member",
    description: "A loyal member of Big Deal who follows Jake Kim to the end.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "taesoo-ma",
    name: "Taesoo Ma",
    anime: "Lookism",
    role: "King of Ansan",
    description:
      "A brutal First Generation King who fights exclusively with his right fist.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "gongseop-ji",
    name: "Gongseop Ji",
    anime: "Lookism",
    role: "King of Suwon",
    description:
      "A former monk and First Generation King possessing unbreakable physical durability.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "seokdu-wang",
    name: "Seokdu Wang",
    anime: "Lookism",
    role: "King of Pyeongtaek",
    description:
      "A First Generation King who fights devastatingly using only headbutts.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hansoo-seong",
    name: "Hansoo Seong",
    anime: "Lookism",
    role: "Martial Artist",
    description: "A legendary Taekwondo master with a ruthless past.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "park-hyunseok",
    name: "Park Hyunseok",
    anime: "Lookism",
    role: "Daniel's Original Body",
    description:
      "Daniel's original body, which he slowly trains from being overweight into a formidable fighter.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "mrs-park",
    name: "Mrs. Park",
    anime: "Lookism",
    role: "Mother",
    description:
      "Daniel's hardworking mother who sacrifices everything to give him a good life.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kenta-magami",
    name: "Kenta Magami",
    anime: "Lookism",
    role: "Executive",
    description:
      "A karate practitioner seeking revenge against Gun for annihilating his clan.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yuseong",
    name: "Yuseong",
    anime: "Lookism",
    role: "Executive",
    description:
      "Eugene's autistic, violently strong twin brother who acts as his ultimate shield.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "mandeok-bang",
    name: "Mandeok Bang",
    anime: "Lookism",
    role: "Executive",
    description:
      "A massive, powerful Capoeira fighter completely devoted to Eugene.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tom-lee",
    name: "Tom Lee",
    anime: "Lookism",
    role: "Legendary Fighter",
    description:
      "The 'Fighting Genius', a monstrously massive old man with an obsession for other fighters' potential.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sofia-alex",
    name: "Sofia Alex",
    anime: "Lookism",
    role: "Trainer",
    description:
      "Jay's Russian bodyguard and Daniel's brutal physical trainer.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "cho-ma",
    name: "Cho Ma",
    anime: "Lookism",
    role: "Fighter",
    description:
      "A senior student and former boxer who avoids fighting but possesses immense hidden strength.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Black Clover
  {
    id: "asta",
    name: "Asta",
    anime: "Black Clover",
    role: "Protagonist",
    description:
      "A loud, magicless orphan wielding Anti-Magic swords who refuses to give up on becoming the Wizard King.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yuno",
    name: "Yuno",
    anime: "Black Clover",
    role: "Rival",
    description:
      "Asta's cool-headed childhood rival, a prodigious Wind Mage chosen by a four-leaf grimoire.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "noelle-silva",
    name: "Noelle Silva",
    anime: "Black Clover",
    role: "Royal Mage",
    description:
      "A haughty royal who overcomes her inability to control her vast water magic to protect her friends.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yami-sukehiro",
    name: "Yami Sukehiro",
    anime: "Black Clover",
    role: "Captain",
    description:
      "The gruff, katana-wielding Captain of the Black Bulls who constantly tells his squad to 'surpass their limits'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "magna-swing",
    name: "Magna Swing",
    anime: "Black Clover",
    role: "Member",
    description:
      "A fiery delinquent who relies on guts, baseball-themed magic, and a massive amount of heart.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "luck-voltia",
    name: "Luck Voltia",
    anime: "Black Clover",
    role: "Member",
    description:
      "A constantly smiling lightning mage with a sociopathic love for battling strong opponents.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "gauche-adlai",
    name: "Gauche Adlai",
    anime: "Black Clover",
    role: "Member",
    description:
      "A mirror mage with a severe, nosebleed-inducing obsession with his little sister Marie.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "vanessa-enoteca",
    name: "Vanessa Enoteca",
    anime: "Black Clover",
    role: "Witch",
    description:
      "A heavy-drinking witch whose thread magic can literally alter fate to protect her found family.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "finral-roulacase",
    name: "Finral Roulacase",
    anime: "Black Clover",
    role: "Spatial Mage",
    description:
      "A cowardly womanizer whose incredibly precise spatial magic makes him the ultimate support caster.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "charmy-pappitson",
    name: "Charmy Pappitson",
    anime: "Black Clover",
    role: "Dwarf Hybrid",
    description:
      "A food-obsessed girl whose cotton magic and dwarf heritage allow her to literally consume other people's magic.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "henry-legolant",
    name: "Henry Legolant",
    anime: "Black Clover",
    role: "Member",
    description:
      "A bedridden noble who survives by draining his squadmates' magic while turning their base into a giant mech.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "gordon-agrippa",
    name: "Gordon Agrippa",
    anime: "Black Clover",
    role: "Curse Mage",
    description:
      "A creepy-looking poison mage who mumbles quietly but genuinely loves his squadmates more than anything.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "grey",
    name: "Grey",
    anime: "Black Clover",
    role: "Transformation Mage",
    description:
      "A painfully shy girl whose true magic goes far beyond simple transformation into transmuting reality itself.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "zora-ideale",
    name: "Zora Ideale",
    anime: "Black Clover",
    role: "Trap Mage",
    description:
      "A cynical, mask-wearing trap mage who despises corrupt Magic Knights.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "nacht-faust",
    name: "Nacht Faust",
    anime: "Black Clover",
    role: "Vice Captain",
    description:
      "The mysterious Vice-Captain of the Black Bulls who hosts multiple devils and hates people who don't take responsibility.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "william-vangeance",
    name: "William Vangeance",
    anime: "Black Clover",
    role: "Captain",
    description:
      "The masked Captain of the Golden Dawn whose body is shared by the elf leader Patry.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "mimosa-vermillion",
    name: "Mimosa Vermillion",
    anime: "Black Clover",
    role: "Healer",
    description:
      "A polite royal wielding incredibly potent plant-based healing magic, holding a massive crush on Asta.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "klaus-lunettes",
    name: "Klaus Lunettes",
    anime: "Black Clover",
    role: "Mage",
    description:
      "A strict, glasses-pushing noble who initially looks down on peasants but comes to deeply respect Asta.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "langris-vaude",
    name: "Langris Vaude",
    anime: "Black Clover",
    role: "Spatial Mage",
    description:
      "Finral's arrogant younger brother who uses offensive spatial magic to erase things from existence.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "mereoleona-vermillion",
    name: "Mereoleona Vermillion",
    anime: "Black Clover",
    role: "Royal Knight",
    description:
      "An incredibly loud, terrifyingly strong royal who fights like a wild beast wrapped in fire.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "fuegoleon-vermillion",
    name: "Fuegoleon Vermillion",
    anime: "Black Clover",
    role: "Captain",
    description:
      "The noble, disciplined Captain of the Crimson Lions who bonded with the Fire Spirit Salamander.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "leopold-vermillion",
    name: "Leopold Vermillion",
    anime: "Black Clover",
    role: "Royal Mage",
    description: "A fiery young noble who considers Asta his ultimate rival.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "nozel-silva",
    name: "Nozel Silva",
    anime: "Black Clover",
    role: "Captain",
    description:
      "Noelle's cold older brother, wielding Mercury Magic, who pushed her away to protect her.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "charlotte-roselei",
    name: "Charlotte Roselei",
    anime: "Black Clover",
    role: "Captain",
    description:
      "The supposedly man-hating Captain of the Blue Rose who is secretly head-over-heels in love with Yami.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sol-marron",
    name: "Sol Marron",
    anime: "Black Clover",
    role: "Member",
    description:
      "Charlotte's tomboyish subordinate who calls her 'Sis' and deeply despises men.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rill-boismortier",
    name: "Rill Boismortier",
    anime: "Black Clover",
    role: "Captain",
    description:
      "The youngest Magic Knight Captain whose magic brings his chaotic paintings to life.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kaiser-granvorka",
    name: "Kaiser Granvorka",
    anime: "Black Clover",
    role: "Captain",
    description:
      "The older, defensive vortex-magic user who took over the Purple Orcas.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "julius-novachrono",
    name: "Julius Novachrono",
    anime: "Black Clover",
    role: "Wizard King",
    description:
      "The incredibly powerful, magic-obsessed Wizard King who wields Time Magic and dreams of an equal society.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "dante-zogratis",
    name: "Dante Zogratis",
    anime: "Black Clover",
    role: "Dark Triad",
    description:
      "The malicious gravity and flesh magic user who believes evil is the true nature of humanity.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "vanica-zogratis",
    name: "Vanica Zogratis",
    anime: "Black Clover",
    role: "Dark Triad",
    description:
      "A battle-crazy sadist holding the curse-warding devil Megicula.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "zenon-zogratis",
    name: "Zenon Zogratis",
    anime: "Black Clover",
    role: "Dark Triad",
    description:
      "The cold, emotionless bone magic user who annihilated the Golden Dawn.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "lucifero",
    name: "Lucifero",
    anime: "Black Clover",
    role: "Devil King",
    description:
      "The supremely arrogant King of Devils whose gravity magic crushes everything into the dirt.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "megicula",
    name: "Megicula",
    anime: "Black Clover",
    role: "Devil",
    description:
      "A terrifying devil who plays with curses, responsible for the deaths of Noelle's mother.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "beelzebub",
    name: "Beelzebub",
    anime: "Black Clover",
    role: "Devil",
    description:
      "One of the three rulers of the Underworld, specializing in spatial magic.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "lucifugus",
    name: "Lucifugus",
    anime: "Black Clover",
    role: "Devil",
    description:
      "The devil who supports the three rulers, responsible for the death of Nacht's family.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "liebe",
    name: "Liebe",
    anime: "Black Clover",
    role: "Anti-Magic Devil",
    description:
      "A magicless devil who harbors intense hatred for his own kind, residing in Asta's grimoire.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "lolopechka",
    name: "Lolopechka",
    anime: "Black Clover",
    role: "Heart Queen",
    description:
      "The clumsy but immensely powerful Queen of the Heart Kingdom, cursed by Megicula.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "gaja",
    name: "Gaja",
    anime: "Black Clover",
    role: "Spirit Guardian",
    description:
      "The strongest Spirit Guardian of the Heart Kingdom, fiercely devoted to Lolopechka.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "patry",
    name: "Patry",
    anime: "Black Clover",
    role: "Elf Leader",
    description:
      "The vengeful leader of the Eye of the Midnight Sun who mistook humans as the betrayers of the elves.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rhya",
    name: "Rhya",
    anime: "Black Clover",
    role: "Elf",
    description:
      "A lazy elf who can copy anyone's magic simply by touching their grimoire.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "vetto",
    name: "Vetto",
    anime: "Black Clover",
    role: "Elf",
    description: "A despair-bringing elf driven entirely by beastly rage.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "fana",
    name: "Fana",
    anime: "Black Clover",
    role: "Elf",
    description:
      "An elf with powerful fire magic and the Fire Spirit Salamander.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

// Dandadan
  {
    id: "momo-ayase",
    name: "Momo Ayase",
    anime: "Dandadan",
    role: "Protagonist",
    description: "A brave high school girl with psychokinetic powers who firmly believes in ghosts but not aliens.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ken-takakura",
    name: "Ken Takakura (Okarun)",
    anime: "Dandadan",
    role: "Protagonist",
    description: "An occult-obsessed teenager who gains supernatural speed and power after being cursed by the Turbo Granny.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Family
  {
    id: "seiko-ayase",
    name: "Seiko Ayase",
    anime: "Dandadan",
    role: "Psychic",
    description: "Momo's youthful grandmother and a highly skilled spirit medium who protects their town from supernatural threats.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Friends
  {
    id: "jin-enjoji",
    name: "Jin Enjoji (Jiji)",
    anime: "Dandadan",
    role: "Friend",
    description: "Momo's energetic childhood friend whose haunted house leads to him sharing a body with the deadly Evil Eye.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "aira-shiratori",
    name: "Aira Shiratori",
    anime: "Dandadan",
    role: "Psychic",
    description: "A vain but courageous girl who awakens spiritual powers after inheriting the aura of the Acrobatic Silky.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Yokai
  {
    id: "turbo-granny",
    name: "Turbo Granny",
    anime: "Dandadan",
    role: "Yokai",
    description: "A foul-mouthed, incredibly fast yokai who cursed Okarun and now resides inside a lucky cat doll.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "acrobatic-silky",
    name: "Acrobatic Silky",
    anime: "Dandadan",
    role: "Spirit",
    description: "A tragic yokai in a red dress who fiercely protected Aira before passing her powers onto her.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "evil-eye",
    name: "Evil Eye",
    anime: "Dandadan",
    role: "Yokai",
    description: "A malevolent, battle-crazed entity born from human sacrifice that frequently takes over Jiji's body.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Aliens
  {
    id: "serpo",
    name: "Serpo Alien",
    anime: "Dandadan",
    role: "Alien",
    description: "A race of male-only extraterrestrials who attempt to abduct humans to harvest reproductive organs for cloning.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "flatwoods-monster",
    name: "Flatwoods Monster",
    anime: "Dandadan",
    role: "Alien",
    description: "A hulking, bizarre alien entity heavily armored in a sumo-like suit encountered early in the series.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // School Characters
  {
    id: "manjiro",
    name: "Manjiro",
    anime: "Dandadan",
    role: "Student",
    description: "A student at Momo and Okarun's high school often caught up in the chaotic background events.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "miko",
    name: "Miko",
    anime: "Dandadan",
    role: "Student",
    description: "One of Momo's classmates who is oblivious to the supernatural battles happening around her.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Cursed Entities
  {
    id: "nessie",
    name: "Nessie",
    anime: "Dandadan",
    role: "Cryptid",
    description: "A strange cryptid-like creature encountered during Momo and Okarun's bizarre adventures.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "reiko-kashima",
    name: "Reiko Kashima",
    anime: "Dandadan",
    role: "Urban Legend",
    description: "A terrifyingly powerful urban legend whose very presence spells absolute destruction for anyone in her path.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Arc Villains
  {
    id: "alien-queen",
    name: "Alien Queen",
    anime: "Dandadan",
    role: "Antagonist",
    description: "A high-ranking extraterrestrial threat responsible for coordinating massive invasion forces against Earth.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Supporting
  {
    id: "momo-mother",
    name: "Momo's Mother",
    anime: "Dandadan",
    role: "Support",
    description: "Momo's absentee mother, whose complex relationship with her daughter heavily influenced Momo's upbringing.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Paranormal
  {
    id: "spirit-medium",
    name: "Spirit Medium",
    anime: "Dandadan",
    role: "Occult",
    description: "An individual capable of channeling and interacting directly with ghosts, much like Seiko Ayase.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "giant-worm",
    name: "Giant Worm",
    anime: "Dandadan",
    role: "Creature",
    description: "A massive, subterranean cryptid that acts as an environmental hazard during supernatural clashes.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "possessed-student",
    name: "Possessed Student",
    anime: "Dandadan",
    role: "Victim",
    description: "An unfortunate schoolmate who falls victim to one of the many lingering spirits around town.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Main Protagonist
  {
    id: "yoichi-isagi",
    name: "Yoichi Isagi",
    anime: "Blue Lock",
    role: "Protagonist",
    description: "A highly adaptable forward whose elite spatial awareness allows him to 'devour' other players on the field.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Core Rivals
  {
    id: "meguru-bachira",
    name: "Meguru Bachira",
    anime: "Blue Lock",
    role: "Striker",
    description: "An eccentric and joyful dribbling prodigy who plays football guided by the 'monster' inside him.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rin-itoshi",
    name: "Rin Itoshi",
    anime: "Blue Lock",
    role: "Genius Striker",
    description: "The top-ranked player in Blue Lock, a cold and calculating forward who uses his teammates as tools.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ryusei-shidou",
    name: "Ryusei Shidou",
    anime: "Blue Lock",
    role: "Wild Striker",
    description: "An aggressive, hyper-athletic forward capable of scoring unbelievable goals from impossible angles.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hyoma-chigiri",
    name: "Hyoma Chigiri",
    anime: "Blue Lock",
    role: "Speedster",
    description: "A player who overcame a mental block regarding a past leg injury to unleash his world-class sprinting speed.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rensuke-kunigami",
    name: "Rensuke Kunigami",
    anime: "Blue Lock",
    role: "Power Striker",
    description: "A strong-willed player with a lethal left-footed long shot, aspiring to be a football superhero.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "seishiro-nagi",
    name: "Seishiro Nagi",
    anime: "Blue Lock",
    role: "Prodigy",
    description: "An initially unmotivated genius with flawless trapping abilities and an immense natural talent for the game.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "reo-mikage",
    name: "Reo Mikage",
    anime: "Blue Lock",
    role: "All-Rounder",
    description: "A wealthy, highly versatile player capable of copying other players' abilities to near perfection.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "barou-shoei",
    name: "Shoei Barou",
    anime: "Blue Lock",
    role: "King Striker",
    description: "An arrogant, highly skilled forward who views the field as his kingdom and plays strictly by his own rules.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Team Z
  {
    id: "gagamaru-gin",
    name: "Gin Gagamaru",
    anime: "Blue Lock",
    role: "Goalkeeper",
    description: "An agile, unorthodox player with incredible reflexes who eventually thrives as an outstanding goalkeeper.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "raichi-jingo",
    name: "Jingo Raichi",
    anime: "Blue Lock",
    role: "Midfielder",
    description: "A loud and aggressive player with relentless stamina, excelling in man-marking and defense.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "igarashi-gurimu",
    name: "Gurimu Igarashi",
    anime: "Blue Lock",
    role: "Forward",
    description: "A monk-in-training who relies on tenacity and drawing fouls to survive the harsh Blue Lock program.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "imamura-yudai",
    name: "Yudai Imamura",
    anime: "Blue Lock",
    role: "Forward",
    description: "A speedy forward from Team Z known for his energetic personality and love for women.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Other Blue Lock Players
  {
    id: "karasu-tabito",
    name: "Tabito Karasu",
    anime: "Blue Lock",
    role: "Playmaker",
    description: "A highly analytical player who excels at finding and exploiting the weakest link on the opposing team.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "otoshi-eita",
    name: "Eita Otoya",
    anime: "Blue Lock",
    role: "Stealth Striker",
    description: "A smooth and fast player known for his 'ninja-like' off-the-ball movements to slip past defenders.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yukimiya-kenyu",
    name: "Kenyu Yukimiya",
    anime: "Blue Lock",
    role: "Dribbler",
    description: "A stylish street-style dribbler fighting against a progressive eye condition to achieve his dreams.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hiori-yo",
    name: "Yo Hiori",
    anime: "Blue Lock",
    role: "Midfielder",
    description: "A calm, highly technical player with pinpoint passing accuracy and a deep understanding of the game's flow.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kurona-ranze",
    name: "Ranze Kurona",
    anime: "Blue Lock",
    role: "Support",
    description: "A rapid, short-passing specialist who effectively syncs up with Isagi to break down defensive lines.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "aryu-jyubei",
    name: "Jyubei Aryu",
    anime: "Blue Lock",
    role: "Striker",
    description: "A remarkably tall and flexible player obsessed with 'glamorous' plays and winning aerial duals.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tokimitsu-aoshi",
    name: "Aoshi Tokimitsu",
    anime: "Blue Lock",
    role: "Power Player",
    description: "An incredibly anxious and easily frightened player who harbors monstrous physical strength.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // U-20 Japan
  {
    id: "sae-itoshi",
    name: "Sae Itoshi",
    anime: "Blue Lock",
    role: "Midfield Genius",
    description: "Rin's older brother and an internationally recognized midfield prodigy playing for Real Madrid youth.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "aiku-oliver",
    name: "Oliver Aiku",
    anime: "Blue Lock",
    role: "Defender",
    description: "The captain of the Japan U-20 team, a world-class defender with exceptional analytical skills.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sendou-shuto",
    name: "Shuto Sendou",
    anime: "Blue Lock",
    role: "Forward",
    description: "The ace striker of the Japan U-20 team who struggles to maintain his status against the Blue Lock players.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Coaches
  {
    id: "jinpachi-ego",
    name: "Jinpachi Ego",
    anime: "Blue Lock",
    role: "Coach",
    description: "The eccentric and ruthless mastermind behind the Blue Lock project, obsessed with creating the ultimate egoist striker.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "anri-teieri",
    name: "Anri Teieri",
    anime: "Blue Lock",
    role: "Project Manager",
    description: "A passionate JFA executive who fully believes in Ego's methods to lead Japan to World Cup victory.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Neo Egoist League
  {
    id: "kaiser",
    name: "Michael Kaiser",
    anime: "Blue Lock",
    role: "World-Class Striker",
    description: "A highly arrogant, world-class German prodigy known for his impossibly fast 'Kaiser Impact' shot.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ness",
    name: "Alexis Ness",
    anime: "Blue Lock",
    role: "Playmaker",
    description: "The 'Heart of Bastard München', an exceptional midfielder fiercely loyal to Michael Kaiser.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "loki",
    name: "Julian Loki",
    anime: "Blue Lock",
    role: "World Star",
    description: "A young, blisteringly fast French superstar who serves as a master striker in the Neo Egoist League.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // World Five
  {
    id: "adam-blake",
    name: "Adam Blake",
    anime: "Blue Lock",
    role: "World Five",
    description: "A physically dominant English striker known for easily overpowering defenders.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "pablo-cavazos",
    name: "Pablo Cavazos",
    anime: "Blue Lock",
    role: "World Five",
    description: "A diminutive but incredibly skilled Argentinian player famous for his precise free kicks.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "dada-silva",
    name: "Dada Silva",
    anime: "Blue Lock",
    role: "World Five",
    description: "A massive Brazilian defender with an overwhelming aerial presence.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "leonardo-luna",
    name: "Leonardo Luna",
    anime: "Blue Lock",
    role: "World Five",
    description: "A smooth-talking Spanish forward who masks a ruthless playstyle behind a polite demeanor.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "julian-loki",
    name: "Julian Loki",
    anime: "Blue Lock",
    role: "World Five",
    description: "The 17-year-old French prodigy whose 'god-like' speed makes him unstoppable on the pitch.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Main
  {
    id: "subaru-natsuki",
    name: "Subaru Natsuki",
    anime: "Re:Zero",
    role: "Protagonist",
    description: "An ordinary teen summoned to a fantasy world who possesses 'Return by Death', letting him rewind time when he dies.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "emilia",
    name: "Emilia",
    anime: "Re:Zero",
    role: "Royal Candidate",
    description: "A kind-hearted half-elf spirit arts user running for the throne of Lugunica, whom Subaru vows to protect.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "puck",
    name: "Puck",
    anime: "Re:Zero",
    role: "Great Spirit",
    description: "Emilia's familiarly adorable but overwhelmingly powerful artificial cat spirit.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "beatrice",
    name: "Beatrice",
    anime: "Re:Zero",
    role: "Spirit",
    description: "A tsundere artificial spirit who guards the Forbidden Library inside Roswaal's mansion.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rem",
    name: "Rem",
    anime: "Re:Zero",
    role: "Oni Maid",
    description: "A fiercely loyal demon maid with blue hair who falls deeply in love with Subaru.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ram",
    name: "Ram",
    anime: "Re:Zero",
    role: "Oni Maid",
    description: "Rem's pink-haired older sister, a sharp-tongued former demon prodigy who lost her horn.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Roswaal Mansion
  {
    id: "roswaal",
    name: "Roswaal L. Mathers",
    anime: "Re:Zero",
    role: "Lord",
    description: "Emilia's eccentric sponsor and the most powerful magic user in the kingdom, harboring deep secrets.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "frederica",
    name: "Frederica Baumann",
    anime: "Re:Zero",
    role: "Maid",
    description: "A beast-human maid with a terrifying smile but a deeply caring and professional nature.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "petra",
    name: "Petra Leyte",
    anime: "Re:Zero",
    role: "Maid",
    description: "A bright young village girl who takes up a maid position at the Roswaal mansion.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "garfiel",
    name: "Garfiel Tinsel",
    anime: "Re:Zero",
    role: "Guardian",
    description: "Frederica's hot-headed half-brother and the fiercely strong protector of the Sanctuary.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Royal Selection
  {
    id: "crusch",
    name: "Crusch Karsten",
    anime: "Re:Zero",
    role: "Royal Candidate",
    description: "A noble, militaristic candidate for the throne who commands immense respect and wields wind magic.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "felix",
    name: "Felix Argyle",
    anime: "Re:Zero",
    role: "Knight",
    description: "Crusch's highly skilled healing knight who happens to be a cheerful catboy.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "wilhelm",
    name: "Wilhelm van Astrea",
    anime: "Re:Zero",
    role: "Sword Saint",
    description: "A legendary swordsman devoted to Crusch, seeking revenge against the White Whale for his wife's death.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  {
    id: "priscilla",
    name: "Priscilla Barielle",
    anime: "Re:Zero",
    role: "Royal Candidate",
    description: "A highly arrogant but incredibly lucky royal candidate who believes the world operates for her benefit.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "al",
    name: "Aldebaran (Al)",
    anime: "Re:Zero",
    role: "Knight",
    description: "Priscilla's helmet-wearing, one-armed knight who shares a similar origin to Subaru.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  {
    id: "anastasia",
    name: "Anastasia Hoshin",
    anime: "Re:Zero",
    role: "Royal Candidate",
    description: "A cunning and wealthy merchant-turned-candidate from Kararagi aiming to buy the entire kingdom.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "julius",
    name: "Julius Juukulius",
    anime: "Re:Zero",
    role: "Knight",
    description: "The 'Finest of Knights', a highly skilled spirit knight bound to Anastasia.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  {
    id: "felt",
    name: "Felt",
    anime: "Re:Zero",
    role: "Royal Candidate",
    description: "A spunky former thief from the slums revealed to have royal blood.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "reinhard",
    name: "Reinhard van Astrea",
    anime: "Re:Zero",
    role: "Sword Saint",
    description: "The current Sword Saint and objectively the most powerful character in the world, backing Felt.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Witch Cult
  {
    id: "petelgeuse",
    name: "Petelgeuse Romanee-Conti",
    anime: "Re:Zero",
    role: "Archbishop of Sloth",
    description: "A deeply insane and terrifying Archbishop of the Witch Cult who utilizes the 'Unseen Hand'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "regulus",
    name: "Regulus Corneas",
    anime: "Re:Zero",
    role: "Archbishop of Greed",
    description: "A hypocritical and dangerous Archbishop capable of stopping the time of anything he interacts with.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sirius",
    name: "Sirius Romanée-Conti",
    anime: "Re:Zero",
    role: "Archbishop of Wrath",
    description: "A deranged, bandaged cultist whose authority allows her to link people's emotions and sensations.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "capella",
    name: "Capella Emerada Lugunica",
    anime: "Re:Zero",
    role: "Archbishop of Lust",
    description: "A sadistic Archbishop capable of freely manipulating her own body and the bodies of others.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ley",
    name: "Ley Batenkaitos",
    anime: "Re:Zero",
    role: "Archbishop of Gluttony",
    description: "One of the Gluttony Archbishops who erases people's names and memories by 'eating' them.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "roy",
    name: "Roy Alphard",
    anime: "Re:Zero",
    role: "Archbishop of Gluttony",
    description: "Another vicious Archbishop of Gluttony known as 'Bizarre Eating'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Witches of Sin
  {
    id: "satella",
    name: "Satella",
    anime: "Re:Zero",
    role: "Witch of Envy",
    description: "The feared Witch of Envy who destroyed half the world and granted Subaru his Return by Death.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "echidna",
    name: "Echidna",
    anime: "Re:Zero",
    role: "Witch of Greed",
    description: "The highly inquisitive Witch of Greed who desires to know everything in existence.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "minerva",
    name: "Minerva",
    anime: "Re:Zero",
    role: "Witch of Wrath",
    description: "A fiery Witch whose violent punches miraculously heal any wound they strike.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sekmet",
    name: "Sekhmet",
    anime: "Re:Zero",
    role: "Witch of Sloth",
    description: "An incredibly lazy but overwhelmingly powerful Witch who sighs with every breath.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "carmilla",
    name: "Carmilla",
    anime: "Re:Zero",
    role: "Witch of Lust",
    description: "A shy and deeply insecure Witch whose mere presence makes people forget how to breathe from adoration.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "typhon",
    name: "Typhon",
    anime: "Re:Zero",
    role: "Witch of Pride",
    description: "A childlike Witch who innocently shatters the bodies of those who harbor guilt.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "daphne",
    name: "Daphne",
    anime: "Re:Zero",
    role: "Witch of Gluttony",
    description: "The constantly starving creator of the Great Demon Beasts, confined to a coffin.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Others
  {
    id: "elsa",
    name: "Elsa Granhiert",
    anime: "Re:Zero",
    role: "Assassin",
    description: "The 'Bowel Hunter', a terrifying and sadistic assassin whom Subaru encounters early on.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "meili",
    name: "Meili Portroute",
    anime: "Re:Zero",
    role: "Assassin",
    description: "A young assassin with the ability to tame and control mabeasts.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "otto",
    name: "Otto Suwen",
    anime: "Re:Zero",
    role: "Merchant",
    description: "A seemingly unlucky merchant with the 'Divine Protection of Soul Language', making him a vital ally.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ricardo",
    name: "Ricardo Welkin",
    anime: "Re:Zero",
    role: "Mercenary Leader",
    description: "The jovial, massive wolf-beastman who leads the Iron Fang mercenary group.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "heinkel",
    name: "Heinkel Astrea",
    anime: "Re:Zero",
    role: "Knight",
    description: "Reinhard's resentful father and Wilhelm's estranged son, struggling with the legacy of his family.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Main
  {
    id: "lelouch-lamperouge",
    name: "Lelouch Lamperouge",
    anime: "Code Geass",
    role: "Protagonist / Zero",
    description: "An exiled Britannian prince who uses the power of Geass to start a massive rebellion as the masked 'Zero'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "c-c",
    name: "C.C.",
    anime: "Code Geass",
    role: "Immortal Geass User",
    description: "An immortal, pizza-loving girl who grants Lelouch the power of Geass and becomes his closest accomplice.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "nunnally-lamperouge",
    name: "Nunnally Lamperouge",
    anime: "Code Geass",
    role: "Princess",
    description: "Lelouch's blind and crippled younger sister, for whom he wants to create a gentle world.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Black Knights
  {
    id: "kallen-kozuki",
    name: "Kallen Kozuki",
    anime: "Code Geass",
    role: "Ace Pilot",
    description: "A fierce half-Britannian, half-Japanese girl who serves as the Black Knights' ace Knightmare pilot.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "suzaku-kururugi",
    name: "Suzaku Kururugi",
    anime: "Code Geass",
    role: "Knight of Seven",
    description: "Lelouch's childhood friend who joins the Britannian military to change the corrupt system from within.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kaname-ohgi",
    name: "Kaname Ohgi",
    anime: "Code Geass",
    role: "Black Knights Leader",
    description: "The earnest but occasionally indecisive deputy leader of the Black Knights.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "diethard-reid",
    name: "Diethard Reid",
    anime: "Code Geass",
    role: "Strategist",
    description: "A former Britannian journalist obsessed with chronicling Zero's path to power.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tamaki",
    name: "Tamaki",
    anime: "Code Geass",
    role: "Black Knight Member",
    description: "A loud, hot-headed founding member of the Black Knights who desperately seeks a high-ranking position.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rakshata-chawla",
    name: "Rakshata Chawla",
    anime: "Code Geass",
    role: "Scientist",
    description: "The brilliant Indian scientist who designs advanced Knightmares and weaponry for the Black Knights.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Ashford Academy
  {
    id: "milly-ashford",
    name: "Milly Ashford",
    anime: "Code Geass",
    role: "Student Council President",
    description: "The playful president of the Ashford Academy student council who knows Lelouch's royal secret.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rivalz-cardemonde",
    name: "Rivalz Cardemonde",
    anime: "Code Geass",
    role: "Student",
    description: "Lelouch's easygoing friend and usual driver for their underground chess matches.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "shirley-fenette",
    name: "Shirley Fenette",
    anime: "Code Geass",
    role: "Student",
    description: "A sweet member of the student council whose deep love for Lelouch leads her into tragedy.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "nina-einstein",
    name: "Nina Einstein",
    anime: "Code Geass",
    role: "Scientist",
    description: "A timid student driven by trauma and obsession to invent weapons of mass destruction.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Britannian Royal Family
  {
    id: "charles-zi-britannia",
    name: "Charles zi Britannia",
    anime: "Code Geass",
    role: "Emperor",
    description: "The imposing Emperor of Britannia and Lelouch's father, who seeks to rewrite the world's reality.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "marianne",
    name: "Marianne vi Britannia",
    anime: "Code Geass",
    role: "Empress",
    description: "Lelouch's murdered mother, whose assassination sparked his quest to destroy Britannia.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "cornelia",
    name: "Cornelia li Britannia",
    anime: "Code Geass",
    role: "Princess / General",
    description: "A fierce and highly capable Britannian princess and military commander known as the 'Goddess of Victory'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "euphemia",
    name: "Euphemia li Britannia",
    anime: "Code Geass",
    role: "Princess",
    description: "A deeply compassionate princess who wants equality for the Japanese, leading to a heartbreaking fate.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "schneizel",
    name: "Schneizel el Britannia",
    anime: "Code Geass",
    role: "Strategist Prince",
    description: "Lelouch's brilliant, coldly rational older brother and his greatest intellectual rival.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "clovis",
    name: "Clovis la Britannia",
    anime: "Code Geass",
    role: "Prince",
    description: "The artistic but cruel Viceroy of Area 11 and Lelouch's first royal target.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Knights of the Round
  {
    id: "gino-weinberg",
    name: "Gino Weinberg",
    anime: "Code Geass",
    role: "Knight of Three",
    description: "An upbeat noble and ace pilot within the elite Knights of the Round.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "anya-alstreim",
    name: "Anya Alstreim",
    anime: "Code Geass",
    role: "Knight of Six",
    description: "A stoic Knight of the Round who obsessively documents everything on her phone due to memory loss.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "bismarck-waldstein",
    name: "Bismarck Waldstein",
    anime: "Code Geass",
    role: "Knight of One",
    description: "The strongest Knight of the Round, fiercely loyal to Emperor Charles and bearing a Geass eye.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Geass Users
  {
    id: "mao",
    name: "Mao",
    anime: "Code Geass",
    role: "Geass User",
    description: "A mentally unstable orphan who received a mind-reading Geass from C.C. and became obsessed with her.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "v-v",
    name: "V.V.",
    anime: "Code Geass",
    role: "Immortal",
    description: "Charles' immortal older brother who leads the mysterious Geass Order.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rolo-lamperouge",
    name: "Rolo Lamperouge",
    anime: "Code Geass",
    role: "Geass User",
    description: "A ruthless assassin assigned to play Lelouch's fake brother, possessing a time-stopping Geass.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Military
  {
    id: "jeremiah-gottwald",
    name: "Jeremiah Gottwald",
    anime: "Code Geass",
    role: "Knightmare Pilot",
    description: "A zealous Britannian officer heavily modified into a cyborg, fanatically loyal to the royal family.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "villetta-nu",
    name: "Villetta Nu",
    anime: "Code Geass",
    role: "Officer",
    description: "A strict Britannian officer whose life is upended by memory loss and an unexpected romance.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "lloyd-asplund",
    name: "Lloyd Asplund",
    anime: "Code Geass",
    role: "Scientist",
    description: "An eccentric Britannian scientist who creates the Lancelot and cares more for machines than human lives.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "cecile-croomy",
    name: "Cecile Croomy",
    anime: "Code Geass",
    role: "Engineer",
    description: "Lloyd's capable assistant who tries to balance his eccentricity with actual compassion for their pilot.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Chinese Federation
  {
    id: "xingke",
    name: "Li Xingke",
    anime: "Code Geass",
    role: "General",
    description: "A tactically brilliant but terminally ill general devoted to saving the young Empress of the Chinese Federation.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tianzi",
    name: "Tianzi",
    anime: "Code Geass",
    role: "Empress",
    description: "The sheltered, puppet child-empress of the Chinese Federation who just wants to see the outside world.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Others
  {
    id: "carlino",
    name: "Caroline Sforza",
    anime: "Code Geass",
    role: "Noble",
    description: "A minor noble character involved in the sprawling political web of the Britannian Empire.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "orlando",
    name: "Orlando",
    anime: "Code Geass",
    role: "Soldier",
    description: "A military officer engaged in the larger global conflicts caused by the Black Rebellion.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== PART 1 – Phantom Blood =====
  {
    id: "jonathan-joestar",
    name: "Jonathan Joestar",
    anime: "JoJo",
    role: "Protagonist",
    description: "A pure-hearted Victorian gentleman and the first JoJo, mastering Hamon to stop his adoptive brother Dio.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "dio-brando",
    name: "Dio Brando",
    anime: "JoJo",
    role: "Main Villain",
    description: "A purely evil, deeply ambitious vampire whose hatred for the Joestar bloodline spans generations.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "will-zeppeli",
    name: "Will A. Zeppeli",
    anime: "JoJo",
    role: "Mentor",
    description: "A top-hat wearing master of Hamon who sacrifices himself to teach Jonathan how to fight vampires.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "speedwagon",
    name: "Robert E. O. Speedwagon",
    anime: "JoJo",
    role: "Ally",
    description: "A former street thug turned extremely loyal friend who supports the Joestar family through his foundation.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== PART 2 – Battle Tendency =====
  {
    id: "joseph-joestar",
    name: "Joseph Joestar",
    anime: "JoJo",
    role: "Protagonist",
    description: "A trickster JoJo who uses street smarts, sleight of hand, and Hamon to defeat ancient super-beings.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "caesar-zeppeli",
    name: "Caesar Zeppeli",
    anime: "JoJo",
    role: "Ally",
    description: "An arrogant but honorable Hamon user who fights alongside Joseph using his signature bubble techniques.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kars",
    name: "Kars",
    anime: "JoJo",
    role: "Main Villain",
    description: "The leader of the Pillar Men who seeks the Red Stone of Aja to become the ultimate lifeform.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "esidisi",
    name: "Esidisi",
    anime: "JoJo",
    role: "Pillar Man",
    description: "A terrifying Pillar Man capable of boiling his own blood and injecting it through his veins.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "wamuu",
    name: "Wamuu",
    anime: "JoJo",
    role: "Pillar Man",
    description: "A proud, honorable warrior of the Pillar Men who respects strength and uses devastating wind attacks.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== PART 3 – Stardust Crusaders =====
  {
    id: "jotaro-kujo",
    name: "Jotaro Kujo",
    anime: "JoJo",
    role: "Protagonist",
    description: "A stoic, tough-guy delinquent wielding the incredibly powerful and fast Stand, Star Platinum.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "dio",
    name: "DIO",
    anime: "JoJo",
    role: "Main Villain",
    description: "Returning after 100 years at the bottom of the sea, he now wields 'The World', a time-stopping Stand.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "noriaki-kakyoin",
    name: "Noriaki Kakyoin",
    anime: "JoJo",
    role: "Ally",
    description: "A calm, strategic high schooler who wields the long-range Stand Hierophant Green.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "muhammad-avdol",
    name: "Muhammad Avdol",
    anime: "JoJo",
    role: "Ally",
    description: "An Egyptian fortune teller and master of the fire-manipulating Stand, Magician's Red.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "jean-pierre-polnareff",
    name: "Jean Pierre Polnareff",
    anime: "JoJo",
    role: "Ally",
    description: "A passionate, oft-comical French swordsman who fights with Silver Chariot to avenge his sister.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "iggy",
    name: "Iggy",
    anime: "JoJo",
    role: "Ally",
    description: "A coffee-gum loving Boston Terrier with a nasty attitude and the sand-based Stand, The Fool.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== PART 4 – Diamond is Unbreakable =====
  {
    id: "josuke-higashikata",
    name: "Josuke Higashikata",
    anime: "JoJo",
    role: "Protagonist",
    description: "Joseph's illegitimate son, a pompadour-wearing teen whose Stand, Crazy Diamond, can fix broken objects.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "koichi-hirose",
    name: "Koichi Hirose",
    anime: "JoJo",
    role: "Ally",
    description: "A short, initially timid boy who grows incredibly brave as his Stand, Echoes, evolves.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "okuyasu-nijimura",
    name: "Okuyasu Nijimura",
    anime: "JoJo",
    role: "Ally",
    description: "A dim-witted but golden-hearted bro who wields The Hand, a Stand that erases space.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rohan-kishibe",
    name: "Rohan Kishibe",
    anime: "JoJo",
    role: "Mangaka",
    description: "An arrogant, brilliant manga artist whose Stand, Heaven's Door, reads people like literal books.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yoshikage-kira",
    name: "Yoshikage Kira",
    anime: "JoJo",
    role: "Main Villain",
    description: "A quiet salaryman who just wants a peaceful life—while actively operating as a terrifying serial killer.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== PART 5 – Golden Wind =====
  {
    id: "giorno-giovanna",
    name: "Giorno Giovanna",
    anime: "JoJo",
    role: "Protagonist",
    description: "DIO's son, a 'Gang-Star' with a strong sense of justice and the life-giving Stand, Gold Experience.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "bruno-bucciarati",
    name: "Bruno Bucciarati",
    anime: "JoJo",
    role: "Leader",
    description: "A righteous mob capo wielding Sticky Fingers, a Stand that creates zippers on any surface.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "leone-abbacchio",
    name: "Leone Abbacchio",
    anime: "JoJo",
    role: "Ally",
    description: "An ex-cop consumed by guilt whose Stand, Moody Blues, can 'replay' past events.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "guido-mista",
    name: "Guido Mista",
    anime: "JoJo",
    role: "Ally",
    description: "A gunslinger with intense tetraphobia (fear of the number 4) and six bullet-guiding spirits.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "narancia",
    name: "Narancia Ghirga",
    anime: "JoJo",
    role: "Ally",
    description: "A fiercely loyal but uneducated teen who fights using a miniature fighter plane Stand, Aerosmith.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "trish-una",
    name: "Trish Una",
    anime: "JoJo",
    role: "Ally",
    description: "The boss's daughter who discovers her own Stand, Spice Girl, to defend herself against assassins.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "diavolo",
    name: "Diavolo",
    anime: "JoJo",
    role: "Main Villain",
    description: "The paranoid Boss of Passione who uses King Crimson to erase time and ensure he remains at the top.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== PART 6 – Stone Ocean =====
  {
    id: "jolyne-cujoh",
    name: "Jolyne Cujoh",
    anime: "JoJo",
    role: "Protagonist",
    description: "Jotaro's rebellious daughter, framed for murder, who awakens the string-manipulating Stand Stone Free.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "enrico-pucci",
    name: "Enrico Pucci",
    anime: "JoJo",
    role: "Main Villain",
    description: "A fanatical priest devoted to DIO's ideals, seeking 'Heaven' by accelerating the universe itself.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "weather-report",
    name: "Weather Report",
    anime: "JoJo",
    role: "Ally",
    description: "An amnesiac prisoner wielding a devastating weather-controlling Stand.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ermes-costello",
    name: "Ermes Costello",
    anime: "JoJo",
    role: "Ally",
    description: "A tough inmate seeking revenge for her sister's death, using a Stand that duplicates objects with stickers.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== PART 7 – Steel Ball Run =====
  {
    id: "johnny-joestar",
    name: "Johnny Joestar",
    anime: "JoJo",
    role: "Protagonist",
    description: "A paraplegic former horse-racing prodigy who joins a cross-country race to learn the secret of the Spin.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "gyro-zeppeli",
    name: "Gyro Zeppeli",
    anime: "JoJo",
    role: "Ally",
    description: "An eccentric Neapolitan executioner who enters the race to save an innocent child, armed with steel balls.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "funny-valentine",
    name: "Funny Valentine",
    anime: "JoJo",
    role: "Main Villain",
    description: "The highly patriotic U.S. President who utilizes parallel dimensions to secure prosperity for America.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "diego-brando",
    name: "Diego Brando",
    anime: "JoJo",
    role: "Rival",
    description: "An ambitious British jockey in the Steel Ball Run race capable of transforming into a dinosaur.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== PART 8 – JoJolion =====
  {
    id: "josuke-part8",
    name: "Josuke (Part 8)",
    anime: "JoJo",
    role: "Protagonist",
    description: "An amnesiac sailor found buried in the ground, trying to uncover his true identity in Morioh.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tooru",
    name: "Tooru",
    anime: "JoJo",
    role: "Main Villain",
    description: "A Rock Human orchestrating a massive smuggling ring using a Stand that attacks via pure calamity.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Popular Stand Users =====
  {
    id: "star-platinum",
    name: "Star Platinum",
    anime: "JoJo",
    role: "Stand",
    description: "Jotaro's incredibly precise and immensely powerful Stand, capable of stopping time.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "the-world",
    name: "The World",
    anime: "JoJo",
    role: "Stand",
    description: "DIO's signature Stand, heavily armored and boasting the terrifying ability to halt time entirely.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "killer-queen",
    name: "Killer Queen",
    anime: "JoJo",
    role: "Stand",
    description: "Kira's Stand that can turn absolutely anything it touches into a deadly, traceless bomb.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "gold-experience",
    name: "Gold Experience",
    anime: "JoJo",
    role: "Stand",
    description: "Giorno's Stand that can imbue objects with life energy, later evolving into a reality-resetting god tier.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "king-crimson",
    name: "King Crimson",
    anime: "JoJo",
    role: "Stand",
    description: "Diavolo's insanely complex Stand that skips brief segments of time and predicts the immediate future.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "made-in-heaven",
    name: "Made in Heaven",
    anime: "JoJo",
    role: "Stand",
    description: "Pucci's ultimate Stand that accelerates time continuously until the universe resets.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Main
  {
    id: "kafka-hibino",
    name: "Kafka Hibino",
    anime: "Kaiju No. 8",
    role: "Protagonist / Kaiju No. 8",
    description: "A middle-aged monster sweeper who accidentally ingests a parasitic Kaiju, gaining immense shapeshifting powers.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "reno-ichikawa",
    name: "Reno Ichikawa",
    anime: "Kaiju No. 8",
    role: "Support",
    description: "A sharp, ambitious new recruit who covers for Kafka's secret and pushes him to join the Defense Force.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kikoru-shinomiya",
    name: "Kikoru Shinomiya",
    anime: "Kaiju No. 8",
    role: "Elite Cadet",
    description: "A highly privileged, heavily armed prodigy who wields a massive battle axe with devastating efficiency.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "mina-ashiro",
    name: "Mina Ashiro",
    anime: "Kaiju No. 8",
    role: "Captain",
    description: "Kafka's childhood friend and the awe-inspiring Captain of the 3rd Division, wielding heavy firearms.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Defense Force – 3rd Division
  {
    id: "gen-narumi",
    name: "Gen Narumi",
    anime: "Kaiju No. 8",
    role: "Captain",
    description: "An eccentric gamer and otaku who transforms into a ruthless, peerless fighter on the battlefield.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "soshiro-hoshina",
    name: "Soshiro Hoshina",
    anime: "Kaiju No. 8",
    role: "Vice Captain",
    description: "A perpetually smiling sword specialist who serves as Mina's right hand and excels at close-quarters combat.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "iori-furuhashi",
    name: "Iori Furuhashi",
    anime: "Kaiju No. 8",
    role: "Officer",
    description: "A cadet who specializes in long-range support and steadily grows into a reliable sniper.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "haruichi-izumo",
    name: "Haruichi Izumo",
    anime: "Kaiju No. 8",
    role: "Officer",
    description: "A wealthy heir to a tech conglomerate who uses his sharp intellect and gear to excel in battle.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "aoi-kaguragi",
    name: "Aoi Kaguragi",
    anime: "Kaiju No. 8",
    role: "Officer",
    description: "An intimidating ex-military officer who leverages brute physical strength to support his squad.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Shinomiya Family
  {
    id: "isao-shinomiya",
    name: "Isao Shinomiya",
    anime: "Kaiju No. 8",
    role: "Defense Force Director",
    description: "Kikoru's demanding father and a legendary fighter equipped with Kaiju No. 2's gauntlets.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Kaiju
  {
    id: "kaiju-no-9",
    name: "Kaiju No. 9",
    anime: "Kaiju No. 8",
    role: "Main Antagonist",
    description: "A deeply sinister, highly intelligent humanoid Kaiju capable of speech, disguise, and absorbing others.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kaiju-no-10",
    name: "Kaiju No. 10",
    anime: "Kaiju No. 8",
    role: "Intelligent Kaiju",
    description: "A massive, battle-obsessed Kaiju that leads a pterodactyl swarm against the 3rd Division base.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kaiju-no-2",
    name: "Kaiju No. 2",
    anime: "Kaiju No. 8",
    role: "Legendary Kaiju",
    description: "An ancient, highly destructive monster whose remains were forged into Isao Shinomiya's weapon.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Defense Force High Command
  {
    id: "keiji-itami",
    name: "Keiji Itami",
    anime: "Kaiju No. 8",
    role: "Officer",
    description: "A high-ranking official within the Defense Force involved in large-scale strategic operations.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Additional Cadets & Officers
  {
    id: "eiji-hasegawa",
    name: "Eiji Hasegawa",
    anime: "Kaiju No. 8",
    role: "Officer",
    description: "An experienced Defense Force soldier acting as operational support during major incursions.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rin-shinomiya",
    name: "Rin Shinomiya",
    anime: "Kaiju No. 8",
    role: "Family Member",
    description: "A member of the esteemed Shinomiya family, deeply connected to Isao and Kikoru's tragic past.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Important Supporting
  {
    id: "kafkas-mother",
    name: "Kafka's Mother",
    anime: "Kaiju No. 8",
    role: "Backstory",
    description: "A figure from Kafka's past whose memory drives his underlying desire to protect people.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Numbered Weapon Hosts
  {
    id: "numbered-weapon-user-1",
    name: "Numbered Weapon User 1",
    anime: "Kaiju No. 8",
    role: "Elite Soldier",
    description: "An elite operative chosen to wield a highly dangerous weapon crafted from a Daikaiju core.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Company 8 (Main Squad) =====
  {
    id: "shinra-kusakabe",
    name: "Shinra Kusakabe",
    anime: "Fire Force",
    role: "Protagonist",
    description: "The 'Devil', a fast-kicking Third Generation pyrokinetic determined to be a hero and find his brother.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "arthur-boyle",
    name: "Arthur Boyle",
    anime: "Fire Force",
    role: "Knight / Soldier",
    description: "A dense but incredibly strong swordsman who fuels his plasma blade with his medieval knight delusions.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "maki-oze",
    name: "Maki Oze",
    anime: "Fire Force",
    role: "Second Generation",
    description: "A muscular ex-military Second Generation who is an absolute powerhouse in close-quarters combat.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "takehisa-hinawa",
    name: "Takehisa Hinawa",
    anime: "Fire Force",
    role: "Lieutenant",
    description: "The stern, no-nonsense Lieutenant of Company 8 who manipulates gunpowder and bullets with terrifying precision.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "akitaru-obi",
    name: "Akitaru Obi",
    anime: "Fire Force",
    role: "Captain",
    description: "An unpowered but insanely heavily trained firefighter who leads Company 8 with overwhelming bravery.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "iris",
    name: "Iris",
    anime: "Fire Force",
    role: "Sister",
    description: "A gentle nun of the Holy Sol Temple who provides prayers and last rites for the Infernals.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tamaki-kotatsu",
    name: "Tamaki Kotatsu",
    anime: "Fire Force",
    role: "Soldier",
    description: "A Third Gen cursed with 'Lucky Lecher Lure', utilizing pink nekomata flames in combat.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "viktor-licht",
    name: "Viktor Licht",
    anime: "Fire Force",
    role: "Scientist",
    description: "A highly suspicious but brilliant scientific researcher assigned to monitor Company 8.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Company 1 =====
  {
    id: "leonard-burns",
    name: "Leonard Burns",
    anime: "Fire Force",
    role: "Captain",
    description: "The eyepatch-wearing Captain of Company 1 whose internal heat generation makes him a physical tank.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rekka-hoshimiya",
    name: "Rekka Hoshimiya",
    anime: "Fire Force",
    role: "Lieutenant",
    description: "An overly enthusiastic Company 1 officer secretly working to artificially create Adolla Bursts in children.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Company 2 =====
  {
    id: "gustav-honda",
    name: "Gustav Honda",
    anime: "Fire Force",
    role: "Captain",
    description: "The bald, highly militant Captain of Company 2 who takes a strictly structural approach to firefighting.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Company 5 =====
  {
    id: "hibana",
    name: "Hibana",
    anime: "Fire Force",
    role: "Captain",
    description: "A cynical, flower-flame wielding captain who views everyone as 'gravel' until Shinra punches some sense into her.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "toru-kishiri",
    name: "Toru Kishiri",
    anime: "Fire Force",
    role: "Lieutenant",
    description: "An arrogant Company 5 member who attacks by blowing explosive bubblegum.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Company 7 =====
  {
    id: "benimaru-shinmon",
    name: "Benimaru Shinmon",
    anime: "Fire Force",
    role: "Captain",
    description: "The strongest Fire Soldier in Tokyo, uniquely wielding both Second and Third Generation powers in Asakusa.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "konro-sagamiya",
    name: "Konro Sagamiya",
    anime: "Fire Force",
    role: "Lieutenant",
    description: "Benimaru's calm, highly respected right-hand man suffering from tephrosis after a massive fight.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Evangelist / White-Clad =====
  {
    id: "sho-kusakabe",
    name: "Sho Kusakabe",
    anime: "Fire Force",
    role: "Antagonist",
    description: "Shinra's kidnapped younger brother, an angelic White-Clad commander capable of severing the universe's expansion.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "haumea",
    name: "Haumea",
    anime: "Fire Force",
    role: "White-Clad",
    description: "A chaotic, crown-wearing Pillar who controls minds via electrical signals in the nervous system.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "charon",
    name: "Charon",
    anime: "Fire Force",
    role: "White-Clad",
    description: "A blindfolded fanatic acting as Haumea's guardian, absorbing and reflecting kinetic energy in combat.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "inca-kasugatani",
    name: "Inca Kasugatani",
    anime: "Fire Force",
    role: "Pillar",
    description: "An adrenaline-junkie who 'reads' the paths of flames, eagerly joining the Evangelist's forces for thrills.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "arrow",
    name: "Arrow",
    anime: "Fire Force",
    role: "White-Clad",
    description: "Sho's stoic bodyguard, capable of sniping targets from incredible distances with flaming arrows.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "dragon",
    name: "Dragon",
    anime: "Fire Force",
    role: "Elite White-Clad",
    description: "A monstrously powerful White-Clad enforcer completely convinced he is an actual, unkillable dragon.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "evangelist",
    name: "The Evangelist",
    anime: "Fire Force",
    role: "Main Villain",
    description: "A mysterious, god-like entity originating from the Adolla dimension, seeking to engulf the world in flames.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Other Important =====
  {
    id: "joker",
    name: "Joker",
    anime: "Fire Force",
    role: "Anti-Hero",
    description: "A shadowy, chain-smoking figure with ties to the Holy Sol Temple's dark assassins.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "vulcan-joseph",
    name: "Vulcan Joseph",
    anime: "Fire Force",
    role: "Engineer",
    description: "A brilliant, animal-loving inventor who outfits Company 8 with top-tier gear.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "giovanni",
    name: "Dr. Giovanni",
    anime: "Fire Force",
    role: "Scientist",
    description: "A deeply unsettling mad scientist covered in a plague mask, aligned with the White-Clad.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "nataku-son",
    name: "Nataku Son",
    anime: "Fire Force",
    role: "Pillar",
    description: "A pressured child who is awakened as a Pillar by Rekka's horrific experiments.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Main
  {
    id: "taro-sakamoto",
    name: "Taro Sakamoto",
    anime: "Sakamoto Days",
    role: "Protagonist / Ex-Assassin",
    description: "A legendary former hitman who gained weight for love and now runs a peaceful convenience store.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "shin-asakura",
    name: "Shin Asakura",
    anime: "Sakamoto Days",
    role: "Telepath / Support",
    description: "A clairvoyant former assassin who admires Sakamoto deeply and works alongside him at the shop.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "lu-xiaotang",
    name: "Lu Xiaotang",
    anime: "Sakamoto Days",
    role: "Support",
    description: "A carefree triad daughter who fights using an incredibly potent mix of drunken fist and alcohol.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "aoi-sakamoto",
    name: "Aoi Sakamoto",
    anime: "Sakamoto Days",
    role: "Family",
    description: "Taro's loving wife, whose absolute 'no killing' rule is the only thing Sakamoto truly fears.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hana-sakamoto",
    name: "Hana Sakamoto",
    anime: "Sakamoto Days",
    role: "Family",
    description: "Sakamoto's sweet, innocent young daughter who is entirely oblivious to her father's violent past.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // The Order (Elite Assassins)
  {
    id: "nagumo",
    name: "Nagumo",
    anime: "Sakamoto Days",
    role: "Order Member",
    description: "Sakamoto's mysterious and deeply deceptive old friend, a master of disguise within the Order.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "shishiba",
    name: "Shishiba",
    anime: "Sakamoto Days",
    role: "Order Member",
    description: "A calm, highly rational Order member who cleanly dissects his targets using a specialized hammer.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "osaragi",
    name: "Osaragi",
    anime: "Sakamoto Days",
    role: "Order Member",
    description: "Shishiba's aloof, Gothic Lolita-wearing partner who ruthlessly slaughters enemies with an oversized buzzsaw.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hyo",
    name: "Hyo",
    anime: "Sakamoto Days",
    role: "Order Member",
    description: "A physically towering Order member whose terrifying appearance hides a deeply caring nature.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kamihate",
    name: "Kamihate",
    anime: "Sakamoto Days",
    role: "Order Member",
    description: "An eccentric, reclusive sniper who refuses to be seen, executing impossible shots from afar.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // JAA
  {
    id: "kindaka",
    name: "Kindaka",
    anime: "Sakamoto Days",
    role: "JAA Trainer",
    description: "A blisteringly fast former JAA head who mentored the young generation of elite hitmen.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sakamoto-young",
    name: "Young Sakamoto",
    anime: "Sakamoto Days",
    role: "Flashback Assassin",
    description: "The slim, ultra-lethal iteration of Taro before he decided to settle down and retire.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Villains
  {
    id: "slur",
    name: "Slur (X)",
    anime: "Sakamoto Days",
    role: "Main Antagonist",
    description: "A rogue entity leading a highly dangerous syndicate to completely dismantle the JAA's assassin society.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "gaku",
    name: "Gaku",
    anime: "Sakamoto Days",
    role: "Antagonist",
    description: "A laid-back but brutal combat prodigy working for Slur, wielding a massive high-tech mace.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "uzuki",
    name: "Uzuki Kei",
    anime: "Sakamoto Days",
    role: "Antagonist",
    description: "Sakamoto's former classmate who harbors terrifying alternate personalities connected to Slur.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kashima",
    name: "Kashima",
    anime: "Sakamoto Days",
    role: "Antagonist",
    description: "A heavily modified cyborg assassin with a reindeer mask, fighting relentlessly for Slur's ideology.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Other Important
  {
    id: "boiled",
    name: "Boiled",
    anime: "Sakamoto Days",
    role: "Assassin",
    description: "A hard-boiled hitman obsessed with cinematic explosiveness and intense rivalries.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "apart",
    name: "Apart",
    anime: "Sakamoto Days",
    role: "Assassin",
    description: "A disturbed killer utilizing ultra-thin wires to slice victims into neat little pieces.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kanaguri",
    name: "Kanaguri",
    anime: "Sakamoto Days",
    role: "Movie Assassin",
    description: "An eccentric, lethal director who will slaughter anyone to capture the perfect cinematic masterpiece.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Main =====
  {
    id: "mash-burnedead",
    name: "Mash Burnedead",
    anime: "Mashle",
    role: "Protagonist",
    description: "A deadpan, magicless boy who solves complex arcane problems using his absurdly overwhelming physical strength.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "regro-burnedead",
    name: "Regro Burnedead",
    anime: "Mashle",
    role: "Guardian",
    description: "Mash's overly anxious adoptive father who raised him in isolation to protect him from society.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Easton Magic Academy (Friends) =====
  {
    id: "finn-ames",
    name: "Finn Ames",
    anime: "Mashle",
    role: "Support",
    description: "Mash's easily terrified roommate who serves as the reasonable straight-man to the group's chaotic antics.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "lance-crown",
    name: "Lance Crown",
    anime: "Mashle",
    role: "Elite Student",
    description: "A talented gravity-magic user driven by a severe sister-complex, deeply protective of his ill sibling.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "dot-barrett",
    name: "Dot Barrett",
    anime: "Mashle",
    role: "Student",
    description: "A hot-blooded, incredibly loud explosion magic user who hates good-looking guys with a burning passion.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "lemon-irvine",
    name: "Lemon Irvine",
    anime: "Mashle",
    role: "Student",
    description: "A deeply obsessed girl who considers herself Mash's future wife after he unknowingly saves her.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Divine Visionaries =====
  {
    id: "rayne-ames",
    name: "Rayne Ames",
    anime: "Mashle",
    role: "Divine Visionary",
    description: "Finn's stoic older brother, wielding powerful sword magic as the youngest Divine Visionary.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "wahlberg-baigan",
    name: "Wahlberg Baigan",
    anime: "Mashle",
    role: "Headmaster",
    description: "The wise, incredibly powerful Headmaster of Easton who fundamentally challenges the magical society's prejudices.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ryoh-grantz",
    name: "Ryoh Grantz",
    anime: "Mashle",
    role: "Divine Visionary",
    description: "A flashy and flamboyant captain wielding light magic, always demanding everything be 'glorious'.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kaldo-gehennah",
    name: "Kaldo Gehenna",
    anime: "Mashle",
    role: "Divine Visionary",
    description: "A laid-back flame magic user who loves adding an unhealthy amount of honey to his food.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "tsurara-halestone",
    name: "Tsurara Halestone",
    anime: "Mashle",
    role: "Divine Visionary",
    description: "A perpetually freezing, deeply antisocial Divine Visionary who commands powerful ice magic.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Magia Lupus (Arc Villains) =====
  {
    id: "abyss-razor",
    name: "Abyss Razor",
    anime: "Mashle",
    role: "Antagonist",
    description: "A masked wizard cursed with the 'Evil Eye', deeply loyal to Abel for showing him kindness.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "abel-walker",
    name: "Abel Walker",
    anime: "Mashle",
    role: "Antagonist",
    description: "The puppet-master leader of Magia Lupus, viewing weaker students as mere playthings to be manipulated.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "wirth-madel",
    name: "Wirth Madel",
    anime: "Mashle",
    role: "Antagonist",
    description: "An arrogant mud-magic user obsessed with status until Lance fundamentally breaks his pride.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Main Villain Side =====
  {
    id: "innocent-zero",
    name: "Innocent Zero",
    anime: "Mashle",
    role: "Main Antagonist",
    description: "A terrifyingly powerful dark wizard obsessed with achieving eternal life and perfection, tied directly to Mash.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "doom",
    name: "Doom",
    anime: "Mashle",
    role: "Antagonist",
    description: "Innocent Zero's strongest son, a physical powerhouse capable of utilizing a massive percentage of his body's potential.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "famin",
    name: "Famin",
    anime: "Mashle",
    role: "Antagonist",
    description: "A sadistic, playful son of Innocent Zero who wields powerful spatial magic.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "delisaster",
    name: "Delisaster",
    anime: "Mashle",
    role: "Antagonist",
    description: "A party-loving, chaotic member of Innocent Zero's family with destructive tendencies.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Easton Students (Important) =====
  {
    id: "orcho",
    name: "Orcho",
    anime: "Mashle",
    role: "Student",
    description: "An unpleasant student quickly shut down by Mash early in their academy days.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "silva-iron",
    name: "Silva Iron",
    anime: "Mashle",
    role: "Student",
    description: "A two-line magic user who tests the freshmen via brutal combat before being demolished by Mash.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "max-land",
    name: "Max Land",
    anime: "Mashle",
    role: "Student",
    description: "A helpful older student who befriends Mash and shares his knowledge regarding Easton's politics.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // Main
  {
    id: "cid-kagenou",
    name: "Cid Kagenou",
    anime: "The Eminence in Shadow",
    role: "Protagonist / Shadow",
    description: "An insanely overpowered teen wholly dedicated to roleplaying a mastermind who controls the world from the shadows.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "minoru-kagenou",
    name: "Minoru Kagenou",
    anime: "The Eminence in Shadow",
    role: "Past Life",
    description: "Cid's identity on Earth, where he trained rigorously and violently before being hit by a truck.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Shadow Garden – Seven Shades =====
  {
    id: "alpha",
    name: "Alpha",
    anime: "The Eminence in Shadow",
    role: "Shadow Garden Leader",
    description: "The flawless, elven second-in-command who genuinely runs the entire massive Shadow Garden organization.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "beta",
    name: "Beta",
    anime: "The Eminence in Shadow",
    role: "Seven Shades",
    description: "A wildly successful author who obsessively records Shadow's 'heroic' deeds in an extremely biased chronicle.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "gamma",
    name: "Gamma",
    anime: "The Eminence in Shadow",
    role: "Seven Shades",
    description: "The clumsy but brilliant financial backbone of Shadow Garden, expanding their massive corporate empire.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "delta",
    name: "Delta",
    anime: "The Eminence in Shadow",
    role: "Seven Shades",
    description: "A ferocious, dog-like beastkin who solves absolutely every single problem with extreme brute force.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "epsilon",
    name: "Epsilon",
    anime: "The Eminence in Shadow",
    role: "Seven Shades",
    description: "A vain elf who uses masterful slime magic strictly to pad her figure and boost her self-esteem.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "zeta",
    name: "Zeta",
    anime: "The Eminence in Shadow",
    role: "Seven Shades",
    description: "A stealthy feline operative deeply devoted to Shadow's cause, operating largely on her own agenda.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "eta",
    name: "Eta",
    anime: "The Eminence in Shadow",
    role: "Seven Shades",
    description: "A narcoleptic genius researcher reverse-engineering Cid's casual Earth knowledge into terrifying fantasy technology.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Numbered Members =====
  {
    id: "nu",
    name: "Nu",
    anime: "The Eminence in Shadow",
    role: "Shadow Garden Member",
    description: "A seemingly polite former noblewoman who becomes chillingly ruthless when executing enemies of Shadow.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "lambda",
    name: "Lambda",
    anime: "The Eminence in Shadow",
    role: "Shadow Garden Member",
    description: "A strict, military-minded dark elf responsible for training the lower ranks of the organization.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "omega",
    name: "Omega",
    anime: "The Eminence in Shadow",
    role: "Shadow Garden Member",
    description: "An operative heavily involved in carrying out Shadow Garden's intelligence and enforcement tasks.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Royal Family =====
  {
    id: "alexia-midgar",
    name: "Alexia Midgar",
    anime: "The Eminence in Shadow",
    role: "Princess",
    description: "A deeply cynical princess who uses Cid as a fake boyfriend and wields a distinctly unrefined sword style.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "iris-midgar",
    name: "Iris Midgar",
    anime: "The Eminence in Shadow",
    role: "Princess",
    description: "Alexia's sister and the kingdom's strongest knight, whose rigid beliefs are shattered by Shadow's power.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "rose-oriana",
    name: "Rose Oriana",
    anime: "The Eminence in Shadow",
    role: "Princess",
    description: "An arts-focused princess who radically changes her life to pursue swordplay and her intense crush on Cid.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== School & Allies =====
  {
    id: "sherry-barnett",
    name: "Sherry Barnett",
    anime: "The Eminence in Shadow",
    role: "Scholar",
    description: "A brilliant, socially awkward artifact researcher whose life is destroyed by her adoptive father's crimes.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "claire-kagenou",
    name: "Claire Kagenou",
    anime: "The Eminence in Shadow",
    role: "Sister",
    description: "Cid's overbearing older sister who constantly strong-arms him while remaining completely ignorant of his dual life.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Cult of Diablos =====
  {
    id: "diablos",
    name: "Diablos",
    anime: "The Eminence in Shadow",
    role: "Ancient Entity",
    description: "The monstrously powerful demon of legend whose severed body parts grant immortality to the Cult.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "lutheran",
    name: "Lutheran Barnett",
    anime: "The Eminence in Shadow",
    role: "Cult Leader",
    description: "Sherry's seemingly frail adoptive father who ruthlessly orchestrates terror attacks for the Cult.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "nelson",
    name: "Nelson",
    anime: "The Eminence in Shadow",
    role: "Cult Member",
    description: "The balding, heavily stressed acting Archbishop and a key figure within the Cult's operations.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "mordred",
    name: "Mordred",
    anime: "The Eminence in Shadow",
    role: "Cult Member",
    description: "A high-ranking Knight of Rounds who commands significant military and magical forces against Shadow Garden.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Other Important =====
  {
    id: "juggernaut",
    name: "Juggernaut",
    anime: "The Eminence in Shadow",
    role: "Warrior",
    description: "A hulking brute operating out of the Lawless City, utilizing sheer physical dominance in combat.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "geta",
    name: "Gettan",
    anime: "The Eminence in Shadow",
    role: "Antagonist",
    description: "A blind swordmaster manipulating John Smith's economic crash to steal wealth for the Cult.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Main – Kingdom of Science =====
  {
    id: "senku-ishigami",
    name: "Senku Ishigami",
    anime: "Dr. Stone",
    role: "Protagonist / Scientist",
    description: "A ten-billion-percent brilliant teenager working to revive all 7 billion humans using the power of science.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "taiju-oki",
    name: "Taiju Oki",
    anime: "Dr. Stone",
    role: "Support",
    description: "Senku's incredibly loud, relentlessly durable best friend who serves as the Kingdom's main source of physical labor.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "yuzuriha-ogawa",
    name: "Yuzuriha Ogawa",
    anime: "Dr. Stone",
    role: "Support",
    description: "A highly skilled crafts club member who painstakingly reassembles shattered stone statues piece by piece.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "chrome",
    name: "Chrome",
    anime: "Dr. Stone",
    role: "Scientist",
    description: "A primitive villager who dubs himself a 'sorcerer', quickly becoming Senku's most reliable scientific partner.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kohaku",
    name: "Kohaku",
    anime: "Dr. Stone",
    role: "Warrior",
    description: "A fiercely loyal, unbelievably agile warrior often affectionately called a 'lioness' by Senku.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ginro",
    name: "Ginro",
    anime: "Dr. Stone",
    role: "Guard",
    description: "A cowardly, easily corrupted village guard who occasionally rises to the occasion when it truly matters.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kinro",
    name: "Kinro",
    anime: "Dr. Stone",
    role: "Guard",
    description: "Ginro's strictly rule-abiding older brother, equipped with bad eyesight until he finally receives a pair of glasses.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "suika",
    name: "Suika",
    anime: "Dr. Stone",
    role: "Scout",
    description: "An adorable little girl wearing a melon shell who functions as an unparalleled scout and gatherer.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "gen-asagiri",
    name: "Gen Asagiri",
    anime: "Dr. Stone",
    role: "Mentalist",
    description: "A silver-tongued magician and psychologist who manipulates enemies for the Kingdom in exchange for cola.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kaseki",
    name: "Kaseki",
    anime: "Dr. Stone",
    role: "Craftsman",
    description: "A massively muscular elderly artisan whose unmatched crafting skills turn Senku's blueprints into reality.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ukyo-saionji",
    name: "Ukyo Saionji",
    anime: "Dr. Stone",
    role: "Archer",
    description: "A former sonar operator with superhuman hearing and expert archery skills who values a no-kill policy.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "francois",
    name: "Francois",
    anime: "Dr. Stone",
    role: "Butler / Chef",
    description: "Ryusui's highly professional, gender-ambiguous butler capable of cooking five-star meals in the Stone World.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "ryusui-nanami",
    name: "Ryusui Nanami",
    anime: "Dr. Stone",
    role: "Navigator",
    description: "An outrageously greedy, highly skilled sailor aiming to possess everything the new world has to offer.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Tsukasa Empire =====
  {
    id: "tsukasa-shishio",
    name: "Tsukasa Shishio",
    anime: "Dr. Stone",
    role: "Antagonist",
    description: "The 'Strongest Primate High Schooler', seeking to purge corrupt adults to create a pure youth-led utopia.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "hyoga",
    name: "Hyoga",
    anime: "Dr. Stone",
    role: "Warrior",
    description: "A ruthless spear master who values efficiency above all else, secretly plotting to rule the world himself.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "homura-momiji",
    name: "Homura Momiji",
    anime: "Dr. Stone",
    role: "Scout",
    description: "A hyper-flexible gymnast deeply loyal to Hyoga, utilized for sabotage and surveillance.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Ishigami Village Elders =====
  {
    id: "ruri",
    name: "Ruri",
    anime: "Dr. Stone",
    role: "Priestess",
    description: "Kohaku's sickly older sister, tasked with preserving the Hundred Tales left behind by the village founders.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kokuyo",
    name: "Kokuyo",
    anime: "Dr. Stone",
    role: "Village Chief",
    description: "The gruff, traditionalist chief of Ishigami Village and the father of Kohaku and Ruri.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Treasure Island Arc =====
  {
    id: "ibara",
    name: "Ibara",
    anime: "Dr. Stone",
    role: "Main Antagonist",
    description: "A deeply paranoid, terrifying dictator possessing a petrification device to brutally control his island.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "kirisame",
    name: "Kirisame",
    anime: "Dr. Stone",
    role: "Warrior",
    description: "Ibara's strongest, most loyal warrior, trusting him blindly while tossing petrification weapons from above.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "soyuz",
    name: "Soyuz",
    anime: "Dr. Stone",
    role: "Leader",
    description: "A timid member of Senku's crew revealed to be the rightful, photographic-memory heir to Treasure Island.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Major Global Arc =====
  {
    id: "stanley-snyder",
    name: "Stanley Snyder",
    anime: "Dr. Stone",
    role: "Sniper",
    description: "A highly lethal, chain-smoking American Special Forces sniper who doggedly hunts the Kingdom of Science.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "dr-xeno",
    name: "Dr. Xeno",
    anime: "Dr. Stone",
    role: "Scientist Antagonist",
    description: "Senku's brilliant former NASA mentor, seeking to control humanity through military might instead of cooperation.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "chelsea",
    name: "Chelsea",
    anime: "Dr. Stone",
    role: "Geographer",
    description: "A highly energetic, genius geographer capable of mapping entirely new continents purely from memory.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "luna-wright",
    name: "Luna Wright",
    anime: "Dr. Stone",
    role: "Support",
    description: "A former medical student acting as an espionage agent, quickly swayed by her deep crush on Senku.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Historical / Flashback =====
  {
    id: "byakuya-ishigami",
    name: "Byakuya Ishigami",
    anime: "Dr. Stone",
    role: "Astronaut",
    description: "Senku's endlessly supportive adoptive father who founded Ishigami Village after surviving the global petrification.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "lillian-weinberg",
    name: "Lillian Weinberg",
    anime: "Dr. Stone",
    role: "Singer",
    description: "A world-famous pop star whose beautiful singing voice was perfectly preserved on a glass record.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "connie-lee",
    name: "Connie Lee",
    anime: "Dr. Stone",
    role: "Astronaut",
    description: "One of the original ISS astronauts who helped lay the foundation for humanity's eventual return.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "darya-nikitina",
    name: "Darya Nikitina",
    anime: "Dr. Stone",
    role: "Astronaut",
    description: "A skilled Russian doctor and ISS crew member essential to the survival of the village founders.",
    poster: "/posters/naruto-uzumaki.jpg",
  },

  // ===== Mystery Entity =====
  {
    id: "why-man",
    name: "Why-Man",
    anime: "Dr. Stone",
    role: "Final Antagonist",
    description: "The mysterious, unseen entity on the Moon constantly broadcasting a signal to petrify humanity.",
    poster: "/posters/naruto-uzumaki.jpg",
  }
];

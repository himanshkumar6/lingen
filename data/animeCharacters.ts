export interface AnimeCharacter {
  id: string;
  name: string;
  anime: string;
  role: string;
  description: string;
  poster: string; // Licensed official poster URL
}

export const ANIME_CHARACTERS: AnimeCharacter[] = [
  // --- NARUTO ---
  {
    id: "naruto-uzumaki",
    name: "Naruto Uzumaki",
    anime: "Naruto",
    role: "Protagonist",
    description:
      "The unpredictable ninja who dreams of becoming Hokage and never goes back on his word.",
    poster: "/posters/naruto-uzumaki.jpg",
  },
  {
    id: "sasuke-uchiha",
    name: "Sasuke Uchiha",
    anime: "Naruto",
    role: "Deuteragonist",
    description:
      "The last of the Uchiha, driven by revenge and wielding the legendary Sharingan.",
    poster: "/posters/sasuke-uchiha.jpg",
  },
  {
    id: "itachi-uchiha",
    name: "Itachi Uchiha",
    anime: "Naruto",
    role: "Anti-Hero",
    description:
      "The tragic prodigy who sacrificed his reputation and clan to protect his village and little brother.",
    poster: "/posters/itachi-uchiha.jpg",
  },
  {
    id: "madara-uchiha",
    name: "Madara Uchiha",
    anime: "Naruto",
    role: "Main Villain",
    description:
      "The ghost of the Uchiha, bringing absolute despair and god-like power to the battlefield.",
    poster: "/posters/madara-uchiha.jpg",
  },
  {
    id: "kakashi-hatake",
    name: "Kakashi Hatake",
    anime: "Naruto",
    role: "Mentor",
    description:
      "The legendary Copy Ninja who hides his pain behind a laid-back attitude and a mask.",
    poster: "/posters/kakashi-hatake.jpg",
  },
  {
    id: "obito-uchiha",
    name: "Obito Uchiha",
    anime: "Naruto",
    role: "Villain",
    description:
      "A fallen hero who manipulated the ninja world from the shadows after losing the love of his life.",
    poster: "/posters/obito-uchiha.jpg",
  },
  {
    id: "jiraiya",
    name: "Jiraiya",
    anime: "Naruto",
    role: "Mentor",
    description:
      "The Toad Sage and legendary Sannin who passed down his will of fire to Naruto.",
    poster: "/posters/jiraiya.jpg",
  },
  {
    id: "minato-namikaze",
    name: "Minato Namikaze",
    anime: "Naruto",
    role: "Hokage",
    description: "The Yellow Flash of the Leaf and the heroic Fourth Hokage.",
    poster: "/posters/minato-namikaze.jpg",
  },
  {
    id: "pain-nagato",
    name: "Nagato (Pain)",
    anime: "Naruto",
    role: "Villain",
    description:
      "The leader of the Akatsuki who believes the world must know true pain to find peace.",
    poster: "/posters/pain-nagato.jpg",
  },
  {
    id: "gaara",
    name: "Gaara",
    anime: "Naruto",
    role: "Kazekage",
    description:
      "Once a murderous monster, he was redeemed by Naruto and became the respected leader of the Sand.",
    poster: "/posters/gaara.jpg",
  },
  {
    id: "shikamaru-nara",
    name: "Shikamaru Nara",
    anime: "Naruto",
    role: "Support",
    description: "A lazy but brilliant tactician with an IQ over 200.",
    poster: "/posters/shikamaru-nara.jpg",
  },
  {
    id: "might-guy",
    name: "Might Guy",
    anime: "Naruto",
    role: "Support",
    description:
      "The Noble Green Beast of the Hidden Leaf and a master of Taijutsu.",
    poster: "/posters/might-guy.jpg",
  },
  {
    id: "hinata-hyuga",
    name: "Hinata Hyuga",
    anime: "Naruto",
    role: "Support",
    description:
      "A shy but determined kunoichi whose love for Naruto gave her the courage to fight.",
    poster: "/posters/hinata-hyuga.jpg",
  },
  {
    id: "hashirama-senju",
    name: "Hashirama Senju",
    anime: "Naruto",
    role: "Hokage",
    description:
      "The First Hokage and 'God of Shinobi', possessing unmatched Wood Release.",
    poster: "/posters/hashirama-senju.jpg",
  },
  {
    id: "orochimaru",
    name: "Orochimaru",
    anime: "Naruto",
    role: "Villain",
    description:
      "A rogue Sannin obsessed with learning every jutsu and achieving immortality.",
    poster: "/posters/orochimaru.jpg",
  },

  // --- ONE PIECE ---
  {
    id: "monkey-d-luffy",
    name: "Monkey D. Luffy",
    anime: "One Piece",
    role: "Protagonist",
    description:
      "The fearless captain destined to find the One Piece and become the Pirate King.",
    poster: "/posters/monkey-d-luffy.jpg",
  },
  {
    id: "roronoa-zoro",
    name: "Roronoa Zoro",
    anime: "One Piece",
    role: "Right-Hand Man",
    description:
      "The badass three-sword style master aiming to become the world's strongest swordsman.",
    poster: "/posters/roronoa-zoro.jpg",
  },
  {
    id: "sanji",
    name: "Sanji",
    anime: "One Piece",
    role: "Fighter/Cook",
    description:
      "The chivalrous chef of the Straw Hats who fights using only his devastating kicks.",
    poster: "/posters/sanji.jpg",
  },
  {
    id: "shanks",
    name: "Shanks",
    anime: "One Piece",
    role: "Yonko",
    description:
      "The charismatic, immensely powerful Emperor of the Sea who inspired Luffy's journey.",
    poster: "/posters/shanks.jpg",
  },
  {
    id: "trafalgar-law",
    name: "Trafalgar D. Water Law",
    anime: "One Piece",
    role: "Ally/Rival",
    description:
      "The 'Surgeon of Death' whose tactical mind and Op-Op Fruit make him a lethal pirate.",
    poster: "/posters/trafalgar-law.jpg",
  },
  {
    id: "portgas-d-ace",
    name: "Portgas D. Ace",
    anime: "One Piece",
    role: "Ally",
    description:
      "Luffy's beloved sworn brother and the fire-wielding commander of the Whitebeard Pirates.",
    poster: "/posters/portgas-d-ace.jpg",
  },
  {
    id: "mihawk",
    name: "Dracule Mihawk",
    anime: "One Piece",
    role: "Warlord",
    description:
      "The stoic 'World's Strongest Swordsman' and Zoro's ultimate goal.",
    poster: "/posters/mihawk.jpg",
  },
  {
    id: "kaido",
    name: "Kaido",
    anime: "One Piece",
    role: "Yonko",
    description:
      "The strongest creature in the world, an indestructible Emperor who can turn into a dragon.",
    poster: "/posters/kaido.jpg",
  },
  {
    id: "whitebeard",
    name: "Edward Newgate (Whitebeard)",
    anime: "One Piece",
    role: "Yonko",
    description:
      "The legendary 'Strongest Man in the World' who values family above all treasure.",
    poster: "/posters/whitebeard.jpg",
  },
  {
    id: "blackbeard",
    name: "Marshall D. Teach (Blackbeard)",
    anime: "One Piece",
    role: "Main Villain",
    description:
      "An opportunistic and ruthless pirate who broke the rules by wielding two Devil Fruits.",
    poster: "/posters/blackbeard.jpg",
  },
  {
    id: "doflamingo",
    name: "Donquixote Doflamingo",
    anime: "One Piece",
    role: "Villain",
    description:
      "A flamboyant and sadistic underworld broker who ruled Dressrosa with iron strings.",
    poster: "/posters/doflamingo.jpg",
  },
  {
    id: "katakuri",
    name: "Charlotte Katakuri",
    anime: "One Piece",
    role: "Antagonist",
    description:
      "An honorable commander whose advanced Observation Haki lets him see slightly into the future.",
    poster: "/posters/katakuri.jpg",
  },
  {
    id: "yamato",
    name: "Yamato",
    anime: "One Piece",
    role: "Ally",
    description:
      "Kaido's child who fiercely idolizes Oden and fights to liberate Wano.",
    poster: "/posters/yamato.jpg",
  },
  {
    id: "crocodile",
    name: "Sir Crocodile",
    anime: "One Piece",
    role: "Villain",
    description:
      "A cunning mob boss with sand manipulation powers who attempted to conquer Alabasta.",
    poster: "/posters/crocodile.jpg",
  },
  {
    id: "akainu",
    name: "Sakazuki (Akainu)",
    anime: "One Piece",
    role: "Villain",
    description:
      "The uncompromising, magma-powered Fleet Admiral who believes in 'Absolute Justice'.",
    poster: "/posters/akainu.jpg",
  },

  // --- JUJUTSU KAISEN ---
  {
    id: "satoru-gojo",
    name: "Satoru Gojo",
    anime: "Jujutsu Kaisen",
    role: "The Strongest",
    description:
      "The untouchable modern sorcerer possessing the Six Eyes. Throughout heaven and earth, he alone is the honored one.",
    poster: "/posters/satoru-gojo.jpg",
  },
  {
    id: "ryomen-sukuna",
    name: "Ryomen Sukuna",
    anime: "Jujutsu Kaisen",
    role: "King of Curses",
    description:
      "The absolute pinnacle of jujutsu sorcery, a malicious and overwhelming force of nature.",
    poster: "/posters/ryomen-sukuna.jpg",
  },
  {
    id: "toji-fushiguro",
    name: "Toji Fushiguro",
    anime: "Jujutsu Kaisen",
    role: "Sorcerer Killer",
    description:
      "An anomaly with zero cursed energy but god-tier physical prowess who broke the jujutsu world.",
    poster: "/posters/toji-fushiguro.jpg",
  },
  {
    id: "yuji-itadori",
    name: "Yuji Itadori",
    anime: "Jujutsu Kaisen",
    role: "Protagonist",
    description:
      "A kind-hearted powerhouse who suffers immensely but never stops fighting for humanity.",
    poster: "/posters/yuji-itadori.jpg",
  },
  {
    id: "megumi-fushiguro",
    name: "Megumi Fushiguro",
    anime: "Jujutsu Kaisen",
    role: "Deuteragonist",
    description: "A stoic prodigy wielding the Ten Shadows Technique.",
    poster: "/posters/megumi-fushiguro.jpg",
  },
  {
    id: "yuta-okkotsu",
    name: "Yuta Okkotsu",
    anime: "Jujutsu Kaisen",
    role: "Special Grade",
    description:
      "A humble but immensely powerful Special Grade sorcerer haunted by the spirit of his childhood friend.",
    poster: "/posters/yuta-okkotsu.jpg",
  },
  {
    id: "suguru-geto",
    name: "Suguru Geto",
    anime: "Jujutsu Kaisen",
    role: "Antagonist",
    description:
      "Gojo's former best friend who grew disgusted with humanity and sought a world only for sorcerers.",
    poster: "/posters/suguru-geto.jpg",
  },
  {
    id: "maki-zenin",
    name: "Maki Zenin",
    anime: "Jujutsu Kaisen",
    role: "Sorcerer",
    description:
      "A defiant fighter born with no cursed energy who relies on unmatched physical prowess.",
    poster: "/posters/maki-zenin.jpg",
  },
  {
    id: "kento-nanami",
    name: "Kento Nanami",
    anime: "Jujutsu Kaisen",
    role: "Mentor",
    description:
      "A stoic former salaryman who returned to being a sorcerer because it's 'slightly less idiotic' than normal work.",
    poster: "/posters/kento-nanami.jpg",
  },
  {
    id: "mahito",
    name: "Mahito",
    anime: "Jujutsu Kaisen",
    role: "Villain",
    description:
      "A twisted, philosophical curse born from human hatred capable of reshaping souls with his touch.",
    poster: "/posters/mahito.jpg",
  },
  {
    id: "aoi-todo",
    name: "Aoi Todo",
    anime: "Jujutsu Kaisen",
    role: "Ally",
    description:
      "An eccentric, muscle-bound powerhouse who bases his friendships entirely on people's taste in women.",
    poster: "/posters/aoi-todo.jpg",
  },
  {
    id: "choso",
    name: "Choso",
    anime: "Jujutsu Kaisen",
    role: "Ally",
    description:
      "A Death Painting Womb who discovers his deep brotherly connection to Itadori and fiercely protects him.",
    poster: "/posters/choso.jpg",
  },

  // --- ATTACK ON TITAN ---
  {
    id: "eren-yeager",
    name: "Eren Yeager",
    anime: "Attack on Titan",
    role: "Protagonist/Antagonist",
    description:
      "A boy who sought freedom so desperately that he became the world's greatest threat.",
    poster: "/posters/eren-yeager.jpg",
  },
  {
    id: "levi-ackerman",
    name: "Levi Ackerman",
    anime: "Attack on Titan",
    role: "Captain",
    description:
      "Humanity's Strongest Soldier, an intensely skilled fighter who spins through Titans like a buzzsaw.",
    poster: "/posters/levi-ackerman.jpg",
  },
  {
    id: "mikasa-ackerman",
    name: "Mikasa Ackerman",
    anime: "Attack on Titan",
    role: "Support",
    description:
      "A quiet, exceptionally deadly soldier whose primary motivation is protecting Eren at all costs.",
    poster: "/posters/mikasa-ackerman.jpg",
  },
  {
    id: "erwin-smith",
    name: "Erwin Smith",
    anime: "Attack on Titan",
    role: "Commander",
    description:
      "The brilliant, charismatic, and ruthless commander of the Survey Corps driven by a desire for truth.",
    poster: "/posters/erwin-smith.jpg",
  },
  {
    id: "reiner-braun",
    name: "Reiner Braun",
    anime: "Attack on Titan",
    role: "Anti-Hero",
    description:
      "The guilt-ridden Armored Titan who suffers from a fractured psyche due to his actions as a warrior.",
    poster: "/posters/reiner-braun.jpg",
  },
  {
    id: "zeke-yeager",
    name: "Zeke Yeager",
    anime: "Attack on Titan",
    role: "Antagonist",
    description:
      "Eren's half-brother and the Beast Titan, pushing a secret plan to euthanize the Eldian race.",
    poster: "/posters/zeke-yeager.jpg",
  },
  {
    id: "armin-arlert",
    name: "Armin Arlert",
    anime: "Attack on Titan",
    role: "Strategist",
    description:
      "A highly intelligent, empathetic tactician who dreams of seeing the world outside the walls.",
    poster: "/posters/armin-arlert.jpg",
  },
  {
    id: "hange-zoe",
    name: "Hange Zoe",
    anime: "Attack on Titan",
    role: "Commander",
    description:
      "An eccentric researcher who later takes on the heavy burden of commanding the Survey Corps.",
    poster: "/posters/hange-zoe.jpg",
  },

  // --- DEMON SLAYER ---
  {
    id: "tanjiro-kamado",
    name: "Tanjiro Kamado",
    anime: "Demon Slayer",
    role: "Protagonist",
    description:
      "A kind, unbreakable swordsman wielding both Water and Sun breathing to save his sister.",
    poster: "/posters/tanjiro-kamado.jpg",
  },
  {
    id: "nezuko-kamado",
    name: "Nezuko Kamado",
    anime: "Demon Slayer",
    role: "Deuteragonist",
    description:
      "Tanjiro's demon sister who fights alongside him, refusing to consume humans.",
    poster: "/posters/nezuko-kamado.jpg",
  },
  {
    id: "zenitsu-agatsuma",
    name: "Zenitsu Agatsuma",
    anime: "Demon Slayer",
    role: "Support",
    description:
      "A cowardly Slayer who becomes a lightning-fast, deadly swordsman when he falls asleep out of terror.",
    poster: "/posters/zenitsu-agatsuma.jpg",
  },
  {
    id: "inosuke-hashibira",
    name: "Inosuke Hashibira",
    anime: "Demon Slayer",
    role: "Support",
    description:
      "A boar-mask-wearing, highly flexible fighter raised by animals who loves rushing into battle.",
    poster: "/posters/inosuke-hashibira.jpg",
  },
  {
    id: "kyojuro-rengoku",
    name: "Kyojuro Rengoku",
    anime: "Demon Slayer",
    role: "Flame Hashira",
    description:
      "The blazing heart of the Demon Slayer corps who set his heart on fire to protect everyone.",
    poster: "/posters/kyojuro-rengoku.jpg",
  },
  {
    id: "giyu-tomioka",
    name: "Giyu Tomioka",
    anime: "Demon Slayer",
    role: "Water Hashira",
    description:
      "The stoic and socially awkward Water Hashira who first spared Nezuko's life.",
    poster: "/posters/giyu-tomioka.jpg",
  },
  {
    id: "tengen-uzui",
    name: "Tengen Uzui",
    anime: "Demon Slayer",
    role: "Sound Hashira",
    description:
      "A flashy, dual-cleaver wielding former shinobi and the flamboyant Sound Hashira.",
    poster: "/posters/tengen-uzui.jpg",
  },
  {
    id: "muichiro-tokito",
    name: "Muichiro Tokito",
    anime: "Demon Slayer",
    role: "Mist Hashira",
    description: "The young, forgetful, and highly talented Mist Hashira.",
    poster: "/posters/muichiro-tokito.jpg",
  },
  {
    id: "muzan-kibutsuji",
    name: "Muzan Kibutsuji",
    anime: "Demon Slayer",
    role: "Main Villain",
    description:
      "The cold, terrifying progenitor of all demons seeking absolute perfection and immunity to the sun.",
    poster: "/posters/muzan-kibutsuji.jpg",
  },
  {
    id: "kokushibo",
    name: "Kokushibo",
    anime: "Demon Slayer",
    role: "Upper Moon 1",
    description:
      "The highest-ranking Upper Moon, a former Demon Slayer who uses Moon Breathing.",
    poster: "/posters/kokushibo.jpg",
  },
  {
    id: "akaza",
    name: "Akaza",
    anime: "Demon Slayer",
    role: "Upper Moon 3",
    description:
      "A martial arts-obsessed Upper Moon who respects strength above all else.",
    poster: "/posters/akaza.jpg",
  },

  // --- DRAGON BALL ---
  {
    id: "goku",
    name: "Goku",
    anime: "Dragon Ball",
    role: "Protagonist",
    description:
      "The legendary Saiyan warrior who constantly breaks his limits to fight the strongest in the multiverse.",
    poster: "/posters/goku.jpg",
  },
  {
    id: "vegeta",
    name: "Vegeta",
    anime: "Dragon Ball",
    role: "Rival",
    description:
      "The proud Prince of all Saiyans, fueled by immense pride and an eternal rivalry with Goku.",
    poster: "/posters/vegeta.jpg",
  },
  {
    id: "gohan",
    name: "Gohan",
    anime: "Dragon Ball",
    role: "Fighter",
    description:
      "Goku's scholarly son who harbors immense hidden potential that unleashes during times of great crisis.",
    poster: "/posters/gohan.jpg",
  },
  {
    id: "piccolo",
    name: "Piccolo",
    anime: "Dragon Ball",
    role: "Mentor",
    description:
      "A stoic Namekian warrior who started as Goku's enemy but became Gohan's greatest mentor.",
    poster: "/posters/piccolo.jpg",
  },
  {
    id: "future-trunks",
    name: "Future Trunks",
    anime: "Dragon Ball",
    role: "Fighter",
    description:
      "A serious, sword-wielding warrior from a ruined timeline who travels to the past to save the world.",
    poster: "/posters/future-trunks.jpg",
  },
  {
    id: "frieza",
    name: "Frieza",
    anime: "Dragon Ball",
    role: "Villain",
    description:
      "An incredibly arrogant, genocidal galactic tyrant responsible for the destruction of the Saiyan race.",
    poster: "/posters/frieza.jpg",
  },
  {
    id: "cell",
    name: "Cell",
    anime: "Dragon Ball",
    role: "Villain",
    description:
      "A bio-android containing the DNA of the universe's greatest fighters, seeking to achieve his 'Perfect' form.",
    poster: "/posters/cell.jpg",
  },
  {
    id: "broly",
    name: "Broly",
    anime: "Dragon Ball",
    role: "Fighter",
    description:
      "A gentle giant holding the untamable, catastrophic power of the Legendary Super Saiyan.",
    poster: "/posters/broly.jpg",
  },
  {
    id: "beerus",
    name: "Beerus",
    anime: "Dragon Ball",
    role: "God of Destruction",
    description:
      "The cat-like God of Destruction of Universe 7, driven primarily by his immense love for Earth's food.",
    poster: "/posters/beerus.jpg",
  },

  // --- BLEACH ---
  {
    id: "ichigo-kurosaki",
    name: "Ichigo Kurosaki",
    anime: "Bleach",
    role: "Protagonist",
    description:
      "A hot-headed substitute Soul Reaper carrying the powers of almost every race to protect his world.",
    poster: "/posters/ichigo-kurosaki.jpg",
  },
  {
    id: "aizen-sosuke",
    name: "Sosuke Aizen",
    anime: "Bleach",
    role: "Main Villain",
    description:
      "The dangerously charismatic mastermind who planned everything. 'Since when were you under the impression...'",
    poster: "/posters/aizen-sosuke.jpg",
  },
  {
    id: "kenpachi-zaraki",
    name: "Kenpachi Zaraki",
    anime: "Bleach",
    role: "Captain",
    description:
      "A terrifying, battle-crazed Captain who limits his own power just to enjoy fights longer.",
    poster: "/posters/kenpachi-zaraki.jpg",
  },
  {
    id: "byakuya-kuchiki",
    name: "Byakuya Kuchiki",
    anime: "Bleach",
    role: "Captain",
    description:
      "The aristocratic, rule-abiding Captain of Squad 6 wielding a deadly petal-like Zanpakuto.",
    poster: "/posters/byakuya-kuchiki.jpg",
  },
  {
    id: "kisuke-urahara",
    name: "Kisuke Urahara",
    anime: "Bleach",
    role: "Mentor",
    description:
      "A brilliant, exiled scientist disguised as a humble candy shop owner who orchestrates the world's defense.",
    poster: "/posters/kisuke-urahara.jpg",
  },
  {
    id: "ulquiorra-cifer",
    name: "Ulquiorra Cifer",
    anime: "Bleach",
    role: "Espada",
    description:
      "The cold, nihilistic 4th Espada who seeks to understand the concept of a 'heart'.",
    poster: "/posters/ulquiorra-cifer.jpg",
  },
  {
    id: "grimmjow",
    name: "Grimmjow Jaegerjaquez",
    anime: "Bleach",
    role: "Espada",
    description:
      "The feral, destruction-loving 6th Espada who develops an intense rivalry with Ichigo.",
    poster: "/posters/grimmjow.jpg",
  },
  {
    id: "yhwach",
    name: "Yhwach",
    anime: "Bleach",
    role: "Main Villain",
    description:
      "The almighty Father of the Quincies who seeks to collapse life and death into a single world.",
    poster: "/posters/yhwach.jpg",
  },
  // --- MY HERO ACADEMIA ---
  {
    id: "izuku-midoriya",
    name: "Izuku Midoriya",
    anime: "My Hero Academia",
    role: "Protagonist",
    description:
      "The selfless hero who inherited One For All to become the world's greatest symbol of peace.",
    poster: "/posters/izuku-midoriya.jpg",
  },
  {
    id: "katsuki-bakugo",
    name: "Katsuki Bakugo",
    anime: "My Hero Academia",
    role: "Rival",
    description:
      "An explosive, intensely competitive prodigy demanding absolute victory in every fight.",
    poster: "/posters/katsuki-bakugo.jpg",
  },
  {
    id: "shoto-todoroki",
    name: "Shoto Todoroki",
    anime: "My Hero Academia",
    role: "Deuteragonist",
    description:
      "A calm and incredibly powerful student wielding both ice and fire.",
    poster: "/posters/shoto-todoroki.jpg",
  },
  {
    id: "all-might",
    name: "All Might",
    anime: "My Hero Academia",
    role: "Symbol of Peace",
    description:
      "The endlessly smiling former Number One Hero who inspired an entire generation.",
    poster: "/posters/all-might.jpg",
  },
  {
    id: "dabi",
    name: "Dabi",
    anime: "My Hero Academia",
    role: "Villain",
    description:
      "A scarred, blue-flame wielding villain harboring a devastating grudge against his family.",
    poster: "/posters/dabi.jpg",
  },
  {
    id: "tomura-shigaraki",
    name: "Tomura Shigaraki",
    anime: "My Hero Academia",
    role: "Main Villain",
    description:
      "The successor to All For One, a deeply traumatized villain whose touch decays everything.",
    poster: "/posters/tomura-shigaraki.jpg",
  },

  // --- JOJO'S BIZARRE ADVENTURE ---
  {
    id: "jotaro-kujo",
    name: "Jotaro Kujo",
    anime: "JoJo's Bizarre Adventure",
    role: "Protagonist (Part 3)",
    description:
      "A stoic, tough-guy delinquent wielding the incredibly powerful and fast Stand, Star Platinum.",
    poster: "/posters/jotaro-kujo.jpg",
  },
  {
    id: "dio-brando",
    name: "DIO",
    anime: "JoJo's Bizarre Adventure",
    role: "Main Villain",
    description:
      "The iconic, deeply ambitious vampire who wields 'The World', a time-stopping Stand.",
    poster: "/posters/dio-brando.jpg",
  },
  {
    id: "giorno-giovanna",
    name: "Giorno Giovanna",
    anime: "JoJo's Bizarre Adventure",
    role: "Protagonist (Part 5)",
    description:
      "A 'Gang-Star' with a strong sense of justice and the life-giving Stand, Gold Experience.",
    poster: "/posters/giorno-giovanna.jpg",
  },
  {
    id: "yoshikage-kira",
    name: "Yoshikage Kira",
    anime: "JoJo's Bizarre Adventure",
    role: "Villain (Part 4)",
    description:
      "A quiet salaryman who just wants a peaceful life—while operating as a terrifying serial killer.",
    poster: "/posters/yoshikage-kira.jpg",
  },

  // --- SOLO LEVELING ---
  {
    id: "sung-jinwoo",
    name: "Sung Jin-Woo",
    anime: "Solo Leveling",
    role: "Shadow Monarch",
    description:
      "From the world's weakest hunter to the absolute monarch of shadows. 'Arise.'",
    poster: "/posters/sung-jinwoo.jpg",
  },
  {
    id: "igris",
    name: "Igris",
    anime: "Solo Leveling",
    role: "Shadow General",
    description:
      "The loyal, incredibly badass blood-red knight who serves as Jin-Woo's most iconic shadow.",
    poster: "/posters/igris.jpg",
  },
  {
    id: "beru",
    name: "Beru",
    anime: "Solo Leveling",
    role: "Shadow Marshal",
    description:
      "The horrifying Ant King who becomes Jin-Woo's fanatically loyal and powerful shadow.",
    poster: "/posters/beru.jpg",
  },
  {
    id: "cha-haein",
    name: "Cha Hae-In",
    anime: "Solo Leveling",
    role: "S-Rank Hunter",
    description:
      "A master swordswoman and Korea's top female hunter, uniquely sensitive to the smell of mana.",
    poster: "/posters/cha-haein.jpg",
  },

  // --- CHAINSAW MAN ---
  {
    id: "denji",
    name: "Denji",
    anime: "Chainsaw Man",
    role: "Protagonist",
    description:
      "A wild, unpredictable teen who fights brutal devils just to live a normal life with good food.",
    poster: "/posters/denji.jpg",
  },
  {
    id: "makima",
    name: "Makima",
    anime: "Chainsaw Man",
    role: "Control Devil",
    description:
      "A deeply unsettling, manipulative force of nature who views humans merely as dogs to be controlled.",
    poster: "/posters/makima.jpg",
  },
  {
    id: "power",
    name: "Power",
    anime: "Chainsaw Man",
    role: "Blood Fiend",
    description:
      "A narcissistic, unhygienic Blood Fiend who becomes Denji's chaotic adopted sister.",
    poster: "/posters/power.jpg",
  },
  {
    id: "aki-hayakawa",
    name: "Aki Hayakawa",
    anime: "Chainsaw Man",
    role: "Devil Hunter",
    description:
      "A serious, heavily burdened Devil Hunter who seeks revenge on the Gun Devil.",
    poster: "/posters/aki-hayakawa.jpg",
  },

  // --- BLUE LOCK ---
  {
    id: "yoichi-isagi",
    name: "Yoichi Isagi",
    anime: "Blue Lock",
    role: "Egoist / Playmaker",
    description:
      "The adaptable striker who devours his opponents' strategies using his elite spatial awareness.",
    poster: "/posters/yoichi-isagi.jpg",
  },
  {
    id: "rin-itoshi",
    name: "Rin Itoshi",
    anime: "Blue Lock",
    role: "Genius Striker",
    description:
      "A cold, calculating prodigy who dominates the field and crushes his opponents' spirits.",
    poster: "/posters/rin-itoshi.jpg",
  },
  {
    id: "seishiro-nagi",
    name: "Seishiro Nagi",
    anime: "Blue Lock",
    role: "Prodigy",
    description:
      "An initially unmotivated genius with flawless trapping abilities and immense natural talent.",
    poster: "/posters/seishiro-nagi.jpg",
  },
  {
    id: "meguru-bachira",
    name: "Meguru Bachira",
    anime: "Blue Lock",
    role: "Dribbler",
    description:
      "An eccentric and joyful dribbling prodigy who plays football guided by the 'monster' inside him.",
    poster: "/posters/meguru-bachira.jpg",
  },
  {
    id: "michael-kaiser",
    name: "Michael Kaiser",
    anime: "Blue Lock",
    role: "World-Class Striker",
    description:
      "A highly arrogant German prodigy known for his impossibly fast 'Kaiser Impact' shot.",
    poster: "/posters/michael-kaiser.jpg",
  },

  // --- TOKYO REVENGERS ---
  {
    id: "manjiro-sano",
    name: "Manjiro Sano (Mikey)",
    anime: "Tokyo Revengers",
    role: "Gang Leader",
    description:
      "The 'Invincible' leader of Toman, hiding a terrifying dark impulse behind a boyish smile.",
    poster: "/posters/manjiro-sano.jpg",
  },
  {
    id: "ken-ryuguji",
    name: "Ken Ryuguji (Draken)",
    anime: "Tokyo Revengers",
    role: "Vice Leader",
    description:
      "Mikey's tall, tattooed right-hand man who serves as the moral 'heart' of Toman.",
    poster: "/posters/ken-ryuguji.jpg",
  },
  {
    id: "keisuke-baji",
    name: "Keisuke Baji",
    anime: "Tokyo Revengers",
    role: "Captain",
    description:
      "A founding member of Toman who goes to extreme, tragic lengths to protect his friends.",
    poster: "/posters/keisuke-baji.jpg",
  },

  // --- HUNTER X HUNTER ---
  {
    id: "killua-zoldyck",
    name: "Killua Zoldyck",
    anime: "Hunter x Hunter",
    role: "Assassin",
    description:
      "A lightning-fast assassin prodigy trying to escape his dark family legacy and protect his best friend.",
    poster: "/posters/killua-zoldyck.jpg",
  },
  {
    id: "hisoka-morow",
    name: "Hisoka Morow",
    anime: "Hunter x Hunter",
    role: "Wildcard",
    description:
      "A deadly, unpredictable magician who lives purely for the thrill of fighting strong opponents.",
    poster: "/posters/hisoka-morow.jpg",
  },
  {
    id: "chrollo-lucilfer",
    name: "Chrollo Lucilfer",
    anime: "Hunter x Hunter",
    role: "Phantom Troupe Leader",
    description:
      "The calm, philosophical leader of the Phantom Troupe who can steal other people's Nen abilities.",
    poster: "/posters/chrollo-lucilfer.jpg",
  },
  {
    id: "meruem",
    name: "Meruem",
    anime: "Hunter x Hunter",
    role: "Antagonist",
    description:
      "The terrifying Chimera Ant King who discovers his humanity through a blind board game player.",
    poster: "/posters/meruem.jpg",
  },

  // --- DEATH NOTE ---
  {
    id: "light-yagami",
    name: "Light Yagami",
    anime: "Death Note",
    role: "Kira",
    description:
      "A brilliant student who develops a massive god complex after finding a notebook that kills.",
    poster: "/posters/light-yagami.jpg",
  },
  {
    id: "l-lawliet",
    name: "L Lawliet",
    anime: "Death Note",
    role: "Detective",
    description:
      "The eccentric, sugar-addicted genius detective who is the only mind capable of matching Kira.",
    poster: "/posters/l-lawliet.jpg",
  },

  // --- CULT CLASSICS & SEINEN TIER ---
  {
    id: "ayanokoji-kiyotaka",
    name: "Kiyotaka Ayanokoji",
    anime: "Classroom of the Elite",
    role: "Mastermind",
    description:
      "The emotionless genius from the White Room who treats all human beings purely as tools to win.",
    poster: "/posters/ayanokoji-kiyotaka.jpg",
  },
  {
    id: "ken-kaneki",
    name: "Ken Kaneki",
    anime: "Tokyo Ghoul",
    role: "Protagonist",
    description:
      "A tragic half-ghoul who embraces his dark side to protect the ones he loves.",
    poster: "/posters/ken-kaneki.jpg",
  },
  {
    id: "lelouch-lamperouge",
    name: "Lelouch Lamperouge",
    anime: "Code Geass",
    role: "Mastermind",
    description:
      "An exiled prince who uses the mind-controlling power of Geass to overthrow a global empire.",
    poster: "/posters/lelouch-lamperouge.jpg",
  },
  {
    id: "thorfinn",
    name: "Thorfinn",
    anime: "Vinland Saga",
    role: "Protagonist",
    description:
      "A bitter warrior consumed by revenge who eventually dedicates his life to finding true peace.",
    poster: "/posters/thorfinn.jpg",
  },
  {
    id: "saitama",
    name: "Saitama",
    anime: "One Punch Man",
    role: "Protagonist",
    description:
      "A hero for fun who became so overwhelmingly strong that he defeats any enemy with a single punch.",
    poster: "/posters/saitama.jpg",
  },
  {
    id: "garou",
    name: "Garou",
    anime: "One Punch Man",
    role: "Antagonist",
    description:
      "The Hero Hunter who uses peerless martial arts to push himself toward becoming the ultimate monster.",
    poster: "/posters/garou.jpg",
  },
  // --- LOOKISM (Highly Viral for Edits) ---
  {
    id: "daniel-park",
    name: "Daniel Park",
    anime: "Lookism",
    role: "Protagonist",
    description:
      "A heavily bullied teen who wakes up with a second, perfect body, eventually mastering UI (Ultra Instinct) to become a top-tier fighter.",
    poster: "/posters/daniel-park.jpg",
  },
  {
    id: "gun-park",
    name: "Gun Park",
    anime: "Lookism",
    role: "The White Ghost / Legend",
    description:
      "The terrifying 'Training Genius' and yakuza master who commands absolute fear and respect in the fighting world.",
    poster: "/posters/gun-park.jpg",
  },
  {
    id: "goo-kim",
    name: "Goo Kim",
    anime: "Lookism",
    role: "Weapon Genius",
    description:
      "Gun's eccentric, cheerful counterpart who turns into an absolute monster the moment he grabs anything resembling a weapon.",
    poster: "/posters/goo-kim.jpg",
  },
  {
    id: "james-lee",
    name: "James Lee",
    anime: "Lookism",
    role: "The Peak",
    description:
      "The flawless 'Legend of the First Generation' who ended an entire era of warfare single-handedly.",
    poster: "/posters/james-lee.jpg",
  },
  {
    id: "johan-seong",
    name: "Johan Seong",
    anime: "Lookism",
    role: "Copy Genius",
    description:
      "A tragic, lone-wolf genius who can perfectly copy any martial art he sees, fighting to cure his mother's blindness.",
    poster: "/posters/johan-seong.jpg",
  },
  {
    id: "jake-kim",
    name: "Jake Kim",
    anime: "Lookism",
    role: "Big Deal Leader",
    description:
      "The charismatic, deeply loyal leader of Big Deal who sacrifices everything to protect his gang.",
    poster: "/posters/jake-kim.jpg",
  },
  {
    id: "vasco",
    name: "Vasco",
    anime: "Lookism",
    role: "Burn Knuckles Leader",
    description:
      "A pure-hearted powerhouse with devastating Muay Thai skills who fights to eradicate all bullies.",
    poster: "/posters/vasco.jpg",
  },

  // --- BLACK CLOVER ---
  {
    id: "asta",
    name: "Asta",
    anime: "Black Clover",
    role: "Protagonist",
    description:
      "A magicless orphan who physically trained his body to its absolute limits, wielding Anti-Magic to defy fate.",
    poster: "/posters/asta.jpg",
  },
  {
    id: "yami-sukehiro",
    name: "Yami Sukehiro",
    anime: "Black Clover",
    role: "Captain",
    description:
      "The gruff, katana-wielding Captain of the Black Bulls who constantly pushes his squad to 'surpass their limits'.",
    poster: "/posters/yami-sukehiro.jpg",
  },
  {
    id: "yuno-grinberryall",
    name: "Yuno Grinberryall",
    anime: "Black Clover",
    role: "Deuteragonist",
    description:
      "Asta's cool-headed prodigy rival, chosen by the four-leaf clover and blessed by the wind spirit.",
    poster: "/posters/yuno-grinberryall.jpg",
  },
  {
    id: "julius-novachrono",
    name: "Julius Novachrono",
    anime: "Black Clover",
    role: "Wizard King",
    description:
      "The immensely powerful, magic-obsessed Wizard King who wields Time Magic.",
    poster: "/posters/julius-novachrono.jpg",
  },
  {
    id: "mereoleona-vermillion",
    name: "Mereoleona Vermillion",
    anime: "Black Clover",
    role: "The Uncrowned Undefeated Lioness",
    description:
      "An incredibly loud, terrifyingly strong royal who fights like a wild beast wrapped in blazing fire.",
    poster: "/posters/mereoleona-vermillion.jpg",
  },

  // --- SAKAMOTO DAYS (Upcoming Hype) ---
  {
    id: "taro-sakamoto",
    name: "Taro Sakamoto",
    anime: "Sakamoto Days",
    role: "Protagonist",
    description:
      "A legendary former hitman who retired for love, gained weight, but is still the deadliest man alive with a ballpoint pen.",
    poster: "/posters/taro-sakamoto.jpg",
  },
  {
    id: "nagumo",
    name: "Nagumo",
    anime: "Sakamoto Days",
    role: "Order Member",
    description:
      "Sakamoto's mysterious, deceptive old friend and a master of disguise who hides lethal skills behind a playful smile.",
    poster: "/posters/nagumo.jpg",
  },
  {
    id: "shishiba",
    name: "Shishiba",
    anime: "Sakamoto Days",
    role: "Order Member",
    description:
      "A calm, highly rational assassin who cleanly dissects his targets using a specialized hammer.",
    poster: "/posters/shishiba.jpg",
  },
  {
    id: "osaragi",
    name: "Osaragi",
    anime: "Sakamoto Days",
    role: "Order Member",
    description:
      "An aloof, Gothic Lolita-wearing assassin who ruthlessly slaughters enemies with a massive buzzsaw.",
    poster: "/posters/osaragi.jpg",
  },
  {
    id: "uzuki-slur",
    name: "Uzuki (Slur)",
    anime: "Sakamoto Days",
    role: "Main Villain",
    description:
      "A rogue entity leading a highly dangerous syndicate to completely dismantle the assassin society.",
    poster: "/posters/uzuki-slur.jpg",
  },

  // --- DANDADAN ---
  {
    id: "momo-ayase",
    name: "Momo Ayase",
    anime: "Dandadan",
    role: "Protagonist",
    description:
      "A brave, foul-mouthed girl with incredible psychokinetic powers who constantly brawls with aliens and spirits.",
    poster: "/posters/momo-ayase.jpg",
  },
  {
    id: "okarun",
    name: "Ken Takakura (Okarun)",
    anime: "Dandadan",
    role: "Protagonist",
    description:
      "An occult nerd who gains supernatural, lightning-fast speed after being cursed by the Turbo Granny.",
    poster: "/posters/okarun.jpg",
  },
  {
    id: "turbo-granny",
    name: "Turbo Granny",
    anime: "Dandadan",
    role: "Yokai/Mascot",
    description:
      "A foul-mouthed, incredibly fast yokai who now resides inside a lucky cat doll.",
    poster: "/posters/turbo-granny.jpg",
  },

  // --- RE:ZERO ---
  {
    id: "subaru-natsuki",
    name: "Subaru Natsuki",
    anime: "Re:Zero",
    role: "Protagonist",
    description:
      "An ordinary teen who uses his traumatizing 'Return by Death' ability to save the people he loves.",
    poster: "/posters/subaru-natsuki.jpg",
  },
  {
    id: "rem",
    name: "Rem",
    anime: "Re:Zero",
    role: "Best Girl / Oni",
    description:
      "A fiercely loyal demon maid wielding a morningstar, possessing one of the most iconic fanbases in anime.",
    poster: "/posters/rem.jpg",
  },
  {
    id: "emilia",
    name: "Emilia",
    anime: "Re:Zero",
    role: "Main Heroine",
    description:
      "A kind-hearted half-elf spirit arts user running for the throne of Lugunica.",
    poster: "/posters/emilia.jpg",
  },
  {
    id: "echidna",
    name: "Echidna",
    anime: "Re:Zero",
    role: "Witch of Greed",
    description:
      "The highly inquisitive and manipulative Witch of Greed who desires to know everything in existence.",
    poster: "/posters/echidna.jpg",
  },

  // --- FIRE FORCE ---
  {
    id: "shinra-kusakabe",
    name: "Shinra Kusakabe",
    anime: "Fire Force",
    role: "Protagonist",
    description:
      "Known as the 'Devil', a fast-kicking pyrokinetic whose speed can literally turn back time.",
    poster: "/posters/shinra-kusakabe.jpg",
  },
  {
    id: "benimaru-shinmon",
    name: "Benimaru Shinmon",
    anime: "Fire Force",
    role: "Captain",
    description:
      "The absolute strongest Fire Soldier, a composed badass who wields both 2nd and 3rd generation powers.",
    poster: "/posters/benimaru-shinmon.jpg",
  },
  {
    id: "arthur-boyle",
    name: "Arthur Boyle",
    anime: "Fire Force",
    role: "Knight",
    description:
      "A dense but insanely strong swordsman who fuels his devastating plasma blade with his medieval delusions.",
    poster: "/posters/arthur-boyle.jpg",
  },

  // --- MASHLE: MAGIC AND MUSCLES ---
  {
    id: "mash-burnedead",
    name: "Mash Burnedead",
    anime: "Mashle",
    role: "Protagonist",
    description:
      "A deadpan, magicless boy who shatters the world's magical laws using his absurdly overwhelming muscles and creampuffs.",
    poster: "/posters/mash-burnedead.jpg",
  },
  {
    id: "rayne-ames",
    name: "Rayne Ames",
    anime: "Mashle",
    role: "Divine Visionary",
    description:
      "A stoic, brutally efficient sword-magic user and the youngest Divine Visionary in history.",
    poster: "/posters/rayne-ames.jpg",
  },

  // --- DR. STONE ---
  {
    id: "senku-ishigami",
    name: "Senku Ishigami",
    anime: "Dr. Stone",
    role: "Protagonist",
    description:
      "A ten-billion-percent genius who uses the power of science to rebuild human civilization from scratch.",
    poster: "/posters/senku-ishigami.jpg",
  },
  {
    id: "tsukasa-shishio",
    name: "Tsukasa Shishio",
    anime: "Dr. Stone",
    role: "Antagonist/Ally",
    description:
      "The 'Strongest Primate High Schooler', a physical god who can catch crossbow bolts barehanded.",
    poster: "/posters/tsukasa-shishio.jpg",
  },

  // --- THE EMINENCE IN SHADOW ---
  {
    id: "cid-kagenou",
    name: "Cid Kagenou (Shadow)",
    anime: "The Eminence in Shadow",
    role: "The Mastermind",
    description:
      "An insanely overpowered teen roleplaying as a mastermind, accidentally saving the world in the most badass ways possible. 'I AM ATOMIC.'",
    poster: "/posters/cid-kagenou.jpg",
  },
  {
    id: "alpha",
    name: "Alpha",
    anime: "The Eminence in Shadow",
    role: "Second in Command",
    description:
      "The flawless, ultra-competent elven leader who genuinely runs the massive Shadow Garden organization.",
    poster: "/posters/alpha.jpg",
  },

  // --- SPY X FAMILY ---
  {
    id: "loid-forger",
    name: "Loid Forger",
    anime: "Spy x Family",
    role: "Spy (Twilight)",
    description:
      "The world's greatest spy who adopts a fake family for world peace, slowly learning to genuinely love them.",
    poster: "/posters/loid-forger.jpg",
  },
  {
    id: "yor-forger",
    name: "Yor Forger",
    anime: "Spy x Family",
    role: "Assassin (Thorn Princess)",
    description:
      "A sweet, socially awkward mother who is secretly an incredibly deadly, superhuman assassin.",
    poster: "/posters/yor-forger.jpg",
  },
  {
    id: "anya-forger",
    name: "Anya Forger",
    anime: "Spy x Family",
    role: "Telepath",
    description:
      "An adorable mind-reading orphan who knows all her parents' secrets and just wants exciting adventures (and peanuts).",
    poster: "/posters/anya-forger.jpg",
  },
  // --- BERSERK (Ultimate Dark Fantasy / Sigma Edits) ---
  {
    id: "guts",
    name: "Guts",
    anime: "Berserk",
    role: "The Black Swordsman",
    description:
      "A tragically cursed warrior who wields a massive slab of iron called the Dragon Slayer, defying fate through pure willpower.",
    poster: "/posters/guts.jpg",
  },
  {
    id: "griffith",
    name: "Griffith",
    anime: "Berserk",
    role: "Main Villain / Savior",
    description:
      "The beautiful but monstrously ambitious leader of the Band of the Hawk who sacrificed everything to achieve his dream.",
    poster: "/posters/griffith.jpg",
  },
  {
    id: "skull-knight",
    name: "Skull Knight",
    anime: "Berserk",
    role: "Mysterious Ally",
    description:
      "An enigmatic, incredibly powerful entity riding a spectral horse, waging an eternal war against the God Hand.",
    poster: "/posters/skull-knight.jpg",
  },

  // --- BAKI (Gym Motivation / Phonk Edits) ---
  {
    id: "baki-hanma",
    name: "Baki Hanma",
    anime: "Baki",
    role: "Protagonist",
    description:
      "A fiercely dedicated underground fighter pushing his body to superhuman limits just to defeat his father.",
    poster: "/posters/baki-hanma.jpg",
  },
  {
    id: "yujiro-hanma",
    name: "Yujiro Hanma",
    anime: "Baki",
    role: "The Ogre",
    description:
      "The 'Strongest Creature on Earth', an absolute monster whose sheer physical presence bends reality and governments.",
    poster: "/posters/yujiro-hanma.jpg",
  },
  {
    id: "kaoru-hanayama",
    name: "Kaoru Hanayama",
    anime: "Baki",
    role: "Yakuza Boss",
    description:
      "A teenage Yakuza boss with unmatched grip strength and a back tattoo that symbolizes absolute honor.",
    poster: "/posters/kaoru-hanayama.jpg",
  },

  // --- CYBERPUNK: EDGERUNNERS (Tragic / Hype Edits) ---
  {
    id: "david-martinez",
    name: "David Martinez",
    anime: "Cyberpunk: Edgerunners",
    role: "Protagonist",
    description:
      "A street kid who chrome-up his body with military-grade cyberware, running straight into a tragic legend.",
    poster: "/posters/david-martinez.jpg",
  },
  {
    id: "lucy-kushinada",
    name: "Lucy",
    anime: "Cyberpunk: Edgerunners",
    role: "Netrunner",
    description:
      "A highly skilled, elusive netrunner who dreams of going to the moon to escape Night City.",
    poster: "/posters/lucy-kushinada.jpg",
  },
  {
    id: "rebecca",
    name: "Rebecca",
    anime: "Cyberpunk: Edgerunners",
    role: "Solo/Mercenary",
    description:
      "A trigger-happy, foul-mouthed edgerunner who is fiercely loyal to David till the bitter end.",
    poster: "/posters/rebecca.jpg",
  },
  {
    id: "adam-smasher",
    name: "Adam Smasher",
    anime: "Cyberpunk: Edgerunners",
    role: "The Boogeyman",
    description:
      "A fully cybernetic, soulless corporate killing machine and Night City's ultimate nightmare.",
    poster: "/posters/adam-smasher.jpg",
  },

  // --- RECORD OF RAGNAROK (Tournament Hype Edits) ---
  {
    id: "adam",
    name: "Adam",
    anime: "Record of Ragnarok",
    role: "Father of Humanity",
    description:
      "The first human, wielding the 'Eyes of the Lord' to copy any divine attack. 'Does a father need a reason to protect his children?'",
    poster: "/posters/adam.jpg",
  },
  {
    id: "zeus",
    name: "Zeus",
    anime: "Record of Ragnarok",
    role: "God of Gods",
    description:
      "The frail-looking but terrifyingly powerful chairman of the gods who fights using a punch that surpasses time.",
    poster: "/posters/zeus.jpg",
  },
  {
    id: "buddha",
    name: "Buddha",
    anime: "Record of Ragnarok",
    role: "Traitor to the Gods",
    description:
      "An effortlessly cool and arrogant deity who betrays the heavens just because he wants to save humanity.",
    poster: "/posters/buddha.jpg",
  },
  {
    id: "kojiro-sasaki",
    name: "Kojiro Sasaki",
    anime: "Record of Ragnarok",
    role: "Humanity's Greatest Loser",
    description:
      "A master swordsman who lost every battle in life but evolved his scanning ability to surpass a god.",
    poster: "/posters/kojiro-sasaki.jpg",
  },

  // --- HAIKYUU!! (Hype Sports Edits) ---
  {
    id: "shoyo-hinata",
    name: "Shoyo Hinata",
    anime: "Haikyuu!!",
    role: "Ultimate Decoy",
    description:
      "A short but unbelievably athletic spiker who uses his insane jumping power to dominate the court.",
    poster: "/posters/shoyo-hinata.jpg",
  },
  {
    id: "tobio-kageyama",
    name: "Tobio Kageyama",
    anime: "Haikyuu!!",
    role: "King of the Court",
    description:
      "A genius, tyrannical setter who learns to use his pinpoint precision for the sake of his team.",
    poster: "/posters/tobio-kageyama.jpg",
  },
  {
    id: "toru-oikawa",
    name: "Toru Oikawa",
    anime: "Haikyuu!!",
    role: "Rival Setter",
    description:
      "A deeply flawed but hard-working captain who relies on bringing out 100% of his teammates' potential.",
    poster: "/posters/toru-oikawa.jpg",
  },
  {
    id: "kotaro-bokuto",
    name: "Kotaro Bokuto",
    anime: "Haikyuu!!",
    role: "Ace Spiker",
    description:
      "An incredibly energetic, moody top-tier Ace who feeds off the crowd's hype to land devastating spikes.",
    poster: "/posters/kotaro-bokuto.jpg",
  },

  // --- KUROKO'S BASKETBALL (Zone / Badass Edits) ---
  {
    id: "tetsuya-kuroko",
    name: "Tetsuya Kuroko",
    anime: "Kuroko's Basketball",
    role: "The Phantom Sixth Man",
    description:
      "An invisible playmaker who uses misdirection to execute impossible passes for his team.",
    poster: "/posters/tetsuya-kuroko.jpg",
  },
  {
    id: "taiga-kagami",
    name: "Taiga Kagami",
    anime: "Kuroko's Basketball",
    role: "Ace",
    description:
      "A highly aggressive, high-jumping prodigy who enters 'The Zone' to battle the Generation of Miracles.",
    poster: "/posters/taiga-kagami.jpg",
  },
  {
    id: "seijuro-akashi",
    name: "Seijuro Akashi",
    anime: "Kuroko's Basketball",
    role: "Absolute Emperor",
    description:
      "The terrifying captain of the Generation of Miracles possessing the Emperor Eye. 'My orders are absolute.'",
    poster: "/posters/seijuro-akashi.jpg",
  },
  {
    id: "daiki-aomine",
    name: "Daiki Aomine",
    anime: "Kuroko's Basketball",
    role: "Unstoppable Scorer",
    description:
      "A streetball genius who became so good he lost his passion. 'The only one who can beat me is me.'",
    poster: "/posters/daiki-aomine.jpg",
  },

  // --- FATE SERIES (God-Tier Animation & Lore Edits) ---
  {
    id: "gilgamesh",
    name: "Gilgamesh",
    anime: "Fate Series",
    role: "King of Heroes",
    description:
      "The oldest and most arrogant king in human history, firing endless legendary weapons from his Gate of Babylon.",
    poster: "/posters/gilgamesh.jpg",
  },
  {
    id: "archer-emiya",
    name: "Archer (Emiya)",
    anime: "Fate Series",
    role: "Counter Guardian",
    description:
      "A cynical, dual-wielding heroic spirit who summons the reality marble 'Unlimited Blade Works'.",
    poster: "/posters/archer-emiya.jpg",
  },
  {
    id: "saber-artoria",
    name: "Saber (Artoria Pendragon)",
    anime: "Fate Series",
    role: "King of Knights",
    description:
      "The noble and powerful King Arthur, wielding the legendary holy sword Excalibur.",
    poster: "/posters/saber-artoria.jpg",
  },

  // --- FRIEREN: BEYOND JOURNEY'S END (New Gen Masterpiece) ---
  {
    id: "frieren",
    name: "Frieren",
    anime: "Frieren: Beyond Journey's End",
    role: "Elven Mage",
    description:
      "A near-immortal, seemingly emotionless elf mage learning the value of human connection centuries after defeating the Demon King.",
    poster: "/posters/frieren.jpg",
  },
  {
    id: "fern",
    name: "Fern",
    anime: "Frieren: Beyond Journey's End",
    role: "Mage Apprentice",
    description:
      "Frieren's stoic, incredibly fast-casting apprentice who acts as the responsible mother-figure of the party.",
    poster: "/posters/fern.jpg",
  },
  {
    id: "stark",
    name: "Stark",
    anime: "Frieren: Beyond Journey's End",
    role: "Warrior",
    description:
      "A cowardly but massively powerful warrior who cleaves through dragons despite his anxiety.",
    poster: "/posters/stark.jpg",
  },
  {
    id: "himmel",
    name: "Himmel",
    anime: "Frieren: Beyond Journey's End",
    role: "The Hero",
    description:
      "The charismatic, slightly narcissistic hero whose unwavering kindness continues to influence the world long after his death.",
    poster: "/posters/himmel.jpg",
  },

  // --- MOB PSYCHO 100 & HELLSING ---
  {
    id: "shigeo-kageyama",
    name: "Shigeo Kageyama (Mob)",
    anime: "Mob Psycho 100",
    role: "Protagonist",
    description:
      "An awkward, gentle middle schooler who happens to be the most powerful psychic on the planet when his emotions hit 100%.",
    poster: "/posters/shigeo-kageyama.jpg",
  },
  {
    id: "arataka-reigen",
    name: "Arataka Reigen",
    anime: "Mob Psycho 100",
    role: "Con Artist / Mentor",
    description:
      "A fraud psychic with 0% power but 100% charisma, surprisingly serving as a genuinely great mentor to Mob.",
    poster: "/posters/arataka-reigen.jpg",
  },
  {
    id: "alucard",
    name: "Alucard",
    anime: "Hellsing Ultimate",
    role: "The No-Life King",
    description:
      "The original vampire, a sadistic, dual-wielding immortal who slaughters ghouls and zealots with a terrifying grin.",
    poster: "/posters/alucard.jpg",
  },
  // --- FULLMETAL ALCHEMIST: BROTHERHOOD (Masterpiece Tier) ---
  {
    id: "edward-elric",
    name: "Edward Elric",
    anime: "Fullmetal Alchemist",
    role: "Protagonist",
    description:
      "The Fullmetal Alchemist, a short but brilliant prodigy who lost his arm and leg trying to resurrect his mother.",
    poster: "/posters/edward-elric.jpg",
  },
  {
    id: "alphonse-elric",
    name: "Alphonse Elric",
    anime: "Fullmetal Alchemist",
    role: "Deuteragonist",
    description:
      "Edward's gentle younger brother whose soul is bound to a massive suit of armor.",
    poster: "/posters/alphonse-elric.jpg",
  },
  {
    id: "roy-mustang",
    name: "Roy Mustang",
    anime: "Fullmetal Alchemist",
    role: "Flame Alchemist",
    description:
      "A highly ambitious and insanely deadly state alchemist who creates massive explosions with a snap of his fingers.",
    poster: "/posters/roy-mustang.jpg",
  },
  {
    id: "king-bradley",
    name: "King Bradley (Wrath)",
    anime: "Fullmetal Alchemist",
    role: "Antagonist",
    description:
      "The ruthless leader of Amestris and a homunculus who wields the Ultimate Eye and unmatched sword skills.",
    poster: "/posters/king-bradley.jpg",
  },

  // --- OSHI NO KO (Viral / Dark Idol Edits) ---
  {
    id: "ai-hoshino",
    name: "Ai Hoshino",
    anime: "Oshi no Ko",
    role: "Legendary Idol",
    description:
      "A mesmerizing, tragically flawed idol whose star-like eyes hide a world of beautiful lies and dark secrets.",
    poster: "/posters/ai-hoshino.jpg",
  },
  {
    id: "aqua-hoshino",
    name: "Aquamarine Hoshino",
    anime: "Oshi no Ko",
    role: "Protagonist",
    description:
      "Ai's reincarnated son, a cold, calculating mastermind willing to manipulate the entire entertainment industry for revenge.",
    poster: "/posters/aqua-hoshino.jpg",
  },
  {
    id: "ruby-hoshino",
    name: "Ruby Hoshino",
    anime: "Oshi no Ko",
    role: "Idol / Deuteragonist",
    description:
      "Aqua's twin sister who inherits her mother's dazzling aura and strives to become the ultimate idol.",
    poster: "/posters/ruby-hoshino.jpg",
  },
  {
    id: "kana-arima",
    name: "Kana Arima",
    anime: "Oshi no Ko",
    role: "Actress / Idol",
    description:
      "A former child acting prodigy with a sharp tongue but deep insecurities, completely devoted to her craft.",
    poster: "/posters/kana-arima.jpg",
  },

  // --- JOJO'S BIZARRE ADVENTURE (Parts 6 & 7 - Pure Hype) ---
  {
    id: "jolyne-cujoh",
    name: "Jolyne Cujoh",
    anime: "JoJo's Bizarre Adventure",
    role: "Protagonist (Part 6)",
    description:
      "Jotaro's badass daughter, framed for murder, who masters the string-manipulating Stand Stone Free in a maximum-security prison.",
    poster: "/posters/jolyne-cujoh.jpg",
  },
  {
    id: "enrico-pucci",
    name: "Enrico Pucci",
    anime: "JoJo's Bizarre Adventure",
    role: "Villain (Part 6)",
    description:
      "A fanatical priest devoted to DIO's ideals, whose terrifying Stand accelerates time to reset the universe.",
    poster: "/posters/enrico-pucci.jpg",
  },
  {
    id: "johnny-joestar",
    name: "Johnny Joestar",
    anime: "JoJo's Bizarre Adventure",
    role: "Protagonist (Part 7)",
    description:
      "A paraplegic ex-jockey with dark determination who learns the 'Spin' to regain his ability to walk.",
    poster: "/posters/johnny-joestar.jpg",
  },
  {
    id: "gyro-zeppeli",
    name: "Gyro Zeppeli",
    anime: "JoJo's Bizarre Adventure",
    role: "Deuteragonist (Part 7)",
    description:
      "An eccentric, grill-wearing executioner from Naples who fights using steel balls imbued with the golden rectangle Spin.",
    poster: "/posters/gyro-zeppeli.jpg",
  },
  {
    id: "funny-valentine",
    name: "Funny Valentine",
    anime: "JoJo's Bizarre Adventure",
    role: "Villain (Part 7)",
    description:
      "The highly patriotic U.S. President whose Stand, D4C, allows him to travel across infinite parallel dimensions.",
    poster: "/posters/funny-valentine.jpg",
  },

  // --- NEON GENESIS EVANGELION (Deep / Aesthetic Edits) ---
  {
    id: "shinji-ikari",
    name: "Shinji Ikari",
    anime: "Neon Genesis Evangelion",
    role: "Protagonist",
    description:
      "A deeply traumatized boy forced to pilot a giant bio-machine, struggling with severe depression and self-worth.",
    poster: "/posters/shinji-ikari.jpg",
  },
  {
    id: "asuka-langley",
    name: "Asuka Langley Soryu",
    anime: "Neon Genesis Evangelion",
    role: "Eva Pilot",
    description:
      "A fiery, aggressive prodigy pilot who masks her intense fear of abandonment behind a massive ego.",
    poster: "/posters/asuka-langley.jpg",
  },
  {
    id: "rei-ayanami",
    name: "Rei Ayanami",
    anime: "Neon Genesis Evangelion",
    role: "Eva Pilot",
    description:
      "A quiet, mysterious girl with a hidden origin, possessing an eerie lack of basic human emotions.",
    poster: "/posters/rei-ayanami.jpg",
  },

  // --- TOKYO GHOUL (Expanded Badass Tier) ---
  {
    id: "juuzou-suzuya",
    name: "Juuzou Suzuya",
    anime: "Tokyo Ghoul",
    role: "CCG Investigator",
    description:
      "An unhinged, deeply scarred CCG prodigy who treats ghoul hunting like a psychotic game.",
    poster: "/posters/juuzou-suzuya.jpg",
  },
  {
    id: "kishou-arima",
    name: "Kishou Arima",
    anime: "Tokyo Ghoul",
    role: "The CCG Reaper",
    description:
      "The undisputed strongest human in the series, an emotionless god of death who has never lost a fight.",
    poster: "/posters/kishou-arima.jpg",
  },
  {
    id: "eto-yoshimura",
    name: "Eto Yoshimura",
    anime: "Tokyo Ghoul",
    role: "One-Eyed Owl",
    description:
      "A famous horror author who is secretly the terrifying founder and leader of the terrorist group Aogiri Tree.",
    poster: "/posters/eto-yoshimura.jpg",
  },

  // --- KAGUYA-SAMA: LOVE IS WAR (Big Brain / Comedy Edits) ---
  {
    id: "kaguya-shinomiya",
    name: "Kaguya Shinomiya",
    anime: "Kaguya-sama: Love is War",
    role: "Protagonist",
    description:
      "A wealthy, genius heiress too proud to confess her love, treating romance like a high-stakes psychological war.",
    poster: "/posters/kaguya-shinomiya.jpg",
  },
  {
    id: "miyuki-shirogane",
    name: "Miyuki Shirogane",
    anime: "Kaguya-sama: Love is War",
    role: "Protagonist",
    description:
      "The sleep-deprived, hardworking Student Council President who fiercely matches Kaguya in their mind games.",
    poster: "/posters/miyuki-shirogane.jpg",
  },
  {
    id: "chika-fujiwara",
    name: "Chika Fujiwara",
    anime: "Kaguya-sama: Love is War",
    role: "Agent of Chaos",
    description:
      "The bubbly secretary who unknowingly destroys Kaguya and Miyuki's perfectly laid plans.",
    poster: "/posters/chika-fujiwara.jpg",
  },

  // --- STEINS;GATE (Sci-Fi Legends) ---
  {
    id: "rintarou-okabe",
    name: "Rintarou Okabe",
    anime: "Steins;Gate",
    role: "Mad Scientist",
    description:
      "A self-proclaimed mad scientist ('Hououin Kyouma') who accidentally invents time travel, leading to unbearable tragedies.",
    poster: "/posters/rintarou-okabe.jpg",
  },
  {
    id: "kurisu-makise",
    name: "Kurisu Makise",
    anime: "Steins;Gate",
    role: "Genius Researcher",
    description:
      "A brilliant neuroscience prodigy and tsundere who becomes Okabe's intellectual equal and anchor across timelines.",
    poster: "/posters/kurisu-makise.jpg",
  },

  // --- GINTAMA & COWBOY BEBOP (The Cool Dudes) ---
  {
    id: "gintoki-sakata",
    name: "Gintoki Sakata",
    anime: "Gintama",
    role: "Protagonist",
    description:
      "A lazy, sugar-loving samurai who turns into an absolute beast ('The White Demon') when his friends are threatened.",
    poster: "/posters/gintoki-sakata.jpg",
  },
  {
    id: "shinsuke-takasugi",
    name: "Shinsuke Takasugi",
    anime: "Gintama",
    role: "Antagonist",
    description:
      "A dangerous extremist and Gintoki's former friend, seeking to destroy the world that took his master.",
    poster: "/posters/shinsuke-takasugi.jpg",
  },
  {
    id: "spike-spiegel",
    name: "Spike Spiegel",
    anime: "Cowboy Bebop",
    role: "Bounty Hunter",
    description:
      "A smooth-talking, martial-arts-using space cowboy running from a deadly past. 'Whatever happens, happens.'",
    poster: "/posters/spike-spiegel.jpg",
  },

  // --- SWORD ART ONLINE ---
  {
    id: "kirito",
    name: "Kirito (Kazuto Kirigaya)",
    anime: "Sword Art Online",
    role: "The Black Swordsman",
    description:
      "A legendary solo player and dual-wielding master who conquered a death game to save thousands of lives.",
    poster: "/posters/kirito.jpg",
  },
  {
    id: "asuna-yuuki",
    name: "Asuna Yuuki",
    anime: "Sword Art Online",
    role: "The Lightning Flash",
    description:
      "A fiercely fast and capable guild vice-commander who fights on the front lines alongside Kirito.",
    poster: "/posters/asuna-yuuki.jpg",
  },
  // --- THE SEVEN DEADLY SINS (Gym Motivation / OP Edits) ---
  {
    id: "escanor",
    name: "Escanor",
    anime: "The Seven Deadly Sins",
    role: "Lion's Sin of Pride",
    description:
      "The pinnacle of human strength who gets exponentially stronger with the sun. 'And who decided that?'",
    poster: "/posters/escanor.jpg",
  },
  {
    id: "meliodas",
    name: "Meliodas",
    anime: "The Seven Deadly Sins",
    role: "Dragon's Sin of Wrath",
    description:
      "The cheerful tavern owner who is secretly the terrifying, immortal former leader of the Ten Commandments.",
    poster: "/posters/meliodas.jpg",
  },
  {
    id: "ban",
    name: "Ban",
    anime: "The Seven Deadly Sins",
    role: "Fox's Sin of Greed",
    description:
      "An immortal, arrogant, but deeply loyal rogue who stole the Fountain of Youth.",
    poster: "/posters/ban.jpg",
  },

  // --- BUNGO STRAY DOGS (Aesthetic / Mastermind Edits) ---
  {
    id: "osamu-dazai",
    name: "Osamu Dazai",
    anime: "Bungo Stray Dogs",
    role: "Detective / Ex-Mafia",
    description:
      "A brilliant, suicidal mastermind whose ability nullifies all other powers. He runs the show from the shadows.",
    poster: "/posters/osamu-dazai.jpg",
  },
  {
    id: "chuuya-nakahara",
    name: "Chuuya Nakahara",
    anime: "Bungo Stray Dogs",
    role: "Mafia Executive",
    description:
      "Dazai's former partner and a fiery martial artist who manipulates gravity to crush his enemies.",
    poster: "/posters/chuuya-nakahara.jpg",
  },
  {
    id: "ryunosuke-akutagawa",
    name: "Ryunosuke Akutagawa",
    anime: "Bungo Stray Dogs",
    role: "Mafia Enforcer",
    description:
      "A ruthless killer wielding the shadow-like beast 'Rashomon', desperate for Dazai's acknowledgment.",
    poster: "/posters/ryunosuke-akutagawa.jpg",
  },

  // --- TENSURA / THAT TIME I GOT REINCARNATED AS A SLIME (OP Isekai Tier) ---
  {
    id: "rimuru-tempest",
    name: "Rimuru Tempest",
    anime: "That Time I Got Reincarnated as a Slime",
    role: "Demon Lord",
    description:
      "A simple corporate worker reincarnated as a slime who absorbs everything to become a god-like Demon Lord.",
    poster: "/posters/rimuru-tempest.jpg",
  },
  {
    id: "diablo",
    name: "Diablo",
    anime: "That Time I Got Reincarnated as a Slime",
    role: "Primordial Demon",
    description:
      "A terrifyingly powerful, impeccably dressed Primordial Black Demon who serves Rimuru with psychotic loyalty.",
    poster: "/posters/diablo.jpg",
  },
  {
    id: "veldora-tempest",
    name: "Veldora Tempest",
    anime: "That Time I Got Reincarnated as a Slime",
    role: "True Dragon",
    description:
      "A catastrophic Storm Dragon who acts like a massive weeb after Rimuru introduces him to manga.",
    poster: "/posters/veldora-tempest.jpg",
  },

  // --- OVERLORD (Absolute Dominance) ---
  {
    id: "ainz-ooal-gown",
    name: "Ainz Ooal Gown",
    anime: "Overlord",
    role: "Supreme Being",
    description:
      "An incredibly overpowered undead sorcerer king who roleplays as an absolute evil mastermind to protect his guild's legacy.",
    poster: "/posters/ainz-ooal-gown.jpg",
  },
  {
    id: "albedo",
    name: "Albedo",
    anime: "Overlord",
    role: "Overseer",
    description:
      "The beautiful but completely unhinged succubus commander of Nazarick's guardians, obsessively in love with Ainz.",
    poster: "/posters/albedo.jpg",
  },

  // --- AKAME GA KILL! (Tragic / Badass Edits) ---
  {
    id: "esdeath",
    name: "Esdeath",
    anime: "Akame ga Kill!",
    role: "Empire's Strongest",
    description:
      "A sadistic, wildly overpowered Ice Queen who lives by the law of 'survival of the fittest'.",
    poster: "/posters/esdeath.jpg",
  },
  {
    id: "akame",
    name: "Akame",
    anime: "Akame ga Kill!",
    role: "Assassin",
    description:
      "A deadly, emotionless killer wielding the cursed sword Murasame, which kills with a single scratch.",
    poster: "/posters/akame.jpg",
  },

  // --- NORAGAMI (Aesthetic / God Tier) ---
  {
    id: "yato",
    name: "Yato",
    anime: "Noragami",
    role: "Delivery God",
    description:
      "A track-suit-wearing stray god with a dark past as a God of Calamity, taking jobs for just 5 yen.",
    poster: "/posters/yato.jpg",
  },

  // --- GURREN LAGANN (Ultimate Pure Hype / Motivation) ---
  {
    id: "kamina",
    name: "Kamina",
    anime: "Gurren Lagann",
    role: "Leader",
    description:
      "The embodiment of sheer willpower and hype. 'Don't believe in yourself. Believe in the me that believes in you!'",
    poster: "/posters/kamina.jpg",
  },
  {
    id: "simon",
    name: "Simon",
    anime: "Gurren Lagann",
    role: "Protagonist",
    description:
      "A timid digger who evolves into a universal-scale badass whose drill will pierce the heavens!",
    poster: "/posters/simon.jpg",
  },

  // --- MUSHOKU TENSEI (High Fantasy) ---
  {
    id: "rudeus-greyrat",
    name: "Rudeus Greyrat",
    anime: "Mushoku Tensei",
    role: "Protagonist",
    description:
      "A former shut-in who uses his second chance at life to become a masterful, chantless magic user.",
    poster: "/posters/rudeus-greyrat.jpg",
  },
  {
    id: "orsted",
    name: "Orsted",
    anime: "Mushoku Tensei",
    role: "Dragon God",
    description:
      "The terrifying Dragon God, stuck in a time loop, possessing power so absolute that just his presence causes despair.",
    poster: "/posters/orsted.jpg",
  },

  // --- FAIRY TAIL (Shounen Hype) ---
  {
    id: "natsu-dragneel",
    name: "Natsu Dragneel",
    anime: "Fairy Tail",
    role: "Fire Dragon Slayer",
    description:
      "A hot-headed, destructive wizard who relies on the power of friendship and dragon fire.",
    poster: "/posters/natsu-dragneel.jpg",
  },
  {
    id: "erza-scarlet",
    name: "Erza Scarlet",
    anime: "Fairy Tail",
    role: "Titania",
    description:
      "The strongest female wizard in Fairy Tail, a strict disciplinarian who swaps legendary armors on the fly.",
    poster: "/posters/erza-scarlet.jpg",
  },

  // --- NO GAME NO LIFE (Big Brain / Sigma Moves) ---
  {
    id: "sora",
    name: "Sora",
    anime: "No Game No Life",
    role: "Protagonist / King",
    description:
      "A manipulative, genius gamer who uses psychology and cold calculation to outsmart literal gods.",
    poster: "/posters/sora.jpg",
  },

  // --- BLUE EXORCIST ---
  {
    id: "rin-okumura",
    name: "Rin Okumura",
    anime: "Blue Exorcist",
    role: "Son of Satan",
    description:
      "A rebellious teen wielding blue flames and a demon sword, determined to punch his own father in the face.",
    poster: "/posters/rin-okumura.jpg",
  },
  // --- WIND BREAKER (Latest Street Fighting Hype) ---
  {
    id: "haruka-sakura",
    name: "Haruka Sakura",
    anime: "Wind Breaker",
    role: "Protagonist",
    description:
      "A tough, misunderstood delinquent with striking heterochromia who fights to reach the top, but secretly loves being praised.",
    poster: "/posters/haruka-sakura.jpg",
  },
  {
    id: "hajime-umemiya",
    name: "Hajime Umemiya",
    anime: "Wind Breaker",
    role: "Bofurin Leader",
    description:
      "The incredibly charismatic, smiling leader of Bofurin who treats the entire town and his gang like his own family.",
    poster: "/posters/hajime-umemiya.jpg",
  },
  {
    id: "hayato-suo",
    name: "Hayato Suo",
    anime: "Wind Breaker",
    role: "Fighter / Support",
    description:
      "An elegant, eyepatch-wearing martial artist who stays completely calm while dismantling opponents with flawless technique.",
    poster: "/posters/hayato-suo.jpg",
  },

  // --- KAIJU NO. 8 (New Gen Blockbuster) ---
  {
    id: "kafka-hibino",
    name: "Kafka Hibino",
    anime: "Kaiju No. 8",
    role: "Protagonist / Kaiju No. 8",
    description:
      "An older, failed recruit who accidentally ingests a parasitic Kaiju, gaining the terrifying power to obliterate giant monsters with a single punch.",
    poster: "/posters/kafka-hibino.jpg",
  },
  {
    id: "soshiro-hoshina",
    name: "Soshiro Hoshina",
    anime: "Kaiju No. 8",
    role: "Vice Captain",
    description:
      "A perpetually smiling sword specialist who moves at blinding speeds, slicing through massive Kaiju like butter.",
    poster: "/posters/soshiro-hoshina.jpg",
  },
  {
    id: "kikoru-shinomiya",
    name: "Kikoru Shinomiya",
    anime: "Kaiju No. 8",
    role: "Elite Cadet",
    description:
      "A heavily armed, deeply driven prodigy wielding a massive battle axe to prove her worth to her strict father.",
    poster: "/posters/kikoru-shinomiya.jpg",
  },

  // --- HELL'S PARADISE / JIGOKURAKU (Dark & Aesthetic) ---
  {
    id: "gabimaru",
    name: "Gabimaru the Hollow",
    anime: "Hell's Paradise",
    role: "Protagonist",
    description:
      "An emotionless, unkillable shinobi who discovers he actually wants to live purely to return to his beloved wife.",
    poster: "/posters/gabimaru.jpg",
  },
  {
    id: "sagiri-yamada-asaemon",
    name: "Sagiri Yamada Asaemon",
    anime: "Hell's Paradise",
    role: "Executioner",
    description:
      "A highly skilled executioner struggling with the burden of taking lives, acting as Gabimaru's handler on a deadly island.",
    poster: "/posters/sagiri-yamada-asaemon.jpg",
  },

  // --- 86 EIGHTY-SIX (Sad/War Edits Masterpiece) ---
  {
    id: "shinei-nouzen",
    name: "Shinei Nouzen (Undertaker)",
    anime: "86 Eighty-Six",
    role: "Protagonist / Ace Pilot",
    description:
      "A battle-hardened, emotionless child soldier who hears the voices of the dead and carries the names of his fallen comrades.",
    poster: "/posters/shinei-nouzen.jpg",
  },
  {
    id: "vladilena-milize",
    name: "Vladilena Milizé (Lena)",
    anime: "86 Eighty-Six",
    role: "Handler",
    description:
      "An idealistic military commander fighting against her own country's systemic racism to support the soldiers on the front lines.",
    poster: "/posters/vladilena-milize.jpg",
  },

  // --- VINLAND SAGA (The True Sigma Male Tier) ---
  {
    id: "askeladd",
    name: "Askeladd",
    anime: "Vinland Saga",
    role: "Anti-Hero / Commander",
    description:
      "A cunning, pragmatic Viking mercenary who murdered Thorfinn's father, inadvertently becoming a twisted father figure to him.",
    poster: "/posters/askeladd.jpg",
  },
  {
    id: "canute",
    name: "Canute",
    anime: "Vinland Saga",
    role: "King",
    description:
      "A timid prince who undergoes a radical, chilling transformation to become a ruthless king determined to build paradise on Earth.",
    poster: "/posters/canute.jpg",
  },

  // --- BLUE LOCK (The Aggressive Egos) ---
  {
    id: "shoei-barou",
    name: "Shoei Barou",
    anime: "Blue Lock",
    role: "The King",
    description:
      "An insanely arrogant, highly physical forward who views the field as his personal kingdom and everyone else as peasants.",
    poster: "/posters/shoei-barou.jpg",
  },
  {
    id: "ryusei-shidou",
    name: "Ryusei Shidou",
    anime: "Blue Lock",
    role: "Wild Striker",
    description:
      "A violently aggressive, unpredictable football prodigy capable of scoring unbelievable goals from impossible angles.",
    poster: "/posters/ryusei-shidou.jpg",
  },

  // --- CHAINSAW MAN (The Lethal Waifus) ---
  {
    id: "reze",
    name: "Reze",
    anime: "Chainsaw Man",
    role: "Bomb Devil Hybrid",
    description:
      "A sweet cafe worker who is secretly a ruthless Soviet spy and a violently explosive hybrid.",
    poster: "/posters/reze.jpg",
  },
  {
    id: "quanxi",
    name: "Quanxi",
    anime: "Chainsaw Man",
    role: "Crossbow Devil Hybrid",
    description:
      "A legendary, blindfolded Chinese assassin who moves faster than the eye can see, traveling with a harem of fiends.",
    poster: "/posters/quanxi.jpg",
  },

  // --- BLEACH: THOUSAND-YEAR BLOOD WAR (The Sternritter) ---
  {
    id: "jugram-haschwalth",
    name: "Jugram Haschwalth",
    anime: "Bleach",
    role: "Quincy Grandmaster",
    description:
      "Yhwach's composed, stoic right-hand man who commands 'The Balance', redirecting misfortune onto his enemies.",
    poster: "/posters/jugram-haschwalth.jpg",
  },
  {
    id: "as-nodt",
    name: "As Nodt",
    anime: "Bleach",
    role: "Sternritter 'F'",
    description:
      "A terrifying, spine-chilling Quincy whose ability, 'The Fear', psychologically breaks even the strongest captains.",
    poster: "/posters/as-nodt.jpg",
  },

  // --- DEMON SLAYER (The Upper Moons) ---
  {
    id: "doma",
    name: "Doma",
    anime: "Demon Slayer",
    role: "Upper Moon 2",
    description:
      "A psychopathic cult leader with lethal ice abilities and absolutely zero true human emotions.",
    poster: "/posters/doma.jpg",
  },
  {
    id: "gyutaro",
    name: "Gyutaro",
    anime: "Demon Slayer",
    role: "Upper Moon 6",
    description:
      "A hideous, venom-wielding demon driven by intense envy, violently protecting his beautiful sister Daki.",
    poster: "/posters/gyutaro.jpg",
  },

  // --- HUNTER X HUNTER (The Legends) ---
  {
    id: "kurapika",
    name: "Kurapika",
    anime: "Hunter x Hunter",
    role: "Avenger",
    description:
      "The last survivor of the Kurta Clan, wielding unbreakable Nen chains fueled by absolute hatred for the Phantom Troupe.",
    poster: "/posters/kurapika.jpg",
  },
  {
    id: "isaac-netero",
    name: "Isaac Netero",
    anime: "Hunter x Hunter",
    role: "Hunter Chairman",
    description:
      "The eccentric old master who trained his punches for decades, becoming a human weapon capable of fighting the Ant King.",
    poster: "/posters/isaac-netero.jpg",
  },

  // --- ATTACK ON TITAN (The Divisive Badass) ---
  {
    id: "floch-forster",
    name: "Floch Forster",
    anime: "Attack on Titan",
    role: "Yeagerist Leader",
    description:
      "A cowardly recruit who transformed into a radical, fanatical leader willing to become a 'devil' to save his island.",
    poster: "/posters/floch-forster.jpg",
  },

  // --- JOJO'S BIZARRE ADVENTURE (Part 2) ---
  {
    id: "joseph-joestar",
    name: "Joseph Joestar",
    anime: "JoJo's Bizarre Adventure",
    role: "Protagonist (Part 2)",
    description:
      "The ultimate trickster JoJo, relying on pure street smarts, sleight of hand, and predicting his opponent's next words.",
    poster: "/posters/joseph-joestar.jpg",
  },
  // --- JUJUTSU KAISEN (Culling Game Hype & Masterminds) ---
  {
    id: "kinji-hakari",
    name: "Kinji Hakari",
    anime: "Jujutsu Kaisen",
    role: "The Gambler",
    description:
      "Always bet on Hakari! A suspended student with a pachinko-themed Domain Expansion that grants him literal immortality.",
    poster: "/posters/kinji-hakari.jpg",
  },
  {
    id: "hajime-kashimo",
    name: "Hajime Kashimo",
    anime: "Jujutsu Kaisen",
    role: "God of Lightning",
    description:
      "A battle-crazed reincarnated sorcerer from the Edo period whose cursed energy feels like pure, unadulterated electricity.",
    poster: "/posters/hajime-kashimo.jpg",
  },
  {
    id: "kenjaku",
    name: "Kenjaku",
    anime: "Jujutsu Kaisen",
    role: "Mastermind",
    description:
      "An ancient, parasitic sorcerer who swaps bodies by transplanting his brain, pulling the strings of the entire Jujutsu world.",
    poster: "/posters/kenjaku.jpg",
  },

  // --- DEMON SLAYER (The Absolute Peak) ---
  {
    id: "yoriichi-tsugikuni",
    name: "Yoriichi Tsugikuni",
    anime: "Demon Slayer",
    role: "The First Breath User",
    description:
      "The legendary creator of Sun Breathing and the only swordsman in history to make Muzan Kibutsuji tremble in pure fear.",
    poster: "/posters/yoriichi-tsugikuni.jpg",
  },
  {
    id: "sanemi-shinazugawa",
    name: "Sanemi Shinazugawa",
    anime: "Demon Slayer",
    role: "Wind Hashira",
    description:
      "A highly aggressive, heavily scarred Hashira whose rare blood intoxicates demons. He fights with pure, violent rage.",
    poster: "/posters/sanemi-shinazugawa.jpg",
  },

  // --- ONE PUNCH MAN (God-Tier Threats & Heroes) ---
  {
    id: "tatsumaki",
    name: "Tatsumaki",
    anime: "One Punch Man",
    role: "Tornado of Terror",
    description:
      "An S-Class Rank 2 hero with god-like telekinetic abilities, a severe superiority complex, and a famously short temper.",
    poster: "/posters/tatsumaki.jpg",
  },
  {
    id: "boros",
    name: "Lord Boros",
    anime: "One Punch Man",
    role: "Dominator of the Universe",
    description:
      "An alien warlord who traveled across the universe just to find a worthy opponent, surviving a punch from Saitama.",
    poster: "/posters/boros.jpg",
  },
  {
    id: "blast",
    name: "Blast",
    anime: "One Punch Man",
    role: "S-Class Rank 1",
    description:
      "The elusive, mysterious top hero of the association who travels through dimensions fighting cosmic threats.",
    poster: "/posters/blast.jpg",
  },

  // --- GENSHIN IMPACT (Anime Aesthetic / Edit Royalty) ---
  {
    id: "zhongli",
    name: "Zhongli",
    anime: "Genshin Impact",
    role: "Geo Archon",
    description:
      "The incredibly calm, deeply knowledgeable God of Contracts who drops literal meteors on his enemies. 'I will have order.'",
    poster: "/posters/zhongli.jpg",
  },
  {
    id: "raiden-shogun",
    name: "Raiden Shogun",
    anime: "Genshin Impact",
    role: "Electro Archon",
    description:
      "The strict, unyielding ruler of Inazuma who pursues eternity, executing foes with the legendary Musou no Hitotachi.",
    poster: "/posters/raiden-shogun.jpg",
  },
  {
    id: "arlecchino",
    name: "Arlecchino",
    anime: "Genshin Impact",
    role: "The Knave",
    description:
      "A ruthless and enigmatic Fatui Harbinger known as 'Father', commanding respect, fear, and blood-red flames.",
    poster: "/posters/arlecchino.jpg",
  },

  // --- NIER: AUTOMATA (Depression & Masterpiece Edits) ---
  {
    id: "2b",
    name: "2B",
    anime: "NieR:Automata",
    role: "YoRHa Android",
    description:
      "A quiet, highly lethal combat android fighting an endless war for the glory of mankind, hiding deep emotional pain.",
    poster: "/posters/2b.jpg",
  },
  {
    id: "9s",
    name: "9S",
    anime: "NieR:Automata",
    role: "Scanner Android",
    description:
      "2B's emotional, highly intelligent partner whose hacking abilities lead him down a dark path of forbidden knowledge.",
    poster: "/posters/9s.jpg",
  },

  // --- CHAINSAW MAN (The Deadpan & The Unhinged) ---
  {
    id: "kishibe",
    name: "Kishibe",
    anime: "Chainsaw Man",
    role: "The Strongest Human",
    description:
      "A grizzled, alcoholic master Devil Hunter who claims the only ones who survive this job are the ones with loose screws.",
    poster: "/posters/kishibe.jpg",
  },
  {
    id: "asa-mitaka",
    name: "Asa Mitaka",
    anime: "Chainsaw Man",
    role: "War Devil Host",
    description:
      "A socially awkward, extremely relatable high school girl who shares her brain with Yoru, the War Devil.",
    poster: "/posters/asa-mitaka.jpg",
  },

  // --- BLEACH (The Old Legends) ---
  {
    id: "genryusai-yamamoto",
    name: "Genryusai Shigekuni Yamamoto",
    anime: "Bleach",
    role: "Head Captain",
    description:
      "The ancient, heavily scarred founder of the Gotei 13 whose Bankai burns as hot as the core of the sun.",
    poster: "/posters/genryusai-yamamoto.jpg",
  },
  {
    id: "shunsui-kyoraku",
    name: "Shunsui Kyoraku",
    anime: "Bleach",
    role: "Captain Commander",
    description:
      "A laid-back, sake-drinking Captain who masks immense, terrifying power and tactical ruthlessness behind a smile.",
    poster: "/posters/shunsui-kyoraku.jpg",
  },
  {
    id: "retsu-unohana",
    name: "Retsu Unohana",
    anime: "Bleach",
    role: "First Kenpachi",
    description:
      "The seemingly gentle healer of Squad 4 who is secretly the most diabolical, bloodthirsty criminal in Soul Society history.",
    poster: "/posters/retsu-unohana.jpg",
  },

  // --- CODE GEASS (The Core Duo) ---
  {
    id: "suzaku-kururugi",
    name: "Suzaku Kururugi",
    anime: "Code Geass",
    role: "The White Knight",
    description:
      "Lelouch's athletic, hypocritical best friend who joins the oppressors in a flawed attempt to change them from within.",
    poster: "/posters/suzaku-kururugi.jpg",
  },
  {
    id: "c-c",
    name: "C.C.",
    anime: "Code Geass",
    role: "The Immortal Witch",
    description:
      "A pizza-loving, immortal girl who grants Lelouch the power of Geass and becomes his most loyal accomplice.",
    poster: "/posters/c-c.jpg",
  },

  // --- BORUTO / NARUTO LORE ---
  {
    id: "isshiki-otsutsuki",
    name: "Isshiki Otsutsuki",
    anime: "Boruto",
    role: "Celestial God",
    description:
      "An overwhelmingly powerful alien entity whose sheer speed and shrinking abilities made Naruto and Sasuke completely helpless.",
    poster: "/posters/isshiki-otsutsuki.jpg",
  },
  {
    id: "kurama",
    name: "Kurama",
    anime: "Naruto",
    role: "Nine-Tails",
    description:
      "The cynical, massively powerful Nine-Tailed Fox who transitioned from a hateful demon into Naruto's greatest partner.",
    poster: "/posters/kurama.jpg",
  },
  // --- TOKYO REVENGERS (Tenjiku & Black Dragons Hype) ---
  {
    id: "izana-kurokawa",
    name: "Izana Kurokawa",
    anime: "Tokyo Revengers",
    role: "Tenjiku Leader",
    description:
      "Mikey's adoptive brother who leads Tenjiku out of a warped sense of jealousy, fighting with lethal, acrobatic kicks.",
    poster: "/posters/izana-kurokawa.jpg",
  },
  {
    id: "ran-haitani",
    name: "Ran Haitani",
    anime: "Tokyo Revengers",
    role: "Executive",
    description:
      "The older, stylish, and incredibly ruthless half of the Haitani brothers, who loves using a baton to crack skulls.",
    poster: "/posters/ran-haitani.jpg",
  },
  {
    id: "rindou-haitani",
    name: "Rindou Haitani",
    anime: "Tokyo Revengers",
    role: "Executive",
    description:
      "The younger Haitani brother who specializes in brutal joint-locking submissions to break his opponents' limbs.",
    poster: "/posters/rindou-haitani.jpg",
  },
  {
    id: "taiju-shiba",
    name: "Taiju Shiba",
    anime: "Tokyo Revengers",
    role: "Black Dragons Leader",
    description:
      "A physically imposing, hyper-religious, and brutally violent monster who ruled the 10th generation Black Dragons.",
    poster: "/posters/taiju-shiba.jpg",
  },

  // --- AESTHETIC & ROM-COM ICONS (Viral on Shorts/Reels) ---
  {
    id: "marin-kitagawa",
    name: "Marin Kitagawa",
    anime: "My Dress-Up Darling",
    role: "Protagonist / Cosplayer",
    description:
      "An incredibly popular, outgoing gyaru who is unapologetically obsessed with anime, gaming, and cosplay.",
    poster: "/posters/marin-kitagawa.jpg",
  },
  {
    id: "mai-sakurajima",
    name: "Mai Sakurajima",
    anime: "Rascal Does Not Dream of Bunny Girl Senpai",
    role: "Actress / Senpai",
    description:
      "A famous teenage actress suffering from 'Adolescence Syndrome', an incredibly sharp-witted and fiercely loyal girlfriend.",
    poster: "/posters/mai-sakurajima.jpg",
  },
  {
    id: "zero-two",
    name: "Zero Two",
    anime: "Darling in the Franxx",
    role: "Elite Pilot",
    description:
      "The infamous 'Partner Killer' with pink hair and horns, known for her rebellious attitude and iconic 'Darling!'",
    poster: "/posters/zero-two.jpg",
  },
  {
    id: "yukino-yukinoshita",
    name: "Yukino Yukinoshita",
    anime: "Oregairu",
    role: "Ice Queen",
    description:
      "A beautiful, highly intelligent, but completely brutally honest loner who leads the Service Club.",
    poster: "/posters/yukino-yukinoshita.jpg",
  },

  // --- JOJO'S BIZARRE ADVENTURE (The Mob & The Mangaka) ---
  {
    id: "bruno-bucciarati",
    name: "Bruno Bucciarati",
    anime: "JoJo's Bizarre Adventure",
    role: "Capo / True Leader",
    description:
      "A deeply righteous mobster wielding Sticky Fingers, widely considered by fans as the true 'mom' and hero of Part 5.",
    poster: "/posters/bruno-bucciarati.jpg",
  },
  {
    id: "diavolo",
    name: "Diavolo",
    anime: "JoJo's Bizarre Adventure",
    role: "Passione Boss",
    description:
      "The intensely paranoid mafia boss whose terrifying Stand, King Crimson, allows him to erase time itself.",
    poster: "/posters/diavolo.jpg",
  },
  {
    id: "rohan-kishibe",
    name: "Rohan Kishibe",
    anime: "JoJo's Bizarre Adventure",
    role: "Manga Artist",
    description:
      "An arrogant, brilliant manga creator whose Stand, Heaven's Door, can literally read people's lives and rewrite their actions.",
    poster: "/posters/rohan-kishibe.jpg",
  },

  // --- ONE PIECE (The Agendas & Admirals) ---
  {
    id: "kizaru",
    name: "Borsalino (Kizaru)",
    anime: "One Piece",
    role: "Admiral",
    description:
      "A seemingly absent-minded Admiral who casually moves and kicks at the speed of light. 'Have you ever been kicked at the speed of light?'",
    poster: "/posters/kizaru.jpg",
  },
  {
    id: "aokiji",
    name: "Kuzan (Aokiji)",
    anime: "One Piece",
    role: "Former Admiral",
    description:
      "A laid-back, incredibly powerful ice user who pursues his own brand of 'Lazy Justice' outside the Marines.",
    poster: "/posters/aokiji.jpg",
  },
  {
    id: "buggy",
    name: "Buggy the Clown",
    anime: "One Piece",
    role: "Yonko",
    description:
      "A flashy, cowardly pirate whose sheer dumb luck and misunderstandings have somehow propelled him to Emperor status.",
    poster: "/posters/buggy.jpg",
  },
  {
    id: "eustass-kid",
    name: "Eustass Kid",
    anime: "One Piece",
    role: "Supernova",
    description:
      "A violent, notoriously cruel pirate captain who uses magnetism to build massive metal contraptions to crush his foes.",
    poster: "/posters/eustass-kid.jpg",
  },

  // --- DEMON SLAYER (The Remaining Pillars) ---
  {
    id: "gyomei-himejima",
    name: "Gyomei Himejima",
    anime: "Demon Slayer",
    role: "Stone Hashira",
    description:
      "The blind, gentle giant who cries constantly, but is universally recognized as the physically strongest Hashira.",
    poster: "/posters/gyomei-himejima.jpg",
  },
  {
    id: "obanai-iguro",
    name: "Obanai Iguro",
    anime: "Demon Slayer",
    role: "Serpent Hashira",
    description:
      "A strict, snake-wearing swordsman with a dark past, deeply and selflessly in love with Mitsuri.",
    poster: "/posters/obanai-iguro.jpg",
  },
  {
    id: "mitsuri-kanroji",
    name: "Mitsuri Kanroji",
    anime: "Demon Slayer",
    role: "Love Hashira",
    description:
      "The cheerful, perpetually hungry Hashira who hides unnaturally dense muscles and wields a whip-like sword.",
    poster: "/posters/mitsuri-kanroji.jpg",
  },

  // --- JUJUTSU KAISEN (The Anomalies) ---
  {
    id: "mahoraga",
    name: "Mahoraga",
    anime: "Jujutsu Kaisen",
    role: "Divine General",
    description:
      "The untamable, ultimate shikigami of the Ten Shadows technique that can adapt to any and all phenomena.",
    poster: "/posters/mahoraga.jpg",
  },
  {
    id: "uraume",
    name: "Uraume",
    anime: "Jujutsu Kaisen",
    role: "Sukuna's Servant",
    description:
      "A cold, 1000-year-old curse user specializing in devastating ice manipulation, completely devoted to serving Sukuna.",
    poster: "/posters/uraume.jpg",
  },

  // --- NARUTO (The Hardworkers & Artists) ---
  {
    id: "rock-lee",
    name: "Rock Lee",
    anime: "Naruto",
    role: "Taijutsu Master",
    description:
      "A ninja entirely devoid of ninjutsu or genjutsu, proving that hard work can surpass natural genius.",
    poster: "/posters/rock-lee.jpg",
  },
  {
    id: "deidara",
    name: "Deidara",
    anime: "Naruto",
    role: "Akatsuki Member",
    description:
      "An explosive artist who believes that true art is fleeting and ends in a massive explosion.",
    poster: "/posters/deidara.jpg",
  },

  // --- BLEACH (TYBW Heavy Hitters) ---
  {
    id: "uryu-ishida",
    name: "Uryu Ishida",
    anime: "Bleach",
    role: "Quincy Survivor",
    description:
      "Ichigo's intelligent, proud Quincy rival who seemingly defects to the Wandenreich to uncover the truth.",
    poster: "/posters/uryu-ishida.jpg",
  },
  {
    id: "gremmy-thoumeaux",
    name: "Gremmy Thoumeaux",
    anime: "Bleach",
    role: "Sternritter 'V'",
    description:
      "The Visionary. A terrifyingly powerful Quincy who can turn anything he imagines into absolute reality.",
    poster: "/posters/gremmy-thoumeaux.jpg",
  },

  // --- HELLSING (The Crusader) ---
  {
    id: "alexander-anderson",
    name: "Alexander Anderson",
    anime: "Hellsing Ultimate",
    role: "Iscariot Priest",
    description:
      "A violently fanatic, bayonet-wielding Catholic priest and regenerator who is Alucard's ultimate rival.",
    poster: "/posters/alexander-anderson.jpg",
  },

  // --- ATTACK ON TITAN (The Cart) ---
  {
    id: "pieck-finger",
    name: "Pieck Finger",
    anime: "Attack on Titan",
    role: "Cart Titan",
    description:
      "The intelligent, extremely laid-back Marleyan Warrior who excels in long-term support and mobility operations.",
    poster: "/posters/pieck-finger.jpg",
  },
  // --- OMNISCIENT READER'S VIEWPOINT (Massive Manhwa Hype) ---
  {
    id: "kim-dokja",
    name: "Kim Dokja",
    anime: "Omniscient Reader's Viewpoint",
    role: "Protagonist / The Reader",
    description:
      "A clever, self-sacrificing reader who uses his absolute knowledge of a web novel to manipulate scenarios and gods to save his companions.",
    poster: "/posters/kim-dokja.jpg",
  },
  {
    id: "yoo-joonghyuk",
    name: "Yoo Joonghyuk",
    anime: "Omniscient Reader's Viewpoint",
    role: "Regressor / Protagonist of the Novel",
    description:
      "A cold, brutally strong regressor who has lived through the apocalypse countless times, slowly losing his humanity.",
    poster: "/posters/yoo-joonghyuk.jpg",
  },
  {
    id: "han-sooyoung",
    name: "Han Sooyoung",
    anime: "Omniscient Reader's Viewpoint",
    role: "Writer / Avatar User",
    description:
      "A sharp-tongued, highly intelligent author who creates clones of herself and forms the core tactical trio with Dokja and Joonghyuk.",
    poster: "/posters/han-sooyoung.jpg",
  },

  // --- TOWER OF GOD (Webtoon / Anime Royalty) ---
  {
    id: "twenty-fifth-baam",
    name: "Twenty-Fifth Baam",
    anime: "Tower of God",
    role: "Irregular",
    description:
      "An innocent boy who entered the tower chasing a girl, only to discover his terrifying, boundless potential to devour all Shinsu.",
    poster: "/posters/twenty-fifth-baam.jpg",
  },
  {
    id: "khun-aguero-agnes",
    name: "Khun Aguero Agnes",
    anime: "Tower of God",
    role: "Light Bearer / Strategist",
    description:
      "A highly cunning, manipulative blue-haired noble who acts as Baam's brain, constantly outsmarting stronger opponents.",
    poster: "/posters/khun-aguero-agnes.jpg",
  },
  {
    id: "rak-wraithraiser",
    name: "Rak Wraithraiser",
    anime: "Tower of God",
    role: "Spear Bearer",
    description:
      "A massive, prideful crocodile-like warrior who affectionately calls everyone 'Turtles' and fiercely protects his team.",
    poster: "/posters/rak-wraithraiser.jpg",
  },

  // --- THE GOD OF HIGH SCHOOL & ELECEED ---
  {
    id: "jin-mori",
    name: "Jin Mori",
    anime: "The God of High School",
    role: "Monkey King",
    description:
      "A carefree Taekwondo prodigy who is secretly the legendary, god-slaying Monkey King, Sun Wukong.",
    poster: "/posters/jin-mori.jpg",
  },
  {
    id: "kayden-break",
    name: "Kayden Break",
    anime: "Eleceed",
    role: "World's Strongest Awakener",
    description:
      "An insanely powerful, combat-obsessed Awakener forced to hide in the body of a fat, fluffy orange cat.",
    poster: "/posters/kayden-break.jpg",
  },
  {
    id: "jiwoo-seo",
    name: "Jiwoo Seo",
    anime: "Eleceed",
    role: "Speed Awakener",
    description:
      "A kind-hearted, cat-loving teen who learns combat from Kayden and uses his super-speed to throw devastating electrical punches.",
    poster: "/posters/jiwoo-seo.jpg",
  },

  // --- KONOSUBA (Peak Comedy & Viral Edits) ---
  {
    id: "kazuma-satou",
    name: "Kazuma Satou",
    anime: "KonoSuba",
    role: "Protagonist",
    description:
      "A pragmatic, shameless isekai protagonist who firmly believes in true gender equality and uses the 'Steal' skill for ultimate disrespect.",
    poster: "/posters/kazuma-satou.jpg",
  },
  {
    id: "megumin",
    name: "Megumin",
    anime: "KonoSuba",
    role: "Arch Wizard",
    description:
      "An eccentric Crimson Demon completely obsessed with Explosion magic, casting it once a day before collapsing. 'EXPLOSION!'",
    poster: "/posters/megumin.jpg",
  },
  {
    id: "aqua",
    name: "Aqua",
    anime: "KonoSuba",
    role: "Goddess",
    description:
      "A heavily worshipped, completely useless, and perpetually crying water goddess whose stats are maxed out except for intelligence.",
    poster: "/posters/aqua.jpg",
  },
  {
    id: "darkness",
    name: "Darkness (Lalatina)",
    anime: "KonoSuba",
    role: "Crusader",
    description:
      "A noble knight with indestructible defense whose true nature is that of an extreme, unashamed masochist.",
    poster: "/posters/darkness.jpg",
  },

  // --- HAIKYUU!! (More Hype Sports Icons) ---
  {
    id: "tetsuro-kuroo",
    name: "Tetsuro Kuroo",
    anime: "Haikyuu!!",
    role: "Middle Blocker / Captain",
    description:
      "The scheming captain of Nekoma High, known for his provocative blocks and deep tactical understanding of volleyball.",
    poster: "/posters/tetsuro-kuroo.jpg",
  },
  {
    id: "kenma-kozume",
    name: "Kenma Kozume",
    anime: "Haikyuu!!",
    role: "Setter",
    description:
      "A quiet, low-energy gamer who acts as the absolute 'brain' and calculating core of Nekoma High.",
    poster: "/posters/kenma-kozume.jpg",
  },
  {
    id: "wakatoshi-ushijima",
    name: "Wakatoshi Ushijima",
    anime: "Haikyuu!!",
    role: "Super Ace",
    description:
      "A stoic, brutally powerful left-handed spiker whose raw strength forces his way through any block.",
    poster: "/posters/wakatoshi-ushijima.jpg",
  },

  // --- BLUE LOCK (The Next Gen Stars) ---
  {
    id: "oliver-aiku",
    name: "Oliver Aiku",
    anime: "Blue Lock",
    role: "U-20 Captain / Defender",
    description:
      "A world-class center-back with incredible analytical skills, acting as the ultimate wall for the Japan U-20 team.",
    poster: "/posters/oliver-aiku.jpg",
  },
  {
    id: "tabito-karasu",
    name: "Tabito Karasu",
    anime: "Blue Lock",
    role: "The Assassin",
    description:
      "A highly analytical, ball-keeping genius who targets the weakest link on the opposing team to break them mentally and physically.",
    poster: "/posters/tabito-karasu.jpg",
  },

  // --- ONE PIECE & NARUTO (Bache hue legends) ---
  {
    id: "nico-robin",
    name: "Nico Robin",
    anime: "One Piece",
    role: "Archaeologist",
    description:
      "The calm, macabre survivor of Ohara who can bloom her body parts anywhere, seeking the world's true history.",
    poster: "/posters/nico-robin.jpg",
  },
  {
    id: "sabo",
    name: "Sabo",
    anime: "One Piece",
    role: "Revolutionary Chief of Staff",
    description:
      "Luffy's sworn brother who inherited Ace's Flame-Flame fruit and fights to overthrow the World Government.",
    poster: "/posters/sabo.jpg",
  },
  {
    id: "enel",
    name: "Enel",
    anime: "One Piece",
    role: "God of Skypiea",
    description:
      "An arrogant, terrifying lightning-user who considered himself invincible until he met a boy made of rubber.",
    poster: "/posters/enel.jpg",
  },
  {
    id: "tobirama-senju",
    name: "Tobirama Senju",
    anime: "Naruto",
    role: "Second Hokage",
    description:
      "The pragmatic, water-style master who invented the Flying Raijin and Edo Tensei, and harbored a deep mistrust of the Uchiha.",
    poster: "/posters/tobirama-senju.jpg",
  },
  {
    id: "hidan",
    name: "Hidan",
    anime: "Naruto",
    role: "Akatsuki Member",
    description:
      "An immortal, foul-mouthed zealot of Lord Jashin who relishes in feeling the pain of his voodoo-like rituals.",
    poster: "/posters/hidan.jpg",
  },
  {
    id: "neji-hyuga",
    name: "Neji Hyuga",
    anime: "Naruto",
    role: "Byakugan Prodigy",
    description:
      "A brilliant Hyuga genius who broke free from the cursed seal of his fate to protect his friends and family.",
    poster: "/posters/neji-hyuga.jpg",
  },

  // --- SHIELD HERO ---
  {
    id: "naofumi-iwatani",
    name: "Naofumi Iwatani",
    anime: "The Rising of the Shield Hero",
    role: "Shield Hero",
    description:
      "A wrongly accused hero who becomes highly cynical and pragmatic, relying solely on his unbreakable defense and party.",
    poster: "/posters/naofumi-iwatani.jpg",
  },
  {
    id: "raphtalia",
    name: "Raphtalia",
    anime: "The Rising of the Shield Hero",
    role: "The Hero's Sword",
    description:
      "A raccoon demi-human who grew from a traumatized slave into a fierce, intensely loyal warrior devoted to Naofumi.",
    poster: "/posters/raphtalia.jpg",
  },
];

const pokemon = [
  {
    id: "001",
    name: "Bulbasaur",
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    height: "2ft 04in",
    weight: "15.2 lbs",
    category: "Seed",
    abilities: "Overgrown",
    types: ["Grass", "Poison"],
    weakness: ["Fire", "Flying", "Ice", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    id: "002",
    name: "Ivysaur",
    description:
      "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    height: "3ft 03in",
    weight: "28.7 lbs",
    category: "Seed",
    abilities: "Overgrown",
    types: ["Grass", "Poison"],
    weakness: ["Fire", "Flying", "Ice", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
  },
  {
    id: "003",
    name: "Venusaur",
    description:
      "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    height: "6ft 07in",
    weight: "220.5 lbs",
    category: "Seed",
    abilities: "Overgrown",
    types: ["Grass", "Poison"],
    weakness: ["Fire", "Flying", "Ice", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
  },
  {
    id: "004",
    name: "Charmander",
    description:
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    height: "2ft",
    weight: "18.7 lbs",
    category: "Lizard",
    abilities: "Blaze",
    types: ["Fire"],
    weakness: ["Ground", "Rock", "Water"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
  },
  {
    id: "005",
    name: "Charmeleon",
    description:
      "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
    height: "3ft 07in",
    weight: "41.9 lbs",
    category: "Flame",
    abilities: "Blaze",
    types: ["Fire"],
    weakness: ["Ground", "Rock", "Water"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
  },
  {
    id: "006",
    name: "Charizard",
    description:
      "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
    height: "5ft 07in",
    weight: "199.5 lbs",
    category: "Flame",
    abilities: "Blaze",
    types: ["Fire", "Flying"],
    weakness: ["Electric", "Rock", "Water"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
  },
  {
    id: "007",
    name: "Squirtle",
    description:
      "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
    height: "1ft 08in",
    weight: "19.8 lbs",
    category: "Tiny Turtle",
    abilities: "Torrent",
    types: ["Water"],
    weakness: ["Electric", "Grass"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
  },
  {
    id: "008",
    name: "Wartortle",
    description:
      "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.",
    height: "3ft 03in",
    weight: "49.6 lbs",
    category: "Turtle",
    abilities: "Torrent",
    types: ["Water"],
    weakness: ["Electric", "Grass"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
  },
  {
    id: "009",
    name: "Blastoise",
    description:
      "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
    height: "5ft 03in",
    weight: "188.5 lbs",
    category: "Shellfish",
    abilities: "Torrent",
    types: ["Water"],
    weakness: ["Electric", "Grass"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
  },
  {
    id: "010",
    name: "Caterpie",
    description:
      "Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.",
    height: "1ft",
    weight: "6.4 lbs",
    category: "Worm",
    abilities: "Shield Dust",
    types: ["Bug"],
    weakness: ["Flying", "Fire", "Rock"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png"
  },
  {
    id: "011",
    name: "Metapod",
    description:
      "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
    height: "2ft 04in",
    weight: "21.8 lbs",
    category: "Cocoon",
    abilities: "Shed Skin",
    types: ["Bug"],
    weakness: ["Flying", "Fire", "Rock"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"
  },
  {
    id: "012",
    name: "Butterfree",
    description:
      "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
    height: "3ft 07in",
    weight: "70.5 lbs",
    category: "Butterfly",
    abilities: "Compound Eyes",
    types: ["Bug", "Flying"],
    weakness: ["Flying", "Fire", "Rock", "Electric", "Ice"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
  },
  {
    id: "013",
    name: "Weedle",
    description:
      "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).",
    height: "1ft",
    weight: "7.1 lbs",
    category: "Hairy Bug",
    abilities: "Shield Dust",
    types: ["Bug", "Poison"],
    weakness: ["Flying", "Fire", "Rock", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png"
  },
  {
    id: "014",
    name: "Kakuna",
    description:
      "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.",
    height: "2ft",
    weight: "22 lbs",
    category: "Cocoon",
    abilities: "Shed Skin",
    types: ["Bug", "Poison"],
    weakness: ["Flying", "Fire", "Rock", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png"
  },
  {
    id: "015",
    name: "Beedrill",
    description:
      "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.",
    height: "3ft 03in",
    weight: "65 lbs",
    category: "Poison Bee",
    abilities: "Swarm",
    types: ["Bug", "Poison"],
    weakness: ["Flying", "Fire", "Rock", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png"
  },
  {
    id: "016",
    name: "Pidgey",
    description:
      "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
    height: "1ft",
    weight: "4 lbs",
    category: "Tiny Bird",
    abilities: "Keen Eye",
    types: ["Normal", "Flying"],
    weakness: ["Electric", "Ice", "Rock"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
  },
  {
    id: "017",
    name: "Pidgeotto",
    description:
      "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
    height: "3ft 07in",
    weight: "66.1 lbs",
    category: "Bird",
    abilities: "Keen Eye",
    types: ["Normal", "Flying"],
    weakness: ["Electric", "Ice", "Rock"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png"
  },
  {
    id: "018",
    name: "Pidgeot",
    description:
      "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.",
    height: "4ft 11in",
    weight: "87.1 lbs",
    category: "Bird",
    abilities: "Keen Eye",
    types: ["Normal", "Flying"],
    weakness: ["Electric", "Ice", "Rock"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png"
  },
  {
    id: "019",
    name: "Rattata",
    description:
      "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
    height: "1ft",
    weight: "7.7 lbs",
    category: "Mouse",
    abilities: "Run Away",
    types: ["Normal"],
    weakness: ["Fighting"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png"
  },
  {
    id: "020",
    name: "Raticate",
    description:
      "Raticate's sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses.",
    height: "2ft 04in",
    weight: "40.8 lbs",
    category: "Mouse",
    abilities: "Run Away",
    types: ["Normal"],
    weakness: ["Fighting"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png"
  },
  {
    id: "021",
    name: "Spearow",
    description:
      "Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger.",
    height: "1ft",
    weight: "4.4 lbs",
    category: "Tiny Bird",
    abilities: "Keen Eye",
    types: ["Normal", "Flying"],
    weakness: ["Electric", "Ice", "Rock"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png"
  },
  {
    id: "022",
    name: "Fearow",
    description:
      "Fearow is recognized by its long neck and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skinny beak to pluck prey.",
    height: "3ft 11in",
    weight: "83.8 lbs",
    category: "Beak",
    abilities: "Keen Eye",
    types: ["Normal", "Flying"],
    weakness: ["Electric", "Ice", "Rock"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png"
  },
  {
    id: "023",
    name: "Ekans",
    description:
      "Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head.",
    height: "6ft 07in",
    weight: "15.2 lbs",
    category: "Snake",
    abilities: "Shed Skin",
    types: ["Poison"],
    weakness: ["Ground", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png"
  },
  {
    id: "024",
    name: "Arbok",
    description:
      "This Pokémon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crunching embrace is impossible.",
    height: "11ft 06in",
    weight: "143.3 lbs",
    category: "Cobra",
    abilities: "Shed Skin",
    types: ["Poison"],
    weakness: ["Ground", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png"
  },
  {
    id: "025",
    name: "Pikachu",
    description:
      "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    height: "1ft 04in",
    weight: "13.2 lbs",
    category: "Mouse",
    abilities: "Static",
    types: ["Electric"],
    weakness: ["Ground"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
  },
  {
    id: "026",
    name: "Raichu",
    description:
      "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.",
    height: "2ft 07in",
    weight: "66.1 lbs",
    category: "Mouse",
    abilities: "Static",
    types: ["Electric"],
    weakness: ["Ground"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png"
  },
  {
    id: "027",
    name: "Sandshrew",
    description:
      "Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies.",
    height: "2ft",
    weight: "26.5 lbs",
    category: "Mouse",
    abilities: "Sand Veil",
    types: ["Ground"],
    weakness: ["Grass", "Ice", "Water"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png"
  },
  {
    id: "028",
    name: "Sandslash",
    description:
      "Sandslash's body is covered by tough spikes, which are hardened sections of its hide. Once a year, the old spikes fall out, to be replaced with new spikes that grow out from beneath the old ones.",
    height: "3ft 03in",
    weight: "65 lbs",
    category: "Mouse",
    abilities: "Sand Veil",
    types: ["Ground"],
    weakness: ["Grass", "Ice", "Water"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png"
  },
  {
    id: "029",
    name: "Nidoran♀",
    description:
      "Nidoran♀ has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.",
    height: "1ft 04in",
    weight: "15.4 lbs",
    category: "Poison Pin",
    abilities: "Poison Point",
    types: ["Poison"],
    weakness: ["Ground", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png"
  },
  {
    id: "030",
    name: "Nidorina",
    description:
      "When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others.",
    height: "2ft 07in",
    weight: "44.1 lbs",
    category: "Poison Pin",
    abilities: "Poison Point",
    types: ["Poison"],
    weakness: ["Ground", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png"
  },
  {
    id: "031",
    name: "Nidoqueen",
    description:
      "Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.",
    height: "4ft 03in",
    weight: "132.3 lbs",
    category: "Drill",
    abilities: "Poison Point",
    types: ["Poison", "Ground"],
    weakness: ["Ground", "Psychic", "Ice", "Water"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png"
  },
  {
    id: "032",
    name: "Nidoran♂",
    description:
      "Nidoran♂ has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon's notice.",
    height: "1ft 08in",
    weight: "19.8 lbs",
    category: "Poison Pin",
    abilities: "Poison Point",
    types: ["Poison"],
    weakness: ["Ground", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png"
  },
  {
    id: "033",
    name: "Nidorino",
    description:
      "Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.",
    height: "2ft 11in",
    weight: "43 lbs",
    category: "Poison Pin",
    abilities: "Poison Point",
    types: ["Poison"],
    weakness: ["Ground", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png"
  },
  {
    id: "034",
    name: "Nidoking",
    description:
      "Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it.",
    height: "4ft 07in",
    weight: "136.7 lbs",
    category: "Drill",
    abilities: "Poison Point",
    types: ["Poison", "Ground"],
    weakness: ["Ground", "Psychic", "Ice", "Water"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png"
  },
  {
    id: "035",
    name: "Clefairy",
    description:
      "On every night of a full moon, groups of this Pokémon come out to play. When dawn arrives, the tired Clefairy return to their quiet mountain retreats and go to sleep nestled up against each other.",
    height: "2ft",
    weight: "16.5 lbs",
    category: "Fairy",
    abilities: "Cute Charm",
    types: ["Fairy"],
    weakness: ["Steel", "Poison"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"
  },
  {
    id: "036",
    name: "Clefable",
    description:
      "Clefable moves by skipping lightly as if it were flying using its wings. Its bouncy step lets it even walk on water. It is known to take strolls on lakes on quiet, moonlit nights.",
    height: "4ft 03in",
    weight: "88.2 lbs",
    category: "Fairy",
    abilities: "Cute Charm",
    types: ["Fairy"],
    weakness: ["Steel", "Poison"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png"
  },
  {
    id: "037",
    name: "Vulpix",
    description:
      "At the time of its birth, Vulpix has one white tail. The tail separates into six if this Pokémon receives plenty of love from its Trainer. The six tails become magnificently curled.",
    height: "2ft",
    weight: "21.8 lbs",
    category: "Fox",
    abilities: "Flash Fire",
    types: ["Fire"],
    weakness: ["Ground", "Rock", "Water"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png"
  },
  {
    id: "038",
    name: "Ninetales",
    description:
      "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for a thousand years.",
    height: "3ft 07in",
    weight: "43.9 lbs",
    category: "Fox",
    abilities: "Flash Fire",
    types: ["Fire"],
    weakness: ["Ground", "Rock", "Water"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"
  },
  {
    id: "039",
    name: "Jigglypuff",
    description:
      "Jigglypuff's vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy.",
    height: "1ft 08in",
    weight: "12.1 lbs",
    category: "Balloon",
    abilities: "Cute Charm",
    types: ["Normal", "Fairy"],
    weakness: ["Steel", "Poison"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png"
  },
  {
    id: "040",
    name: "Wigglytuff",
    description:
      "Wigglytuff has large, saucerlike eyes. The surfaces of its eyes are always covered with a thin layer of tears. If any dust gets in this Pokémon's eyes, it is quickly washed away.",
    height: "3ft 03in",
    weight: "26.5 lbs",
    category: "Balloon",
    abilities: "Cute Charm",
    types: ["Normal", "Fairy"],
    weakness: ["Steel", "Poison"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png"
  },
  {
    id: "041",
    name: "Zubat",
    description:
      "Zubat remains quietly unmoving in a dark spot during the bright daylight hours. It does so because prolonged exposure to the sun causes its body to become slightly burned.",
    height: "2ft 07in",
    weight: "16.5 lbs",
    category: "Bat",
    abilities: "Inner Focus",
    types: ["Poison", "Flying"],
    weakness: ["Electric", "Ice", "Psychic", "Rock"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png"
  },
  {
    id: "042",
    name: "Golbat",
    description:
      "Golbat loves to drink the blood of living things. It is particularly active in the pitch black of night. This Pokémon flits around in the night skies, seeking fresh blood.",
    height: "5ft 03in",
    weight: "121.3 lbs",
    category: "Bat",
    abilities: "Inner Focus",
    types: ["Poison", "Flying"],
    weakness: ["Electric", "Ice", "Psychic", "Rock"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png"
  },
  {
    id: "043",
    name: "Oddish",
    description:
      "During the daytime, Oddish buries itself in soil to absorb nutrients from the ground using its entire body. The more fertile the soil, the glossier its leaves become.",
    height: "1ft 08in",
    weight: "11.9 lbs",
    category: "Weed",
    abilities: "Chlorophyll",
    types: ["Grass", "Poison"],
    weakness: ["Fire", "Flying", "Ice", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png"
  },
  {
    id: "044",
    name: "Gloom",
    description:
      "Gloom releases a foul fragrance from the pistil of its flower. When faced with danger, the stench worsens. If this Pokémon is feeling calm and secure, it does not release its usual stinky aroma.",
    height: "2ft 07in",
    weight: "19 lbs",
    category: "Weed",
    abilities: "Chlorophyll",
    types: ["Grass", "Poison"],
    weakness: ["Fire", "Flying", "Ice", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png"
  },
  {
    id: "045",
    name: "Vileplume",
    description:
      "Vileplume's toxic pollen triggers atrocious allergy attacks. That's why it is advisable never to approach any attractive flowers in a jungle, however pretty they may be.",
    height: "3ft 11in",
    weight: "41 lbs",
    category: "Flower",
    abilities: "Chlorophyll",
    types: ["Grass", "Poison"],
    weakness: ["Fire", "Flying", "Ice", "Psychic"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png"
  },
  {
    id: "046",
    name: "Paras",
    description:
      "Paras has parasitic mushrooms growing on its back called tochukaso. They grow large by drawing nutrients from this Bug Pokémon host. They are highly valued as a medicine for extending life.",
    height: "1ft",
    weight: "11.9 lbs",
    category: "Mushroom",
    abilities: "Effect Spore",
    types: ["Bug", "Grass"],
    weakness: ["Fire", "Flying", "Bug", "Ice", "Poison", "Rock"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png"
  },
  {
    id: "047",
    name: "Parasect",
    description:
      "Parasect is known to infest large trees en masse and drain nutrients from the lower trunk and roots. When an infested tree dies, they move onto another tree all at once.",
    height: "3ft 03in",
    weight: "65 lbs",
    category: "Mushroom",
    abilities: "Effect Spore",
    types: ["Bug", "Grass"],
    weakness: ["Fire", "Flying", "Bug", "Ice", "Poison", "Rock"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png"
  },
  {
    id: "048",
    name: "Venonat",
    description:
      "Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even minuscule prey.",
    height: "3ft 03in",
    weight: "66.1 lbs",
    category: "Insect",
    abilities: "Compound Eyes",
    types: ["Bug", "Poison"],
    weakness: ["Fire", "Flying", "Psychic", "Rock"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png"
  },
  {
    id: "049",
    name: "Venomoth",
    description:
      "Venomoth is nocturnal—it is a Pokémon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness.",
    height: "4ft 11in",
    weight: "27.6 lbs",
    category: "Poison Moth",
    abilities: "Shield Dust",
    types: ["Bug", "Poison"],
    weakness: ["Fire", "Flying", "Psychic", "Rock"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png"
  },
  {
    id: "050",
    name: "Diglett",
    description:
      "Diglett are raised in most farms. The reason is simple— wherever this Pokémon burrows, the soil is left perfectly tilled for planting crops. This soil is made ideal for growing delicious vegetables.",
    height: "08in",
    weight: "1.8 lbs",
    category: "Mole",
    abilities: "Sand Veil",
    types: ["Ground"],
    weakness: ["Grass", "Ice", "Water"],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png"
  },
  {
    id: "051",
    name: "Dugtrio",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png"
  },
  {
    id: "052",
    name: "Meowth",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png"
  },
  {
    id: "053",
    name: "Persian",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png"
  },
  {
    id: "054",
    name: "Psyduck",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png"
  },
  {
    id: "055",
    name: "Golduck",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png"
  },
  {
    id: "056",
    name: "Mankey",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png"
  },
  {
    id: "057",
    name: "Primeape",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png"
  },
  {
    id: "058",
    name: "Growlithe",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png"
  },
  {
    id: "059",
    name: "Arcanine",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png"
  },
  {
    id: "060",
    name: "Poliwag",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png"
  },
  {
    id: "061",
    name: "Poliwhirl",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png"
  },
  {
    id: "062",
    name: "Poliwrath",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png"
  },
  {
    id: "063",
    name: "Abra",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png"
  },
  {
    id: "064",
    name: "Kadabra",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png"
  },
  {
    id: "065",
    name: "Alakazam",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png"
  },
  {
    id: "066",
    name: "Machop",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png"
  },
  {
    id: "067",
    name: "Machoke",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png"
  },
  {
    id: "068",
    name: "Machamp",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png"
  },
  {
    id: "069",
    name: "Bellsprout",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png"
  },
  {
    id: "070",
    name: "Weepinbell",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png"
  },
  {
    id: "071",
    name: "Victreebel",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png"
  },
  {
    id: "072",
    name: "Tentacool",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png"
  },
  {
    id: "073",
    name: "Tentacruel",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png"
  },
  {
    id: "074",
    name: "Geodude",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png"
  },
  {
    id: "075",
    name: "Graveler",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png"
  },
  {
    id: "076",
    name: "Golem",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png"
  },
  {
    id: "077",
    name: "Ponyta",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png"
  },
  {
    id: "078",
    name: "Rapidash",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png"
  },
  {
    id: "079",
    name: "Slowpoke",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png"
  },
  {
    id: "080",
    name: "Slowbro",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png"
  },
  {
    id: "081",
    name: "Magnemite",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png"
  },
  {
    id: "082",
    name: "Magneton",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png"
  },
  {
    id: "083",
    name: "Farfetch'd",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png"
  },
  {
    id: "084",
    name: "Dodou",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png"
  },
  {
    id: "085",
    name: "Dodrio",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png"
  },
  {
    id: "086",
    name: "Seel",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png"
  },
  {
    id: "087",
    name: "Dewgong",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png"
  },
  {
    id: "088",
    name: "Grimer",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png"
  },
  {
    id: "089",
    name: "Muk",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png"
  },
  {
    id: "090",
    name: "Shellder",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png"
  },
  {
    id: "091",
    name: "Cloyster",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png"
  },
  {
    id: "092",
    name: "Gastly",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png"
  },
  {
    id: "093",
    name: "Haunter",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png"
  },
  {
    id: "094",
    name: "Gengar",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png"
  },
  {
    id: "095",
    name: "Onix",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png"
  },
  {
    id: "096",
    name: "Drowzee",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png"
  },
  {
    id: "097",
    name: "Hypno",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png"
  },
  {
    id: "098",
    name: "Krabby",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png"
  },
  {
    id: "099",
    name: "Kingler",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png"
  },
  {
    id: "100",
    name: "Voltrob",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png"
  },
  {
    id: "101",
    name: "Electrobe",
    description: "",
    height: "ft in",
    weight: " lbs",
    category: "",
    abilities: "",
    types: [""],
    weakness: ["", "", ""],
    outlink: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png"
  }
];

const getAll = () => {
  let array = [];
  pokemon.forEach(el => {
    array.push(el);
  });
  return array;
};

const getAllPokeNames = () => {
  let array = [];
  pokemon.forEach(el => {
    array.push(el.name);
  });

  return array;
};

const getAllPokeLNames = () => {
  let array = [];
  pokemon.forEach(el => {
    array.push(el.name.toLowerCase());
  });

  return array;
};

const getAllId = () => {
  let array = [];
  pokemon.forEach(el => {
    array.push(parseInt(el.id));
  });
  return array;
};

const getByName = name => {
  let exact;
  pokemon.forEach(el => {
    if (el.name.toLowerCase() === name.toLowerCase()) {
      exact = el;
    }
  });
  return exact;
};

const getById = id => {
  let exact;
  pokemon.forEach(el => {
    if (parseInt(el.id) === parseInt(id)) {
      exact = el;
    }
  });
  return exact;
};

const sortByName = array => {
  return array.sort(function(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
};

const sortById = arr => {
  return arr.sort((a, b) => a.id - b.id);
};

export default {
  getAll,
  getAllPokeNames,
  getAllPokeLNames,
  getByName,
  getById,
  getAllId,
  sortByName,
  sortById
};

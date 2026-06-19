const jokes = {
  stinker: {
    low: [
      "There’s a faint smell… probably nothing. 🤨",
      "Something’s a little off, but we’ll ignore it. 😐",
      "A mild odor has entered the room. 🚪💨",
      "It smells… *slightly* suspicious. 👃",
    ],
    medium: [
      "Okay, yeah — that smell is noticeable. 😷",
      "That stench is hanging around longer than expected. 😬",
      "Someone cracked a window… just in case. 🪟💨",
      "This smell is starting to raise questions. 🤔",
    ],
    high: [
      "That stench hit like a critical strike. ☣️",
      "The room has been officially evacuated. 🚨💀",
      "That smell could peel paint off the walls. 🧱🤢",
      "Legends will be told about this stench. 🏆💨",
    ],
  },
  southernbelle: {
    low: [
      "Well, bless your heart, sugar, you're giving me just a *touch* of that Southern charm. 🍑",
      "Oh, honey, don’t worry, that accent’s just a little sprinkle of Southern sweetness! 🍹",
      "You're getting there, sugar, but you need a bit more *sweet tea* to perfect that accent! 🍑",
    ],
    medium: [
      "Oh darling, I can almost hear the *sweet tea* dripping from that accent! 🍑",
      "Well, bless your heart, I can hear that Southern twang starting to shine through! 🍹",
      "Now, that’s more like it! You’re *practically a Southern Belle* with that voice, sugar! 🍑",
    ],
    high: [
      "Honey, your accent is so strong it could melt butter! *Southern charm overload* 🍑",
      "Well, sugar, you're practically a *Southern Belle royalty* with that accent! Get ready to *charm the world*! 🍹",
      "Darling, that accent is a *full-on* sweet tea hurricane – y’all better hold on tight! 🍑",
    ],
  },
  fish: ["In memory of our dear Toran who loved to fish 🎆"],
  keg: [
    "You lit the Gunpowder Barrel… a tiny puff, mostly smoke. 💨😂",
    "Stronghold Gunpowder Barrel rocked their hull — decent damage! ⚓💣",
    "The Keg of Ancient Black Powder obliterated half their ship! 🚢💀",
    "The Black Powder Barrel hit perfectly — total devastation! 🔥🎮",
  ],
sails: [
    "Flying these says you’re ready to cooperate… but still won’t share the last banana 🍌😅",
    "Your forebears are watching… and judging your turn rate 👻⚓",
    "Aristocratic on the seas, peasants in the brig 🏴‍☠️🍷",
    "Prestigious and perfect for guarding treasure… and your pride 🏆",
    "Legendary like your greatest battle… against a seagull 😆",
    "Shark vibes mean you’re either brave… or lunch 🦈😬",
    "Looks explosive, like your cooking skills 💥🔥",
    "Beach vibes only… until a storm says otherwise 🌴🌊",
    "Fierce as a bear, flighty as a bird 🐻🕊️",
    "Elegant enough for a ritual, weird enough for your crew 🎭",
    "Rise from the ashes… or get sunburned trying 🔥😎",
    "Spooky winds scream louder than your crew 👻💨",
    "Undead chic for those killer aesthetic goals ☠️✨",
    "Looks scary, but mostly just snacks bones 🍗💀",
    "Northern lights on canvas… navigation not included 🌌🧭",
    "Dabbling in fashion with nautical flair 🎨⚓",
    "Mythical horse dreams meet salty sea air 🦄🌊",
    "For the pirate who loves explosive souvenirs 💣🏴‍☠️",
    "Beach vibes and memories… sand included 🌴😄",
    "Bear necessities wrapped in pirate chic 🐻🪶",
    "Haunt your enemies with ghostly style 👻⚓",
    "Cursed, but quite fetching on deck ☠️🖤",
    "Paint the sky on your ship’s wings 🌌🚢",
    "Row with style, even if ghosts are aboard 👻🚣",
    "Sharp design for sharp tactics ✂️😎",
    "Forge fear with every breeze 🔥⚔️",
    "Elemental force on canvas 🌪️🔥💧",
    "As free as your wandering crew 🏴‍☠️🌬️",
    "Frog force! Ribbit and row 🐸⚔️",
    "Cool breeze meets frosty fun ❄️🌅",
    "Bones and bravery enshrined ☠️🏟️",
    "Aim high, sail true 🎯🌊",
    "Hideouts and high seas mischief 🏝️😈",
    "Strike with spines and style 🐠✨",
    "Cosmic compass catching constellations 🌠🧭",
    "Lunar luck and sea luck, hopefully both 🌕🍀",
    "Deep reds for deep secrets 🩸🔐",
    "Cursed isn’t unlucky… it’s stylish 😈⚓",
    "Smoky elegance with a hint of regret 🔥😔",
    "Ice on canvas, warmth in heart ❄️❤️",
    "Gold and fire, twice the drama 🔥✨",
    "Glitter? Beard? Yes please 🧔✨",
    "Captain of gold, master of glitter 💰🏴‍☠️",
    "Marauding with bling ⚔️💎",
    "Classy and potassium-rich 🍌😄",
    "Chase gold, catch envy ✨🏃‍☠️",
    "Perfect lighting for pirate selfies 📸✨",
    "Legendary and glowing — almost blinding ⚓💛",
    "Ancient river vibes meet pirate tides 🌊🏺",
    "Sail like you own the desert sea 🏜️🌊",
    "Bones with a golden touch 💀💛",
    "Bark less, sail more 🐕🚢",
    "Bones always look tough in the wind ☠️💪",
    "Aim true across the waves 🎯🌊",
    "Treasure stories stitched into fabric 🗺️✨",
    "Regal protection for your vessel 🤴⚓",
    "Four-leaf breeze of fortune 🍀🌬️",
    "Celebrate moon tides and good finds 🌕🎉",
    "Shiny things love these sails ✨🪶",
    "Fortune favors the flashy ✨💰",
    "Botanical intimidation on deck 🪴😄",
    "Mysterious and “don’t mess with us” 😎⚓",
    "Chaos looks good in the breeze 💨🔥",
    "Get paid, get wind, get glory 💼🌊",
    "Trade winds and tight deals 📦💨",
    "Skulls and strategy ☠️🧠",
    "High skull rank, higher style 🏴‍☠️⚡",
    "Too much effort? Never 🚢💪",
    "Party under the sun and stars 🌺🎉",
    "Ancient bones approve 🦴😂",
    "Prosperity looks this good 💰✨",
    "Master of bones, master of the seas ☠️🏆",
    "Marked for terror and treasure 😈💀",
    "Ritual winds howl for you 🌀⚔️",
    "Royal tails wag aboard 🐕👑",
    "Darkness with a hint of drama 🌑🎭",
    "Cut through waves like a silver knife 🔪🌊",
    "Shiny bones make bold statements ⚰️✨",
    "Rise up, shine bright 🔥🌟",
    "Spirit fire travels fast 💀🔥",
    "Disciplined on deck, chaotic at port 🛡️🍻",
    "Treasure? Or just confusion? 🗺️❓",
    "Giant sea vibes, surfer approved 🐋🌊",
    "Classic black, pirate chic 🖤⚓",
    "Green dreams for every pirate 🍀⛵",
    "Rich hues, richer booty 🍷💰",
    "Camouflage meets style 🌱😄",
    "Look deep, sail deeper 🌊💙",
    "Bright and spirited 🍊🔥",
    "Regal tones for sea royalty 🟣👑",
    "Bold as cannon smoke 🔴💥",
    "Aristocrat of the waves 👑🌊",
    "Sunshine and good vibes 🌞😎",
    "Salute the wind 🫡💨",
    "Honor old legends and new tricks 📜✨",
    "Locked treasures in every thread 🔐🏴‍☠️",
    "Ragged glory on deck 🐀😅",
    "Castaway chic meets pirate swagger 🏝️💪",
    "Dress code: pirate formal 🪶🎩",
    "Chart your course, then improvise 🧭🚢",
    "Scruffy style with salty tales 🐶🌊",
    "Regal winds for epic voyages 👑💨",
    "Rough, tumble, and adorable 🐕‍🦺😄",
    "Winds whisper ancient mischief 🌫️😈",
    "Loyal and loud on the waves 🐶⚓",
    "Jaws and sails alike bite hard 🦈🔥",
    "Velvet sea vibes, pirate tested 🪶🌊",
    "Fire and salt mix well together 🔥⚓",
    "Ocean explorers at heart 🌊🔍",
    "Bark louder, sail prouder 🐶✨",
    "Treasure vibes packed deep 🪙🌊",
    "Legendary beast approved 🐙🌊",
    "Trade winds bring gossip and gold 📦🌬️",
    "Brave the deep with flair 🌊🐚",
    "Skeletons fear your style ☠️💀",
    "Squawk and sail in style 🦜🎉",
    "Party all tide long 🎉🌊",
    "Bones never looked so bold ☠️🖤",
    "Deep feels on deep waves 😢🌊",
    "Scurvy never looked so chic 🐀😎",
    "Dive into style 🌊🔎",
    "Black tentacles for dramatic flair 🐙🖤",
    "Glowing feathers and midnight mischief 🦜🌙",
    "Epic on deck, tales in port 🏅🍻",
    "Victory barks across the waves 🐶🏆",
    "Cultured waves, refined pirates 🪶🍷",
    "Chase the sunrise and your targets 🌅🎯",
    "Jade breeze vibes 🌿🌬️",
    "Quiet but mysteriously sticky 🐚😆",
    "Fiery remains looking cool 🔥🖤",
    "Squawk with sunlight flair 🦜☀️",
  ],
  patronus: [
    "Majestic, heroic, and definitely aware you’re the main character 🦌✨",
    "Quiet, graceful, and emotionally devastating to your enemies 🦌💔",
    "Adorable, loyal, and somehow terrifyingly effective 🦦⚡",
    "Small dog energy, huge magical confidence 🐶✨",
    "Strong, steady, and ready to trample fear 🐎💨",
    "Loyal to the pack, dangerous to cross 🐺🌕",
    "Fast, alert, and always two steps ahead 🐇⚡",
    "Independent, judgmental, and magically superior 🐱✨",
    "Elegant fluff with an air of disapproval 🐈‍⬛🎩",
    "Classic, clever, and quietly judging you 🐈📚",
    "Stylish chaos wrapped in fur 🐈🎨",
    "Orange energy, zero regrets 🐈🔥",
    "Silent, sleek, and absolutely venomous vibes 🐍🖤",
    "Small snake, big warning ⚠️🐍",
    "Harmless-looking but magically committed 🐍😌",
    "Calm swimmer, strong current energy 🐟🌊",
    "Friendly, clever, and emotionally supportive 🐬💙",
    "Pure menace with a perfect silhouette 🦈😬",
    "Fast, shiny, and surprisingly aggressive 🐟⚡",
    "Tiny horse of the sea, big magical heart 🐴🌊",
    "Graceful, dramatic, and impossible to ignore 🦢✨",
    "Loud, loyal, and ready to throw hands 🪿😤",
    "Soaring confidence with sharp vision 🦅🌤️",
    "Precision, focus, and no wasted movement 🦅🎯",
    "Fast dive, faster decisions 🦅⚡",
    "Looks calm until it absolutely isn’t 🦅😐",
    "Small bird, big courage 🐦💪",
    "Friendly, brave, and secretly heroic 🐦❤️",
    "Shiny things? Yours now 🐦✨",
    "Dark feathers, darker thoughts 🐦‍⬛🖤",
    "Wise eyes, silent judgment 🦉📚",
    "Patience, balance, and perfect timing 🐦🌊",
    "Elegant menace with fabulous feathers 🦚✨",
    "Rebirth, resilience, and dramatic entrances 🔥🦅",
    "Rare, eerie, and emotionally complicated 🐴🌫️",
    "Overkill? Absolutely. Worth it? Yes 🐉🔥",
    "Pure magic, zero tolerance for nonsense 🦄✨",
    "Luxury horse energy 🐎💎",
    "Speed, power, and unstoppable grace 🐎⚡",
    "Calm strength with emotional depth 🐎🌙",
    "Headstrong, fearless, and loud about it 🐗💥",
    "Classic brute force 🐗😤",
    "Big presence, bigger confidence 🐻💪",
    "Warm strength with a protective streak 🐻🤎",
    "Cold power, zero fear 🐻❄️",
    "Hardworking, loyal, and criminally underestimated 🦡✨",
    "Do not test this one 🦡🔥",
    "Small, fierce, and deeply offended 🐀⚡",
    "Sneaky but loyal 🐀😌",
    "Fast paws, sharp instincts 🐀💨",
    "Long body, longer grudges 🐀😈",
    "Quiet defender with sharp edges 🦔🛡️",
    "You’re basically a wizard detective 🐶🕵️",
    "Clever, adaptable, and always watching 🦊👀",
    "Cold climate, colder stare 🦊❄️",
    "Classic trickster energy 🦊🔥",
    "Night flyer with spooky charm 🦇🌙",
    "Underground strategist 🐹🧠",
    "Tiny survivor, big courage 🐭✨",
    "Resourceful and underestimated 🐀📦",
    "Prepared. Always 🐿️📦",
    "Maximum energy, minimum chill 🐿️⚡",
    "Builder, protector, problem-solver 🦫🛠️",
    "Smooth swimmer, calm soul 🦦🌊",
    "Blubber-powered confidence 🦭😄",
    "Big tusks, bigger authority 🦭💪",
    "Memory, wisdom, unstoppable presence 🐘✨",
    "Armor-plated determination 🦏💥",
    "Unmovable emotional force 🦛😤",
    "Patient, resilient, and underestimated 🐫🌵",
    "Tall, calm, unbothered 🦒😌",
    "Balanced, bold, and stylish 🦓✨",
    "Natural leader energy 🦁🔥",
    "Strength with grace 🦁🌟",
    "Silent stalker confidence 🐆😈",
    "Dark elegance, no mercy 🐆🖤",
    "Speed, focus, zero hesitation 🐆⚡",
    "Raw power, controlled fury 🐅🔥",
    "Sharp eyes, sharp instincts 🐈‍⬛⚡",
    "Untamed and independent 🐈🌲",
    "Magical sass included 🐱✨",
    "Loyal guardian energy 🐕🛡️",
    "Aggressive loyalty unlocked 🐕🔥",
    "Desert survivor vibes 🐺🌵",
    "Laughs first, strikes harder 🐺😈",
    "Mountain strength, steady resolve 🐐🏔️",
    "Stubborn, dependable, unstoppable 🐐💪",
    "Forceful leadership energy 🐏🔥",
    "Gentle but resilient 🐑✨",
    "Steady support friend 🐄❤️",
    "Pure power, no subtlety 🐂💥",
    "Unbreakable momentum 🐎🔥",
    "Calm strength with wisdom 🐎🌙",
    "Hardworking and underrated 🫏✨",
    "Stubborn excellence 🫏💪",
    "Soft, quick, alert 🐇💨",
    "Speed and instincts 🐇⚡",
    "Unexpected bravery 🐸✨",
    "Chill exterior, loyal heart 🐸😌",
    "Magical creature vibes 🦎✨",
    "Fire-adjacent chaos 🦎🔥",
    "Precision flyer 🦋⚡",
    "Gentle magic energy 🦋✨",
    "Quiet transformation vibes 🦋🌙",
    "Literal fire spirit 🔥🦎",
    "You’re mysterious like that ✨🌫️",
  ],
  animal: [
  	"You’re feeling regal and mighty today! 🦁",
    "Ferocious energy surging through you! 🐯",
    "Strong and grounded vibes. 🐻",
    "Loyal and playful spirit today. 🐶",
    "Curious and clever! 🐱",
    "Sly and mischievous energy. 🦊",
    "Cuddly and relaxed today. 🐼",
    "Calm and sleepy — taking it slow. 🐨",
    "Leaping into the day! 🐸",
    "Cheeky and fun energy. 🐵",
    "Magical and unique — unicorn vibes! 🦄",
    "Sinuous and mysterious. 🐍",
    "Soaring above challenges. 🦅",
    "Wild and adventurous! 🐺",
    "Slow but steady today. 🐢",
  ],
  drink: [
    "Strong and bold — just like your coffee! ☕",
    "Calm and soothing today, like tea. 🍵",
    "Feeling fancy and elegant. 🍸",
    "Refreshing and lively — mojito vibes! 🍹",
    "Chilled out with a casual brew. 🍺",
    "Strong spirit and full-bodied energy! 🥃",
    "Rich and smooth, like red wine. 🍷",
    "Sparkling and celebratory today! 🥂",
    "Fun and playful, like boba tea. 🧋",
    "Zesty and bright — lemonade mood! 🍋",
    "Sweet comfort for the soul. 🍫",
    "Exotic and refined — sake style. 🍶",
    "Simple and wholesome today. 🥛",
    "Juicy and energizing! 🧃",
    "Sweet, fruity, and bubbly vibes. 🍈",
  ],
  colors: [
    "Feeling fresh and natural! 🌿",
    "Calm and serene, like the ocean. 🌊",
    "Sunny and cheerful today! ☀️",
    "Passionate energy detected! 🔥",
    "Mysterious and deep vibes. 🌑",
    "Pure and peaceful today. 🕊️",
    "Royal and majestic energy! 👑",
    "Warm and vibrant today! 🍊",
    "Sparkly and sweet vibes! ✨",
    "Rainbow energy — all the colors of you! 🌈",
  ],
  auravibes: [
    "Your aura is shining bright today! ✨",
    "Flowing like a gentle river. 🌊",
    "Burning with unstoppable energy! 🔥",
    "Centered and strong. 🌱",
    "Mystical and mysterious vibes. 💫",
    "Soft and peaceful aura. 🌸",
    "Charged and vibrant! ⚡",
    "Cosmic energy surrounds you. 🪐",
    "Dreamy and whimsical mood. 🌙",
    "Sparkles everywhere you go! 🌟",
  ],
  piratevibes: [
    "Ahoy! Ready to plunder the day! 🏴‍☠️",
    "All hands on deck, captain! ⚓",
    "Squawking secrets with your feathered friends! 🦜",
    "Gold and jewels are calling your name! 💰",
    "Boom! Cannons at the ready! 🔥",
    "Charting a course to greatness! 🗺️",
    "Taming the sea’s fiercest creatures! 🦑",
  ],
  wizardvibes: [
    "Casting charm spells like a pro! 🪄",
    "Magical energy flows through you ✨",
    "Beware, your incantations may misfire 😏",
    "Seeing visions and mysteries today 🔮",
    "You’re on fire… literally 🔥",
    "Ice cold and magical ❄️",
    "Dark magic, light heart 🌀",
  ],
  outfits: [
    "Looking stylish today! 🧥",
    "Elegance is in your aura. 👗",
    "Active and sporty vibes! 👕",
    "Relaxed and comfy — love it! 🩳",
    "Honoring tradition with style. 👘",
    "Cozy and warm for the day. 🧣",
    "Trendy and fashionable! 🕶️",
    "Heroic energy in your outfit! 🦸",
    "Fun and playful — embrace the costume! 🎭",
    "Power moves only, dressed to conquer! 🥋",
  ],
  elements: [
    "Burning bright today! 🔥",
    "Flowing smoothly and cool. 💧",
    "Strong and grounded. 🌱",
    "Light and breezy vibes. 💨",
    "Electric energy surging! ⚡",
    "Chilly and sharp! ❄️",
    "Mysterious and cosmic. 🌌",
  ],
  powers: [
    "Unstoppable strength today! 💪",
    "Reading minds like a pro! 🧠",
    "Inventive genius in full swing! 🦾",
    "Time waits for no one — you control it! 🌀",
    "Disappear like a shadow. 🕶️",
    "Fast as lightning! ⚡",
    "Cosmic awareness at its peak! 🌌",
  ],
  pirateoutfits: [
    "Looking ready to plunder! 🪖",
    "Captain chic on point! 🧥",
    "Your parrot is your hype squad! 🦜",
    "Gold shines brighter on you 💰",
    "Anchors aweigh! ⚓",
    "Sharp and deadly today! 🗡️",
    "Walking like a true pirate 🦴",
  ],
  wizarditems: [
    "Your wand is ready! 🪄",
    "Spellbook full of secrets! 📜",
    "Seeing all the mysteries 🔮",
    "Robe flowing magically 🧙",
    "Potion brewed to perfection 🧪",
    "Mirror reveals your true self 🪞",
    "Flying high on broomstick adventures 🧹",
  ],
  elementalitems: [
    "Feeling the fire within! 🔥",
    "Smooth and flowing energy 💧",
    "Grounded and strong 🌱",
    "Breezy and light today 💨",
    "Shocking power surging ⚡",
    "Chill and steady ❄️",
    "Mysterious cosmic energy 🌌",
  ],
  auraitems: [
    "Shining bright like a crystal ✨",
    "Floral energy blooming 🌸",
    "Cosmic vibes surround you 🪐",
    "Flowing like water today 🌊",
    "Fiery passion burning 🔥",
    "Moonlight magic shines 🌙",
  ],
  sloth: {
    low: [
      "you move slower than a Windows 95 update. 🐢",
      "did you even wake up today? the tree is worried. 🌳",
      "your sloth level is so low even snails are lapping you. 🐌",
    ],
    medium: [
      "look at you, moving at a casual 0.2 mph. proud of the effort! 💪",
      "a balanced sloth — naps and snacks in perfect harmony. 😴🍃",
      "you're getting the hang of slow living. zen vibes only. 🧘‍♂️",
    ],
    high: [
      "KING OF NAPS. MASTER OF LEAF EATING. TRUE SLOTH ROYALTY. 👑",
      "even the jungle applauds your laziness. 🌿👏",
      "you've achieved maximum chill. the gods of sloth salute you. 😌🦥",
    ],
  },
  tinkabell: {
    low: [
      "your fairy level is FUCKING DISGUSTING. 😂",
      "You shine bright like a diamond...covered in shit. 💩",
    ],
    medium: [
      "Your wings are growing. 🦋",
      "fairy training is starting to pay off. 💖",
    ],
    high: [
      "peter pan would be so proud. 🦸",
      "LOOK AT THAT PISS CURSE FLY. 🪄",
    ],
  },
  fox: {
    low: [
      "You are a sleepy fox today. 🦊",
      "Your tail is drooping a little. Maybe get some rest. 💤",
    ],
    medium: [
      "You are a curious fox exploring new burrows. 🔎",
      "Your cunning is showing today. 🦊",
    ],
    high: [
      "You are a sly fox stealing hearts and sandwiches. ❤️",
      "Everyone’s keeping an eye on you, clever fox. 👀",
    ],
  },
  goodgirl: {
    low: [
      "You might need a few more pats to reach your full potential. 🤔",
      "Trying, but could be better behaved today. 😅",
    ],
    medium: [
      "Doing well — you deserve a treat. 🍪",
      "A proper good girl performance today. 💕",
    ],
    high: [
      "Excellent! Gold star for best behavior. 🌟",
      "You’ve achieved maximum good girl mode. 👑",
    ],
  },
  flame: {
    low: [
      "Agent Flame sent you a cold shoulder today. ❄️",
      "The spark is weak — maybe light a match. 🔥",
    ],
    medium: [
      "Agent Flame nods in quiet approval. 👌",
      "There’s a warm glow between you and Flame. 🔥",
    ],
    high: [
      "Agent Flame can’t stop talking about you. 💬",
      "You are burning bright in Flame’s memory today. 🔥",
    ],
  },
  sleep: {
    low: [
      "You’re well-rested — alert and ready. 🦸",
      "You don’t need much sleep today. 😎",
    ],
    medium: [
      "You could use a nap later. 💤",
      "You’re doing fine, but bed is calling. 🛏️",
    ],
    high: [
      "You desperately need sleep. 😴",
      "Someone get you a pillow immediately. 🛌",
    ],
  },
  beard: {
    low: ["Patchy but proud! 😅", "Still in early access version. ⏳"],
    medium: ["Solid beard game! 💪", "Respectable chin forest. 🌲"],
    high: [
      "Wizard mode unlocked! 🧙‍♂️",
      "That beard tells stories of adventure. 📖",
    ],
  },
  catmom: {
    low: [
      "Trying her best, but the cat still judges her. 😼",
      "Cat Mom status: The cat allows *minimal* head pats. 🐾😅",
    ],
    medium: [
      "Solid Cat Mom energy! 💖",
      "Cat-approved… at least until dinner time. 🍽️🐱",
    ],
    high: [
      "Supreme Cat Mom — the cat has chosen her as their human. 😻👑",
      "Expert-level cat whisperer detected. 🐈✨",
    ],
  },
  hair: {
    low: ["Short and snappy! ✂️", "Buzzcut of confidence. 😎"],
    medium: ["Perfect flow length! 💇", "Balanced and beautiful. 🌸"],
    high: ["Rapunzel could never! 💇‍♀️", "That mane is a national treasure. 🇺🇸"],
  },
  pp: {
    low: ["Compact and efficient! 🏋️‍♂️", "Fun-sized champion! 🏆"],
    medium: ["Perfectly balanced. ⚖️", "Reliable and effective! 💪"],
    high: ["Legendary proportions! 📏", "Folklore-worthy size! 📚"],
  },
  mila: {
    low: [
      "Mila glanced and walked away. 🐾",
      "She tolerates your existence. 🐱",
    ],
    medium: [
      "Mila approves for now. 👍",
      "She blinked slowly. That is cat love. 💖",
    ],
    high: ["Mila purrs loudly in your honor! 😻", "Mila adores you. 🐾"],
  },
  ivy: {
    low: [
      "Ivy is pretending you do not exist. 😒",
      "Denied cuddle privileges. ❌",
    ],
    medium: ["Ivy tolerates you. 🤔", "She let you exist in her space. 🏡"],
    high: [
      "Ivy loves you unconditionally! 💚",
      "You are the chosen lap human! 🏆",
    ],
  },
  theo: {
    low: ["Theo is pretending you do not exist. 😤", "Theo left the room. 🏃‍♂️"],
    medium: ["Theo tolerates you. 🤝", "Theo sat next to you. 🐾"],
    high: [
      "Theo loves you unconditionally! 💙",
      "Theo will nap on you later. 💤",
    ],
  },
  fluffy: {
    low: [
      "Fluffy wagged half a tail. 🐾",
      "Fluffy is ignoring your messages. 💬",
    ],
    medium: ["Fluffy smiled a little. 😊", "Fluffy seems mildly impressed. 👀"],
    high: [
      "Fluffy cannot stop purring! 🐱",
      "Fluffy thinks you are the best human! 🌟",
    ],
  },
  daddy: {
    low: ["Not very daddy today. 😬", "Maybe work on your confidence. 💪"],
    medium: ["You are somewhat daddy. 👨", "The vibes are respectable. 👍"],
    high: [
      "Certified DILF energy. 😎",
      "The room goes quiet when you enter. 🕴",
    ],
  },
  mama: {
    low: ["Not very mama today. 😬", "Maybe work on your confidence. 💪"],
    medium: ["You are somewhat mama. 👨", "The vibes are respectable. 👍"],
    high: [
      "Certified MAMA energy. 😎",
      "The room goes quiet when you enter. 🕴",
    ],
  },
  pirate: {
    low: ["You dropped your compass. 🧭", "Your ship is still in dock. 🚢"],
    medium: ["You are swashbuckling nicely. ⚓", "The crew respects you. 👑"],
    high: ["Captain material! 🏴‍☠️", "The seas whisper your name! 🌊"],
  },
  treasure_hunting: {
    low: [
      "Ye found an empty chest... again. 🪣",
      "Turns out the 'X' was bird poop. 🕊️",
    ],
    medium: [
      "You dug up some fine silver doubloons! 💰",
      "Aye, your shovel arm be strong today! ⛏️",
    ],
    high: [
      "You struck gold, Captain! 🏆",
      "Legend says the treasure sings your name! 🎶🏴‍☠️",
    ],
  },
  sea_navigation: {
    low: [
      "You're sailing in circles... 🌪️",
      "Landlubber, that’s not north! 🧭",
    ],
    medium: [
      "Smooth sailing, matey. 🌊",
      "Your course be true, as any good sailor’s should. ⚓",
    ],
    high: [
      "You ride the stars like a legend! 🌟",
      "The sea parts before ye, Navigator Supreme! 🚢✨",
    ],
  },
  ship_maintenance: {
    low: [
      "The hull’s leaking like a sieve! 💦",
      "Ye forgot to swab the deck... again. 🧽",
    ],
    medium: [
      "Aye, she’s shipshape and sturdy. ⚒️",
      "The rigging’s tight, the sails clean! ⛵",
    ],
    high: [
      "Your ship gleams brighter than gold! 🏴‍☠️✨",
      "Even Poseidon admires your craftsmanship! 🌊🔧",
    ],
  },
  swordsmanship: {
    low: [
      "You tripped over your own cutlass. 🗡️😅",
      "Careful! That’s the blunt side, mate. 🙃",
    ],
    medium: [
      "Your strikes be fierce and true! ⚔️",
      "Steel sings in your hands! 🪶",
    ],
    high: [
      "You duel like a legend of the seas! 🏴‍☠️",
      "No blade can best ye, Captain! 👑⚔️",
    ],
  },
  swashbuckling: {
    low: [
      "You dropped your hat mid-swing! 🎩",
      "Not quite the hero’s entrance you imagined... 😬",
    ],
    medium: [
      "You swing across the deck with style! 🦜",
      "That’s a fine buckle you’ve swashed! 💃🏴‍☠️",
    ],
    high: [
      "The crowd cheers your daring stunts! 🎉",
      "Even Blackbeard would applaud ye! ☠️🔥",
    ],
  },
  plunder: {
    low: [
      "Ye raided an empty barrel... 🪣",
      "No loot today, just splinters. 🪵",
    ],
    medium: [
      "You grabbed a fair haul! 💰",
      "The booty be plentiful, matey! 🏴‍☠️",
    ],
    high: [
      "You emptied a fleet’s worth of gold! 🏆",
      "The sea trembles at your greed! 💎☠️",
    ],
  },
  cannon_use: {
    low: [
      "You fired... backwards. 💥🙈",
      "The fuse went out. Maybe next time. 🕯️",
    ],
    medium: [
      "Good shot, ye hit the target! 🎯",
      "A clean blast! The crew cheers! 🏴‍☠️💥",
    ],
    high: ["Perfect aim, Captain! 💀", "The enemy ship’s in splinters! 💣🔥"],
  },
  crew_morale: {
    low: [
      "The crew’s grumbling, Captain... 😠",
      "Mutiny whispers on the wind. 🌪️",
    ],
    medium: [
      "The men sing shanties and drink rum! 🍻",
      "Your crew stands loyal and strong. ⚓",
    ],
    high: [
      "The crew would follow ye to Davy Jones! ☠️",
      "Your name lifts hearts across the sea! 🏴‍☠️❤️",
    ],
  },
  intimidation: {
    low: [
      "A seagull just stole your hat. 🐦",
      "The tavern laughed instead of fleeing. 🍺😂",
    ],
    medium: [
      "Your glare be enough to freeze a man’s soul. 👀",
      "The crew obeys without question. ☠️",
    ],
    high: [
      "Your mere presence makes krakens tremble! 🐙💀",
      "Legends whisper your wrath! ⚓🔥",
    ],
  },
  parley: {
    low: [
      "You spilled rum on the negotiation table. 🍹",
      "They took your word... and your boots. 🥾",
    ],
    medium: [
      "You struck a fair bargain, Captain. ⚖️",
      "Your tongue be as sharp as your sword. 💬⚔️",
    ],
    high: [
      "You turned enemies into allies with a word! 🤝🏴‍☠️",
      "Your diplomacy saves fleets! 🕊️🌊",
    ],
  },
  swordlunge: {
    low: ["You tripped on the lunge. 🤦‍♂️", "Practice makes perfect. 💪"],
    medium: ["A clean strike. ⚔️", "Your stance is strong. 💪"],
    high: ["A masterful lunge! 🏆", "Your enemies tremble in fear! 😱"],
  },
  butt: {
    low: ["Flat as a plank. 🚫", "Not much bounce today. 🛑"],
    medium: ["Nice curve going! 🍑", "A respectable peach. 🍑"],
    high: ["Legend status! 👑", "That is a certified fruit salad! 🥝"],
  },
  anger: {
    low: ["Calm as a monk. 🧘", "You are chill today. 😌"],
    medium: ["Mildly irritated. 😤", "Someone cut you off in traffic. 🚗"],
    high: ["Rage incarnate! 😡", "Your keyboard fears for its life. ⌨️"],
  },
  princess: {
    low: ["A little scruffy today. 👑", "Your tiara is crooked. 👑"],
    medium: ["Graceful enough. 🌸", "A respectable royal presence. 👸"],
    high: [
      "Royalty radiates from you! 👑",
      "All hail the majestic princess! 👑",
    ],
  },
  nerd: {
    low: ["Barely read one wiki today. 📚", "Low nerd output. 🤓"],
    medium: ["Decent nerd energy. ⚡", "Glasses adjusted successfully. 👓"],
    high: [
      "Big brain mode activated! 🤯",
      "You just debugged reality itself! 🖥️",
    ],
  },
  bonk: {
    low: [
      "That was more of a gentle tap than a bonk. 😅",
      "You missed completely. Try again. 🙃",
    ],
    medium: [
      "A solid bonk — respectably executed. 👊",
      "You gave a good bonk. Not too hard, not too soft. 🤜",
    ],
    high: [
      "That bonk echoed through the land! 🔊",
      "Maximum bonk achieved! Someone’s going to feel that. 😬",
    ],
  },
  boop: {
    low: [
      "A small, hesitant boop. 👃",
      "Barely a touch — shy booper detected. 🤭",
    ],
    medium: [
      "Boop executed successfully. 👏",
      "That was a decent boop. Nose contact confirmed. 👃",
    ],
    high: [
      "A powerful boop! 💥",
      "The world trembles before your booping power. 🌍",
    ],
  },
  fliptable: {
    low: [
      "You flipped a coaster instead of a table. 🍽️",
      "The table wobbled but didn’t flip. 😬",
    ],
    medium: [
      "Table flipped! Drinks everywhere. 🍸",
      "You flipped the table with respectable rage. 😤",
    ],
    high: [
      "That table didn’t stand a chance. ⚡",
      "Utter chaos. The table flew across the room. 💥",
    ],
  },
  highfive: {
    low: [
      "You missed the hand completely. 🙈",
      "Awkward air high-five. Maybe next time. ✋",
    ],
    medium: [
      "Nice contact! That was a proper high-five. 👏",
      "Crisp sound, solid form — approved. 👍",
    ],
    high: [
      "Perfect synchronization! That clap could summon thunder. ⚡",
      "Legendary high-five! Everyone felt that energy. 🔥",
    ],
  },
  hug: {
    low: [
      "A quick and slightly awkward hug. 😬",
      "You went for a hug, but it turned into a polite pat. 🤗",
    ],
    medium: [
      "A warm, friendly hug. 🫂",
      "That was a solid hug — not too tight, not too loose. 🤗",
    ],
    high: [
      "A bear hug that could break your bones! 🐻",
      "You’re enveloped in warmth and love. 🥰",
    ],
  },
  kiss: {
    low: [
      "You missed and kissed the air. 💨",
      "It was more of a smooch sound than an actual kiss. 💋",
    ],
    medium: [
      "A sweet little kiss. 😘",
      "You shared a proper kiss — charming work. 💖",
    ],
    high: [
      "That kiss could melt hearts. ❤️",
      "Romance level: professional. 💍",
    ],
  },
  love: {
    low: [
      "You tried to love, but it came out awkward. 😬",
      "Not feeling very affectionate today. 🤷‍♂️",
    ],
    medium: [
      "A healthy dose of love shared. 💌",
      "You spread a reasonable amount of love. 🌹",
    ],
    high: [
      "Overflowing with love and positivity! 💖",
      "You radiate pure affection today. ✨",
    ],
  },
  pat: {
    low: [
      "You missed and patted the air. 👋",
      "That pat was a bit weak, try again. 🙈",
    ],
    medium: [
      "A gentle and comforting pat. 🤗",
      "Perfect pat form. Well done. 👏",
    ],
    high: [
      "An excellent pat — pure serotonin. 🧠",
      "Your pats bring joy to all. 😻",
    ],
  },
  slap: {
    low: [
      "That was more of a light tap. 🤏",
      "You hesitated — weak slap detected. 🧐",
    ],
    medium: [
      "A solid slap. Just the right amount of sting. 👋",
      "You delivered a respectable slap. 👏",
    ],
    high: [
      "A thunderous slap heard across chat. ⚡",
      "That slap will be remembered forever. 🏆",
    ],
  },
  spank: {
    low: [
      "A shy and hesitant spank. 🙈",
      "You tried, but it barely registered. 💤",
    ],
    medium: [
      "A confident spank with good form. 💪",
      "That spank landed nicely — well done. 👏",
    ],
    high: [
      "A flawless spank. 10/10 execution. 👏",
      "You spanked like a pro — impressive work. 👑",
    ],
  },
  chainshot: {
    low: [
      "That chain shot missed so wide it started a new ocean. 🌊",
      "Bro hit the clouds instead of the mast. ☁️",
      "Even the Kraken laughed at that shot. 🐙",
    ],
    mid: [
      "A clean mast rattle! They definitely felt that. 🪢",
      "That chain shot wobbled their wheel a bit! ⚓",
      "Solid hit — the mast is questioning its life choices. 🌴",
    ],
    high: [
      "A PERFECT mast hit! They’re not sailing anywhere. 💥",
      "You turned their mast into a limp noodle. 🍜",
      "Dead-on! Even Flameheart would applaud. 🔥",
    ],
  },
  sniper: {
    low: [
      "You sniped the air… stylishly, though. 💨",
      "The bullet travelled so far from the target it retired. 🛑",
      "That wasn't a miss — that was a warning shot. Right? 👀",
    ],
    mid: [
      "A clean shot! Not bad, marksman. 🎯",
      "You clipped them enough to ruin their day. 👍",
      "Respectable aim — the seas approve. 🌊",
    ],
    high: [
      "HEADSHOT! Their soul left before their body did. 💀",
      "Absolute laser precision! 🔫",
      "Your aim is illegal in at least 12 regions. 🚫",
    ],
  },
  swordlord: {
    low: [
      "You swing like a drunken skeleton. ☠️",
      "Your sword asked for a refund. ⚔️",
      "Even a chicken could parry you. 🐔",
    ],
    mid: [
      "A fine flurry of strikes! 🗡️",
      "You definitely know which end of the sword to hold. 👍",
      "Respectable swordplay — the tavern claps for you. 🍺",
    ],
    high: [
      "You *ARE* the Sword Lord. Opponents kneel before you. 👑",
      "Your blade moves faster than lag. ⚡",
      "Even the Ferry of the Damned has your punch card. 💀",
    ],
  },
  lunge: {
    low: [
      "You lunged straight into the ocean. Smooth. 🌊",
      "You charged the sword… and immediately missed everything. 🎯",
      "That lunge had the power of a wet noodle. 🍜",
    ],
    mid: [
      "A respectable lunge! You definitely scared someone. 😳",
      "Clean forward dash! Very stabby. 🗡️",
      "You lunged with determination and minimum embarrassment. ⚔️",
    ],
    high: [
      "A PERFECT sword lunge — they never saw it coming! ⚡",
      "You travelled so far even the map couldn’t keep up. 🗺️",
      "A god-tier lunge that Poseidon himself would fear. 🌊👑",
    ],
  },
  tuck: {
    low: [
      "Your tuck was so bad even skeletons pointed at you. 💀",
      "You hid in plain sight. Literally in the open. 😐",
      "You tried to tuck but became environmental furniture. 🪑",
    ],
    mid: [
      "A decent tuck! Someone *might* overlook you. 👀",
      "You blended in… sort of. Like a bush in a desert. 🌵",
      "Not the worst hide — at least no one screamed 'PLAYER ON BOARD!'.",
    ],
    high: [
      "Legendary tuck! They walked past you five times. 😂",
      "You vanished so well even YOU questioned where you went. 🫥",
      "A God-tier tuck. Athena would whisper your name. 🏴‍☠️",
    ],
  },
  gh: {
    low: [
      "You dug up more worms than treasure. 🪱",
      "You followed the map upside down, didn’t you? 🗺️",
      "Gold Hoarders would like a word… and it’s ‘why?’",
    ],
    mid: [
      "A solid haul of chests! The Hoarders nod approvingly. 💰",
      "Your shovel work is looking spicy today. 🪓",
      "Good treasure run — your pockets jingle nicely. 🔔",
    ],
    high: [
      "Treasure MASTER! You could find gold blindfolded. 🏆",
      "You unearthed chests like a pirate machine. ⚙️💰",
      "The Hoarders promote you to 'Chief Shovel Wizard'. 🪄",
    ],
  },
  oos: {
    low: [
      "You killed one skeleton… and it tripped. 💀",
      "Your skull haul is more bone dust than anything. 🧂",
      "Order of Souls says: 'Try again, sweetie.'",
    ],
    mid: [
      "Good skull collection! Captains fear you. ⚔️",
      "You bonked plenty of boney bois today. 💀🔨",
      "A respectable harvest of skulls. Spooky! 👻",
    ],
    high: [
      "You’re a Skeleton Slayer Supreme! 💀🔥",
      "Even the Gold Skeletons run from you now. 🏃‍♂️",
      "Order of Souls gives you a VIP lantern. 🏮",
    ],
  },
  ma: {
    low: [
      "You delivered… absolutely nothing on time. 📦💀",
      "Half the chickens escaped. Again. 🐔",
      "Merchant Alliance blacklists your shipping services.",
    ],
    mid: [
      "Good trade routes! Cargo delivered with care. 📦👌",
      "The merchants applaud your efficiency. 📝",
      "You transported more pigs than a whole fleet.",
    ],
    high: [
      "Master Trader! Jeff Bezos fears your logistics. 🚚💨",
      "You delivered everything pristine — even the plants. 🌱",
      "Merchant Alliance offers you a CEO position. 📊",
    ],
  },
  athena: {
    low: [
      "Athena herself sighed loudly at your haul. 😮‍💨",
      "You brought… crumbs of treasure. ✨",
      "Ghosts laughed at you. Ghosts. 👻",
    ],
    mid: [
      "Decent Athena haul! Legends nod respectfully. 💎",
      "You’ve got that mysterious glow going on. ✨",
      "Your Athena stash would make even a Legend smile.",
    ],
    high: [
      "A TRUE PIRATE LEGEND RUN! 💎🔥",
      "You plundered Athena like a mythical beast. 🐉",
      "Athena blesses your voyage forevermore! 🌌",
    ],
  },
  reaper: {
    low: [
      "You sank zero ships… but lost three. ☠️",
      "Your flag collection is just sadness. 🚩",
      "Reapers disown you temporarily.",
    ],
    mid: [
      "Decent PvP run! Ships definitely sank. ⚓🔥",
      "Your flag haul smells of victory. 🏴‍☠️",
      "You terrorised the seas a respectable amount.",
    ],
    high: [
      "ABSOLUTE DEMON OF THE SEAS! 🔥💀",
      "Whole servers fear your shadow. 🌑",
      "You collected more flags than the Olympics. 🏅",
    ],
  },
  hunter: {
    low: [
      "You caught one fish… and burnt it. 🐟🔥",
      "Your ledger score is a culinary crime. 🍳🚫",
      "The Hunter’s Call pretends not to know you.",
    ],
    mid: [
      "Good fishing! The sea gives its approval. 🎣",
      "You cooked meals that won’t kill someone. Probably. 🍲",
      "A solid ledger run! Merrick nods proudly.",
    ],
    high: [
      "MASTER CHEF OF THE SEAS! 👨‍🍳🌊",
      "Fish fear your bait. 🔥🐟",
      "You turned cooking into an art form. 🎨",
    ],
  },
  throwshoe: {
    low: [
      "You threw a slipper instead of a shoe. 🥿",
      "Missed completely. Shoe is lost forever. 🏃‍♂️",
    ],
    medium: [
      "Direct hit! That was a clean throw. 🎯",
      "You lobbed the shoe with respectable accuracy. 👟",
    ],
    high: [
      "Bullseye! The shoe hit perfectly. 🎯",
      "That throw could win the Olympics. 🥇",
    ],
  },
  lift: {
    low: [
      "You barely lifted it off the ground. 🏋️‍♂️",
      "That bar isn’t impressed yet. 😑",
    ],
    medium: [
      "Solid lift! Good form and focus. 💪",
      "You’re warming up nicely. 🔥",
    ],
    high: ["Beast mode activated! 💥", "That lift shook the gym! 🏋️‍♀️"],
  },
  run: {
    low: ["You walked more than you ran. 🚶‍♂️", "A light jog counts, right? 🏃‍♂️"],
    medium: [
      "Smooth stride and steady breathing. 🌬️",
      "You’re keeping a great pace! 🏃‍♀️",
    ],
    high: ["You sprinted like the wind! 🌪️", "Track star energy today! 🏅"],
  },
  sprint: {
    low: [
      "More of a power walk than a sprint. 🚶‍♀️",
      "You tripped over enthusiasm. 🤸‍♂️",
    ],
    medium: ["Quick burst of energy! ⚡", "You dashed like you meant it! 🏃‍♂️"],
    high: ["Lightning couldn’t keep up! ⚡", "You left dust trails behind! 🌪️"],
  },
  deadlift: {
    low: ["That barbell didn’t move much. 🏋️‍♂️", "You gave it a polite tug. 🙃"],
    medium: [
      "Solid lift! Muscles engaged. 💪",
      "Good pull with clean form. 🏋️‍♀️",
    ],
    high: ["Ground shaking deadlift! 🌍", "That was a personal best! 🏆"],
  },
  curl: {
    low: [
      "Those curls need more conviction. 💪",
      "You lifted air with style. 🕺",
    ],
    medium: ["Nice pump forming! 💥", "Steady curl with proper form. 🏋️‍♂️"],
    high: ["Biceps of steel! 🏋️‍♀️", "Those arms could crush walnuts! 🌰"],
  },
  row: {
    low: ["You gently rocked the boat. 🚣‍♀️", "Barely moved the oars. 🌊"],
    medium: ["Smooth rowing pace. ⛵", "Consistent strokes, nice rhythm. 🏆"],
    high: [
      "You powered through the water! 🌊",
      "Rowing champion performance! 🏅",
    ],
  },
  stretch: {
    low: ["You reached halfway there. 🤸‍♂️", "Could use more bend next time. 🙆‍♀️"],
    medium: ["Flexible and focused. 🧘‍♂️", "That stretch looked clean! 🧘‍♀️"],
    high: [
      "Gymnast levels of flexibility! 🤸‍♀️",
      "You could join a yoga class! 🧘‍♀️",
    ],
  },
  gold: {
    low: [
      "Your pouch jingles modestly. 💰",
      "Not much shine in there today. 💸",
    ],
    medium: [
      "Your pouch feels a bit heavier. 🤑",
      "Steady earnings for a good day. 💵",
    ],
    high: [
      "Your pouch overflows with coins! 💰",
      "You could buy the tavern today! 🍻",
    ],
  },
  squeeze: {
    low: [
      "That’s the weakest handshake I’ve ever felt! 🖐️",
      "Barely a squeeze, try harder! 💪",
      "You could use a bit more grip strength. 🤲",
    ],
    medium: [
      "Not bad, you’re getting stronger! 💪",
      "Nice squeeze, a bit more power next time. 💥",
      "You're really getting the hang of it. 🖐️",
    ],
    high: [
      "You could crush a watermelon with that squeeze! 🍉",
      "Squeeze of a champion! 🏆",
      "Your grip is as strong as steel! 🔩",
    ],
  },
  push: {
    low: [
      "That push barely moved anything! 🛑",
      "You pushed, but the wall didn’t budge. 🧱",
      "Keep pushing, you’ll get stronger! 💪",
    ],
    medium: [
      "Nice push, you’ve got some power! 💥",
      "You're pushing the limits! 🚀",
      "Solid push, not bad at all. 👍",
    ],
    high: [
      "That push is like a bulldozer! 🚜",
      "You're pushing like a pro! 🏋️‍♂️",
      "That was a monster push! 💥",
    ],
  },
  jump: {
    low: [
      "That was more of a hop than a jump. 🐇",
      "You’re getting there, but not quite yet. ⬆️",
      "Not bad for a small jump! 🦘",
    ],
    medium: [
      "Great jump! You’re getting some air. 🏀",
      "Nice leap, you’re on your way. 🏃‍♂️",
      "Good jump, you're in the zone! 🔥",
    ],
    high: [
      "You jumped so high, you almost touched the stars! ✨",
      "You’ve got wings, my friend! 🕊️",
      "That was an Olympic-level jump! 🏅",
    ],
  },
  press: {
    low: [
      "You barely moved the barbell. 🏋️‍♂️",
      "That’s just a warm-up press. 💪",
      "You’re starting slow, but it’s okay. 🧘‍♂️",
    ],
    medium: [
      "Good press! You’ve got some solid form. 💪",
      "Nice press, you’re making progress. 📈",
      "You’re building some solid strength. 💥",
    ],
    high: [
      "That press could lift a truck! 🚚",
      "You’re pressing like a powerlifter! 🏋️‍♀️",
      "That press could break records! 🏆",
    ],
  },
  kick: {
    low: [
      "That was more of a gentle tap. 👢",
      "Not a kick, more like a nudge! 💨",
      "You need to put more force into that. ⚡",
    ],
    medium: [
      "Nice kick, good form! 👣",
      "Your kick’s getting stronger! 🦵",
      "Solid kick, you're improving. 💪",
    ],
    high: [
      "That kick would knock someone out cold! 🥋",
      "Your kick is unstoppable! 💥",
      "That kick would make a superhero proud! 💪",
    ],
  },
  happiness: {
    low: [
      "You might need a little more sunshine today! 🌥️",
      "Try smiling, it helps. 😊",
    ],
    medium: [
      "Not bad, a bit of a smile would help. 🙂",
      "You're halfway there, keep smiling. 😁",
    ],
    high: [
      "You're glowing with happiness today! 🌟",
      "You're the embodiment of joy right now! 😄",
    ],
  },
  anger: {
    low: [
      "Just a bit grumpy, huh? 😤",
      "You’re feeling a little off today. 😒",
    ],
    medium: [
      "You're getting there, but take a deep breath. 🌬️",
      "A little fire in your soul today. 🔥",
    ],
    high: [
      "You're ready to smash things, calm down! 🧨",
      "Easy there, Hulk. Let's take a breath. 😤",
    ],
  },
  calmness: {
    low: ["A bit stressed today? 😬", "Maybe a deep breath might help. 🧘‍♂️"],
    medium: [
      "You're doing alright, deep breath. 🌿",
      "Keeping it together, not bad. 😌",
    ],
    high: [
      "You're the calmest person in the room right now. 😎",
      "Nothing can shake your calmness today. 🧘‍♀️",
    ],
  },
  joy: {
    low: [
      "Not feeling too joyful yet, huh? 🙁",
      "Try smiling and maybe some ice cream? 🍦",
    ],
    medium: [
      "You're getting there, keep the good vibes rolling. ✌️",
      "Things are looking brighter, huh? 🌞",
    ],
    high: [
      "You're radiating pure joy right now! 🌟",
      "Your joy could light up a whole city! 🏙️",
    ],
  },
  excitement: {
    low: [
      "Not much excitement today, maybe try something new? 🌱",
      "You're just waking up to the fun. 😴",
    ],
    medium: [
      "You're getting excited, just a little more! ⚡",
      "Some excitement is building up! 😆",
    ],
    high: [
      "You're practically bouncing with excitement! 🤩",
      "You’re so excited, it’s contagious! 😜",
    ],
  },
  love_group: {
    low: ["barely noticed you today. 🙄", "is ignoring you again. 🤷‍♂️"],
    medium: ["seems to like you okay. 🙂", "shared a little love. 💘"],
    high: [
      "is obsessed with you today. 😍",
      "can't stop thinking about you. 💭",
    ],
  },
  hate_group: {
    low: ["barely annoyed with you. 😑", "shrugged it off. 🤷‍♀️"],
    medium: ["gave you a dirty look. 😒", "is not impressed. 🙄"],
    high: ["absolutely furious with you. 😡", "can't stand you today. 🤬"],
  },
  skills_group: {
    low: ["Your aim is terrible today. 🎯", "Not very focused at all. 🤔"],
    medium: [
      "You’re doing alright, could be sharper. 🧐",
      "Pretty decent performance. 👌",
    ],
    high: ["Perfect form and focus. 🏆", "You could teach others today. 🎓"],
  },
  dj: {
    low: [
      "Your beats are so soft, even the plants are falling asleep. 🪴",
      "You just pressed play, right? Because that’s the loudest thing you’ve done today. 🔇",
      "Your DJ name should be ‘Volume: 1’. 🔉",
    ],
    medium: [
      "Not bad, you could drop a sick beat… if the speakers were louder. 🎶",
      "You’re halfway to headliner status… keep spinning! 🎧",
      "Your playlist is solid, just don’t forget to smile between tracks. 😊",
    ],
    high: [
      "Drop that bass! 🎧 The crowd didn’t know they needed it until now. 🎶",
      "You just turned the dance floor into a hurricane of awesome. 🌪️",
      "Your mixes are so fire, the fire extinguisher just ran out. 🔥",
    ],
  },
  bb: {
    low: ["A humble hero 😌", "Small but mighty 💕"],
    medium: [
      "Perfectly balanced, as all things should be ✨",
      "Top-tier symmetry 💖",
    ],
    high: ["An absolute legend 😳", "That’s... gravitationally impressive 🌌"],
  },
};
export default jokes;

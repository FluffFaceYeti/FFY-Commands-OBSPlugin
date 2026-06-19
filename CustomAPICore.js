import express from "express";
import crypto from "crypto";

// Main data files
import jokes from "./data/helpers/jokes.js";
import specialUsers from "./data/helpers/specialusers.js";
import specialInteractions from "./data/helpers/specialinteractions.js";

// Numeric command configs
import stats from "./data/numeric-commands/default-commands/stats.js";
import piracy from "./data/numeric-commands/default-commands/piracy.js";
import actions from "./data/numeric-commands/default-commands/actions.js";
import carry from "./data/numeric-commands/default-commands/carry.js";
import emotions from "./data/numeric-commands/default-commands/emotions.js";
import gym from "./data/numeric-commands/default-commands/gym.js";
import hate from "./data/numeric-commands/default-commands/hate.js";
import love from "./data/numeric-commands/default-commands/love.js";
import hold from "./data/numeric-commands/default-commands/hold.js";
import personality from "./data/numeric-commands/default-commands/personality.js";
import seaofthieves from "./data/numeric-commands/default-commands/seaofthieves.js";
import skills from "./data/numeric-commands/default-commands/skills.js";
import customnumericcommands from "./data/numeric-commands/customnumericcommands.js";

// List command configs
import animal from "./data/list-commands/default-commands/animals.js";
import drink from "./data/list-commands/default-commands/drinks.js";
import auravibes from "./data/list-commands/default-commands/aura.js";
import colors from "./data/list-commands/default-commands/colors.js";
import auraitems from "./data/list-commands/default-commands/auraitems.js";
import elementalitems from "./data/list-commands/default-commands/elementalitems.js";
import elements from "./data/list-commands/default-commands/elements.js";
import fish from "./data/list-commands/default-commands/fish.js";
import keg from "./data/list-commands/default-commands/keg.js";
import outfits from "./data/list-commands/default-commands/outfits.js";
import patronus from "./data/list-commands/default-commands/patronus.js";
import piratevibes from "./data/list-commands/default-commands/pirate.js";
import pirateoutfits from "./data/list-commands/default-commands/pirateoutfits.js";
import powers from "./data/list-commands/default-commands/powers.js";
import sails from "./data/list-commands/default-commands/sails.js";
import wizardvibes from "./data/list-commands/default-commands/wizardvibes.js";
import wizarditems from "./data/list-commands/default-commands/wizarditems.js";
import SINGLE_VALUE_TYPES from "./data/helpers/singlelistitems.js";
import customItems from "./data/list-commands/customlistcommands.js";

//custom commands and other helper functions
import doNotTrack from "./data/helpers/donottracklist.js";
import interactions from "./data/helpers/interactions.js";
import listGroups from "./data/list-commands/helpers/listmaps.js";
import numericGroups from "./data/numeric-commands/helpers/numbericmaps.js";
import { TIMEZONE, CHANNEL_NAME } from "./data/helpers/config.js";
import getActionWord from "./data/helpers/actionwordreplacer.js";
import {
  aspectsOfTheDay,
  aspectsOfTheDayTriggers,
  listAspectTriggers,
  aspectOfTheDayAliases,
} from "./data/helpers/aspectsoftheday.js";
const app = express();

const customCommands = {};

// ===========================================
// CONSENT TIMER
// ===========================================

const CONSENT_TIMEOUT_MS = 60000; // 60s

// ===========================================
// TEMP CONSENT STORAGE
// ===========================================

const pendingConsents = new Map();

// ===========================================
// HELPERS
// ===========================================

function generateValue(seed, offset, max, min = 0, user = "") {
  const hash = crypto
    .createHash("md5")
    .update(seed + offset + user + CHANNEL_NAME)
    .digest("hex");
  const num = parseInt(hash.slice(0, 8), 16);
  return (num % (max - min + 1)) + min;
}

function generateGlobalValue(seed, offset, max, min = 0) {
  const today = new Date().toLocaleDateString("en-GB");

  const hash = crypto
    .createHash("md5")
    .update(seed + offset + today)
    .digest("hex");

  const num = parseInt(hash.slice(0, 8), 16);
  return (num % (max - min + 1)) + min;
}

function generateSmartValue(type, offset, max, min = 0, user = "") {
  if (SINGLE_VALUE_TYPES.has(type)) {
    return generateGlobalValue(type, offset, max, min);
  }
  return generateValue(type, offset, max, min, user);
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function isJokeEnabled(req, type) {
  const global = req.query.jokes;
  const specific = req.query[`joke_${type}`];

  if (type === "bb") {
    if (global === "true" || specific === "true") return true;
    return false;
  }

  if (global === "false") return false;
  if (global === "true") return true;

  if (specific === "false") return false;
  if (specific === "true") return true;

  return false;
}

function getJoke(req, type, value, cfg = null, index = null) {
  if (!isJokeEnabled(req, type)) return "";

  if (typeof value !== "number" || value == null) {
    return "";
  }

  if (type === "bb") {
    return "";
  }

  if (cfg && typeof value === "number") {
    const min = cfg.min ?? 0;
    const max = cfg.max ?? 100;
    let levels = [30, 70];

    if (Array.isArray(cfg.levels) && cfg.levels.length === 2) {
      levels = cfg.levels;
    }

    let level;
    if (value < levels[0]) {
      level = "low";
    } else if (value >= levels[0] && value <= levels[1]) {
      level = "medium";
    } else {
      level = "high";
    }

    if (jokes[type] && jokes[type][level]) {
      const joke = pickRandom(jokes[type][level]);
      return "" + joke;
    }
  }

  const fallbackLevel = value <= 30 ? "low" : value <= 70 ? "medium" : "high";

  if (jokes[type] && jokes[type][fallbackLevel]) {
    const fallbackJoke = pickRandom(jokes[type][fallbackLevel]);
    return "" + fallbackJoke;
  }

  return "";
}

function cleanUsername(name = "") {
  return name.replace(/^@/, "").toLowerCase();
}

function formatDisplayName(name = "") {
  return name.startsWith("@") ? name : `@${name}`;
}

function spaceIf(unitSpace) {
  return unitSpace ? " " : "";
}

function inchesToCm(inches) {
  return Math.round(inches * 2.54);
}

// ===========================================
// Rank Emojis for Leaderboards
// ===========================================

const rankEmoji = (i) => {
  const emojis = ["", "", "", "4", "5"];
  return emojis[i] || `${i + 1}.`;
};

// ===========================================
// MINI GAMES
// ===========================================

function dailyPairSeed(gameType, sender, target) {
  const today = new Date().toLocaleDateString("en-GB");
  return `${today}-${gameType}-${[sender, target].sort().join("-")}`;
}

// ===========================================
// RANDOM GAMES (UNTRACKED)
// ===========================================

function runRandomGame(type, sender) {
  const game = randomGames[type];
  if (!game) return null;

  const roll = Math.floor(Math.random() * (game.max - game.min + 1)) + game.min;

  let result = roll;

  if (game.map) {
    result = game.map[roll];
  }

  const action = game.action || "rolled";
  const label = game.label.toLowerCase();

  let message = `${sender}, you ${action} a ${label} and got **${result}**! ${game.emoji}`;

  if (game.crits) {
    if (roll === game.max) message += " **CRITICAL SUCCESS!**";
    if (roll === game.min) message += " **CRITICAL FAIL!**";
  }

  return message;
}

// ===========================================
// ROCK PAPER SCISSORS
// ===========================================

function rockPaperScissors(sender, target) {
  const pairSeed = dailyPairSeed("rps", sender, target);
  const hash = crypto.createHash("md5").update(pairSeed).digest("hex");
  const num = parseInt(hash.slice(0, 8), 16);

  const choices = ["rock", "paper", "scissors"];
  const senderMove = choices[num % 3];
  const targetMove = choices[(num >> 2) % 3];

  if (senderMove === targetMove)
    return `${sender}, it's a tie with ${target}! Both chose ${senderMove}. `;

  if (
    (senderMove === "rock" && targetMove === "scissors") ||
    (senderMove === "paper" && targetMove === "rock") ||
    (senderMove === "scissors" && targetMove === "paper")
  )
    return `${sender} wins! ${senderMove} beats ${targetMove}. `;

  return `${target} wins! ${targetMove} beats ${senderMove}. `;
}

// ===========================================
// TUG OF WAR
// ===========================================

function tugOfWar(sender, target) {
  const pairSeed = dailyPairSeed("tug", sender, target);
  const hash = crypto.createHash("md5").update(pairSeed).digest("hex");
  const num = parseInt(hash.slice(0, 8), 16);

  const senderStrength = (num % 100) + 1;
  const targetStrength = ((num >> 4) % 100) + 1;

  if (senderStrength > targetStrength)
    return `${sender} wins! Pulled with ${senderStrength} vs ${target}'s ${targetStrength}. `;
  if (senderStrength < targetStrength)
    return `${target} wins! Pulled with ${targetStrength} vs ${sender}'s ${senderStrength}. `;
  return `It's a tie! Both pulled with ${senderStrength}. `;
}

// ===========================================
// DICE ROLL
// ===========================================

function diceRoll(sender, target) {
  const pairSeed = dailyPairSeed("dice", sender, target);
  const hash = crypto.createHash("md5").update(pairSeed).digest("hex");
  const num = parseInt(hash.slice(0, 8), 16);

  const senderRoll = (num % 6) + 1;
  const targetRoll = ((num >> 3) % 6) + 1;

  if (senderRoll > targetRoll)
    return `${sender} wins! ${senderRoll} vs ${target}'s ${targetRoll}`;
  if (senderRoll < targetRoll)
    return `${target} wins! ${targetRoll} vs ${sender}'s ${senderRoll}`;
  return `It's a tie! Both rolled ${senderRoll}. `;
}

// ===========================================
// COIN FLIP
// ===========================================

function coinFlip(sender, target) {
  const pairSeed = dailyPairSeed("coin", sender, target);
  const hash = crypto.createHash("md5").update(pairSeed).digest("hex");
  const num = parseInt(hash.slice(0, 8), 16);
  const result = num % 2 === 0 ? "Heads" : "Tails";

  return `${sender} flips a coin... ${result}! `;
}

// ===========================================
// ROCK PAPER SCISSORS LIZARD SPOCK
// ===========================================

function rpsls(sender, target) {
  const pairSeed = dailyPairSeed("rpsls", sender, target);
  const hash = crypto.createHash("md5").update(pairSeed).digest("hex");
  const num = parseInt(hash.slice(0, 8), 16);

  const choices = ["rock", "paper", "scissors", "lizard", "spock"];
  const senderMove = choices[num % 5];
  const targetMove = choices[(num >> 3) % 5];
  const winConditions = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["rock", "scissors"],
  };

  if (senderMove === targetMove)
    return `${sender} ties with ${target}! Both chose ${senderMove}. `;

  if (winConditions[senderMove].includes(targetMove))
    return `${sender} wins! ${senderMove} beats ${targetMove}. `;

  return `${target} wins! ${targetMove} beats ${senderMove}. `;
}

// ===========================================
// HIGH OR LOW
// ===========================================

function highOrLow(sender, target) {
  const pairSeed = dailyPairSeed("highlow", sender, target);
  const hash = crypto.createHash("md5").update(pairSeed).digest("hex");
  const num = parseInt(hash.slice(0, 8), 16);
  const secretNumber = (num % 100) + 1;

  if (secretNumber > 50)
    return `${sender} guessed higher — correct! The number was ${secretNumber}. `;
  return `${target} guessed lower — correct! The number was ${secretNumber}. `;
}

// ===========================================
// REGISTER MINI GAMES
// ===========================================

const miniGames = {
  rps: rockPaperScissors,
  tugofwar: tugOfWar,
  diceroll: diceRoll,
  coinflip: coinFlip,
  rpsls: rpsls,
  highorlow: highOrLow,
};

// ===========================================
// RANDOM PERSONAL GAMES
// ===========================================

const randomGames = {
  d20: {
    min: 1,
    max: 20,
    label: "D20",
    action: "rolled",
    emoji: "",
    crits: true,
  },
  d12: {
    min: 1,
    max: 12,
    label: "D12",
    action: "rolled",
    emoji: "",
  },
  randomcoinflip: {
    min: 0,
    max: 1,
    label: "coin",
    action: "flipped",
    emoji: "",
    map: ["Heads", "Tails"],
  },
};

// ===========================================
// AUTO-ADD RANDOM GAMES TO DO NOT TRACK
// ===========================================

Object.keys(randomGames).forEach((game) => {
  if (!doNotTrack.includes(game)) {
    doNotTrack.push(game);
  }
});

// ===========================================
// COMPATIBILITY CHECKER
// ===========================================

miniGames.compat = (senderRaw, userRaw) => {
  const sender = cleanUsername(senderRaw);
  const target = cleanUsername(userRaw);
  const senderDisplay = formatDisplayName(senderRaw);
  const targetDisplay = formatDisplayName(userRaw);

  if (!userRaw || sender === target) {
    return `${senderDisplay}, you can’t test compatibility with yourself `;
  }

  const today = new Date().toLocaleDateString("en-GB");
  const seed = `${today}-compat-${[sender, target].sort().join("-")}`;
  const value = generateValue(seed, "compat", 100, 1, sender);

  let message = "";

  if (value >= 80) {
    message = ` ${senderDisplay} and ${targetDisplay} are ${value}% compatible — almost soulmates!`;
  } else if (value >= 60) {
    message = ` Sparks fly! ${senderDisplay} & ${targetDisplay} are ${value}% in sync.`;
  } else if (value >= 40) {
    message = ` ${senderDisplay} and ${targetDisplay} are only ${value}% compatible… could work with effort. `;
  } else {
    message = ` ${senderDisplay} and ${targetDisplay} share ${value}% chemistry — better as friends.`;
  }

  return message;
};

// ===========================================
// BOOTY BATTLE
// ===========================================

miniGames.bootybattle = (senderRaw, userRaw) => {
  const sender = cleanUsername(senderRaw);
  const target = cleanUsername(userRaw);
  const senderDisplay = formatDisplayName(senderRaw);
  const targetDisplay = formatDisplayName(userRaw);

  if (!userRaw || sender === target) {
    return ` ${senderDisplay} tried to compare booties with themselves... confidence or madness? `;
  }

  const today = new Date().toLocaleDateString("en-GB");

  // Match the normal !booty value
  const seedSender = `${today}-butt-${sender}-${sender}`;
  const seedTarget = `${today}-butt-${target}-${target}`;

  const cfg = stats.butt;

  const senderBooty = generateValue(
    seedSender,
    "butt",
    cfg.max,
    cfg.min,
    sender,
  );

  const targetBooty = generateValue(
    seedTarget,
    "butt",
    cfg.max,
    cfg.min,
    target,
  );

  if (senderBooty === targetBooty) {
    return ` ${senderDisplay} and ${targetDisplay} both brought equally legendary booties to battle! It's a draw at ${senderBooty}% fruitiness! `;
  }

  const winner =
    senderBooty > targetBooty
      ? { name: senderDisplay, booty: senderBooty }
      : { name: targetDisplay, booty: targetBooty };

  const loser =
    senderBooty > targetBooty
      ? { name: targetDisplay, booty: targetBooty }
      : { name: senderDisplay, booty: senderBooty };

  const outcomes = [
    ` ${winner.name} shook their booty with ${winner.booty}% fruitiness and completely outclassed ${loser.name}'s ${loser.booty}% attempt!`,
    ` ${winner.name} wins the Booty Battle! ${loser.name} can only admire that magnificent ${winner.booty}% booty from afar.`,
    ` The crowd goes wild as ${winner.name}'s ${winner.booty}% booty steals the show, leaving ${loser.name}'s ${loser.booty}% booty in the shadows!`,
    ` Across all seven seas, tales will be told of ${winner.name}'s legendary ${winner.booty}% booty. Better luck next time, ${loser.name}!`,
    ` ${loser.name} put up a good fight, but ${winner.name}'s ${winner.booty}% booty proved too powerful to defeat!`,
  ];

  return pickRandom(outcomes);
};

// ===========================================
// PLUNDER RAID
// ===========================================

miniGames.plunderraid = (senderRaw, userRaw) => {
  const sender = cleanUsername(senderRaw);
  const target = cleanUsername(userRaw);
  const senderDisplay = formatDisplayName(senderRaw);
  const targetDisplay = formatDisplayName(userRaw);

  if (!userRaw || sender === target) {
    return ` ${senderDisplay} tried to raid their own ship... that’s mutiny, ye scallywag! `;
  }

  const today = new Date().toLocaleDateString("en-GB");
  const seedSender = `${today}-plunder-${sender}`;
  const seedTarget = `${today}-plunder-${target}`;

  const cfg = piracy.plunder;
  const senderLoot = generateValue(
    seedSender,
    "plunder",
    cfg.max,
    cfg.min,
    sender,
  );
  const targetLoot = generateValue(
    seedTarget,
    "plunder",
    cfg.max,
    cfg.min,
    target,
  );

  if (senderLoot === targetLoot) {
    return ` ${senderDisplay} and ${targetDisplay} raided the same island and found equal treasure (${senderLoot}% each)! A fair share for both crews! `;
  }

  const winner =
    senderLoot > targetLoot
      ? { name: senderDisplay, loot: senderLoot }
      : { name: targetDisplay, loot: targetLoot };
  const loser =
    senderLoot > targetLoot
      ? { name: targetDisplay, loot: targetLoot }
      : { name: senderDisplay, loot: senderLoot };

  const outcomes = [
    ` ${winner.name} pillaged with unmatched fury, looting ${winner.loot}% of the treasure! ${loser.name} was left with scraps (${loser.loot}%). `,
    ` ${winner.name} struck gold while ${loser.name} found only coconuts. A rich victory! `,
    ` ${winner.name}’s crew raided the fort, leaving ${loser.name} adrift in shame! (${winner.loot}% vs ${loser.loot}%) `,
    ` ${winner.name} took the booty and the bragging rights! ${loser.name}’s crew be swabbing decks for a week! `,
  ];

  return pickRandom(outcomes);
};

// ===========================================
// PISTOL DUEL
// ===========================================

miniGames.pistolfight = (senderRaw, userRaw) => {
  const sender = cleanUsername(senderRaw);
  const target = cleanUsername(userRaw);
  const senderDisplay = formatDisplayName(senderRaw);
  const targetDisplay = formatDisplayName(userRaw);

  if (!userRaw || sender === target) {
    return ` ${senderDisplay} tried to duel themselves... and missed! `;
  }

  const today = new Date().toLocaleDateString("en-GB");
  const seedSender = `${today}-pistol-${sender}`;
  const seedTarget = `${today}-pistol-${target}`;

  const cfg = piracy.intimidation;
  const senderAim = generateValue(
    seedSender,
    "intimidation",
    cfg.max,
    cfg.min,
    sender,
  );
  const targetAim = generateValue(
    seedTarget,
    "intimidation",
    cfg.max,
    cfg.min,
    target,
  );

  if (senderAim === targetAim) {
    return ` ${senderDisplay} and ${targetDisplay} fired at once — smoke clears, both unharmed! A draw at ${senderAim}%! `;
  }

  const winner =
    senderAim > targetAim
      ? { name: senderDisplay, aim: senderAim }
      : { name: targetDisplay, aim: targetAim };
  const loser =
    senderAim > targetAim
      ? { name: targetDisplay, aim: targetAim }
      : { name: senderDisplay, aim: senderAim };

  const outcomes = [
    ` ${winner.name} shot true — ${loser.name} drops their pistol in surrender! (${winner.aim}% vs ${loser.aim}%) `,
    ` ${loser.name} fired too soon! ${winner.name} takes the win with cold precision! `,
    ` ${winner.name} blasted ${loser.name} clean off the deck! (${winner.aim}% vs ${loser.aim}%) `,
    ` ${winner.name} wins the pistol duel! ${loser.name} be smokin’ — and not in a good way. `,
  ];

  return pickRandom(outcomes);
};

// ===========================================
// SHIP BATTLE DUEL
// ===========================================

miniGames.shipbattle = (senderRaw, userRaw) => {
  const sender = cleanUsername(senderRaw);
  const target = cleanUsername(userRaw);
  const senderDisplay = formatDisplayName(senderRaw);
  const targetDisplay = formatDisplayName(userRaw);

  if (!userRaw || sender === target) {
    return ` ${senderDisplay} tried to battle their own ship… the crew be confused! `;
  }

  const today = new Date().toLocaleDateString("en-GB");
  const seedSender = `${today}-ship-${sender}`;
  const seedTarget = `${today}-ship-${target}`;

  const cfg = piracy.cannon_use;
  const senderPower = generateValue(
    seedSender,
    "cannon_use",
    cfg.max,
    cfg.min,
    sender,
  );
  const targetPower = generateValue(
    seedTarget,
    "cannon_use",
    cfg.max,
    cfg.min,
    target,
  );

  if (senderPower === targetPower) {
    return ` ${senderDisplay} and ${targetDisplay} fired their cannons — a perfect draw! Both ships still float (${senderPower}% vs ${targetPower}%)! `;
  }

  const winner =
    senderPower > targetPower
      ? { name: senderDisplay, power: senderPower }
      : { name: targetDisplay, power: targetPower };
  const loser =
    senderPower > targetPower
      ? { name: targetDisplay, power: targetPower }
      : { name: senderDisplay, power: senderPower };

  const outcomes = [
    ` ${winner.name} broadside-shattered ${loser.name}’s hull! (${winner.power}% vs ${loser.power}%) — glorious victory! `,
    ` ${loser.name}’s ship be sinking! ${winner.name} claims the spoils of the sea! `,
    ` ${winner.name} caught the wind just right — ${loser.name} be sent to Davy Jones’ locker! `,
    ` ${winner.name} wins the naval clash! ${loser.name} waves the white flag (${winner.power}% vs ${loser.power}%). `,
  ];

  return pickRandom(outcomes);
};

// ===========================================
// SWORD FIGHT DUEL
// ===========================================

miniGames.swordfight = (senderRaw, userRaw) => {
  const sender = cleanUsername(senderRaw);
  const target = cleanUsername(userRaw);
  const senderDisplay = formatDisplayName(senderRaw);
  const targetDisplay = formatDisplayName(userRaw);

  if (!userRaw || sender === target) {
    return ` ${senderDisplay} tried to duel themselves... ye fool! `;
  }

  const today = new Date().toLocaleDateString("en-GB");
  const seedSender = `${today}-sword-${sender}`;
  const seedTarget = `${today}-sword-${target}`;

  const cfg = piracy.swordsmanship;
  const senderSkill = generateValue(
    seedSender,
    "swordsmanship",
    cfg.max,
    cfg.min,
    sender,
  );
  const targetSkill = generateValue(
    seedTarget,
    "swordsmanship",
    cfg.max,
    cfg.min,
    target,
  );

  if (senderSkill === targetSkill) {
    return ` ${senderDisplay} and ${targetDisplay} clashed blades in an even match! Both fought bravely with skill ${senderSkill}%! `;
  }

  const winner =
    senderSkill > targetSkill
      ? { name: senderDisplay, skill: senderSkill }
      : { name: targetDisplay, skill: targetSkill };
  const loser =
    senderSkill > targetSkill
      ? { name: targetDisplay, skill: targetSkill }
      : { name: senderDisplay, skill: senderSkill };

  const outcomes = [
    ` ${winner.name} disarmed ${loser.name} with a dazzling display of blade mastery (${winner.skill}% vs ${loser.skill}%)! `,
    ` ${loser.name} took a step back as ${winner.name}’s sword gleamed under the sun — victory to ${winner.name}! `,
    ` ${winner.name} struck true! ${loser.name} drops their sword, humbled by skill ${winner.skill}%! `,
    ` ${winner.name} wins the duel! ${loser.name} shall be swabbing decks tonight (${winner.skill}% vs ${loser.skill}%). `,
  ];

  return pickRandom(outcomes);
};

// ===========================================
// PP DUEL
// ===========================================

miniGames.ppduel = (senderRaw, userRaw) => {
  const sender = cleanUsername(senderRaw);
  const target = cleanUsername(userRaw);
  const senderDisplay = formatDisplayName(senderRaw);
  const targetDisplay = formatDisplayName(userRaw);

  if (!userRaw || sender === target) {
    return `${senderDisplay} tried to duel themselves… awkward. `;
  }

  const today = new Date().toLocaleDateString("en-GB");

  const seedSender = `${today}-pp-${sender}-${sender}`;
  const seedTarget = `${today}-pp-${target}-${target}`;

  const cfg = stats.pp;
  const senderPP = generateValue(seedSender, "pp", cfg.max, cfg.min, sender);
  const targetPP = generateValue(seedTarget, "pp", cfg.max, cfg.min, target);

  console.log("ppduel sender:", seedSender, senderPP);
  console.log("ppduel target:", seedTarget, targetPP);

  if (senderPP === targetPP) {
    return `${senderDisplay} and ${targetDisplay} clashed in an epic PP duel… it’s a draw at ${senderPP} inches each! `;
  }

  const winner =
    senderPP > targetPP
      ? { name: senderDisplay, pp: senderPP }
      : { name: targetDisplay, pp: targetPP };

  const loser =
    senderPP > targetPP
      ? { name: targetDisplay, pp: targetPP }
      : { name: senderDisplay, pp: senderPP };

  const outcomes = [
    `${winner.name} swung their PP with ${winner.pp} inches of fury, flattening ${loser.name}’s measly ${loser.pp} inch attempt! `,
    `${loser.name} tried their best, but ${winner.name}’s ${winner.pp} inch weapon of mass distraction was too powerful. `,
    `In a blinding flash, ${winner.name} defeated ${loser.name} — PP dominance secured (${winner.pp} vs ${loser.pp})! `,
    `${loser.name} cried “It’s not the size that matters!” right before ${winner.name} proved it actually does (${winner.pp} vs ${loser.pp}). `,
  ];

  return pickRandom(outcomes);
};

// ===========================================
// DAILY STORAGE & COUNTERS
// ===========================================

const wordsOfTheDay = {};
const dailyConsents = {};
const lock = {};
const statCounters = {};
const commandCounters = {};
const giveawayEntries = [];
const giveawayWinners = [];
const santaStats = {};
let interactionStats = {};
let interactionStatsDate = "";

// ===========================================
// VALUE WINNER OF THE DAY MESSAGES - NUMERIC
// ===========================================

const aspectOfTheDayMessages = (senderDisplay, value, cfg, joke, chosen) => {
  const isList = Array.isArray(cfg.list);

  if (isList) {
    return `${senderDisplay}, your ${cfg.label} today is ${chosen}! You are the ${cfg.label} of the Day! ${joke}`;
  }

  return `${senderDisplay}, your ${cfg.label} is ${value}${cfg.unit ? ` ${cfg.unit}` : ""} today! You are the ${cfg.label} of the Day! ${joke}`;
};

// ===========================================
// WHO IS WINNER OF THE DAY MESSAGES
// ===========================================

const aspectOfTheDayQueryMessages = (winner, cfg) => {
  const name = formatDisplayName(winner.user);

  if (cfg.list) {
    return `${name}, your ${cfg.label} today is ${winner.chosen}! You are the ${cfg.label} of the Day!`;
  }

  return `${name}, your ${cfg.label} is ${winner.value} today! You are the ${cfg.label} of the Day!`;
};

// ===========================================
// WORD COUNTERS - CONFIGURATION
// ===========================================

const wordCounters = {
  waffles: { label: "waffles" },
  cookies: { label: "cookies" },
  coffee: { label: "coffee" },
  bananas: { label: "bananas" },
  hugs: { label: "hugs" },
};

// ===========================================
// MAIN CODE
// ===========================================

function recordInteraction(sender, target, type) {
  if (!interactionStats[target]) interactionStats[target] = {};
  if (!interactionStats[target]._from) interactionStats[target]._from = {};
  if (!interactionStats[target]._from[sender])
    interactionStats[target]._from[sender] = {};

  interactionStats[target][type] = (interactionStats[target][type] || 0) + 1;
  interactionStats[target]._from[sender][type] =
    (interactionStats[target]._from[sender][type] || 0) + 1;

  statCounters[sender] = statCounters[sender] || {};
  statCounters[sender][type] = (statCounters[sender][type] || 0) + 1;
  commandCounters[type] = (commandCounters[type] || 0) + 1;
}

app.get("/", (req, res) => {
  
  // ===================================================
  // UNIVERSAL REQUEST + ARGUMENT PARSER
  // ===================================================

  let senderRaw = req.query.sender || req.query.user || "someone";
  let userRaw = req.query.user || "";
  const type = (req.query.type || "beard").toLowerCase();
  const today = new Date().toLocaleDateString("en-GB");
  const sender = cleanUsername(senderRaw);
  const senderDisplay = formatDisplayName(senderRaw);
  const text = (req.query.text || "").trim();
  const parts = text ? text.split(/\s+/).filter(Boolean) : [];
  const args = parts.slice(1);
  let target = cleanUsername(userRaw) || null;
  let targetDisplay = userRaw ? formatDisplayName(userRaw) : "";

  if (!userRaw && args.length > 0) {
    const possible = args[0].replace("@", "").trim();

    if (possible && possible.toLowerCase() !== sender.toLowerCase()) {
      userRaw = possible;
      target = cleanUsername(possible);
      targetDisplay = formatDisplayName(possible);
    }
  }

  if (args.length === 0) {
    if (req.query.arg) args.push(req.query.arg);
    if (req.query.arg1) args.push(req.query.arg1);
    if (req.query.args) args.push(req.query.args);
    if (req.query.interaction) args.push(req.query.interaction);
  }

  if (!target) target = sender;
  if (!targetDisplay) targetDisplay = senderDisplay;

  if (specialUsers[sender] && specialUsers[sender][type]) {
    return res.send(specialUsers[sender][type]);
  }

  // ===========================================
  // 🟢 KEEP-ALIVE PING
  // ===========================================

  if (type === "ping") {
    return res.send("");
  }

  // ===================================================
  // ASPECTS OF THE DAY
  // ===================================================

  const isAspectType =
    aspectsOfTheDay[type] !== undefined ||
    listAspectTriggers[type] !== undefined;

  if (isAspectType) {
    if (!lock[type]) lock[type] = false;
    if (lock[type]) {
      return res.send(
        `Please wait a moment, ${type} of the Day is being updated.`,
      );
    }
    lock[type] = true;
  }

  try {
    const seed = `${today}-${type}-${sender}-${target}`;
    let value,
      message = "";

    // ===========================================
    // COMMAND HANDLING
    // ===========================================

    if (text.startsWith("!")) {
      const command = text.slice(1).trim().split(/\s+/)[0].toLowerCase();

      if (typeof customCommands !== "undefined" && customCommands[command]) {
        const commandDetails = customCommands[command];

        return res.send(
          commandDetails.message.replace("{sender}", senderDisplay),
        );
      } else {
        return res.send(` Invalid command. Try !grouphug, !grouppat, etc.`);
      }
    }

    // ===========================================
    // INTERACTIONS
    // ===========================================

    if (interactions.includes(type) || type === "accept" || type === "deny") {
      const requireConsent = req.query.consent === "true";
      const today = new Date().toLocaleDateString("en-GB");

      if (interactionStatsDate !== today) {
        interactionStats = {};
        interactionStatsDate = today;
      }

      // Helper: should this interaction be random?
      const isRandom = doNotTrack.includes(type);

      const getInteractionValue = (seedBase, senderName) => {
        if (isRandom) {
          return Math.floor(Math.random() * 100) + 1;
        }
        return generateValue(seedBase, type, 100, 1, senderName);
      };

      const maybeRecord = (s, t, ty) => {
        if (!doNotTrack.includes(ty)) {
          recordInteraction(s, t, ty);
        }
      };

      // ===========================================
      // ACCEPT
      // ===========================================

      if (type === "accept") {
        const pending = Array.from(pendingConsents.entries()).find(
          ([, v]) => v.target === sender,
        );

        if (!pending) {
          return res.send(`${senderDisplay}, there is nothing to accept.`);
        }

        const [pendingKey, info] = pending;
        clearTimeout(info.timeout);
        pendingConsents.delete(pendingKey);

        if (!dailyConsents[today]) dailyConsents[today] = {};
        if (!dailyConsents[today][sender]) dailyConsents[today][sender] = [];
        if (!dailyConsents[today][sender].includes(info.sender)) {
          dailyConsents[today][sender].push(info.sender);
        }

        const special =
          specialInteractions[info.sender]?.[info.target]?.[info.type] ||
          specialInteractions["anyone"]?.[info.target]?.[info.type] ||
          specialInteractions[info.sender]?.["anyone"]?.[info.type] ||
          null;

        const seed = `${today}-${info.type}-${info.sender}-${info.target}`;
        const value = getInteractionValue(seed, info.sender);

        if (special) {
          const forcedValue =
            special.value !== undefined ? special.value : value;

          const message = special.message
            .replaceAll("@{sender}", formatDisplayName(info.sender))
            .replaceAll("@{target}", formatDisplayName(info.target))
            .replaceAll("{value}", forcedValue);

          maybeRecord(info.sender, info.target, info.type);
          return res.send(message);
        }

        const joke = getJoke(req, info.type, value, { min: 1, max: 100 });
        const actionWord = getActionWord(info.type);

        const message = `${formatDisplayName(
          info.sender,
        )} ${actionWord} ${formatDisplayName(
          info.target,
        )} with ${value}% power!${joke}`;

        maybeRecord(info.sender, info.target, info.type);
        return res.send(message);
      }

      // ===========================================
      // DENY
      // ===========================================

      if (type === "deny") {
        const pending = Array.from(pendingConsents.entries()).find(
          ([, v]) => v.target === sender,
        );

        if (!pending) {
          return res.send(`${senderDisplay}, there is nothing to deny.`);
        }

        const [pendingKey, info] = pending;
        clearTimeout(info.timeout);
        pendingConsents.delete(pendingKey);

        return res.send(
          ` ${formatDisplayName(info.target)} denied your ${
            info.type
          }, ${formatDisplayName(info.sender)}!`,
        );
      }

      const actionWord = getActionWord(type);

      if (!userRaw || sender === cleanUsername(userRaw)) {
        const value = doNotTrack.includes(type)
          ? Math.floor(Math.random() * 100) + 1
          : generateValue(
              `${today}-${type}-${sender}-${sender}`,
              type,
              100,
              1,
              sender,
            );

        const joke = getJoke(req, type, value, { min: 1, max: 100 });
        const actionWord = getActionWord(type);

        const message = `${senderDisplay} ${actionWord} themselves with ${value}% power!${joke}`;

        if (!doNotTrack.includes(type)) {
          recordInteraction(sender, sender, type);
        }

        return res.send(message);
      }

      const alreadyApproved =
        dailyConsents[today]?.[target]?.includes(sender) || false;

      if (requireConsent && !alreadyApproved) {
        if (pendingConsents.has(target)) {
          return res.send(
            `${targetDisplay} already has a pending consent request.`,
          );
        }

        const timeout = setTimeout(() => {
          pendingConsents.delete(target);
        }, CONSENT_TIMEOUT_MS);

        pendingConsents.set(target, { sender, target, type, timeout });

        return res.send(
          ` ${senderDisplay} wants to ${type} ${targetDisplay}!\n` +
            `${targetDisplay}, type !accept or !deny within ${
              CONSENT_TIMEOUT_MS / 1000
            } seconds.`,
        );
      }

      const override =
        specialInteractions[sender]?.[target]?.[type] ||
        specialInteractions["anyone"]?.[target]?.[type] ||
        specialInteractions[sender]?.["anyone"]?.[type] ||
        null;

      const seed = `${today}-${type}-${sender}-${target}`;
      const value = getInteractionValue(seed, sender);

      if (override) {
        const forcedValue =
          override.value !== undefined ? override.value : value;

        const message = override.message
          ? override.message
              .replaceAll("@{sender}", senderDisplay)
              .replaceAll("@{target}", targetDisplay)
              .replaceAll("{value}", forcedValue)
          : `${senderDisplay} ${actionWord} ${targetDisplay} with ${forcedValue}% power!`;

        maybeRecord(sender, target, type);
        return res.send(message);
      }

      if (target.toLowerCase() === "everyone") {
        const message = `${senderDisplay} ${actionWord} everyone with ${value}% power!`;

        maybeRecord(sender, target, type);
        return res.send(message);
      }

      const joke = getJoke(req, type, value, { min: 1, max: 100 });

      const message = `${senderDisplay} ${actionWord} ${targetDisplay} with ${value}% power!${joke}`;

      maybeRecord(sender, target, type);
      return res.send(message);
    }

    // ===========================================
    // LEADERBOARD
    // ===========================================

    if (type === "leaderboard") {
      const scope = (req.query.scope || "commands").toLowerCase();

      if (scope === "users") {
        const entries = Object.entries(statCounters)
          .map(([user, stats]) => ({
            user,
            total: Object.values(stats).reduce((a, b) => a + b, 0),
          }))
          .sort((a, b) => b.total - a.total)
          .slice(0, 5);

        if (!entries.length) return res.send("No stats yet!");

        const leaderboard = entries
          .map((e, i) => `${i + 1}. @${e.user} - ${e.total} uses`)
          .join(" |");

        return res.send(` Daily Leaderboard (users): ${leaderboard}`);
      } else {
        const entries = Object.entries(commandCounters)
          .map(([cmd, count]) => ({ cmd, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5);

        if (!entries.length) return res.send("No command stats yet!");

        const leaderboard = entries
          .map((e, i) => `${i + 1}. !${e.cmd} - ${e.count} uses`)
          .join(" |");

        return res.send(` Daily Leaderboard (commands): ${leaderboard}`);
      }
    }

    // ===========================================
    // UNIVERSAL TOP COMMAND — !top <interaction>
    // Replaces BOTH topsenders & topreceivers
    // ===========================================

    if (type === "top") {
      const interactionType = (args[0] || "").toLowerCase();

      if (!interactionType) {
        return res.send(` Usage: !top <interaction>\nExample: !top spank`);
      }

      if (!interactions.includes(interactionType)) {
        const list = interactions.join(",");
        return res.send(
          ` That interaction does not exist. Available interactions: ${list}`,
        );
      }

      // ===========================================
      // TITLE MAPS (senders + receivers)
      // ===========================================

      const senderTitles = {
        spank: " Biggest Spankers",
        slap: " Biggest Slappers",
        hug: " Best Huggers",
        kiss: " Biggest Kissers",
        pat: " Top Patters",
        bonk: " Top Bonkers",
        love: " Biggest Lovers",
        boop: " Best Boopers",
        throwshoe: " Top Shoe Throwers",
        highfive: " Best High-Fivers",
        fliptable: "┻━┻ Fiercest Table Flippers",
        keg: "Biggest Boomer",
      };

      const receiverTitles = {
        spank: " Most Spanked",
        slap: " Most Slapped",
        hug: " Most Hugged",
        kiss: " Most Kissed",
        pat: " Most Patted",
        bonk: " Most Bonked",
        love: " Most Loved",
        boop: " Most Booped",
        throwshoe: " Most Hit by Shoes",
        highfive: " Most High-Fived",
        fliptable: "┻━┻ Most Tables Flipped At",
        keg: "Biggest Boomed",
      };

      const senderTitle =
        senderTitles[interactionType] ||
        ` Top ${
          interactionType.charAt(0).toUpperCase() + interactionType.slice(1)
        } Senders`;

      const receiverTitle =
        receiverTitles[interactionType] ||
        ` Top Receivers of ${
          interactionType.charAt(0).toUpperCase() + interactionType.slice(1)
        }`;

      // ===========================================
      // BUILD SENDER LEADERBOARD
      // ===========================================

      const senderMap = {};

      for (const [receiver, data] of Object.entries(interactionStats)) {
        if (!data._from) continue;

        for (const [senderUser, record] of Object.entries(data._from)) {
          const count = record[interactionType] || 0;
          if (count > 0) {
            senderMap[senderUser] = (senderMap[senderUser] || 0) + count;
          }
        }
      }

      const topSenders = Object.entries(senderMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

      const receiverMap = Object.entries(interactionStats)
        .filter(([user, data]) => data[interactionType])
        .map(([user, data]) => ({ user, count: data[interactionType] }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      if (!topSenders.length && !receiverMap.length) {
        return res.send(` No"${interactionType}" interactions recorded today!`);
      }

      const rankEmoji = (index) => ["", "", "", "4", "5"][index] || "";

      const senderList = topSenders.length
        ? topSenders
            .map(([u, c], i) => `${rankEmoji(i)} @${u} — ${c}`)
            .join("\n")
        : "No senders today.";

      const receiverList = receiverMap.length
        ? receiverMap
            .map((e, i) => `${rankEmoji(i)} @${e.user} — ${e.count}`)
            .join("\n")
        : "No receivers today.";

      const message =
        `${interactionType.toUpperCase()} Leaderboards\n\n` +
        `${senderTitle}:\n${senderList}\n\n` +
        `${receiverTitle}:\n${receiverList}`;

      return res.send(message);
    }

    // ===========================================
    // MINI GAMES FUNCTION
    // ===========================================

    if (miniGames[type]) {
      message = miniGames[type](senderRaw, userRaw);
      return res.send(message);
    }

    // ===========================================
    // SOTFEST COUNTDOWN
    // ===========================================

    if (type === "sotfest") {
      const now = new Date();
      const currentYear = now.getFullYear();

      let eventDate = new Date(`${currentYear}-07-10T00:00:00`);

      if (now > eventDate) {
        eventDate = new Date(`${currentYear + 1}-07-10T00:00:00`);
      }
      const diffMs = eventDate - now;
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const diffHours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
      const diffMinutes = Math.floor((diffMs / (1000 * 60)) % 60);

      const message =
        ` Ahoy, ${senderDisplay}! The grand **SOTFEST** be drawin’ near!\n` +
        ` There be **${diffDays} days**, **${diffHours} hours**, and **${diffMinutes} minutes** ` +
        `’til we set sail on **July 10th**, ye salty sea-dog! `;

      return res.send(message);
    }

    // ===========================================
    // GENERIC WORD COUNTERS (e.g. waffles)
    // ===========================================

    for (const [wordKey, cfg] of Object.entries(wordCounters)) {
      const word = cfg.label || wordKey;

      if (!wordsOfTheDay[wordKey]) wordsOfTheDay[wordKey] = {};
      if (!wordsOfTheDay[wordKey][today]) {
        wordsOfTheDay[wordKey][today] = { count: 0 };
      }

      const store = wordsOfTheDay[wordKey][today];

      if (type === `add${wordKey}`) {
        store.count += 1;
        statCounters[sender] = statCounters[sender] || {};
        statCounters[sender][type] = (statCounters[sender][type] || 0) + 1;
        commandCounters[type] = (commandCounters[type] || 0) + 1;

        return res.send(
          `${senderRaw} has added"${word}" +1. Total"${word}" count today: ${store.count}.`,
        );
      }

      if (type === `remove${wordKey}`) {
        if (store.count > 0) {
          store.count -= 1;
          statCounters[sender] = statCounters[sender] || {};
          statCounters[sender][type] = (statCounters[sender][type] || 0) + 1;
          commandCounters[type] = (commandCounters[type] || 0) + 1;

          return res.send(
            `${senderRaw} has removed"${word}" -1. Total"${word}" count today: ${store.count}.`,
          );
        } else {
          return res.send(
            `The"${word}" count is already 0. Cannot remove further.`,
          );
        }
      }

      if (type === wordKey) {
        const count = store.count;
        return res.send(
          `"${word}" has been said ${count} time${
            count !== 1 ? "s" : ""
          } today!.`,
        );
      }
    }

    // ===========================================
    // QUERY: WHO IS X OF THE DAY?
    // e.g. dadofday, pirateofday, drinkoofday
    // ===========================================

    if (type.endsWith("ofday")) {
      const base = aspectOfTheDayAliases[type];
      if (!base || !aspectsOfTheDay[base]) {
        return res.send(
          `${senderDisplay}, that 'of the Day' title is not configured.`,
        );
      }

      const winner = aspectsOfTheDay[base]?.[today];
      if (!winner) {
        const noMsg =
          aspectOfTheDayNoWinnerMessages[base] ||
          "There is no winner yet today!";
        return res.send(noMsg);
      }

      const builder =
        aspectOfTheDayQueryMessages[base] ||
        ((w) => `The ${base} of the Day is ${formatDisplayName(w.user)}!`);

      return res.send(builder(winner));
    }

    // ===========================================
    // GENERIC LIST-BASED HANDLER
    // ===========================================

    // ===========================================
    // MESSAGE TEMPLATES
    // ===========================================

    const listMessageTemplates = {
      default: (sender, cfg, chosen, joke) =>
        `${sender}, your ${cfg.label} today is ${chosen}! ${joke}`,
    };

    // ===========================================
    // HANDLER
    // ===========================================

    for (const { map, jokesKey, category } of listGroups) {
      if (!map[type]) continue;

      const cfg = map[type];
      const jokesForGroup = jokes[type] || jokes[jokesKey] || [];

      // ===========================================
      // RANDOM INDEX (tracked vs doNotTrack)
      // ===========================================

      let index = doNotTrack.includes(type)
        ? Math.floor(Math.random() * cfg.list.length)
        : generateValue(seed, type, cfg.list.length - 1, 0, sender);

      let chosen = cfg.list[index];
      let joke = jokesForGroup[index] || "";

      // ===========================================
      // DO-NOT-TRACK CUSTOM MESSAGE FORMAT
      // ===========================================

      if (doNotTrack.includes(type)) {
        const actionWord = getActionWord(type) || type;

        if (targetDisplay) {
          return res.send(
            `${senderDisplay} ${actionWord} ${targetDisplay} with a"${chosen}" — ${joke}`,
          );
        }

        return res.send(`${senderDisplay} used a"${chosen}" — ${joke}`);
      }

// ===========================================
// ASPECT OF THE DAY — TRACKED TYPES ONLY
// ===========================================

const trigger = doNotTrack.includes(type)
  ? undefined
  : listAspectTriggers[type];

const hasAspect =
  !doNotTrack.includes(type) &&
  aspectsOfTheDay[type] !== undefined;

if (trigger && hasAspect) {
  const alreadyWinner = Boolean(aspectsOfTheDay[type][today]);
  const matchesTrigger = chosen
    .toLowerCase()
    .includes(trigger.includes.toLowerCase());

  // -------------------------------
  // FIRST WINNER
  // -------------------------------

  if (!alreadyWinner && matchesTrigger) {
    aspectsOfTheDay[type][today] = { user: sender, chosen };

    const baseMessage = cfg.template
      ? cfg.template(senderDisplay, chosen, "")
      : `${senderDisplay}, today your ${type} is ${chosen}!`;

    const msg = `${baseMessage} You are the ${type} of the Day!`;

    statCounters[sender] = statCounters[sender] || {};
    statCounters[sender][type] = (statCounters[sender][type] || 0) + 1;
    commandCounters[type] = (commandCounters[type] || 0) + 1;

    return res.send(msg);
  }

  // -------------------------------
  // REPEAT WINNER CALLS
  // -------------------------------

  if (alreadyWinner) {
    const w = aspectsOfTheDay[type][today];

    const baseMessage = cfg.template
      ? cfg.template(senderDisplay, w.chosen, "")
      : `${senderDisplay}, today your ${type} is ${w.chosen}!`;

    const msg = `${baseMessage} You are the ${type} of the Day!`;

    statCounters[sender] = statCounters[sender] || {};
    statCounters[sender][type] = (statCounters[sender][type] || 0) + 1;
    commandCounters[type] = (commandCounters[type] || 0) + 1;

    return res.send(msg);
  }
}

// ===========================================
// TEMPLATE FOR TRACKED LIST TYPES
// ===========================================

let message;

if (cfg.template) {
  message = cfg.template(senderDisplay, chosen, joke);
} else {
  const template =
    listMessageTemplates[type] ||
    listMessageTemplates[category] ||
    listMessageTemplates.default;

  message = template(senderDisplay, cfg, chosen, joke);
}

// ===========================================
// UPDATE STATS
// ===========================================

statCounters[sender] = statCounters[sender] || {};
statCounters[sender][type] = (statCounters[sender][type] || 0) + 1;
commandCounters[type] = (commandCounters[type] || 0) + 1;

return res.send(message);
    }

    // ===========================================
// GENERIC NUMERIC SYSTEM (SAFE DISPATCHER)
// ===========================================

const messageTemplates = {
  default: (sender, cfg, value, space, unit, joke) =>
    `${sender}, your ${cfg.label} is ${value}${space}${unit} today!${joke}`,
};

for (const { map, category } of numericGroups) {
  if (!map[type]) continue;

  const cfg = map[type];
  if (type === "daddy") {
}

  // ==================================================
  // SAFETY INIT (prevents undefined crashes)
  // ==================================================
  if (type === "bb" && !aspectsOfTheDay.bb) {
    aspectsOfTheDay.bb = {};
  }

  if (type === "pp" && !aspectsOfTheDay.pp) {
    aspectsOfTheDay.pp = {};
  }

  // ==================================================
// SPECIAL HANDLER: BB
// ==================================================

if (map === stats && type === "bb") {

  const bandIndex = doNotTrack.includes(type)
    ? Math.floor(Math.random() * cfg.bands.length)
    : generateValue(seed, "bb_band", cfg.bands.length - 1, 0, sender);

  const cupIndex = doNotTrack.includes(type)
    ? Math.floor(Math.random() * cfg.cups.length)
    : generateValue(seed, "bb_cup", cfg.cups.length - 1, 0, sender);

  const band = cfg.bands[bandIndex];
  const cup = cfg.cups[cupIndex];
  const size = `${band}${cup}`;

  const cupRank = {
    AA: 1,
    A: 2,
    B: 3,
    C: 4,
    D: 5,
    DD: 6,
    E: 7,
    F: 8,
    FF: 9,
    G: 10,
    GG: 11,
  };

  const rank = cupRank[cup] || 1;
  const level = rank <= 3 ? "low" : rank <= 6 ? "medium" : "high";

  const biggestSize =
    `${cfg.bands[cfg.bands.length - 1]}${cfg.cups[cfg.cups.length - 1]}`;

  const joke = isJokeEnabled(req, "bb")
    ? (jokes.bb?.[level] ? pickRandom(jokes.bb[level]) : "")
    : "";

  const winnerAlready = doNotTrack.includes(type)
    ? false
    : Boolean(aspectsOfTheDay.bb[today]);

  let message;

  // -------------------------------
  // FIRST WINNER
  // -------------------------------

  if (
    !doNotTrack.includes(type) &&
    !winnerAlready &&
    size === biggestSize
  ) {
    aspectsOfTheDay.bb[today] = {
      user: sender,
      size,
    };

    message =
      `${senderDisplay}, your boob size today is ${size}! You are the Boob of the Day!`;
  }

  // -------------------------------
  // REPEAT WINNER
  // -------------------------------

  else if (
    !doNotTrack.includes(type) &&
    winnerAlready
  ) {
    message =
      `${senderDisplay}, your boob size today is ${aspectsOfTheDay.bb[today].size}! You are the Boob of the Day!`;
  }

  // -------------------------------
  // NORMAL RESPONSE
  // -------------------------------

  else {
    message =
      `${senderDisplay}, your boob size today is ${size}! ${joke}`;
  }

  return sendAndTrack(
    res,
    message,
    sender,
    type,
    doNotTrack,
    statCounters,
    commandCounters
  );
}

// ==================================================
// SPECIAL HANDLER: PP
// ==================================================

if (map === stats && type === "pp") {

  const value = doNotTrack.includes(type)
    ? Math.floor(Math.random() * (cfg.max - cfg.min + 1)) + cfg.min
    : generateValue(seed, type, cfg.max, cfg.min, sender);

  const cm = Math.round(value * 2.54);
  const joke = getJoke(req, type, value, cfg);

  const baseMessage =
    `${senderDisplay}, your PP is ${value} inches (${cm} cm) today!${joke}`;

  const winnerMessage =
    `${senderDisplay}, your PP is ${value} inches (${cm} cm) today!`;

  const triggerValue = aspectsOfTheDayTriggers.pp;

  const winnerAlready = doNotTrack.includes(type)
    ? false
    : Boolean(aspectsOfTheDay.pp[today]);

  let message;

  // -------------------------------
  // FIRST WINNER
  // -------------------------------

  if (
    !doNotTrack.includes(type) &&
    !winnerAlready &&
    value === triggerValue
  ) {
    aspectsOfTheDay.pp[today] = {
      user: sender,
      value,
    };

    message = `${winnerMessage} You are the PP of the Day!`;
  }

  // -------------------------------
  // REPEAT WINNER
  // -------------------------------

  else if (
    !doNotTrack.includes(type) &&
    winnerAlready
  ) {
    message = `${winnerMessage} You are the PP of the Day!`;
  }

  // -------------------------------
  // NORMAL RESPONSE
  // -------------------------------

  else {
    message = baseMessage;
  }

  return sendAndTrack(
    res,
    message,
    sender,
    type,
    doNotTrack,
    statCounters,
    commandCounters
  );
}

// ==================================================
// GENERIC NUMERIC HANDLER (ONLY PATH LEFT)
// ==================================================

let value;

if (SINGLE_VALUE_TYPES.has(type)) {
  value = generateGlobalValue(type, 0, cfg.max, cfg.min);
} else {
 if (doNotTrack.includes(type)) {
  value =
    Math.floor(Math.random() * (cfg.max - cfg.min + 1)) +
    cfg.min;
} else if (SINGLE_VALUE_TYPES.has(type)) {
  value = generateGlobalValue(type, 0, cfg.max, cfg.min);
} else {
  value = generateValue(seed, type, cfg.max, cfg.min, target);
}
}

const space = spaceIf(cfg.unitSpace);
const unit = cfg.unit || "";

const triggerValue = doNotTrack.includes(type)
  ? undefined
  : aspectsOfTheDayTriggers[type];
if (!aspectsOfTheDay[type]) aspectsOfTheDay[type] = {};

const winnerAlready = doNotTrack.includes(type)
  ? false
  : Boolean(aspectsOfTheDay[type][today]);

let message;

if (triggerValue !== undefined) {

  // -------------------------------
  // FIRST WINNER
  // -------------------------------

  if (!winnerAlready && value === triggerValue) {
    aspectsOfTheDay[type][today] = { user: sender, value };

    const template =
      messageTemplates[type] ||
      messageTemplates[category] ||
      messageTemplates.default;

    const baseMessage = cfg.template
      ? cfg.template(senderDisplay, value, "")
      : template(senderDisplay, cfg, value, space, unit, "");

    message = `${baseMessage} You are the ${type} of the Day!`;

    return sendAndTrack(
      res,
      message,
      sender,
      type,
      doNotTrack,
      statCounters,
      commandCounters
    );
  }

  // -------------------------------
  // REPEAT WINNER CALLS
  // -------------------------------

  if (winnerAlready) {
    const w = aspectsOfTheDay[type][today];

    const template =
      messageTemplates[type] ||
      messageTemplates[category] ||
      messageTemplates.default;

    const baseMessage = cfg.template
      ? cfg.template(senderDisplay, w.value, "")
      : template(senderDisplay, cfg, w.value, space, unit, "");

    message = `${baseMessage} You are the ${type} of the Day!`;

    return sendAndTrack(
      res,
      message,
      sender,
      type,
      doNotTrack,
      statCounters,
      commandCounters
    );
  }
}

// -------------------------------
// NORMAL RESPONSE (WITH JOKES)
// -------------------------------

const joke = getJoke(req, type, value, cfg);

const template =
  messageTemplates[type] ||
  messageTemplates[category] ||
  messageTemplates.default;

const fallbackMessage =
  template(senderDisplay, cfg, value, space, unit, joke);

message = cfg.template
  ? cfg.template(senderDisplay, value, joke)
  : fallbackMessage;

return sendAndTrack(
  res,
  message,
  sender,
  type,
  doNotTrack,
  statCounters,
  commandCounters
);
}

// ===========================================
// SAFE TRACKING FUNCTION (REQUIRED)
// ===========================================

function sendAndTrack(res, message, sender, type, doNotTrack, statCounters, commandCounters) {
  if (!doNotTrack.includes(type)) {
    statCounters[sender] = statCounters[sender] || {};
    statCounters[sender][type] = (statCounters[sender][type] || 0) + 1;

    commandCounters[type] = (commandCounters[type] || 0) + 1;
  }

  return res.send(message);
}

    // --------------------------
    // RANDOM PERSONAL GAMES
    // --------------------------

    if (randomGames[type]) {
      return res.send(runRandomGame(type, senderDisplay));
    }

    // ===========================================
    // INVALID TYPE
    // ===========================================

    message = `${senderDisplay}, invalid type. Try pp, daddy, bb, or fun ones like beard, hug, boop, bonk, etc.`;
    return res.send(message);
  } finally {
    if (
      aspectsOfTheDay[type] !== undefined ||
      listAspectTriggers[type] !== undefined
    ) {
      lock[type] = false;
    }
  }
});

// ===========================================
// START SERVER
// ===========================================

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Daily Stat API running on port ${port}`));

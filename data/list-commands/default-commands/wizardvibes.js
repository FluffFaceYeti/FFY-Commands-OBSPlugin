const wizardvibes = {
  wizardvibes: {
    list: [
      " Apprentice",
      " Sorcerer",
      " Spellcaster",
      " Seer",
      " Pyromancer",
      " Cryomancer",
      " Warlock",
    ],
    label: "wizard vibe",
    template: (sender, chosen, joke) =>
  `${sender}, your wizard vibe today is ${chosen}! ${joke}`,
  },
};
export default wizardvibes;

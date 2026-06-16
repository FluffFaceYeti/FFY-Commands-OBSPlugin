const auravibes = {
  auravibes: {
    list: [
      " Radiant",
      " Calm",
      " Fiery",
      " Grounded",
      " Mystical",
      " Gentle",
      " Energetic",
      " Cosmic",
      " Dreamy",
      " Sparkling",
    ],
    label: "aura vibe",
    template: (sender, chosen, joke) =>
  `${sender}, your aura vibe today is ${chosen}! ${joke}`,
  },
};
export default auravibes;

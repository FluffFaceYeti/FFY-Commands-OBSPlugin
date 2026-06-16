const powers = {
  powers: {
    list: [
      " Super Strength",
      " Telepathy",
      " Tech Genius",
      " Time Manipulation",
      " Invisibility",
      " Lightning Speed",
      " Cosmic Awareness",
    ],
    label: "power/ability",
    template: (sender, chosen, joke) =>
  `${sender}, your power today is ${chosen}! ${joke}`,
  },
};
export default powers;

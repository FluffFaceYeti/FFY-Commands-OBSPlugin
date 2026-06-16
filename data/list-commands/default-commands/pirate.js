const piratevibes = {
  piratevibes: {
    list: [
      " Swashbuckler",
      " Captain",
      " Parrot Whisperer",
      " Treasure Hunter",
      " Cannon Master",
      " Navigator",
      " Sea Monster Tamer",
    ],
    label: "pirate vibe",
    template: (sender, chosen, joke) =>
  `${sender}, your pirate vibe today is ${chosen}! ${joke}`,
  },
};
export default piratevibes;

const outfits = {
  outfits: {
    list: [
      " Casual Chic",
      " Elegant",
      " Sporty",
      " Relaxed",
      " Traditional",
      " Cozy",
      " Trendy",
      " Heroic",
      " Costume",
      " Martial",
    ],
    label: "outfit/style",
    template: (sender, chosen, joke) =>
  `${sender}, your outfit today is ${chosen}! ${joke}`,
  },
};
export default outfits;

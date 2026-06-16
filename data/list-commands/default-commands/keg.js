const keg = {
  keg: {
    list: [
      "Gunpowder Barrel",
      "Stronghold Gunpowder Barrel",
      "Keg of Ancient Black Powder",
      "Black Powder Barrel",
    ],
    label: "chosen keg from Sea of Thieves",
    template: (sender, chosen, joke) =>
  `${sender}, you light a ${chosen} and board the enemy ship! ${joke}`,
  },
};
export default keg;

const elementalitems = {
  elementalitems: {
    list: [
      " Fire Amulet",
      " Water Orb",
      " Earth Ring",
      " Air Pendant",
      " Lightning Bracelet",
      " Ice Crystal",
      " Void Charm",
    ],
    label: "elemental item",
    template: (sender, chosen, joke) =>
  `${sender}, your elemental item today is ${chosen}! ${joke}`,
  },
};
export default elementalitems;

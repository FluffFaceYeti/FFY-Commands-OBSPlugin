const colors = {
  colors: {
    list: [
      " Green",
      " Blue",
      " Yellow",
      " Red",
      " Black",
      " White",
      " Purple",
      " Orange",
      " Pink",
      " Rainbow",
    ],
    label: "color",
    template: (sender, chosen, joke) =>
  `${sender}, your color today is ${chosen}! ${joke}`,
  },
};
export default colors;

const customItems = {
  customitem: {
    list: [
      "item1",
      "item2",
    ],
    label: "today your customitem is",
    template: (sender, chosen, joke) =>
      `${sender}, today your customitem is ${chosen}! ${joke}`,
  },

  customitem2: {
    list: [
      "item1",
      "item2",
    ],
    label: "today your customitem2 is",
    template: (sender, chosen, joke) =>
      `${sender}, today your customitem2 is ${chosen}! ${joke}`,
  },

  customitem3: {
    list: [
      "item1",
      "item2",
    ],
    label: "today your customitem3 is",
    template: (sender, chosen, joke) =>
      `${sender}, today your customitem3 is ${chosen}! ${joke}`,
  },
};

export default customItems;

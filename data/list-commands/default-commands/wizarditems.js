const wizarditems = {
  wizarditems: {
    list: [
      " Wand",
      " Spellbook",
      " Crystal Ball",
      " Robe",
      " Potion",
      " Mirror of Insight",
      " Flying Broom",
    ],
    label: "wizard item",
    template: (sender, chosen, joke) =>
  `${sender}, your wizard item today is ${chosen}! ${joke}`,
  },
};
export default wizarditems;

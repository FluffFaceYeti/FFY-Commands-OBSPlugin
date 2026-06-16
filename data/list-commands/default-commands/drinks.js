const drink = {
  drink: {
    list: [
      " Coffee",
      " Tea",
      " Martini",
      " Mojito",
      " Beer",
      " Whiskey",
      " Red Wine",
      " Champagne",
      " Boba Tea",
      " Lemonade",
      " Hot Chocolate",
      " Sake",
      " Milk",
      " Juice",
      " Melon Soda",
    ],
    label: "drink of the day",
    template: (sender, chosen, joke) =>
  `${sender}, your drink of the day is ${chosen}! ${joke}`,
  },
};
export default drink;

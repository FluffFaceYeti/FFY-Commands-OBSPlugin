const pirateoutfits = {
  pirateoutfits: {
    list: [
      " Tricorn Hat",
      " Captain’s Coat",
      " Parrot Companion",
      " Gold Earrings",
      " Anchor Tattoo",
      " Cutlass",
      " Peg Leg",
    ],
    label: "pirate accessory",
    template: (sender, chosen, joke) =>
  `${sender}, your pirate accessory today is ${chosen}! ${joke}`,
  },
};
export default pirateoutfits;

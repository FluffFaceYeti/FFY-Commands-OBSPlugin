const fish = {
  fish: {
    list: [
      // COMMON
      " Ruby Splashtail",
      " Charcoal Pondie",
      " Stone Islehopper",
      " Almond Ancientscale",
      " Olive Plentifin",
      " Russet Wildsplash",
      " Ashen Devilfish",
      " Jade Battlegill",
      " Rose Wrecker",

      // UNCOMMON
      " Sunny Splashtail",
      " Orchid Pondie",
      " Moss Islehopper",
      " Sapphire Ancientscale",
      " Amber Plentifin",
      " Sandy Wildsplash",
      " Seashell Devilfish",
      " Sky Battlegill",
      " Sun Wrecker",

      // RARE
      " Indigo Splashtail",
      " Bronze Pondie",
      " Honey Islehopper",
      " Smoke Ancientscale",
      " Cloudy Plentifin",
      " Ocean Wildsplash",
      " Lavenderbeard Devilfish",
      " Rum Battlegill",
      " Moon Wrecker",

      // NIGHT
      " Umber Splashtail",
      " Bright Pondie",
      " Raven Islehopper",
      " Bone Ancientscale",
      " Bonedust Plentifin",
      " Coral Wildsplash",
      " Lavenderbeard Devilfish (Night)",
      " Bittersweet Battlegill",
      " Blackcloud Wrecker",

      // SPECIAL
      " Seafoam Splashtail",
      " Moonsky Pondie",
      " Amethyst Islehopper",
      " Starshine Ancientscale",
      " Watery Plentifin",
      " Muddy Wildsplash",
      " Firelight Devilfish",
      " Snow Wrecker",
      " Wild Stormfish",

      // LEGENDARY
      " Forsaken Devilfish",
      " Ancient Stormfish",
      " Shores Stormfish",
      " Shadow Stormfish",
      " Twighlight Stormfish",
    ],
    label: "Fish",
    template: (sender, chosen, joke) =>
  `${sender}, your fish today is ${chosen}! ${joke}`,
  },
};
export default fish;
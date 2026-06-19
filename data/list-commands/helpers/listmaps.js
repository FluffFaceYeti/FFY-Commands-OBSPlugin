import animal from "../default-commands/animals.js";
import drink from "../default-commands/drinks.js";
import auravibes from "../default-commands/aura.js";
import colors from "../default-commands/colors.js";
import auraitems from "../default-commands/auraitems.js";
import elementalitems from "../default-commands/elementalitems.js";
import elements from "../default-commands/elements.js";
import fish from "../default-commands/fish.js";
import keg from "../default-commands/keg.js";
import outfits from "../default-commands/outfits.js";
import patronus from "../default-commands/patronus.js";
import piratevibes from "../default-commands/pirate.js";
import pirateoutfits from "../default-commands/pirateoutfits.js";
import powers from "../default-commands/powers.js";
import sails from "../default-commands/sails.js";
import wizardvibes from "../default-commands/wizard.js";
import wizarditems from "../default-commands/wizarditems.js";
import customItems from "../customlistcommands.js";

    const listGroups = [
      { map: colors, jokesKey: "colors", category: "colors" },
      { map: auravibes, jokesKey: "auravibes", category: "auravibes" },
      { map: piratevibes, jokesKey: "piratevibes", category: "piratevibes" },
      { map: wizardvibes, jokesKey: "wizard", category: "wizardvibes" },
      { map: outfits, jokesKey: "outfits", category: "outfits" },
      { map: elements, jokesKey: "elements", category: "elements" },
      { map: powers, jokesKey: "powers", category: "powers" },
      { map: keg, jokesKey: "keg", category: "keg" },
      {
        map: pirateoutfits,
        jokesKey: "pirateoutfits",
        category: "pirateoutfits",
      },
      { map: wizarditems, jokesKey: "wizarditems", category: "wizarditems" },
      {
        map: elementalitems,
        jokesKey: "elementalitems",
        category: "elementalitems",
      },
      { map: auraitems, jokesKey: "auraitems", category: "auraitems" },
      { map: animal, jokesKey: "animal", category: "animal" },
      { map: sails, jokesKey: "sails", category: "sails" },
      { map: patronus, jokesKey: "patronus", category: "patronus" },
      { map: drink, jokesKey: "drink", category: "drink" },
      { map: fish, jokesKey: "fish", category: "fish" },
      { map: customItems, jokesKey: "customItems", category: "customItems" },
    ];
export default listGroups;

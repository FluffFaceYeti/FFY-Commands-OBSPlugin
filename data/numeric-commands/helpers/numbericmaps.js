import stats from "../default-commands/stats.js";
import piracy from "../default-commands/piracy.js";
import actions from "../default-commands/actions.js";
import carry from "../default-commands/carry.js";
import emotions from "../default-commands/emotions.js";
import gym from "../default-commands/gym.js";
import hate from "../default-commands/hate.js";
import love from "../default-commands/love.js";
import hold from "../default-commands/hold.js";
import personality from "../default-commands/personality.js";
import seaofthieves from "../default-commands/seaofthieves.js";
import skills from "../default-commands/skills.js";
import customnumericcommands from "../default-commands/customnumericcommands.js"

const numericGroups = [
      { map: seaofthieves, category: "seaofthieves" },
      { map: stats, category: "stats" },
      { map: gym, category: "gym" },
      { map: love, category: "love" },
      { map: hate, category: "hate" },
      { map: personality, category: "personality" },
      { map: emotions, category: "emotions" },
      { map: skills, category: "skills" },
      { map: actions, category: "actions" },
      { map: hold, category: "hold" },
      { map: carry, category: "carry" },
      { map: piracy, category: "piracy" },
      { map: customnumericcommands, category: "customnumericcommands" },
    ];
    export default numericGroups;

const stats = {
  beard: {
    min: 1,
    max: 30,
    levels: [10, 25],
    unit: "cm",
    label: "Your Beard Length",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your glorious beard measures ${value}cm today! ${joke}`,
  },
  hair: {
    min: 10,
    max: 100,
    levels: [30, 70],
    unit: "cm",
    label: "Your Hair Length",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your hair has reached ${value}cm today! ${joke}`,
  },
  pp: {
    min: 3,
    max: 15,
    levels: [5, 7],
    unit: "inches",
    label: "Your PP Size",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your PP stands at ${value} inches today! ${joke}`,
  },
  bb: {
    type: "bra",
    bands: [28, 30, 32, 34, 36, 38, 40, 42, 44],
    cups: ["AA", "A", "B", "C", "D", "DD", "E", "F", "FF", "G", "GG"],
    label: "Your Boob Size",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your boob size today is ${value}! ${joke}`,
  },
  daddy: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Daddy Level",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, You're ${value}% daddy today! ${joke}`,
  },
  catmom: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Cat Mom Level",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, You're ${value}% cat mom today! ${joke}`,
  },
  stinker: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Fart Stink Level",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your stink level is ${value}% today! ${joke}`,
  },
  fox: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Fox Energy",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, You're channeling ${value}% fox energy today! ${joke}`,
  },
  nerd: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Nerd Level",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, You're ${value}% nerd today! ${joke}`,
  },
  tinkabell: {
    min: 0,
    max: 100,
    levels: [20, 60],
    unit: "%",
    label: "Your Tinkabell Level",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your Tinkabell energy is ${value}% today! ${joke}`,
  },
  princess: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Princess Energy",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your princess energy is radiating at ${value}% today! ${joke}`,
  },
  goodgirl: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Good Girl Level",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, You're ${value}% good girl today! ${joke}`,
  },
  sloth: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your Sloth Level",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, You're operating at ${value}% sloth today! ${joke}`,
  },
  butt: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Your butt",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your butt is ${value}% juicy today! ${joke}`,
  },
};
export default stats;

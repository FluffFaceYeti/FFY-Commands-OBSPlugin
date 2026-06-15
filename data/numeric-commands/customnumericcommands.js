const customnumericcommands = {
  shots: {
    min: 0,
    max: 10,
    levels: [3, 7],
    unit: "",
    label: "Shots you will hit",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, You have hit ${value}/10 shots today! ${joke}`,
  },
  shotsmissed: {
    min: 0,
    max: 100,
    levels: [3, 770],
    unit: "",
    label: "Shots you will miss",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, You have missed ${value}/10 shots today! ${joke}`,
  },
};
export default customnumericcommands;
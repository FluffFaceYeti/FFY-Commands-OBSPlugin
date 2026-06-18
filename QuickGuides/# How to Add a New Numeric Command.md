# How to Add a New Numeric Command

## Step 1 - Open `customnumericcommands.js`

Add a new command using this format:

```js
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
};

export default customnumericcommands;
```

---

## Step 2 - Understanding the Fields

### Command Name

```js
shots:
```

This becomes:

```text
!shots
```

---

### Min and Max

```js
min: 0,
max: 10,
```

Controls the range of possible values.

Example:

```text
0 - 10
```

---

### Levels

```js
levels: [3, 7],
```

Used by the joke system.

```text
0-3   = Low
4-7   = Medium
8-10  = High
```

---

### Unit

```js
unit: "",
```

Optional text displayed after the number.

Examples:

```js
unit: "%"
unit: "lbs"
unit: "cm"
```

Results:

```text
75%
200lbs
15cm
```

---

### unitSpace

```js
unitSpace: false,
```

Controls whether a space appears before the unit.

```js
75%
```

vs

```js
75 %
```

---

### Label

```js
label: "Shots you will hit",
```

Used as a fallback if no template exists.

---

### Template

```js
template: (sender, value, joke) =>
  `${sender}, You have hit ${value}/10 shots today! ${joke}`,
```

Controls exactly how the command appears in chat.

Example result:

```text
@FluffFaceYeti, You have hit 8/10 shots today!
```

---

## Step 3 - Add Multiple Commands

You can place as many commands as you want inside the same file:

```js
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
    max: 10,
    levels: [3, 7],
    unit: "",
    label: "Shots you will miss",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, You have missed ${value}/10 shots today! ${joke}`,
  },

  luck: {
    min: 0,
    max: 100,
    levels: [30, 70],
    unit: "%",
    label: "Luck Level",
    unitSpace: false,
    template: (sender, value, joke) =>
      `${sender}, Your luck today is ${value}%! ${joke}`,
  },
};

export default customnumericcommands;
```

This creates:

```text
!shots
!shotsmissed
!luck
```

---

## Step 4 - Register the Commands

Open:

```text
data/numeric-commands/helpers/numericmaps.js
```

Add:

```js
{ map: customnumericcommands, category: "customnumericcommands" },
```

to the `numericGroups` array.

---

## Step 5 - Add Jokes (Optional)

In `jokes.js`:

```js
shots: {
  low: [
    "Rough day at the range.",
  ],
  medium: [
    "Not bad at all.",
  ],
  high: [
    "Sharpshooter!",
  ],
},
```

The system will automatically pick jokes based on the rolled value.

---

## Step 6 - Add an "Of The Day" Winner (Optional)

Open:

```text
aspectsoftheday.js
```

Add:

```js
const aspectsOfTheDay = {
  shots: {},
};
```

Add a trigger:

```js
const aspectsOfTheDayTriggers = {
  shots: 10,
};
```

The first person to roll 10 becomes:

```text
You are the shots of the Day!
```

Add an alias:

```js
const aspectOfTheDayAliases = {
  shotsofday: "shots",
};
```

This enables:

```text
!shotsofday
```

---

## Example Finished Command

```js
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
```

Normal Result:

```text
@FluffFaceYeti, You have hit 8/10 shots today!
```

Winner Result:

```text
@FluffFaceYeti, You have hit 10/10 shots today! You are the shots of the Day!
```

That's it. Add the command, register it in `numericmaps.js`, and it will automatically support templates, jokes, tracking, leaderboards, and "Of The Day" features.

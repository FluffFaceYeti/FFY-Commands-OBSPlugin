# How to Add a New List Command

## Step 1 - Open `customlistcommands.js`
## Location data/numeric-commands
Add a new command using this format:

```js
const customItems = {
  pets: {
    list: [
      "Dog",
      "Cat",
      "Dragon",
    ],
    label: "pet",
    template: (sender, chosen, joke) =>
      `${sender}, your pet today is ${chosen}! ${joke}`,
  },
```

---

## Step 2 - Understanding the Fields

### Command Name

```js
pets:
```

This becomes:

```text
!pets
```

---

### List

```js
list: [
  "Dog",
  "Cat",
  "Dragon",
],
```

These are the possible results.

---

### Label

```js
label: "pet",
```

Used as a fallback if no template exists.

---

### Template

```js
template: (sender, chosen, joke) =>
  `${sender}, your pet today is ${chosen}! ${joke}`,
```

Controls exactly how the command appears in chat.

Example result:

```text
@username, your pet today is Dragon! Very majestic.
```

---

## Step 3 - Add Multiple Commands

You can place as many commands as you want inside the same file:

```js
const customItems = {
  pets: {
    list: ["Dog", "Cat", "Dragon"],
    label: "pet",
    template: (sender, chosen, joke) =>
      `${sender}, your pet today is ${chosen}! ${joke}`,
  },

  snacks: {
    list: ["Pizza", "Cookies", "Tacos"],
    label: "snack",
    template: (sender, chosen, joke) =>
      `${sender}, your snack today is ${chosen}! ${joke}`,
  },

  ships: {
    list: ["Sloop", "Brigantine", "Galleon"],
    label: "ship",
    template: (sender, chosen, joke) =>
      `${sender}, today you're sailing a ${chosen}! ${joke}`,
  },
};

export default customItems;
```

This creates:

```text
!pets
!snacks
!ships
```

---

## Step 4 - Register the Commands

Open:

```text
data/list-commands/helpers/listmaps.js
```

Add:

```js
{ map: customItems, jokesKey: "customItems", category: "customItems" },
```

to the `listGroups` array.

---

## Step 5 - Add Jokes (Optional)

In `jokes.js`:

```js
customItems: [
  "A bold choice.",
  "An excellent pick.",
  "Today's looking good.",
],
```

If you don't want jokes, leave the array empty.

---

## Step 6 - Add an "Of The Day" Winner (Optional)

Open:

```text
aspectsoftheday.js
```

Add:

```js
const aspectsOfTheDay = {
  pets: {},
};
```

Then add a trigger:

```js
const listAspectTriggers = {
  pets: {
    includes: "Dragon",
  },
};
```

The first person to roll "Dragon" becomes:

```text
You are the pets of the Day!
```

---

## Example Finished Command

```js
pets: {
  list: [
    "Dog",
    "Cat",
    "Dragon",
  ],
  label: "pet",
  template: (sender, chosen, joke) =>
    `${sender}, your pet today is ${chosen}! ${joke}`,
},
```

Normal Result:

```text
@username, your pet today is Cat! Very fluffy.
```

Winner Result:

```text
@username, your pet today is Dragon! You are the pets of the Day!
```

That's it. Add the command, and it will automatically support templates, jokes, tracking, leaderboards, and "Of The Day" features.

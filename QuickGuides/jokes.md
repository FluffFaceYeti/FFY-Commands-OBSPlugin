# jokes.js
## found in data/helpers
This file contains all joke messages used by commands.

## Numeric Commands

Numeric commands use low, medium and high joke groups.

```js
daddy: {
  low: ["Not very daddy today."],
  medium: ["Some daddy energy."],
  high: ["Maximum daddy unlocked."]
}
```

When a user gets a low score, a random joke from `low` is chosen.

## List Commands

List commands use simple arrays.

```js
animal: [
  "You are a lion!",
  "You are a wolf!",
  "You are a bear!"
]
```

The joke position usually matches the item position.

## Adding A New Numeric Command

```js
coolness: {
  low: ["Needs work."],
  medium: ["Pretty cool."],
  high: ["Maximum coolness!"]
}
```

## Adding A New List Command

```js
spiritanimal: [
  "Wolf",
  "Fox",
  "Bear"
]
```

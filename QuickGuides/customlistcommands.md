# customlistcommands.js
## found in data/helpers
Create your own list commands.

## Example

```js
spiritanimal: [
  "Wolf",
  "Bear",
  "Fox"
]
```

Add matching jokes:

```js
spiritanimal: [
  "Wild and free!",
  "Strong and fearless!",
  "Clever and sneaky!"
]
```

Users can run:

```text
!spiritanimal
```

## Multiple Commands

```js
export default {
  spiritanimal: ["Wolf", "Bear"],
  favoritefood: ["Pizza", "Tacos"],
  superpower: ["Flight", "Invisibility"]
};
```

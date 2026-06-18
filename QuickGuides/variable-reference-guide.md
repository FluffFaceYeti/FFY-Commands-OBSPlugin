# Variable Reference Guide

## specialUsers Variables

### Username

```js
fluffy: {}
```

The Twitch username that gets special treatment.

### Command Name

```js
beard:
```

The command being overridden.

### Message

```js
"@fluffy, your beard is majestic!"
```

The response returned instead of the normal command result.

## specialInteractions Variables

### sender

```text
@{sender}
```

The person running the command.

### target

```text
@{target}
```

The person being targeted.

### value

```js
value: 10000
```

The score returned by the interaction.

### message

```js
message: "@{sender} hugs @{target}!"
```

Custom response text.

## aspectsOfTheDay Variables

### aspectsOfTheDay

Stores winners.

```js
daddy: {}
```

### aspectsOfTheDayTriggers

Minimum score required.

```js
daddy: 100
```

### aspectOfTheDayAliases

Alternative command names.

```js
dadofday: "daddy"
```

### aspectOfTheDayNoWinnerMessages

Shown when nobody has won yet.

```js
daddy: "There is no Daddy of the Day yet!"
```

## config Variables

### CHANNEL_NAME

```js
const CHANNEL_NAME = "flufffaceyeti";
```

### TIMEZONE

```js
const TIMEZONE = "Europe/London";
```

## jokes.js Variables

### low

Used for low scores.

### medium

Used for medium scores.

### high

Used for high scores.

Example:

```js
daddy: {
  low: ["Not very daddy today."],
  medium: ["Some daddy energy."],
  high: ["Maximum daddy unlocked."]
}
```

## Action Word Variables

```js
.replace("hug", "Hugged")
```

First value = command name

Second value = displayed action text

## Interaction Variables

```js
const interactions = [
  "hug",
  "slap",
  "bonk"
];
```

Each item becomes a usable interaction command.

## SINGLE_VALUE_TYPES

```js
new Set([
  "items1",
  "items2"
])
```

Commands listed here only return one value.

## Custom Command Variables

### Numeric

```js
coolness: {
  min: 0,
  max: 100
}
```

### List

```js
spiritanimal: [
  "Wolf",
  "Fox",
  "Bear"
]
```

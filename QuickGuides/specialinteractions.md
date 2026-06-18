# specialinteractions.js

Creates custom interaction outcomes between specific users.

## Single Interaction

```js
const specialInteractions = {
  fluffy: {
    bob: {
      hug: {
        value: 10000,
        message: "@{sender} gave @{target} the ultimate hug!"
      }
    }
  }
};
```

## Multiple Interactions

```js
const specialInteractions = {
  fluffy: {
    bob: {
      hug: {
        value: 10000,
        message: "@{sender} gave @{target} the ultimate hug!"
      },
      slap: {
        value: 0,
        message: "@{sender} failed to slap @{target}!"
      },
      bonk: {
        value: 999,
        message: "@{sender} bonked @{target} into another dimension!"
      }
    }
  }
};
```

## Multiple User Pairs

```js
const specialInteractions = {
  fluffy: {
    bob: {
      hug: {
        value: 10000,
        message: "@{sender} hugs @{target}!"
      }
    }
  },
  alice: {
    charlie: {
      bonk: {
        value: 999,
        message: "@{sender} bonks @{target}!"
      }
    }
  }
};
```

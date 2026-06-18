# specialusers.js

Creates custom responses for specific users.

## Single User

```js
const specialUsers = {
  fluffy: {
    beard: "@fluffy, your beard is majestic!"
  }
};
```

## Multiple Commands For One User

```js
const specialUsers = {
  fluffy: {
    beard: "@fluffy, your beard is majestic!",
    hair: "@fluffy, your hair is fabulous!",
    daddy: "@fluffy is Maximum Daddy."
  }
};
```

## Multiple Users

```js
const specialUsers = {
  fluffy: {
    beard: "@fluffy, your beard is majestic!"
  },
  bob: {
    pirate: "@bob sails the seven seas!"
  },
  alice: {
    princess: "@alice is royalty today!"
  }
};
```

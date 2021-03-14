---
category: 'Javascript'
title: 'Async Await'
path: '/javascript/async-await'
date: '2020-04-27'
---

#### async / await

inside a function marked as `async`,

you can use `await` in front of an expression that returns a promise

the execution of the async function is paused until the promise is resolved

```javascript
async function fetchMessages() {
  try {
    const res = await getMessages(messageId)
    /* success */
  } catch (err) {
    /* handle errors */
  }
}
```

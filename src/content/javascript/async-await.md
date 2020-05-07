---
category: 'Javascript'
title: 'Async Await'
path: '/javascript/async-await'
date: '2020-04-27'
---

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

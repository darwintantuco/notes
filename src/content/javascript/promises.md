---
category: 'Javascript'
title: 'Promises'
path: '/javascript/promises'
date: '2020-04-27'
---

#### Consuming a promise

```javascript
const fetchMessages = () => {
  getMessages(messageId)
    .then((res) => {
      /* success */
    })
    .catch((err) => {
      /* handle errors */
    })
}
```

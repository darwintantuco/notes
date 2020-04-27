---
title: 'Promises'
topic: 'Javascript'
nav_title: 'Promises'
path: '/javascript/promises'
date: '2020-04-27'
---

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

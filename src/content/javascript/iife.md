---
category: 'Javascript'
title: 'Immediately Invoked Function Expression'
path: '/javascript/iife'
date: '2021-03-27'
---

way to execute functions immediately, as soon as they are created.

doesn't pollute global scope

```javascript
;(function (name) {
  console.log('Inside IIFE')
  console.log(`Hello ${name}!`)
})('Tony')
```

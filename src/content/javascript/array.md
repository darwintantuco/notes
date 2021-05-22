---
category: 'Javascript'
title: 'Array'
path: '/javascript/array'
date: '2021-03-20'
---

- collection of something

```javascript
var arr = [66, true, { firstname: 'Tony', lastname: 'Stark' }]

// avoid
var arr = new Array()
```

#### reduce

```javascript
const sum = [1, 2, 3].reduce(
  (accumulator, currentValue, _index) => accumulator + currentValue,
  0
)
```

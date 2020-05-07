---
category: 'Javascript'
title: 'Destructuring'
path: '/javascript/destructuring'
date: '2020-04-25'
---

#### Array

```javascript
const numbers = [1, 2, 3]
const [one, two, three] = numbers

const [a, b, ...rest] = [1, 2, 3, 4, 5]
```

#### Object

```javascript
const person = {
  name: 'Tony Stark',
  age: 30,
}

const { name, age } = person
```

##### Setting a default value

```javascript
const person = {
  name: 'Tony Stark',
  age: 30,
}
const { name = 'Tony', age = 25 } = person
```

##### Renaming a variable

```javascript
const report = {
  id: 200,
  status: 'resolved',
  message: { id: '2', text: 'Awesome text' },
}

const {
  status,
  message: { id: messageId },
} = report
```

---
date: '2020-04-25'
---

# Destructuring

## Array

```javascript
const numbers = [1, 2, 3]
const [one, two, three] = numbers

const [a, b, ...rest] = [1, 2, 3, 4, 5]
```

## Object

```javascript
const person = {
  name: 'Tony Stark',
  age: 30,
}

const { name, age } = person

// setting default value
const { name = 'Tony', age = 25 } = person

const report = {
  id: 200,
  status: 'resolved',
  message: { id: '2', text: 'Awesome text' },
}

// renaming
const {
  status,
  message: { id: messageId },
} = report
```

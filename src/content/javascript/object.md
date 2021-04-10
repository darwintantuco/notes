---
category: 'Javascript'
title: 'Object'
path: '/javascript/object'
date: '2021-03-27'
---

- collection of name and value pairs

```javascript
const person = {}
const user = {
  firstname: 'Tony',
  lastname: 'Stark',
  role: 'Avenger',
  address: {},
}

user['address'] = {
  city: 'Malibu',
  state: 'CA',
}

user.hobbies = []
```

#### Access

- prefer member access operator
- only use computed member access operator for dynamic property

```javascript
// member access operator
user.firstname
user.address.city

// computed member access operator
const key = 'lastname'
user[key]
user['address']['city']
```

#### Pass by reference

- all objects including functions are pass by reference

```javascript
const a = { greeting: 'hello' }
const b = a
a.greeting = 'hi'

console.log(a.greeting, 'a')
console.log(b.greeting, 'b')

// even as a parameter
function mutateGreeting(obj) {
  obj.greeting = 'hey'
}
mutateGreeting(a)

console.log(a.greeting, 'a')
console.log(b.greeting, 'b')
```

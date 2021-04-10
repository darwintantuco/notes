---
category: 'Javascript'
title: 'this'
path: '/javascript/this'
date: '2021-03-19'
---

- value depends on where and how the function is called

#### object

- when a function is attach to an object, `this` becomes the object

```javascript
var user = {
  firstname: 'Tony',
  greet: function () {
    this.firstname = 'Steve'
    console.log(`hello ${this.firstname}`)
  },
}

user.greet()
user.firstname
```

#### call, apply and bind

- can be use to control the value of `this`

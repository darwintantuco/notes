---
category: 'Javascript'
title: 'Glossary'
path: '/javascript/glosary'
date: '2021-03-20'
---

#### Hoisting

setup memory space for variable

all variables in javascript is initially set to undefined

```javascript
console.log(greeting) // undefined
hey()

var greeting = 'hello world!'
function hey() {
  console.log('hey')
}
```

#### global object

not inside a function

equivalent to `window` object and `this` in browser

```javascript
// app.js (script)
var greeting = 'hello world!'
function hey() {
  console.log('hey')
}

// console dev tools
window.greeting
window.hey()
```

#### Single Thread

one command at a time

#### Synchronous

one at a time and in order

#### Asynchronous

more than one at a time

#### Scope

where a variable is available in code

#### Coercion

converting a value from one type to another

```javascript
// 1 is coerced to '1'
1 + '2'
```

#### Expression

a unit of code that results into a value

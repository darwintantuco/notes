---
category: 'Javascript'
title: 'Functions'
path: '/javascript/functions'
date: '2021-03-20'
---

a special type of object

```javascript
function hey() {
  console.log('hey')
}

hey.language = 'english'
console.log(hey)
console.log(hey.language)
```

#### Function Statement

```javascript
function hey() {
  console.log('hey')
}
```

#### Function Expression

Expression - code that results into a value

not hoisted

```javascript
const hey = function () {
  console.log('hey')
}
```

#### Function Overloading

not present in js

#### Function Constructor

a function that is used to construct objects

by convention, name should start with an uppercase letter

```javascript
function Person(firstname, lastname) {
  this.firstname = firstname
  this.lastname = lastname
}

var tony = new Person('Tony', 'Stark')
```

#### Default Arguments

ES6

```javascript
function computeBill(total, tax = 0.15) {
  return total + total * tax
}
```

---
category: 'Javascript'
title: 'Prototypal Inheritance'
path: '/javascript/prototypal-inheritance'
date: '2021-03-20'
---

- one object gets access to the properties and methods of another object
- ideally, functions should be attached to prototype to save memory space

#### Using a function constructor

```javascript
function Graph() {
  this.vertices = []
  this.edges = []
}

Graph.prototype = {
  addVertex: function (v) {
    this.vertices.push(v)
  },
}

var g = new Graph()
```

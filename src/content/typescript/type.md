---
category: 'Typescript'
title: 'Type'
path: '/typescript/type'
date: '2023-06-03'
---

```typescript
type Person = {
  firstName: string
  lastName: string
  age?: number
}
```

#### Intersection

```typescript
type Dog = {
  name: string
}

type Cat = {
  age: number
}

type Animal = Dog &
  Cat & {
    isAlive: boolean
  }
```

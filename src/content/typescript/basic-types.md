---
category: 'Typescript'
title: 'Basic Types'
path: '/typescript/basic-types'
date: '2020-04-27'
---

#### Boolean

```typescript
const isWaiting: boolean = false
```

#### Numbers

```typescript
const age: number = 4
```

#### String

```typescript
const greeting: string = 'Bonjour'
```

#### Array

```typescript
const numbers: Array<number> = [1, 2, 3, 4, 5]
const numbers: number[] = [1, 2, 3, 4, 5]
```

#### Void

returns null or defined

```typescript
function greeter(name: string): void {
  console.log(`Hello, ${name}`)
}
```

#### Never

function execution never finish

#### Tuples

special type

fixed length & order with specific types

```typescript
let myTuple: [number, string]

const rgb: [number, number, number] = [255, 255, 0]
```

#### Enums

named constants

```typescript
enum Statuses {
  PENDING,
  DELIVERED,
}

enum ArrowKeys {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}
```

#### Union

```typescript
let age: number | string = 27

age = '27'
```

#### Literal Types

```typescript
let zero: 0 = 0

type Status = 'PENDING' | 'DELIVERED'
```

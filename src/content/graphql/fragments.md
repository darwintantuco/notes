---
category: 'GraphQL'
title: 'Fragments'
path: '/graphql/fragments'
date: '2021-04-11'
---

- way to write chunks of GraphQL that can target a specific type
- always target a type using `on`

#### Named Fragments

- like inline fragments but reusable

```graphql
Fragment UserFields on User {
  name
}
```

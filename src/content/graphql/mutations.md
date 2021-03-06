---
category: 'GraphQL'
title: 'Mutations'
path: '/graphql/mutations'
date: '2020-12-06'
---

```graphql
mutation {
  createBooking(placeId: 1, date: "2020-12-06") {
    date
    totalPrice
  }
}
```

---
category: 'GraphQL'
title: 'Mutations'
path: '/graphql/mutations'
date: '2020-12-06'
---

- modify server side data
- similar to POST, PUT and DELETE operations in REST

```graphql
mutation {
  createBooking(placeId: 1, date: "2020-12-06") {
    date
    totalPrice
  }
}
```

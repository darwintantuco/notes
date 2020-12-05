---
category: 'GraphQL'
title: 'Mutations'
path: '/graphql/mutations'
date: '2020-12-06'
---

```
mutation {
  createBooking(placeId: 1,
  startDate: "2020-12-06",
  endDate: "2020-12-07") {
    startDate
    endDate
    totalPrice
  }
}
```

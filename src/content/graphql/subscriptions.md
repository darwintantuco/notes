---
category: 'GraphQL'
title: 'Subscriptions'
path: '/graphql/subscriptions'
date: '2020-12-06'
---

```
subscription {
  bookingChange(placeId: 1) {
    startDate
    endDate
    state
    user {
      email
    }
  }
}
```

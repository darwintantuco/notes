---
category: 'GraphQL'
title: 'Subscriptions'
path: '/graphql/subscriptions'
date: '2020-12-06'
---

- client sends a GraphQL document that is executed in response to an `event`
- server stores the GraphQL document to be able to run it later
- persistent connection between client and server is establish

```graphql
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

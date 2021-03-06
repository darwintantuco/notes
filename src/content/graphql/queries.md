---
category: 'GraphQL'
title: 'Queries'
path: '/graphql/queries'
date: '2020-12-05'
---

#### Simple Query

```graphql
query {
  user(id: "100") {
    name
    email
  }
}
```

```json
{
  "user": {
    "id": "100",
    "name": "John Doe",
    "email": "john@gmail.com"
  }
}
```

#### Multiple Resources

```graphql
query {
  user(id: "100") {
    name
    email
    posts {
      title
    }
  }
}
```

```json
{
  "user": {
    "id": "100",
    "name": "John Doe",
    "email": "john@gmail.com",
    "posts": [{ "title": "post 1" }, { "title": "post 2" }]
  }
}
```

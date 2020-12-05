---
category: 'GraphQL'
title: 'Queries'
path: '/graphql/queries'
date: '2020-12-05'
---

#### Simple Query

```
query {
  user(id: "100") {
    name,
    email
  }
}
```

```
{
  "user": {
    "id": "100",
    "name": "John Doe",
    "email": "john@gmail.com"
  }
}
```

#### Multiple Resources

```
query {
  user(id: "100") {
    name,
    email,
    posts {
      title
    }
  }
}
```

```
{
  "user": {
    "id": "100",
    "name": "John Doe",
    "email": "john@gmail.com",
    "posts": [
      {"title": "post 1"},
      {"title": "post 2"}
    ]
  }
}
```

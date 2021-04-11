---
category: 'Absinthe'
title: 'Queries'
path: '/absinthe/queries'
date: '2021-04-11'
---

#### Field Arguments

- way for users to input field that can be used to filter the results

```elixir
arg :filter, non_null(:user_filter)
```

##### Using Literals

- not ideal for dynamic values

```graphql
{
  users(matching: "Darwin") {
    name
  }
}
```

##### Using Variables

- typed

```graphql
query($order: SortOrder!) {
  users(order: DESC) {
    name
  }
}
```

- by convention, enum values are passed in all uppercase letters without quotes
- exclamation mark means `$order` is required

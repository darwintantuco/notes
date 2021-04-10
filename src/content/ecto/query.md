---
category: 'Ecto'
title: 'Query'
path: '/ecto/query'
date: '2021-03-12'
---

- uses Elixir macros to create DSL
- it's possible to query a table using table names (without a schema)
- pin operator protects us from SQL injection
- value added by the pin operator is converted to SQL query parameter
- by default Ecto combines `where` clauses with `and`
- you can also use `or` or `or_where` keyword

```elixir
posts_by_tony = from post in Post,
  join: user in assoc(post, :user),
  where: user.firstname == "Tony"

query = from(post in posts_by_tony, where: post.title == "Post 1")

Repo.all(query)
```

#### Keyword syntax

```elixir
title = "Post 1"

query = from(user in User, join: post in assoc(user, :posts),
  where: user.firstname == "Tony", where: post.title == ^title,
  order_by: [desc: user.firstname])

Repo.all(query)
```

#### Macro / Expression syntax

```elixir
title = "Post 1"

query =
  User
  |> join(:inner, [user], post in assoc(user, :posts))
  |> where([user, _post], user.firstname == "Tony")
  |> where([_user, post], post.title == ^title)
  |> order_by([user, _post], user.firstname)

Repo.all(query)
```

#### See generated SQL

```elixir
query = from user in User, where: user.firstname == "Bob"

Repo.to_sql(:all, query)
```

#### Executing raw SQL queries

- avoid this as much as possible

```elixir
Ecto.Adapters.SQL.query(Repo, "select * from users")
# or
Repo.query("select * from users")
```

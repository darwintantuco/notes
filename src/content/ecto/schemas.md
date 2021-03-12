---
category: 'Ecto'
title: 'Schemas'
path: '/ecto/schemas'
date: '2021-03-12'
---

#### Schemas

map data from any source to elixir code

#### Advantage of using schemas in queries

- automatic type conversion
- no need for `select:` option
- return value is a struct

```elixir
defmodule User do
  use Ecto.Schema

  schema "users" do
    field(:firstname, :string)
    field(:lastname, :string)

    has_many(:posts, Post)

    timestamps()
  end
end

defmodule Post do
  use Ecto.Schema

  schema "posts" do
    field(:title, :string)
    field(:body, :string)

    belongs_to(:user, User)

    timestamps()
  end
end

# ecto will look for user_id column in posts table
```

#### Nested Associations

you can use `through`

`belongs_to` doesn't work in nested associations

#### Many to many associations

needs an extra table / join table

`join_through` option tells ecto where to find the join table

#### Loading Associations

```elixir
query = from(user in User, preload: :posts)

Repo.all(query)

# when resource is already loaded, you can use `Repo.preload`
users = Repo.all(User)

Repo.preload(users, :posts)
```

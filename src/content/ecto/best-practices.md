---
category: 'Ecto'
title: 'Best Practices'
path: '/ecto/best-practices'
date: '2021-03-08'
---

#### Internal data

- data is generated in code
- functions to use:
  - `change`
  - `put_assoc`
  - `put_embed`

#### External data

- data comes from external source (user input, forms, etc)
- always use changesets when dealing with external data
- functions to use:
  - `cast`
  - `cast_assoc`
  - `cast_embed`

#### cast

- creates a changeset using external data
- performs type casting based on schema

```elixir
params = %{"firstname" => "Tony", "lastname" => "Stark", "age" => 28}
allowed = [:firstname, :lastname]

Ecto.Changeset.cast(%User{}, params, allowed)
```

#### change

- creates a changeset using internal data

```elixir
changeset = Ecto.Changeset.change(%User{firstname: "Tony"})
changeset = Ecto.Changeset.change(%User{}, firstname: "Tony")
changeset = Ecto.Changeset.change(%User{}, %{firstname: "Tony"})

# you can also pass a changeset on first argument
Ecto.Changeset.change(changeset, lastname: "Stark")
```

#### build_assoc

- add a new record to an association
- returns a struct

```elixir
user = Repo.get(User, 1)

Ecto.build_assoc(user, :posts)

# optional: attributes map
Ecto.build_assoc(user, :posts, %{title: "My title", body: "My body"})
```

#### cast_assoc

- looks for changeset function in schema module
- associated records must be loaded / preloaded
- updates the entire collection of associated records

```elixir
params = %{"firstname" => "Stephen", "lastname" => "Strange",
  "posts" => [%{"title" => "Title 1"}, %{"title" => "Title 2", "body" => "Body 1"}]}

changeset =
  %User{}
  |> User.changeset(params)
  |> Ecto.Changeset.cast_assoc(:posts)

Repo.insert(changeset)
```

#### put_assoc

- updates the entire collection of associated records
- associated records must be loaded / preloaded
- returns a new changeset

```elixir
user =
  User
  |> Repo.get_by(firstname: "Tony")
  |> Repo.preload(:posts)

# adds a new post
user
|> Ecto.Changeset.change()
|> Ecto.Changeset.put_assoc(:posts, [%Post{title: "Awesome title", body: "Awesome body"} | user.posts])
|> Repo.update()
```

#### cast_embed

#### put_embed

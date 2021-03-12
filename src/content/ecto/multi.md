---
category: 'Ecto'
title: 'Multi'
path: '/ecto/multi'
date: '2021-03-12'
---

#### Multi

- runs in order
- group database operations into a data structure
- easy to track errors because of the return value

when Multi contains operations that uses changesets,

if one of the changesets is invalid, it won't bother sending it to database,

because of this behaviour, prefer to use changesets when using Multi

```elixir
user = User.changeset(%User{}, %{firstname: "Tony", lastname: "Stark"})

multi =
  Ecto.Multi.new()
  |> Ecto.Multi.insert(:user, user)
  |> Ecto.Multi.run(:profile, fn repo, %{user: user} ->
    user
    |> Ecto.build_assoc(:profiles)
    |> Profile.changeset(%{role: "avenger"})
    |> repo.insert()
  end)

Repo.transaction(multi)
```

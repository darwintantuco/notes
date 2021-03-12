---
category: 'Ecto'
title: 'Changesets'
path: '/ecto/changesets'
date: '2021-03-08'
---

#### Changesets

help us with the entire life cycle of making a change

1. casting and filtering user input
1. validate input
1. send input to database and validate the result

built in validations starts with `validate_*`

```elixir
defmodule User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field(:firstname, :string)
    field(:lastname, :string)

    has_many(:posts, Post)

    timestamps()
  end

  @required [:firstname, :lastname]
  @optional []
  @fields @required ++ @optional

  def changeset(%User{} = struct, params) do
    struct
    |> cast(params, @fields)
    |> validate_required(@required)
  end
end
```

#### Constraints

enforced by database

ecto will always run all validations for a given changeset even if one fails

when a validation fail, the constraints are not checked at all

meaning it won't hit the database

when one constraint fails, other constraints are not checked

---
category: 'Absinthe'
title: 'Custom Scalar Types'
path: '/absinthe/custom-scalar-types'
date: '2021-04-11'
---

- need to define:
  - parse - converts value from user to elixir code
  - serialize - converts value from elixir to JSON
- scalars can be used as input or output types

```graphql
query {
  users(addedBefore: "2019-01-01") {
    name
  }
}
```

```elixir
# schema
scalar :date do
  parse fn input ->
    case Date.from_iso8601(input.value) do
      {:ok, date} -> {:ok, date}
      _ -> :error
    end
  end

  serialize fn date ->
    Date.to_iso8601(date)
  end
end
```

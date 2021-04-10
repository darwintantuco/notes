---
category: 'Ecto'
title: 'Transactions'
path: '/ecto/transactions'
date: '2021-03-12'
---

- runs in order
- only unhandled errors will trigger a rollback
- use Repo functions that raises an error (`insert!`)
- if you have a non database operation, put it at the end
- hard to track errors when an operation fail
- transactions might be a good fit if you're only running a small number of operations
  and you don't need to track which operation failed

```elixir
user = User.changeset(%User{}, %{firstname: "Tony", lastname: "Stark"})
profile = Profile.changeset(%Profile{}, %{role: "avenger"})

# rollbacks any changes since user_id is required when creating profile
Repo.transaction(fn ->
  Repo.insert!(user)
  Repo.insert!(profile)
end)
```

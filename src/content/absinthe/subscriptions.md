---
category: 'Absinthe'
title: 'Subscriptions'
path: '/absinthe/subscriptions'
date: '2021-04-25'
---

- `subscription` macro

```elixir
# schema
subscription do
  field :new_user, :user do
    config fn _args, _info ->
      {:ok, topic: "*"}
    end
  end
end
```

```elixir
# resolver
def create_user(_, %{input: input}, _) do
  case Accounts.create_user(input) do
    {:ok, user} ->
      Absinthe.Subscription.publish(OtecWeb.Endpoint, user, new_user: "*")
      {:ok, user}
    {:error, _changeset} ->
      {:error, "Unable to create user"}
  end
end
```

#### Using triggers

```elixir
# schema
subscription do
  field :update_user, :user do
    arg :id, non_null(:id)

    config fn args, _info ->
      {:ok, topic, args.id}
    end

    trigger([:update_user, :delete_user], topic, fn
      %{order: order} -> [order.id]
      _ -> []
    end)

    resolve fn %{order: order}, _, _ ->
      {:ok, order}
    end
  end
end
```

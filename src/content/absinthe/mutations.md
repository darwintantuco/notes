---
category: 'Absinthe'
title: 'Mutations'
path: '/absinthe/mutations'
date: '2021-04-25'
---

- root mutation type
- `mutation` macro

```elixir
# schema
mutation do
  field :create_user, :user do
    arg :input, non_null(:user_input)

    resolve &Resolvers.User.create_user/3
  end
end
```

```graphql
mutation CreateUser($user: UserInput!) {
  createUser(input: $user) {
    id
    firstname
    lastname
  }
}
```

#### Handling mutation errors

return error tuple in resolvers `{:error, String.t()}` / `{:error, Keyword.t()}`

`Ecto.Changeset.traverse_errors/2` can be helpful

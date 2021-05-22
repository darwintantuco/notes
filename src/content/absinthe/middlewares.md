---
category: 'Absinthe'
title: 'Middlewares'
path: '/absinthe/middlewares'
date: '2021-04-25'
---

- reuse code or logic between resolvers
- Absinthe calls middlewares in order

#### Adding a middleware

- Use `middleware/2` macro in `field`

  - `resolve/1` uses middleware `Absinthe.Resolution`

    ```elixir
    defmacro resolve(function_ast) do
      quote do
        middle Absinthe.Resolution, unquote(function_ast)
      end
    end
    ```

- Override `middleware/3` callback in your schema

  Example: apply a middleware on all mutations

  ```elixir
  def middleware(middleware, _field, %{identifier: :mutation})
    middleware ++ [Middleware.ChangeSetErrors]
  end

  def middleware(middleware, _field, _object) do
    middleware
  end
  ```

#### Setting defaults

when `def middleware` callback returns an empty list,

Absinthe adds `[{Absinthe.Middleware.MapGet.field_identifier}]`

```elixir
def call(%{source: source} = resolution, key) do
  %{resolution | state: :resolved, value: Map.get(source.key)
end
```

you can use this if you want to resolve a value using string keys

```elixir
def middleware(middleware, field, object) do
  new_middleware = {Absinthe.Middleware.MapGet, to_string(field.identifier)}

  Absinthe.Schema.replace_default(middleware, new_middleware, field, object)
end
```

#### Handle changeset errors

Absinthe doesn't know how to parse changesets

```elixir
# TODO
```

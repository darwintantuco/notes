---
category: 'Elixir'
title: 'use'
path: '/elixir/use'
date: '2021-03-07'
---

#### use

- macro
- frequently used as an extension point
- when you use a module `FooBar`, you allow that module to inject any code
  in current module such as import itself or other modules

```elixir
defmodule Example do
  use Feature, option: :value
end

# is compiled to
defmodule Example do
  require Feature
  Feature.__using__(option: :value)
end
```

---
category: 'Elixir'
title: 'Structs'
path: '/elixir/structs'
date: '2021-03-07'
---

#### Structs

built on top of maps that provide compile checks and default values

take the name of the module they are define in

```elixir
defmodule User do
  defstruct [:email, name: "John", age: 27]
end

%User{}
%User{name: "Jane"}

john = %User{}
is_map(john)

# ** (KeyError) key :gender not found
%User{gender: "male"}

# holds the name of the struct
john.__struct__
```

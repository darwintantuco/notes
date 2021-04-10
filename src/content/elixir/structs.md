---
category: 'Elixir'
title: 'Structs'
path: '/elixir/structs'
date: '2021-03-07'
---

- built on top of maps that provide compile checks and default values
- take the name of the module they are defined

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

#### Accessing

```elixir
user = %User{name: "Tony Stark", age: 30}

user.name
user.age
```

#### Updating

similar to maps

```elixir
user = %User{name: "Tony Stark", age: 30}

user = %{ user | age: 31}
```

#### Pattern match

```elixir
user = %User{name: "Tony Stark", age: 30}

%{} = user
%{name: name} = user
```

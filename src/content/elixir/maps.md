---
category: 'Elixir'
title: 'Maps'
path: '/elixir/maps'
date: '2021-03-07'
---

- unordered collection of key / value pairs
- allow any value as key

```elixir
%{} = %{:a => 1, 2 => :b}

n = 1
map = %{n => :one}
map[n]

%{^n => :one} = %{1 => :one, 2 => :two}
```

#### Accessing

`[]` - returns nil when key is not found

`.` - raises an error when key is not found

```elixir
# alternate syntax when keys are atoms
conv = %{method: "GET"}
conv[:method]
conv.method
```

> prefer pattern matching or map.field syntax over Map module functions

##### Updating

```elixir
map = %{:a => 1, 2 => :b}
# key should exist
%{map | 2 => "two" }
```

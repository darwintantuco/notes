---
category: 'Elixir'
title: 'Maps'
path: '/elixir/maps'
date: '2021-03-07'
---

#### Maps

- allow any value as key
- no order

```elixir
%{} = %{:a => 1, 2 => :b}

n = 1
map = %{n => :one}
map[n]

%{^n => :one} = %{1 => :one, 2 => :two}

# alternate syntax when keys are atoms
map = %{a: 1, b: 2}
map.a
```

prefer pattern matching or map.field syntax over Map module functions

##### Updating

```elixir
map = %{:a => 1, 2 => :b}
# key should exist
%{map | 2 => "two" }
```

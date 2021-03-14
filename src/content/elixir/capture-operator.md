---
category: 'Elixir'
title: 'Capture Operator'
path: '/elixir/capture-operator'
date: '2021-03-14'
---

#### Capture Operator

think of `&` as wrapping the named function in

an anonymous function

```elixir
Enum.map(["tony", "stark"], &String.upcase(&1))
# or
Enum.map(["tony", "stark"], &String.upcase/1)
```

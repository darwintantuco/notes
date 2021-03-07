---
category: 'Elixir'
title: 'Modules'
path: '/elixir/modules'
date: '2021-03-07'
---

##### Modules

```elixir
# math.ex
defmodule Math do
  def sum(a, b) do
    a + b
  end

  def zero?(0), do: true
  def zero?(num) when is_integer(num), do: false
end

# function capturing
fun = &Math.zero?/1
fun.(0)

fun2 = &"Good #{&1}"
fun2.("morning")
```

##### Module Attributes

- values are only accessible inside the module
- as annotations
- as constants
- as temporary storage

```elixir
defmodule MyServer do
  # as constants
  @initial_state %{host: "127.0.0.1", port: 3456}
  @data 14

  # you can create a function to be able to access the value outside the module
  def data, do: @data
end
```

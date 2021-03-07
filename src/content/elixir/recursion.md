---
category: 'Elixir'
title: 'Recursion'
path: '/elixir/recursion'
date: '2021-03-07'
---

```elixir
defmodule Recursion do
  def print(msg, n) when n <= 1 do
    IO.puts(msg)
  end

  def print(msg, n) do
    IO.puts(msg)
    print(msg, n - 1)
  end
end
```

#### map

```elixir
defmodule Math do
  def double_each([head | tail]) do
    [head * 2 | double_each(tail)]
  end

  def double_each([]), do: []
end

Math.double_each([1, 2, 3])

# same as
Enum.map([1, 2, 3], &(&1*2))
```

#### reduce

```elixir
defmodule Math do
  def sum_list([head | tail], acc \\ 0) do
    sum_list(tail, head + acc)
  end

  def sum_list([], acc), do: acc
end

Math.sum_list([1,2,3], 0)

# same as
Enum.reduce([1,2,3], 0, &+/2)
```

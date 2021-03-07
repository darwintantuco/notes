---
category: 'Elixir'
title: 'Comprehensions'
path: '/elixir/comprehensions'
date: '2021-03-07'
---

#### Comprehensions

3 parts: generators, filters and collectables

```elixir
for n <- [1, 2, 3], do: n * n

values = [good: 1, good: 4, bad: 3]
# filter data by pattern matching
for {:good, n} <- values, do: n * n
```

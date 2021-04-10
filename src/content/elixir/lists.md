---
category: 'Elixir'
title: 'Lists'
path: '/elixir/lists'
date: '2021-03-07'
---

- linked lists
- not an array

```elixir
list = [1, 2, 3]
[a | b] = [1, 2, 3]

[1, 2, 3] = [1 | [2 | [3 | [] ]]]
[1, 2, 3 | [4, 5]] = [1, 2, 3, 4, 5]

[a, a | tail] = [1, 1, 2]

# matches a list of two or more elements
[a, b | tail]

# add 0 at the start of the list
list = [0 | list]

# add 3, 4, 1 at the end of the list
list = list ++ [3, 4, 1]

# removes the first occurrence of 1
list = list -- [1]

# checks if 0 is present on the list
0 in list
```

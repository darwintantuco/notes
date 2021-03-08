---
category: 'Elixir'
title: 'Lists'
path: '/elixir/lists'
date: '2021-03-07'
---

```
list = [1, 2, 3]
[a | b] = [1, 2, 3]

[1, 2, 3] = [1 | [2 | [3 | [] ]]]
[1, 2, 3 | [4, 5]] = [1, 2, 3, 4, 5]

[a, a | tail] = [1, 1, 2]
```

#### Updating

```elixir
list = [1, 2, 3]

[0 | list]
```

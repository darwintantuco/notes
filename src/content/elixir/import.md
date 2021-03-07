---
category: 'Elixir'
title: 'import'
path: '/elixir/import'
date: '2021-03-07'
---

#### import

- access functions or macros from other modules without using fully qualified name

```elixir

import List, only: [duplicate: 2]

duplicate :ok, 3
```

---
category: 'Elixir'
title: 'import'
path: '/elixir/import'
date: '2021-03-07'
---

#### import

- access functions or macros from other modules without using fully qualified name
- by default, it imports all module functions and macros
- use `only:` option to only import function you need

```elixir

import List, only: [duplicate: 2]

duplicate :ok, 3
```

---
category: 'Elixir'
title: 'Keyword Lists'
path: '/elixir/keyword-lists'
date: '2021-03-07'
---

#### Keyword Lists

- ordered
- keys must be atoms
- keys can be given more than once
- mainly used for passing optional values

```elixir
[name: "Tony Stark", role: "Avenger"] = [{:name, "Tony Stark"}, {:role, "Avenger"}]
```

---
category: 'Absinthe'
title: 'Enum Type'
path: '/absinthe/enum-type'
date: '2021-04-11'
---

- finite set of possible values
- suited for values that are defined and unlikely to change

```elixir
enum :sort_order do
  value :asc
  value :desc
end
```

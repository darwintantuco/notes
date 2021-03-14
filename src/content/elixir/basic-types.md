---
category: 'Elixir'
title: 'Basic Types'
path: '/elixir/basic-types'
date: '2021-03-14'
---

#### Basic Types

#### Booleans

true / false

nil & false are falsy

all other values are truthy

#### Atoms

constants

##### Aliases

- capitalized identifier (String, List, etc)
- converted to atom during compilation
- String alias translates by default to the atom `:"Elixir.String"`

```elixir
String == :"Elixir.String"
```

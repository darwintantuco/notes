---
category: 'Absinthe'
title: 'Schema'
path: '/absinthe/schema'
date: '2021-03-08'
---

#### Organizing a Schema

##### Type modules

- contain a set of types for inclusion in a schema
- `use Absinthe.Schema.Notation`

##### import_types

- should only be used in schema

##### import_fields

- should only be used in schema
- inside `query`, `mutation` and `subscription` macro

#### Schema Resolution

- when a resolver is not defined for a field, absinthe will attempt to use the equivalent of `Map.get/2`

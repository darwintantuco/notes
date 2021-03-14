---
category: 'GraphQL'
title: 'Overview'
path: '/graphql/overview'
date: '2020-12-05'
---

- a specification
- an expressive query language for your data which you can think of as a graph of related objects and other fields
- lets you query your data and get exactly what you want
- supports three types of operations:
  - queries
  - mutations
  - subscription

```
+---------------+                   +----------------+
|               | ----------------> |     Server     |
|               | request           |                |
|               | (GraphQL document)|                |
|    Client     |                   | +------------+ |
|               |                   | | GraphQL    | |
|               | <---------------  | | Schema     | |
|               |         response  | +------------+ |
+---------------+   (JSON document) +----------------+
```

#### Schema

- describe the shape of your data as graph
- defines queries, mutations and subscriptions
- client can instrospect the schema to know what's possible

#### GraphiQL Tool

- runs in the browser
- syntax highlighting
- error reporting
- automation & hinting

#### Graphql Connections

- pagination
- not specific to relay

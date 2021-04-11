---
category: 'Elixir'
title: 'GenServer'
path: '/elixir/genserver'
date: '2021-03-07'
---

- create stateful processes that we can interact with
- run some code in the background continuously
- listens for requests and can respond with results

#### `use GenServer`

- adds `@behaviour GenServer`
- injects all functions required by GenServer behaviour

#### Callbacks

##### init/1

- create in-memory state
- synchronous and should be quick
- if you need to perform complex task on init,
  return `{:ok, state, {:continue, :complex_task}}` and do the complex task in `handle_continue/2`

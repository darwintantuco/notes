---
category: 'Elixir'
title: 'Tasks'
path: '/elixir/tasks'
date: '2021-03-07'
---

- build on top of the spawn functions to provide better error reports and introspection
- abstraction for running code concurrently
- useful for running single async functions

#### Task.start/1

- does not return the result

```elixir
Task.start(fn -> IO.puts("Async code") end)
```

#### Task.async/1

- returns Task struct containing the result and other information like owner and pid
- to get the result you need to use `Task.yield/1` or `Task.await/1`

#### Task.yield/1

- does not raise an exception
- returns nil when task is not yet completed

#### Task.shutdown/1

- stops a task

#### Task.async_stream/3

- returns a stream
- works like `Enum.map/2` and `Task.async/2` combined

#### Task.Supervisor

- built-in supervisor for Task

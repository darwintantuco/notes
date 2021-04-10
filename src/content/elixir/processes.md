---
category: 'Elixir'
title: 'Processes'
path: '/elixir/processes'
date: '2021-03-07'
---

- very lightweight
- each process is isolated from each other
- a failure in a process will never crash or corrupt another process
- a process can be used to add state

#### spawn

- you can create a process using `spawn` function
- defined in `Kernel` module

```elixir
# run the function in another process
pid = spawn fn -> 1 + 2 end

Process.alive?(pid)
```

#### send and receive

```elixir
iex> send self(), {:hello, "world"}

iex> receive do
  {:hello, msg} -> msg
  {:word, _msg} -> "no match"
  end
```

#### spawn_link

- allows process to establish relationship in case of failure

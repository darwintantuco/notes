---
category: 'Absinthe'
title: 'Dataloader'
path: '/absinthe/dataloader'
date: '2021-03-14'
---

#### Dataloader

elixir library

tool that can help your application fetch data in an

optimal way by implementing batching and caching

```elixir
source = Dataloader.Ecto.new(MyApp.Repo)

loader = Dataloader.add_source(Dataloader.new, :db, source)

# load some data
loader =
  loader
  |> Dataloader.load(:db, User, 1)
  |> Dataloader.load_many(:db, User, [2, 3])

# talk to db
loader = Dataloader.run(loader)

# get value
users = Dataloader.get_many(loader, :db, User, [1, 2])
```

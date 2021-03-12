---
category: 'Ecto'
title: 'Migrations'
path: '/ecto/migrations'
date: '2021-03-12'
---

#### Migrations

create and alter tables in your database

ecto keeps track of which migrations have already been run using `schema_migrations` table

by default migrations are run within a database transaction,

to disable it, define `@disable_ddl_transaction true` in migration file

```bash
$ mix ecto.gen.migration add_users_and_posts
$ mix ecto.gen.migration add_users_and_posts -r EctoExample.Repo
```

```bash
$ mix ecto.migrate
```

#### Rollback

```bash
$ mix ecto.rollback
$ mix ecto.rollback -n 3
```

```bash
$ mix ecto.migrate --migrations-path=priv/repo/ecto_example/manual_migrations
```

```elixir
defmodule EctoExample.Repo.Migrations.AddUsersAndPosts do
  use Ecto.Migration

  def change do
    create table("users") do
      add(:firstname, :string, null: false)
      add(:lastname, :string, null: false)

      timestamps()
    end

    create table("posts") do
      add(:title, :string, null: false)
      add(:body, :text)
      add(:user_id, references("users"))

      timestamps()
    end

    create(index("users", :firstname))
    create(index("users", [:firstname, :lastname]))
    create(unique_index("posts", :title))
  end
end
```

#### Up & Down operations

Ecto can't automatically revert removal of column since it doesn't know which type it should use to create the column again

```elixir

```

#### flush()

tells Ecto to execute currently queued operations

any code that comes after the flush call can assume that all the prior changes have been run

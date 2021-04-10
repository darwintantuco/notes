---
category: 'Ecto'
title: 'Migrations'
path: '/ecto/migrations'
date: '2021-03-12'
---

- create and alter tables in your database
- ecto keeps track of which migrations have already been run using `schema_migrations` table
- by default migrations are run within a database transaction,
  - to disable it, define `@disable_ddl_transaction true` in migration file

#### Adding a migration

```bash
$ mix ecto.gen.migration add_users_and_posts
$ mix ecto.gen.migration add_users_and_posts -r EctoExample.Repo
$ mix ecto.gen.migration add_users_and_posts --migrations-path=priv/repo/manual_migrations
```

```bash
$ mix ecto.migrate
```

#### Rollback a migration

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

#### Up & Down Operations

```elixir
defmodule Nexus.Repo.Migrations.RemoveAgeFromUser do
  use Ecto.Migration

  # ecto can't automatically revert removal of column
  # since it doesn't know which type it should use to create the column again
  def up do
    alter table("users") do
      remove :age
    end
  end

  # executed whenever you want to rollback
  def down do
    alter table("users") do
      add :age, :integer
    end
  end
end

```

#### flush()

- tells Ecto to execute currently queued operations
- any code that comes after the flush call can assume that all the prior changes have been run

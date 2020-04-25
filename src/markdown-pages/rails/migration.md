---
path: '/rails/migration'
date: '2020-04-25'
---

# Migration

## Creating table with association

```shell
$ rails generate migration CreateAdminTodos
$ rails generate migration CreateProducts name:string part_number:string
```

```ruby
class CreateAdminTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :admin_todos do |t|
      t.string :description
      t.datetime :completed_at
      t.references :user, index: true, foreign_key: true
      t.string :period, unique: true
      t.jsonb :info
    end
  end
end
```

## Updating existing table

```ruby
class SomeUpdates < ActiveRecord::Migration[6.0]
  def change
    add_column :sellers, :approved_notification_seen, :boolean, default: false
    rename_column :milestones, :start_yr, :years_from_now
    remove_column :technologies, :project_id
  end
end
```

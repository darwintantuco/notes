---
category: 'Rails'
title: 'Migrations'
path: '/rails/migrations'
date: '2020-04-25'
---

#### Creating table with association

```shell
$ rails generate migration CreateAdminTodos
$ rails generate migration CreateProducts name:string part_number:string
```

```ruby
class CreateAdminTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :admin_todos do |t|
      t.string :name
      t.text :desciption

      t.datetime :completed_at
      t.string :period, unique: true

      t.jsonb :info

      t.references :user, index: true, foreign_key: true

      # money-rails
      t.monetize :amount, default: 0

      t.timestamps
    end
  end
end
```

#### Updating existing table

```ruby
class SomeUpdates < ActiveRecord::Migration[6.0]
  def change
    add_column :sellers, :approved_notification_seen, :boolean, default: false
    rename_column :milestones, :start_yr, :years_from_now
    remove_column :technologies, :project_id
  end
end
```

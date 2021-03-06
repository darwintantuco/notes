---
category: 'Rails'
title: 'Migrations'
path: '/rails/migrations'
date: '2020-04-25'
---

#### Creating table with association

```shell
$ rails generate migration CreateAdminTodos
$ rails generate migration CreateProducts \
  name:string part_number:string
```

```ruby
class CreateAwesome < ActiveRecord::Migration[6.0]
  def change
    create_table :awesome do |t|
      t.string :name
      t.text :description
      t.integer :count, default: 1
      t.boolean :active, default: false
      t.datetime :completed_at
      t.jsonb :info

      t.string :period, unique: true

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
    add_column :sellers, :approved_notification_seen,
      :boolean, default: false
    rename_column :milestones, :start_yr, :years_from_now
    remove_column :loans, :interest_rate, :decimal
  end
end
```

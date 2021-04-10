---
category: 'Rails'
title: 'Polymorphic Association'
path: '/rails/polymorphic-association'
date: '2020-05-08'
---

Add column for id and type

```shell
$ rails g model comment \
   content:text commentable_id:integer \
   commentable_type:string
```

or

```ruby
# migration file
create_table :comments do |t|
  t.text :content
  t.belongs_to :commentable, polymorphic: true

  t.timestamps
end

# tip, add index
add_index :comments, [:commentable_id, :commentable_type]
```

Update Model Association

```ruby
# comment
belongs_to :commentable, polymorphic: true

# article, event, photo
has_many :comments, as: :commentable
```

Usage

```ruby
a = Article.first
# rails automatically populate commentable_type
c = a.comments.create!(content: "Hello World")

# returns associated record which is an Article
c.commentable
```

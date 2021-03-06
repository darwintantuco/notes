---
category: 'Rails'
title: 'Commands'
path: '/rails/commands'
date: '2020-05-08'
---

#### Rollback last migration

```shell
$ bundle exec rails db:rollback STEP=1
```

#### Reset test database

```shell
$ bundle exec rails \
  db:drop db:create db:migrate RAILS_ENV=test
```

---
category: 'Rails'
title: 'Best Practices'
path: '/rails/best-practices'
date: '2020-05-07'
---

#### General

- don't commit config/database.yml to version control, add it in .gitignore
- add config/database.yml.sample instead
- always be careful with secrets
- follow one dot rule (law of demeter)

#### Models

- use scope when you have repeating where clauses

#### Controllers

- use thin controllers all the time, put the logic inside a class/service

#### Tests

- tests should be reliable and easy to understand
- never use sleep in integration tests

#### Views

- always use path helpers
- avoid too much logic on views
- prefer decorators over view helpers
- don't use instance variables in partials
- don't hit database

---
category: 'Tools'
title: 'Github Workflows'
path: '/tools/github-workflows'
date: '2020-10-13'
---

#### Sample configs

##### Basic elixir/phoenix

```yml
on: push

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      db:
        image: postgres:11.6-alpine
        options: >
          --health-cmd pg_isready --health-interval 10s
          --health-timeout 5s --health-retries 5
        ports: ['5432:5432']
        env:
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: postgres
          # POSTGRES_DB: hello_test
          POSTGRES_MULTIPLE_DATABASES: db1,db2

    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-elixir@v1
        with:
          otp-version: '22.3.4.5'
          elixir-version: '1.10.4'
      - run: mix deps.get
      - run: mix test
```

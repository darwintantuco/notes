---
category: 'Rails'
title: 'Setting Up New Project'
path: '/rails/setting-up-new-project'
date: '2020-05-07'
---

#### Command

```shell
$ rails new appname --database=postgresql --skip-test --skip-turbolinks --skip-coffee --typescript
```

- Rename config/database.yml to config/database.yml.sample, and add it to .gitignore
- Always keep README.md up to date
- Decide on ruby and nodejs version, preferably use asdf
- Setup rspec test suite
- Setup linters
  - rubocop
  - stylelint
  - prettier
  - eslint
- Configure CI to run linters and tests
- Configure auto deployment in staging

#### Essential Gems

- rspec-rails
- factory_girl
- rails-controller-testing
- capybara
- selenium-webdriver
- chromedriver-helper
- database_cleaner
- faker
- rubocop
- rubocop-rspec

#### Essential packages

- sanitize.css
- modularscale-sass

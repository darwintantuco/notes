---
category: 'Rails'
title: 'Form Helpers'
path: '/rails/form-helpers'
date: '2020-05-19'
---

#### form_with

- can be used to replace **form_for** and **form_tag**

```haml
= form_with(model: admin_blog, local: true) do |f|
  .field
    = f.label :title
    = f.text_field :title
  .field
    = f.label :content
    = f.text_area :content
  .actions
    = f.submit
```

```haml
= form_with(model: [:admin, @todo], url: admin_user_todos_path,
  local: true, class: "form form-pane") do |f|
  .form-group
    = f.label :description, class: 'label'
    = f.text_field :description, class: 'input form-control'
  .action-buttons
    = f.submit 'Save', class: "button -primary"
```

---
category: 'Elixir'
title: 'Best Practices'
path: '/elixir/best-practices'
date: '2021-03-07'
---

- never convert user input strings to atom, atoms are not garbage collected
- use typespecs
  - avoid using any / term
  - add types for private functions

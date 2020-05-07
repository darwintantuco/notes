---
category: 'CSS'
title: 'Best Practices'
path: '/css/best-practices'
date: '2020-04-27'
---

#### General

- always use classes for styling, avoid using id
- use variables for magic numbers
  - color hex
  - font sizes (use modular scale)
- follow 8-point grid guideline

#### Packages

- prefer sanitize.css over normalize

#### Media Queries

1. prefer min-width over max-width, also means prefer mobile-first
1. store preset breakpoints in \$viewport-xxx variables and name it according to their nearest-hundredth number

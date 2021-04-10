---
category: 'CSS'
title: 'Best Practices'
path: '/css/best-practices'
date: '2020-04-27'
---

#### General

- avoid using id for styling, always use classes
- use variables for magic numbers
  - hex colors
- use modular scale for font sizes

- follow 8-point grid guideline

#### Packages

- prefer sanitize.css over normalize

#### Media Queries

- prefer `min-width` over `max-width`, also means prefer mobile-first
- store preset breakpoints in `$viewport-xxxx` variables and name it according to their nearest-hundredth number

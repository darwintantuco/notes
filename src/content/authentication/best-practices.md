---
category: 'Authentication'
title: 'Best Practices'
path: '/authentication/best-practices'
date: '2021-03-15'
---

- enforce the use https
- do not use URL query parameters to exchange sensitive data
- prevent brute force attacks

  - add rate limiter
  - limit number of retries
  - ban users that hit too many server errors

- avoid storing auth token in local storage

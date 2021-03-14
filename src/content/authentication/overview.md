---
category: 'Authentication'
title: 'Overview'
path: '/authentication/overview'
date: '2021-03-15'
---

#### Overview

- use https
- do not use URL query parameters to exchange sensitive data
- prevent brute force attacks
  - rate limiter
  - limit number of retries
  - ban users that hit too many server errors
- avoid storing auth token in local storage

#### Bearer Token

value that goes into Authorization header of any HTTP request

can be JWT

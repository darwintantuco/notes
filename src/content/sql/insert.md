---
category: 'SQL'
title: 'Insert'
path: '/sql/insert'
date: '2021-03-17'
---

- adds one or more rows into a table

```sql
insert into users(firstname, lastname, inserted_at, updated_at)
  values('Bruce', 'Wayne', NOW(), NOW());
```

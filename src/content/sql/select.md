---
category: 'SQL'
title: 'Select'
path: '/sql/select'
date: '2021-03-17'
---

#### select

retrieves one or more rows from one or more tables

```sql
select firstname, lastname from users;

-- * wildcard; it returns all columns
select * from users;

-- qualifying column name with table name
select users.firstname, users.lastname from users;

-- alias table name
select u.firstname, u.lastname from users u;

-- alias column name
select u.firstname as first_name from users u;
```

#### distinct

```sql
-- returns rows with unique firstname
select distinct firstname from users;

-- returns rows with unique firstname and lastname
select distinct firstname, lastname from users;
```

#### where

use to filter rows

```sql
select * from users where firstname='Tony';
```

#### and

if both are true, row is included

```sql
select * from users where firstname='Tony' and age > 30;
```

#### or

if either is true, row is included

```sql
select * from users where firstname='Tony' or firstname='Steve';
```

#### between

acts on a column and two values

```sql
select * from users where age between 20 and 50;
```

#### like

`%` and `_` wildcards

```sql
-- returns records where firstname starts with "T"
select * from users where firstname like 'T%';

-- returns records where firstname contains "on" in any position
select * from users where firstname like '%on%';
```

#### in

```sql
select * from users where firstname in ('Tony', 'Steve');
```

#### is

special operator

only works for NULL

```sql
select * from users where age is NULL;

select * from users where age is not NULL;
```

#### order_by

sorts the result set

can be applied to one or more columns

`asc` (default) or `desc`

#### join

merge multiple tables into one result set

#### cross join

not used in real world and consider a bad practice

simplest join and least useful

combines rows from both tables

```sql
select users.id, users.firstname, posts.id, posts.title from users, posts;
```

#### inner join

matches column in first table to second

doesn't deal with NULL values

```sql
select users.firstname, users.lastname, posts.title from users
  inner join posts on users.id = posts.user_id;
```

#### set functions

compute new values from column values

#### count

```sql
select count(id) from users;
select count(distinct age) from users;
```

#### sum

```sql
select sum(users.age) from users;
select sum(users.age) from users where users.age > 50;
```

#### avg

#### max

#### min

#### group by

```sql
select firstname, count(firstname) from users group by firstname;
```

#### having

like a where clause against group by

```sql
select firstname, count(firstname) from users group by firstname
  having count(firstname) > 1;
```

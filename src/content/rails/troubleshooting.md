---
category: 'Rails'
title: 'Troubleshooting'
path: '/rails/troubleshooting'
date: '2020-05-07'
---

#### Postgres

##### PG::ConnectionBad

could not connect to server: No such file or directory Is the server running locally and accepting connections on Unix domain socket "/tmp/.s.PGSQL.5432"?

Possible causes

- could be a stale PID file
- it could be failing silently because your computer didn't complete the shutdown process
- which means postgres didn't delete the PID

Fix

1. Locate postgres directory

   - on osx using homebrew: /usr/local/var/postgres/
   - others: usr/var/postgres

1. Remove .pid

   ```shell
   $ rm postmaster.pid
   ```

#### Others

A server already running.

```shell
$ lsof -wni tcp:3000

$ kill -9 processid
```

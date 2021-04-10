---
category: 'Rails'
title: 'Credentials'
path: '/rails/credentials'
date: '2020-05-07'
---

#### Commands

```shell
$ rails credentials:edit

$ rails credentials:edit --environment staging
```

#### Troubleshooting

`rails credentials:edit` fails after fixing a merge conflict.

This happens when you edit `credentials.yml.enc` directly.

Mostly likely, the editor you're using appended a newline at the end.

In you're using vim, newline can be removed by opening the file and type:

```vim
:set binary
:set noeol
:wq
```

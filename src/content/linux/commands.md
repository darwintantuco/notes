---
category: 'Linux'
title: 'Commands'
path: '/linux/commands'
date: '2020-05-11'
---

#### cat

#### head

#### tail

#### ln

```shell
$ ln -nfs ~/dotfiles/.bash_profile ~/.bash_profile
$ ln -nfs ~/dotfiles/.vim ~/.vim
```

#### grep

```shell
$ grep Hello greetings.txt

$ grep --ignore-case hello greetings.txt
$ grep -i hello greetings.txt

$ grep -E '[Hh]ello' greetings.txt

$ grep --invert-match hello greetings.txt
$ grep -v hello greetings.txt

$ grep -i -v hello greetings.txt

$ grep Hello nested/directories/deep_file.txt
$ grep -r Hello nested/
```

#### sed

```shell
$ sed 's/Hello/Goodbye/' greetings.txt

$ sed -E 's/Hello|hello/GOODBYE/' greetings.txt

$ sed -i '.old' 's/Hello/Goodbye/' greetings.txt
```

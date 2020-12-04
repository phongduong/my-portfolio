---
title: "Uninitialize git repository "
date: 2020-12-10T15:02:30.101Z
tag: git
---
To uninitialize your git repository, you can delete `.git` folder in your repository. It is a hidden folder. You should show hidden items in your explorer before deleting the folder.

You can also delete the folder by running `rm` command in the root of your repository

```
rm -rf .git
```

`-r` means it will delete the folder recursively. `-f` means forcibly delete without confirming. You should use this command carefully and in the correct repository.
---
title: Deploy Draft And Production Netlify Site With CLI
date: 2020-10-15T15:17:44.289Z
tag: netlify
---

## Set deploy directory

Before deploying Netlify site with CLI, you need to [](https://docs.netlify.com/cli/get-started/#deploy-directories)set the deploy directory. You can pass it when you set up for your project or pass it to the deploy command using `--dir` flag

```
netlify deploy --dir=dist
```

## Draft deploy

In your Netlify project, run

```
netlify deploy
```

It will deploy to your deploy directory and return a draft URL. You can use this URL for previewing and testing

## Production deploy

To deploy for production, you pass the `--prod` or `-p` to the `deploy` command

```
netlify deploy --prod
```

After running this command, your site will be updated with content of the deploy directory.

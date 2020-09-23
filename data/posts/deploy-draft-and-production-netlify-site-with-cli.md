---
title: Deploy Draft And Production Netlify Site With CLI
description: You can deploy Netlify site for draft and production from your
  terminal only using CLI
date: 2020-10-15T15:17:44.289Z
tag: netlify
---
Before deploying Netlify site with CLI, you need to [set the deploy directory](https://docs.netlify.com/cli/get-started/#deploy-directories). 

## Draft deploy

In your Netlify project, run 

```
netlify deploy
```

It will deploy to a draft URL. You can use this URL for previewing and testing

## Production deploy

To deploy for production, you pass the `--prod` or `-p` to the `deploy` command

```
netlify deploy --prod
```

After running this command, your site will be updated with the newest version.
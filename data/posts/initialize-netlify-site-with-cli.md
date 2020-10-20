---
title: Initialize Netlify Site With CLI
date: 2020-10-13T15:10:15.215Z
tag: netlify
---

It is recommended that your project needs to be Git initialized. When you run Netlify `init` command,

```
netlify init
```

It will prompt you to choose either linking to an existing Netlify site or creating and configurating a new site.

If you choose linking to an existing site, you provide the site ID, name or select from a list.

If you choose creating and configurating a new site,

- Enter site name: the site name must be unique. If the name exists, it will warn you. You can leave it blank, a random name will be generated.
- Build command: it depends on your how your project is built for production
- Deploy directory: the output directory of your build command

After entering all needed information, Neltify will set up CI/CD for your project

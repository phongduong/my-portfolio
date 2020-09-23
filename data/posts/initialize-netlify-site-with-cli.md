---
title: Initialize Netlify Site With CLI
description: Initializing Netlify site is the first step to do anything with CLI
date: 2020-09-17T15:10:15.215Z
tag: netlify
---
It is recommended that your project needs to be Git initialized. When you run Netlify `init`  command,

```
netlify init
```

It will prompt you to choose either linking to an existing Netlify site or creating and configurating a new site.

If you choose linking to an existing site, you need to provide its name, choose from a list or enter site ID

If you choose creating and configurating a new site, 

* Enter site name: the site name must be unique. If the name exists, it will warn you. You can leave it blank, it will generate a random name.
* Build command: it depends on your project config
* Deploy directory: the output directory of your build command

After entering all needed information, Neltify will set up Github CI/CD for your project
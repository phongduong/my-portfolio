---
title: Use global data as site's configuration in Eleventy
description: Global data can be used to save your Eleventy site's configuration
  like meta information
date: 2020-10-07T07:41:56.450Z
tag: eleventy
---
In your global data directory, you create a file named `siteConfig.json`. This file contains your site information like below

```json
{
  "title": "Phong Duong",
  "description": "Experiment new things and create programming tutorials",
  "keywords": "javascript, programming tutorials",
  "author": "Phong Duong"
}
```

In your template, you can access this information by `siteConfig.*` anywhere you need
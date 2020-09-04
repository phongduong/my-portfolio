---
title: Reload Eleventy when you save files
description: You can reload Eleventy with serve option when starting your site
date: 2020-10-09T13:38:36.051Z
tag: eleventy
---
When you start your site with `npx @11ty/eleventy` command, you pass `--serve` option to reload your site when files change. It will start Browsersync web server to apply your changes and reload automatically

```
npx @11ty/eleventy --serve
```

> **Note:** Browsersync requires `body` tag to work properly
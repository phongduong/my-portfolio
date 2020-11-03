---
title: Embed social media in Gridsome site
date: 2020-11-12T07:08:37.972Z
tag: gridsome
---
When you write your blog, you may want to embed your social media like a tweet, a Facebook post, a Codepen pen, or a Youtube video. They not only make your post more understandable but reduce the needed work especially you write programming tutorials.

But Gridsome's transformer plugin doesn't transform social media links into the embed code. When you paste your link into the Markdown file, it will stay still and be transformed into a paragraph instead of an embed code.

In this tutorial, I will show you how to transform your social media links into the embed code with [gridsome-plugin-remark-embed](https://gridsome.org/plugins/@noxify/gridsome-plugin-remark-embed) plugin. This plugin transforms popular provider's embed like Youtube, Facebook, Codepen, Codesanbox, etc... 

## Installation

```
yarn add -D @noxify/gridsome-plugin-remark-embed
```

## Set up 

In the
---
title: Embed social media in Gridsome site
date: 2020-11-12T07:08:37.972Z
tag: gridsome
---
When you write your blog, you may want to embed your social media like a tweet, a Facebook post, a Codepen pen, or a Youtube video. They not only make your post more understandable but reduce the needed work especially you write programming tutorials.

But Gridsome's transformer plugin doesn't transform social media links into the embed code. When you paste your link into the Markdown file, it will stay still and be transformed into a paragraph instead of an embed code.

In this tutorial, I will show you how to transform your social media links into the embed code with [gridsome-plugin-remark-embed](https://gridsome.org/plugins/@noxify/gridsome-plugin-remark-embed) plugin. This plugin transforms popular providers embed like Youtube, Facebook, Codepen, Codesanbox, etc... 

## Installation

```
yarn add -D @noxify/gridsome-plugin-remark-embed
```

## Set up

In the `plugins` configuration of Remark, you add the embed plugin

```javascript
{
  remark: {
    [ '@noxify/gridsome-plugin-remark-embed', 
      {
        enabledProviders: ["Youtube", "Twitter", "Codepen"],
        Twitter: {
          align: "center",
          hideMedia: false,
          omitScript: false,
        },
      },
    ]
  }
}
```

In this configuration, I enable Youtube, Twitter, and Codepen ember providers. I use the default configuration for Youtube and Codepen. With Twitter, I want it to align the center, show the media and emit the script automatically. 

## Add the URL

When you add the URL to your Markdown file, make sure it is in a new paragraph. If you place it in the paragraph with text, the plugin can't transform the link. 

## Run the site

After setting up and adding the URL, you run your site and check the transformation. Different providers may be transformed in different ways. You can see the provider's configuration and customize it to suit your site.

## References

[Remark embed document](https://webstone.info/documentation/gridsome-plugin-remark-embed)
---
title: Deploy Netlify Site With Build Hook
description: You can request build hook with POST method to deploy Netlify site
date: 2020-10-19T15:19:49.301Z
tag: netlify
---
Build hook allows you trigger build and deploy your site outside of Netlify.

## Generate build hook

* In site **Setting**, select **Build & deploy** tab from left side bar
* Select **Build hooks** section in **Continuous Deployment**
* Select **Add build hook**
* Enter **Build hook name**. It will be displayed in the deploy message
* Select the default branch to build. If your branch doesn't appear in the list, you need to deploy the site from this branch at least once
* Click **Save**
* It will generate a unique URL 

## Trigger build

To trigger build and deploy, you send a `POST` request to the build hook.

You can pass parameters to the build hook to custom your build

* `trigger_branch`: branch to build and deploy instead of default branch
* `trigger_title`: message will be displayed in the deploy list
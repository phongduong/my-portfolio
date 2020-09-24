---
title: Schedule Netlify Site's Deployment With Github Actions
description: Schedule deploy for Netlify site with Github Actions using build hook
date: 2020-10-22T15:23:27.830Z
tag: netlify
---
I schedule my posts to publish at night. I don't want to manually visit my project and trigger deploy every night because I sometimes forget to do that. I read [Auto trigger deploys on Netlify tutorial](https://flaviocopes.com/netlify-auto-deploy/) of Flavio Copes but he uses Zapier for automation. I don't want to use third-party service so I use Github Actions instead. It supports to trigger workflow run at a scheduled time. 

There are many ways to build and deploy Netlify site. You can use CLI to build and deploy or send a `POST` request to site's build hook. I choose to use build hook.

## Generate Netlify site's build hook

* In site **Setting**, select **Build & deploy** tab from left side bar
* Select **Build hooks** section in **Continuous Deployment**
* Select **Add build hook**
* Enter **Build hook name**. It will be displayed in the deploy message
* Select the default branch to build
* Click **Save**
* It will generate a unique URL 

## Save your build hook as encrypted secret

You don't want everyone to know your build hook and request it continually. This will waste your account's build usage. You need to save it as repo's secrets and retrieve it in the workflow's configuration

* Select repo's **Settings > Secrets**
* Click **New secret**
* Enter secret name
* Paste the build hook URL into **Value**
* Click **Add secret**

## **Create a workflow**

In the **Actions** page of your repo, you set up a new workflow. 

Name your file name and workflow name

Configure `schedule` event and when the workflow run. 

In your job's steps, run the following command

```yaml
run: curl -X POST ${{ secrets.{BUILD_HOOK_SECRET_NAME} }}
```

It retrieves the encrypted secret of your build hook from `secret` context of your repo. This command will send a `POST` request to your site build hook. 

Commit your workflow configuration and check the result of your workflow in the **Actions** page. If your workflow listens to `push` event on `master` branch, you can see your job is running. 

After the workflow completed, visit **Deploys** page of your Netlify site. You can see your triggered deploy in the deploy list.
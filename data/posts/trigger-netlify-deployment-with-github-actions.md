---
title: Trigger Netlify Deployment With Github Actions
description: Netlify allows you to deploy your site using build hook. You can
  call it with Github Actions
date: 2020-10-21T15:22:39.299Z
tag: netlify
---
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

Name your file and workflow 

Configure the events when this workflow will run

In your job's steps, run the following command

```yaml
run: curl -X POST ${{ secrets.{BUILD_HOOK_SECRET_NAME} }}
```

It retrieves the encrypted secret of your build hook from `secrets` context and send a `POST` request to the build hook. 

Commit your workflow configuration and check the result of your workflow in the **Actions** page. If your workflow listens to `push` event on `master` branch, you can see your job is running. 

After the workflow completed, visit **Deploys** page of your Netlify site. You can see your triggered deploy in the deploy list.
---
title: Schedule Netlify Site's Deployment With Github Actions
date: 2020-10-22T15:23:27.830Z
tag: netlify
---

I schedule my posts to publish at night. I don't want to manually visit my Netlify site and trigger deploy every night because I sometimes forget to do that. I read [Auto trigger deploys on Netlify tutorial](https://flaviocopes.com/netlify-auto-deploy/) of Flavio Copes but he uses Zapier for automation. I don't want to use a third-party service so I use Github Actions instead. It supports to trigger workflow run at a scheduled time.

There are some ways to build and deploy a Netlify site. You can use CLI to build and deploy or send a `POST` request to the site's build hook. I choose to use build hook.

## Generate Netlify site's build hook

- In site **Setting**, select **Build & deploy** tab from left sidebar
- Select **Build hooks** section in **Continuous Deployment**
- Select **Add build hook**
- Enter **Build hook name**. It will be displayed in the deploy message
- Select the default branch to build
- Click **Save**
- It will generate a unique URL

## Save your build hook as encrypted secret

You don't want everyone to know your build hook and request it continually. This will waste your account's build usage. You need to save it as repo's secrets and retrieve it in the workflow's configuration

- Select repo's **Settings > Secrets**
- Click **New secret**
- Enter secret name
- Paste the build hook URL into **Value**
- Click **Add secret**

## **Create a workflow**

In the **Actions** page of your repo, you set up a new workflow.

Name your file and workflow

Configure `schedule` event and when the workflow runs. In `schedule` event, you specify the `cron` syntax. The workflow will run your `cron` syntax at UTC times

```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of the month (1 - 31)
│ │ │ ┌───────────── month (1 - 12 or JAN-DEC)
│ │ │ │ ┌───────────── day of the week (0 - 6 or SUN-SAT)
│ │ │ │ │
│ │ │ │ │
│ │ │ │ │
* * * * *
```

[Source](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#scheduled-events)

When you are typing the `cron` syntax, you can hover the syntax and see a popup above it. It shows you when the workflow will run

```yaml
on:
  schedule:
    - cron: "0 16 * * 1-5"
```

My workflow will run at 16:00 UTC from Monday to Friday.

In your job's steps, run the following command

```yaml
run: curl -X POST ${{ secrets.{BUILD_HOOK_SECRET_NAME} }}
```

It retrieves the encrypted secret of your build hook from `secrets` context and sends a `POST` request to the build hook.

Commit your workflow configuration. It will run at the time you scheduled. You can check the result of your workflow on the **Actions** page

After the workflow runs, visit **Deploys** page of your Netlify site. You can see your triggered deploy in the deploy list.

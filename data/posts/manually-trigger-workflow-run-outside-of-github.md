---
title: "Manually Trigger Workflow Run Outside Of Github "
date: 2020-10-23T15:25:19.532Z
tag: github
---

## Listen for the trigger event

To manually trigger Github Actions workflow with API, you need to listen for the event `workflow_dispatch` in `on` section of your workflow.

```yaml
on:
  workflow_dispatch:
```

## Configure input

You can config the required input and default value if the input is not provided.

```yaml
on:
  workflow_dispatch:
    inputs:
      source:
        description: "Where the API is triggered"
        required: true
        default: "CLI"
```

The `source` input is required. It is the information about where the API is triggered. The default value `CLI` will be used if you don't pass the input in the request

After that, you can retrieve the configured input in your jobs.

```yaml
on:
  workflow_dispatch:
    inputs:
      source:
        description: "Where the API is triggered"
        required: true
        default: "CLI"
jobs:
  print:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Triggered from ${{ github.event.inputs.source }}!"
```

In the `print` job, you echo the `source` value from `github.event.inputs` context

## Generate personal access token

You need to authenticate before using Github API. It is recommended that you to use personal access token for requests.

- Select **Settings** of your account
- Choose the **Developer settings** tab of the left side bar
- Select **Personal access tokens**
- Click **Generate new token**
- In the **Token description**, enter your token's name
- Grant **repo** scope to your access token
- Click **Generate token**
- You need to save the token somewhere safe. After you leave the page, you won't see it again

## Trigger the workflow

To trigger the `workflow_dispatch` event, you send a `POST` request to the Github API with your generated personal access token.

### Command line

```
curl \
-u {owner}:{access_token} \
-X POST \
-d '{"ref": {ref}, "inputs": {inputs}}' \
https://api.github.com/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches
```

`owner`: your Github username

`access_token`: your personal access token

`repo`: Github repo's name

`workflow_id`: workflow file name

`ref`: required. It can be branch, tag or commit SHA

`inputs`: the object with configured keys in your workflow

### Postman

- Select `POST` as request method
- Enter `https://api.github.com/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches` as request URL
- In `Authorization` tab, select `Basic Auth` type
- Enter your `username`
- In the `Password` field, enter your personal access token
- Select `Body` tab and choose `raw` option
- Enter `{"ref": {ref}, "inputs": {inputs}}` as the body
- After send request, you will see status `204 No Content` in the response

### `fetch` function

```javascript
fetch(
  "https://api.github.com/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches",
  {
    method: "POST",
    headers: {
      Authorization: "Basic {encoded_string}",
    },
    body: JSON.stringify({ ref: { ref }, inputs: { inputs } }),
  }
);
```

In the `encoded_string` after Basic word, you need to pass a base64-encoded string `username:access_token`

## Sources

[Github API document](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#workflow_dispatch)

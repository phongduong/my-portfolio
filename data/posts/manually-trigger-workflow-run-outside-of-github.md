---
title: "Manually Trigger Workflow Run Outside Of Github "
description: "You can manually trigger Github Actions workflow run with API "
date: 2020-10-23T15:25:19.532Z
tag: github
---
## Listen for the trigger event

To manually trigger Github Actions workflow with API, you need to listen for the event in `on` section of your workflow. 

```yaml
on:
  workflow_dispatch:
```

## Configure input

You can config the required input and the default value if the input is not provided.

```yaml
on:
  workflow_dispatch:
    inputs:
      source:
        description: 'Where the API is triggered'
        required: true
        default: 'CLI'
```

You can retrieve the configured input in your jobs

```yaml
on:
  workflow_dispatch:
    inputs:
      source:
        description: 'Where the API is triggered'
        required: true
        default: 'CLI'
jobs:
  print:
    runs-on: ubuntu-latest
    steps:
    - run: echo "Triggered from ${{ github.event.inputs.source }}!"
```

## Generate personal access token

To request Github API, you need to authenticate first. Github supports you to use personal access token instead of typing password manually. You can generate the access token using this tutorial.

## Trigger the workflow

To trigger the `workflow_dispatch`, you send a `POST` request to the

##
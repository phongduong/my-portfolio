---
title: Set And Get Environment Variable In Github Actions
description: Github Actions allows to set environment variable in your step and
  use it in run statement
date: 2020-10-20T15:21:38.937Z
tag: github
---
Environment variables are variables that are available to every step in the workflow. They are case-sensitive

## Set environment variable

You can set and get environment variables with 2 methods:

### `env` keyword

You can `env` keyword to set environment variables for a step, job or workflow.

**Step**

```yaml
steps:
  - name: Step environment variables
    run: echo $var
    env:
      var: Hello!
```

**Job**

```yaml
jobs:
  job1:
    env:
      var: Hi!
```

**Workflow**

```yaml
env:
  environment: production
```

### Use `::set-env` command

You can use `::set-env` command to set environment variables in your action. You use it in `run` keyword. The current action can't access the new value but actions below it can. This command can also be used for updating. 

```yaml
echo "::set-env name={name}::{value}"
```

`name`: environment variables name

`value`: new value to update

> **Note:** you should put `::set-env` command inside the `echo` command because it is not a shell command

## Get environment variable

To get environment variables, you use your variables in shell commands with prefix `$`

```yaml
- name: Deploy site
  run: echo $text
  env:
    text: Hello!
```

After you save the workflow configuration, you can check your actions and see the output
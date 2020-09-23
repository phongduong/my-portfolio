---
title: Authenticate To Github API Using Access Token
description: Instead of typing password, we can use access token to authenticate
  to Github API
date: 2020-10-27T15:27:33.049Z
tag: github
---
Github encourages users to use personal access token to authenticate instead of using account's password.

## Generate personal access token

* You can generate personal access token in the **Settings** page of your account
* Choose the **Developer settings** tab of the left side bar
* Select **Personal access tokens**
* Click **Generate new token**
* In the **Token description**, enter your token's name
* Grant **repo** scope to your access token
* Click **Generate token**
* You need to copy the token and save somewhere safe. After you leave the page, you won't see the access token again

## Authenticate to Github API

You can authenticate to Github API by 2 methods

### Command line

You pass your Github username and access token as password to `-u` or `--user` flag

```
curl -u username:access_token
```

### `fetch` function

You use Basic authentication in the header of your request. You need to pass a base64-encoded string `username:access_token` after the word `Basic`. 

```javascript
fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic encoded_string'
    }});
```

You will receive a response with status `204 No Content`
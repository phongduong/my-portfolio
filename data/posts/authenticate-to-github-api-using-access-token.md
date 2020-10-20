---
title: Authenticate To Github API Using Access Token
date: 2020-10-27T15:27:33.049Z
tag: github
---

Github encourages users to use personal access token for authentication instead of account's password.

## Generate personal access token

- Select **Settings** page of your account
- Choose the **Developer settings** tab of the left side bar
- Select **Personal access tokens**
- Click **Generate new token**
- In the **Token description**, enter your token's name
- Grant permission and scope to your access token
- Click **Generate token**
- You need to save the token somewhere safe. After you leave the page, you won't see it again

## Authenticate to Github API

You can authenticate to Github API by the following methods

### Command line

You pass your Github username and access token as password to `-u` or `--user` flag

```
curl -u username:access_token
```

### Postman

- In `Authorization` tab, select `Basic Auth` type
- Enter your `username`
- In the `Password` field, enter your personal access token

### `fetch` function

You use Basic authentication in the header of your request. You need to pass a base64-encoded string `username:access_token` after the word `Basic`.

```javascript
fetch(url, {
  headers: {
    Authorization: "Basic encoded_string",
  },
});
```

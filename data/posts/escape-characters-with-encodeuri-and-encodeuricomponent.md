---
title: How to encode and decode URL with Javascript
date: 2020-10-30T14:40:43.083Z
tag: javascript
---
When you request a third-party API, you may pass parameters that contain special characters. This may cause errors for your request. To avoid this situation, you need to encode the URL before sending the request. 

## Encode URL

Javascript has 2 functions that help you encode a URL:

* `encodeURI()`: encode a full URL. It doesn't encode `~!@#$&*()=:/,;?+'` 
* `encodeURIComponent()`: encode a part of the URL. It doesn't encode `-_.!~*'()` 

## Examples

### Encode URL

```javascript
const URL = "https://phongduong.dev/blog/kiểm tra tiếng Việt"

console.log(encodeURI(URL)) // https://phongduong.dev/blog/ki%E1%BB%83m%20tra%20ti%E1%BA%BFng%20Vi%E1%BB%87t
console.log(encodeURIComponent(URL)) // https%3A%2F%2Fphongduong.dev%2Fblog%2Fki%E1%BB%83m%20tra%20ti%E1%BA%BFng%20Vi%E1%BB%87t
```

### Encode parameters

```javascript
const URL = "https://phongduong.dev"
const URLParam = "https://example.com"
const queryParam = "Đây là tiếng Việt"

console.log(`${URL}?url=${encodeURIComponent(URLParam)}`) // https://phongduong.dev?url=https%3A%2F%2Fexample.com
console.log(`${URL}?q=${encodeURIComponent(queryParam)}`) // https://phongduong.dev?q=%C4%90%C3%A2y%20l%C3%A0%20ti%E1%BA%BFng%20Vi%E1%BB%87t
```

## Decode URL

Javascript provides `decodeURI()` and `decodeURIComponent()`to decode a URL. You can use them to decode the corresponding encoding function's result

```javascript
console.log(decodeURI("https://phongduong.dev/blog/ki%E1%BB%83m%20tra%20ti%E1%BA%BFng%20Vi%E1%BB%87t")) // https://phongduong.dev/blog/kiểm tra tiếng Việt
console.log(decodeURIComponent("https%3A%2F%2Fphongduong.dev%2Fblog%2Fki%E1%BB%83m%20tra%20ti%E1%BA%BFng%20Vi%E1%BB%87t")) // https://phongduong.dev/blog/kiểm tra tiếng Việt
```

## Summary

If you want to encode a full URL, use `encodeURI()`. 

If you want to encode a part of the URL, use `encodeURIComponent()`. 

To decode, use the corresponding function.
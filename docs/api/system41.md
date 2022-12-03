---
id: system41
title: system41
---
The system41 API is how the system communicates with the browser. Essentially, it is the javascript `eval()` method and is completely unsafe. The operating system uses it for builtin applications that need to bypass [41worker](api/41worker) limitations such as the permissions system or antivirus system.

## 41worker vs sys41
Simply put, below is what a sys41 operation looks like
```js
sys41.operation(...args)
```
and below is what a 41worker operation looks like
```js
sys(operation, args)
//or
self.postMessage(operation, args)
```
Therefore the following operations are the same:
```js
sys41.fs.File("C:/user/root/README.txt")
```
and
```js
sys("fs.File", "C:/user/root/README.txt")
//or
self.postMessage("fs.File", "C:/user/root/README.txt")
```
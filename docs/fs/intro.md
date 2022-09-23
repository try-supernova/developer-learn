---
id: fs/intro
title: Introduction
---

Open99 uses the browser's [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) via [localforage](https://localforage.github.io/localForage/). This allows for a promise-based interface, as well as the benefit of having the same API for all types of Web Storage, including WebSQL, LocalStorage, and IndexedDB.  

The open99 api for interacting with the filesystem is located at `sys41.fs`. 
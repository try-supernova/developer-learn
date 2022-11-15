---
id: intro
title: Introduction
---

Open99 uses the browser's [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) via [localforage](https://localforage.github.io/localForage/). This allows for a promise-based interface, as well as the benefit of having the same API for all types of Web Storage, including WebSQL, LocalStorage, and IndexedDB.  

The open99 api for interacting with the filesystem is located at `sys41.fs`.  

## Working with files
### Getting, setting, and deleting files
When working with files in open99, you must use the `sys41.fs.file` api. This api returns an object commonly known as the File object. This class contains the following properties and methods:  
```ts
{
    "name": string,
    "path": string,
    "icon": string
}
```

## Internal notes
### There is no such thing as a directory/folder
In open99, the concept of directories, also known as folders, does not exist. If you look in the application's developer tools, hit 'application' and then IndexedDB, you will see that there are no entries ending with a slash.  
#### So how do directories exist within the API?  
Simply put, open99 separates files by slashes, and the text in between the slashes are the directory names. For example:  
`/c/users/admin/hello/test.txt` is  
* Drive C
    * users
        * admin
            * hello
                * test.txt

#### But then how can empty directories exist?  
Simple. Open99 adds an empty entry, `.keep` to the directory. This file cannot be viewed in open99, not even with the show-hidden-files option enabled.  

While it may not seem like much, this simplifies the way the filesystem works and limits the amount of entries crouding up the browser's IndexedDB, which has a limit of 
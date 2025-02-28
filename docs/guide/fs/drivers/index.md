---
id: index
title: Drivers
---
A filesystem driver is a software component that allows Supernova to communicate with different storage implementations.
In the context of this page, drivers refer to filesystem drivers.  
Supernova internally has a few drivers that are used to interact with the host's storage systems.
Applications can register their own drivers to only interact with cloud storage systems.
:::danger
Due to a current filesystem driver limitation in Supernova,
files cannot be moved or copied between drives, regardless of whether they use the same filesystem driver.
:::
# Implementation
Satellite does not yet allow for custom drivers to be registered.
However, the following is the interface that a driver must implement.
```ts
declare interface DBDriver {
  /**
   * The name of the driver. For example, `IDB`.
   * This should not be the drive letter.
   */
  name: string,
  getName: () => string,
  write: (path: string, content: FileContentTypes, metadata?: FileMetadataType) => Promise<void | Error>,
  read: (path: string) => Promise<FileContentTypes | Error>,
  readDir: (path: string) => Promise<string[] | Error>,
  mkDir: (path: string) => Promise<string[] | Error>,
  readMetadata: (path: string) => Promise<FileMetadataType | Error>,
  delete: (path: string) => Promise<void | Error>,
  deleteDir: (path: string) => Promise<void | Error>,
  exists: (path: string) => Promise<void | Error>,
  mv: (oldPath: string, newPath: string) => Promise<void | Error>,
  cp: (oldPath: string, newPath: string) => Promise<void | Error>,
  getFreeSpace: () => Promise<number | Error>,
  init: () => Promise<void | Error>
}
```
It is important to mention that *all* of these methods should be implemented for components like Explorer to work.
Errors should only be thrown if:
- The driver is not initialized correctly by the system.
- A path does not exist.
- Invalid content type is passed to write.
- The user is unauthenticated.

If a driver does not support an operation, it should simply return void
(or 0 if the unsupported method is getFreeSpace, etc).
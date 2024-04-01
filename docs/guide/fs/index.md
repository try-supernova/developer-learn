---
id: intro
title: Filesystem
---

Getting familiarized with the Pluto filesystem is essential for developing applications for Pluto.  
Filesystem refers to all the drives, folders, and files that make up the storage system in Pluto.
# Drives
Pluto sorts files into a drive.
The drive is a large storage space that can contain many files and folders. The drive is the top-level container for all files and folders in Pluto.
Each drive can be identified by a single character, such as `A:`, `B:`, `C:`, and so on.
Because of this, there is a limit of 26 drives.

# Filesystem Drivers
Although filesystem drivers and drives are similarly named, they have two very different functions.
Filesystem drivers are software components that allow Pluto to communicate with different storage implementations.
It is also important to note that filesystem drivers and drivers are not related.
Read more on how to create a filesystem driver [here](/guide/fs/drivers).

# Anatomy of a File
Files on Pluto consist of three main components:
- **Path**: The location of the file in the filesystem.
- **Content**: The data stored in the file. This can be text of any encoding, binary data, or any other type of data.
- **Metadata**: Information about the file, such as the file's size, comments, and creation date.
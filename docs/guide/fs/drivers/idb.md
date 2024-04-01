---
id: idb
title: IDB
---

The internal IDB driver provides a way for applications to interact with the host's IndexedDB storage system.
# Limits
Unfortunately, hosts limit the amount of data that can be stored in IndexedDB.
The limit varies per host.
- Chrome/Chromium based: 60% of host disk space
- Firefox: 50% of host disk space
- Safari: 1GB
    - Safari will prompt the user to allow more space if the limit is reached. It does this at 200MB intervals.

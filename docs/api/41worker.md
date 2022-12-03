---
id: 41worker
title: 41worker
---
The 41worker API is the safest method for applications to interact with the operating system.  
Essentially, the api runs in a worker where it has no access to the system except for the ‘self.postMessage‘ method and the `sys` method (a shortcut to self.postMessage). This allows for users to allow permissions to the app, as well as allows the system to intercept and sniff api requests. This is useful because, for example, if a program tries to write malicious javascript to a file and then get the user to run it, the user will have to allow for the program to write to a file, and will let the operating system investigate the contents of this file. If the user denies the permission or the operating system recognizes that it is known malware, this attempt willl fail.
---
id: assembly
title: Assembly Runtime
---

Pluto also allows for applications to be written for WebAssembly. 
This is done through the Pluto Assembly Runtime, which does not run under the 41worker runtime.
Regardless, it still runs under a similar security model.  
A variety of system components, such as the Display Server, run under the Assembly Runtime to take advantage of its speed and special priveleges.
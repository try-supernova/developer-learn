---
id: 41worker
title: Process Runtime
---

The Pluto Kernel bundles a process runtime internally called 41worker.
It allows for safe execution of untrusted code in a sandboxed environment.
The Pluto Kernel considers all code that is not part of the kernel itself as untrusted, including programs such as the shell and console host.

Programs are written in JavaScript (or a language that compiles to JavaScript, such as CoffeeScript). When being executed, the process is run in a sandboxed Web Worker environment and executed through a Blob URL.
At the very basic level, the program runtime does not inject any code changing variables except for certain Web APIs.
Access to these Web APIs is delegated through variable ownership.
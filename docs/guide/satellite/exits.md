---
id: exits
title: Exit Indication
---

The Pluto team spent months trying to implement an implicit monkey-patched system for exit indication at the end of program execution, similar to many scripting languages, but determined it was not worth most of our time.
We will revisit this later during Pluto's development.

We suggest you use the `process.exit(0)` API at the end of your script for it to exit automatically upon completion. In the future, an explicit exit statement will not be required, but this API will always be functional.

:::warning
This may not be the solution you need. For example, services and similar programs most likely want to stay alive past their initial execution.
Be warned that using `process.exit(0)` forcefully terminates the process and removes all event listeners.
:::
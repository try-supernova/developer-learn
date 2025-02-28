---
id: index
title: Supernova Kernel
---

The Supernova Kernel is the central component of the Supernova operating system.
It is responsible for managing processes, handling API calls, and providing a secure environment for running code.\

## Overview
The Kernel is not a monolithic entity; it is composed of several smaller components that work together to provide a secure and efficient environment for running code.
It is also not a Supernova process, but rather a separate piece of software that manages the operating system.
It is similar to firmware in that it is the lowest level of software that runs on Supernova.  

## Responsibilities

### API Calls
All API calls go through the Kernel, which then routes them to the appropriate process.
The Kernel does not perform any processing or filtering on the data itself; it merely routes the data to the appropriate process.

### Process Management
The Kernel is also responsible for managing the lifecycle of processes, including starting, stopping, and restarting them.

### Filesystem
The Kernel also writes the filesystem to disk and reads it back into memory when the system boots up.
It is also in charge of writing the installer filesystem to disk when the system is first booted, and the root filesystem when the system is first installed.
---
id: calls
title: Calls
---

Every program has an ability to interact with other programs by using the process runtime API. An API call is the medium by which processes can interact.

## Overview
All Pluto API calls go through the Kernel. The Kernel will typically then route the call to the appropriate process, which will respond to the kernel with the result of the call. The kernel will then send the result back to the process that made the call.  
Pluto API calls must contain two things: a payload and a Call ID.  

![API call](/assets/call-1.png) Image of a process communicating with the main thread through a REPL.

The payload is a JSON object that contains the data that the process wants to send to the main thread.
After (typically) querying other processes, the main thread will then respond with a payload of its own, which will then be sent back to the process that made the call.
Kernel API calls may be of any type and are not necessarily JSON objects.  

The Call ID is a number that identifies the API call. It is used to match the response of the call. In the image above, it is the number in parentheses.  
Both the Kernel and the Process use 7-digit integers as Call IDs. 
---
id: calls
title: Calls
---

Every program has an ability to interact with other programs by using the process runtime API. An API call is simply the medium by which processes can interact.

## Overview
All Pluto API calls must contain two things: a payload and a Call ID.  

![API call](/assets/call-1.png) Image of a process communicating with the main thread through a REPL.

The payload is a JSON object that contains the data that the process wants to send to the main thread.
After (typically) querying other processes, the main thread will then respond with a payload of its own, which will then be sent back to the process that made the call.  
In the image, the payload is of an illegal type (string), but it is only for demonstration purposes.  

The Call ID is a number that identifies the API call. It is used to match the response of the call. In the image above, it is the number in parentheses.
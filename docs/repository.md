---
id: repository
title: Repository setup
---

A repository in open99 is a designated place where applications are downloaded. Think of it as another source in the Package Manager. You can use this other source to install your own applications rather than having to run JavaScript files in the web os, which can be an ineffecient way for your end-users.

:::caution

Currently, non-sudo users cannot install separate repositories other than the preinstalled one preinstalled on open99. You may want to submit an app to the official repository - [Learn more](submitting-app)

:::

To host your own repository for open99, you must meet the following prerequisite:  

* You must have a server or access to a server  
    * Github and other code-sharing applications are fine

Next, create a directory (or repository, if you're not hosting it on your own machine) and make sure it can be accessed through the web.  

:::tip

You may consider creating a README file at the root of your project if you're planning on collaborating on it

:::

When this is done, begin to upload your applications and pack them into a compressed `.zip` file.

After you've configured this, you may continue to create your `manifest.json` file.
---
id: manifest
title: Manifest file
---

Now that you've uploaded all of your applications, you are on your way to making your repository functional! You only need to configure this one, last thing.

The `manifest.json` file should be served at the root of your project. It should contain valid `JSON` and should follow the type definition located at [lib/package.json.d.ts](https://github.com/system41/open99/tree/main/lib/manifest.json.d.ts)

After this is configured, add your repository's root URL to the package manager's sources and refresh. You should now be able to see your apps along with the preinstalled ones.
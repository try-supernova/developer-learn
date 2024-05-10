---
id: create
title: Creating a bundle
---

Bundling a program or library into the Pluto system is a straightforward process.
The creation of the program is not different from creating a regular program, but the bundling process has a few extra steps.  

Pluto consists of two main filesystems: the installer filesystem and the root, or target filesystem.
Applications must be placed into either `installer_fs/Pluto/System41` or `target_fs/Pluto/System41`.

:::danger devDependencies vs dependencies
When creating a bundle, make sure to install all dependencies as `dependencies` and not `devDependencies`.
Continue to use your traditional module bundlers like Webpack, Rollup, or Parcel to bundle your code.
This means if you are using webpack, you should install it as a `dependency` and not a `devDependency`.  
The Pluto team spent *1 month* debugging a simple issue where certain dependencies were not being included in the bundle because they were installed as `devDependencies`.
The reasoning behind this is that Pluto will typically have its `NODE_ENV` set to `production`, which means that `devDependencies` will not be installed, despite them still being needed for the application build.
:::

# Build script
The build script should be located in ./build/index.js. It must be JavaScript. It is executed with the `node` executable.

# Prevent non-program directories from building
You may prevent directories from being bundled into applications by naming them `DIR_{name}` where `{name}` is the name of the directory that will be outputted.  
For example, `DIR_testing` will be outputted as `testing`, and will be a regular directory that contains files.
---
id: versioning
title: Versioning
---
Supernova features a few different versioning schemes for different components. Here's a quick rundown:
- ***Kernel***: Uses a long build string. The build string is a combination of the version and metadata.
    - The scheme looks like this: `major.minor.build.branch-commit.timestamp`
    - Major and minor are self-explanatory - they are retrieved from the version property in package.json. The version property should ONLY be `major.minor`
    - The build number of the build string increments by 1 every time it is *pushed* on git (aka built on Cloudflare Pages), **not** whenever it is built locally.
    - Branch, commit and timestamp are applied automatically at global network build—timestamp should be a Unix timestamp.
    - The build string is accessible in the kernel via the `$SYSVER` global.
    - When supernova is built on the local network, the build string is `major.minor.00000.LOCAL-0000000.timestamp`
- ***Specific applications***: Usually semver, but sometimes a build string.
- ***Desktop*** Supernova desktop's version is always 1.0.0.
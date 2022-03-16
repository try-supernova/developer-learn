---
id: metadata
name: metadata.json
---

Now that you've uploaded all of your applications, you are on your way to making your repository functional! You only need to configure this one, last thing.

The `metadata.json` file should be served at the root of your project. It should contain valid `JSON` and should follow the specification below.

```json

{
    "name": "String. Name of repository",
    "author": "String. Can be set on",
    "id": "String. Repo ID (must be unique & cannot be 'open99')",
    "description": "String. Description of repository",
    "license": "String. Should be the name of the license, if any, that all applications go under. The license prooperty on each individual application will allow you to set different licenses for different apps.",
    "apps": [ //Array containing application objects
        {
            "id": "String. Unique app id",
            "name": "String. App name",
            "description": "App description",
            "categories": ["Object with category strings inside"],
            "alias": ["Array with alias strings inside"],
            "version": "String",
            "depends": {}, //Coming soon
            "icon": "Coming soon",
            "root": "Coming soon",
            "license": "String, License name. Overrides default license for repo"
        }
    ]
}

```

After this is configured, add your repository's root URL to the package manager's sources and refresh. You should now be able to see your apps along with the preinstalled ones.
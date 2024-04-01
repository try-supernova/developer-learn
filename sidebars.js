module.exports = {
    mainSidebar: [
        {
            type: "doc",
            id: "index"
        },
        {
            type: "category",
            label: "Guide",
            link: {
                type: "generated-index",
                title: "Guide",
                description: "General guide for application developers.",
            },
            collapsed: false,
            items: [
                {
                    type: "category",
                    label: "Filesystem",
                    link: {type: "doc", id: "guide/fs/intro"},
                    items: [
                        {
                            type: "category",
                            label: "Drivers",
                            link: {type: "doc", id: "guide/fs/drivers/index"},
                            items: [
                                "guide/fs/drivers/idb",
                                "guide/fs/drivers/ram"
                            ]
                        }
                    ],
                },
                {
                    type: "category",
                    label: "Satellite",
                    link: {type: "doc", id: "guide/satellite/index"},
                    items: [
                        "guide/41worker",
                        "guide/calls",
                    ]
                }
            ]
        },
        {
            type: "category",
            label: "Package Manager",
            items: [
                "packman/repository",
                "packman/manifest",
                "packman/submitting-app"
            ]
        },
        "terminology"
    ],
    platformSidebar: [
        "platform/index",
        "platform/versioning"
    ]
};

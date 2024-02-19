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
                "guide/41worker",
                "guide/calls",
                {
                    type: "category",
                    label: "Filesystem",
                    link: {type: "doc", id: "fs/intro"},
                    items: [
                        "fs/limits"
                    ],
                },
                {
                    type: "category",
                    label: "Satellite",
                    link: {type: "doc", id: "guide/satellite/index"},
                    items: [
                        "guide/satellite/index",
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
        {
            type: "category",
            label: "Orbit1",
            link: {type: "doc", id: "platform/orbit1/index"},
            items: ["platform/orbit1/index"]
        },
        "platform/versioning"
    ]
};

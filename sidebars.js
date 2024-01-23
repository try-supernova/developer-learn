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
                "guide/available-webapis",
                {
                    type: "category",
                    label: "Filesystem",
                    link: {type: "doc", id: "fs/intro"},
                    items: [
                        "fs/limits"
                    ],
                },
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
        {
            type: "doc",
            id: "terminology"
        }
    ],
    platformSidebar: [
        {
            type: "doc",
            id: "platform/index"
        }
    ]
};

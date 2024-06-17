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
                    label: "Satellite",
                    link: {type: "doc", id: "guide/satellite/index"},
                    items: [
                        "guide/satellite/dialogs",
                    ]
                },
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
                "guide/design/xui",
                {
                    type: "category",
                    label: "Kernel",
                    link: {type: "doc", id: "guide/kernel/index"},
                    items: [
                        "guide/kernel/41worker",
                        "guide/kernel/calls",
                    ]
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
        "terminology"
    ],
    platformSidebar: [
        "platform/index",
        "platform/versioning",
        {
            type: "category",
            label: "Bundled programs and libraries",
            description: "On Pluto, you can bundle your applications, programs, and libraries into the Pluto system.\n" +
                "This allows you to create a seamless experience for your users, who can access your applications directly from the Pluto webtop without any extra online installation required.",
            items: [
                "platform/bundled/create",
            ]
        }
    ],
    xuiSidebar: [
        "guide/design/index",
        "guide/design/xui"
    ]
};

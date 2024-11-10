module.exports = {
    mainSidebar: [
        "index",
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
                        {
                            "type": "category",
                            "label": "Network",
                            link: {type: "doc", id: "guide/satellite/network/index"},
                            items: [
                                "guide/satellite/network/index"
                            ]
                        }
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
                        },
                        {
                            type: "category",
                            label: "Operations",
                            link: {type: "doc", id: "guide/fs/operations/index"},
                            items: [
                                "guide/fs/operations/init",
                                "guide/fs/operations/read",
                                "guide/fs/operations/readDir",
                                "guide/fs/operations/readMetadata",
                                "guide/fs/operations/write",
                                "guide/fs/operations/mkDir",
                                "guide/fs/operations/delete",
                                "guide/fs/operations/deleteDir",
                                "guide/fs/operations/exists",
                                "guide/fs/operations/mv",
                                "guide/fs/operations/cp",
                                "guide/fs/operations/getFreeSpace",
                                "guide/fs/operations/getName",
                            ]
                        },
                        {
                            type: "category",
                            label: "Security",
                            link: {type: "doc", id: "guide/fs/security/index"},
                            items: [
                                "guide/fs/security/index"
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
                        {
                            type: "category",
                            label: "Communication",
                            link: {type: "doc", id: "guide/kernel/communication/index"},
                            items: [
                                "guide/kernel/communication/calls",
                                "guide/kernel/communication/streamed-events",
                            ]
                        },
                        "guide/kernel/assembly",
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

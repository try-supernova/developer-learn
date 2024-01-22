module.exports = {
  mySidebar: [
    {
      type: "doc",
      id: "index"
    },
    {
      type: "category",
      label: "APIs",
      items: [
        {
          type: "doc",
          id: "api/41worker"
        },
        {
          type: "doc",
          id: "api/calls"
        },
        {
          type: "doc",
          id: "api/available-webapis"
        },
        {
          type: "category",
          label: "Filesystem",
          items: [
            {
              type: "doc",
              id: "fs/intro"
            },
            {
              type: "doc",
              id: "fs/limits"
            }
          ],
        },
      ]
    },
    {
      type: "category",
      label: "Platform",
      items: [
        {
          type: "doc",
          "id": "platform/index"
        }
      ]
    },
    {
      type: "category",
      label: "Package Manager",
      items: [
        {
          type: "doc",
          id: "packman/repository",
        },
        {
          type: "doc",
          id: "packman/manifest"
        },
        {
          type: "doc",
          id: "packman/submitting-app",
        }
      ]
    },
    {
      type: "doc",
      id: "terminology"
    }
  ]
};

module.exports = {
  title: 'Open99 Docs',
  tagline: 'Simple and easy to read documentation made by the system41 team',
  url: 'https://docs.open99.ga',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'system41', // Usually your GitHub org/user name.
  projectName: 'open99-apps', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'open99 docs',
      logo: {
        alt: 'open99 logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: "docsVersionDropdown"
        }
      ],
      items: [
        {
          href: 'https://open99.ga',
          label: 'Website',
          position: 'left',
        },
        {
          href: 'https://github.com/system41/open99-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: '/md-guide',
            },
            {
              label: 'License',
              to: '/licensing',
            },
          ],
        },
        {
          title: 'System41',
          items: [
            {
              label: "Web OS Standard",
              href: "https://system41.github.io/web-os-standard/"
            },
            {
              label: "LITB.js",
              href: "https://github.com/system41/LITB.js/tree/0.0.1"
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/system41/open99-docs',
            },
          ],
        },
      ],
      copyright: 'Built proudly using 🦖 Docusaurus.',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/system41/open99-docs/edit/master/',
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
};

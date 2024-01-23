module.exports = {
  title: 'Pluto Developer - Learn',
  tagline: 'Simple and easy to read documentation made by the pluto team',
  url: 'https://learn.d.pluto.stretch.wtf',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'use-pluto', // Usually your GitHub org/user name.
  projectName: 'developer-learn', // Usually your repo name.
  themeConfig: {
    docs: {
      sidebar: {
        hideable: false
      }
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Developer: Learn',
      logo: {
        alt: 'pluto logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: '/platform',
          label: 'Platform',
          position: 'left',
        },
        {
          href: 'https://pluto.stretch.wtf',
          label: 'Launch Pluto',
          position: 'left',
        },
        {
          href: 'https://github.com/use-pluto/developer-learn',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Pluto community',
          items: [
            {
              label: "Web OS Standard",
              href: "https://use-pluto.github.io/web-os-standard/"
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/use-pluto/',
            },
          ],
        },
      ],
      copyright: 'Pluto Developer: Learn is a set of open-source developer documentation articles written by the community.<br>Contributions are welcomed',
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
            'https://github.com/use-pluto/developer-learn/edit/main/',
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

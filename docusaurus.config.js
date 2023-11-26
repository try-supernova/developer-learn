module.exports = {
  title: 'Pluto Learn',
  tagline: 'Simple and easy to read documentation made by the system41 team',
  url: 'https://learn.d.pluto.stretch.wtf',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'use-pluto', // Usually your GitHub org/user name.
  projectName: 'developer-learn', // Usually your repo name.
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true
      }
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Pluto Learn',
      logo: {
        alt: 'pluto logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://pluto.stretch.wtf',
          label: 'Pluto',
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
      copyright: 'Pluto Learn is a set of open-source developer documentation articles written by the community.<br>Contributions are welcomed',
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

module.exports = {
  title: 'Supernova Developer - Learn',
  tagline: 'Simple and easy to read documentation made by the SN team',
  url: 'https://learn.d.supernova.pablogracia.net',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'try-supernova', // Usually your GitHub org/user name.
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
        alt: 'supernova logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: '/platform',
          label: 'Platform',
          position: 'left',
        },
        {
          href: 'https://supernova.pablogracia.net',
          label: 'Supernova',
          position: 'left',
        },
        {
          href: 'https://github.com/try-supernova/developer-learn',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Supernova community',
          items: [
            {
              label: "Web OS Spec",
              href: "https://try-supernova.github.io/web-os-spec/"
            },
            {
              label: "Satellite",
              href: "https://github.com/try-supernova/satellite"
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/try-supernova/',
            },
          ],
        },
      ],
      copyright: 'Supernova Developer: Learn is a set of open-source developer documentation articles written by the community.<br>Contributions are welcomed',
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
            'https://github.com/try-supernova/developer-learn/edit/main/',
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

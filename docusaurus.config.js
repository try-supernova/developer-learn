module.exports = {
  title: 'Open99 Docs',
  tagline: 'Documentation',
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
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
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
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Blog',
              href: 'https://system41.ga/blog',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/system41/open99-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} System41. Built with Docusaurus.`,
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
            'https://github.com/system41/open99-docs/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        
      },
    ],
  ],
};

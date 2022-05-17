const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const lightCodeTheme = require('prism-react-renderer/themes/github')

const config = {
  title: 'My Website',
  tagline: 'The best site itw!',
  url: 'https://samrith-s.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'samrith-s',
  projectName: 'my-website',
  presets: [
    [
      'classic',
      {
        blog: false,
        docs: {
          id: 'react-native',
          path: './src/content',
          routeBasePath: '/',
          sidebarPath: require.resolve('../sidebars.js'),
          editUrl:
            'https://github.com/samrith-s/docusaurus-build-error-reproduction/tree/main/docs/',
        },
        theme: {
          customCss: [require.resolve('../src/css/custom.scss')],
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        docsRouteBasePath: '/',
        docsDir: './src/content',
        hashed: true,
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'My Website',
      items: [
        {
          href: 'https://github.com/samrith-s/docusaurus-build-error-reproduction',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
}

module.exports = config

import darkCodeTheme from 'prism-react-renderer/themes/dracula'
import lightCodeTheme from 'prism-react-renderer/themes/github'
import rehypeExternalLinks from 'rehype-external-links'

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
            'https://github.com/samrith-s/my-website/tree/main/docs/',
          rehypePlugins: [rehypeExternalLinks],
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
          href: 'https://github.com/samrith-s/my-website',
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
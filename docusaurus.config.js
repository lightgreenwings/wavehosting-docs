// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WaveHosting Wiki',
  tagline: 'Die Dokumentation von WaveHosting. Tutorials, Anleitungen und nützliche Ratschläge - gesammelt an einem zentralen und übersichtlichen Ort.',
  url: 'https://wavehosting.de',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lightgreenwings',
  projectName: 'wavehosting-wiki',
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'wiki',
          routeBasePath: '/wiki/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          path: 'blog',
          routeBasePath: '/blog/',
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'WaveHosting Wiki',
        logo: {
          alt: 'WaveHosting Wiki',
          src: 'img/brand/wave-social.png',
        },
        items: [],
      },
      footer: {
        style: 'light',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} WaveHosting.de`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

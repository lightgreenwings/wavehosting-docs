// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WaveHosting',
  tagline: 'WaveHosting zum lesen. Tutorials, Anleitungen und nützliche Ratschläge - gesammelt an einem zentralen und übersichtlichen Ort.',
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
        title: 'WaveHosting',
        logo: {
          alt: 'WaveHosting',
          src: 'img/brand/wave-social.png',
        },
        items: [
          {
            to: "https://wavehosting.de",
            label: "Startseite",
            position: "left",
          },
          {
            to: 'wiki/home/',
            label: 'Wiki',
            position: 'left',
          },
          {
            to: 'blog/',
            label: 'Blog',
            position: 'left',
          },

        ],
      },
      footer: {
        style: 'light',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://wavehosting.de/">wavehosting.de</a> - <a href="https://wavehosting.de/impressum">Impressum</a> - <a href="https://wavehosting.de/datenschutz">Datenschutz</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

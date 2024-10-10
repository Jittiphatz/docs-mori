import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'MoriDev Docs',
  tagline: 'Documention for MoriDev Discord Bot',
  favicon: 'img/mori.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MoriDev-2023', // Usually your GitHub org/user name.
  projectName: 'MoriDev Documention', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/screenshot.png',
    navbar: {
      title: 'MoriDev Docs',
      logo: {
        alt: 'MoriDev Docs',
        src: 'img/mori.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documention',
        },
        //{to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/MoriDev-2023',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.gg/Qqj2kCd6Qd',
          label: 'Support',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Link',
          items: [
            {
              label: 'Invite Mori Music',
              href: 'https://discord.com/oauth2/authorize?client_id=999660896416714783&permissions=8&scope=applications.commands%20bot',
            },
            {
              label: 'Invite Kuro Music',
              href: 'https://discord.com/oauth2/authorize?client_id=1009472327009964053&permissions=8&scope=applications.commands%20bot',
            },
            {
              label: 'Status',
              href: 'https://status.jittiphat.site',
            },
          ],
        },
        
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/Qqj2kCd6Qd',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/MoriDev-2023',
            },
            {
              label: 'Maki Service Shop',
              href: 'https://maki-service.xyz',
            },
          ],
        },
      ],
      copyright: `Copyright © 2023 - ${new Date().getFullYear()} Mori Dev`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

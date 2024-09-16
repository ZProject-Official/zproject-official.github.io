import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'zDocumentation',
  tagline: 'Transformez vos idées en réalité.',
  favicon: 'img/favicon.ico',

  url: 'http://localhost:3000',
  baseUrl: '/',

  organizationName: 'ZProject-Official', 
  projectName: 'zUI', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: ['./src/css/cards.css','./src/css/footer.css', "./src/css/theme.css", "./src/css/header.css", "./src/css/navbar.css"],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: "Acceuil",
      logo: {
        alt: 'Logo de zProject',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Documentation',
        },
        {
          type: "search",
          position: "right"
        },
        {
          href: 'https://discord.gg/zproject',
          html: '<div class="navbar__discord" data-label="Discord"><svg width="1024" class="icon" height="793" viewBox="0 0 1024 793" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M867.425 66.3864C801.14 35.3731 730.265 12.834 656.166 0C647.066 16.4527 636.434 38.582 629.104 56.1858C550.336 44.34 472.292 44.34 394.972 56.1858C387.643 38.582 376.77 16.4527 367.589 0C293.41 12.834 222.454 35.456 156.168 66.5506C22.4701 268.586 -13.7733 465.603 4.34844 659.823C93.0241 726.044 178.961 766.271 263.449 792.594C284.309 763.884 302.913 733.365 318.941 701.201C288.416 689.602 259.18 675.289 231.555 658.672C238.884 653.242 246.053 647.566 252.978 641.725C421.47 720.533 604.54 720.533 771.018 641.725C778.025 647.566 785.193 653.242 792.441 658.672C764.735 675.37 735.419 689.684 704.894 701.284C720.922 733.365 739.446 763.967 760.386 792.676C844.955 766.352 930.972 726.126 1019.65 659.823C1040.91 434.673 983.324 239.465 867.425 66.3864ZM341.896 540.38C291.316 540.38 249.837 493.161 249.837 435.66C249.837 378.159 290.43 330.858 341.896 330.858C393.362 330.858 434.84 378.076 433.954 435.66C434.034 493.161 393.362 540.38 341.896 540.38ZM682.101 540.38C631.522 540.38 590.042 493.161 590.042 435.66C590.042 378.159 630.634 330.858 682.101 330.858C733.566 330.858 775.045 378.076 774.16 435.66C774.16 493.161 733.566 540.38 682.101 540.38Z" fill="white"/> </svg></div>',
          position: 'right',
        },
        {
          href: 'https://github.com/ZProject-Official',
          html: '<div class="navbar__github" data-label="GitHub"><svg width="1024" class="icon" height="999" viewBox="0 0 1024 999" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M512 0C229.12 0 0 229.12 0 512C0 738.56 146.56 929.92 350.08 997.76C375.68 1002.24 385.28 986.88 385.28 973.44C385.28 961.28 384.64 920.96 384.64 878.08C256 901.76 222.72 846.72 212.48 817.92C206.72 803.2 181.76 757.76 160 745.6C142.08 736 116.48 712.32 159.36 711.68C199.68 711.04 228.48 748.8 238.08 764.16C284.16 841.6 357.76 819.84 387.2 806.4C391.68 773.12 405.12 750.72 419.84 737.92C305.92 725.12 186.88 680.96 186.88 485.12C186.88 429.44 206.72 383.36 239.36 347.52C234.24 334.72 216.32 282.24 244.48 211.84C244.48 211.84 287.36 198.4 385.28 264.32C426.24 252.8 469.76 247.04 513.28 247.04C556.8 247.04 600.32 252.8 641.28 264.32C739.2 197.76 782.08 211.84 782.08 211.84C810.24 282.24 792.32 334.72 787.2 347.52C819.84 383.36 839.68 428.8 839.68 485.12C839.68 681.6 720 725.12 606.08 737.92C624.64 753.92 640.64 784.64 640.64 832.64C640.64 901.12 640 956.16 640 973.44C640 986.88 649.6 1002.88 675.2 997.76C877.44 929.92 1024 737.92 1024 512C1024 229.12 794.88 0 512 0Z" fill="white"/></svg></div>',
          position: 'right',
        },
        
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documents',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Communauté',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/ZProject-Official',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/zproject',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'zUI',
              href: 'https://github.com/ZProject-Official/zUI',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} zProject - All rights reserved.`,
    },
    algolia: {
      apiKey: '9d780b838c85fb96b0a3b7ad71142277', 
      indexName: 'zDocumentation',
      appId: '86AC4GM0FR', 
      contextualSearch: true, 
      searchParameters: {
  
      }, 
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "lua"]
    },
    colorMode: {
      disableSwitch: true,
      defaultMode: 'dark',
    }
  } satisfies Preset.ThemeConfig,
};

export default config;

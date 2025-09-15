// @ts-check
// Docusaurus configuration file for NIKL-Core documentation

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'LSMTP',
    tagline: 'Lightweight and fast: receive mail over SMTP and deliver it directly into your AMQP workflow',
    favicon: 'img/favicon.ico',
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },
    url: 'https://lsmtp.nekonik.org',
    baseUrl: '/',
    organizationName: 'Neko-Nik-Org', // Usually your GitHub org/user name.
    projectName: 'LSMTP', // Usually your repo name.

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
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    editUrl: 'https://github.com/Neko-Nik-Org/LSMTP-Docs/blob/main/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            // Custom meta tags added to the <head> of every page
            metadata: [
                { name: 'algolia-site-verification', content: '142F5BBB378D5988' },
            ],
            navbar: {
                title: 'LSMTP',
                logo: {
                    alt: 'LSMTP - Cat faced email logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Docs',
                    },
                    {
                        href: 'https://github.com/Neko-Nik/LSMTP',
                        label: 'GitHub',
                        position: 'right',
                    },
                    {
                        href: 'https://doi.org/10.31224/4377',
                        label: 'Paper',
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
                                label: 'Documentation',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'GitHub Organization',
                                href: 'https://github.com/Neko-Nik-Org',
                            },
                            {
                                label: 'Neko Nik Forums',
                                href: 'https://forums.nekonik.com',
                            },
                            {
                                label: 'Status Page',
                                href: 'https://status.nekonik.com',
                            },
                            {
                                label: 'LinkedIn',
                                href: 'https://www.linkedin.com/in/neko-nik',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Organization Website',
                                href: 'https://NekoNik.org',
                            },
                            {
                                label: 'Author Website',
                                href: 'https://www.nekonik.com',
                            },
                            {
                                label: 'ORCID',
                                href: 'https://orcid.org/0009-0008-3435-5674',
                            },
                            {
                                label: 'GitHub Profile',
                                href: 'https://github.com/Neko-Nik-Org',
                            },
                        ],
                    },
                ],
                copyright: `© 2025 Neko Nik. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
            algolia: {
                // The application ID provided by Algolia
                appId: 'Q82BZ70G29',

                // Public API key: it is safe to commit it
                apiKey: 'e785bd3c391cd36de768a2d2eeca0cf2',

                indexName: 'LSMTP Documentation Website',

                // Optional: see doc section below
                contextualSearch: true,

                // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
                externalUrlRegex: 'nekonik\\.com|nekonik\\.org',

                // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
                // replaceSearchResultPathname: {
                //     from: '/docs/', // or as RegExp: /\/docs\//
                //     to: '/',
                // },

                // Optional: Algolia search parameters
                searchParameters: {},

                // Optional: path for search page that enabled by default (`false` to disable it)
                searchPagePath: 'search',

                // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
                insights: false,

                //... other Algolia params
            },
        }),
};

export default config;

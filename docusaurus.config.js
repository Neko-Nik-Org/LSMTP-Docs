// @ts-check
// Docusaurus configuration file for NIKL-Core documentation

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'LSMTP',
    tagline: 'Neko\'s Lightweight SMTP',
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
                    editUrl: 'https://github.com/Neko-Nik-Org/LSMTP-Docs/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    editUrl: 'https://github.com/Neko-Nik-Org/LSMTP-Docs/tree/main/packages/create-docusaurus/templates/shared/',
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
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
            navbar: {
                title: 'My Site',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Tutorial',
                    },
                    {
                        to: '/blog',
                        label: 'Blog',
                        position: 'left'
                    },
                    {
                        href: 'https://github.com/Neko-Nik-Org/LSMTP-Docs',
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
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
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
        }),
};

export default config;

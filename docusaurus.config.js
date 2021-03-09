module.exports = {
    title: 'Asena',
    tagline: 'Yeni nesil anket ve çekiliş botu.',
    url: 'https://wiki.asena.xyz',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.svg',
    organizationName: 'asena-team', // Usually your GitHub org/user name.
    projectName: 'asena-wiki', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Asena',
            logo: {
                alt: 'Asena Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    to: '/docs/commands/',
                    label: 'Komutlar',
                    position: 'left',
                },
                {
                    to: '/docs/release-notes/',
                    label: 'Güncelleme Notları',
                    position: 'left',
                },
                {
                    href: 'https://github.com/anilmisirlioglu/Asena',
                    label: 'GitHub',
                    position: 'right',
                }
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} Asena. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    editUrl: 'https://github.com/asena-team/asena-wiki/edit/master/',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    routeBasePath: "/docs/commands",
                    sidebarPath: require.resolve('./sidebars.js')
                },
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     editUrl:
                //         'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                // },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};

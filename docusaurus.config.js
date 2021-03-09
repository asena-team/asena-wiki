module.exports = {
    title: 'Asena Docs',
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
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                {
                    to: 'blog',
                    label: 'Blog',
                    position: 'left'
                },
                {
                    href: 'https://github.com/anilmisirlioglu/Asena',
                    label: 'GitHub | Asena',
                    position: 'right',
                }
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
                            to: 'docs/',
                        },
                        {
                            label: 'Second Doc',
                            to: 'docs/doc2/',
                        },
                    ],
                },
                {
                    title: 'Bağlantılar',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://dc.asena.xyz',
                        },
                        {
                            label: 'Botu Davet Et',
                            href: 'https://invite.asena.xyz',
                        },
                        {
                            label: 'YouTube',
                            href: 'https://www.youtube.com/channel/UCB_bh_HEJG-jp5b8RCRy9XA',
                        },
                    ],
                },
                {
                    title: 'Daha Fazla',
                    items: [
                        {
                            label: 'Hata Bildirin',
                            href: 'https://issue.asena.xyz'
                        },
                        // {
                        //     label: 'Blog',
                        //     to: 'blog'
                        // },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Asena. Built with Docusaurus.`,
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
                        'https://github.com/facebook/docusaurus/edit/master/website/',
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

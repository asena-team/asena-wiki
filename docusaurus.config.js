module.exports = {
    title: 'Asena',
    tagline: 'Yeni nesil anket ve çekiliş botu.',
    url: 'https://wiki.asena.xyz',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/logo.png',
    organizationName: 'asena-team', // Usually your GitHub org/user name.
    projectName: 'asena-wiki', // Usually your repo name.
    themeConfig: {
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: false
        },
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
                    to: '/docs/releases/',
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
                    showLastUpdateAuthor: false,
                    showLastUpdateTime: false,
                    path: 'docs/commands',
                    routeBasePath: '/docs/commands',
                    sidebarPath: require.resolve('./docs/commands/sidebars.js'),
                    editUrl: ({locale, version, versionDocsDirPath, docPath, permalink}) => {
                        return `https://github.com/asena-team/asena-wiki/edit/master/docs/commands/${docPath}`
                    }
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
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'releases',
                path: 'docs/releases',
                routeBasePath: '/docs/releases',
                sidebarPath: require.resolve('./docs/releases/sidebars.js'),
                editUrl: ({locale, version, versionDocsDirPath, docPath, permalink}) => {
                    return `https://github.com/asena-team/asena-wiki/edit/master/docs/releases/${docPath}`
                }
            }
        ]
    ]
}

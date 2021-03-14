module.exports = {
    title: 'Asena',
    tagline: 'Yeni nesil hızlı ve güvenilir çekiliş ve anket botu.',
    url: 'https://wiki.asena.xyz',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/logo.png',
    organizationName: 'asena-team',
    projectName: 'asena-wiki',
    i18n: {
        defaultLocale: 'tr',
        locales: ['tr'],
        localeConfigs: {
            tr: {
                label: 'Türkçe'
            }
        }
    },
    themeConfig: {
        algolia: {
            apiKey: '25723dbc14de1a0bbeeaac35acfefabf',
            indexName: 'asena'
        },
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: false
        },
        navbar: {
            title: 'Asena',
            logo: {
                alt: 'Asena Logo',
                src: 'img/logo.png'
            },
            items: [
                {
                    to: '/docs/commands/',
                    label: 'Komutlar',
                    position: 'left'
                },
                {
                    to: '/docs/releases/',
                    label: 'Güncelleme Notları',
                    position: 'left'
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
                {
                    href: 'https://github.com/anilmisirlioglu/Asena',
                    label: 'GitHub',
                    position: 'right'
                }
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} Asena.`,
            links: [
                {
                    title: 'Dökümanlar',
                    items: [
                        {
                            label: 'Komut Yardımı',
                            href:  '/docs/commands'
                        },
                        {
                            label: 'Güncelleme Notları',
                            to: '/docs/releases'
                        }
                    ]
                },
                {
                    title: 'Topluluk',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://dc.asena.xyz'
                        },
                        {
                            label: 'YouTube',
                            href: 'https://www.youtube.com/channel/UCB_bh_HEJG-jp5b8RCRy9XA'
                        }
                    ]
                },
                {
                    title: 'Daha Fazla',
                    items: [
                        {
                            label: 'Davet',
                            href: 'https://invite.asena.xyz'
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/anilmisirlioglu/Asena'
                        }
                    ]
                }
            ]
        }
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
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
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

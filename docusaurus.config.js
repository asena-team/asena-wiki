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
            apiKey: 'b4609533230e8e0d30cbcc4a8e4bb786',
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
                    to: '/docs/general/',
                    label: 'Genel',
                    position: 'left'
                },
                {
                    to: '/docs/releases/',
                    label: 'Güncelleme Notları',
                    position: 'left'
                },
                {
                    href: 'https://github.com/anilmisirlioglu/Asena',
                    label: 'GitHub',
                    position: 'right'
                },
                {
                    type: 'localeDropdown',
                    position: 'right'
                }
            ]
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
                            href: '/docs/commands'
                        },
                        {
                            label: 'Genel Yardım',
                            href: '/docs/general'
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
                            label: 'Oy Ver',
                            href: 'https://top.gg/bot/716259870910840832/vote'
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
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'general',
                path: 'docs/general',
                routeBasePath: '/docs/general',
                sidebarPath: require.resolve('./docs/general/sidebars.js'),
                editUrl: ({locale, version, versionDocsDirPath, docPath, permalink}) => {
                    return `https://github.com/asena-team/asena-wiki/edit/master/docs/general/${docPath}`
                }
            }
        ]
    ]
}

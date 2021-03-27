module.exports = {
    docs: [
        'overview',
        {
            type: 'category',
            label: 'Çekiliş Komutları',
            collapsed: false,
            items: [
                'giveaway/create',
                'giveaway/reroll',
                'giveaway/fix',
                'giveaway/cancel',
                'giveaway/end',
                'giveaway/raffles',
                'giveaway/setup',
                'giveaway/soundaway'
            ]
        },
        {
            type: 'category',
            label: 'Anket Komutları',
            collapsed: false,
            items: [
                'survey/question',
                'survey/survey'
            ]
        },
        {
            type: 'category',
            label: 'Kişiselleştirme Komutları',
            collapsed: false,
            items: [
                'server/locale',
                'server/scperm',
                'server/setprefix'
            ]
        },
        {
            type: 'category',
            label: 'Bot Komutları',
            collapsed: false,
            items: [
                'bot/ping',
                'bot/botinfo',
                'bot/help',
                'bot/invite'
            ]
        }
    ]
}

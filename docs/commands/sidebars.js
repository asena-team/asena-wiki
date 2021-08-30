module.exports = {
    docs: [
        'overview',
        {
            type: 'category',
            label: 'Çekiliş Komutları',
            collapsed: false,
            items: [
                'giveaway/create',
                'giveaway/createp',
                'giveaway/reroll',
                'giveaway/fix',
                'giveaway/cancel',
                'giveaway/end',
                'giveaway/edit',
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
            label: 'Sunucu Komutları',
            collapsed: false,
            items: [
                'server/locale',
                'server/scperm',
                'server/setprefix',
                'server/premium'
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

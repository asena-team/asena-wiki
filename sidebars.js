module.exports = {
  docs: [
    'commands/overview',
    {
      type: 'category',
      label: 'Bot Komutları',
      collapsed: false,
      items: [
        'commands/bot/ping'
      ]
    },
    {
      type: 'category',
      label: 'Kişiselleştirme Komutları',
      collapsed: false,
      items: [
        'commands/server/locale'
      ]
    },
    {
      type: 'category',
      label: 'Çekiliş Komutları',
      collapsed: false,
      items: [
        'commands/survey/question'
      ]
    },
    {
      type: 'category',
      label: 'Anket Komutları',
      collapsed: true,
      items: [
        'commands/giveaway/create'
      ]
    }
  ]
}

module.exports = {
  docs: [
    'commands/overview',
    {
      type: 'category',
      label: 'Bot Komutları',
      collapsed: true,
      items: [
        'commands/ping',
        'commands/botinfo'
      ]
    },
    {
      type: 'category',
      label: 'Sunucu Kişiselleştirme Komutları',
      collapsed: true,
      items: []
    },
    {
      type: 'category',
      label: 'Çekiliş Komutları',
      collapsed: true,
      items: []
    },
    {
      type: 'category',
      label: 'Anket Komutları',
      collapsed: true,
      items: []
    }
  ]
}

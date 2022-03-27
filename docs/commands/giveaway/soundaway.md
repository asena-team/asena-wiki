---
id: soundaway
title: soundaway Komutu
sidebar_label: soundaway
slug: /soundaway
---
Ses kanalında veya kanallarında bulunan kullanıcılar için yeni bir çekiliş oluşturur.

---

## ❓ Kullanımı {#usage}

/soundaway **winners:** kazanan sayısı **title:** ödül başlığı **user:** ses kanalında bulunan kullanıcı **channel:** ses kanalı

- **winners:** Çekilişi kazanacak kişi sayısı. *[Zorunlu]*
- <user | channel | boş>
  * **user**: Etiketlediğiniz kişi eğer bir ses kanalındaysa o ses kanalındaki kullanıcılardan çeker *[İsteğe Bağlı]*
  * **channel:** Çekiliş yapmak istediğiniz ses kanalı. Eğer user girilmiş ise bu parametre görmezden gelinir *[İsteğe Bağlı]*
  * **boş:** Eğer bu kısmı boş burakırsanız çekilişi sunucunuzdaki tüm sesli kanallardan çeker *[İsteğe Bağlı]*
- **title:** Çekilişde verilecek ödül. *[İsteğe Bağlı]*

:::tip İPUCU
**Sesli Mesaj ID’sini Nerden Bulurum?** Kullanıcıların, bireysel mesajların ve tüm Discord sunucuların çeşitli
noktalarda kullanılabilecek çok basamaklı ID numaraları var. Discord’u bu ID numaraların hiçbirini bilmeden
kullanabilirsin ama ilerde bir ihtimal bunlardan birini öğrenmen gereken bir mesele
olur. [Bunlara ulaşmanın adımları burada.](https://support.discord.com/hc/tr/articles/206346498-Kullan%C4%B1c%C4%B1-Sunucu-Mesaj-ID-sini-Nerden-Bulurum-)
:::

### ✏️ Örnek {#examples}

```markdown
/soundaway winners: 1
/soundaway winners: 2 title: Voice Channels Giveaway Title
/soundaway winners: 3 user: @User
/soundaway winners: 4 channel: #Channel
/soundaway winners: 5 title: Asena Giveaway channel: #Channel
```
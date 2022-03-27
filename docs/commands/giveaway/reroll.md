---
id: reroll
title: reroll Komutu
sidebar_label: reroll
slug: /reroll
---
Bitmiş bir çekilişin kazananlarını tekrar çeker.

---

## ❓ Kullanımı {#usage}

/reroll **winners:** Tekrar çekilecek kişi sayısı **message:** message ID

- **winners:** Çekiliş katılımcıları arasında kaç kişiden tekrar çekilmesi gerektiğini belirtirsiniz. 
  Eğer bu parametreyi belirtmezseniz tüm katılımcılar arasından çekecektir. *[İsteğe Bağlı]*

- **message:** Tekrar çekilmek istenilen çekilişi belirlemek için kullanılır. Birden fazla çekilişiniz varsa ve mesaj-id 
  girmemişseniz en son oluşturduğunuz çekilişi tekrar çeker. *[İsteğe Bağlı]*

:::note İPUCU
**Sesli Mesaj ID’sini Nerden Bulurum?** Kullanıcıların, bireysel mesajların ve tüm Discord sunucuların çeşitli
noktalarda kullanılabilecek çok basamaklı ID numaraları var. Discord’u bu ID numaraların hiçbirini bilmeden
kullanabilirsin ama ilerde bir ihtimal bunlardan birini öğrenmen gereken bir mesele
olur. [Bunlara ulaşmanın adımları burada.](https://support.discord.com/hc/tr/articles/206346498-Kullan%C4%B1c%C4%B1-Sunucu-Mesaj-ID-sini-Nerden-Bulurum-)
:::

### ✏️ Örnek {#examples}

```markdown
/reroll
/reroll winners: 1
/reroll message: 111111111111111111
/reroll message: 111111111111111111 winners: 3
```
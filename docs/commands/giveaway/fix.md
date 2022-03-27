---
id: fix
title: fix Komutu
sidebar_label: fix
slug: /fix
---
Bitmesi gerekirken bitmeyen çekilişleri bitirir.

---

## ❓ Kullanımı {#usage}

/fix **message:** message ID

- **message:** Düzeltmek istenilen çekiliş için kullanılır. Birden fazla çekilişiniz varsa ve mesaj-id
  girmemişseniz en son oluşturduğunuz çekilişi erken bitirir. *[İsteğe Bağlı]*

:::note İPUCU
**Sesli Mesaj ID’sini Nerden Bulurum?** Kullanıcıların, bireysel mesajların ve tüm Discord sunucuların çeşitli
noktalarda kullanılabilecek çok basamaklı ID numaraları var. Discord’u bu ID numaraların hiçbirini bilmeden
kullanabilirsin ama ilerde bir ihtimal bunlardan birini öğrenmen gereken bir mesele
olur. [Bunlara ulaşmanın adımları burada.](https://support.discord.com/hc/tr/articles/206346498-Kullan%C4%B1c%C4%B1-Sunucu-Mesaj-ID-sini-Nerden-Bulurum-)
:::

### ✏️ Örnek {#examples}

```markdown
/fix
/fix message: 111111111111111111
```
---
id: edit
title: edit Komutu
sidebar_label: edit
slug: /edit
---
Oluşturulan çekilişi devam ederken düzenler.

**DİKKAT:** Bu komut sadece **Premium** kullanıcıları içindir.

---

## ❓ Kullanımı {#usage}

`/edit [option (color,prize,time,winners) |operator (+ , -) | value | giveaway (İsteğe Bağlı) ] `

### 💢 Bazı Önemli Hususlar {#importants}

* Eğer spesifik bir çekilişi editlemek istiyorsanız `--raffle` parametresini ekleyip [çekilişin mesaj ID'sini](https://support.discord.com/hc/tr/articles/206346498-Kullan%C4%B1c%C4%B1-Sunucu-Mesaj-ID-sini-Nerden-Bulurum-) belirtebilirsiniz.
* Eğer ödül olarak verilecek rollere yeni rol eklemek istiyorsanız başına `+`, rol silmek istiyorsanız `-` yazmanız gerekir.
* Şu anlık çekilişe katılmak için gereken roller ve bulunması gereken roller çekiliş sürerken düzenlenemez.

:::note NOT
Bunların dışında çekiliş oluşturmadaki tüm kural ve kısıtlamalar burada da geçerlidir. [Dikkat edilecek hususları bilmiyorsanız incelemek için buraya göz atabilirsiniz.](/docs/commands/createp#importants)
:::

### ✏️ Örnek {#examples}

```markdown
> /edit color FFFFFF
> /edit color D7B5EB --raffle 814668595170639873
> /edit prize Lorem Ipsum
> /edit rewardRoles + @Role,RoleID
```

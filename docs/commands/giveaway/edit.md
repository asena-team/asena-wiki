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

/edit **option:** düzenlenecek ayar **operator:** + | - **value:** düzenlenecek ayarın yeni değeri **giveaway:** çekiliş ID'si

### 💢 Bazı Önemli Hususlar {#importants}

* Eğer spesifik bir çekilişi editlemek istiyorsanız `giveaway` parametresini ekleyip [çekilişin mesaj ID'sini](https://support.discord.com/hc/tr/articles/206346498-Kullan%C4%B1c%C4%B1-Sunucu-Mesaj-ID-sini-Nerden-Bulurum-) belirtebilirsiniz.
* Eğer ödül olarak verilecek rollere yeni rol eklemek istiyorsanız başına `+`, rol silmek istiyorsanız `-` yazmanız gerekir.
* Şu anlık çekilişe katılmak için gereken sunucular ve bulunması gereken roller çekiliş sürerken düzenlenemez.

:::note NOT
Bunların dışında çekiliş oluşturmadaki tüm kural ve kısıtlamalar burada da geçerlidir. [Dikkat edilecek hususları bilmiyorsanız incelemek için buraya göz atabilirsiniz.](/docs/commands/create#importants)
:::

### ✏️ Örnek {#examples}

```markdown
/edit option: color operator: + value: FFFFFF
/edit option: color operator: + value: D7B5EB giveaway: 814668595170639873
/edit option: prize operator: + value: Lorem Ipsum
/edit option: reward-roles operator: + value: @Role,RoleID
/edit option: time operator: + value: 1h5m
/edit option: time operator: - value: 10m
/edit option: winners operator: + value: 3
```

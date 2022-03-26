---
id: question
title: question Komutu
sidebar_label: question
slug: /question
---
Sunucu içerisinde şıklı yeni bir soru yaratır.

---

## ❓ Kullanımı {#usage}

`/question {soru} ...[şıklar]`

- **soru:** Sormak istediğiniz soru. *[Zorunlu]*
- **şıklar:** Sorunun şıkları. *[Zorunlu]*

:::caution UYARI
Bu komutu kullanırken birden fazla şık eklemek isterseniz şıklar arasına ( | ) yazmak zorundasınız. 
:::

---

### ✏ Örnek {#examples}
```markdown 
<<<<<<< HEAD
> **/question [soru - question]**(Merhaba Kullanıcı!) **[şıklar - answers]**(Çekiliş|Asena|Bot)
> **/question [soru - question]**(Survey Örnek) **[şıklar - answers]**(Survey|Komut|Asena)
>❓[] parametreleri komutu kullanırken zorunlu olarak doldurulması gereken yerlerdir. () parametreleri [] ile belirtilen zorunlu yerlere yazabileceğiniz örnek kelimelerdir.
=======
> /question [soru - question](Merhaba Kullanıcı!) [şıklar - answers](Çekiliş|Asena|Bot)
> /question [soru - question](Survey Örnek) [şıklar - answers](Survey|Komut|Asena)
>❓[] parametreleri komutu kullanırken zorunlu olarak doldurulması gereken yerlerdir. () parametreleri ile belirtilenler ise [] ile belirtilen zorunlu yerlere yazabileceğiniz örnek cümlelerdir.
>>>>>>> origin/master

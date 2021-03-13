---
id: create
title: create Komutu
sidebar_label: create
slug: /create
---
Yeni bir çekiliş oluşturur.

---

## Takma Adları

- createraffle
- cekilisbaslat
- çekilişoluştur

---

## Kullanımı

`!acreate [kazanan sayısı] [süre] [ödül]`

- **kazanan sayısı:** Çekilişi kazanacak kişi sayısı. *[Zorunlu]*
- **süre:** Çekilişin süresi. *[Zorunlu]*
- **ödül:** Çekilişde verilecek ödül. Bu parametre aynı zamanda başlık olarak kullanılır. *[Zorunlu]*

:::important BİLGİLENDİRME
Çekiliş oluştururken unutmamanız gereken bazı sınırlamalar vardır. 

* Çekiliş süresi en az 1 dakika, en fazla 2 ay olabilir. **(Bu süreyi daha fazla uzatmak için çalışıyoruz.)**
* Çekiliş kazanan sayısı en az 1 kişi, en fazla 20 kişi olabilir.
* Ödül başlığı maksimum 255 karakter uzunluğunda olabilir. **(Bu Discord tarafından zorunlu tutulan bir kısıtlamadır.)**
:::
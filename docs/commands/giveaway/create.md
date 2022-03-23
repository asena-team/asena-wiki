---
id: create
title: create Komutu
sidebar_label: create
slug: /create
---
Yeni bir çekiliş oluşturur.

---

## ❓ Kullanımı {#usage}

`/create [kazanan sayısı] [süre] [ödül] / İsteğe Bağlı [color] [servers] [reward-roles] [allowed-roles]`

- **kazanan sayısı:** Çekilişi kazanacak kişi sayısı. *[Zorunlu]*
- **süre:** Çekilişin süresi. *[Zorunlu]*
- **ödül:** Çekilişde verilecek ödül. Bu parametre aynı zamanda başlık olarak kullanılır. *[Zorunlu]*
- **color** Çekiliş mesajının embed rengi. *[İsteğe Bağlı]*
- **servers** Çekilişe katılabilmek için içerisinde bulunulması gereken sunucular. *[İsteğe Bağlı]*
- **reward-roles** Çekiliş sonunda ödül olarak verilecek roller. *[İsteğe Bağlı]*
- **allowed-roles** Çekilişe katılabilemek için sahip olması gereken roller. *[İsteğe Bağlı]*

:::important BİLGİLENDİRME
Çekiliş oluştururken unutmamanız gereken bazı sınırlamalar vardır. 

* Çekiliş süresi en az 1 dakika, en fazla 2 ay olabilir. **(Bu süreyi daha fazla uzatmak için çalışıyoruz.)**
* Çekiliş kazanan sayısı en az 1 kişi, en fazla 20 kişi olabilir.
* Ödül başlığı maksimum 255 karakter uzunluğunda olabilir. **(Bu Discord tarafından zorunlu tutulan bir kısıtlamadır.)**
* Aynı anda maksimum 5 çekiliş oluşturabilirsiniz. *Premium ile 8 çekilişe kadar oluşturabilirsiniz.*
* Eğer çekilişi oluşturduğunuz/oluşturmaya çalıştığınız kanal Discord'un _'Duyuru'_ tipindeki kanal ise çekiliş oluşmaz,
  daha önceden oluşturulup sonradan kanal tipi _'Duyuru'_ olarak değiştirilmişse çekiliş açıklanmaz. 
  [Daha fazla bilgi için buraya göz atabilirsiniz.](/docs/general/faq#can-asena-giveaway-announcement-channel)
:::

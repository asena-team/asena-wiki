---
id: survey
title: survey Komutu
sidebar_label: survey
slug: /survey
---
Sunucu içerisinde iki seçenekli *(evet/hayır)* oylama anketi oluşturur.

---

## ❓ Kullanımı {#usage}

`/survey [oylama metni] / İsteğe Bağlı <süre> `

- **oylama metni:** Anketin metni. Aynı zamanda başlık olarak kullanılacaktır. *[Zorunlu]
- **süre:** Anketin süresi. *[İsteğe Bağlı]*


Eğer süre parametresi girilmez ise anket süresi sonsuz olur.

:::important BİLGİLENDİRME
Anket oluştururken unutmamanız gereken bazı sınırlamalar vardır. 

* Anketde eğer süre belirtilmişse, süre en az 1 dakika, en fazla 15 gün olabilir. **(Bu süreyi daha fazla uzatmak için çalışıyoruz.)**
* Oylama metni maksimum 1024 karakter uzunluğunda olabilir. **(Bu Discord tarafından zorunlu tutulan bir kısıtlamadır.)**
:::

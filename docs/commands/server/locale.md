---
id: locale
title: locale Komutu
sidebar_label: locale
slug: /locale
---
Botun sunucu içerisindeki iletişim dili ayarlarını içerir.

:::important BİLGİLENDİRME 
Şu an da **Türkçe** _(tr)_ ve **İngilizce** _(en)_ olmak üzere 2 dili destekliyoruz. 
Eğer botu veya dökümanları başka dillere çevirmek istiyorsanız, [buradaki](https://docs.google.com/document/d/1D2W7JEw1cXXZj-557viPCH-X7q2ymUl92XYYekyQI0s/edit?usp=sharing)
bağlantıyı takip ederek projeye katkıda bulunabilirsiniz.
:::

---

## ❓ Kullanımı {#usage}

`/locale [list | set | reset] <args>`

- **Parametre 1:** Alt komutun adı. *[Zorunlu]*
- **args:** Alt komut eğer parametre alıyorsa, alacağı parametreler. *[İsteğe Bağlı]*

---

## Alt Komutları

### list

Bot içerisinde kullanabileceğiniz iletişim dillerini ve kodlarını listeler.

### set

Botun sunucu içerisindeki varsayılan iletişim dilini değiştirir.

**Örnek:** `/locale set en`

### reset

Botun sunucu içerisindeki iletişim dilini varsayılan olarak değiştirir.

:::note NOT
Botun ayarlı varsayılan dili **Türkçe** _(tr)_ 'dir.
:::

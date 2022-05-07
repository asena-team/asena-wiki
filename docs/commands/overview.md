---
id: overview
title: Genel Bakış
sidebar_label: Genel Bakış
slug: /
---
## Komut Ön eki {#prefix}

Asena eğik çizgi (slash) komutlarını kullanmaktadır. Bu nedenle komut ön eki (/)'dır ve değiştirilemez. 

---

## Parametreler {#parameters}

### Belirteçler {#markers}

`[]`: Köşeli parantezler, o parametrenin girilmesinin zorunlu olduğunu temsil eder.

`<>`: Büyüktür ve küçüktür ise o parametrenin girilmesinin zorunlu olmadığı, isteğe bağlı olarak girileceği anlamına gelir. Yani bu parametreleri girmemekte serbestsiniz.

`|`: Parametre belirteçlerinin içindeki dik çizgiler '**veya**' anlamına gelir. Yani içerisinde yazan veri tiplerden herhangi birini girebileceğiniz anlamına gelir.


### Örnek Çözümleme: {#resolve}

```md
/soundaway [kazanan sayısı] <@kullanıcı | ses-kanal-id | boş> <başlık>
             │                │                                 │
             │                │                                 └── Başlık parametresinin isteğe bağlı olarak girilebilir.
             │                └── Bu parametre kullanıcı, ses kanal'si veya boş bırakılabilir anlamına gelir. İsteğe bağlıdır.
             └── Kazanan sayısı girilmesi zorunlu parametredir.
```

---

## Yetki Seviyeleri {#authorization}

Asena'da her komutun belli bir yetki seviyesi vardır. Bunlar genelde ya herkese açıktır, yada `ADMINISTRATOR` yetki seviyesinde olurlar.
Kullanıcılarımızın komutları esnek yetki seviyelerinde kullanabilmeleri için çeşitli yöntemler vardır.

1- `permission` komutu. Bu komut ile diğer komutları sunucunuz içerisinde herkese açabilir veya kapatabilirsiniz. 
[`permission` komutu hakkında daha fazla bilgi için buraya tıklayın.](/docs/commands/permission)

2- `Asena` rolü. Komutu kullanmasını istediğiniz kişiye rengi, yetki seviyesi ve büyük - küçük harf fark etmeksizin `Asena` adında bir rol oluşturup 
verirseniz, rolü verdiğiniz kişi botun tüm komutlarını yetki seviyesine bakılmaksızın kullanabilir. Yani bu role sahip kişiler bot üzerinde **yönetici** 
yetkisine sahiptir diyebiliriz.

---

## Zaman Formatı {#time-format}

Çekilişlerin daha kolay ve esnek zaman diliminde kullanılması için Asena oldukça gelişmiş bir zaman formatı kullanır.

### Zaman Birimleri {#time-units}

Asena tarafından desteklenen 4 farklı zaman birimi vardır. Bunlar aşağıda listelenmiştir.

- `s` = Saniye
- `m` = Dakika
- `h` = Saat
- `d` = Gün

### Örnek Kullanımlar {#time-usages}

| Format  | Elde Edilen Süre |
| ------- | ---------------- |
| 1m      | 1 dakika         |
| 1m2h3m  | 2 saat, 4 dakika | 
| 1d1m5h  | 1 gün, 5 saat, 1 dakika |
| 10m5m1m | 16 dakika        |
| 1m1s6s  | 1 dakika, 7 saniye |

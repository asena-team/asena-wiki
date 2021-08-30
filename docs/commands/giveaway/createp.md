---
id: createp
title: createp Komutu
sidebar_label: createp
slug: /createp
---
Premium üyeleri için gelişmiş çekiliş oluşturur.

**DİKKAT:** Bu komut sadece **Premium** kullanıcıları içindir.

---

## 🏷️ Takma Adları {#alias}

- cekilisbaslatp
- createrafflep

---

## ❓ Kullanımı {#usage}

```bash
!acreatep 
    --numberOfWinners "kazanan sayısı" 
    --time "süre" 
    --prize "ödül"
    --color "renk"
    --servers "sunucular"
    --allowedRoles "roller"
    --rewardRoles "ödül olarak verilecek roller"
```

### ✨ Parametreler ve Anlamları {#parameters-and-meanings}

| Parametre | Açıklama | Zorunlu |
| --- | --- | --- |
| --numberOfWinners | Çekilişi kazanacak kişi sayısı. | ✔ |
| --time | Çekilişin süresi. | ✔ |
| --prize | Çekilişte verilecek ödül. Bu parametre aynı zamanda başlık olarak kullanılır. | ✔ |
| --color | Çekiliş embed'inin rengi. | ❌ |
| --servers | Çekilişe katılabilmek için içerisinde bulunması gereken sunucular. | ❌ |
| --allowedRoles | Çekilişe katılabilmek için sahip olması gereken roller. | ❌ |
| --rewardRoles | Çekiliş sonucunda ödül olarak verilecek roller. | ❌ |

### 💢 Bazı Önemli Hususlar {#importants}

* Premium kullanıcılar aynı anda maksimum 8 çekiliş oluşturabilir.
* Parametrelere birden fazla değer girilecek ise `,` ile ayrılmalıdır.
* Çekiliş süresi en az 1 dakika, en fazla 2 ay olabilir. **(Bu süreyi daha fazla uzatmak için çalışıyoruz.)**
* Çekiliş kazanan sayısı en az 1 kişi, en fazla 20 kişi olabilir.
* Ödül başlığı maksimum 255 karakter uzunluğunda olabilir. **(Bu Discord tarafından zorunlu tutulan bir kısıtlamadır.)**
* Çekiliş rengi hexadecimal renk kodu veya bir rengin ingilizce adı olmalıdır.
* Sunucular parametresine sunucunun aktif davet bağlantısı olmalıdır ve bot davet bağlantısı verilen sunucular içerisinde bulunmalıdır. Ayrıca maksimum 3 farklı sunucu belirtebilirsiniz.
* Rol parametreleri rolün etiketini, id'sini veya adını içermelidir, ödül olarak maksimum 8 katılma şartı olarak ise maksimum 10 rol belirtebilirsiniz.

### ✏️ Örnek {#examples}

```markdown
!acreatep
    --numberOfWinners 1
    --time 2m
    --prize "Test"
    --color GREEN
    --rewardRoles @Premium
    --allowedRoles Asena,@Reward
    --servers https://discord.gg/CRgXhfs
```

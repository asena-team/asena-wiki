---
id: giveaway
title: Çekiliş Sistemini Anlamak
sidebar_label: Çekiliş Sistemini Anlamak
slug: /giveaway
---
Çekilişlerinizin sürelerinin nasıl güncellediğini, kazananların nasıl belirlendiğini merak mı ediyorsunuz? O halde bu
makale tam size göre. 

## Çekiliş Süreleri Nasıl Güncellenir? {#how-to-update-giveaway-times}

---

Çekiliş sürelerinizin dinamik olarak en hızlı ve düzgün şekilde güncellenmesi için çok çalışıyoruz. Şu anda oluşturduğunuz
çekilişlerin süreleri kullanıcılar reaksiyon bıraktıkça ve son 10 saniye içine girildiği zaman güncellenir.

### Reaksiyon İle Güncellenme {#reaction-giveaway-time-update}

Diyelimki bir çekiliş oluşturdunuz ve çekilişinize aynı 20 kişi aynı anda katılım sağladı. Bu durumda ilk basan kişi baz
alınarak çekiliş süresi mesajda güncellenir. Daha sonraki güncelleme ise ilk basan kişiden 3 veya daha fazla saniye
sonra basan kişi baz alınarak güncellenir. Yani güncellemeler arasında en az 3 saniyelik bir bekleme süresi vardır.
Ayrıca çekilişte son 30 saniyeye girilmiş ise reaksiyon ile süre güncellenmesi devre dışı bırakılır ve bot kendisi
otomatki güncellemeye başlar.

### Otomatik Güncelleme {#automatic-giveaway-time-update}

Çekilişin bitmesine son 30 saniye kala bot otomatik olarak işi devralır ve çekiliş mesajında gözüken süreyi güncellemeye
başlar. Önce son 10 saniye kala mesajı günceller. Ardından son 3 saniyeye girildiğinde geri sayım yapmaya başlar ve son
katılımı duyurur. Bu süre de bittikten sonra çekilişiniz açıklanır. Tebrikler!

## Çekiliş Kazananları Nasıl Belirlenir? {#how-to-determine-giveaway-winners}

---

Çekiliş süresi bittikten sonra, çekilişe hareketli `🎉` emojisi bırakan insanların verisi Discord'dan çekilir. Daha
sonra katılım önceliğine bakılmaksızın katılımcılar karıştırılır. Daha sonra bir kaç sihirli matematik işlemi ile
aralarından rastgele kazanan veya kazananlar çekilir ve herkese açık olarak yayınlanır. Evet aslında o kadar da
büyüleyici bir olayı yok 😄

---
id: permissions
title: İzinleri Anlamak
sidebar_label: İzinleri Anlamak
slug: /permissions
---

Bu makale size Asena'nın izin sisteminin net bir görünümünü verecek ve sunucunuzda Asena'yı kurmanıza yardımcı
olacaktır.

## Hangi kullanıcılar hangi komutu kullanabilir? {#what-users-can-use-what-command}

Asena'nın yerleşik izin sistemi aşağıdaki gruplara ayrılabilir:

### Herhangi bir özel rolü veya izni olmayan normal kullanıcı {#normal-user-without-any-special-roles-or-permissions}

* Sunucu içerisinde devam eden çekilişleri görebilir.
* Yardım menüsünü isteyebilir ve izni olduğu kadarıyla görebilir.
* Bot bilgisi ve davet komutu gibi komutları kullanabilir.
* Çekilişlere, anketlere ve sorulara cevap verebilir/katılabilir.

### `Sunucuyu Yönetme` veya daha yüksek izne sahip kullanıcı {#user-with-manage-server-permission}
* Çekiliş, anket ve soru oluşturabilir.
* Çekilişi erken bitirebilir, tekrar çekebilir yada iptal edebilir.
* Botun aşağıda listelenen ayarlarlarını değiştirebilir.
    * Dil
    * Komutların yetki seviyeleri

## Tüm kullanıcıların herhangi bir komuta erişmesine nasıl izin verebilirim? {#how-can-i-allow-all-users-to-access-any-command}

Tam size göre bir komutumuz var. Komut izin değiştirme komutumuzu kullanarak komutları halka açabilir veya
kapatabilirsiniz. Komut izinlerini değiştirme komutunu nasıl kullanacağınızı öğrenmek için [buraya tıklayın.](/docs/commands/permission)

## Belirli bir kullanıcının tüm komutlara erişmesine nasıl izin verebilirim? {#how-can-i-allow-a-specific-user-to-access-all-commands}

Sunucunuzda rengi, izin seviyesi ve büyük küçük harfi fark etmeksizin `Asena` adında bir rol oluşturun ve oluşturduğunuz
rolü tüm komutlara erişmesini istediğiniz kişiye verin. Bu sayede rolü verdiğiniz kişi Asena üzerinde sınırsız yetkiye
sahip olacak ve tüm komutlara erişebilecektir.  

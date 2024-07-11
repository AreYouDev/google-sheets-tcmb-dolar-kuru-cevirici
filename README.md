# 💸 USD to TRY Dönüştürücü

Türkiye Cumhuriyet Merkez Bankası'ndan (TCMB) güncel USD'den TRY'ye döviz kurunu çeken ve verilen USD miktarını TRY'ye dönüştüren basit bir JavaScript fonksiyonunu içerir.

## 📋 Fonksiyon Açıklaması

`CONVERTUSDToTRY(amount)` fonksiyonu şu adımları gerçekleştirir:

1. **Döviz Kurunu Getir**: TCMB'nin today.xml dosyasına bir istek gönderir ve güncel döviz kurunu alır.
2. **XML'i Ayrıştır**: XML yanıtını ayrıştırarak USD'den TRY'ye döviz kurunu çıkarır.
3. **Miktarı Dönüştür**: Verilen USD miktarını çekilen döviz kurunu kullanarak TRY'ye dönüştürür.
4. **Sonucu Döndür**: Dönüştürülen TRY miktarını döndürür.

## 📈 Kullanım

Bu fonksiyonu kullanmak için:

1. Google Sheets'i açın.
2. Üst menüden **Uzantılar** > **Apps Script** seçeneğine tıklayın.
3. Açılan Apps Script editörüne aşağıdaki kodu yapıştırın:
    ```javascript
    function CONVERTUSDToTRY(amount) {
      var url = "https://www.tcmb.gov.tr/kurlar/today.xml";
      var response = UrlFetchApp.fetch(url);
      var xml = XmlService.parse(response.getContentText());
      var root = xml.getRootElement();
      var rate = root.getChild('Currency', root.getNamespace("")).getChildren('ForexBuying')[0].getText();

      var exchangeRate = parseFloat(rate.replace(',', '.'));
      var result = amount * exchangeRate;
      return result;
    }
    ```
4. Kodu kaydedip çalıştırın.
5. Tablonuza dönüp keyifle kullanın!

## 🔧 Gereksinimler

Bu fonksiyonu kullanmak için:

- Bir Google Apps Script projesine sahip olmalısınız.
- Harici web sitelerinden URL'leri getirmek için izne sahip olmalısınız.

## 📜 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🙏 Teşekkür

Döviz kuru verilerini sağladığı için Türkiye Cumhuriyet Merkez Bankası'na özel teşekkürler.

---

Bu fonksiyon, gerçek zamanlı döviz kurlarını kullanarak USD'yi TRY'ye dönüştürmeyi kolaylaştırır. İstediğiniz gibi kullanabilir ve değiştirebilirsiniz. Keyifli kodlamalar! 🚀

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

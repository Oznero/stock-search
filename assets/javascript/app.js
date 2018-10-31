// CHALLENGE:
// Modify the logic to add rows for two more comapnies of your choice.

// Sets up our queryURL to retrieve information for AAPL, FB, and TSLA stocks
const queryURL = 'https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,tsla&types=quote';

$.ajax({
  url: queryURL,
  method: 'GET'
}).then(function(response) {

  // 
  const tBody = $('tbody');

  // Create three new table rows
  const tRow1 = $('<tr>');
  const tRow2 = $('<tr>');
  const tRow3 = $('<tr>');

  // Create a new <td> for each copmany, with the appropriate data in each element
  const companyNameApple = $('<td>').text(response.AAPL.quote.companyName);
  const companySymbolApple = $('<td>').text(response.AAPL.quote.symbol);
  const latestPriceApple = $('<td>').text(response.AAPL.quote.latestPrice);

  const companyNameFacebook = $('<td>').text(response.FB.quote.companyName);
  const companySymbolFacebook = $('<td>').text(response.FB.quote.symbol);
  const latestPriceFacebook = $('<td>').text(response.FB.quote.latestPrice);

  const companyNameTesla = $('<td>').text(response.TSLA.quote.companyName);
  const companySymbolTesla = $('<td>').text(response.TSLA.quote.symbol);
  const latestPriceTesla = $('<td>').text(response.TSLA.quote.latestPrice);

  // Append the data to each row
  tRow1.append(companyNameApple, companySymbolApple, latestPriceApple);
  tRow2.append(companyNameFacebook, companySymbolFacebook, latestPriceFacebook);
  tRow3.append(companyNameTesla, companySymbolTesla, latestPriceTesla);

  // Append the rows to the table body
  tBody.append(tRow1, tRow2, tRow3);
});
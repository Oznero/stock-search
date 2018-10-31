const stocksList = [
    'GE',
    'NOW',
    'AAPL',
    'MSFT',
    'DIS',
    'OKTA',
    'SONO'
];

function renderStocks(stockName) {
    $('#stock-data').empty();
    const queryURL = `https://api.iextrading.com/1.0/stock/${stockName}/batch?types=quote,news,chart&range=1m&last=1`;
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response.quote.companyName);
        let text = $('#stock-data').text(response.quote.companyName);
        text.append(text);
        /*
        const divRow = $('<div class="row">');
        const companyName = $('<div class="col-lg-12').text(response.quote.companyName);
        divRow.append(companyName);
        */
    });
}


const renderButtons = function () {
    for (let i = 0; i < stocksList.length; i++) {
        $('#buttons').append(`<li><button class="btn btn-outline-info btn-lg btn-${i}">${stocksList[i]}</button></li>`);
        $(`.btn-${[i]}`).on('click', function () {
            renderStocks(stocksList[i]);
        });
    }
}
renderButtons();




/*
//const queryURL = 'https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,tsla&types=quote';

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
*/
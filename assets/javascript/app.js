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
    const queryURL = `https://api.iextrading.com/1.0/stock/${stockName}/batch?types=logo,quote,news,chart&range=1m&last=1`;
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        $('#company-name').text(response.quote.companyName);
        $('#logo').attr('src', response.logo.url);
        $('#latest-price').text(response.quote.latestPrice);

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
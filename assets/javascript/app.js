const stocksList = [
    'GE',
    'NOW',
    'AAPL',
    'MSFT',
    'DIS',
    'OKTA',
    'SONO',
    'GOOG'
];

function renderStocks(stockName) {
    const queryURL = `https://api.iextrading.com/1.0/stock/${stockName}/batch?types=logo,quote,news,chart&last=10`;
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {

        $('#company-name').text(response.quote.companyName);
        $('#logo').attr('src', response.logo.url);
        $('#latest-price').text(`$${response.quote.latestPrice}`);
        $('#company-news').empty();

        for (i = 0; i < response.news.length; i++) {
            $('#company-news').append(`
            <br>
            <div class="card">
                <div class="card-header">${response.news[i].headline}</div>
                    <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>${response.news[i].summary}</p>
                            </blockquote>
                    </div>
                    <div class="card-footer">
                        <a href="${response.news[i].url}" target="_blank" class="card-link">Read more</a>
                    </div>
            </div>
            `);
        }

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
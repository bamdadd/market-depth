var express = require('express');
var app = express();
var BTCE = require('btce');
var btce = new BTCE('YOUR-KEY', 'YOUR-SECRET');

app.use(express.static(__dirname + '/public'));

app.get('/depth.json', function (req, res) {
    var pair = req.query.pair || 'btc_usd';
    var limit = req.query.limit || 1000;

    console.log(req.query);

    btce.depth({
            "from": 0,
            "count": limit,
            "pair": pair
        },
        function (err, data) {
            res.end(JSON.stringify(data));
        }
    );
});

app.get('/ticker.json', function (req, res) {
    var pair = req.query.pair || 'btc_usd';

    btce.ticker({ pair: pair }, function (err, data) {
        res.end(JSON.stringify(data));
    });
});


app.listen(3000);
console.log('Listening on port 3000');
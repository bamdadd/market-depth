var express = require('express');
var app = express();
var BTCE = require('btce');
var btce = new BTCE('YOUR-KEY', 'YOUR-SECRET');

app.use(express.static(__dirname + '/public'));

app.get('/btce.json', function (req, res) {
    var body = 'Hello World';

    btce.depth({
            "from": 0,
            "count": 5000,
            "pair": "btc_usd"
        },
        function (err, data) {
            res.end(JSON.stringify(data));
        }
    );
});



app.listen(3000);
console.log('Listening on port 3000');
var express = require('express');
var app = express();
var BTCE = require('btce');
var btce = new BTCE('YOUR-KEY', 'YOUR-SECRET');


app.get('/btce', function (req, res) {
    var body = 'Hello World';

    btce.depth({
            "pair": "btc_usd"
        },
        function (err, data) {
            if (err) console.log(err); return;
            body = data;
            res.setHeader('Content-Type', 'text/plain');
            res.setHeader('Content-Length', Buffer.byteLength(body));
            res.end(body);
            console.log(body);
        }
    );
});



app.listen(3000);
console.log('Listening on port 3000');
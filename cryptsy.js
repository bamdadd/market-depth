var market = 'LTCBTC';
var cryptsy = require('cryptsy-api');
var client = new cryptsy('my_public_key', 'my_private_key');

client.singleorderdata(132, function(data){
    console.log(data['DOGE']);
})
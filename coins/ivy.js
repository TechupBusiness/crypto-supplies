/**
* @title Ivy
* @symbol IVY
* @ethContractAddr 0xa4ea687a2a7f29cf2dc66b39c68e4411c0d00c49
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xa4ea687a2a7f29cf2dc66b39c68e4411c0d00c49?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
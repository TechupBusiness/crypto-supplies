/**
 * @title Viberate
 * @symbol VIB
 * @ethContractAddr 0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724
 * @implementation Dynamic
 * @cmcId viberate
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};

/**
 * @title BnkToTheFuture
 * @symbol BFT
 * @ethContractAddr 0x01ff50f8b7f74e4f00580d9596cd3d0d6d6e326f
 * @implementation Dynamic
 * @cmcId bnktothefuture
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x01ff50f8b7f74e4f00580d9596cd3d0d6d6e326f?apiKey=freekey', (error, response, body) => {
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

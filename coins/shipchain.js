/**
 * @title ShipChain
 * @symbol SHIP
 * @ethContractAddr 0xe25b0bba01dc5630312b6a21927e578061a13f55
 * @implementation Dynamic
 * @cmcId shipchain
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xe25b0bba01dc5630312b6a21927e578061a13f55?apiKey=freekey', (error, response, body) => {
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

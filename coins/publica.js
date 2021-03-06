/**
 * @title Publica
 * @symbol PBL
 * @ethContractAddr 0x55648de19836338549130b1af587f16bea46f66b
 * @implementation Dynamic
 * @cmcId publica
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x55648de19836338549130b1af587f16bea46f66b?apiKey=freekey', (error, response, body) => {
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

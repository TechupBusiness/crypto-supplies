/**
 * @title Bee Token
 * @symbol BEE
 * @ethContractAddr 0x4d8fc1453a0f359e99c9675954e656d80d996fbf
 * @implementation Dynamic
 * @cmcId bee-token
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x4d8fc1453a0f359e99c9675954e656d80d996fbf?apiKey=freekey', (error, response, body) => {
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

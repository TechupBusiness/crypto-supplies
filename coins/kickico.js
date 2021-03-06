/**
 * @title KickCoin
 * @symbol KICK
 * @ethContractAddr 0x27695e09149adc738a978e9a678f99e4c39e9eb9
 * @implementation Dynamic
 * @cmcId kickico
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x27695e09149adc738a978e9a678f99e4c39e9eb9?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};

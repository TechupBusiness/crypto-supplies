/**
 * @title CyberVein
 * @symbol CVT
 * @ethContractAddr 0xbe428c3867f05dea2a89fc76a102b544eac7f772
 * @implementation Dynamic
 * @cmcId cybervein
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xbe428c3867f05dea2a89fc76a102b544eac7f772?apiKey=freekey', (error, response, body) => {
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

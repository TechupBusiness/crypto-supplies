/**
 * @title Pillar
 * @symbol PLR
 * @ethContractAddr 0xe3818504c1b32bf1557b16c238b2e01fd3149c17
 * @implementation Dynamic
 * @cmcId pillar
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xe3818504c1b32bf1557b16c238b2e01fd3149c17?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};

/**
 * @title Propy
 * @symbol PRO
 * @ethContractAddr 0x226bb599a12c826476e3a771454697ea52e9e220
 * @implementation Dynamic
 * @cmcId propy
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x226bb599a12c826476e3a771454697ea52e9e220?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};

/**
 * @title XinFin Network
 * @symbol XDCE
 * @ethContractAddr 0x41ab1b6fcbb2fa9dced81acbdec13ea6315f2bf2
 * @implementation Dynamic
 * @cmcId xinfin-network
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x41ab1b6fcbb2fa9dced81acbdec13ea6315f2bf2?apiKey=freekey', (error, response, body) => {
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

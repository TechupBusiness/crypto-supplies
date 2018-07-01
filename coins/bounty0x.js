/**
 * @title Bounty0x
 * @symbol BNTY
 * @ethContractAddr 0xd2d6158683aee4cc838067727209a0aaf4359de3
 * @implementation Dynamic
 * @cmcId bounty0x
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xd2d6158683aee4cc838067727209a0aaf4359de3?apiKey=freekey', (error, response, body) => {
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

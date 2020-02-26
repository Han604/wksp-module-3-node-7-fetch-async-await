const request = require('request-promise');

const getTronaldDump = async () => {
    try {
        const options = {
            uri: 'https://api.tronalddump.io/random/quote',
            headers: { 
                'Accept': 'application/json'
            }
        }
        const joke = await request(options)
        return JSON.parse(joke);
    } catch (err) {console.log(err)}
}
getTronaldDump().then(joke => { console.log(joke.value)})
module.exports = { getTronaldDump }
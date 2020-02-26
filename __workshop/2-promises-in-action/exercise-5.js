const request = require('request-promise');

const getGeekJoke = async () => {
    const options = {
        uri: 'https://geek-jokes.sameerkumar.website/api',
        headers: {
            'accept': 'application/json'
        }
    }
    const joke = await request(options)

    return JSON.parse(joke);
}

getGeekJoke().then(joke => {console.log(joke)})
module.exports = { getGeekJoke }
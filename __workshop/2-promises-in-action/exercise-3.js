const request = require('request-promise');

const getDadJoke = async () => {
    const options = {
        uri: 'https://icanhazdadjoke.com/',
        headers: {
            'accept': 'application/json'
        }
    }
    const joke = await request(options)

    return JSON.parse(joke);
}

getDadJoke().then(joke => { console.log(joke.joke)})

module.exports = {getDadJoke}

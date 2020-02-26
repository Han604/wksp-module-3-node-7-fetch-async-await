const {getDadJoke} = require('./__workshop/2-promises-in-action/exercise-3')
const {getTronaldDump} = require('./__workshop/2-promises-in-action/exercise-4')
const {getGeekJoke} = require('./__workshop/2-promises-in-action/exercise-5')

const handleJoke = async (package) => {
    console.log("****************BODY*********************")
    const type= package.body.type;
    let joke = '';
    console.log(type)
    switch (type) {
        case "dad" :
        console.log("*** DAD joke")
            joke = await getDadJoke()
            joke = joke.joke;
            break;

        case "geek" :
        console.log("***GEEK joke")
            joke = await getGeekJoke()
            break;

        case "tronald":
        console.log("***TROLL joke")
            joke = await getTronaldDump()
            joke = joke.value;
            break;
    
        default:
            break;
    }
    
    console.log(joke)
    package.res.status(200).json(joke)
}

module.exports = { handleJoke }
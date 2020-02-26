// Exercise 2
// ----------
let p = 0
const doublesLater = (num) => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(num * 2)
        }, 2000);
    })
}

doublesLater(4).then(x=>{
    console.log(x)
})

const addPromise = async (num) => {
    try {
        const a = await doublesLater(10);
        const b = await doublesLater(20);
        const c = await doublesLater(30);
        return (a + b + c + num)
    } catch (err) { console.log(err)}

}
addPromise(10).then((sum) => {
    console.log(sum);
});
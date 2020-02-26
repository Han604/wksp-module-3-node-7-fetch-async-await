const type = document.getElementById('type')

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('**********type*************8')
    console.log(type.value)
    const data = { type : type.value }

    fetch(`/joke`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        }
    }).then(res =>{
       // let response = res.json()
        console.log(res)
        return res.json();})
    .then(joke => {
        
        console.log(joke)
        alert (joke);
    })
}
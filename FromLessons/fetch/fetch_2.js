// fetch('https://jsonplaceholder.typicode.com/posts')
// .then( res => {
//     console.log(res);
//     if(res.ok){
//         console.log('succsess !');
//         return res.json()
//     } else {
//         console.log('NOT succsessful. Error');
//     }
    
// })
// .then( data => console.log(data))



const someData = {
    title: 'Nice title',
    body: 'Lorem ipsum',
    userId: 9
}

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8' 
    },
    body: JSON.stringify(someData)
}).then(res => res.json().then( data => console.log(data)))
console.log('start');

function functionFirst() {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('functionFirst');
            const result = true
            if(result){
                resolve()
            } else {
                reject('first')
            }
        }, 1500)
    })
}

function functionSecond() {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('functionSecond');
            const result = false
            if(result){
                resolve()
            } else {
                reject('Second')
            }
        }, 1000)
    })
}

function functionThird(){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('functionThird');
            resolve()
        }, 500)
    })
}

functionFirst().then(function(){
    return functionSecond()
}).then( function() {
    return functionThird()
}).then(function() {
    console.log('Next code');
}).catch(function(name){
    console.log('ERROR', name);
})

console.log('object');
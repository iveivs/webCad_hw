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
            const result = true
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

async function codeRun() {
    await functionFirst()
    await functionSecond()
    await functionThird()

    return 'some value'
}

// ассинхронные ф-ии возвращают promise, поэтому можно дальше писать then
codeRun().then(function(arg){
    console.log('Next code!', arg);
})
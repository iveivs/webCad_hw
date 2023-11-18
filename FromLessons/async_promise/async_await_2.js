function functionFirst() {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('functionFirst');
            const result = 100
            resolve(result)
        }, 1500)
    })
}

function functionSecond(value) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('functionSecond');
            const someResult = value + 100
            resolve(someResult)
        }, 1000)
    })
}

function functionThird(value){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('functionThird');
            const someResult = value + 100
            resolve(someResult)
        }, 500)
    })
}

async function codeRun() {
    const res1 = await functionFirst()
    console.log("res1 = ", res1);
    const res2 = await functionSecond(res1)
    console.log("res2 = ", res2);
    const res3 = await functionThird(res2)
    console.log("res3 = ", res3);
    return 'some value'
}

// ассинхронные ф-ии возвращают promise, поэтому можно дальше писать then
codeRun().then(function(arg){
    console.log('Next code!', arg);
})
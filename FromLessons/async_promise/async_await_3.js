function functionFirst() {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('functionFirst');
            const result = true
            if(result){
                resolve()
            } else {
                reject('Error mesage from First func')
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
                reject('Error mesage from Second func')
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
    try {
        await functionFirst()
        await functionSecond()
        await functionThird()
    } catch (arg) {
        console.log('Error! catch code running');
        console.log(arg);
    }
    

    return 'some value'
}

// ассинхронные ф-ии возвращают promise, поэтому можно дальше писать then
codeRun().then(function(arg){
    console.log('Next code!', arg);
})
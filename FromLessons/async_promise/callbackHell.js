function firstFync(callback){
    console.log('start');
    setTimeout(function(){
        console.log("firstFync");
        callback()
    }, 1500)
}
function secondFync(callback){
    setTimeout(function(){
        console.log("secondFync");
        callback()
    }, 1000)
    
}
function thirdFync(callback){
    setTimeout(function(){
        console.log("thirdFync");
        callback()
    }, 500)
}

firstFync(function(){
    console.log('text from callbec first func');
    secondFync(function(){
        console.log('text from second  callbec func');
        thirdFync(function(){
            console.log('final');
        })
    })
})
// secondFync()
// thirdFync()

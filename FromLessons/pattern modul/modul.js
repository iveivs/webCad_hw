let counterModule = (function(){

    let counter = 0;

    function setCounterFunc(number) {
        if(Number.isInteger(number)) {
            if(number > 0) {
                counter = number
            } else {
                console.log('Число должно быть больше \"0\"');
            }
            
        } else {
            console.log('Введите число');
        }
        
    }

    function getCounterFunc() {
        console.log(counter);
    }

    function increaseFunc(){
        counter += 1
    }
    function decreaseFunc(){
        counter -= 1
    }

    return {
        increase: increaseFunc,
        decrease: decreaseFunc,
        setCounter: setCounterFunc,
        getCounter: getCounterFunc
    }
})()

counterModule.setCounter(10)
counterModule.increase()
counterModule.increase()
counterModule.increase()
counterModule.decrease()
counterModule.getCounter() // 12


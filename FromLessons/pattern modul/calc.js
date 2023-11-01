let calc = (function() {

    let a 
    let b
    let result = 0

    function setValues(paramsA, paramsB) {
        if(Number.isInteger(paramsA) && Number.isInteger(paramsB)){
            if(paramsA >= 0 && paramsB >= 0) {
                a = paramsA 
                b = paramsB
            } else {
                console.log('Введите число больше \"0\"');
            }
        } else {
            console.log('Введите целое число')
        }
    }

    function sum(){
        return result = a + b
    }

    function difference(){
        return result = a - b
    }

    function getResult() {
        console.log(result);
    }
    return {
        setValues: setValues,
        getResult: getResult,
        sum: sum,
        difference: difference
    }
})()
calc.setValues(-1, 7)
calc.setValues(1.2, 8)
calc.setValues(30, 20);
calc.sum();
calc.getResult(); // 50

calc.difference();
calc.getResult(); // 10
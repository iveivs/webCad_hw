const Question = function(question, answers, result) {
    this.question = question
    this.answers = answers
    this.result = result
}

const firstQuestion = new Question('Кто не спрятался я ...', [' 1 - военкомат ', ' 2 - не виноват ', ' 3 - Грут '], 2)

const secondQuestion = new Question('Почему в 16-м веке женщину в синей юбке сожгли бы на костре ', ['1 - некрасивый цвет ', '2 - Юбки были не в тренде ', ' 3 - потому что Гладиолус '], 3)

const thirdQuestion = new Question('Хочешь хоть один раз ответить правильно? Подсказка в вариантах ответа', [' 1 - я не умею считать ', ' 2 - кто здесь?' , ' 3 - я не ведусь на подсказки ', ' 4 - правильный ответ 4 '], 4)

const questionsArray = [firstQuestion, secondQuestion, thirdQuestion]

let count = 0

let randomNumber = () => {
    let temp = Math.floor(Math.random() * 10)
    if(temp > questionsArray.length - 1){
        return randomNumber()
    }
    return temp
}

function checkResult() {
    // Записываем результат функции randomNumber в переменную
    let randomVariableNumber = randomNumber()

    // Выводим в консоль варианты ответов
    // console.log(questionsArray[randomVariableNumber].answers); // пока закоментировал, но по условию вроде как нужно было чтоб выводилось,
                                                                    // но мешает в консоли
    // 
    let input = prompt(`${questionsArray[randomVariableNumber].question} \n ${questionsArray[randomVariableNumber].answers}`)
    console.log(input);
    // Number.isInteger(input) && 
    if(input <= questionsArray[randomVariableNumber].answers.length && input > 0) {
        if(input == questionsArray[randomVariableNumber].result){
            count++
            console.log('win');
            return `again`
        } else {
            console.log('loose');
            return `again`
        }
    } else if(input == null || input == 'exit') {
        console.log('null exit');
        return `exit`
    } else {
        console.log('Вы ввели не корректные данные');
        return `again`
    }
}

// не всё всегда работает, через раз. То работает то не работает(кнопка "отмена иногда срабатывает со второго раза")
// возможно из-за рекурсии, но не знаю как пофиксить

(function recursion() {
        if(checkResult() == "exit") return
        checkResult()
        recursion()
})()

// вариант 2
// function recursion() {
//     if(checkResult() == "again") {
//         checkResult()
//     } else if(checkResult() == "exit"){
//         return
//     }
//     recursion()
// }
// recursion()






(function() {
    const Question = function(question, answers, result) {
        this.question = question
        this.answers = answers
        this.result = result

        // ниже указан более оптимизированный вариант создания этих методов
        // this.showAnswers = function() {
        //     const answers = []
    
        //     this.answers.forEach((el, i) => {
        //         answers.push(`${i + 1}: ${el}`) 
        //     })
        //     return answers
        // }

        // this.checkAnswers = function (input) {
        //     if(input == null || input == 'exit') {
        //         return
        //     }
        //     if(input <= this.answers.length && input > 0) {
        //         if(input == this.result){
        //             count++
        //             console.log('win');
        //         } else {
        //             console.log('loose');
        //         }
        //         console.log(`Ваш счёт равен ${count}`);
        //     } else {
        //         console.log('Вы ввели не корректные данные');
        //     }
        // }
    }

    Question.prototype.showAnswers = function() {
        const answers = []
    
        this.answers.forEach((el, i) => {
            answers.push(`${i + 1}: ${el}`) 
        })
        return answers
    }
    
    Question.prototype.checkAnswers = function(input){
        if(input <= this.answers.length && input > 0) {
            if(input == this.result){
                count++
                console.log('win');
            } else {
                console.log('loose');
            }
            console.log(`Ваш счёт равен ${count}`);
        } else {
            console.log('Вы ввели не корректные данные');
        }
    }

    const firstQuestion = new Question('Кто не спрятался я ...', ['военкомат ', 'не виноват ', 'Грут '], 2)
    
    const secondQuestion = new Question('Почему в 16-м веке женщину в синей юбке сожгли бы на костре ', ['некрасивый цвет ', 'Юбки были не в тренде ', 'потому что Гладиолус '], 3)
    
    const thirdQuestion = new Question('Хочешь хоть один раз ответить правильно? Подсказка в вариантах ответа', ['я не умею считать ', 'то здесь?' , 'я не ведусь на подсказки ', 'правильный ответ 4 '], 4)
    
    const questionsArray = [firstQuestion, secondQuestion, thirdQuestion]
    
    let count = 0
    
    let randomNumber = () => {
        return Math.floor(Math.random() * questionsArray.length)
        
    }
    
    function checkResult() {
        // Записываем результат функции randomNumber в переменную
        let randomVariableNumber = randomNumber()
    
        const randomQuestion = questionsArray[randomVariableNumber]
    
        const answers = randomQuestion.showAnswers()
        
        let input = prompt(`${randomQuestion.question} \n ${answers.join(" ")}`)

        if (input == null || input == 'exit') {
            return
        }
        
        randomQuestion.checkAnswers(input)
        
        checkResult()
    }
    checkResult()
})()

// - - - - - - - - - - - - - - - -
// Вариант без методов объекта
// (function() {
//     const Question = function(question, answers, result) {
//         this.question = question
//         this.answers = answers
//         this.result = result

//     }
    
//     const firstQuestion = new Question('Кто не спрятался я ...', ['военкомат ', 'не виноват ', 'Грут '], 2)
    
//     const secondQuestion = new Question('Почему в 16-м веке женщину в синей юбке сожгли бы на костре ', ['некрасивый цвет ', 'Юбки были не в тренде ', 'потому что Гладиолус '], 3)
    
//     const thirdQuestion = new Question('Хочешь хоть один раз ответить правильно? Подсказка в вариантах ответа', ['я не умею считать ', 'то здесь?' , 'я не ведусь на подсказки ', 'правильный ответ 4 '], 4)
    
//     const questionsArray = [firstQuestion, secondQuestion, thirdQuestion]
    
//     let count = 0
    
//     let randomNumber = () => {
//         return Math.floor(Math.random() * questionsArray.length)
        
//     }
    
//     function checkResult() {
//         // Записываем результат функции randomNumber в переменную
//         let randomVariableNumber = randomNumber()
    
//         const randomQuestion = questionsArray[randomVariableNumber]
    
//         let answers = []
    
//         randomQuestion.answers.forEach((el, i) => {
//             answers.push(`${i + 1}: ${el}`) 
//         })
        
//         let input = prompt(`${randomQuestion.question} \n ${answers.join(" ")}`)
    
//         if(input == null || input == 'exit') {
//             return
//         }
//         if(input <= randomQuestion.answers.length && input > 0) {
//             if(input == randomQuestion.result){
//                 count++
//                 console.log('win');
//             } else {
//                 console.log('loose');
//             }
//             console.log(`Ваш счёт равен ${count}`);
//         } else {
//             console.log('Вы ввели не корректные данные');
//         }
//         checkResult()
//     }
//     checkResult()
// })()
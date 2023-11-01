(function() {
    const Question = function(question, answers, correct) {
        this.question = question
        this.answers = answers
        this.correct = correct
    }
    
    
    // 4.2 Опишем метод displayQuestion который будет выводить вопрос и ответы
    Question.prototype.displayQuestion = function() {
        console.log(
            "%c" + this.question, 
            "background: #CCC color: #FAFAFA");
        for(let i = 0; i < this.answers.length; i++){
            console.log(i + ". " + this.answers[i]);
        }
    }
    // 6.1 Метод для проверки корректного ответа
    //  10.2 В методе checkAnswer мы описываем ф-ю callback в кот. передадим ф-ю keepScore 
    Question.prototype.checkAnswer = function(answer, callback) {
        let innerScore 
        if(answer === this.correct) {
            console.log("%c Pravilnyy otvet", "background: #66BB6A color: #FAFAFA");
            innerScore = callback(true)
        } else {
            console.log("%c Nepravilnyy otvet", "background: #ef5350 color: #FAFAFA");
            innerScore = callback(false)
        }
        // 11.2 Выводим в консоль счёт участника, запуская соответствующий метод
        this.displayScore(innerScore)
    }

    // 11.1 Создаём новый метод для вывода счёта участника
    Question.prototype.displayScore = function(score) {
        console.log(`Ваш счёт равен:  ${score}`);
    }
    
    const q1 = new Question("Вопрос 1", ['да', 'нет', 'незнаю'], 0)
    const q2 = new Question("Вопрос 2", ['да', 'нет', 'незнаю'], 1)
    const q3 = new Question("Вопрос 3", ['да', 'нет', 'незнаю'], 2)
    
    // 3 Поместите все вопросы в массив
    const questions = [q1, q2, q3]

    // 10. Создаём ф-ю которая отработав оставит замыкание на себя и к 
    // своей внутренней переменной scoreValue. Внутри scoreValue будет
    // записан счёт участника
    function score(){
        let scoreValue = 0
        // ф-я score возвращает ф-ю по увеличению счёта
        return function(correct) {
            if (correct) {
                scoreValue++
            }
            return scoreValue
        }
    }
    // 10.1 Запускаем ф-ю score и возвращёную ф-ю записываем переменную keepScore
    let keepScore = score()

    // 8 Отображерние следущего вопроса
    function nextQuestion() {
        // 4.  Выберите один случайный вопрос
        // 4.1  Найти случайное число
        let n = Math.floor(Math.random() * questions.length)
        questions[n].displayQuestion()

        // 4.3 распечатайте в консоль случайный вопрос с вариантами
        let answer = prompt('Введите номер верного ответа: ')
        // 6. 
        // 6.2 проверка ответа с помощью метода
        questions[n].checkAnswer(parseInt(answer), keepScore)

        // 9. Предусмотрите вариант остановки игры. Чтобы пользователь мог ввести в консоль "exit" или нажать на кнопку "Отмена" и выйти из игры.

        if (answer !== 'exit' && answer !== null) {
            nextQuestion()
        }
    }

    nextQuestion()
})()
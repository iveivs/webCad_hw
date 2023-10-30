// функция которая возвр-ет ф-ю

function interviu(job) {
    if (job === 'designer'){
        return function(name) {
            console.log(`Hi ${name}, tell me about design`);
        }
    }
    if (job === 'driver'){
        return function(name) {
            console.log(`Hi ${name}, tell me about car`);
        }
    }
}

const designerQuestions = interviu("designer")

designerQuestions("Piter")

// второй вариант запуска функции
interviu('driver')('mike');
// - - - - - - - - - - - - - - - 

// IIFE - Анонимные самовызывающиеся функции(в коде который идёт сверху обязательно должны стоять точка с запятой)
(function(){
    var score = Math.random() * 10
    console.log(score >= 5);
})();
// так же они могут принимать параметр
(function(name){
    console.log(`My name is ${name}`);
})('Max');
// - - - - - - - - - - - - - - - 

// Замыкания

function doPensii(age){
    const words = ' лет осталось до пенсии'
    return function(yearOfBirth) {
        let currentAge = 2023 - yearOfBirth
        let left = age - currentAge
        console.log(left + words);
    }
}

const pensiyaInRussia = doPensii(65)
pensiyaInRussia(1985)

// call, bind apply

const fedor = {
    name: "Fedor",
    age: 33,
    job: "designer",
    sayHello: function(style, timeOfTheDay) {
        if(style === "formal") {
            console.log(`Доброго ${timeOfTheDay}. Меня зовут ${this.name}. Мне ${this.age} лет`);
        } else if (style === "friendly" ) {
        console.log(`Здарова! Как дела? Я ${this.name}, я ${this.job}, Хорошего тебе ${timeOfTheDay}`);
        }
    }
}

fedor.sayHello("formal", "утрa")
fedor.sayHello("friendly", "вечера")

const mary = {
    name: "Mary",
    age: 22,
    job: "programer",
}

// Метод call
fedor.sayHello.call(mary, "formal", "утрa") 

// Метод apply
// Аналогично call, только аргументы передаются массивом
fedor.sayHello.apply(mary, ["friendly", "утрa"]) 

// метод bind создаёт копию функции,
// с привязкой к контексту и устанавливает значения для аргументов
const fedorFriendly = fedor.sayHello.bind(mary, "friendly", "вечера")
fedorFriendly()
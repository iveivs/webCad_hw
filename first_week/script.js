// Maрк  и Пол хотят сравнить свой индекс массы тела.

// Запишите рост и вес для Марка и Боба в переменные.
// Рассчитайте массы тела для Марка и для Боба.
// Создайте логическую переменную в которую следует записать:
// является ли индекс массы тела у Марка больше, чем у  Боба или  нет.
// Распечатайте в консоль значение переменной из пункта 3  в виде фразы:
// ИМТ  у Марка больше чем Боба ?    true   (либо false, в зависимости от результата).

const mark = {
    height: 1.7,
    weight: 70
}
const bob = {
    height: 1.8,
    weight: 80
}
    
function getIndexMass(obj) {
    let result = obj.weight / Math.pow(obj.height, 2)
    return result
}

// console.log(getIndexMass(mark));
// console.log(getIndexMass(bob));

// вариант 1
let result = getIndexMass(mark) > getIndexMass(bob) ? console.log('ИМТ  у Марка больше чем Боба ?', true) : console.log('ИМТ  у Марка меньше чем Боба ?', false)

// вариант 2
let result2
if(getIndexMass(mark) > getIndexMass(bob)) {
    result2 = true
} else {
    result2 = false
}
// console.log(`ИМТ  у Марка больше чем Боба ? ${result2}`);


// Задача 2
// Марк ,  Пол  и Мэри  играют в баскетбол в разных командах.


// За последние 3 игры:

// Команда Марка набрала по 110, 120 ,130 очков.
// Команда Пола набрала 90, 130, 135 очков.
// Команда Мэри набрала  80, 130 , 150 очков.

// Результат игры между двумя командами
// Рассчитайте общее количество набранных очков отдельно для команд Марка и Пола.
// Напишите блок с условиями if - else if, для определения какая из этих двух команд выиграла по общему количеству набранных очков. Предусмотрите вариант с ничьей.

// Результат игры между тремя командами
// Добавьте данные по третьей команде Мэри. С очками набранными за три раунда. Посчитайте общее количество набранных очков для команды Мэри.
// Напишите блок с условиями if - else if, для определения какая из трех команд выиграла.
// Подсказка:  вам пригодится оператор &&
// Предусмотрите все возможные варианты с ничьей:
// - ничья между тремя командами
// - ничья между двумя командами победителями, сообщить какие это команды.
const marksTeam = [110, 120 ,130],
    polsTeam = [90, 130, 135 ],
    marysTeam = [80, 130 , 150]

function average(arr) {
    let res = arr.reduce((acc, elem) => acc += elem, 0)
    return res
}

// Для двух команд
function findWinnerOfTwo(team1, team2, callback) {

    const team1Points = callback(team1)
    const team2Points = callback(team2)

    if(team1Points > team2Points) {
        console.log(`win team1`);
    } else if (team1Points == team2Points) {
        console.log('it is draw');
    } else {
        console.log(`win team2`);
    }
}
findWinnerOfTwo(marksTeam, polsTeam, average)

// Для трёх команд
function findWinnerOfThree(team1, team2, team3, callback) {
    const team1Points = callback(team1)
    const team2Points = callback(team2)
    const team3Points = callback(team3)

    if(team1Points > team2Points && team1Points > team3Points) {
        console.log('win team 1');
    } else if (team2Points > team1Points && team2Points > team3Points) {
        console.log('win team 2');
    } else if (team3Points > team1Points && team3Points > team1Points) {
        console.log('win team 3');
    } else if (team1Points == team2Points && team2Points == team3Points) {
        console.log('it is draw');
    } else if (team1Points > team2Points && team1Points == team3Points) {
        console.log('win team1 and team3');
    } else if (team1Points > team3Points && team1Points == team2Points) {
        console.log('win team1 and team2');
    } else if (team2Points > team1Points && team2Points == team3Points) {
        console.log('win team2 and team3');
    } 
}
findWinnerOfThree(marksTeam, polsTeam, marysTeam, average)


// Задача 3

// Петр любит посещать рестораны со своей семьей. И оставляет чаевые. 

// Размер чаевых зависит от суммы чека. 

// Если сумма чека до 1000 рублей, Петр оставляет 20% чаевых.
// Если сумма чека от 1000 до 3000 рублей, Петр оставляет 15% чаевых. 
// Если сумма чека от 3000 рублей и выше, Петр оставляет 10% чаевых. 

// Напишите функцию, которая будет принимать число, сумму чека и распечатывать в консоль сколько чаевых нужно оставить. 

// Пример вызова и работы функции:

// calculateTips(1000); // При чеке в 1000 рублей, чаевые составят 200 рублей. 
// calculateTips(2000); // При чеке в 2000 рублей, чаевые составят 300 рублей. 
// calculateTips(5000); // При чеке в 5000 рублей, чаевые составят 500 рублей.

function calculateTips(summ) {
    if (summ <= 1000) {
        return summ * 0.2
    } else if (summ > 1000 && summ <= 3000) {
        return summ * 0.15
    } else if (summ > 3000) {
        return summ * 0.1
    }

}
// console.log(calculateTips(1000));
// console.log(calculateTips(2000));
// console.log(calculateTips(5000));

// Задача 4
// 1. Создайте 1 массив с книгами ( или фильмами, фруктами, блюдами) Наполните его 5-ю элементами.
// 2. Распечатайте каждый элемент массива через циклfor (). Выведите индекс каждого элемента и его содержимое.
// 3. Распечатайте каждый элемент массива через метод forEach().
//    Выведите индекс каждого элемента и его содержимое.

const arr = ['book', 'movie', 'fruits', 'dishes', 'fifth element']

for( let i = 0; i < arr.length; i++) {
    // console.log(i, arr[i]);
}

arr.forEach((elem, i ) => console.log(elem, i))

// Задача 5
// 1. Создайте массив array1 из 5-ти фруктов. 
// 2. Добавьте в начало массива новый элемент с овощем. 
// 3. Добавьте в конец массива 2 элемента с овощами. 
// 4. Создайте новый массив array2, на основе массива array1, скопировав из него только фрукты. (2, 3, 4, 5, 6 - элементы) 
// 5. Распечатайте в консоль оба массива. Используйте console.log() для вывода переменной с массивом.

const array1 = ['fruit 0', 'fruit 1', 'fruit 2', 'fruit3', 'fruit 4']

// Вариант 1
array1.unshift('turneps')
// Вариант 2
array1.splice(0,0, "baklajzan")

// Вариант 1
array1.push('kabachok')
// Вариант 2
array1.splice(array1.length, 0, "rediska", "repka")
// console.log(array1);

let array2 = array1.slice(2, 7)
// console.log(array2);

// Задача 5
// Создайте объект который будет описывать робота. 
// У робота есть имя, год выпуска, страна производства. 
// Робот умеет делать три команды:
//  Здороваться, называя свое имя. 
// Рассказывать откуда он (в какой стране произведен).
// Называть свой год выпуска и сколько ему лет. Для этого ему придется сообщить текущий год, чтобы робот посчитал свой возраст. 
// Создайте конструктор который будет создавать таких роботов. 
// С помощью конструктора создайте 2-х роботов. Сделайте чтобы каждый созданный робот представился, рассказал откуда он и назал свой возраст и год выпуска.

class someRobot {
    constructor(name, dateMaid, country) {
        this.name = name
        this.dateMaid = dateMaid
        this.country = country
    }
    sayHello() {
        console.log('Hello');
    }
    sayName() {
        console.log(` My name is ${this.name}`);
    }
    sayFrom() {
        console.log('I am from ', this.country);
    }
    myAge(currentYear) {
        console.log(currentYear - this.dateMaid);
    }

}

const r2d2 = new someRobot('r2d2', 1990, 'Some Republic')
// r2d2.sayHello()
// r2d2.sayName()
// r2d2.sayFrom()
// r2d2.myAge(2023)

const wally = new someRobot('wally', 2000, 'Some-where')
// wally.sayHello()
// wally.sayName()
// wally.sayFrom()
// wally.myAge(2023)

// Задача посложнее
// моё решение
const robot = {
    maxEnergy: 100,
    currentCharge: 100,
    сleaning: 20,
    breakfast: 5,
    lunch: 15,
    dinner: 10,
    shoping: 60,
    makeAction(action) {
        const tempArr = []
        for(let key in robot){
            tempArr.push(key)
        }
        let flag = tempArr.includes(action)
        if(!flag){
            return console.log(`Не могу выполнить ${action}. Такой задчи нет в моем списке.`);
        }

        for(let key in robot){
            if(action == key && this.currentCharge > robot[key]) {
                this.currentCharge -= robot[key]
                console.log(`Выполнил действие ${action}. Осталось ${this.currentCharge}% заряда.`); 
                return
            } 
            if(action == key && this.currentCharge < robot[key] && key != 'maxEnergy' && key != 'currentCharge'){
                console.log(`Недостаточно энергии для выполнения действия ${action}. Требуется ${robot[key]}% энергии, осталось ${this.currentCharge}%`);
                return
            }
        }
    },
    charge(){
        this.currentCharge = this.maxEnergy
        console.log(`Заряд завершен. Уровень энергии ${this.currentCharge }%.`);
    }
}

robot.makeAction("сleaning"); // Выполняю действие "уборка". Осталось 80% заряда.
robot.makeAction("breakfast"); // Выполняю действие "завтрак". Осталось 75% заряда.
robot.makeAction("lunch"); // Выполняю действие "обед". Осталось 60% заряда.
robot.makeAction("dinner"); // Выполняю действие "ужин". Осталось 50% заряда.
robot.makeAction("shoping"); // Не могу выполнить действие "покупки". Требуется 60% энергии, осталось 50%.

robot.charge(); // Заряд завершен. Уровень энергии 100%.

robot.makeAction("shoping"); // Выполняю действие "покупки". Осталось 40% заряда.
robot.makeAction("сleaning"); // Выполняю действие "уборка". Осталось 20% заряда.


// эталонное решение
const robot2 = {
	maxEnergy: 100,
	energy: 100,
	actions: [
		{ name: 'уборка', cost: 20 },
		{ name: 'завтрак', cost: 5 },
		{ name: 'обед', cost: 15 },
		{ name: 'ужин', cost: 10 },
		{ name: 'покупки', cost: 60 },
	],
    makeAction: function (action) {

        const currentAction = this.actions.find(function (item) {
            if (action === item.name) return true
        })
        if (!currentAction) {
            console.log(`Не могу выполнить "${action}". Такой задачи нет в моем списке.`);
            return;
        }

        if (this.energy >= currentAction.cost) {
            this.energy = this.energy - currentAction.cost;
			console.log(`Выполнил действие "${currentAction.name}". Осталось ${this.energy}% заряда.`);
        } else {
            console.error(
				`Недостаточно энергии для выполнения действия "${currentAction.name}". Требуется ${currentAction.cost}% энергии, осталось ${this.energy}%.`
			);
        }

    },
    charge: function () {
        this.energy = this.maxEnergy;
        console.warn(`Заряд завершен. Уровень энергии ${this.energy}%.`);
    }
};
console.log('probel');
robot2.makeAction("уборка");
robot2.makeAction("завтрак");
robot2.makeAction("обед");
robot2.makeAction("ужин");
robot2.makeAction("покупки");

robot2.charge();

robot2.makeAction("покупки");
robot2.makeAction("уборка");

// Задание к предыдущему коду

// 1. Создайте нового робота в виде объекта, дав ему имя robot.
// Дайте ему имя и следующие свойства:



// Свойство которое показывает его максимальный уровень энергии, 100 единиц.
// Свойство которое показывает текущий заряд энергии. На старте равно максимальному уровню.


// 2. Укажите для робота следующие действия:

// уборка: 20 ед. энергии.
// завтрак: 5 ед. энергии.
// обед: 15 ед. энергии.
// ужин: 10 ед. энергии.
// покупки: 60 ед. энергии.
// при желании можете дополнить список своими действиями.


// 3. Реализуйте метод makeAction, в который вы будете передавать название действия, которое надо совершить. Сделайте, чтобы робот сообщал о том какое действие он выполняет. Пока без проверки на энергию и на существование такого действия.

// Метод makeAction должен запускаться следующим образом:

// robot.makeAction("завтрак"); // Выполняю действие "завтрак"
// robot.makeAction("уборка"); // Выполняю действие "уборка"


// 4. Проверка на существование действия. Добавьте в метод makeAction() проверку на существование действия которое мы передаем на выполнение. Если такого действия не существует, пусть робот выведет сообщение что такое действие в его списке задач отсутствует.

// robot.makeAction("помыть авто"); // Не могу выполнить "помыть авто". Такой задчи нет в моем списке.


// 5. Сделайте списание единиц энергии при выполнении действий роботом. При выполнении задачи робот должен сообщать сколько единиц энергии у него осталось после выполнения.

// robot.makeAction("уборка"); // Выполнил действие "уборка". Осталось 80% заряда.   
// robot.makeAction("завтрак"); // Выполнил действие "завтрак". Осталось 75% заряда.   


// 6. Добавьте в метод проверку на энергию. Хватит ли у него энергии на требуемое действие. Если энергии не хватит, робот должен сообщить что у него недостаточно энергии на выполнение действия.

// robot.makeAction("покупки"); // Выполнил действие "покупки". Осталось 40% заряда.
// robot.makeAction("покупки"); // Недостаточно энергии для выполнения действия "покупки". Требуется 60% энергии, осталось 40%.


// 7. Научите робота заряжаться, восстанавливая свой уровень заряда на 100%, добавив ему новый метод charge(). 

// robot.charge(); // Заряд завершен. Уровень энергии 100%.


// 8. Запустите последовательно несколько действий, так чтобы разрядить робота, зарядите и запустите еще пару действий.

// robot.makeAction("уборка"); // Выполняю действие "уборка". Осталось 80% заряда.
// robot.makeAction("завтрак"); // Выполняю действие "завтрак". Осталось 75% заряда.
// robot.makeAction("обед"); // Выполняю действие "обед". Осталось 60% заряда.
// robot.makeAction("ужин"); // Выполняю действие "ужин". Осталось 50% заряда.
// robot.makeAction("покупки"); // Не могу выполнить действие "покупки". Требуется 60% энергии, осталось 50%.

// robot.charge(); // Заряд завершен. Уровень энергии 100%.

// robot.makeAction("покупки"); // Выполняю действие "покупки". Осталось 40% заряда.
// robot.makeAction("уборка"); // Выполняю действие "уборка". Осталось 20% заряда.

function PersonES5 (name, yearsOfBirth, job) {
    this.name = name
    this.yearsOfBirth = yearsOfBirth
    this.job = job
}

PersonES5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearsOfBirth
    console.log(age);
}

var johnES5 = new PersonES5("john", 1992, "designer")
// johnES5.calculateAge()

// Наследование ES5

function AthleteES5(name, yearsOfBirth, job, olympicGames, medals) {
    // вызываем конструктор родительского класса
    PersonES5.call(this, name, yearsOfBirth, job)

    this.olympicGames = olympicGames
    this.medals = medals
}

// Что бы создать корректную цепочку прототипирования,
// необходимо использовать Object.create()
AthleteES5.prototype = Object.create(PersonES5.prototype)

AthleteES5.prototype.wonMedal = function() {
    this.medals++
    console.log(this.medals);
}

var johnAthleteES5 = new AthleteES5('John', 2000, 'athlet', 'swimming', 10)
console.log(johnAthleteES5);


// - - - - - - - - - - - - - - - - - -
// es6

class PersonES6 {
    constructor(name, yearsOfBirth, job) {
        this.name = name
        this.yearsOfBirth = yearsOfBirth
        this.job = job
    }

    calculateAge = function() {
        const age = new Date().getFullYear() - this.yearsOfBirth
        console.log(age);
    }
}

// const johnES6 = new PersonES6("john", 1992, "designer")

// johnES6.calculateAge()

// наследование ES6

class AthleteES6 extends PersonES6 {
    constructor(name, yearsOfBirth, job, olympicGames, medals){
        // super это конструктор родительского класса
        super(name, yearsOfBirth, job)

        this.olympicGames = olympicGames
        this.medals = medals
    }
    wonMedal() {
        this.medals++
        console.log(this.medals);
    
    }
}


const johnAthleteES6 = new AthleteES6('John', 1999, 'athlet', 'swimming', 10)
console.log(johnAthleteES6);
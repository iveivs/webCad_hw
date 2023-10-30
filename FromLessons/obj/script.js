// Прототипное наследование
// old

const Person = function(name, year, job) {
    this.name = name
    this.year = year
    this.job = job
    this.calculateAge = function() {
        let age
        return age = 2023 - this.year
    }
}

Person.prototype.sayName = function () {
    return `my name is ${this.name}`
}
// new
// class Person {
//     constructor(name, age, job) {
//         this.name = name
//         this.age = age
//         this.job = job
//     }
// }

const john = new Person('john', 1990, 'driver')

console.log(john.calculateAge());
console.log(john);

console.log(john.sayName()); // my name is john

const personProto = {
    calcAge: function() {
        let age = 2023 - this.year
        console.log(age);
    }
}

const ivan = Object.create(personProto)
ivan.name = 'ivan'
ivan.year = 1999
console.log(ivan);

const mark = Object.create(personProto, {
    name: { value: "Mark"},
    year: { value: 1996},
});
console.log('test', mark);
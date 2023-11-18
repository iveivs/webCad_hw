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

    static greating() {
        console.log('Hello, how are you?');
    }
}

PersonES6.greating()

const johnES6 = new PersonES6("john", 1992, "designer")

johnES6.calculateAge()
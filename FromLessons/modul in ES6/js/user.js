export default class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

export function printName(user) {
    console.log(`Hello my name is ${user.name}`);
}
export function printAge(user) {
    console.log(`My age is ${user.age}`);
}

// 2-й вариант экспорта
// export default User
// export {printName, printAge}
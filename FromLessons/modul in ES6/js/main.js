// import  User from './user.js' // импорт дефолтного экспорта
// import { printName as printUserName, printAge as printUserFunc } from './user.js';

// тоже самое, но в одну строчку
import User, { printName as printUserName, printAge as printUserFunc } from './user.js';

const userBob = new User("Bob", 33)
console.log(userBob);
printUserName(userBob)
printUserFunc(userBob)
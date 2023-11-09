const locStorArr = []
console.log(locStorArr.length);
let id = locStorArr.length > 0 ? locStorArr[locStorArr.length - 1].id + 1 : 1

const obj = {
    id: id
}
console.log(obj);
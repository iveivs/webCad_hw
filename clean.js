const arr = [
    {
        id: 1,
        task: "name"
    },
    {
        id: 2,
        task: "name"
    },
    {   
        id: 3,
        task: "name"
    },
]

let tempArr = arr.filter(e => {
    return e.id == 2
})
console.log(tempArr);
// console.log(typeof arr);


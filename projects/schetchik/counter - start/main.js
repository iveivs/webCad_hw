const input = document.getElementById('input')
// данный файл main.js уже не нужен(когда мы сделали моодульную систему)

const btnMinus = document.getElementById('btnMinus')
const btnPlus = document.getElementById('btnPlus')
const btnReset = document.getElementById('btnReset')

let counter = 0 // model
input.value = counter // view

// controller
btnPlus.addEventListener('click', function() {
    counter += 1 // model
    input.value = counter // view
})
btnMinus.addEventListener('click', function() {
    counter -= 1
    input.value = counter
})
btnReset.addEventListener('click', function() {
    counter = 0
    input.value = counter
})


// Простой(самый первый) вариант реализации счётчика
// const input = document.getElementById('input')
// const btnMinus = document.getElementById('btnMinus')
// const btnPlus = document.getElementById('btnPlus')
// const btnReset = document.getElementById('btnReset')

// btnPlus.addEventListener('click', function() {
//     input.value = parseInt(input.value ) + 1
// })
// btnMinus.addEventListener('click', function() {
//     input.value = parseInt(input.value ) - 1
// })
// btnReset.addEventListener('click', function() {
//     input.value = 0
// })


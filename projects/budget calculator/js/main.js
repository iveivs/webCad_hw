// data
const budget = []

const form = document.querySelector("#form")

const type = document.querySelector("#type") //select
const title = document.querySelector("#title")
const value = document.querySelector("#value")

const incomesList = document.querySelector('#incomes-list')
const expensesList = document.querySelector('#expenses-list')

const budgetEl = document.querySelector('#budget')
const totalIncomeEl = document.querySelector('#total-income')
const totalExpenseEl = document.querySelector('#total-expense')
const percentsWrapper = document.querySelector('#expense-percents-wrapper')

const monthEl = document.querySelector('#month')
const yearEl = document.querySelector('#year')

const priceFormater = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
})

function insertTestData() {
    const testData = [
        {type: 'inc', title: 'Freelance', value: 1500},
        {type: 'inc', title: 'lance', value: 300},
        {type: 'inc', title: 'reelance', value: 1000},
        {type: 'inc', title: 'Freelance', value: 200},

        {type: 'exp', title: 'ance', value: 500},
        {type: 'exp', title: 'Flance', value: 300},
        {type: 'exp', title: 'reelance', value: 100},
        {type: 'exp', title: 'Frlnc', value: 200},
    ]

    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    const randomIndex = getRandomInt(testData.length)

    const randomData = testData[randomIndex]

    type.value = randomData.type
    title.value = randomData.title
    value.value = randomData.value
}

function clearForm() {
    form.reset()
}

function calcBudget() {
        
    const totalIncome = budget.reduce(function(total, element) {
        if(element.type === 'inc'){
            return total + element.value
        } else {
            return total
        }
    }, 0)

    const totalExpense = budget.reduce(function(total, element) {
        if(element.type === 'exp'){
            return total + element.value
        } else {
            return total
        }
    }, 0)

    const totalBudget = totalIncome - totalExpense

    let expensePercents = 0

    if(totalIncome) {
        expensePercents = Math.round((totalExpense * 100) / totalIncome)
    }

    // budgetEl.innerHTML = totalBudget
    budgetEl.innerHTML = priceFormater.format(totalBudget)
    // totalIncomeEl.innerHTML = totalIncome
    totalIncomeEl.innerHTML = '+ ' + priceFormater.format(totalIncome)
    // totalExpenseEl.innerHTML = totalExpense
    totalExpenseEl.innerHTML = '- ' + priceFormater.format(totalExpense)

    if(expensePercents) {
        const html = `<div class="badge">${expensePercents}%</div>`
        percentsWrapper.innerHTML = html
    } else {
        percentsWrapper.innerHTML = ''
    }
    
    
    
}


function displayMonth() {
    const now = new Date()
    const year = now.getFullYear()

    const timeFormater = new Intl.DateTimeFormat('ru-RU', {
        month: 'long'
    })
    const month = timeFormater.format(now)

    monthEl.innerHTML = month
    yearEl.innerHTML = year
}
// Actions
displayMonth()
insertTestData()
calcBudget()

// Добавление новой записи
form.addEventListener('submit', function(e){
    e.preventDefault();
    // Проверка формы на заполненность
    if(title.value.trim() === '') {
        title.classList.add('form__input--error')
        return  
    } else {
        title.classList.remove('form__input--error')
    }

    if(value.value.trim() === ''|| +value.value <= 0) {
        value.classList.add('form__input--error')
        return  
    } else {
        value.classList.remove('form__input--error')
    }

    // Расчёт id
    let id = 1
    if(budget.length > 0) {
        // Последний элемент в массива
        const lastElement = budget[budget.length - 1]
        // id последнего элемента
        const lastElId = lastElement.id
        // сформировать новый id = старый + 1
        id = lastElId + 1
    }
    
    const record = {
        id: id,
        type: type.value,
        title: title.value.trim(),
        value: +value.value
    }

    // Добавляем в данные
    budget.push(record)

    // Отображаем Доход на странице

    if (record.type === 'inc') {
        const html = `
            <li data-id="${record.id}" class="budget-list__item item item--income">
                <div class="item__title">${record.title}</div>
                <div class="item__right">
                    <div class="item__amount">+ ${priceFormater.format(record.value)}</div>
                    <button class="item__remove">
                        <img
                            src="./img/circle-green.svg"
                            alt="delete"
                        />
                    </button>
                </div>
            </li>
        `
        incomesList.insertAdjacentHTML('afterbegin', html)
    }

    if (record.type === 'exp') {
        const html = `
        <li data-id="${record.id}" class="budget-list__item item item--expense">
            <div class="item__title">${record.title}</div>
            <div class="item__right">
                <div class="item__amount">
                    - ${priceFormater.format(record.value)}
                </div>
                <button class="item__remove">
                    <img src="./img/circle-red.svg" alt="delete" />
                </button>
            </div>
        </li>
        `
        expensesList.insertAdjacentHTML('afterbegin', html)
    }
    

    

    // Пересчитать бюджет
    calcBudget()

    clearForm()
    insertTestData()
    
    
})

// Удаление записи
document.body.addEventListener('click', function(e) {
    // кнопка удалить
    if(e.target.closest('button.item__remove')) {
        const recordElement = e.target.closest('li.budget-list__item')

        const id = +recordElement.dataset.id
        
        const index = budget.findIndex(function(element) {
            if(id === element.id) {
                return true
            }
        })
        // Удаление из массива
        budget.splice(index, 1)
        // удаление с страницы
        recordElement.remove()
        // Пересчитать бюджет
        calcBudget()
    }
})
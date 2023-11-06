import * as model from './model.js'
import * as view from './view.js'


// Actions
init()



function addEventListeners() {
    view.elements.form.addEventListener('submit', createRecord)

    document.body.addEventListener('click', function (e) {

        // Кнопка удалить
        if (e.target.closest('button.item__remove')) {
    
            deleteRecord(e)
        }
    })
}


// Добавление
function createRecord(e){
	e.preventDefault();
    
    // Проверяем данные из формы
    const checkResult = view.checkEmptyFields()
    
    if (checkResult === false) return
    // сокращенный вариант
    // if(!view.checkEmptyFields()) return 
    
    // Получаем дынные из формы 
    const dataFromForm = view.getFormData()

    const record = model.createRecord(dataFromForm)

    view.renderRecord(record)

    // Посчитать бюджет
    view.renderBudget(model.calcBudget())

    view.clearForm();
    insertTestData();
}

// Удаление
function deleteRecord(e) {
    const id = view.removeRecord(e)

    model.deleteRecord(id)

    // Посчитать бюджет
    view.renderBudget(model.calcBudget())
}


// Functions

function insertTestData () {
	
    const randomData = model.getTestData()

    view.renderTestData(randomData)
    
}


function displayMonth() {
    
    const monthYear = model.getMonthYear()

    view.renderMonth(monthYear.month, monthYear.year)
}


function init() {
    displayMonth();
    insertTestData();
    view.renderBudget(model.calcBudget());
    addEventListeners();
}
import Model from "./model.js";
import View from "./view.js";

const model = new Model()
const view = new View(model.tasks)

// Добавление задачи
view.elements.form.addEventListener('submit', function(e) {
    e.preventDefault()


    const newTask = model.addTask(view.elements.input.value)

    view.renderTask(newTask)

    view.clearTask()
})

// Нажатие на "чекбокс" или кнопку удалить
view.elements.tasksList.addEventListener('click', function(e) {
    if(e.target.getAttribute('type') === "checkbox") {
        const id = e.target.closest('.todo-item').dataset.id
        const task = model.findTask(id)
        model.changeStatus(task)

        view.changeStatus(task)
    }

    if(e.target.hasAttribute('data-delete')) {
        const id = e.target.closest('.todo-item').dataset.id
        const task = model.findTask(id)
        model.removeTask(task)
        view.removeTask(task)
    }

})









// model.addTask('Заверстать шаблон')
// model.addTask('Написать скрипт')
// model.addTask('Записать урок')
// console.log(model);

// model.doneTask(model.tasks[1])
// console.log(model);

// model.removeTask(model.tasks[0])
// console.log(model);

// model.doneTask(model.tasks[1])

// console.log(model);
// Добавление новой задачи

const form = document.getElementById('addForm')
const itemsList = document.getElementById('items')
const filter = document.getElementById('filter')

form.addEventListener('submit', addItem)

function addItem(e) {
    // отменяем отправку формы, которая стоит по умолчанию
    e.preventDefault();
    
    // Находим инпут для ввода задачи
    const newItemInput = document.getElementById("newItemText")
    // Получаем текст из инпута
    const newItemText = newItemInput.value
    console.log('fired');

    // Создаём элемент для новой задачи
    const newElement = document.createElement('li')
    // Добавляем ему класс
    newElement.className = "list-group-item"

    // добавляем текст в новый элемент
    const newTextNode = document.createTextNode(newItemText)

    // добавляем в тэг
    newElement.appendChild(newTextNode)

    // Создаём кнопку
    const deleteBtn = document.createElement('button')
    // Добавляем текст в кнопку
    deleteBtn.appendChild(document.createTextNode("Удалить"))
    // Добавляем CSS class в кнопку
    deleteBtn.className = "btn btn-light btn-sm float-right"
    // Добавляем дата атрибут
    deleteBtn.dataset.action = "delete"
    // Помещаем кнопку внутрь тэга li
    newElement.appendChild(deleteBtn)

    // Добавляем новую задачу в список со всеми задачами
    itemsList.prepend(newElement)
    // Очистим поле ввода
    newItemInput.value = ''
}

// Удаление элемента

itemsList.addEventListener('click', removeItem)

function removeItem(e) {
    if(e.target.hasAttribute("data-action") && 
    e.target.getAttribute('data-action')== "delete"){
        if(confirm("Вы точно хотите удалить заметку?")) {
            e.target.parentNode.remove()
        }
    }
}

// Фильтрация списка дел

// Прослушивание ввода
filter.addEventListener('keyup', filterItems)

// функция для прослушивания
function filterItems(e) {
    // Получаем "строку" для поиска
    let searchedTesxt = e.target.value.toLowerCase()

    // 1.Получаем список всех задач
    const items = itemsList.querySelectorAll('li')

    // 2.Перебераем циклом все найденные теги li с задачами
    items.forEach( function(item) {
        // Достаём текст задачи из списка и переводим в нижний регистр
        const itemText = item.firstChild.textContent.toLowerCase()

        // Проверяем вхождение искомой подстроки в тексте задачи
        if (itemText.indexOf(searchedTesxt) != -1) {
            // Если есть вхождение то показываем элемент с задачей
            item.style.display = "block"
        } else {
            // если нет то скрываем
            item.style.display = "none"
        }
    })
}
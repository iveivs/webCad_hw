var form = document.getElementById("addForm");
var itemsList = document.getElementById("items");
var filter = document.getElementById("filter");


// Получаю данные из ЛокСт(если там пусто, то чтоб не приходдил null мы запускаем следущую ф-ю renderLocalStorageData)
const locStorArr = renderLocalStorageData()

function renderLocalStorageData() {
    const data = localStorage.getItem("tasks")
    console.log(data);
    if (data) {
        return JSON.parse(data);
    } else {
        return []
    }
}

// Перебераю массив для рендера
function renderLocStor(arr){
    arr.forEach(e => {
        renderFromArr(e.id, e.task)
    })
}

renderLocStor(locStorArr)

// Добавление новой задачи прослушка события
form.addEventListener("submit", addItem);

// Удаление элемента - прослушка клика
itemsList.addEventListener("click", removeItem);

// Фильтрация списка дел - прослушка ввода
filter.addEventListener("keyup", filterItems);

// Добавление новой задачи функция
function addItem(e) {
    // Отменяем отправку формы
    e.preventDefault();

    // Находим инпут с текстом для новой задачи
    var newItemInput = document.getElementById("newItemText");
    // Получаем текст из инпута
    var newItemText = newItemInput.value;

    // мой код для создания id и для отправки лио в массив, либо в лс
    let id = locStorArr.length > 0 ? locStorArr[locStorArr.length - 1].id + 1 : 1

    // создаю объект для добавления в массив
    const tempObj = {
        id: id,
        task: newItemText
    }
    locStorArr.push(tempObj)
    // обновляю данные в loc.st.
    localStorage.setItem('tasks', JSON.stringify(locStorArr))
    //  - - - - - - -
    // запускаю рендер для новой задачи
    renderFromArr(id, newItemText)
    
    // Очистим поле добавления новой задачи
    newItemInput.value = "";
}

// вынес рендер отдельно(в отличии от стартового кода)
function renderFromArr(id, task){
    var newElement = document.createElement("li");
    newElement.className = "list-group-item";

    // Добавим текст в новый элемент
    var newTextNode = document.createTextNode(task);
    newElement.appendChild(newTextNode);

    // добавил дата атрибут для индекса
    newElement.dataset.index = id

     // Создаем кнопку
    var deleteBtn = document.createElement("button");
    // Добавляем текст
    deleteBtn.appendChild(document.createTextNode("Удалить"));
    // Добавляем CSS class
    deleteBtn.className = "btn btn-light btn-sm float-right";
    // Добавляем data атрибут
    deleteBtn.dataset.action = "delete";

    // Помещаем кнопку внутрь тега li
    newElement.appendChild(deleteBtn);
    // console.log("addItem -> newElement", newElement);

    itemsList.prepend(newElement);
}


// Удаление элемента - ф-я
function removeItem(e) {
    if (
        e.target.hasAttribute("data-action") &&
        e.target.getAttribute("data-action") == "delete"
    ) {
        // код для всплывающего окна(закоментил, чтоб не мешал)
        // if (confirm("Удалить задачу?")) {
        // }

        // получаю индекс из родительского элемента кнопки
        const temp = +e.target.parentNode.getAttribute('data-index')
        // перебираю массив
        locStorArr.forEach((e, index) => {
            if(e.id == temp) {
                // удаляю найденный элемент из массива
                locStorArr.splice(index, 1)
                // обновляю лс
                localStorage.setItem('tasks', JSON.stringify(locStorArr))
            }
        })
        e.target.parentNode.remove();
    }
}

// Фильтрация списка дел ф-я
function filterItems(e) {
    // Получаем фразу для поиска и переводим ее в нижний регистр
    var searchedText = e.target.value.toLowerCase();

    // 1. Получаем списко всех задач
    var items = itemsList.querySelectorAll("li");

    // 2. Перебираем циклом все найденные теги li с задачами
    items.forEach(function(item) {
        // Получаем текст задачи из списка и переводим его в нижний регистр
        var itemText = item.firstChild.textContent.toLowerCase();

        // Проверяем вхождение искомой подстроки в текст задачи
        if (itemText.indexOf(searchedText) != -1) {
            // Если вхождение есть - показываем элемент с задачей
            item.style.display = "block";
        } else {
            // Если вхождения нет - скрываем элемент с задачей
            item.style.display = "none";
        }
    });
}















    // // Создаем элемент для новой задачи
    // var newElement = document.createElement("li");
    // newElement.className = "list-group-item";

    // newElement.dataset.index = id
    // // Добавим текст в новый элемент
    // var newTextNode = document.createTextNode(newItemText);
    // newElement.appendChild(newTextNode);

    // // Создаем кнопку
    // var deleteBtn = document.createElement("button");
    // // Добавляем текст
    // deleteBtn.appendChild(document.createTextNode("Удалить"));
    // // Добавляем CSS class
    // deleteBtn.className = "btn btn-light btn-sm float-right";
    // // Добавляем data атрибут
    // deleteBtn.dataset.action = "delete";

    // // Помещаем кнопку внутрь тега li
    // newElement.appendChild(deleteBtn);
    // console.log("addItem -> newElement", newElement);

    // // Добавляем новую задачу в список со всеми задачами
    // itemsList.prepend(newElement);
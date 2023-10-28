const list = document.querySelector('.list-group')
const listItem = document.querySelectorAll('.list-group-item')
let input = document.getElementById('newItemText')
let addBtn = document.querySelector('.btn-dark')
let inputFilter = document.getElementById('filter')


const listArr = renderLocalStorageData()

listArr.forEach(element => {
    renderListItem(element)
});

addBtn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value.trim().length === 0) {
        return
    }
    

    // Генерируем id
    // более старый способ
    // let id = listArr.length > 0 ? listArr[listArr.length - 1].id + 1 : 1
    // более новый способ
    let id = listArr.length > 0 ? listArr.at(-1).id + 1 : 1
    const newObj = {
        name: input.value,
        id: id,
    }
    renderListItem(newObj)

    listArr.push(newObj)

    saveToLocStor()
    input.value = ''
    
})
list.addEventListener('click', e => {
    let target = e.target
    let parent = target.parentElement
    
    if(target.getAttribute('data-action') == "delete") {
        parent.remove()
        
        const taskId = parent.dataset.id

        const index = listArr.findIndex( task => task.id === +taskId)

        listArr.splice(index, 1)

        saveToLocStor()

        // const newListArr = listArr.filter((task) => task.id === +taskId)
        
        // localStorage.setItem('tasks', JSON.stringify(newListArr)) 

    }
})

function renderListItem(value) {
    list.insertAdjacentHTML('beforeend', getNoteTemplate(value))
}

function saveToLocStor() {
    localStorage.setItem("tasks", JSON.stringify(listArr))
}

function renderLocalStorageData() {
    const data = localStorage.getItem("tasks")
    console.log(data);
    if (data) {
        return JSON.parse(data);
    } else {
        return []
    }
}


function getNoteTemplate(value) {
    return `
    <li data-id="${value.id}" class="list-group-item">
        <span class="find-span">${value.name}</span>
    <button
        data-action="delete"
        type="button"
        class="btn btn-light btn-sm float-right"
    >
        Удалить
    </button>
    </li>
    `
}

// Поиск по задачам
inputFilter.addEventListener('input', filterTasks)

function filterTasks(event) {
    let searchedText = event.target.value.toLowerCase()

    const items = list.querySelectorAll('li')
    items.forEach( item => {
        const itemText = item.querySelector('.find-span').textContent.toLowerCase()

        if(itemText.indexOf(searchedText) != -1) {
            item.classList.add('visible')
            item.classList.remove('hidden')
            
        } else {
            item.classList.add('hidden')
            item.classList.remove('visible')
        }
    })
}

// localStorage.clear()

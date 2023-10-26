const list = document.querySelector('.list-group')
const listItem = document.querySelectorAll('.list-group-item')
let input = document.getElementById('newItemText')
let addBtn = document.querySelector('.btn-dark')


const listArr = []

addBtn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value.length === 0) {
        return
    }
    renderListItem()
    listArr.push(input.value)
    // console.log(listArr);  
    
    let tempString = input.value
    localStorage.setItem(listArr.length, tempString)
    input.value = ''
    
})
list.addEventListener('click', e => {
    let target = e.target
    let parent = target.parentElement
    console.log(parent.childNodes[0].textContent);
    // document.querySelector('.list-group-item').firstChild.textContent
    if(target.getAttribute('data-action') == "delete") {
        parent.remove()
        for(let i = 1; i <= localStorage.length; i++) {
            console.log(localStorage.getItem(i));
            if (localStorage.getItem(i) == parent.childNodes[0].textContent){
                console.log('test');
                localStorage.removeItem(i)
            }
            // Здесь я хотел проитерироваться по localStorage, 
            // но почему-то не могу зайти в if вроде и там и там строка 
            // но видимо что-то я не учёл
            
        }
        // localStorage.removeItem()
    }
})

function renderListItem() {
    list.insertAdjacentHTML('beforeend',
    getNoteTemplate(input.value))
    getNoteTemplate()
}

function renderLocalStorageData() {
    for(let i = 1; i <= localStorage.length; i++){
        // console.log(localStorage.getItem(i));
        list.insertAdjacentHTML('beforeend',
        getNoteTemplate(localStorage.getItem(i)))
    }
}
renderLocalStorageData()

function getNoteTemplate(value) {
    return `
    <li class="list-group-item">
        ${value}
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


// localStorage.clear()

import * as tabView from './table.view.js'
import * as model from './../model.js'


const dataFromLocStor = model.locStorArr

dataFromLocStor.forEach( (e) => {
    tabView.renderTab(e)
})


tabView.elements.tableWrapper.addEventListener('click', (e) => {
    let id = tabView.getID(e.target)
    
    localStorage.setItem('editId', id)
})


tabView.elements.productSelect.addEventListener('input', function (e){
    e.preventDefault()
    // не мой вариант
    const filter = model.changeFilter('product', this.value)
    const filterRec = model.filterFilterRequest(filter)

    tabView.elements.tableWrapper.innerHTML = " "
    filterRec.forEach((el)=> {
        tabView.renderTab(el)
    })
    // старый вариант
    // const findProduct = tabView.elements.productSelect.value
    // tabView.getCourseList(findProduct)
})


tabView.elements.btnWrapper.addEventListener('click', function (e) {
    const filter = model.changeFilter('status', e.target.dataset.value)
    const filterRec = model.filterFilterRequest(filter)

    tabView.elements.tableWrapper.innerHTML = " "
    filterRec.forEach((el)=> {
        tabView.renderTab(el)
    })
    // старый вариант
    // const dataValue = e.target.dataset.value
    // tabView.getStatusList(dataValue)
})


tabView.elements.leftBar.addEventListener('click', (e) => {
    const filter = model.changeFilter('status', e.target.dataset.value)
    const filterRec = model.filterFilterRequest(filter)

    tabView.elements.tableWrapper.innerHTML = " "
    filterRec.forEach((el)=> {
        tabView.renderTab(el)
    })
    
    tabView.elements.leftBarItems.forEach( e => {
        e.classList.remove('active')
    })
    e.target.classList.add('active')
    // старый вариант
    // const dataValue = e.target.dataset.value
    // tabView.getStatusList(dataValue)
})

tabView.showNewOrderCount()









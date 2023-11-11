import * as tabView from './table.view.js'
import * as model from './../model.js'


const dataFromLocStor = model.locStorArr

dataFromLocStor.forEach( (e) => {
    tabView.renderTab(e)
})

// не знаю, это относится к вью, к контролеру или к модели ?
// немного по колхозному сделал, т.е если мне нужно будет обратиться
// к id редактируемой заявки, то я буду обращаться к последнему значению в массиве 
tabView.elements.tableWrapper.addEventListener('click', (e) => {
    let temp = e.target.parentNode.parentNode.getAttribute('data-index')
    model.tempId.push(temp)
    console.log(model.tempId);
})







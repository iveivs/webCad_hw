import * as model from './../model.js'
import * as editView from './edit.view.js'



const idNumberfromLocStor = +localStorage.getItem('editId')
const userData = model.findDataLocalStorage(idNumberfromLocStor)
console.log(userData);
editView.renderCard(userData)


editView.elements.form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = editView.formData()
    model.chengeDataLocalStorage(formData)
})





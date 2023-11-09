import * as formView from './form.view.js'
import * as formData from './form.test-data.js'

// console.log(formView.elements.inputName);
// console.log(formData.getTestData());

let locStorArr = JSON.parse(localStorage.getItem('tasks'))
console.log(locStorArr);



formView.elements.btnOrder.addEventListener('click', (e) => {
    e.preventDefault()
    
    let id = locStorArr.length > 0 ? locStorArr[locStorArr.length - 1].id + 1 : 1

    const userInfo = {
        id: id,
        nameValue: formView.elements.inputName.value,
        phoneValue: formView.elements.inputPhone.value,
        emailValue: formView.elements.inputEmail.value,
        product: formView.elements.product.value
    }
    autoComplite(formData.getTestData())
    saveToLocalStorage(userInfo)
})


function autoComplite(dataObj) {
    formView.elements.inputName.value = dataObj.name
    formView.elements.inputPhone.value = dataObj.phone
    formView.elements.inputEmail.value = dataObj.email
    formView.elements.product.value = dataObj.product
}
autoComplite(formData.getTestData())


// function getInputValue(){
    
//     return {
//         nameValue: formView.elements.inputName.value,
//         phoneValue: formView.elements.inputPhone.value,
//         emailValue: formView.elements.inputEmail.value,
//         product: formView.elements.product.value 
//     }
// }
// console.log(getInputValue());

function saveToLocalStorage(obj) {
    
    localStorage.setItem('userInfo', JSON.stringify(obj))
}


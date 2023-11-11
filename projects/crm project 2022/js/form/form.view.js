const elements = {
    form: document.querySelector('#form'),
    inputName: document.querySelector('#name'),
    inputPhone: document.querySelector('#phone'),
    inputEmail: document.querySelector('#email'),
    product: document.querySelector('#product'),
    btnOrder: document.querySelector('.btn')
}

const formData = () => {
    return {
            name: elements.inputName.value,
            phone: elements.inputPhone.value,
            email: elements.inputEmail.value,
            product: elements.product.value
    }
}

function autoComplite(dataObj) {
    elements.inputName.value = dataObj.name
    elements.inputPhone.value = dataObj.phone
    elements.inputEmail.value = dataObj.email
    elements.product.value = dataObj.product
}

export {
    elements,
    formData,
    autoComplite
}
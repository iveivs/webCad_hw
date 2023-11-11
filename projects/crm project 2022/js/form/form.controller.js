import * as formView from './form.view.js'
import * as formData from './form.test-data.js'
import * as model from './../model.js'


formView.elements.btnOrder.addEventListener('click', function(e) {
    e.preventDefault()

    const userInfo = formView.formData()

    model.addTask(userInfo)
    
    const testData = formData.getTestData()
    formView.autoComplite(testData)
    
})

const testData = formData.getTestData()
formView.autoComplite(testData)






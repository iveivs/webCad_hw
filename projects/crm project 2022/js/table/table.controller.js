import * as tabView from './table.view.js'
import * as model from './../model.js'


const dataFromLocStor = model.locStorArr

dataFromLocStor.forEach( (e) => {
    tabView.renderTab(e)
})


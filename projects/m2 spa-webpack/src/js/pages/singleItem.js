import singleItem from "./../singleItem/singleItemController"

export default function (state) {
    
    document.querySelector('#app').innerHTML = ""

    // запускаем компонент singleItem
    singleItem(state)
}
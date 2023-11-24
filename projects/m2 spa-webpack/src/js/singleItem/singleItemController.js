import SingleItem from './singleItemModel'
import * as view from './singleItemView'

export default async function(state) {

    // создаём новый объект SingleItem
    state.singleItem = new SingleItem(state.routeParams)

    // получаем данные с сервера
    await state.singleItem.getItem()

    // отрисовываем разметку для отдельного объекта
    view.render(state.singleItem.result, state.favourites.isFav(state.singleItem.id))
    // - - - - - - - - - - - - - - 
    // запуск прослушки событий
    // - - - - - - - - - - - - - -  

    // открытие модалки
    document.querySelector('.button-order').addEventListener('click', () =>{
        view.showModal()
    }) 

    // закрытие модалки по кнопке
    document.querySelector('.modal__close').addEventListener('click', () =>{
        view.hideModal()
    }) 

    // закрытие модалки по оверлею
    document.querySelector('.modal-wrapper').addEventListener('click', (e) =>{
        if(e.target.closest('.modal')) {
            return null
        } else {
            view.hideModal()
        }
    }) 

    // отправка формы
    document.querySelector('.modal__form').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = view.getInput()

        await state.singleItem.submitForm(formData)

        const response = state.singleItem.response

        if(response.message === 'Bid Created') {
            alert('Ваша заявка успешно добавлена')
            view.hideModal()
            view.clearInput()
        } else if(response.message === 'Bid Not Created'){
            response.errors.forEach((item) => {
                alert(item)
            })
        }
    })
    
    // Клик по кнопке добавить в избранное
    document.querySelector('#addToFavouriteBtn').addEventListener('click', () => {
        
        state.favourites.toggleFav(state.singleItem.id)

        view.toggleFavouriteButton(state.favourites.isFav(state.singleItem.id))
    })
}
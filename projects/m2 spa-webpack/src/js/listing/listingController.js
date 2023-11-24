import * as view from './listingView'

export default function(state) {
    // Рендер контейнера для карточек
    view.render()

    // Рендер карточек
    state.results.forEach(function(item){

        view.renderCard(item)
    })

    state.emitter.subscribe('event:render-listing', ()=> {
        // очищаем контейнер с карточками
        view.clearListingContainer()

        // отрендерить карточки
        state.results.forEach(function(item){

            view.renderCard(item)
        })
    })
}
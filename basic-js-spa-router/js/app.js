const HomeComponent = {
    render: function(){
        return `
        <section>
        <h1>Главная страница</h1>
        <p>Lorem ipsum....</p>
        </section>
        `;
    }
}

const ItemComponent = {
    render: function () {
        return `
        <section>
        <h1>Страница Объекта</h1>
        <p>Lorem ipsum....</p>
        </section>
        `;
    },
};

const FavsComponent = {
    render: function () {
        return `
        <section>
        <h1>Избранное</h1>
        <p>Lorem ipsum....</p>
        </section>
        `;
    },
};

const BidsComponent = {
    render: function () {
        return `
        <section>
        <h1>Заявки</h1>
        <p>Lorem ipsum....</p>
        </section>
        `;
    },
};

const ErrorComponent = {
    render: function () {
        return `
        <section>
        <h1>Ошибка 404</h1>
        <p>Lorem ipsum....</p>
        </section>
        `;
    },
};

// Маршруты
const routes = [
    { path: '/', component: HomeComponent },
    { path: 'item', component: ItemComponent },
    { path: 'favourites', component: FavsComponent },
    { path: 'bids', component: BidsComponent }
];

// Поиск компонента в Маршрутах на основании запроса
function findComponentByPath(path, routes){
    return routes.find(function(route){
        return route.path === path;
    });
}

// Функция Роутер
function router () {

    // Split path to array
    const pathArray = location.hash.split('/');

    // Set current path
    let currentPath = pathArray[0] === '' ? '/' : pathArray[1];
    currentPath = currentPath === '' ? '/' : currentPath; // item // bids

    // Выбираем компонент для указанного адреса, либо компонент с ошибкой
    const { component = ErrorComponent } = findComponentByPath(currentPath, routes) || {};

    // Отображение компонента на старнице / Render component
    document.querySelector('#app').innerHTML = component.render();

}

// Прослушка событий и запуск роутера
window.addEventListener('load', router);
window.addEventListener('hashchange', router);





/*
//localhost:3000/index.html
http: //localhost:3000/index.html/#/object
http: //localhost:3000/index.html/#/favourites
http: //localhost:3000/index.html/#/bids
*/

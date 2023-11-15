const elements = {
    form: document.querySelector('#form'),
    card: document.querySelector('.card'),
    idNumber: document.querySelector('#number'),
    date: document.querySelector('#date'),
    product: document.querySelector('#product'),
    userName: document.querySelector('#name'),
    email: document.querySelector('#email'),
    phone: document.querySelector('#phone'),
    status: document.querySelector('#status'),
}

const productOptions = [
    {
        name: "Курс по вёрстке",
        value: "course-html"
    },
    {
        name: "Курс по JavaScript",
        value: "course-js"
    },
    {
        name: "Курс по VUE JS",
        value: "course-vue"
    },
    {
        name: "Курс по PHP",
        value: "course-php"
    },
    {
        name: "Курс по WordPress",
        value: "course-wordpress"
    }
]

const statusOptions = [ 
    {
        name: "Новая",
        value: "new"
    },
    {
        name: "В работе",
        value: "inwork"
    },
    {
        name: "Завершена",
        value: "complete"
    }
]

function renderCard(obj) {
    const html = `
    <div class="card-header">Данные о заявке</div>
        <div class="card-body">
            <div class="row mb-3">
                <div class="col-md-2">
                    <strong>ID:</strong>
                </div>
                <div class="col">Заявка №<span id="number">${obj.id}</span></div>
                <input name="id" type="hidden" id="id">
            </div>

            <div class="row mb-3">
                <div class="col-md-2">
                    <strong>Дата создания:</strong>
                </div>
                <div class="col" id="date">${obj.date}</div>
            </div>

            <div class="row mb-3">
                <div class="col-md-2">
                    <strong>Продукт:</strong>
                </div>
                <div class="col">
                    <select id="product" name="product" class="custom-select" >
                    ${getSelectData(productOptions, obj.product)}
                        
                    </select>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-md-2">
                    <strong>Имя:</strong>
                </div>
                <div class="col">
                    <input
                        type="text"
                        class="form-control"
                        value="${obj.name}"
                        id="name"
                        name="name"
                    />
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-md-2">
                    <strong>Email:</strong>
                </div>
                <div class="col">
                    <input
                        type="text"
                        class="form-control"
                        value="${obj.email}"
                        id="email"
                        name="email"
                        />
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-md-2">
                    <strong>Телефон:</strong>
                </div>
                <div class="col">
                    <input
                        type="text"
                        class="form-control"
                        value="${obj.phone}"
                        id="phone"
                        name="phone"
                        />
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-md-2">
                    <strong>Статус заявки:</strong>
                </div>
                <div class="col">
                    <select class="custom-select" id="status" name="status">
                    ${getSelectData(statusOptions, obj.status)}
                    </select>
                </div>
            </div>
        </div>
    `
    elements.card.insertAdjacentHTML('afterbegin', html)
}



function getSelectData(arrey, objProperty) { 
    return arrey.map((option) => {
        return `<option value=${`${option.value}`} ${option.value === objProperty ? 'selected' : ' '
    }> ${option.name} 
        </option>`
    }).join(" ")
}

const formData = () => {
    return {
        id: +document.querySelector('#number').textContent,
        date: document.querySelector('#date').textContent,
        status: document.querySelector('#status').value,
        name: document.querySelector('#name').value,
        phone: document.querySelector('#phone').value,
        email: document.querySelector('#email').value,
        product: document.querySelector('#product').value
    }
}


export {
    elements,
    renderCard,
    formData
}

// const formData = () => {
//     console.log('test');
//     return {
//         id: elements.idNumber.value,
//         date: elements.date.value,
//         status: elements.status.value,
//         name: elements.userName.value,
//         phone: elements.phone.value,
//         email: elements.email.value,
//         product: elements.product.value
//     }
// }


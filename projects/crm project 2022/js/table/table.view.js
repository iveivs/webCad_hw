const elements = {
    tableWrapper: document.querySelector('#tbody'),
    productSelect: document.querySelector('#productSelect'),
    btnWrapper: document.querySelector('#topStatusBar'),
    leftBar: document.querySelector(".left-panel__navigation"),
    newBadge: document.querySelector('.badge'),
    leftBarItems: document.querySelectorAll('[data-role]')
}

function renderTab(obj){
    const productObj = {
        "course-html": 'Курс по верстке',
        "course-js": 'Курс по JavaScript',
		"course-vue": 'Курс по VUE JS',
		"course-php": 'Курс по PHP',
		"course-wordpress": 'Курс по WordPress'
    }
    const statusObj = {
        new: "Новая",
        inwork: "В работе",
        complete: "Завершена"
    }
    const classObj = {
        new: "badge-danger",
        complete: "badge-success",
        inwork: "badge-warning"
    }

    const html = `
    <tr data-index="${obj.id}" data-delete="delete">
        <th scope="row">${obj.id}</th>
        <td>${obj.date}</td>
        <td>${productObj[obj.product]}</td>
        <td>${obj.name}</td>
        <td>${obj.email}</td>
        <td>${obj.phone}</td>
        <td>
            <div class="badge badge-pill ${classObj[obj.status]}">${statusObj[obj.status]}</div>
        </td>
        <td>
            <a  href="edit.html">Редактировать</a>
        </td>
    </tr>
    `
    elements.tableWrapper.insertAdjacentHTML('afterbegin', html)
}

function getID(eTarget) {
    return eTarget.closest("tr").getAttribute('data-index')
}


// старый вариант
// const arrForDoubleSearch = []

// function getCourseList(course) {
//     if(arrForDoubleSearch.length > 0){
//         let tempDoublSerchArr = arrForDoubleSearch.filter(elem => {
//             return elem.product == course
//         })
//         elements.tableWrapper.innerHTML = ' '
//         tempDoublSerchArr.forEach( e => {
//             renderTab(e)
//         })
//         if (course == 'all') {
//             tempDoublSerchArr.forEach(e => {
//                 renderTab(e)
//                 console.log('test');
//             })
//         }
//     } else {
//         let locStArr = JSON.parse(localStorage.getItem('userInfo'))
//         let findedArr = locStArr.filter(elem => {
//             // данное условие я создал для того, чтоб пушить
//             // в временный массив
//             if (elem.product == course) {
//                 arrForDoubleSearch.push(elem)
//             }
//             return elem.product == course
//         })
//         elements.tableWrapper.innerHTML = ' '
//         findedArr.forEach(e => {
//             renderTab(e)
//         })
//         if (course == 'all') {
//             locStArr.forEach(e => {
//                 renderTab(e)
//             })
//         }
//     }
    
// }


// старый вариант
// function getStatusList(status) {
//     if(arrForDoubleSearch.length > 0) {
//         let tempDoublSerchArr = arrForDoubleSearch.filter(elem => {
//             return elem.status == status
//         })
//         elements.tableWrapper.innerHTML = ' '
//         tempDoublSerchArr.forEach( e => {
//             renderTab(e)
//         })
//         if (status == 'all') {
//             tempDoublSerchArr.forEach(e => {
//                 renderTab(e)
//                 console.log('test');
//             })
//         }
    
//     } else {
//         let locStArr = JSON.parse(localStorage.getItem('userInfo'))
//         let findedArr = locStArr.filter(elem => {
//             if (elem.status == status) {
//                 arrForDoubleSearch.push(elem)
//             }
//             return elem.status == status
//         })
//         elements.tableWrapper.innerHTML = ' '
//         findedArr.forEach(e => {
//             renderTab(e)
//         })
//         if (status == 'all') {
//             locStArr.forEach(e => {
//                 renderTab(e)
//             })
//         }
//     }
    
// }



function showNewOrderCount() {
    let locStArr = JSON.parse(localStorage.getItem('userInfo'))
    let count = 0
    let newOrder = locStArr.reduce((acc, item) => {
        if(item.status == 'new'){
            count++
        }
    }, 0)
    elements.newBadge.innerHTML = count
}


export {
    elements,
    renderTab,
    getID,
    // getCourseList,
    // getStatusList,
    showNewOrderCount
}
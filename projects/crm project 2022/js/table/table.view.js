const elements = {
    tableWrapper: document.querySelector('#tbody'),
    productSelect: document.querySelector('#productSelect')
}

function renderTab(obj){
    const html = `
    <tr data-index="${obj.id}">
        <th scope="row">${obj.id}</th>
        <td>${obj.date}</td>
        <td>${obj.product}</td>
        <td>${obj.name}</td>
        <td>${obj.email}</td>
        <td>${obj.phone}</td>
        <td>
            <div class="badge badge-pill badge-danger">${obj.status}</div>
        </td>
        <td>
            <a href="#">Редактировать</a>
        </td>
    </tr>
    `
    elements.tableWrapper.insertAdjacentHTML('afterbegin', html)
}



export {
    elements,
    renderTab
}
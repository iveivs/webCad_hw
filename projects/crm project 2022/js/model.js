let locStorArr = checkLocalStorage()

function addTask(formData) {
    let id = locStorArr.length > 0 ? locStorArr[locStorArr.length - 1].id + 1 : 1

    const newObj = {
        id,
        date: new Date().toLocaleDateString(),
        status: "new",
        ...formData,
    }
    locStorArr.push(newObj)
    saveToLocalStorage(locStorArr)
}

const filter = {
    status: 'all',
    product: 'all'
}


function changeFilter(props, value) {
    filter[props] = value

    return filter
}

function filterFilterRequest(filter) {
    let filterRequest

    if(filter.product !== 'all') {
        filterRequest = locStorArr.filter((el) => el.product === filter.product)
    } else {
        filterRequest = [...locStorArr]
    }
    if(filter.status !== 'all') {
        filterRequest = filterRequest.filter(el => el.status === filter.status)
    }
    return filterRequest
}

function saveToLocalStorage(arr) {
    localStorage.setItem('userInfo', JSON.stringify(arr))
}


function getDataArrayLocalStorage() {
    return JSON.parse(localStorage.getItem('userInfo'))
}


function checkLocalStorage() {
    const data = localStorage.getItem('userInfo')
    if(data) {
        return JSON.parse(data)
    } else {
        return []
    }
}


function findDataLocalStorage(id) {
    // старый вариант
    // let arrFromLS = JSON.parse(localStorage.getItem('userInfo'))
    // let userInfo
    // let filtered = arrFromLS.filter( e => {
    //     if(e.id == id) {
    //         userInfo = e
    //     }
    // })
    // return userInfo

    // оптимизированный вариант
    return  locStorArr.find((e) => e.id == id)
}

function chengeDataLocalStorage(newUserInfo) {
    let dataArr = getDataArrayLocalStorage()
    dataArr.forEach((element, index )=> {
        if(newUserInfo.id == element.id){
            dataArr.splice(index, 1, newUserInfo)
        }
    saveToLocalStorage(dataArr)
    });
}

export {
    chengeDataLocalStorage,
    findDataLocalStorage,
    getDataArrayLocalStorage,
    addTask,
    locStorArr,
    changeFilter,
    filterFilterRequest
}
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
    saveToLocalStorage()
}

function saveToLocalStorage() {
    localStorage.setItem('userInfo', JSON.stringify(locStorArr))
}

function checkLocalStorage() {
    const data = localStorage.getItem('userInfo')
    if(data) {
        return JSON.parse(data)
    } else {
        return []
    }
}

let tempId = []

export {
    addTask,
    locStorArr,
    tempId
}
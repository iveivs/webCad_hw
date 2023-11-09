function getTestData() {
    const testData = [
        {name: 'name1', phone: 111222, email: 'name1@name.name', product: "course-js"},
        {name: 'name2', phone: 222444, email: 'name2@name.name', product: "course-php"},
        {name: 'name3', phone: 333666, email: 'name3@name.name', product: "course-html"},
        {name: 'name4', phone: 444444, email: 'name4@name.name', product: "course-js"},
        {name: 'name5', phone: 555444, email: 'name5@name.name', product: "course-html"},
    ]
    function getRandomInt (max) {
        return Math.floor(Math.random() * max);
    }

    const randomIndex = getRandomInt(testData.length);

    return testData[randomIndex];
}

export {
    getTestData,
}
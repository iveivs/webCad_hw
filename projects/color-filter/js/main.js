/*
Задание:
Сделать рабочий фильтр цветов.
При нажатии на один из цветов, круг с цветом - мы видим автомобиль, соответствующего цвета.
А активный цвет выделяется, за счет дополнительного CSS класса ".colorItem--active".

Работу сдать через CodePen.

Другие изображения автомобиля:
https://webcademy.ru/files/js2020/solaris/black.png
https://webcademy.ru/files/js2020/solaris/blue.png
https://webcademy.ru/files/js2020/solaris/graphite.png
https://webcademy.ru/files/js2020/solaris/orange.png
https://webcademy.ru/files/js2020/solaris/red.png
https://webcademy.ru/files/js2020/solaris/white.png
https://webcademy.ru/files/js2020/solaris/white-pure.png
*/
const imgHolder = document.querySelector('.imgHolder')
const colorsSelector = document.querySelector('.colorsSelector');
const colorItems = document.querySelectorAll('.colorItem ')
const imgList = [
    {name: 'colorBlue', src: 'https://webcademy.ru/files/js2020/solaris/blue.png'},
    {name: 'colorWhite', src: 'https://webcademy.ru/files/js2020/solaris/white.png'},
    {name: 'colorRed', src: 'https://webcademy.ru/files/js2020/solaris/red.png'},
    {name: 'colorBlack', src: 'https://webcademy.ru/files/js2020/solaris/black.png'},
    {name: 'colorWhitePure', src: 'https://webcademy.ru/files/js2020/solaris/white-pure.png'},
    {name: 'colorOrange', src: 'https://webcademy.ru/files/js2020/solaris/orange.png'},
    {name: 'colorGraphite', src: 'https://webcademy.ru/files/js2020/solaris/graphite.png'},
]
colorItems.forEach( (item) => {

    item.addEventListener('click', (e) => {
        e.preventDefault()

        colorItems.forEach( imgItem => {
            imgItem.classList.remove('colorItem--active')
        })
        item.classList.add('colorItem--active')
        imgList.forEach( elem => {
            if(elem.name == e.target.classList[1]){
                renderImg(elem.src)
            }
        })
        
})
}) 

function renderImg(srcString) {
    imgHolder.innerHTML = `
        <img src="${srcString}" alt="Автомобиль" />
    `
}


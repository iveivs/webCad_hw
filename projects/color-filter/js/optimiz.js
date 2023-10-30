
const imgHolder = document.querySelector('.imgHolder img')
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

colorsSelector.addEventListener('click', (e) => {
    if(e.target.classList.contains('colorItem')) {
        colorItems.forEach( (imgItem) => {
            imgItem.classList.remove('colorItem--active')
        })

        e.target.classList.add('colorItem--active')
        
        const imgItem = imgList.find( (el) => el.name == e.target.classList[1])

        imgHolder.src = imgItem.src
    }
})



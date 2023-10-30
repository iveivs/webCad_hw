console.log('Hello, world!)');
const cards = document.querySelectorAll('.plate')

let currentIndex = 0 // для перемещений

let currentCard = 0 // для прогресс бара 

// Скрываем кнопку "назад" на первой карточке

cards[0].querySelector('[data-nav="prev"]').remove()


// - - pravka
cards.forEach(item => {
    console.log(item);
    item.classList.add('none')
})
// Отображаем первую карточку
cards[currentIndex].classList.remove('none')
cards[currentIndex].classList.add('visible')

// Запускаем прогрессбар (0%)
updateProgressBar()


window.addEventListener('click', function(event) {

    // Движение вперёд
    if(event.target.closest('[data-nav="next"]')) {

        const result = checkOnAnswer(cards[currentIndex])
        const answersWrapper = cards[currentIndex].querySelector('[data-answers]')

        if(result){
            // Прогресс бар
            updateProgressBar('next')

            // Перемещение
            setTimeout(function() {
                // Скрываем текущую карточку
                cards[currentIndex].classList.remove('visible')
                cards[currentIndex].classList.add('none')
                currentIndex = currentIndex + 1

                // Показываем следущую карточку
                cards[currentIndex].classList.remove('none')
                cards[currentIndex].classList.add('visible')
                answersWrapper.classList.remove('required')
            }, 500 )
            

        } else {
            answersWrapper.classList.add('required')
        }
        
    }
    // Движение назад
    if(event.target.closest('[data-nav="prev"]')) {
        // Прогресс бар
        updateProgressBar('prev')

        setTimeout(function() {
            // Перемещение между карточками
            if(currentIndex === 0) return
            cards[currentIndex].classList.remove('visible')
            cards[currentIndex].classList.add('none')
            currentIndex = currentIndex - 1

            cards[currentIndex].classList.remove('none')
            cards[currentIndex].classList.add('visible')
        }, 500)
    }
})

function checkOnAnswer(cards) {
    // Проверка на радио кнопки
    console.log(cards);
    // находим все радио-кнопки
    const radioBtns = document.querySelectorAll('input[type="radio"]')

    if(radioBtns.length > 0) {
        for(let radio of radioBtns) {
            if(radio.checked) return true
            
        }
    }

    // Проверка на чекбоксы

    const checkBoxes = document.querySelectorAll('input[type="checkbox"]')

    if(checkBoxes.length > 0) {
        for(let checkBox of checkBoxes) {
            if(checkBox.checked) return true
        }
    }
    
}

function updateProgressBar(dirrection = 'start') {

    if(dirrection === 'next') {
        currentCard = currentCard + 1
    } else if (dirrection === 'prev') {
        currentCard = currentCard - 1
    }

    const progressValue = document.querySelectorAll('.progress__label strong')

    const pprogressLineBar = document.querySelectorAll('.progress__line-bar')

    const countableCards = document.querySelectorAll('[data-progress]').length

    const progress = Math.round( currentCard * 100 / countableCards)

    progressValue.forEach(function(item) {
        item.innerText = progress + '%'
    })

    pprogressLineBar.forEach(function(item) {
        item.style.width = progress + '%'
    })

}

// Маска для телефона

mask('#tel')

const submitForm = document.querySelector('#submitForm')
const telInput = document.querySelector('#tel')

submitForm.onclick = function() {
    if(telInput.value === '+' || telInput.value.length < 6 ) {
        telInput.value = ''
    }
}
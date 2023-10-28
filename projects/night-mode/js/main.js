const modeBtn = document.querySelector(".night-mode-btn") 
const body = document.querySelector("body")
modeBtn.addEventListener('click', (e) => {
    body.classList.toggle('night')
    
    if(e.target.textContent == 'Включить ночной режим'){
        e.target.textContent = 'Выключить ночной режим'
    } else {
        e.target.textContent = 'Включить ночной режим'
    }
})
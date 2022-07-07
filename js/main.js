const button = document.getElementById('icon')
const menu = document.getElementById('cards')

button.addEventListener('click', ()=>{
    menu.classList.toggle('active')
})
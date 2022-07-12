const button = document.getElementById('icon')
const menu = document.getElementById('cards')

button.addEventListener('click', ()=>{
    menu.classList.toggle('active')
})

const btnmenu = document.getElementById('btnicon')
const bannermenu = document.getElementById('principal')
const bannersearch = document.getElementById('search')

btnmenu.addEventListener('click', ()=>{
    bannermenu.classList.toggle('active')
    bannersearch.classList.toggle('active')
})

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let fechar = document.getElementById('fechar')
let album = document.getElementById('al')
let slide = document.getElementById('sl')
let mapa = document.getElementById('ma')
let overlay_menu = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})


fechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})
album.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})
slide.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})
mapa.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})
overlay_menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

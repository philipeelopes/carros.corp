let antButton = document.getElementById('ant')
let proxButton = document.getElementById('prox')
let container = document.querySelector('.container')
let itens = container.querySelectorAll('.list .item')
let indicadores = document.querySelector('.indicadores')
let dots = indicadores.querySelectorAll("ul li")


let active = 0
let firstPosition = 0
let lastPosition = itens.length - 1


proxButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    itens[active].classList.add('active')


}

antButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active - 1 < firstPosition ? lastPosition : active - 1
    itens[active].classList.add('active')

}